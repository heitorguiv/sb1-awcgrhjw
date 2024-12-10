import { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  updateXAuthorization: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check local storage for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setState(prev => ({
        ...prev,
        user: JSON.parse(savedUser),
        isLoading: false,
      }));
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = (user: User) => {
    setState({ user, isLoading: false, error: null });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setState({ user: null, isLoading: false, error: null });
    localStorage.removeItem('user');
  };

  const updateXAuthorization = (token: string) => {
    if (state.user) {
      const updatedUser = { ...state.user, xAuthorization: token };
      setState(prev => ({ ...prev, user: updatedUser }));
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, updateXAuthorization }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};