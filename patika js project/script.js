let clock = document.querySelector('.clock');

document.body.style.transition = "all 0.8";

// SAAT
setInterval(() => {
    let x = new Date();
    let hour = x.getHours();
    let minute = x.getMinutes();
    let seconds = x.getSeconds();
    
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute <10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    clock.innerHTML = `${hour} : ${minute} : ${seconds}`;
    clock.style.color = `rgb(${hour*10},${minute*4},${seconds*4})`;
    document.body.style.background = `rgba(${hour*10},${minute*4},${seconds*4},0.85)`;
}, 1000);

let day = document.querySelector('#text-date');
let today = new Date();
let dd = String(today.getDay()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + "." + mm + "." + yyyy;

setTimeout(() => {
    day.innerHTML = today + " tarihinde";
}, 3000);

let Name = prompt('İsminizi Giriniz : ');
let selectName = document.querySelector('#youName');
selectName.innerHTML = `${Name}`;
