
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../api/accountSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

const Register = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const state = useSelector((state) => state);

    const formik = useFormik({
        initialValues: {
            username: "ne22w",
            first_name: '',
            last_name: '',
            password: '',
            phone_number: ''
        },
        validate: usernameVerify,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            try {
                let registerPromise = registerUser(values);
                toast.promise(registerPromise, {
                    loading: 'Creating...',
                    success: <b>Register Successfully...!</b>,
                    error: <b>Could not Register.</b>
                });
                await registerPromise;
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }
    });

    // const handleToSubmit = async (e) => {
    //     e.preventDefault();
    //     if (users.password !== users.confirm_password) {
    //         setErrMsg('Passwords do not match');
    //         return;
    //     }
    //     try {
    //         const response = await dispatch(registerAccount(users));
    //         if (response == "ERR_BAD_REQUEST") {
    //             setLoginStatus("bad_err");
    //         }
    //         if (response == "ERR_NETWORK") {
    //             setLoginStatus("net_err");
    //         }
    //         if (response.accessToken) {
    //             setUsers("");
    //             setLoginStatus("idle");
    //             localStorage.setItem("user", JSON.stringify(response));
    //             const user = JSON.parse(localStorage.getItem("user"));
    //             if (user && (user.roles[0] == "admin")) {
    //                 navigate("/dashboard");
    //             } else {
    //                 navigate("/");
    //             }
    //         }
    //     } catch (err) {
    //         setLoginStatus("failed");
    //     }


    // }

    return (
        <div class="flex items-center justify-center h-screen">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div class=" p-4 rounded-lg shadow-lg max-w-sm w-full">
                <div class="flex justify-center mb-2">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={logo} alt="" />
                </div>
                <h2 class="text-2xl font-semibold text-center mb-4">{t("sign_up")}</h2>
                <p class="text-gray-600 text-center mb-6">{t("create_account")}</p>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div class="mb-2">
                        <input type="text" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder={t("first_name")}
                            {...formik.getFieldProps('first_name')} />
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder={t("last_name")}
                            {...formik.getFieldProps('last_name')} />
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder={t("phone_number")}
                            {...formik.getFieldProps('phone_number')} />
                    </div>
                    <div class="mb-2">
                        <input type="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder={t("password")}
                            {...formik.getFieldProps('password')} />
                    </div>
                    <div class="mb-2">
                        <input type="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 " required placeholder={t("confirm_password")}
                            {...formik.getFieldProps('confirm_password')} />
                        {/* <p class="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p> */}
                    </div>
                    <div class="mb-2">
                        <input type="checkbox" class="border border-gray-400" />
                        <span>
                            {t("am_agree")} <a href="#" class="text-orange font-semibold">{t("terms")}</a>&nbsp; {t("and")}  <a href="#" class="text-purple-500 font-semibold">{("privacy_Policy")}</a>
                        </span>
                    </div>
                    <button className="w-full bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none " type='submit'>{t("register")}</button>
                    <p class="text-gray-600  text-center mt-4">
                        {t("already_registered")} &nbsp;&nbsp;
                        <Link to={'/'} href="#" class="text-blue-500 hover:underline">{t("login")}</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

function usernameVerify(values, error = {},) {
    if (!values.first_name) {
        error.first_name = toast.error('First Name Required...!');
    } else if (values.first_name.includes(" ")) {
        error.first_name = toast.error('Invalid First Name...!')
    } else if (!values.password) {
        error.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Wrong Password...!");
    } else if (values.password.length < 4) {
        error.password = toast.error("Password must be more than 4 characters long");
    } else if (values.password !== values.confirm_password) {
        error.exist = toast.error("Password not match...!");
    }

    return error;
}
export default Register