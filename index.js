var dice;
var pa1=1;
var pa2=1;
var pb1=15;
var pb2=15;
var locker1;
var locker2;
var sixa=0;
var sixb=0;
var turn=document.querySelector('.turn').innerText;
function spin() {
	             
dice=Math.floor(Math.random()*6)+1;
var token1=document.querySelector('#token1').innerText;
var token2=document.querySelector('#token2').innerText;

document.querySelector('.number').innerText=dice;
if (dice==6) {
 if(document.querySelector('.turn').innerText=="TURN: Player B")

{  if (document.querySelector('#token1').innerText=="2A") 
{sixa=1;
    document.querySelector('#token1').innerText="1A";
document.querySelector('#a1').style.backgroundImage="url('A1.jpg')";}}

 if(document.querySelector('.turn').innerText=="TURN: Player A"){

  if (document.querySelector('#token2').innerText=="2B") 
	{sixb=1;
        document.querySelector('#token2').innerText="1B";
document.querySelector('#a15').style.backgroundImage="url('B1.jpg')";}}}
if  (document.querySelector('.turn').innerText=="TURN: Player A")
{document.querySelector('.turn').innerText="TURN: Player B";}
else {document.querySelector('.turn').innerText="TURN: Player A";}

if(document.querySelector('#token1').innerText=="1A" && document.querySelector('.turn').innerText=="TURN: Player A")
 {if(dice!=6){
    if(pa1<29){document.querySelector('#a1').style.backgroundImage="url('red.png')";
 	document.querySelector('#a'+pa1).style.backgroundImage="url('Untitled.png')";}
 	pa1=dice+pa1;
 	if(pa1==29){alert("PLAYER A REACHED HOME");}
 	if (pa1<29) {
 	document.querySelector('#a'+pa1).style.backgroundImage="url('A1.jpg')";}
    if (pa1>29){
    	var a="PLAYER A CAN'T MOVE YOUR DICE IS "+document.querySelector('.number').innerText;
    	alert(a);
    	pa1=pa1-dice;
   document.querySelector('#a'+pa1).style.backgroundImage="url('A1.jpg')";
}
 	
 	}
 }
 if(document.querySelector('.turn').innerText=="TURN: Player B" && document.querySelector('#token2').innerText=="1B")
 {if(dice!=6){
 if(pb1<29){document.querySelector('#a15').style.backgroundImage="url('blue.png')";
document.querySelector('#a'+pb1).style.backgroundImage="url('Untitled.png')";}
pb1=dice+pb1;
if(pb1==29){alert("PLAYER B REACHED HOME");}
if (pb1<29) {
 	document.querySelector('#a'+pb1).style.backgroundImage="url('B1.jpg')";}
    if (pb1>29) {
    var b="PLAYER B CAN'T MOVE YOUR DICE IS "+document.querySelector('.number').innerText;
    	alert(b);
    pb1=pb1-dice;
    document.querySelector('#a'+pb1).style.backgroundImage="url('B1.jpg')";}}}


	if (dice==6 && document.querySelector('.turn').innerText=="TURN: Player A" && document.querySelector('#token1').innerText=="1A" && pa1!=1){
document.querySelector('#locker1').onclick=function lockera(dice,locker1,pa2){
    document.querySelector('#token1').innerText="0A";
    document.querySelector('#a1').style.backgroundImage="url('A1.jpg')";}}

if (document.querySelector('#token1').innerText=="0A" && document.querySelector('.turn').innerText=="TURN: Player A") {
document.querySelector('#a1').onclick=function movepa2(pa2,dice) {
document.querySelector('#a3').style.backgroundImage="url('A1.jpg')";
}



}




	
}



dice=spin();
 


                                                 
	




