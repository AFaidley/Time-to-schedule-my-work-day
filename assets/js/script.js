// Prints time at the top, 'Do' adds the th in 19th for exmaple, hh' makes it 12hr time and the 'a' adds AM or PM 
setInterval(() => {
  var currentTime = moment().format("dddd MMMM Do YYYY hh:mm:ss a");
  $("#current-time").text(currentTime);
}, 1000);

// console.log(new Date())


