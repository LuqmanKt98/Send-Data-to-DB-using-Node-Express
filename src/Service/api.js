import axios from "axios";

const url = "http://localhost:5000";

export const addapplicant = async (ApplicantData) =>{
   await axios.post(`${url}/AddApplicants`,ApplicantData);
}

export const getApplicant = async () =>{
   return await axios.get(`${url}/ViewApplicants`);
}


