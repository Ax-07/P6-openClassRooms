//model user
export const user = {
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    isConnected: localStorage.getItem('token') ? true : false,
    setToken: (token) => { localStorage.setItem('token', token)},
    removeToken: () => { localStorage.removeItem('token')},
};
// model works & categories
const store = sessionStorage;
export const storeWorks = {
    workss: [],
    categoriess: [],

    setWorkToStore: (data) => {
        console.log("set store :", data);
        store.setItem('works', JSON.stringify(data.worksData));
        store.setItem('categories', JSON.stringify(data.categoriesData));
    },
    initWorkToStore: async (data) => {
        setWorkToStore(data);
        works = JSON.parse(sessionStorage.getItem('works'));
        categories = JSON.parse(sessionStorage.getItem('categories'));

        return true;
    },
    addNewWorkToStore: (work) => {
        works.push(work);
        store.setItem('works', JSON.stringify(works));
    },
    deleteWorkFromStore: (work) => {
        works.splice(works.indexOf(work), 1);
        store.setItem('works', JSON.stringify(works));
    },
};
export let works = [];
export let categories = [];

const setWorkToStore = (data) => {
    console.log("set store :", data);
    store.setItem('works', JSON.stringify(data.worksData));
    store.setItem('categories', JSON.stringify(data.categoriesData));
}

export const initWorkToStore = async (data) => {
    setWorkToStore(data);
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
