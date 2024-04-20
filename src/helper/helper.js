import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

/** To get username from Token */
export async function getUsername() {
    const token = localStorage.getItem('token')
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwtDecode(token)
    return decode;
}