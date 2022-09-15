const URL = 'https://pixabay.com/api/';
const KEY = '29948527-2314e3f34b81248b29ec7b1b5';
const PARAMETR = 'fields=name,capital,population,flags,languages,currencies';

export function fetchFoto(name) {
    return fetch(`${URL}?key=${KEY}&q=${PARAMETR}`).then(response => {
        if (!response.ok || response.status === 404) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

// https://pixabay.com/api/?key=29948527-2314e3f34b81248b29ec7b1b5&q=yellow+flowers&image_type=photo
// ${URL}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageforBtn}