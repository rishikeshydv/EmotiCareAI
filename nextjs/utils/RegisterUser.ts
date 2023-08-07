import axios from "axios";

// register user
const RegisterUser = async (data: Record<string, string>) => {
    try {
      // const url = "https://emoticare.ai/api/v1/register";
      const url = "http://localhost:3001/register";
      const response = await axios.post(url, 
        {
          Headers: {
            "Content-Type": "application/json",
            "Content-Security-Policy": "default-src 'self'"
          }
        },
        data);

      return response.data;
    } catch (error) {
        console.log(error);
        return {
          error: "Oops! Something went wrong during the signup process",
        };
    }
}

export default RegisterUser;