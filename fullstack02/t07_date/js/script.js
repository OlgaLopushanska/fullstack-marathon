function getFormattedDate(dateObject){
    let day = dateObject.getDate();
    let mon = dateObject.getMonth();
    let hour = dateObject.getHours();
    let minute = dateObject.getMinutes();
    let dayOfWeek = dateObject.getDay();
    mon++;
    if (day <= 9)
        day = "0" + day;
    if (mon <= 9)
        mon = "0" + mon;
    if (hour <= 9)
        hour = "0" + hour;
    if (minute <= 9)
        minute = "0" + minute;
    switch(true){
        case (dayOfWeek == 0):
            dayOfWeek = "Sunday";
            break;
        case (dayOfWeek == 1):
            dayOfWeek = "Monday";
            break;
        case (dayOfWeek == 2):
            dayOfWeek = "Tuesday";
            break;
        case(dayOfWeek == 3):
            dayOfWeek = "Wednesday";
            break;
        case(dayOfWeek == 4):
            dayOfWeek = "Thursday";
            break;
        case(dayOfWeek == 5):
            dayOfWeek = "Friday";
            break;
        case(dayOfWeek == 6):
            dayOfWeek = "Saturday";
            break;
        }
    let str = day + '.'+mon + '.' + dateObject.getFullYear() + ' ' + hour + ':' + minute + ' ' + dayOfWeek + "\n";
    return str;
}

// const date0= new Date(1993, 11, 1);
// const date1= new Date(1998, 0, -33);
// const date2= new Date('42 03:24:00');
// console.log(getFormattedDate(date0));
// // 01.12.1993 00:00 Wednesday
//  console.log(getFormattedDate(date1));
// // 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2));
// // 01.01.2042 03:24 Wednesday

