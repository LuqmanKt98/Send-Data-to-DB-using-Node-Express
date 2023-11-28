import axios from "axios";

const url = "http://localhost:5000";

export const addapplicant = async (ApplicantData) =>{
   await axios.post(`${url}/`,ApplicantData);
}


