import { showView } from '../app';

export function cancelChanges() {
    $$("editForm").clear();
    showView("productList");
}

export function saveChanges() {
    $$("data").updateItem($$("editForm").getValues().id, $$("editForm").getValues());
    $$("data").unselectAll();
    showView("productList");
}