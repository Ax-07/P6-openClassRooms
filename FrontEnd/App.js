import { All_data } from './api/Works_API.js';
import { Gallery } from './containers/Gallery.js';
import { Filter } from './components/Filter.js';

const App = async () => {
    const datas = await All_data();
    const works = datas.worksData;
    const selectedFilter = await Filter(works);
    console.log("selectedFilter app :", selectedFilter);

    Gallery(works, selectedFilter);

}
window.onload = App;