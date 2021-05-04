function mine() {
    let input1 = prompt("Enter number, begin of the range", "1");
    let input2 = prompt('Enter number, the end of the range', '100');
     let num1 = parseInt(input1, 10);
      let num2 = parseInt(input2, 10);
     if (!isNaN(num1) && !isNaN(num2)) {
         if (num1 < num2)
             checkDivision(num1, num2);
         else
             checkDivision(num2, num1);
     } else
         alert('Incorrect input');
 }

function checkDivision(beginRange, endRange) {
    for (let a = beginRange; a <= endRange; a++){
        switch (true) {
            case(a % 2 == 0 && a % 3 == 0 && a % 10 == 0):
                console.log(a + ' is even, a multiple of 3, a multiple of 10');
                break;
            case(a % 2 == 0 && a % 3 == 0):
                console.log(a + ' is even, a multiple of 3');
                break;
            case (a % 3 == 0 && a % 10 == 0):
                console.log(a + ' is multiple of 3, a multiple of 10');
                break;
            case(a % 2 == 0 && a % 10 == 0):
                console.log(a + ' is even, a multiple of 10');
                break;

            case (a % 2 == 0):
                console.log(a + ' is even');
                break;
            case(a % 3 == 0):
                console.log(a + ' is a multiple of 3');
                break;
            case (a % 10 == 0):
                console.log(a + 'is a multiple of 10');
                break;
                default:
                console.log(a + ' -');
                break;
        }
    }
}


