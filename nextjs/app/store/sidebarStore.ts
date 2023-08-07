import create from 'zustand';

interface SidebarStore {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: false,
    setOpen: (isOpen: boolean) => set({ isOpen }),
}));