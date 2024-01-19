import React, {useEffect, useState } from 'react'
import BgImage from '../assets/mailimage.jpg'
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from 'react-router-dom';
import { LoginSchema } from '../Validations/Validations';
import { ToastError } from '../Components/Toast/Toasts';
import { useFormik } from 'formik';
import { GoogleLogin ,useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';

function Loginpage() {
    // Formic code
    const initialValues = {
        email: "",
        password: ""
    }
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const response = 'await UserLogin(values)'
            if (response.data.access) {
                localStorage.setItem("token", response.data.token)
                navigate("/")
            } else {
                ToastError(response.data.message)
            }
        }
    })

    // Google Login Function
    const [guser, setgUser] = useState([]);
    const { signIn, processing, error } = useGoogleLogin({
        onSuccess: (response) => setgUser(response),
        onError: (error) => console.log('Login Failed:', error)
    });
    
      
      useEffect(() => {
        if (guser && guser.access_token) {
          axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        }
      }, [guser]);
    
      const errorMessage = (error) => {
        console.log(error);
      };
    
    return (
        <div className="bg-cover bg-fixed  h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url(${BgImage})`,
            }}>
            <Card shadow={true} className="border bg-opacity-90  px-10 py-20 sm:py-10">
                <Typography variant="h4" color="blue-gray">
                    Connect To People{" "}
                </Typography>
                <div className='mt-8 mb-3 w-ful flex justify-center'>
                    <GoogleLogin
                        style={{ width: '100%' }}
                        onSuccess={signIn}
                        onError={errorMessage}
                    />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <hr className='w-full border-t-2 border-gray-300' />
                    <p className='mx-4'>or</p>
                    <hr className='w-full border-t-2 border-gray-300' />
                </div>

                <form className=" mb-2 w-full max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <div>
                            <Input
                                variant="standard"
                                label="Email"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email && (
                                <div className="text-red-500 text-sm ">{errors.email}</div>
                            )}
                        </div>
                        <div>
                            <Input
                                type="password"
                                variant="standard"
                                label="Password"
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {touched.password && errors.password && (
                                <div className="text-red-500 text-sm ">{errors.password}</div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 items-center">
                        <button type='submit' className="font-bold text border border-gray-600 rounded-full px-4 py-1">
                            Login
                        </button>
                    </div>
                    <Typography color="gray" className="mt-4 text-center italic font-normal">
                        Don't have an account?
                        <Link to='/register' href="#" className="ps-1 text-sm font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </Typography>
                    <Typography color="gray" className="text-center italic font-normal">
                        <Link to='/register' href="#" className="ps-2 font-medium text-sm text-gray-900">
                            Forgot Password?
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    )
}

export default Loginpage