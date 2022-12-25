import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";
import { AvatarImage } from "../assets";


const Discover = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Let's Explore</Text>
                    <Text className="text-[36px] text-[#527283]">new places today.</Text>
                </View>
                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                    <Image source={AvatarImage} className="w-full h-full rounded-md object-cover shadow-lg" />
                </View>
            </View>
            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 pxx-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{fields : "geometric"}}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Discover;