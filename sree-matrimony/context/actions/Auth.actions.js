import jwtDecode from "jwt-decode";

import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUrl from "../../assets/common/BaseUrl"; 
import Toast from "react-native-toast-message";

const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const loginUser = (user,dispatch)=>{
    fetch(`${baseUrl}/users/login`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            Accept: 'application/json',
            "Context-Type" :  'application/json',
        },
    })
    .then((res)=> res.json())
    .then((data)=>{
        if(data){
            const token = data.token;
            AsyncStorage.setItem("jwt",token);
            const decoded = jwtDecode(token)
            dispatch(setCurrentUser(decoded, user))
        }else{
            logoutUser(dispatch)
        }
    })
    .catch((err)=>{
        Toast.show({
            topOffset:60,
            type: 'error',
            text1: "Please provide correct credentials",
            text2: ""
        });
        logoutUser(dispatch)
    })
};


export const getUserProfile = (id) => {
    fetch(`${baseURL}users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}


export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}