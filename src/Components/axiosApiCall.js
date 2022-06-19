import axios from 'axios';

function axiosApiCall(url,method,data){
    console.log(`Api call success on url ${url} for ${method} method.`, process.env);
    return axios[method.toLowerCase()]
    (`${process.env.REACT_APP_BASE_URL}${url}`, data);
}


export default axiosApiCall;