const lang = "en";
export function Labels(id : any) {
    switch (lang) {
        case "en":
            return Messages_en(id);
    }
}

export function Messages_en(id: string) {
    let labels:any = {
        'filter' : "Filter",
        "filterPlaceholder" : "Filter by columns or Country Code",
        "country" : "Country Name",
        "capital" : "Capital",
        "population" : "Population",
        "view" : "View",
        "language" : "Language",
        "currency" : "Currency",
        "ok" : "Ok",
        "loading" : "Loading... please wait...!",
    };   
    return labels[id];
}