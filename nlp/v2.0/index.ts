import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

// const emotions = {
//   0: 'Very Negative',
//   1: 'Negative',
//   2: 'Neutral',
//   3: 'Positive',
//   4: 'Very Positive'
// };


app.post('/sentiment', async (req: Request, res: Response) => {
  const { text } = req.body;
  console.log(req.body)

  const APIendpoint = 'http://127.0.0.1:5000/sentiment';
  try {
    const response = await axios.post(APIendpoint, { text });
    const { sentiment } = response.data;
    //const emotion = emotions[sentiment];
    res.json(sentiment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
