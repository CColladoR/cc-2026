import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string, username: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check generic session storage on mount
  useEffect(() => {
    const session = sessionStorage.getItem('apa_admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string) => {
    // Hardcoded credentials as requested
    if (username === 'APAAdmin' && password === 'SarMa%4897') {
      setIsAuthenticated(true);
      sessionStorage.setItem('apa_admin_session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('apa_admin_session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};