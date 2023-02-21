import axios from 'axios';

const REACT_APP_BACKEND_URL = "https://ecommerce-nodejs-dfkvfs657-isahilsachdev.vercel.app"

function axiosApiCall(url,method,data){
    console.log(`Api call success on url ${url} for ${method} method.`, process.env);
    return axios[method.toLowerCase()]
    (`${REACT_APP_BACKEND_URL}${url}`, data);
}


export default axiosApiCall;