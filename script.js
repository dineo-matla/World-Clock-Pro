function refreshTime() {
  //Current TimeZone
  let headerTimeElement = document.querySelector("#time-header");
  headerTimeElement.innerHTML = moment().format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  singaporeDateElement.innerHTML = moment().format("dddd, MMMM D, YYYY");
  let singaporeTime = moment().tz("Asia/Singapore");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  dubaiDateElement.innerHTML = moment().format("dddd, MMMM D, YYYY");
  let dubaiTime = moment().tz("Asia/Dubai");
  dubaiTimeElement.innerHTML = dubaiTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

refreshTime();
setInterval(refreshTime, 1000);
