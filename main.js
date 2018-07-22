var 영화보자 = document.getElementsByClassName("영화보자")[0];
var 몇편 = document.getElementsByClassName("몇편")[0];
var 이미지 = document.getElementsByClassName("이미지")[0];

var 영화정보 = [
  {제목: "Call me by your name", 
  글자색: "#FFF828", 
  배경색: "#008AE4", 
  이미지: "url(1callme.jpg)"},
  {제목:"Ocean's 8", 
  글자색:"white", 
  배경색:"#E60012", 
  이미지:"url(2oceans.jpg)"},
  {제목:"The Grand Budapest Hotel", 
  글자색:"#157FF3", 
  배경색:"#FFC9DC", 
  이미지:"url(3grand.jpg)"},
  {제목:"Her", 
  글자색:"#88DAFF", 
  배경색:"#D00046", 
  이미지:"url(4her.jpg)"},
  {제목:"The Pianist", 
  글자색:"#A47D38",
  배경색:"rgba(1,1,1,.9)", 
  이미지:"url(5pianist.jpg)"}
];

var 영화목록 = "";
for ( var 순서 = 0; 순서 < 영화정보.length; 순서 ++){
    영화목록 = 영화목록 + "<span class='제목강조'>"+ [순서+1] +". [" + 영화정보[순서].제목 + "]</span><br>";
};

몇편.innerHTML = "Among these " + 영화정보.length + " movies, <br>" + "which one is your favorite?";
영화보자.innerHTML = 영화목록;


for (let 순서 = 0; 순서 < 영화정보.length; 순서 ++){
    let 제목강조 = document.getElementsByClassName("제목강조")[순서];
    제목강조.addEventListener("click", function () {

      let 제목들 = document.getElementsByClassName("제목강조");

      for (var i=0; i < 제목들.length; i++){
        제목들[i].style.color = "black";
      }

      제목강조.style.color = 영화정보[순서].글자색;
      document.body.style.backgroundColor = 영화정보[순서].배경색;
      이미지.style.backgroundImage = 영화정보[순서].이미지;
 
    })
}

몇편.addEventListener("click", function () {
  location.reload();
})