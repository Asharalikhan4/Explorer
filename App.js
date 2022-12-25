import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <Text className="text-red-600">Hey this is Ashar ali khan!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
};
