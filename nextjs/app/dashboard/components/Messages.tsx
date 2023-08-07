

interface MessagesProps {
    msg: Record<string, any>;
}


const Messages: React.FC<MessagesProps> = ({
    msg
}) => {
    return (
      <div
        className={`
       ${msg.sender === "user" ? "flex items-end justify-end w-full" : "flex items-start justify-start w-full"}
      `}
      >
        {msg.sender === "user" ? (
            <p className="text-neutral-200 rounded-lg p-2 bg-[#15526c] min-w-[200px] ">
              {msg.text}
            </p>
          
        ) : (
            <p className="text-neutral-200 rounded-lg p-2 bg-[#0c1c23] min-w-[200px] ">
              {msg.text}
            </p>
        )}
      </div>
    );
}

export default Messages;