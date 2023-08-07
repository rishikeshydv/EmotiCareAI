import { GrMicrophone } from "react-icons/gr";
import { MdUploadFile } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (msg: string) => void;
  handleSendMessage: () => Promise<void>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => {
  return (
    <div className="bottom-8 w-full fixed px-4">
      <div className="flex w-full flex-row items-center gap-3">
        <span className="rounded-xl cursor-pointer bg-neutral-300 p-2">
          <MdUploadFile color="#0c1c23" size={24} />
        </span>
        <span className="rounded-xl cursor-pointer bg-neutral-300 p-2">
          <GrMicrophone color="#0c1c23" size={24} />
        </span>
        <input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="w-full rounded-xl bg-[#d4f2ff] p-2"
          type="text"
          placeholder="Type a message"
        />
        <span
          onClick={handleSendMessage}
          className="rounded-xl cursor-pointer bg-neutral-300 p-2"
        >
          <LiaTelegramPlane color="#0c1c23" size={24} />
        </span>
      </div>
    </div>
  );
};

export default ChatInput;
