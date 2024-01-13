document.querySelector("button").addEventListener("click", StartTime);
function StartTime() {
document.getElementById("btn1").innerHTML="Reminder Set"
var D = new Date();
var DateNow = D.getDate(); //Current-Date
var MonthNow = D.getMonth() + 1; //Current-Month

//Check if Current-Date & User-Input-Date are Same or Not
if (DateNow ==+document.getElementById("InputDate").value[8] * 10 + +document.getElementById("InputDate").value[9]) {
  //If dates match,then check for Same Month
  if (MonthNow ==+document.getElementById("InputDate").value[5] * 10 + +document.getElementById("InputDate").value[6]) 
  {
    var D1 = new Date();
    var HNow = D1.getHours();//Current-Hour(Ranges from 00hr - 23hr)
    var MNow = D1.getMinutes();//Current-Minute(Ranges from 00min - 60 min)

    if (
      (HNow =
        +document.getElementById("InputTime").value[0] * 10 +
        +document.getElementById("InputTime").value[1])//User-Input-Hour
    ) {
      {
        if (
          MNow ==
          +document.getElementById("InputTime").value[3] * 10 +
            +document.getElementById("InputTime").value[4]//User-Input-Minutes
        ) {
          document.getElementById("btn1").innerHTML = "Stop Alarm from Top Right Corner!!";
          document.getElementById("btn1").classList.add("Reminder");

          function A() {
            var Sound = new Audio("sound.wav");
            Sound.play();
            Sound.controls = true;
            setTimeout(A, 16000);
          }

          setTimeout(A, 1000);
        } else {
          setTimeout(StartTime, 1000);
        }
      }
    } else {
      setTimeout(StartTime, 1000);
    }
  } else {
    setTimeout(StartTime, 1000);
  }
}
}
