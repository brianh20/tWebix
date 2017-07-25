import {cancelChanges, saveChanges} from './product-edit.controller';


export var product_edit = { 
    id:"productEdit",
    hidden: true,
    rows: [
            { 	cols:[
                { id:"productForm", view:"form", elements:[
                    { view:"text", name:"id", label: "ID:"},  
                    { view:"text", name:"name", label: "Name"},  
                    { view:"text", name:"sku", label:"SKU"},  
                    { view:"text", name:"price", label: "Price:"}
                    ]}
            ]},
            { view:"toolbar", elements:[
            {},
            { view:"button", value:"Cancel", width:100, click:cancelChanges},
            { view:"button", value:"Save",  width:100, click:saveChanges}
            ]}
    ]};
