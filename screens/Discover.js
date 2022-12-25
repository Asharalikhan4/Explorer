import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";
import { Attractions, AvatarImage, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";


const Discover = () => {

    const navigation = useNavigation();

    const [type, setType] = useState("restaurents");

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
                    <Text className="text-[36px] text-[#527283]">new places today</Text>
                </View>
                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                    <Image source={AvatarImage} className="w-full h-full rounded-md object-cover shadow-lg" />
                </View>
            </View>
            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 pxx-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometric" }}
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

            {/* Menu Container */}
            <ScrollView>
                <View className="flex-row items-center justify-between px-8 mt-8">
                    <MenuContainer
                        key={"hotel"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        setType={setType}
                    />
                    <MenuContainer
                        key={"attractions"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        setType={setType}
                    />
                    <MenuContainer
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        setType={setType}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover;