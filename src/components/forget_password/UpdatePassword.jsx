import React, { useEffect, useRef, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../api/accountSlice';

function UpdatePassword() {
    const { t } = useTranslation()
    const userRef = useRef();
    const errRef = useRef();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    // request status
    const [loginStatus, setLoginStatus] = useState("idle");
    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);

    const [users, setUsers] = useState({
        confirm_password: '',
        password: ''
    })
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [users])

    const handleConfirmPasswordChange = (e) => {
        const confirm_password = e.target.value;
        setUsers({ ...users, confirm_password });
        validatePasswords(users.password, confirm_password);
    };

    const validatePasswords = (password, confirm_password) => {
        if (password !== confirm_password) {
            setErrMsg('Passwords do not match');
        } else {
            setErrMsg('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("weldsh");
        if (users.password !== users.confirm_password) {
            setErrMsg('Passwords do not match');
            return;
        }
        try {
            const response = await dispatch(updateProfile(users));
            if (response == "ERR_BAD_REQUEST") {
                setLoginStatus("bad_err");
            }
            if (response == "ERR_NETWORK") {
                setLoginStatus("net_err");
            }
            if (response.payload == 200) {
                setUsers("");
                setLoginStatus("idle");
                navigate("/login");
            }
        } catch (err) {
            setLoginStatus("failed");
        }


    }

    return (
        <>
            <div className='m-4 grid  gap-4 '>
                <p class="text-gray-600 text-center mb-0">{t("update_password")}</p>
                <div className='min-h-[250px] border bg-white  px-5 pt-3 pb-2 rounded justify-self-center'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='password'>{t("new_password")}</label>
                            <input type='password' ref={userRef} name='password' className='form-control' placeholder={t("new_password")}
                                value={users.password} onChange={e => setUsers({ ...users, password: e.target.value })} required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='confirm_pasword'>{t("confirm_new_password")}</label>
                            <input
                                type='password'
                                name='confirm_password'
                                className='form-control'
                                placeholder='Confirm New Password'
                                value={users.confirm_password}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>
                        {errMsg && <p className="text-red-500 text-sm mb-2">{errMsg}</p>}
                        <div className='mb-2'>
                            <button type="submit" class="w-full bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{t("update_password")}</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default UpdatePassword