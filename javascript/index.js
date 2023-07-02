function timezone() {
  if (event.target.value.length > 0) {
    if (event.target.value === "berlin") {
      alert(
        moment
          .tz("Europe/Berlin")
          .format("[It is ]dddd, MMMM Do YYYY hh:mm a[ in Berlin]")
      );
    }
    if (event.target.value === "paris") {
      alert(
        moment
          .tz("Europe/Paris")
          .format("[It is ]dddd, MMMM Do YYYY hh:mm a[ in Paris]")
      );
    }
    if (event.target.value === "jamaica") {
      alert(
        moment
          .tz("America/Jamaica")
          .format("[It is ]dddd, MMMM Do YYYY hh:mm a[ in Jamaica]")
      );
    }
  }
}
let countrySelector = document.querySelector("#country");
countrySelector.addEventListener("change", timezone);
