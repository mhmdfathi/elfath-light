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
  document.getElementById("hidden-product-less").style.display = "block";
}

function moreBanalat() {
  document.getElementById("banal-hidd-one").style.display = "block";
  document.getElementById("banal-hidd-two").style.display = "block";
  document.getElementById("banal-hidd-three").style.display = "block";
  document.getElementById("more-banalat").style.display = "none";
  document.getElementById("hidden-product-less-banalat").style.display =
    "block";
}

function lessBanalat() {
  document.getElementById("banal-hidd-one").style.display = "none";
  document.getElementById("banal-hidd-two").style.display = "none";
  document.getElementById("banal-hidd-three").style.display = "none";
  document.getElementById("more-banalat").style.display = "block";
  document.getElementById("hidden-product-less-banalat").style.display =
    "none";
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

  document.getElementById("hidden-product-less").style.display = "none";
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

function consresh() {
  document.getElementById("myUL").style.display = "block";
}

function serchDelet() {
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

document.getElementById("banalatBttn").style.backgroundColor = "#ff7b01";

function spotatBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "#ff7b01";
  document.getElementById("banalatBttn").style.backgroundColor = "";
  document.getElementById("tracatBttn").style.backgroundColor = "";
  document.getElementById("golopBttn").style.backgroundColor = "";
  document.getElementById("lambatBttn").style.backgroundColor = "";

  document.getElementById("banalat-con").style.display = "none";
  document.getElementById("spotat-con").style.display = "flex";
  document.getElementById("golop-con").style.display = "none";
}

function banalatBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "";
  document.getElementById("banalatBttn").style.backgroundColor = "#ff7b01";
  document.getElementById("tracatBttn").style.backgroundColor = "";
  document.getElementById("golopBttn").style.backgroundColor = "";
  document.getElementById("dalyatBttn").style.backgroundColor = "";
  document.getElementById("lambatBttn").style.backgroundColor = "";

  document.getElementById("banalat-con").style.display = "flex";
  document.getElementById("spotat-con").style.display = "none";
  document.getElementById("golop-con").style.display = "none";
}

function tracatBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "";
  document.getElementById("banalatBttn").style.backgroundColor = "";
  document.getElementById("tracatBttn").style.backgroundColor = "#ff7b01";
  document.getElementById("golopBttn").style.backgroundColor = "";
  document.getElementById("dalyatBttn").style.backgroundColor = "";
  document.getElementById("lambatBttn").style.backgroundColor = "";

  document.getElementById("banalat-con").style.display = "none";
  document.getElementById("spotat-con").style.display = "none";
  document.getElementById("golop-con").style.display = "none";
}

function golopBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "";
  document.getElementById("banalatBttn").style.backgroundColor = "";
  document.getElementById("tracatBttn").style.backgroundColor = "";
  document.getElementById("golopBttn").style.backgroundColor = "#ff7b01";
  document.getElementById("dalyatBttn").style.backgroundColor = "";
  document.getElementById("lambatBttn").style.backgroundColor = "";

  document.getElementById("banalat-con").style.display = "none";
  document.getElementById("spotat-con").style.display = "none";
  document.getElementById("golop-con").style.display = "flex";
}

function dalyatBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "";
  document.getElementById("banalatBttn").style.backgroundColor = "";
  document.getElementById("tracatBttn").style.backgroundColor = "";
  document.getElementById("golopBttn").style.backgroundColor = "";
  document.getElementById("dalyatBttn").style.backgroundColor = "#ff7b01";
  document.getElementById("lambatBttn").style.backgroundColor = "";

  document.getElementById("banalat-con").style.display = "none";
  document.getElementById("spotat-con").style.display = "none";
  document.getElementById("golop-con").style.display = "none";
}

function lambatBttn() {
  document.getElementById("spotatBttn").style.backgroundColor = "";
  document.getElementById("banalatBttn").style.backgroundColor = "";
  document.getElementById("tracatBttn").style.backgroundColor = "";
  document.getElementById("golopBttn").style.backgroundColor = "";
  document.getElementById("dalyatBttn").style.backgroundColor = "";
  document.getElementById("lambatBttn").style.backgroundColor = "#ff7b01";

  document.getElementById("banalat-con").style.display = "none";
  document.getElementById("spotat-con").style.display = "none";
  document.getElementById("golop-con").style.display = "none";
}

function kharatemBtnSection() {
  document.getElementById("selk-btn-section").style.backgroundColor = "#efefef";
  document.getElementById("kharatem-btn-section").style.backgroundColor =
    "#ff7b01";

  document.getElementById("selks-all-cabule").style.display = "none";
  document.getElementById("selk-bttn").style.display = "none";

  document.getElementById("kharatem-all-con").style.display = "flex";
}

function selKbtnSection() {
  document.getElementById("selk-btn-section").style.backgroundColor = "#ff7b01";
  document.getElementById("kharatem-btn-section").style.backgroundColor =
    "#efefef";

  document.getElementById("selks-all-cabule").style.display = "flex";
  document.getElementById("selk-bttn").style.display = "flex";

  document.getElementById("kharatem-all-con").style.display = "none";
}

function elfrenceyaBtn() {
  document.getElementById("eleslamya-one").style.display = "none";
  document.getElementById("eleslamya-two").style.display = "none";
  document.getElementById("eleslamya-three").style.display = "none";
  document.getElementById("eleslamya-four").style.display = "none";
  document.getElementById("eleslamya-five").style.display = "none";
  document.getElementById("elfernceya-one").style.display = "block";
  document.getElementById("elfernceya-two").style.display = "block";
  document.getElementById("elfernceya-three").style.display = "block";
  document.getElementById("elfernceya-four").style.display = "block";

  document.getElementById("eleslamya-btm").style.backgroundColor = "";
  document.getElementById("selk-all-btn").style.backgroundColor = "#efefef";
  document.getElementById("elfrenceya-btn").style.backgroundColor = "#ff7b01";
}

function eleslamyaBtm() {
  document.getElementById("eleslamya-one").style.display = "block";
  document.getElementById("eleslamya-two").style.display = "block";
  document.getElementById("eleslamya-three").style.display = "block";
  document.getElementById("eleslamya-four").style.display = "block";
  document.getElementById("eleslamya-five").style.display = "block";
  document.getElementById("elfernceya-one").style.display = "none";
  document.getElementById("elfernceya-two").style.display = "none";
  document.getElementById("elfernceya-three").style.display = "none";
  document.getElementById("elfernceya-four").style.display = "none";

  document.getElementById("eleslamya-btm").style.backgroundColor = "#ff7b01";
  document.getElementById("selk-all-btn").style.backgroundColor = "#efefef";
  document.getElementById("elfrenceya-btn").style.backgroundColor = "";
}

function selkAllBtn() {
  document.getElementById("eleslamya-one").style.display = "block";
  document.getElementById("eleslamya-two").style.display = "block";
  document.getElementById("eleslamya-three").style.display = "block";
  document.getElementById("eleslamya-four").style.display = "block";
  document.getElementById("eleslamya-five").style.display = "block";
  document.getElementById("elfernceya-one").style.display = "block";
  document.getElementById("elfernceya-two").style.display = "block";
  document.getElementById("elfernceya-three").style.display = "block";
  document.getElementById("elfernceya-four").style.display = "block";

  document.getElementById("eleslamya-btm").style.backgroundColor = "";
  document.getElementById("selk-all-btn").style.backgroundColor = "#ff7b01";
  document.getElementById("elfrenceya-btn").style.backgroundColor = "";
}

