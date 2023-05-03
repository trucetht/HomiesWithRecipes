import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, VStack, Text, Box, HStack, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigator";
import HomeScreenFooter from "../components/HomeScreenFooter";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	return (
		<><SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<Box flex={1} p={4}>
				<Text fontSize="xl" fontWeight="bold" mb={2}>
					Home Screen
				</Text>
				<Text>
					Welcome to the Home Screen! This is where you can show some information about your app.
				</Text>
			</Box>
		</SafeAreaView><HomeScreenFooter routeName="Home" /></>
	);
};

export default HomeScreen;
