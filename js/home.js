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
 
  document.getElementById("more-con-all").style.display = "none";
      document.getElementById("hidden-product1").style.display = "block";
      document.getElementById("hidden-product2").style.display = "block";
      document.getElementById("hidden-product3").style.display = "block";
      document.getElementById("hidden-product4").style.display = "block";
      document.getElementById("hidden-product5").style.display = "block";
      document.getElementById("hidden-product6").style.display = "block";
      document.getElementById("hidden-product7").style.display = "block";
      document.getElementById("hidden-product8").style.display = "block";
      document.getElementById("hidden-product9").style.display = "block";
      document.getElementById("hidden-product10").style.display = "block";
      document.getElementById("hidden-product11").style.display = "block";
      document.getElementById("hidden-product12").style.display = "block";
      document.getElementById("hidden-product13").style.display = "block";
      document.getElementById("hidden-product14").style.display = "block";
      document.getElementById("hidden-product15").style.display = "block";
      document.getElementById("hidden-product16").style.display = "block";
      document.getElementById("hidden-product-less").style.display = "block";

  document.getElementById("line-location").style.marginTop = "-160px";

}

function lessConAll() {
  
  document.getElementById("more-con-all").style.display = "block";
  document.getElementById("hidden-product1").style.display = "none";
  document.getElementById("hidden-product2").style.display = "none";
  document.getElementById("hidden-product3").style.display = "none";
  document.getElementById("hidden-product4").style.display = "none";
  document.getElementById("hidden-product5").style.display = "none";
  document.getElementById("hidden-product6").style.display = "none";
  document.getElementById("hidden-product7").style.display = "none";
  document.getElementById("hidden-product8").style.display = "none";
  document.getElementById("hidden-product9").style.display = "none";
  document.getElementById("hidden-product10").style.display = "none";
  document.getElementById("hidden-product11").style.display = "none";
  document.getElementById("hidden-product12").style.display = "none";
  document.getElementById("hidden-product13").style.display = "none";
  document.getElementById("hidden-product14").style.display = "none";
  document.getElementById("hidden-product15").style.display = "none";
  document.getElementById("hidden-product16").style.display = "none";
  document.getElementById("hidden-product-less").style.display = "none";
  document.getElementById("line-location").style.marginTop = "5px";

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






document.getElementById("icon-name-home").style.color = "#ff7b01";



