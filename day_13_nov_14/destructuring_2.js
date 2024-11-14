let user = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
}
console.log(user.address.city)
console.log(user.address.zipcode)
console.log(user.address.geo.lat);
console.log(user.address.geo.lng);
console.log('=========================');

let { address: { city, zipcode, geo: { lat, lng } } } = user;
console.log(city)
console.log(zipcode)
console.log(lat)
console.log(lng)