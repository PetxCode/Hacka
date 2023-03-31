import axios from "axios";

const liveURL = "https://football-predict-api.onrender.com";

interface register {
  Name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}
