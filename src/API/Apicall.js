import axios, { Axios } from 'axios';

const base_apiurl="https://localhost:3001";
const apicall=axios.create({
    baseurl:base_apiurl
})
export default apicall;