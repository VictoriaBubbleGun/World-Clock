function clock() {
  //berlin

  let berlin = document.querySelector("#berlin");
  let berlinDate = berlin.querySelector(".date");
  berlinDate.innerHTML = moment
    .tz("Europe/Berlin")
    .format("dddd, MMMM Do YYYY");
  let berlinTime = berlin.querySelector(".time");
  berlinTime.innerHTML = moment
    .tz("Europe/Berlin")
    .format("hh:mm:ss[<small>]a[</small>]");

  //paris

  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  parisDate.innerHTML = moment.tz("Europe/Paris").format("dddd, MMMM Do YYYY");
  let parisTime = paris.querySelector(".time");
  parisTime.innerHTML = moment
    .tz("Europe/Paris")
    .format("hh:mm:ss[<small>]a[</small>]");

  //hong-kong

  let hongKong = document.querySelector("#hong-kong");
  let hongKongDate = hongKong.querySelector(".date");
  hongKongDate.innerHTML = moment
    .tz("Asia/Hong_Kong")
    .format("dddd, MMMM Do YYYY");
  let hongKongTime = hongKong.querySelector(".time");
  hongKongTime.innerHTML = moment
    .tz("Asia/Hong_Kong")
    .format("hh:mm:ss[<small>]a[</small>]");

  //hawaii

  let hawaii = document.querySelector("#hawaii");
  let hawaiiDate = hawaii.querySelector(".date");
  hawaiiDate.innerHTML = moment.tz("Us/Hawaii").format("dddd, MMMM Do YYYY");
  let hawaiiTime = hawaii.querySelector(".time");
  hawaiiTime.innerHTML = moment
    .tz("US/Hawaii")
    .format("hh:mm:ss[<small>]a[</small>]");
}

function changeWorldClock(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss[<small>]a[</small>]"
        )}</div>
      </div>
      <a class="allcities" href="/">All Cities</a>`;
}

clock();
setInterval(clock, 1000);

let citiesSelectElement = document.querySelector("#citySelector");
citiesSelectElement.addEventListener("change", changeWorldClock);
