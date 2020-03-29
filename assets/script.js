// Current Date 
var m = moment();
var date = m.format("dddd[,] MMM Do YYYY");
var currentDay = $("#currentDay");
currentDay.text(date);

// Hour blocks to create moment objects with specific times of the day
var blockHours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

// function to check if moment objects for time blocks are before or after current time
function timeCheck (blockHour,m) {
    var currentDate = m.format("YYYY-MM-DD ");
    var temp = moment(currentDate + blockHour);
    if (temp.isBefore(m, "hour")){
        //console.log(blockHour + " is Before hour of current time");
        document.getElementById(blockHour).classList.add("past");
    }else if (temp.isAfter(m, "hour")){
        //console.log(blockHour + " is After hour of current time");
        document.getElementById(blockHour).classList.add("future");
    }else if (temp.isSame(m, "hour")){
        //console.log(blockHour + " is Same hour of current time");
        document.getElementById(blockHour).classList.add("present");
    }
}

//loop through time blocks and check if current time is before, after, or present
for(i = 0; i < blockHours.length; i++){
timeCheck(blockHours[i],m);
}

// -> collect user information and display
var savedActivity = localStorage.getItem("9am");
$(".9am").html(savedActivity);

var tenAmText = localStorage.getItem("10am");
$(".10am").html(tenAmText);

var elevenAmText = localStorage.getItem("11am");
$(".11am").html(elevenAmText);

var twelvePmText = localStorage.getItem("12pm");
$(".12pm").html(twelvePmText);

var onePmText = localStorage.getItem("1pm");
$(".1pm").html(onePmText);

var twoPmText = localStorage.getItem("2pm");
$(".2pm").html(twoPmText);

var threePmText = localStorage.getItem("3pm");
$(".3pm").html(threePmText);

var fourPmText = localStorage.getItem("4pm");
$(".4pm").html(fourPmText);

var fivePmText = localStorage.getItem("5pm");
$(".5pm").html(fivePmText);

// Save button -> stores the activity in local storage
$("#9amBtn").on("click", function () {
    var text9am = $(".9am").val();
    localStorage.setItem("9am",text9am);
});

$("#ten").on("click", function () {
    var text = $(".10am").val();
    localStorage.setItem("10am",text);
});

$("#eleven").on("click", function () {
    var text = $(".11am").val();
    localStorage.setItem("11am",text);
});

$("#twelve").on("click", function () {
    var text = $(".12pm").val();
    localStorage.setItem("12pm", text);
});

$("#one").on("click", function () {
    var text = $(".1pm").val();
    localStorage.setItem("1pm",text);
});

$("#two").on("click", function () {
    var text = $(".2pm").val();
    localStorage.setItem("2pm",text);
});

$("#three").on("click", function () {
    var text = $(".3pm").val();
    localStorage.setItem("3pm",text);
});

$("#four").on("click", function () {
    var text = $(".4pm").val();
    localStorage.setItem("4pm",text);
});

$("#five").on("click", function () {
    var text = $(".5pm").val();
    localStorage.setItem("5pm",text);
})
