import axios from 'axios'
const server = `http://localhost:8000`
export const stroke = req => axios.get(`${server}/stroke/stroke`, req)
