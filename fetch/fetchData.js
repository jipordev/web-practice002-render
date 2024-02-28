const BASE_URL = 'http://127.0.0.1:5501/data/'
export const data = async function(endpoints) {
    try {
        const response = await fetch(BASE_URL + endpoints + '.json')
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error);
    }
}