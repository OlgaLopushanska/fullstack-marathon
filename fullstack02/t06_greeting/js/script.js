function mine() {
    let first = prompt("Enter your first name");
    let last = prompt("Enter your last name");
    let pat = /^[a-z]{0,20}$/gi;
    let firstName = first.match(pat);
    let lastName = last.match(pat);
    if(first != "" && last != "") {
        if (firstName != null && lastName != null) {
            let r = first.toLowerCase();
            let y = last.toLowerCase();
            r = r.charAt(0).toUpperCase() + r.slice(1);
            y = y.charAt(0).toUpperCase() + y.slice(1);
             alert('Hello ' + r + ' ' + y + '!');
            console.log('Hello ' + r + ' ' + y + '!');
        }
        else {
            alert('Invalid input');
            console.log('Invalid input');
        }
    } else {
        alert('Invalid input');
        console.log('Invalid input');
    }
}
