import * as Yup from 'yup';

const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const passwordregex = "(?=.*[!@#$%^&*])"

export  const validation = Yup.object ({
    firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .min(3, 'Must be 3 characters or Above')
             .required('FristName Missing'),

    lastName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .min(5, 'Must be 5 characters or Above')
             .required('LastName Missing'),

    email   : Yup.string()
             .email("invalid email address")
             .matches(emailregex, "invalid email address")
             .required('Email Missing'),

    password:Yup.string()
             .matches (passwordregex,"password must be six to eight and uppercase, lowercase or special  character")
             .required("password Missing")              
})

