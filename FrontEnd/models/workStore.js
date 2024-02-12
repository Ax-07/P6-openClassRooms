class WorksStore {
    constructor() {
        this.works = [];
        this.categories = [];
    }

    setWorkToStore(data) {
        console.log("set store :", data);
        sessionStorage.setItem('works', JSON.stringify(data.worksData));
        sessionStorage.setItem('categories', JSON.stringify(data.categoriesData));
    }

    async initWorkToStore(data) {
        this.setWorkToStore(data);
        this.works = JSON.parse(sessionStorage.getItem('works')) || [];
        this.categories = JSON.parse(sessionStorage.getItem('categories')) || [];

        return true;
    }

    addNewWorkToStore(work) {
        this.works.push(work);
        sessionStorage.setItem('works', JSON.stringify(this.works));
    }

    deleteWorkFromStore(work) {
        this.works.splice(this.works.indexOf(work), 1);
        sessionStorage.setItem('works', JSON.stringify(this.works));
    }
}

export const storeWorks = new WorksStore();