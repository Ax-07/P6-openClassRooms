import { worksBus } from "../eventBus.js";
import { storeWorks } from "../../models/workStore.js";
import { user } from "../../models/user.js";
import { gallery } from "../../components/gallery.js";
import { filter } from "../../components/Filter.js";
import { deleteData } from "../api/worksApi.js";

export const workBus_Subscription = () => {
    console.log('subscribeToWorkStore executé');

    worksBus.subscribe("loadWorks", async (data) => {
      const initWorks = await storeWorks.initWorkToStore(data);
        if (initWorks) {
            console.log('loadWorks:', storeWorks);
            worksBus.emit("worksLoaded", data);
        }
    });

    worksBus.subscribe('worksLoaded', () => {
        gallery.setWorks(storeWorks.works);
        console.log('galleryCreated:', storeWorks);
    });

    worksBus.subscribe('filterChanged', (selectedFilter) => {
        const filteredWorks = filter.setFilteredWorks(storeWorks.works, selectedFilter);
        console.log('filteredWorks:', filteredWorks);
        gallery.setWorks(filteredWorks);
    });

    worksBus.subscribe('workCreated', (work) => {
        gallery.setWorks(storeWorks.works);
        console.log('work Created:', work);
    });
    
    worksBus.subscribe('workDeleted', (work) => {
        storeWorks.deleteWorkFromStore(work);
        deleteData(work.id, user.token);
        gallery.setWorks(storeWorks.works);

        console.log('work Deleted:', work);
    });
}