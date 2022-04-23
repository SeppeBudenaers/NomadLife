let i = 0;
let ourData;

var infoContainer = document.getElementById("travel_info")
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "data_travel.js")
ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    imgswap(ourData ,i);
    renderHTML(ourData,i);
};
ourRequest.send();

function imgswap(Data,i){
    var image = document.getElementById('travelpicture');
    image.src = Data[i].img
    document.getElementById("travel_place").innerHTML ="place: " + ourData[i].place
    document.getElementById("travel_lenght").innerHTML ="length of the trip: " + ourData[i].lenght
    document.getElementById("travel_description").innerHTML ="vibe: " + ourData[i].description

}

function next() {
    if (i < 2) {
      i++;
    }
    else{
        i = 0
    }
    imgswap(ourData,i);
  }
  
  function previous() {
    if (i > 0) {
      i--;
      
    }
    else{
        i = 2;
    }
    imgswap(ourData,i);
  }
