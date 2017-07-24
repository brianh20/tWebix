webix.ui({
    rows: [
        { view:"toolbar", elements:[
        { view:"button", value:"Add",    width:100},
		{ view:"button", value:"Delete", width:100 },
		{ view:"button", value:"Clear form", width: 100, click:"$$('myform').clear()"},
		{ view:"button", value:"Delete all", width: 100}
        ]},
        { 	cols:[
            // { view:"form", id:"myform", elements:[
            // { view:"text", placeholder:"Title"},  
            // { view:"text", placeholder:"Year"}     
            //     ]},
            {
				view:"datatable", 
				autoheight:true,
				autowidth:true,
                select:true, //enables selection 
				columns:[
					{ id:"name",	header:"Name", width: 400},
					{ id:"id",		header:"Id"},
					{ id:"sku",		header:"Sku"},
					{ id:"price",	header:"Price"}
				],
				url:"../../mock/site.json"
            } 
        ]}
    ]
});
