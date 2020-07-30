myTable = new Array(
"invitation.html",
"coupon.html");

function myRndLink(){
myRnd = Math.floor(Math.random()*myTable.length);
location.href = myTable[myRnd];
}

function myRndLink(){ 
var links = getLinks();
var myRnd = Math.floor(Math.random()*links.length);
location.href = links[myRnd]; 
}
