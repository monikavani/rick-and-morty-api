'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

type UserContextType = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
  isLoading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('leonardoaiUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadUser()
  }, [])







  const handleSetUser = (newUser: User) => {
    localStorage.setItem('leonardoaiUser', JSON.stringify(newUser))
    setUser(newUser)
  }

  const clearUser = () => {
    localStorage.removeItem('leonardoaiUser')
    setUser(null)
  }

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        setUser: handleSetUser, 
        clearUser, 
        isLoading 
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}