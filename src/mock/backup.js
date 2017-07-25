// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      	console.log(JSON.parse(this.responseText));
//     }
//   };
//   xhttp.open("GET", "../../mock/site.json", true);
//   xhttp.send();
// }

//loadDoc();

//-----------------------------

// var siteGrid = {};

// siteData = webix.ajax().get("../../mock/site.json", {}, function(text, xml, xhr){
//     //response
//     return (text);
// });

// siteData.then(function(realdata){
// 	siteGrid = realdata.json().catalog;
// 	$$("myTable").refresh();
// }).fail(function(err){
//     console.log(err);
// });