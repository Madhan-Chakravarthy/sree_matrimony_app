import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOURS, FONTS, SIZES } from '../../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileCard = props => {

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                    onPress={() => props.navigation.goBack()}
                >

                    <Icon name="arrow-back" size={30} color={COLOURS.darkBlue}/>


                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* name section  */}
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        marginRight: SIZES.padding * 3,
                        paddingHorizontal:SIZES.padding * 3,
                        backgroundColor: COLOURS.lightGrey2,
                        borderRadius: SIZES.radius
                    }}>
                        <Text
                            style={{ ...FONTS.h3 ,color:COLOURS.darkBlue}}>
                            {props.userData.name}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    // image
    function renderImage() {
        return (

            <Image
                style={{
                    height: 600,
                    width: '100%',
                    marginBottom:SIZES.padding
                }}
                resizeMode='contain'
                source={{ uri:  props.userData.image ? props.userData.image: 'https://sree-matrimony-server.herokuapp.com/public/upload/anand.jpg-1633162413323.jpeg' }}
            />

        )
    }
    //userDetails
    function renderUserDetails() {
        return (
            // <ScrollView style={{paddingTop:SIZES.padding*2}} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
            <View>
                {personalInfo()}
                {familyInfo()}
                {horoscope()}
            </View>

        )
    }
/*     function renderFormHeader() {
        return (
            <View style={styles.formContainer}>
                <View style={{ flex: 1, paddingLeft: 10, paddingVertical: 10, borderRightWidth: 1, borderColor: COLOURS.lightGrey }}>
                    <Text style={FONTS.h4}>Personal Info</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingVertical: 10, borderLeftWidth: 1, borderColor: COLOURS.lightGrey }}>
                    <Text style={FONTS.h4}>Family Info</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingVertical: 10, borderLeftWidth: 1, borderColor: COLOURS.lightGrey }}>
                    <Text style={FONTS.h4}>Horoscopes</Text>
                </View>
            </View>
        )
    } */
    function personalInfo() {
        return (
            <View style={{ width: SIZES.width }}>
                {heading("personal Info")}
                {bodyContent("Name",props.userData.name)}
                {bodyContent("AGE",props.userData.age)}
                {bodyContent("DOB",props.userData.dob)}
                {bodyContent("Educational Qualification",props.userData.educationalQualification)}
                {bodyContent("Work",props.userData.work)}
            </View>
        )
    }
    function familyInfo() {
        return (
            <View style={{ width: SIZES.width }}>
                {heading("Family Info")}
                {bodyContent("Father Name",props.userData.fatherName)}
                {bodyContent("Mother Name",props.userData.motherName)}
                {bodyContent("Siblings",props.userData.siblings)}
            </View>

        )
    }
    function horoscope() {
        return (
            <View style={{ width: SIZES.width }}>
                 
                {heading("Horoscope")}
                {bodyContent("Star",props.userData.star)}
                {bodyContent("Zodiac",props.userData.zodiac)}
                {bodyContent("DOB",props.userData.dob)}

                <Image
                    style={{
                        height: 400,
                        width: '100%',
                    }}
                    resizeMode='contain'
                    source={{ uri: 'https://cdn.britannica.com/45/104045-050-116C1F93/Signs-of-the-Zodiac-astrology.jpg' }}
                />

            </View>
        )
    }
    function bodyContent(field,value) {
        return (
            <View style={{ width: SIZES.width, flex: 1 }}>
                <View style={styles.formContainer}>
                    <View style={{ flex: 1, paddingLeft: 10, paddingVertical: 10 }}>
                        <Text style={FONTS.body3, { color: COLOURS.lightBlue }}>{field}</Text>
                    </View>
                    <View style={{ flex: 1, paddingRight: SIZES.padding * 2, paddingVertical: 10, alignItems: 'flex-end' }}>
                        <Text style={FONTS.body3, { color: COLOURS.darkBlue }}>{value}</Text>
                    </View>
                </View>
            </View>

        )
    }

    function heading(heading) {
        return (
            <View style={{ backgroundColor: COLOURS.darkBlue, width: SIZES.width, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.h2, color: COLOURS.white }}>
                    {heading}
                </Text>
            </View>
        )
    }


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderHeader()}
                {renderImage()}
                {renderUserDetails()}
            </ScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    formContainer: {
        flexDirection: 'row',
        borderBottomColor: COLOURS.lightBlue,
        borderBottomWidth: 0.25,
    }
})

export default ProfileCard;