import { create } from "zustand";

interface ModalStore {
  isWhatWeDoVisible: boolean;
  setWhatWeDoVisible: (v: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isWhatWeDoVisible: false,
  setWhatWeDoVisible: (v) => set({ isWhatWeDoVisible: v }),
}));
