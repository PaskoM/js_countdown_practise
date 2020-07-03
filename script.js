const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new.Date();
    const difference = newYearTime - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minute = Math.floor(difference / 1000 / 60) % 60;
    const second = Math.floor(difference / 1000) % 60;

    days.innerHTML = days 
    hours.innerHTML = hour < 10 ? '0' + hour : h;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second;


}

setInterval(updateCountdown, 1000);
