
$(document).ready(function () {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const fullDate = new Date();
let weekday = weekdays[fullDate.getDay()];
let month =  months[fullDate.getMonth()];
let day = fullDate.getDate();
let dateString = weekday+", "+month+" "+day 

console.log(dateString);
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
$("#currentDay").html(dateString)

var saveButton = $(".saveBtn")
saveButton.on("click", function(event){
  var time = $(this).parent().attr("id")
var input = $(this).siblings(".description").val()
console.log(input)
localStorage.setItem(time, input)
})

var time = localStorage.getItem("hour-9")
$("#hour-9").children(".description").val(time)
var time = localStorage.getItem("hour-10")
$("#hour-10").children(".description").val(time)
var time = localStorage.getItem("hour-11")
$("#hour-11").children(".description").val(time)
var time = localStorage.getItem("hour-12")
$("#hour-12").children(".description").val(time)
var time = localStorage.getItem("hour-1")
$("#hour-1").children(".description").val(time)
var time = localStorage.getItem("hour-2")
$("#hour-2").children(".description").val(time)
var time = localStorage.getItem("hour-3")
$("#hour-3").children(".description").val(time)
var time = localStorage.getItem("hour-4")
$("#hour-4").children(".description").val(time)
var time = localStorage.getItem("hour-5")
$("#hour-5").children(".description").val(time)
});