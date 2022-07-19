// Global scope vars
// console.log(new Date().getHours())
var currentHour = new Date().getHours();
var saveBtn = $(".saveBtn");

// Prints time at the top, 'Do' adds the th in 19th for exmaple, hh' makes it 12hr time and the 'a' adds AM or PM
setInterval(() => {
  var currentTime = moment().format("dddd MMMM Do YYYY hh:mm:ss a");
  $("#current-time").text(currentTime);
}, 1000);

// Changes the color of the blocks by assigning a class to them according to the hour
function schedulerColor() {
  for (let i = 9; i < 18; i++) {
    if (currentHour > i) {
      $(`#time-${i}`).addClass("past");
    } else if (currentHour == i) {
      $(`#time-${i}`).addClass("present");
    } else {
      $(`#time-${i}`).addClass("future");
    }
  }
};

// Gets any saved data from local storage
$("#time-9 .time-block").val(localStorage.getItem("time-9"));
$("#time-10 .time-block").val(localStorage.getItem("time-10"));
$("#time-11 .time-block").val(localStorage.getItem("time-11"));
$("#time-12 .time-block").val(localStorage.getItem("time-12"));
$("#time-13 .time-block").val(localStorage.getItem("time-13"));
$("#time-14 .time-block").val(localStorage.getItem("time-14"));
$("#time-15 .time-block").val(localStorage.getItem("time-15"));
$("#time-16 .time-block").val(localStorage.getItem("time-16"));
$("#time-17 .time-block").val(localStorage.getItem("time-17"));

// A function to listen for the save button being clicked
$( ".saveBtn" ).click(function() {
    // alert( "Hi, I worked!" );
    var value = (timeblock.val());
    // var time = ();
    localStorage.setItem(value);
});  

// };

// // Call functions and event listeners



schedulerColor();
