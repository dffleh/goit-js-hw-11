import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '29948527-2314e3f34b81248b29ec7b1b5';
const PARAMETR = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=';

export async function fetchFoto(submitValue,pageforBtn) {
    try {
        return await axios.get(`${URL}?key=${KEY}&q=${submitValue}${PARAMETR}${pageforBtn}`).then(response => response.data);
        
    } catch (error) {
        console.error(error);
    }
    
    // return fetch(`${URL}?key=${KEY}&q=${q}${PARAMETR}`).then(response => {
    //     if (!response.ok || response.status === 404) {
    //         throw new Error(response.status);
    //     }
    //     return response.json();
    // });
};

// https://pixabay.com/api/?key=29948527-2314e3f34b81248b29ec7b1b5&q=yellow+flowers&image_type=photo
// ${URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageforBtn}
// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//  }