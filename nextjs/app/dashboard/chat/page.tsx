"use client";

import { useCallback, useState } from "react";
import ChatInput from "../components/ChatInput";
import { SendMessage } from "@/services/SendMessage";
import ChatMessages from "../components/ChatMessages";


export default function ChatPage() {
  const [messages, setMessages] = useState<Record<string, any>[]>([
    { sender: "ai", text: "I'm here for you", date: new Date() },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;
    console.log("Sending message...");

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputMessage, date: new Date() },
    ]);

    try {
      fetch("http://localhost:3006/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Security-Policy": "default-src 'self'"
        },
        body: JSON.stringify({
          message: inputMessage
        })
      }).then(res => res.json())
        .then((aiResponse) => {
          console.log(aiResponse as Record<string, string>)
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "ai", text: aiResponse.response, date: new Date() },
          ]);
        })
 
    } catch (error) {
      console.error(error);
    }
    setInputMessage("");
  };

 
  return (
    <div className="w-full">
      <ChatMessages messages={messages} />
      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={(value) => setInputMessage(value)}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}
