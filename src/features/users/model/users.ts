import { create } from 'zustand';

interface User {
  id: number;
  username: string;
}

interface UsersState {
  users: User[];
  isLoading: boolean;
  errors: string[];
  addUser: (username: string) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  isLoading: false,
  errors: [],
  addUser: (username: string) =>
    set((state) => ({
      users: [...state.users, { id: Date.now(), username }],
    })),
}));
