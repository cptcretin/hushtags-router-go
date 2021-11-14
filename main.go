package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

type AppRootHandler struct{}

func (h AppRootHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "www/index.html")
}

func main() {
	server := CreateServer()

	log.Printf("Listening on %s...", server.Addr)
	server.ListenAndServe()
}

func CreateServer() *http.Server {
	r := mux.NewRouter().StrictSlash(false)
	rootHandler := AppRootHandler{}

	loadAppRoot(r, rootHandler)
	loadRedirects(r)

	r.HandleFunc("/{tagHandle}", serveTag)

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("www/")))

	n.UseHandler(r)

	return &http.Server{Addr: ":" + os.Getenv("PORT"), Handler: n}
}

func loadAppRoot(r *mux.Router, h http.Handler) {
	routes := struct {
		R []string `json:"root"`
	} {}

	if err := json.Unmarshal([]byte(os.Getenv("HT_WEB_ROUTER_ROUTES")), &routes); err != nil {
		log.Printf("WARNING: Could not read web routes: %v\r\n", err)
		return
	}

	for _, rt := range routes.R {
		r.PathPrefix(rt).Handler(h)
	}
}

func loadRedirects(r *mux.Router) {
	routes := struct {
		R []struct {
			Path string `json:"path"`
			Redirect string `json:"redirect"`
			Response int `json:"response"`
		} `json:"redirects"`
	} {}

	if err := json.Unmarshal([]byte(os.Getenv("HT_WEB_ROUTER_ROUTES")), &routes); err != nil {
		log.Printf("WARNING: Could not read web routes: %v\r\n", err)
		return
	}

	for _, rt := range routes.R {
		dir := rt.Redirect
		res := rt.Response

		r.HandleFunc(rt.Path, func(w http.ResponseWriter, r *http.Request) {
			http.Redirect(w, r, dir, res)
		})
	}
}

func serveTag(w http.ResponseWriter, r *http.Request) {
	h := mux.Vars(r)["tagHandle"]
	http.Redirect(w, r, "/discover/"+h, http.StatusTemporaryRedirect)
}
