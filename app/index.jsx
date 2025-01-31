import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

//ctrl m to debug on emulator
export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext();
if(!isLoading && isLoggedIn) return <Redirect href="/home" /> //if user has logged in before, log them in automatically

  return (
    <SafeAreaView className="bg-primary h-full">
      
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-[85vh] px-4">
          <Text className="text-4xl text-white font-bold text-center">
            IvanVid
          </Text>

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Posibilities with   
              <Text className="text-secondary-200"> IvanVid </Text>
              </Text>
          </View>
          
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"> Where creativite users can share their favorite videos </Text>
        
          <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}