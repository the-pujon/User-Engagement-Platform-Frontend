import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	return <AuthContext.Provider value={useAuth()} > {children}</AuthContext.Provider>;
};
