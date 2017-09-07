package main

import (
    "log"
    "net/http"
    "os"
    
    "github.com/gorilla/mux"
    "github.com/urfave/negroni"
)

func main() {
	server := CreateServer()

	log.Printf("Listening on %s...", server.Addr)
	server.ListenAndServe()
}

func CreateServer() *http.Server {
	r := mux.NewRouter().StrictSlash(false)

    r.HandleFunc("/{tagHandle}", serveTag).Methods("GET")

	n := negroni.New()
    n.Use(negroni.NewStatic(http.Dir("www/")))
	n.UseHandler(r)

	return &http.Server{Addr: ":" + os.Getenv("PORT"), Handler: n}
}

func serveTag(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "www/index.html")    
}
