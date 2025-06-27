// core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/pathUtil');
const { error } = require('console');

// fake database
const registereHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, image){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.image = image;
    }


    save(){
        registereHomes.push(this);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(homeDataPath, JSON.stringify(registereHomes), error => {
            console.log("File Writing Concluded", error);
        })
    }

    static fetchAll() {
        return registereHomes;
    }

}