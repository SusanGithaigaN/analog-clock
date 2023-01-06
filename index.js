// make a reference to our DOM elements
const secondsHand =document.getElementById('seconds-hand');
const minutesHand =document.getElementById('minutes-hand');
const hoursHand =document.getElementById('hours-hand');

// move the elements

function getTime(){
    // get the current date
    const now = new Date()
    // get the current time in seconds
    const seconds = now.getSeconds()
    // get the current time in minutes
    const minutes = now.getMinutes()
    // get the current time in hours
    const hours = now.getHours()
    // set the time interval
    const timeInterval = 6;

    // rotate the seconds hand using css
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}
// getTime();

setInterval(getTime, 100);