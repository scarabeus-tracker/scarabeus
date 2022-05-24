export type AuthContextProviderProps = {
  children: React.ReactNode
}

export type User = {
  email: string,
  password: string
};

export type AuthContextType = {
  activeUser: User | null,
  setActiveUser: React.Dispatch<React.SetStateAction<User | null>>,
}