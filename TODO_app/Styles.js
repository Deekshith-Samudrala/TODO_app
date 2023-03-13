import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    safe_view_container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#1A181B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login_container: {
        width: Dimensions.get("screen").width*0.8,
        justifyContent: "center",
        //alignItems: "center"
    },
    home_container: {
        width: Dimensions.get("screen").width*0.8,
        justifyContent: "center",
        //alignItems: "center"
    },
    goal_container: {
        width: Dimensions.get("screen").width*0.8,
        height:  Dimensions.get("screen").height*0.5,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        //alignItems: "center"
    },
    header_text: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 32,
    },
    add_header: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 20,


    },
    addsubheader_text: {
        color: 'black',
        fontWeight: "normal",
        fontSize: 16,

    },
    home_header: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 32,
        justifyContent: "top-center",
    },
    add_button: {
        //width: Dimensions.get("screen").width*0.8,
        height: 30,
        marginTop: -400,
        borderRadius: 15,
        alignSelf: "left",
        backgroundColor: "#B084CC",
        //justifyContent: "left",
        //alignItems: "center"

    },
    subheader_text: {
        color: 'white',
        fontWeight: "normal",
        fontSize: 16,
    },
    text_input_box: {
        backgroundColor: 'white',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: "row",
    },
    addtext_input_box: {
        backgroundColor: 'gray',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: "row",

    },
    text_input_text:{
        color: 'black',
        fontSize: 16,
        fontWeight: "normal",
        alignSelf: "center",
        margin: 10,
        flexDirection: "row",
        overflow: "hidden",
        maxWidth: 250,
        width: 250,
    },
    text_input_icons: {
        width: 35,
        height: 35,
        alignSelf: "center",
        margin: 10
    },
    login_button: {
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 30,
        borderRadius: 15,
        backgroundColor: "#B084CC",
        justifyContent: "center",
        alignItems: "center"
    },
    login_button_text: {
        color: 'white',
        fontWeight: "700",
        fontSize: 24,
    },
    forgot_password_button: {
        alignSelf: "flex-end",
        marginTop: 10,
    },
    forgot_password_button_text: {
        color: '#B084CC',
        fontWeight: "normal",
        fontSize: 14,
        textDecorationLine: "underline",
    },
    new_user_signup_button: {
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
    },
    new_user_signup_button_text: {
        color: '#B084CC',
        fontWeight: "normal",
        fontSize: 16,
        textDecorationLine: "underline",
    },
    safe_view_container_monthly_goals: {
        flex: 1,
        backgroundColor: '#1A181B',
        alignItems: 'flex-start', // Vertical Alignment
        justifyContent: 'flex-start', // Horizontal Alignment
    },
    header_text_monthly_goals: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 32,
        marginLeft: 30,
        alignSelf: "center"
    },
    monthly_goals_list_view: {
        backgroundColor: "#252525",
        alignItems: 'flex-start', // Vertical Alignment
        justifyContent: 'center', // Horizontal Alignment
        width: Dimensions.get("screen").width*0.9,
        height: Dimensions.get("screen").height*0.55,
        //padding: 20,
        margin: 20,
        alignSelf: "center",
        borderRadius: 15
    },
    monthly_goals_view:{
        backgroundColor: "#B084CC",
        width: Dimensions.get("screen").width*0.75,
        margin: 20,
        borderRadius: 15,
        height: 60,
        justifyContent: "center",
    },
    monthly_goal_text:{
        fontWeight: "700",
        fontSize: 22,
        color: "white",
        marginLeft: 20,
    },
    add_goal_button:{
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#74A57F",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    calendar_button:{
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#05668D",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    add_goal:{
        backgroundColor: "white",
        maxWidth: Dimensions.get("screen").width*0.9,
        flex: 1,
        borderRadius: 20
    },
    header_text_add_monthly_goals: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 30,
        marginTop: 30,
    },
    add_goal_text_box_header:{
        color: 'black',
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 10,
    },
    add_goal_text_input: {
        borderColor: "black",
        borderRadius: 15,
        borderWidth: 1.2,
        width: Dimensions.get("screen").width*0.80,
        height: 50,
        alignSelf: "center",
        paddingLeft: 20,
    },
    add_goal_text_input_description: {
        borderColor: "black",
        borderRadius: 15,
        borderWidth: 1.2,
        width: Dimensions.get("screen").width*0.80,
        height: 150,
        alignSelf: "center",
        paddingTop: 20,
        marginBottom: 20,
        paddingLeft: 20
    },
    header_text_add_monthly_goals_with_close_button:{
        flexDirection: "row",
    },
    close_button: {
        justifyContent: "flex-end",
        marginLeft: 200,
    },
    checkbox: {
        marginLeft: 30,
        marginTop: 1.5,
        borderColor: "black"
    },
    text_with_checkbox:{
        flexDirection: "row",
    },
    checkbox_text: {
        color: 'black',
        fontWeight: "500",
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10,
    },
    add_goal_button_goal_creation:{
        width: Dimensions.get("screen").width*0.5,
        height: 60,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#B084CC",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 30,
    }, text_input_box_with_error: {
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'white',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: "row",
    },
    buttonRow:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        //alignSelf: "center"
    },
    trashButton:{
        alignSelf: "center",
        backgroundColor: '#FE5F55',
        padding: 5,
        borderRadius: 50,
        justifyContent: "center",
        marginBottom: 15,
        marginRight: 10
    }


});
