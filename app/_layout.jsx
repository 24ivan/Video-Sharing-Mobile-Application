import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';
import GlobalProvider from  '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync(); //prevent splash screen from autohiding before asset loading is complete

const RooyLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
      });

  useEffect(() => { //executes functions while the screen is loading, fonts are being loaded, or an error occurs
    if(error) throw error;
    if(fontsLoaded) {SplashScreen.hideAsync();} //hides the native splace screen
  }, [fontsLoaded, error]);  

  if(!fontsLoaded && !error) return null;

  return(
        <GlobalProvider>
            <Stack>
                <Stack.Screen name ="index" options={{headerShown: false}} />
                <Stack.Screen name ="(auth)" options={{headerShown: false}} />
                <Stack.Screen name ="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name ="search/[query]" options={{headerShown: false}} />
                
            </Stack>
        </GlobalProvider>
    );
};

export default RooyLayout
