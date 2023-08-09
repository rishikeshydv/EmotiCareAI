# EmotiCareAI
![emoticare.ai](./assets/landing.png)

## Overview 
```emoticare.ai``` is a persistent, fault tolerant and powerful AI-based mental health counseling platform with 3 consistently trained ```Deep Learning Models``` to analyze daily journaling text-sentiment through ```Natural Language Processing```, human mood via real-time facial features detection using ```OpenCV``` open-source framework, and help users express and validate their emotions to the emoticare ```AI-Psychiatrist``` bot. ```RESTAPI``` acts as a bridge between server and model.

## Frontend Setup
   ##### 1. To start the frontend, navigate to the nextjs folder:
   ```
      cd nextjs
   ```
   ##### 2. Install all frontend dependencies:
   ```
      npm install
   ```
   ##### 3. Start the frontend development server:
   ```
      npm run dev
   ```
   ##### 4. Access the app in your browser by visiting: http://localhost:3000
   ##### 5. To access all app features, including the dashboard, go to: http://localhost:3000/dashboard


## Backend Setup
   
   ### Flask API (Chat Functionality)
   #### 1. To run the Flask API for chat functionality, navigate to the chatbot folder:
   ```
      cd chatbot
   ```
   #### 2. Set the Flask app environment variable:
   ```
      export FLASK_APP=deploy.py
   ```
   #### 3. Run the Flask server:
   ```
      flask run
   ```
   The Flask server runs on port 5005.

   ### TypeScript Server (Connected to Flask API)
   #### 1. While still in the chatbot folder, run the TypeScript server:
   ```
      npx ts-node server.ts
   ```
   The TypeScript server is connected to the Flask API and runs on port 3006.
   #### 2. In your browser, visit http://localhost:3000/dashboard/chat to test the chat feature and observe AI responses.

Please note that the TypeScript server is intricately connected to the Flask API, facilitating communication between the frontend and backend components. Ensure that you have all the necessary dependencies installed before running the app components. If you encounter any issues during setup, please refer to the troubleshooting section or reach out to our support channels.
      


### 3. Technology Stack for Backend

  * Nextjs - A React Framework
  * Zustand - A state management library
  * Axios
  * Framer Motion
  * React Socket IO - Reall time communication between frontend and backend
  * Tailwind CSS
  * React WebCam


## Backend

### 1. Technology Stack for Frontend

  * Languages: Typescript, Python
  * Tools Used: Flask, Firebase
    
### 2. Features and Source files description
#### User Authentication and Authorization <br>
```./auth/server.ts```runs the server for the user authentication and authorization service. It lets users to register, login, reset password and delete their account. The password is hashed and a token is generated upon registration. The token refreshed after every login. The user credentials are stored in Firebase. <br>

#### Chatbot <br>
```./chatbot/model.ipynb``` is the Deep Learning Model trained with hardcoded ```intents.json```

```./chatbot/server.ts```runs the server for the chatbot service. It is connected to the Flask API using the endpoint ```/chat```. It allows user to conversate with a AI-Psychiatrist bot. <br>

#### Face Emotion Detector <br>
```./face-emotion-detect/emotiAI.ipynb``` is the Deep Learning Model trained with ```./face-emotion-detect/dataset/icml_face_data.csv```. The model and its weights is managed by ```./face-emotion-detect/model.py```The Webcam is operated through OpenCV library integrated in ```./face-emotion-detect/camera.py``` <br>
```./face-emotion-detect/server.ts```runs the server for the facial emotion detector service. It is connected to the Flask API using the endpoint ```/video_feed```. It allows user to conversate with a AI-Psychiatrist bot. <br>

#### Text Journalling <br>
```./nlp/model.py``` is the Natural Language Processing(NLP) model made through Transfer Learning from pre-built model, ```nlptown/bert-base-multilingual-uncased-sentiment```. 
```./nlp/index.ts```runs the server for the NLP service. It is connected to the Flask API using the endpoint ```/sentiment```. It allows user to write their daily journal and get a opinion validating response.

## Datasets Used
* icml_face_data.csv

## Algorithms/Models Used
* nlptown/bert-base-multilingual-uncased-sentiment
* Gradient-Weighted Class Activation Mapping (Grad-CAM)

## Devops
### Tools Used 
* Docker
* Kubernetes

  
## Roadmap for this project:
This is just the first version of the project. We are looking forward to enhance the front-end and improve the accuracy of Deep Learning Model. We also want to add more features and test it in real life world.
