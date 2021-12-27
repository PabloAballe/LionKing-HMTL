let today = new Date();
let mainDate=document.getElementById("main-date")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

let day = today.getDay();
let week = weekday[today.getDay()];
let month = capitalize(today.toLocaleString('default', { month: 'short' }));
let year = today.getFullYear();

let myDate=`${week} ${month} ${day} ${year}`;

mainDate.innerHTML=myDate;

