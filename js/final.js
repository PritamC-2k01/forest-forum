
var i = 0;
var speed = 50;
function msg() {
  
  
  var speed2=1000;
  var txt=document.getElementsByClassName("intro")[0].innerHTML;


  if ( i < txt.length && txt.charAt(i)!="!") {

    document.getElementsByClassName("demo")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(msg, speed);
  }
  else if(txt.charAt(i)=="!"){
    
    document.getElementsByClassName("demo")[0].innerHTML=  document.getElementsByClassName("demo")[0].innerHTML+txt.charAt(i)+"<br><br><br>";
    i++;
    setTimeout(msg, speed2);


  }
}


function go()
{
  var txt = "Great!!";
  document.getElementById("newdemo").innerHTML= txt;
  name=prompt("pc wants to know your name");
  // document.getElementsByClassName("yes")[0].innerHTML="ok "+ name +"let's start the survey";
  // document.getElementsByClassName("demo")[0].style.height="100%";
  // for(var i=0;i<2;i++){
  //   document.getElementsByClassName("forest")[i].style.visibility="visible";
  // }
  document.getElementsByClassName("demo")[0].innerHTML="<a href='forest1.html'><img src='img3/sundarban1.jpg' style ='position:relative; left:0; width:40%; border:2vw transparent solid;'></a>"+"<a href='forest2.html'><img src='img3/gir1.jpg' style ='position:relative; left:0;width:40%;border:2vw transparent solid;'></a>"+"<br/>"+document.getElementById("newdemo").innerHTML+"<br/>ok <b>"+ name +"</b> let's start the survey";
 document.getElementsByClassName("demo")[0].style.height="100%";
 document.getElementById("aside").style.display="none";
  
  
}   

function exit(){
  var txt = "oops!! sry ";
  // document.getElementById("newdemo").innerHTML= txt;
  document.getElementsByClassName("demo")[0].innerHTML=txt;
  document.getElementsByClassName("demo")[0].style.height="100%";
  document.getElementById("aside").style.display="none";
  

}
// var aud =document.getElementById("myAudio");
// function audPlay(){
//   aud.play();
// }
// function audPause(){
//   aud.pause();
// }
// document.getElementById('randomElement').click();
// setTimeout(function(){
//   document.getElementById('myVideo').play();
// } ,1500);
