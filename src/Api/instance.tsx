import axios from 'axios'

export const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        timeout: 1000
    }
})


// expor const getData = async () => {
//     const data = await axios.(url, data);
// }