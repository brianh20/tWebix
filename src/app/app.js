import { product_list } from './views/product-list';

var menu_data = [
    {id: "product", icon: "gift", value: "Products",  data:[
        { id: "productList", icon:'list', value: "View Products"},
        { id: "productEdit", icon:'edit', value: "Edit Products"}
    ]}
];

webix.ui({
    cols:[
        { id:"sidebar", view: "sidebar", data: menu_data, on:{
								onAfterSelect: function(id){
									populateContent(id)
								}
                            }
        },
        product_list
        
    ]    
});

function populateContent(id){
    webix.message(id);
}
