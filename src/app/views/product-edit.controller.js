export function cancelChanges() {
    webix.message('Cancel');
}

export function saveChanges() {
    console.log($$("data"));
    webix.message('Save');
}