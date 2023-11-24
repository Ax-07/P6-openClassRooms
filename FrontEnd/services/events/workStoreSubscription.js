import { worksBus } from "../eventBus.js";
import { storeWorks } from "../../models/workStore.js";
import { gallery } from "../../components/gallery.js";
import { filter } from "../../components/Filter.js";

export const subscribeToWorkStore = () => {
    console.log('subscribeToWorkStore executé');

    worksBus.subscribe("loadWorks", async (data) => {
      const initWorks = await storeWorks.initWorkToStore(data);
        if (initWorks) {
            console.log('loadWorks:', storeWorks);
            worksBus.emit("worksLoaded", data);
        }
    });
    worksBus.subscribe('worksLoaded', () => {
        filter.setCategories(storeWorks.categories);
        gallery.setWorks(storeWorks.works);
        console.log('galleryCreated:', storeWorks);
    });

    worksBus.subscribe('filterChanged', (selectedFilter) => {
        const filteredWorks = filter.setFilteredWorks(storeWorks.works, selectedFilter);
        console.log('filteredWorks:', filteredWorks);
        gallery.setWorks(filteredWorks);
    });


    worksBus.subscribe('workCreated', (work) => {
        createGallery();
        console.log('work Created:', work);
    });
    worksBus.subscribe('workDeleted', (work) => {
        
        createGallery();
        console.log('work Deleted:', work);
    });
}