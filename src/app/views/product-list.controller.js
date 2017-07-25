export function deleteSingle(){
    $$("data").remove($$("data").getSelectedId());
}

export function deleteAll(){
    $$("data").clearAll();
}

export function clearForm() {
    $$("productForm").clear();
}

export function addElement() {
    let element = $$("productForm").getValues();
    if(isNewElement(element)){
        $$("data").add($$("productForm").getValues());
        clearForm();
    }
}

function isNewElement(element){
    var found = $$("data").find(function(obj){
        return (obj.id===element.id || obj.sku===element.sku);
    })
    if (found.length) {
        webix.message("Product Id/Sku already exists");
        return;
    }
    if (!(element.id && element.sku && element.price && element.name)) {
        webix.message("Incomplete data");
        return;
    } 
    return true;
}