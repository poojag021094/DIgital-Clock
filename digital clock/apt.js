function clock(){
  var fullDate = new Date();
  var hours = fullDate.getHours();
  var Min = fullDate.getMinutes();
  var Sec = fullDate.getSeconds();

  if(hours < 0 ){
    hours = "0" + hours;
  }
  if (Min < 0) {
    Min = "0" + Min;
  }
  if (Sec < 0) {
    Sec = "0" + Sec;
  }

  document.getElementById('hour').innerHTML= hours;
  document.getElementById('minutes').innerHTML=": " + Min;
  document.getElementById('second').innerHTML= ": " + Sec;

}
setInterval(clock,1000);
