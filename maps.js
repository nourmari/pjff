// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const position = {
      lat: 36.80278,
      lng: 10.17972
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: position,
    });
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<img width=50px height=50px src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/178780789_486298546018639_1375618303826600038_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_ohc=UnY7lco9-cgAX92qlm6&_nc_ht=scontent.ftun1-2.fna&oh=7d9caaaf89d9e3d2eca7fcca6ed6e072&oe=61455B1E" alt="" >'+
      '<h1 id="firstHeading" class="firstHeading">0021628001247</h1>' +
      '<div id="bodyContent">' +
      '<p style="color: red;">nawara nour</p> '+
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: position,
      map,
      title: "adress (noor)",
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  







  console.log("hello")

let button= document.querySelector ("button")
let input = document.querySelector ("input")
let ul = document.querySelector("ul")

function addme(){
    //create element in js
    //verification
 if(input.value.length==0){
     //ma tajouti hata chy
     input.style.borderColor
 }
    let li = document.createElement("li")
    li.innerHTML = input.value;
    ul.appendChild(li)
    input.value=""

   
}

button.onclick = addme
input.onkeydown = function (event) {
    if (event.keycode ==13){
        addme()
    }
}