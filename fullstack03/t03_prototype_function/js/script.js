Object.prototype.removeDuplicates = function(){
    var words = str.split(" ");
    var str2 = "";
   // console.log(words);
    for(let y = 0; y < words.length; y++) {
        let e = 0;
        for(e = 0; e < y; e++){
            if(words[e] == words[y])
                break;
        }
        if(e == y && words[y] != "")
            str2 = str2.length == 0 ? str2 + words[y] : str2 + " " + words[y] ;
    }
    //str2= str2 + "&";
return str2;
}
let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
//Giant Spiders? What’s next? Snakes?
str= removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str= ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str= removeDuplicates();
console.log(str);
// . ?