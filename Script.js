    countDown = new Date ("Oct 23, 2024 21:40:00").getTime();
    x = setInterval(function(){
    var now = new Date ().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance / (1000*60*60*24)); //For counting days
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60)); //For counting hours
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60)); //For counting minutes
    var seconds = Math.floor((distance % (1000*60)) / (1000)); //For counting seconds

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0){
        clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
    },1000)