import Messages from "./Messages";


interface ChatMessagesProps {
    messages: Record<string, any>[];
}


const ChatMessages: React.FC<ChatMessagesProps> = ({
    messages
}) => {
    
    return (
      <div className="w-full h-full py-6 px-4">
        <div className="flex flex-col gap-3 items-end justify-start w-full h-full overflow-y-scroll overflow-x-hidden">
          {messages.map((msg) => (
            <Messages key={msg.date} msg={msg} />
          ))}
        </div>
      </div>
    );
}

export default ChatMessages;