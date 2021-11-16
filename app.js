function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date()); 
    var seconds = Math.floor((t / 1000) % 60); 
    var minutes = Math.floor((t / 1000 /60) % 60); 
    var hours = Math.floor((t / (1000 * 60 *60)) % 24); 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    debugger;
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id); 
    var daysSpan = clock.querySelector('.days'); 
    var hoursSpan = clock.querySelector('.hours'); 
    var minutesSpan = clock.querySelector('.minutes'); 
    var secondsSpan = clock.querySelector('.seconds'); 
    function updateClock(){
        var t = getTimeRemaining(endtime); 
        daysSpan.innerHTML = t.days; 
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);  
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if(t.total <=0){
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

//initialize today's date and then add days, hours, minutes, and seconds to it.
//set today as new Date
//add number of days (in seconds)
//parse the total number of seconds
//convert the total number of seconds into the new date
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 *60 *1000); 

initializeClock('clockdiv', deadline); // grab needed HTML elements from the page, and add the date from which the timer begin its countdown
