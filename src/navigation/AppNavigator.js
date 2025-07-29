import React, { useContext, useEffect } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';

// Tüm ekranları import et
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import HomeScreen from '../screens/HomeScreen';
import CompaniesScreen from '../screens/CompaniesScreen';
import DepartmentsScreen from '../screens/DepartmentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BranchesScreen from '../screens/BranchesScreen';
import CitiesScreen from '../screens/CitiesScreen';
import HierarchicalRegionsScreen from '../screens/HierarchicalRegionsScreen';
import FilterScreen from '../screens/FilterScreen';
import ReportDangerScreen from '../screens/ReportDangerScreen';

import OneSignal from 'react-native-onesignal';

const AuthStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

// --- Navigatör Grupları ---

const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Şifremi Unuttum' }} />
    <AuthStack.Screen name="ActivateAccount" component={ActivateAccountScreen} options={{ title: 'Hesap Aktivasyonu' }} />
    <AuthStack.Screen name="ReportDanger" component={ReportDangerScreen} options={{ title: 'Tehlike Bildir' }} />
  </AuthStack.Navigator>
);

const MainDrawerNavigator = () => {
    const { user } = useContext(AuthContext);
    return (
        <Drawer.Navigator initialRouteName="Ana Sayfa">
            <Drawer.Screen name="Ana Sayfa" component={HomeScreen} />
            
            {user?.role === 'Admin' && (
                <>
                    <Drawer.Screen name="Şirketler" component={CompaniesScreen} />
                    <Drawer.Screen name="Departmanlar" component={DepartmentsScreen} />
                    <Drawer.Screen name="Şubeler" component={BranchesScreen} />
                    <Drawer.Screen name="İller ve İlçeler" component={CitiesScreen} />
                </>
            )}

            {user?.role === 'Manager' && (
                <Drawer.Screen name="Departmanlar" component={DepartmentsScreen} />
            )}
            <Drawer.Screen name="Profil" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const AppStackNavigator = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="MainDrawer" component={MainDrawerNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name="HierarchicalRegions" component={HierarchicalRegionsScreen} options={({ route }) => ({ title: route.params.cityName })} />
        <RootStack.Screen name="Filter" component={FilterScreen} options={{ presentation: 'modal', headerShown: false }} />
    </RootStack.Navigator>
);


// --- Ana Navigatör Bileşeni ---

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

 // useEffect(() => {
  //  OneSignal.setAppId("da42df14-3f8c-4b9a-b561-c2d58b86c6d2");
  //  OneSignal.Notifications.requestPermission(true);
  //}, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;