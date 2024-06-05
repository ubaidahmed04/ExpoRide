import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	Image
} from 'react-native';
import { useAuth } from './authContext';
import { EvilIcons, FontAwesome6, Octicons } from '@expo/vector-icons';

const Page = () => {
	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const { onLogin } = useAuth();

	const onSignInPress = async () => {
		onLogin!(username, password);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<View>
			<Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/006/960/543/original/electric-bike-motorcycle-and-route-icon-on-white-free-vector.jpg", 
            }}
            style={styles.avatar}
          />
			</View>
			<Text style={styles.header}>Let's Get Started!
			</Text>
			<Text style={styles.headerBottom}>create an account to get all features </Text>

		    <View style={styles.inputContainer}>
			<FontAwesome6 name="user" size={20} color="#175E96" style={styles.icon} />
			<TextInput
				autoCapitalize="none"
				placeholder="admin"
				placeholderTextColor="#175E96"
				value={username}
				onChangeText={setUsername}
				style={styles.inputField}
				/>
				</View>
		    <View style={styles.inputContainer}>
			<Octicons name="unlock" size={20} color="#175E96" style={styles.icon} />
			<TextInput
				placeholder="password"
				placeholderTextColor="#175E96"
				value={password}
				secureTextEntry
				onChangeText={setPassword}
				style={styles.inputField}
				/>
				</View>
			

			<TouchableOpacity onPress={onSignInPress} style={styles.button}>
				<Text style={{ color: '#fff' }}>Sign in</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		paddingHorizontal: '10%',
		justifyContent: 'center',
	},
	avatar:{
		width:"100%",
		height:150,
		objectFit:"contain"
	},
	header: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 40,
	},
	headerBottom:{
		fontSize:14,
		color:"#c3c3c3",
		marginBottom: 30,
		textAlign:"center",
		paddingVertical:10,

	},
	icon:{
			marginRight: 15,
	},
	inputContainer:{
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		padding: 10,
		marginVertical: 6,
		height: 50,
		borderColor: '#175E96',
		borderRadius: 10,
		color:"#175E96",
	},
	inputField: {
		// flex: 1,
    	fontSize: 16,
	},
	button: {
		marginVertical: 25,
		// marginHorizontal:50,
		alignItems: 'center',
		backgroundColor: '#53A5F8',
		padding: 12,
		borderRadius: 10
	}
});
export default Page;
