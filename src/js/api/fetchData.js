import axios from "axios"

const BASE_URL = 'https://voodoo-sandbox.myshopify.com'

export const fetchData = async (limit, page) => {
    const { data } = await axios(`${BASE_URL}/products.json?limit=${limit}&page=${page}`)
    return data;
};