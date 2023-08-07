// app.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { Pool } from "pg";
import { Sequelize } from 'sequelize-typescript';
import { request } from "http";
import cors from 'cors';

const app = express();
const port = 3001;  
app.use(cors())
app.use(bodyParser.json());


const pool = new Pool ({
  max: 20,
  //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
  connectionString: 'postgres://postgres:2175@localhost:5432/postgres',
  idleTimeoutMillis: 30000
});

pool.connect();


const jwtSecret = "randomJwtSecret"; // Change this to a strong secret in production

interface User {
  fullname: string;
  email: string;
  dob: string;
  pwd: string;
}

// Helper function to generate JWT
const generateJWT = (user: User): string => {
  const payload = { 
    email: user.email
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
};

// Register a new user
app.post("/register", async (req: Request, res: Response) => {
  
  try { 
    const {fullname, email, dob, pwd } = req.body;
    const hashedPassword = await bcrypt.hash(pwd, 10);

    const result = await pool.query(
      "INSERT INTO users (fullname, email, dob, pwd) VALUES ($1, $2, $3, $4)",
      [fullname, email, dob, hashedPassword]
    );

      const user: User = result.rows[0];
      const token = generateJWT(user);

    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while registering." });
  }
});

// Login a user
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, pwd } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    const user: User = result.rows[0];
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(pwd, user.pwd);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = generateJWT(user);

    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while logging in." });
  }
});

app.post("/forget", async(req:Request,res:Response) =>{
  try {

    const {email,pwd} = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    const user: User = result.rows[0];
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const hashedPassword = await bcrypt.hash(pwd, 10);
    user.pwd = hashedPassword;

    res.json({ message: "Password changed successfully." });

  }
 catch(error){
    console.error(error);
    res.status(500).json({ error: "An error occurred while resetting password" });

}})

app.delete("/del", async(req:Request,res:Response)=>{
  try{
    const{email,dob} = req.body;
    const result = await pool.query("DELETE FROM users WHERE email,dob = $1,$2", [
      email,dob])

      if (result.rowCount===0){
        res.status(404).json({error:"Account not found"})
      }

      res.json({message:"Account Deleted Successfully"})


  } catch (error){
    res.status(404).json({err:"An error occurred while deleting your account"})

  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
