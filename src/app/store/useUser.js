import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserData = create(
  persist(
    (set) => ({
      email: "",
      addEmail: (userEmail) => {
        set((state) => ({
          email: userEmail,
        }));
      },
    }),
    {
      name: "Rawrage user-email-storage",
    }
  )
);
