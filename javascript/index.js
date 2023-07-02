//berlin

function clock() {
  let berlin = document.querySelector("#berlin");
  let berlinDate = berlin.querySelector(".date");
  berlinDate.innerHTML = moment
    .tz("Europe/Berlin")
    .format("dddd, MMMM Do YYYY");
  let berlinTime = berlin.querySelector(".time");
  berlinTime.innerHTML = moment
    .tz("Europe/Berlin")
    .format("hh:mm:ss[<small>]a[</small>]");
}
berlinTime = setInterval(clock, 1000);

//paris
function clock1() {
  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  parisDate.innerHTML = moment.tz("Europe/Paris").format("dddd, MMMM Do YYYY");
  let parisTime = paris.querySelector(".time");
  parisTime.innerHTML = moment
    .tz("Europe/Paris")
    .format("hh:mm:ss[<small>]a[</small>]");
}
parisTime = setInterval(clock1, 1000);

//hong-kong
function clock2() {
  let hongKong = document.querySelector("#hong-kong");
  let hongKongDate = hongKong.querySelector(".date");
  hongKongDate.innerHTML = moment
    .tz("Asia/Hong_Kong")
    .format("dddd, MMMM Do YYYY");
  let hongKongTime = hongKong.querySelector(".time");
  hongKongTime.innerHTML = moment
    .tz("Asia/Hong_Kong")
    .format("hh:mm:ss[<small>]a[</small>]");
}
hongKongTime = setInterval(clock2, 1000);

//hawaii
function clock3() {
  let hawaii = document.querySelector("#hawaii");
  let hawaiiDate = hawaii.querySelector(".date");
  hawaiiDate.innerHTML = moment.tz("Us/Hawaii").format("dddd, MMMM Do YYYY");
  let hawaiiTime = hawaii.querySelector(".time");
  hawaiiTime.innerHTML = moment
    .tz("US/Hawaii")
    .format("hh:mm:ss[<small>]a[</small>]");
}
hawaiiTime = setInterval(clock3, 1000);
