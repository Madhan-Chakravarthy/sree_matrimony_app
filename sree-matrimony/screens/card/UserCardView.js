import React from 'react';
import { View ,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Caption } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { COLOURS, FONTS, SIZES } from '../../constants/Theme';


const UserCardView = props =>{
    const {item} = props.userData;
return (

    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.alignTwoHalf}>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.headerText}>{props.userData.name}</Text>
                        <Caption style={FONTS.body4,{color:COLOURS.lightGrey}}>Age is {props.userData.age}</Caption>
                        <Caption style={FONTS.body4,{color:COLOURS.lightGrey}}>Caste {props.userData.work}</Caption>
                        <Caption style={FONTS.body4,{color:COLOURS.lightGrey}}>Working as {props.userData.work}</Caption>
                    </View>
                </View>
                <View style={styles.secondHalf}>
                    <View style={styles.headerImage}>
                    <Caption style={FONTS.body5,{color:COLOURS.lightGrey}} >Age:{props.userData.age}</Caption>
                    <Text > </Text>
                    <Caption style={FONTS.body5,{color:COLOURS.lightGrey}}>Height:{props.userData.age}</Caption>
                    </View >
                    <Image
                     resizeMode='contain'
                    style={styles.imageContainer}
                    source={{uri: props.userData.image ? props.userData.image: 'https://sree-matrimony-server.herokuapp.com/public/upload/anand.jpg-1633162413323.jpeg'}}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("ViewProfile",{item:props.userData}) }>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>More info</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
 
    )
}

const styles = StyleSheet.create({
container:{
         flex:1,
         backgroundColor:COLOURS.lightBlue,     
},
card:{
 padding:10,
 margin:5,
 backgroundColor:COLOURS.darkBlue,
 alignItems:'center',
 justifyContent:'center',
 borderRadius:SIZES.padding*3


},

alignTwoHalf:{
  flexDirection:'row'
},
textContainer:{
    flex:2,
    justifyContent:'center',
    alignContent:'center',
    marginLeft:10
},
text:{
 fontSize:12,
 paddingVertical:5,
 color:COLOURS.lightGrey
},
headerImage:{
flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
 padding:5
},
headerText:{
    fontSize:16,
    fontFamily:'LatoBold',
    color:'white'
},
imageContainer:{
    marginHorizontal:10,
    height:100,
    width:80,
   borderRadius:10
},
secondHalf:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
buttonContainer:{
    marginVertical:10,
    width:100,
    padding:3,
    borderRadius:10,
    borderColor:'white',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center'
},
buttonText:{
    fontSize:16,
    color:'red',
    fontStyle:'italic',
    color:COLOURS.white
}
})

export default UserCardView;