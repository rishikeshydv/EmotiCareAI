import { create } from "zustand";


interface VideoResStore {
    response: string;
    setResponse: (response: string) => void;
}

export const useVideoResStore = create<VideoResStore>((set) => ({
    response: "",
    setResponse: (response: string) => set({ response }),
}));