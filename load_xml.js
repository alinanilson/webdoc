$(document).ready ( function(){
	
	loadXMLDoc();
	
	function loadXMLDoc() {
	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		  createTable(this);
		}
	  };
	  xmlhttp.open("GET", "price_list.xml", true);
	  xmlhttp.send();
	}


	function createTable(xml) {
		var i;	
		var xmlDoc = xml.responseXML;
		var table="<tr><th>Service</th><th>Small Companies</th><th>Big Companies</th><th>Government</th><th>Duration</th></tr>";
		var x = xmlDoc.getElementsByTagName("service");
		for (i = 0; i < x.length; i++) { 
			table += "<tr><td>" +
			
			x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
			"</td><td>" +
			
			x[i].getElementsByTagName("PRICE1")[0].childNodes[0].nodeValue +
			"</td><td>" +
			  
			x[i].getElementsByTagName("PRICE2")[0].childNodes[0].nodeValue +
			"</td><td>" +
				
			x[i].getElementsByTagName("PRICE3")[0].childNodes[0].nodeValue +
			"</td><td>" +
				
			x[i].getElementsByTagName("DURATION")[0].childNodes[0].nodeValue +
			"</td></tr>";
		}
		document.getElementById("pricelist").innerHTML = table;
	}

});