import axios from "axios";


const LoginUser = async (data: Record<string, string>) => {
    try {
      // const url = "https://emoticare.ai/api/v1/login";
      const url = "http://localhost:5000/login";
      const response = await axios.post(url, data);

      return response.data;
    } catch (error) {
        console.log(error);
        return {
          error: "Oops! Something went wrong during the login process",
        };
    }
}