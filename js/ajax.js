// JavaScript Document
"use strict";
function showCustomer(str){
	var xhttp;
	if (str =="")
		document.getElementById("txtHint").innerHTML ="";
	return;
}
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		document.getElementById("txtHint").innerHTML = this.responseText;
	   
	   }
};
xhttp.open("GET", "getcuster.asp?q="+str, true);
xhttp.send();