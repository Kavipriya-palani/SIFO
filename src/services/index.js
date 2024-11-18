// import api from "../redux/utils/index";
import {get,post} from '../redux/utils/index'

export const onGetLoginDetails = () => {
    // return api.get(`/users`)
    return get('/users');
}
