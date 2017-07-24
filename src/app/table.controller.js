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
    $$("data").add($$("productForm").getValues());
}