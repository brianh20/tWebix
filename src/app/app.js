import { addElement, deleteSingle, clearForm, deleteAll } from './table.controller.js';
//import table from './table.view.js';

var menu_data = [
    {id: "product", icon: "gift", value: "Products",  data:[
        { id: "productList", icon:'list', value: "View Products"},
        { id: "productEdit", icon:'edit', value: "Edit Products"}
    ]}//,
    // {id: "layouts", icon: "columns", value:"Layouts", data:[
    //     { id: "accordions", value: "Accordions"},
    //     { id: "portlets", value: "Portlets"}
    // ]},
    // {id: "tables", icon: "table", value:"Data Tables", data:[
    //     { id: "tables1", value: "Datatable"},
    //     { id: "tables2", value: "TreeTable"},
    //     { id: "tables3", value: "Pivot"}
    // ]}
];

webix.ui({
    cols:[
        { view: "sidebar", data: menu_data},
        { rows: [
            { view:"toolbar", elements:[
            { view:"button", value:"Add",    width:100, click: addElement},
            { view:"button", value:"Delete", width:100, click: deleteSingle},
            { view:"button", value:"Clear form", width: 100, click:clearForm},
            { view:"button", value:"Delete all", width: 100, click:deleteAll}
            ]},
            { 	cols:[
                { id:"productForm", view:"form", elements:[
                    { view:"text", name:"id", label: "ID:", placeholder:"888"},  
                    { view:"text", name:"name", label: "Name", placeholder:"Product Title 12"},  
                    { view:"text", name:"sku", label:"SKU", placeholder:"19QWE4VD"},  
                    { view:"text", name:"price", label: "Price:", placeholder:"99"}
                    ]},
                {
                    view:"datatable", 
                    id:"data",
                    autoheight:true,
                    gravity: 2,
                    select:true, //enables selection 
                    columns:[
                        { id:"id",		header:"", width: 50},
                        { id:"name",	header:"Name", width: 150},
                        { id:"sku",		header:"Sku", width: 120},
                        { id:"price",	header:"Price", width: 130}
                    ],
                    url:"../../mock/site.json"
                } 
            ]}
        ]}
    ]    
});

