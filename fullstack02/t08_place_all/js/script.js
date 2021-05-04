function sort(arr, l, n) {
    for(let r = n -  1; r >= l; r--) {
        for (let p = l; p < r; p++) {
            if (arr[p] > arr[p + 1]) {
                let y = arr[p];
                arr[p] = arr[p + 1];
                arr[p + 1] = y;
            }
        }
    }
}

function sortEvenOdd(arr) {
    let n = 0;
    for (let o = 0; o < arr.length; o++)
        if (arr[o] % 2 == 0)
            n++;
    console.log(n);
    console.log(arr.length);
    if (arr.length - n > n) {
        for (let l = arr.length - 1; l >= n; l--) {
            if (arr[l] % 2 == 0) {
                for (let p = 0; p < n; p++) {
                    if (arr[p] % 2 != 0) {
                        let y = arr[p];
                        arr[p] = arr[l];
                        arr[l] = y;
                    }
                }
            }
        }
    } else {
        for (let l = 0; l < n; l++) {
            if (arr[l] % 2 != 0) {
                for (let p = n; p < arr.length; p++) {
                    if (arr[p] % 2 == 0) {
                        let y = arr[p];
                        arr[p] = arr[l];
                        arr[l] = y;
                    }
                }
            }
        }
    }
    sort(arr, 0, n);
    sort(arr, n, arr.length);
}


// const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sortEvenOdd(arr);
// console.log(arr);
// // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]