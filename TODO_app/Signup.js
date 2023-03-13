import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import Username_Icon from "../assets/Username_Icon.png";
import Password_Icon from "../assets/Password_Icon.png";
import {StatusBar} from "expo-status-bar";
import {StackActions} from "@react-navigation/native";
import {userData, getNumUsers, addToUserData} from "./User"

const SignUp = ({navigation}) => {
    const [userName, setUserName] = useState('Username');
    const [fullName, setFullName] = useState('Full Name');
    const [password, setPassword] = useState('Password');
    const [confirm_password, set_confirm_password] = useState('Confirm Password');
    function navigate(){
        if((confirm_password == password) && (userName != "Username") && (fullName != "Full Name")){
            let user = {
                userid: getNumUsers(),
                    fullName: fullName,
                    email: userName,
                    password: password,
                    events: {

                    },
                    goals: {

                    },
            }
            addToUserData(user);
            navigation.dispatch(
                StackActions.replace('Login')
            )
        }
        else{
        }
    }
    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.login_container}>
                <Text style={styles.header_text}>Sign Up</Text>
                <Text style={styles.subheader_text}>Hello there, create a new account</Text>
                <View style={styles.text_input_box}>
                    <Image source={Username_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        returnKeyType="done"
                        onChangeText={(userInputValue) => setFullName(userInputValue)}
                        placeholder={"Your Name"}/>
                </View>
                <View style={styles.text_input_box}>
                    <Image source={Username_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        keyboardType="email-address"
                        returnKeyType="done"
                        onChangeText={(userInputValue) => setUserName(userInputValue)}
                        placeholder={"User Name"}/>
                </View>
                <View style={styles.text_input_box}>
                    <Image source={Password_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        secureTextEntry={true}
                        placeholder={"Password"}
                        onChangeText={(userInputValue) => setPassword(userInputValue)}/>
                </View>
                <View style={styles.text_input_box}>
                    <Image source={Password_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        secureTextEntry={true}
                        placeholder={"Confirm Password"}
                        onChangeText={(userInputValue) => set_confirm_password(userInputValue)}/>
                </View>
                <Pressable
                    style={styles.login_button}
                    onPressOut={() => navigate()}><Text style={styles.login_button_text}>Sign up</Text></Pressable>
                <Pressable
                    style={styles.new_user_signup_button}
                    onPress={() => navigation.dispatch(
                        StackActions.replace('Login')
                    )}
                ><Text style={styles.subheader_text}>Already Have an Account? </Text><Text style={styles.new_user_signup_button_text}>Sign in</Text></Pressable>
            </View>
            <StatusBar style="light"/>
        </SafeAreaView>
    );
}

export default SignUp;
