let hourContainer = document.getElementById("hour");
let minutesContainer = document.getElementById("minutes");
let secoundsContainer = document.getElementById("secounds");
let ampm = document.getElementById("ampm");

function updateTime(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let secound = date.getSeconds();

  if (hour >= 12) {
    hour = hour - 12;
    ampm.innerHTML = "pm";
    document.body.style.backgroundImage = 'url("./imgs/pm.jpg")';
  } else {
    ampm.innerHTML = "am";
    document.body.style.backgroundImage = 'url("./imgs/am.jpg")';
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secound = secound < 10 ? "0" + secound : secound;

  hourContainer.innerHTML = hour;
  minutesContainer.innerHTML = minutes;
  secoundsContainer.innerHTML = secound;
}

setInterval(updateTime, 1000);
