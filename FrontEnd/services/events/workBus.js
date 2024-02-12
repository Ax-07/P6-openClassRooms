import { worksBus } from "../eventBus.js";
import { storeWorks } from "../../models/workStore.js";
import { user } from "../../models/user.js";
import { gallery } from "../../components/gallery.js";
import { filter } from "../../components/Filter.js";
import { deleteData } from "../api/worksApi.js";

export const workBus_Subscription = () => {
    
    worksBus.subscribe("loadWorks", async (data) => {
      const initWorks = await storeWorks.initWorkToStore(data);
        if (initWorks) {
            worksBus.emit("worksLoaded", data);
        }
    });

    worksBus.subscribe('worksLoaded', () => {
        gallery.setWorks(storeWorks.works);
    });

    worksBus.subscribe('filterChanged', (selectedFilter) => {
        const filteredWorks = filter.setFilteredWorks(storeWorks.works, selectedFilter);
        filter.setActiveFilter(selectedFilter);
        gallery.setWorks(filteredWorks);
    });

    worksBus.subscribe('workCreated', (work) => {
        gallery.setWorks(storeWorks.works);
    });
    
    worksBus.subscribe('workDeleted', (work) => {
        storeWorks.deleteWorkFromStore(work);
        deleteData(work.id, user.token);
        gallery.setWorks(storeWorks.works);
    });
}