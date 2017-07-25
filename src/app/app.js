import { product_list } from './views/product-list';
import { product_edit } from './views/product-edit';

var menu_data = [
    {id: "product", icon: "gift", value: "Products",  data:[
        { id: "productList", icon:'list', value: "View Products"},
        { id: "productEdit", icon:'edit', value: "Edit Products"}
    ]}
];

webix.ui({
    id: "fullView",
    cols:[
        { id:"sidebar", view: "sidebar", data: menu_data, on:{
								onAfterSelect: function(id){
									showView(id);
								}
                            }
        },
        product_edit,
        product_list
    ]    
});

export function showView(id){
    $$('fullView').getChildViews().forEach(function(view){
        if (view.name!=='sidebar') view.hide();
    });
    $$(id).show();
    $$("sidebar").select(id);
}
