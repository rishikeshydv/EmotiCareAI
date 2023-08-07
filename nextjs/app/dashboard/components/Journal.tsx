"use client";

interface JournalProps {
    journal: string;
    setJournal: (journal: string) => void;
    handleSendJournal: () => void;
}

const Journal: React.FC<JournalProps> = ({
    journal,
    setJournal,
    handleSendJournal
}) => {

  return (
    <div className="px-5 w-full h-full flex item-center justify-center">
      <textarea
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
        className="w-full h-full bg-[#0c1c23] text-[#fff] p-5 rounded-lg outline-none"
        placeholder="Write your journal here..."
      ></textarea>
      <span 
      onClick={handleSendJournal}
      className="absolute flex items-center justify-center translate-y-20">
        <button className="bg-[#306E88] font-semibold text-lg text-[#fff] px-4 py-2 rounded-lg ">
          Journal
        </button>
      </span>
    </div>
  );
};

export default Journal;
