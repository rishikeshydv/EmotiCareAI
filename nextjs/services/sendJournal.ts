import axios from 'axios';
const cors = require('cors'); 

export const SendJournal = async (message: string) => {
  
  try {
    const {response} = await axios.post("http://localhost:8000/sentiment", {
      message
    });

    return {response};
  } catch (error) {
    // Handle the error here
    console.error("Error while sending journal:", error);
    throw error; // Rethrow the error or handle it as per your app's needs
  }
};