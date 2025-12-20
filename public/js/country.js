"use strict";

class CountryClient {
    constructor() {
        this.baeseUrl = 'https://gist.githubusercontent.com/incredimike/1469814/raw/2951146d074bdd32320e0a17ebbba18da684aa45/variousCountryListFormats.js';
    }

    async fetchCountryList() {
        const response = await fetch(this.baeseUrl);
        const data = await response.text();

        // Using Function to safely evaluate the variable
        const countryList = new Function(data + " return countryList;")();
        return countryList;
    }
}

const countryClient = new CountryClient();

//countryClient.fetchCountryList().then(list => console.log(list));
//cl.fetchCountryList().then(list => console.log(list));
