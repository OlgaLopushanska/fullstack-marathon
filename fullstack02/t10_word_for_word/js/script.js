function addWords(obj, wrds) {
    var h = obj.words;
    var words = wrds.split(" ");
    for(let r = 0; r < words.length; r++){  //кидаем wrds в h
            if(words[r] != " ") {
                h = h + " " + words[r];
        }
    }
    let arr = h.split(" ");
    for(let r = 0; r < arr.length; r++){  //убрать повторение
        for(let u = r + 1; u < arr.length; u++){
            if(arr[r] === arr[u])
                arr[u] = "";
        }
    }
    let w = '';
    for(let r = 0; r < arr.length; r++)//собрать снова строку
        if(arr[r] != "")
            w = w + " " + arr[r];
    obj.words = w;
}

function removeWords(obj, wrds) {
    var h = obj.words;
    var words = wrds.split(" ");
    var arr = h.split(" ");
    for(let r = 0; r < words.length; r++){ //убрать повторения
        for(let p = 0; p < arr.length; p++){
            if(words[r] === arr[p])
                arr[p] = "";
        }
    }
    let w = '';
    for(let r = 0; r < arr.length; r++) {//собрать снова строку
        if (arr[r] != "")
            w = w.length == 0 ? w + arr[r] : w + " " + arr[r] ;
    }
    obj.words = w;
}

function changeWords(obj, oldWrds, newWrds){
    let priznak = 0;
    var h = obj.words;
    var old = oldWrds.split(" ");
    var neword = newWrds.split(" ");
    var arr = h.split(" ");
    for(let r = 0; r < old.length; r++){
        for(let p = 0; p < arr.length; p++){
            if(old[r] === arr[p]){
                arr[p] = "";
                priznak++;
            }
        }
    }
    let w = '';
    for(let r = 0; r < arr.length; r++) {//собрать снова строку
        if (arr[r] != "")
            w = w.length == 0 ? w + arr[r] : w + " " + arr[r] ;
    }
    if(priznak > 0)
        w = w + newWrds;
    obj.words = w;
}

// const obj = {
//     words: 'newspapers newspapers  books magazines'};
// console.log(obj);
// // {words: "newspapers newspapers  books magazines"}
// addWords(obj, 'radio newspapers');
// console.log(obj);
// //{words: "newspapers books magazines radio"}
// removeWords(obj, 'newspapers   radio');
// console.log(obj);
// // {words: "books magazines"}
// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj);
// // {words: "tv internet"