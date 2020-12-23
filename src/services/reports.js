import axios from 'axios';

export const getAll = (filters, page) => {
    const keys = Object.keys(filters);
    
    return axios.get(`http://localhost:8080/reports?page=${page}` + keys.reduce((res, val) => {
        res += '&' + encodeURIComponent(val) + '=' + encodeURIComponent(filters[val]);
        return res;
    }, '')).then(res => res.data);
}