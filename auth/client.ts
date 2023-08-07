import axios from "axios";

const API_URL = "http://localhost:3000"; // Update this with your server URL

async function register(username: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Error during registration.");
  }
}

async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Error during login.");
  }
}

// Example usage:
register("user1", "password123")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

login("user1", "password123")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
