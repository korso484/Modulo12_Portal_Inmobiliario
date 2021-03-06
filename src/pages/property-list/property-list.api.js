import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) => Axios.get(`${url}?${queryParams}`).then(response => {
    return response.data;
});

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(response => {
    return response.data;
});

const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => Axios.get(provincesListUrl).then(response => {
    return response.data;
});