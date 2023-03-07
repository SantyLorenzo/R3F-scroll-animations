import { useLenis } from "@studio-freight/react-lenis";

export const useLockScroll = (lock: boolean) => {
  useLenis((lenis: any) => (lenis.isLocked = lock), [lock]);
};
