import { All_data } from './api/Works_API.js';
import { Gallery_page } from './containers/Gallery.js';
import { Filter } from './components/Filter.js';
import { Edit_modal } from './components/Edit_modal.js';
import { Modal} from "./components/Modal.js";

const App = async () => {
    const datas = await All_data();
    const works = datas.worksData;
    const selectedFilter = await Filter(works);
    console.log("selectedFilter app :", selectedFilter);

    Edit_modal();
    Gallery_page(works, selectedFilter);
    Modal(works);

}
window.onload = App;