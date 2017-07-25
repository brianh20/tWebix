import { addElement, deleteSingle, clearForm, deleteAll } from './product-list.controller';

export var product_list = { 
    rows: [
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
    ]};
