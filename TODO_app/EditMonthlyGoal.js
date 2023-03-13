import {useState} from "react";
import {Alert, Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import Close from "../assets/Close.png"
import Username_Icon from "../assets/Username_Icon.png";
import Checkbox from "expo-checkbox";
import ExpoCheckbox from "expo-checkbox";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {StackActions} from "@react-navigation/native";
import {addGoal, editGoal, getGoals, goalId, userData, deleteGoal} from "./User";
import {currUser} from "./Login_Screen";
import {selectedGoal, setListOfGoals} from "./MonthlyGoals"

const EditMonthlyGoal = ({navigation}) => {
    const [monthlyGoalName, setMonthlyGoalName] = useState(selectedGoal.goalName)
    const [goalDeadline, setGoalDeadline] = useState(selectedGoal.goalDeadLine)
    const [goalDescription, setGoalDescription] = useState(selectedGoal.goalDescription)
    const createTwoButtonAlert = () =>
        Alert.alert('Monthly Goal Edited Successfully!', monthlyGoalName + ' has been added to your monthly goals set for ' + goalDeadline + '!' , [
            { text: 'OK', onPress: () => nav()},
        ]);
    function nav(){
        editGoal(selectedGoal.goalId, currUser, monthlyGoalName, goalDeadline, goalDescription)
        setListOfGoals()
        navigation.dispatch(
            StackActions.replace("MonthlyGoals")
        )
    }
    function _deleteGoal(){
        deleteGoal(selectedGoal.goalId, currUser)
        setListOfGoals()
        navigation.dispatch(
            StackActions.replace("MonthlyGoals")
        )
    }
    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.add_goal}>
                <View style={styles.header_text_add_monthly_goals_with_close_button}>
                    <Text style={styles.header_text_add_monthly_goals}>Edit Goal</Text>
                    <Pressable style={styles.close_button}
                               onPress={() => navigation.dispatch(
                                   navigation.dispatch(
                                       StackActions.replace("MonthlyGoals")
                                   )
                               )}><Ionicons name="close" size={30} color="black" /></Pressable>
                </View>
                <Text style={styles.add_goal_text_box_header}>Goal Name</Text>
                <TextInput
                    style={styles.add_goal_text_input}
                    placeholder={"Goal Name"}
                    defaultValue={selectedGoal.goalName}
                    onChangeText={(userInputValue) => setMonthlyGoalName(userInputValue)}/>
                <Text style={styles.add_goal_text_box_header}>Goal Deadline</Text>
                <TextInput
                    style={styles.add_goal_text_input}
                    keyboardType={"numbers-and-punctuation"}
                    placeholder={"Goal Deadline"}
                    defaultValue={selectedGoal.goalDeadLine}
                    onChangeText={(userInputValue) => setGoalDeadline(userInputValue)}/>
                <Text style={styles.add_goal_text_box_header}>Goal Description</Text>
                <TextInput
                    style={styles.add_goal_text_input_description}
                    placeholder={"Enter monthly goal description"}
                    defaultValue={selectedGoal.goalDescription}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={(userInputValue) => setGoalDescription(userInputValue)}/>
                <View style={styles.text_with_checkbox}>
                    <Checkbox style={styles.checkbox}/>
                    <Text style={styles.checkbox_text}>Remind Me</Text>
                </View>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.add_goal_button_goal_creation} onPressOut={() => createTwoButtonAlert()}><Text style={styles.login_button_text}>Edit Goal</Text></Pressable>
                    <Pressable style={styles.trashButton}
                    onPress={()=> _deleteGoal()}><Ionicons name="trash" size={40} color="white" /></Pressable>
                </View>
                </View>
        </SafeAreaView>
    );
}
export default EditMonthlyGoal;
