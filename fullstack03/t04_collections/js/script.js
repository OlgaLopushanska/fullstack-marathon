let olga = {name: "Olga_Lula"};

function makeGuestList() {
    let guestList = new WeakSet();
    guestList.add(olga);
    guestList.add({name: "Petya Bober"});
    guestList.add({name: "Sasha Nikiforov"});
    guestList.add({name: "Katya Bondar"});
    guestList.add({name: "Oleg Trubach"});
    return guestList;
}
function makeCoinCollection() {
    let coinCollection = new Set();
    coinCollection.add("10th");
    coinCollection.add("25th");
    coinCollection.add("50th");
    coinCollection.add("5th");
    return coinCollection;
}
function makeMenu(){
   let menu = new Map();
   menu.set('mushed potatoes', '50');
   menu.set('baked vegetables', '60');
   menu.set('fryed chicken', '95');
   return menu;
}
function makeBankVault() {
    let bankVault = new WeakMap();
    bankVault.set(olga, "676767");
    bankVault.set({name :"Helena"}, "457788");
    bankVault.set({name : "Tom"},"678686");
    return bankVault;
}
////////////////////////////////////////////////////////////////////////////////////
let guestList = makeGuestList();
console.log(guestList.has(olga));
//true
console.log(guestList.size);
//undefined это действие недопустимо в WeakSet
let john = {name : "john"};
guestList.add(john);
console.log(guestList.has(john));
//true
guestList.delete(olga);
console.log(guestList.has(olga));
//false
// for(let user of guestList) { //этот код тоже кинет исключение поскольку перебор по WeakSet недопустимо
//     console.log(user.name);
// }
// guestList.clear(); //этот код бросит исключение потому что в WeakMap нельзя все сразу удалить
console.log("////////////////////////////////");
let coinCollection = makeCoinCollection();
console.log(coinCollection.has("7th"));
//false
console.log(coinCollection.size);
//4
coinCollection.add("7th");
console.log(coinCollection.has("7th"));
//true
coinCollection.delete("7th");
console.log(coinCollection.has("7th"));
//false
for(let user of coinCollection) {
    console.log(user);
}
//10th
//25th
//50th
//5th
coinCollection.clear();
console.log(coinCollection.size);
//0
console.log("/////////////////////////////////////");
let menu = makeMenu();
console.log(menu.has('fryed chicken'));
//true
console.log(menu.get('fryed chicken'));
//95
menu.set('olivye', '70');
console.log(menu.get('olivye'));
//70
menu.delete('olivye');
console.log(menu.has('olivye'));
//false
for(let user of menu.keys())
    console.log(user);
//mushed potatoes
//baked vegetables
//fryed chicken
menu.clear();
console.log(menu.size);
//0
console.log("//////////////////////////////////////////////////////");
let bankVault = makeBankVault();
console.log(bankVault.has(olga));
//true
console.log(bankVault.get(olga));
//676767
let george = {name: "George"};
bankVault.set(george, "565656");
console.log(bankVault.get(george));
//565656
bankVault.delete(george);
console.log(bankVault.has(george));
//false
// for(let user of bankVault.keys()) //этот код кинет исключение потому что в WeakMap нельзя использовать keys()
//     console.log(user);
//bankVault.clear(); //этот код кинет исключение потому что clear() недопустимо в WeakMap
console.log(bankVault.size);
//undefined //потому что size  недопустимо в WeakMap
