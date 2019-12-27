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

	r.PathPrefix("/install-app").Handler(rootHandler)
	r.PathPrefix("/discover-tag").Handler(rootHandler)
	r.PathPrefix("/multiple-tags").Handler(rootHandler)
	r.PathPrefix("/single-tags").Handler(rootHandler)
	r.PathPrefix("/view-media").Handler(rootHandler)
	r.PathPrefix("/cart").Handler(rootHandler)
	r.PathPrefix("/store").Handler(rootHandler)
	r.PathPrefix("/report-content").Handler(rootHandler)
	r.PathPrefix("/report-successful").Handler(rootHandler)
	r.PathPrefix("/error").Handler(rootHandler)
	r.PathPrefix("/help").Handler(rootHandler)
	r.PathPrefix("/author").Handler(rootHandler)

	r.HandleFunc("/join", serveJoin)
	r.HandleFunc("/notebook", serveNotebook)
	r.HandleFunc("/journal", serveNotebook)
	r.HandleFunc("/free-journal", serveJournalCampaign)
	r.HandleFunc("/portal", servePortal)
	r.HandleFunc("/portal/", servePortal)
	r.HandleFunc("/ios/", serveIos)
	r.HandleFunc("/.well-known/assetlinks.json", serveAssetLinks)
	r.HandleFunc("/privacy", servePrivacyPolicy)
	r.HandleFunc("/eula", serveEula)
	r.HandleFunc("/{tagHandle}", serveTag)

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("www/")))
	n.Use(negroni.NewStatic(http.Dir("static/")))
	n.Use(negroni.NewStatic(http.Dir("static/portal/")))
	n.Use(negroni.NewStatic(http.Dir("static/ios/")))
	n.UseHandler(r)

	return &http.Server{Addr: ":" + os.Getenv("PORT"), Handler: n}
}

func serveJoin(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "https://spark.adobe.com/page/16xMevEh8Cw81/", http.StatusTemporaryRedirect)
}

func serveNotebook(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "https://spark.adobe.com/page/B4h9DmJ3ghdma/", http.StatusTemporaryRedirect)
}

func serveJournalCampaign(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "https://mailchi.mp/ad5b8053a8c9/free-smart-journal", http.StatusTemporaryRedirect)
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

func servePortal(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/portal/index.htm")
}

func serveIos(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/ios/index.htm")
}
