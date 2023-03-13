import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import Username_Icon from "../assets/Username_Icon.png";
import Password_Icon from "../assets/Password_Icon.png";
import {StatusBar} from "expo-status-bar";
import {StackActions} from "@react-navigation/native";
import {checkUsername_password} from "./User"

export let currUser;
const Login = ({navigation}) => {
    const [userName, setUserName] = useState('Username');
    const [password, setPassword] = useState('Password');
    const [login_error, set_login_error] = useState(false);
    function navigate(){
        currUser = checkUsername_password(userName, password);
        if(currUser != -1){
            navigation.dispatch(
                StackActions.replace('MonthlyGoals')
            )
        }
        else{
            set_login_error(true);
        }
    }

    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.login_container}>
                <Text style={styles.header_text}>Sign in</Text>
                <Text style={styles.subheader_text}>Hi there, nice to see you again</Text>
                <View style={login_error ? styles.text_input_box_with_error : styles.text_input_box}>
                    <Image source={Username_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        keyboardType="email-address"
                        returnKeyType="done"
                        onChangeText={(userInputValue) => setUserName(userInputValue)}
                        placeholder={"User Name"}/>
                </View>
                <View style={login_error ? styles.text_input_box_with_error : styles.text_input_box}>
                    <Image source={Password_Icon} style={styles.text_input_icons}/>
                    <TextInput
                        style={styles.text_input_text}
                        secureTextEntry={true}
                        placeholder={"Password"}
                        onChangeText={(userInputValue) => setPassword(userInputValue)}/>
                </View>
                <Pressable style={styles.forgot_password_button}><Text style={styles.forgot_password_button_text}>Forgot Password?</Text></Pressable>
                <Pressable
                    style={styles.login_button}
                    onPressOut={() => navigate()}><Text style={styles.login_button_text}>Sign in</Text></Pressable>
                <Pressable
                    style={styles.new_user_signup_button}
                    onPress={() => navigation.dispatch(
                        StackActions.replace('SignUp')
                    )}
                ><Text style={styles.subheader_text}>New user? </Text><Text style={styles.new_user_signup_button_text}>Sign up</Text></Pressable>
            </View>
            <StatusBar style="light"/>
        </SafeAreaView>

    );
}

export default Login;
