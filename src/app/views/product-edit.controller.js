import { showView } from '../app';

export function cancelChanges() {
    $$("editForm").clear();
    showView("productList");
}

export function saveChanges() {
    if($$("editForm").getValues().id){
        $$("data").updateItem($$("editForm").getValues().id, $$("editForm").getValues());
        $$("data").unselectAll();
    }else{
        webix.message("No row selected");
    }
    showView("productList");
}