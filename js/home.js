function bttnVenus() {
  document.getElementById("bttn-vinus").style.backgroundColor = "#ff7b01";
  document.getElementById("bttn-sanchi").style.backgroundColor = "#efefef";
  document.getElementById("section-venus").style.display = "block";
  document.getElementById("section-sanchi").style.display = "none";


}
function bttnSanchi() {
  document.getElementById("bttn-vinus").style.backgroundColor = "#efefef";
  document.getElementById("bttn-sanchi").style.backgroundColor = "#ff7b01";
  document.getElementById("section-sanchi").style.display = "block";
  document.getElementById("section-venus").style.display = "none";


}

function moreConAll() {
 
  document.getElementById("product-venus-con").style.height = "fit-content";
  document.getElementById("more-con-all").style.display = "none";
      document.getElementById("less-con-all").style.display = "block";

  document.getElementById("line-location").style.marginTop = "-160px";

}

function lessConAll() {
  document.getElementById("product-venus-con").style.height = "";
  document.getElementById("more-con-all").style.display = "";
  document.getElementById("line-location").style.marginTop = "5px";
    document.getElementById("less-con-all").style.display = "none";

}





function inputSerch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";


    } else {
      li[i].style.display = "none";

    

    }
  }
}

function consresh(){
  document.getElementById("myUL").style.display = "block";

}

function serchDelet(){
  document.getElementById("myUL").style.display = "none";
}


function searchICON() {
  document.getElementById("icon-name-search").style.color = "#ff7b01";
  document.getElementById("icon-name-home").style.color = "black";
  document.getElementById("icon-name-location").style.color = "black";
}

function homeICON() {
  document.getElementById("icon-name-search").style.color = "black";
  document.getElementById("icon-name-home").style.color = "#ff7b01";
  document.getElementById("icon-name-location").style.color = "black";
}

function locationICON() {
  document.getElementById("icon-name-search").style.color = "black";
  document.getElementById("icon-name-home").style.color = "black";
  document.getElementById("icon-name-location").style.color = "#ff7b01";
}


document.getElementById("icon-name-home").style.color = "#ff7b01";



