import React from 'react';
import { View ,Text,TouchableOpacity,StyleSheet} from 'react-native';


const UserList = props =>{
return (
    <TouchableOpacity>
        <View style={styles.container}>
            <View></View>
            <Text>Name</Text>
            <Text>{props.userData.name}</Text>
            <Text>{props.userData.age}</Text>
            <Text>{props.userData.work}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container:{
        padding:10,
        paddingVertical:20,
        backgroundColor:'yellow'
}
})

export default UserList;