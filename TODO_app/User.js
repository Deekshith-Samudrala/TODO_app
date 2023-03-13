export let userData = {
    user1:{
        userid: 0,
        fullName: "Testing User",
        email: "Test@validemail.com",
        password: "password",
        events: {

        },
        goals: {
            goal1: {
                goalId: 0,
                goalName: "Pay all bills on time",
                goalDescription: "Pay all my bills on time!!!",
                goalDeadLine: "1:30PM"
            },
            goal2: {
                goalId: 1,
                goalName: "Complete home project",
                goalDescription: "Finish working on the designs for the home project and work on the project",
                goalDeadLine: "5:30PM"
            },
            goal3: {
                goalId: 2,
                goalName: "Paint room",
                goalDescription: "Pick up the paint from home depot",
                goalDeadLine: "9:00AM"
            },
        },
    },
}
export function getNumUsers(){
    let numUsers = 0;
    for(let user in userData){
        numUsers++;
    }
    return numUsers;
}
export function checkUsername_password(userName, password){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.email == userName){
            if(currUser.password == password){
                return currUser.userid;
            }
        }
    }
    return -1;
}
export function addToUserData(user){
    userData[user.userid] = user;
}
export let goalId;
export function getGoal(goalId, userId){
    let userGoals = getGoals(userId);
    for(const goal in userGoals){
        let currGoal = userGoals[goal];
        if(currGoal.goalId === goalId)
            return currGoal
    }
}
export function editGoal(goalId, userId, newGoalName, newGoalDeadline, newGoalDescription){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.userid == userId){
            for(const goal in userData[user].goals){
                if(userData[user].goals[goal].goalId == goalId){
                    userData[user].goals[goal].goalName = newGoalName;
                    userData[user].goals[goal].goalDescription = newGoalDescription;
                    userData[user].goals[goal].goalDeadLine = newGoalDeadline;
                    return;
                }
            }
        }
    }
}
export function deleteGoal(goalId, userId){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.userid == userId){
            for(const goal in userData[user].goals){
                if(userData[user].goals[goal].goalId == goalId){
                    delete userData[user].goals[goal];
                    goalId --;
                    return;
                }
            }
        }
    }
}
export function getGoals(userId){
    let goals = [];
    let currUser;
    let currUserGoalList;
    for(const user in userData){
        currUser = userData[user];
        if(currUser.userid == userId){
            currUserGoalList = currUser.goals;
        }
    }
    goalId = 0;
    for(const goal in currUserGoalList){
        goals[goalId] = currUserGoalList[goal].goalName;
        goalId++;
    }
    return currUser.goals;
}
export function addGoal(userId, goal){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.userid == userId){
            userData[user].goals[goalId] = goal;
        }
    }
}
