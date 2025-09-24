var audio = document.getElementById('backgroundMusic');
var playButton = document.getElementById('playButton');
function calculateChristmasCountdown(){


    playButton.addEventListener('click', function() {
        audio.play();
        $("#playButton").fadeOut(500);
    });
    
    //Get today's date.
    var now = new Date();

    //Get the current month. Add a +1 because
    //getMonth starts at 0 for January.
    var currentMonth = (now.getMonth() + 1);

    //Get the current day of the month.
    var currentDay = now.getDate();

    //Work out the year that the next Christmas
    //day will occur on.
    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        //This year's Christmas Day has already passed.
        nextChristmasYear = nextChristmasYear + 1;
    }

    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);

    //Get the difference in seconds between the two days.
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    //Don't calculate the time left if it is Christmas day.
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        //Convert these seconds into days, hours, minutes, seconds.
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }

    //Add our counts to their corresponding HTML elements.
    document.getElementById('days').innerHTML = days + ' <p class="time-type">days</p>';
    document.getElementById('hours').innerHTML = hours + ' <p class="time-type">hours</p>';
    document.getElementById('minutes').innerHTML = minutes + ' <p class="time-type">minutes</p>';
    document.getElementById('seconds').innerHTML = seconds + ' <p class="time-type">seconds</p>';
    //animation();


    if(days <= 7)
    {
        document.getElementById('gift1').style.color = "#CA244C";
        document.getElementById('gift2').style.color = "#0934E2";
        document.getElementById('gift3').style.color = "#B1C13D";
        document.getElementById('gift4').style.color = "#473483";
    }
    if(days <= 14)
    {
        document.getElementById('gift1').style.color = "#CA244C";
        document.getElementById('gift2').style.color = "#0934E2";
        document.getElementById('gift3').style.color = "#B1C13D";
    }
    if(days <= 21)
    {
        document.getElementById('gift1').style.color = "#CA244C";
        document.getElementById('gift2').style.color = "#0934E2";
    }
    if(days <= 28)
    {
        document.getElementById('gift1').style.color = "#CA244C";
    }
    if(days <= 54)
    {
        // document.getElementById('gift1').style.color = "gray";
        // document.getElementById('gift2').style.color = "gray";
        // document.getElementById('gift3').style.color = "gray";
        // document.getElementById('gift4').style.color = "gray";
        document.getElementById('gift1').style.display = "inline-block";
        document.getElementById('gift2').style.display = "inline-block";
        document.getElementById('gift3').style.display = "inline-block";
        document.getElementById('gift4').style.display = "inline-block";
    }
    else
    {
        document.getElementById('gift1').style.display = "none";
        document.getElementById('gift2').style.display = "none";
        document.getElementById('gift3').style.display = "none";
        document.getElementById('gift4').style.display = "none";
    }
    
    

   




    //Recursive call after 1 second using setTimeout
    setTimeout(calculateChristmasCountdown, 1000);
}

if (!audio.paused)
{
    $("#playButton").hide();
}

calculateChristmasCountdown();


