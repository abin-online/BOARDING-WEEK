import axios from "axios"

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products`);
        return response
    } catch (error) {

    }
}