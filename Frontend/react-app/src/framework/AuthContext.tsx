import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import {
    apiUsersLoginPost,
    apiUsersRegisterPost,
    ApiUsersLoginPostRequest,
    ApiUsersRegisterPostRequest,
} from '../../generated/src'; // Adjust the import based on your generated files

import { ApiUsersLoginPost200Response } from '../../generated/src/models';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = Cookies.get('access_token');
        setIsAuthenticated(!!token);
    }, []);

    const login = async (email: string, password: string) => {
        const requestParameters: ApiUsersLoginPostRequest = {
            body: { emailAddress: email, password },
        };
        try {
            const response = await apiUsersLoginPost<ApiUsersLoginPost200ResponseModel>(requestParameters);
            if (response.body.access_token) {
                Cookies.set('access_token', response.body.access_token, { expires: 7 });
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const register = async (firstName: string, lastName: string, email: string, password: string) => {
        const requestParameters: ApiUsersRegisterPostRequest = {
            body: { firstName, lastName, emailAddress: email, password },
        };
        await apiUsersRegisterPost<void>(requestParameters);
    };

    const logout = () => {
        Cookies.remove('access_token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
