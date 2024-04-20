import React, { useEffect, useRef, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { userExist } from '../../api/accountSlice';

const SendOtp = () => {
  const { t } = useTranslation()
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [loginStatus, setLoginStatus] = useState("idle");

  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState(false);

  const [users, setUsers] = useState({
    phone_number: ''
  })
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [users])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(userExist(users));
      console.log(`weldsh ${response.payload}`);
      if (response == "ERR_BAD_REQUEST") {
        setLoginStatus("bad_err");
      }
      if (response == "ERR_NETWORK") {
        setLoginStatus("net_err");
      }
      if (response.payload == 200) {
        setUsers("");
        setLoginStatus("idle");
        navigate("/registerOtp", { state: { param1: users.phone_number } });
      }
    } catch (err) {
      setLoginStatus("failed");
    }
  }
  return (
    <div className='m-4 grid  gap-4 '>
      <p class="text-gray-600 text-center mb-0">{t("please_enter_phone")}</p>
      <div className='min-h-[200px] border  px-5 pt-3 pb-2 rounded  justify-self-center '>
        <p ref={errRef} className={errMsg ? "errmsg" :
          "offscreen"} aria-live="assertive">{errMsg}</p>
        {/* <h1>Login</h1> */}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>

            {/* <label htmlFor='phone'>Phone Number</label> */}
            <input type='text' ref={userRef} name='phone' className='form-control' placeholder={t("phone_number")}
              value={users.phone_number} onChange={e => setUsers({ ...users, phone_number: e.target.value })} required />
          </div>

          <div className='mb-2'>
            <button type="submit" class="w-full bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{t("send_code")}</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SendOtp