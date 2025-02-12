import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AdvancedForm = () => {
    const formik = useFormik(
        {
            initialValues: {
                name: '',
                email: '@',
                password: '',
                confirmPassword: '',
                country: '',
            }, // TODO: Fill in initial values
            validationSchema: Yup.object({
                name: Yup.string().max(15, 'Name should be less than or equal to 15 characters').required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    .required('Confirm Password is required'),
                country: Yup.string().required('Country is required'),
            }), // TODO: Fill in validation schema
            onSubmit: (values) => {
                alert(JSON.stringify(values, null, 2));
            } // TODO: Handle form submission
        }
    )

    return (
        <div>
            <h1>Advanced Form</h1>
            <form onSubmit={formik.handleSubmit}>
                {/* TODO: Add form fields */}

                {/* Name Input */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}

                {/* Email Input */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                {/* Password Input */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}

                {/* Confirm Password Input */}
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}

                {/* Country Select */}
                <label htmlFor="country">Country:</label>
                <select id="country" name="country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}>
                    <option value="">Select a country</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                    <div>{formik.errors.country}</div>
                ) : null}

                {/* Submit Button */}
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AdvancedForm;
