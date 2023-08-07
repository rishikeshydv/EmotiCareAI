"use client";
import { SendJournal } from "@/services/sendJournal";
import { useState, useCallback } from "react";
import AiBotResponse from "../components/AiResponse"
import Journal from "../components/Journal"


export default function JournalPage() {

    const [journal, setJournal] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const handleSendJournal = async () => {
        console.log(journal);
        fetch("http://localhost:8000/sentiment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Security-Policy": "default-src 'self'",
            },
            body: JSON.stringify({
                text: journal,
            }),
        })
            .then((res) => res.json())
            .then((data: string) => {
                setResponse(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex md:flex-row flex-col w-full h-full">
            <AiBotResponse
                response={response}
            />
            <Journal
                journal={journal}
                setJournal={setJournal}
                handleSendJournal={handleSendJournal}
            />
        </div>
    )
}

