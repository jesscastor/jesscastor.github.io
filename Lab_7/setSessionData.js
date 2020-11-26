const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = ""; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "document.getElementById("busroute").value;"; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        let title = route.title;
        let latMax = route.lat_max;
        let latMin = route.lat_min;
        let lonMax = route.lon_max;
        let lonMin = route.lon_min;

        sessionStorage.setItem("title", title);
        sessionStorage.setItem("lat_max", latMax);
        sessionStorage.setItem("lat_min", latMin);
        sessionStorage.setItem("lon_max", lonMax);
        sessionStorage.setItem("lon_min", lonMin);
// YOUR CODE HERE
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}