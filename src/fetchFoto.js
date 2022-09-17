import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '29948527-2314e3f34b81248b29ec7b1b5';
const PARAMETR = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=';

export async function fetchFoto(submitValue, pageforBtn) {
    try {
        const response = await axios.get(`${URL}?key=${KEY}&q=${submitValue}${PARAMETR}${pageforBtn}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};