import { All_data } from './api/Works_API.js';
import { Gallery_page } from './containers/Gallery.js';
import { Filter } from './components/Filter.js';
import { Edit_modal } from './components/modal/Edit_modal.js';
import { Modal} from "./components/modal/Modal.js";
import { Navbar } from './components/Navbar.js';

const App = async () => {
    const datas = await All_data();
    const works = datas.worksData;
    const {selectedFilter, filter_categories} = await Filter(works);
    console.log("selectedFilter app :", selectedFilter);
    console.log("filter_categories app :", filter_categories);
    Navbar();
    Edit_modal();
    Gallery_page(works, selectedFilter);
    Modal(works, filter_categories);

}
window.onload = App;