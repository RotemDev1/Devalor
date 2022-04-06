import { Users } from "../../data/dummyUsers";

import { storageService } from "./asyncStorageService";

export const dataService = {
    initData,
    removeData
}

function initData() {
    storageService.newEntity('user', Users);
}

function removeData() {
    storageService.deleteStorage();
}