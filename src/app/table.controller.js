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
    }
}

function isNewElement(element){
    var found = $$("data").find(function(obj){
        return (obj.id===element.id || obj.id===obj.sku);
    })
    if (element.id && element.sku && element.price && element.name && !found.length) return true;
}