var url = "https://rosamaster129522.protheus.cloudtotvs.com.br:4050/api/purchasegroups/v1/purchaseGroups/{InternalId}" 
 
var xhr = new XMLHttpRequest();
xhr.open("GET",url, true);
xhr.onload = function () {
  var response = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 
	  && xhr.status == "200") {
		console.log(response);
	} else {
		console.error(response);
	}
}
xhr.send(null);