function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "../../mock/site.json", true);
  xhttp.send();
}

loadDoc();


webix.ui({
	type:"line",
	rows: [
		{ view:"toolbar", elements:[
			{ view:"button", value:"Add", width: 70},
			{ view:"button", value:"Delete", width: 70 },
			{ view:"button", value:"Update", width: 70 },
			{ view:"button", value:"Clear Form", width: 85 }]
		},
		{ cols:[
			{ template: "Column 1"}, 
			{ template: "Column 2"} ]
		}
	]
});
