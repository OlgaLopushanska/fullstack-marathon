function* generate(){
    var a = 1;
    while (a < 10000) {
        let r = Number(prompt("Previous result: " + a +". Enter a new number"));
        if(isNaN(r)) {
            console.log("Invalid input!");
            yield r;
        }
        else {
            yield a = a + r;
            if (a >= 10000)
                a = 1;
        }
    }
    return r;
}

var t = generate();

while(isNaN(t.next().value) == false);
