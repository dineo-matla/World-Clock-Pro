function refreshTime() {
  //Current TimeZone
  let headerTimeElement = document.querySelector("#time-header");
  headerTimeElement.innerHTML = moment().format(
    "HH:mm:ss [<small>]A[</small>] z"
  );

  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeDate = moment().tz("Asia/Singapore");
    singaporeDateElement.innerHTML = singaporeDate.format("dddd, MMMM D, YYYY");
    let singaporeTime = moment().tz("Asia/Singapore");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Dubai
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiDate = moment().tz("Asia/Dubai");
    dubaiDateElement.innerHTML = dubaiDate.format("dddd, MMMM D, YYYY");
    let dubaiTime = moment().tz("Asia/Dubai");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[(1, 2)];
  let locationTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `<div class="cities">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${locationTime.format("dddd, MMMM D, YYYY")}</div>
        </div>
        <div class="time">${locationTime.format(
          "HH:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
      <a href="index.html">All Cities</a>`;
}

refreshTime();
setInterval(refreshTime, 1000);

let citySelectionElement = document.querySelector("#location");
citySelectionElement.addEventListener("change", updateCity);
