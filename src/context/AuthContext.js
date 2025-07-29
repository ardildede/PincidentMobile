// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
//import api from '../services/api';
import OneSignal from 'react-native-onesignal';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Örnek: { token: 'xyz', role: 'Admin', name: 'Tolgahan' }

  const login = async (email, password) => {
    try {
      // PDF'teki gereksinime göre login sırasında cihaza ait key backend'e gönderilir. [cite: 109, 111]
      //const deviceState = await OneSignal.getDeviceState();
     // const pushToken = deviceState.userId;

      // BURAYI KENDİ BACKEND'İNİZE GÖRE DÜZENLEYİN
      // const { data } = await api.post('/auth/login', { email, password, pushToken });

      // ---- GEÇİCİ KOD (Backend olmadan test için) ----
      let role = 'User';
      if (email.startsWith('admin')) role = 'Admin';
      if (email.startsWith('manager')) role = 'Manager';

      const mockData = {
          token: 'mock-jwt-token',
          role: role,
          name: email.split('@')[0],
      };
      // ---------------------------------------------
      
      // api.defaults.headers.common['Authorization'] = `Bearer ${mockData.token}`;
      setUser(mockData);

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    // api.defaults.headers.common['Authorization'] = null;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};