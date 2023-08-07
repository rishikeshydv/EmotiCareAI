import express, { Request, Response } from "express";
import axios from "axios";
import cors from 'cors';

const app = express();
const port = 3006;
  
app.use(express.json());
app.use(cors());

app.post('/chat', async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const { message } = req.body;

    // Make a POST request to Flask API passing the user input
    const response = await axios.post('http://127.0.0.1:5000/chat', { message });

    // Extract the response from the Flask API and send it back to the client
    res.json({ response: response.data.response });
  } catch (error) {
    console.error('Error during chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
