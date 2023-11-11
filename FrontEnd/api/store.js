import { getAllData } from "./Works_API.js";

export const user = {
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'), 
    isConnected: localStorage.getItem('token') ? true : false,
}

const store = sessionStorage;
export let works = [];
export let categories = [];

export const initStore = async () => {
        await getAllData();
        works = JSON.parse(sessionStorage.getItem('works'));
        categories = JSON.parse(sessionStorage.getItem('categories'));
        return true;
}

export const addNewWorkToStore = (work) => {
    works.push(work);
    store.setItem('works', JSON.stringify(works));
}
export const deleteWorkFromStore = (work) => {
    works.splice(works.indexOf(work), 1);
    store.setItem('works', JSON.stringify(works));
}