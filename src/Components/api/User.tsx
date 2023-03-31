import axios from "axios";
import { Ipredict } from "./Interfaces";

// const liveURL = "https://football-predict-api.onrender.com/api";
const liveURL = "http://localhost:3366";

interface register {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}
interface login {
  email: string;
  password: string;
}


export const RegisterUser = async ({
  name,
  userName,
  email,
  password,
  phoneNumber,
  confirmPassword,
}: register) => {
  return await axios
    .post(`${liveURL}/create`, {
      name,
      userName,
      email,
      password,
      phoneNumber,
      confirmPassword,
    })
    .then((res) => res.data);
};

export const Login = async ({ email, password }: login) => {
  return await axios
    .post(`${liveURL}/loginuser`, {
      email,
      password,
    })
    .then((res) => res.data);
};


//get one user

export const singleUser = async(id:any)=>{
  return await axios.get(`${liveURL}/getsingleuser/${id}`).then((res)=>res.data)
}

//PREDICTIONS
export const allPredictions = async()=>{
  return await axios.get(`/${liveURL}/prediction`).then((res)=>res.data)
}


//create prediction

export const CreatePrediction= async(id: string , matchID: string, data: Ipredict) =>{
  return await axios.post(`${liveURL}/${id}/${matchID}/create-prediction`, data).then((res)=> res.data)
}

///leader-table

export const viewLeaderBoard = async(id:any)=>{
  return await axios.get(`${liveURL}/${id}/user-predictions`).then((res)=>res.data)
}

///view-match

export const viewAllMatches = async() =>{
  return await axios.get(`${liveURL}/view-match`).then((res)=> res.data)
}