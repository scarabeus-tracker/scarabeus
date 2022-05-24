import { createContext, useState } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from "../../firebase";
import { AuthContextProviderProps, User, AuthContextType } from '../../types/types';


export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  
  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logoutUser = () => {
  return signOut(auth)
}