import { OrgSubscription } from "@prisma/client";
import { create } from "zustand";

type ProModalStore = {
    subscribed: boolean;
    subscriptionData?: OrgSubscription | null;
    isOpen: boolean;
    onOpen: (subscribed: boolean, subscriptionData: OrgSubscription | null) => void;
    onClose: () => void;
}

export const useProModal = create<ProModalStore>((set) => ({
    subscribed: false,
    subscriptionData: undefined,
    isOpen: false,
    onOpen: (subscribed: boolean, subscriptionData: OrgSubscription | null) => set({ subscribed, isOpen: true, subscriptionData }),
    onClose: () => set({ subscribed: false, isOpen: false, subscriptionData: undefined }),
}));