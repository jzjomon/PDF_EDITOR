import axios from 'axios';
import {baseURL} from '../constants/baseURL';

export const instance = axios.create({
    baseURL,
});
