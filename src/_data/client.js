module.exports = {
    name: "East Brampton Baptist Church",
    email: "eastbramptonbaptistchurch@gmail.com",
    phoneForTel: "647-524-0669",
    phoneFormatted: "(647) 524-0669",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Brampton",
        state: "ON",
        zip: "L6T 5L3",
        country: "CA",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
