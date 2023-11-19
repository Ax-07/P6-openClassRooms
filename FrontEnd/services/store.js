//model user
export const user = {
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    isConnected: localStorage.getItem('token') ? true : false,
    setToken(){ localStorage.setItem('token')},
    removeToken(){ localStorage.removeItem('token')},   
};
// model works & categories
export let works = [];
export let categories = [];


const store = sessionStorage;

const setStore = (data) => {
    console.log("set :", data);
    store.setItem('works', JSON.stringify(data.worksData));
    store.setItem('categories', JSON.stringify(data.categoriesData));
}

export const initStore = async (data) => {
    setStore(data);
    works = JSON.parse(sessionStorage.getItem('works'));
    categories = JSON.parse(sessionStorage.getItem('categories'));

    return true;
};

export const addNewWorkToStore = (work) => {
    works.push(work);
    store.setItem('works', JSON.stringify(works));
};

export const deleteWorkFromStore = (work) => {
    works.splice(works.indexOf(work), 1);
    store.setItem('works', JSON.stringify(works));
};
