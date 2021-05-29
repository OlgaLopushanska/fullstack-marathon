import {HouseBuilder } from './houseBuilder.js'

let houseMixin = {
    wordReplace(oldWrds, newWrds){
        var h = this.description;
        let w = h.replaceAll(oldWrds, newWrds);
        this.description = w;
    },
    wordDelete(oldWrds){
        var h = this.description;
        let w = h.replaceAll(oldWrds, "");
        this.description = w;
    },
    wordInsertAfter(oldWrd, newWord){
        var h = this.description;
        let w = h.replaceAll(oldWrd, oldWrd + " " + newWord);
        this.description = w;
    },
    wordEncrypt(){
        var h = this.description;
        let w = "";
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        for(let p = 0; p < h.length; p++) {
            w = w + h[p];
            for (let m = 0; m < input.length; m++) {
                if (h[p] == input[m]) {
                    w = w.substring(0, p) + output[m];
                }
            }
        }
        this.description = w;
    },
    wordDecrypt(){
        var h = this.description;
        let w = "";
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        for(let p = 0; p < h.length; p++) {
            w = w + h[p];
            for (let m = 0; m < output.length; m++) {
                if (h[p] == output[m]) {
                    w = w.substring(0, p) + input[m];
                }
            }
        }
        this.description = w;
    }

};


const house = new HouseBuilder("88 Crescent Avenue",'Spacious town house with wood flooring, 2-car garage, and a back patio.','J. Smith', 110, 5);
Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.