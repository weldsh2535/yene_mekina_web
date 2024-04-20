import React, { useState } from 'react'
import avatar from '../../assets/images/logo.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import convertToBase64 from '../../utils/convert';
import useFetch from '../../hooks/fetch_hooks';
import { updateProfile } from '../../api/accountSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileUpdate() {

    const [file, setFile] = useState();

    const [{ isLoading, apiData, serverError }] = useFetch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: apiData?.firstName || '',
            lastName: apiData?.lastName || '',
            email: apiData?.email || '',
            mobile: apiData?.mobile || '',
            address: apiData?.address || ''
        },
        enableReinitialize: true,
        validate: profileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || apiData?.profile || '' })
            let updatePromise = updateProfile(values);

            toast.promise(updatePromise, {
                loading: 'Updating...',
                success: <b>Update Successfully...!</b>,
                error: <b>Could not Update!</b>
            });

        }
    })

    /** formik doensn't support file upload so we need to create this handler */
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    // logout handler function
    function userLogout() {
        localStorage.removeItem('token');
        navigate('/')
    }

    // if (isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    // if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>

    return (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center h-screen'>
                <div className={` shrink-0 h-4/4 w-[30%] rounded-2xl py-2 px-2 min-w-max`} style={{ width: "45%", paddingTop: '3em' }}>

                    <div className="title flex flex-col items-center">
                        <h4 className='text-2xl font-bold'>Edit Profile</h4>

                    </div>

                    <form className='py-2' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-2'>
                            <label htmlFor="profile">
                                <img src={apiData?.profile || file || avatar} className={` cursor-pointer border-1 border-gray-100 w-[135px] rounded-full hover:border-gray-200`} alt="avatar" />
                            </label>

                            <input onChange={onUpload} type="file" id='profile' name='profile' className={`hidden`} />
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('firstName')} className={`textbox w-3/4 border-0 px-5 py-2 rounded-xl shadow-sm text-lg focus:outline-none`} type="text" placeholder='FirstName' />
                                <input {...formik.getFieldProps('lastName')} className={`textbox w-3/4 border-0 px-5 py-2 rounded-xl shadow-sm text-lg focus:outline-none`} type="text" placeholder='LastName' />
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input {...formik.getFieldProps('mobile')} className={`textbox w-3/4 border-0 px-5 py-2 rounded-xl shadow-sm text-lg focus:outline-none`} type="text" placeholder='Mobile No.' />
                                <input {...formik.getFieldProps('email')} className={`textbox w-3/4 border-0 px-5 py-2 rounded-xl shadow-sm text-lg focus:outline-none`} type="text" placeholder='Email*' />
                            </div>


                            <input {...formik.getFieldProps('address')} className={`textbox w-3/4 border-0 px-5 py-2 rounded-xl shadow-sm text-lg focus:outline-none`} type="text" placeholder='Address' />
                            <button className='border bg-orange w-3/4 py-2 rounded-lg text-white text-xl shadow-sm text-center' type='submit'>Update</button>


                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
function profileValidation(values, error = {}) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}