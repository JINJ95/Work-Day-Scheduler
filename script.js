// Current Date + Time
var m = moment();
//console.log(m);
var date = m.format("dddd[,] MMM Do YYYY");
var currentDay = $("#currentDay");
currentDay.text(date);

var blockHours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
// function to check if moment objects for time blocks are before or after current time
function timeCheck (blockHour,m) {
    var currentDate = m.format("YYYY-MM-DD ");
    var temp = moment(currentDate + blockHour);
    if (temp.isBefore(m, "hour")){
        console.log(blockHour + " is Before hour of current time");
        //$("textarea").addClass("past");
        document.getElementById(blockHour).classList.add("past");
    }else if (temp.isAfter(m, "hour")){
        console.log(blockHour + " is After hour of current time");
        //$("textarea").addClass("present");
        document.getElementById(blockHour).classList.add("future");
    }else if (temp.isSame(m, "hour")){
        console.log(blockHour + " is Same hour of current time");
        //$("textarea").addClass("future");
        document.getElementById(blockHour).classList.add("present");
    }
}

//loop through time blocks and check if current time is before, after, or present
for(i = 0; i < blockHours.length; i++){
timeCheck(blockHours[i],m);
}


//       -> collect user information 
var savedActivity = localStorage.getItem("input");
$("#userInput").html(savedActivity);

//     * save button
//       -> stores the activity in local storage
$("#9amBtn").on("click", function () {
    var text9am = $("#userInput").val();
    localStorage.setItem("input",text9am);
    console.log(localStorage.getItem("input"));
});

//         -> stores *EACH* activity in local storage
//         -> how can i make sure i don't overwrite what's already in there?
//         -> i can turn objects into strings with `JSON.stringify()`
//       -> store the time in local storage
// // display time blocks
// ​
// // color code the activity
// -> get the current time
var currentTime = m.format("LT");
console.log(currentTime);
console.log(m);

// -> compare time block against current time
//     ??? investigate `Moment.js` -- how to get CURRENT TIME?
//     * condition for past event

// //created a moment object for 9 A.M
//var temp = moment($(".9am").attr("data-time"), "hh:mm a");
//console.log(temp);
// console.log(nineAm.isSame("9:00 am"));

//     * condition for present event
//     * condition for future event
// ​
// ON REFRESH
// -> time blocks should populate with local storage data
//     * retrieve data from local storage
//     * differentiate times
//     * display local storage data on the screen
// ​
// time | activity | save button
// -> when we hit save,
//     storing the time and activity in local storage
