const { default: axios } = require("axios")

const API_KEY = process.env.KEY 


const axiosClient = axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':'Bearer ${API_KEY}'
    }
})

const getCategory = ()=> axiosClient.get('/categories?')

const getDoctorList = ()=> axiosClient.get('/doctors?populate=*')

const getDoctorByCategory = (category)=> axiosClient.get('/doctors?filters[categories][Name][$in]='+"&populate=*")

const getDoctorById = (id)=>axiosClient.get('/doctors'+id+'?populate=*')

const bookAppointment = ()=>axiosClient.post('/appointments',data);

// 4.18

const sendEmail = (data) =>axios.post('/api/sendEmail',data);

export {getCategory , getDoctorList,getDoctorByCategory,getDoctorById,bookAppointment,sendEmail}