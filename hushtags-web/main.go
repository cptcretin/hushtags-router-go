package main

import (
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

	r.PathPrefix("/discover-tag").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/multiple-tags").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/single-tags").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/view-media").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/cart").Handler(rootHandler).Methods("GET,POST")
	r.PathPrefix("/store").Handler(rootHandler).Methods("GET,POST")
	r.PathPrefix("/report-content").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/report-successful").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/error").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/help").Handler(rootHandler).Methods("GET")
	r.PathPrefix("/author").Handler(rootHandler).Methods("GET")

	r.HandleFunc("/.well-known/assetlinks.json", serveAssetLinks).Methods("GET")
	r.HandleFunc("/privacy", servePrivacyPolicy).Methods("GET")
	r.HandleFunc("/eula", serveEula).Methods("GET")
	r.HandleFunc("/{tagHandle}", serveTag).Methods("GET")

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("www/")))
	n.Use(negroni.NewStatic(http.Dir("static/")))
	n.UseHandler(r)

	return &http.Server{Addr: ":" + os.Getenv("PORT"), Handler: n}
}

func serveTag(w http.ResponseWriter, r *http.Request) {
	h := mux.Vars(r)["tagHandle"]
	http.Redirect(w, r, "/discover-tag/"+h, http.StatusTemporaryRedirect)
}

func serveAssetLinks(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/assetlinks.json")
}

func servePrivacyPolicy(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/privacy.htm")
}

func serveEula(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/eula.pdf")
}
