// noinspection JSValidateTypes

import {useState} from "react";
import {Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import Checkbox from 'expo-checkbox';
import {currUser} from "./Login_Screen"
import {getGoal, getGoals, goalId} from "./User"
import {StackActions} from "@react-navigation/native";

let listOfMonthlyGoals;
let userGoals;
export let selectedGoal;
export function setListOfGoals(){
    listOfMonthlyGoals = [];
    userGoals = getGoals(currUser);
    let goalId = 0;
    for(const goal in userGoals){
        listOfMonthlyGoals[goalId] = userGoals[goal].goalId;
        goalId++;
    }
}
const MonthlyGoals = ({navigation}) => {
    setListOfGoals();
    function addMonthlyGoal() {
        navigation.navigate("AddMonthlyGoal")
    }
    function getGoalName(goalId){
        return getGoal(goalId, currUser).goalName
    }
    function editGoalInfo(goalId){
        selectedGoal = getGoal(goalId, currUser);
        navigation.dispatch(
            StackActions.replace("EditMonthlyGoal")
        )
    }
    return (
        <SafeAreaView style={styles.safe_view_container_monthly_goals}>
            <Text style={styles.header_text_monthly_goals}>Goals</Text>
            <View style={styles.monthly_goals_list_view}>
                <ScrollView showsVerticalScrollIndicator={false} style={{alignSelf: "center"}}>
                {listOfMonthlyGoals.map((goalId) => (
                    <Pressable style={styles.monthly_goals_view} onPress={() => editGoalInfo(goalId)}>
                        <Text style={styles.monthly_goal_text}>{getGoalName(goalId)}</Text>
                    </Pressable>))}
            </ScrollView>
            </View>
            <Pressable style={styles.add_goal_button} onPressOut={() => addMonthlyGoal()}><Text style={styles.login_button_text}>Add Goal</Text></Pressable>
            <Pressable style={styles.calendar_button} onPress={()=> navigation.dispatch(
                StackActions.replace("Login")
            )}><Text style={styles.login_button_text}>Log Out</Text></Pressable>
        </SafeAreaView>
    );
}
export default MonthlyGoals;
