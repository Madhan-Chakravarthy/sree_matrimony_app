import React, { useState, useCallback } from 'react';

import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import UserCardView from '../card/UserCardView';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import { SIZES } from '../../constants/Theme';
// import form json fake data
const data = require('../../assets/data/user.json');
import baseUrl from '../../assets/common/BaseUrl';
import axios from 'axios';

const HomeScreen = props => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect((
    useCallback(
      () => {
        axios
          .get(`${baseUrl}users`)
          .then((res) => {
            setUser(res.data);
            setLoading(false);
          }).catch((error) => { console.log('API call error') })
        return () => {
          setUser([])
        }
      },
      [],
    )
  ))

  return <>{loading == false ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={user}
        renderItem={itemData => <UserCardView navigation={props.navigation} userData={itemData.item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  ) :
    (<View style={{flex:1, paddingTop: SIZES.padding * 3,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
         <ActivityIndicator size="large" color="red" />
    </View>)
  }</>

}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    paddingTop: SIZES.padding * 3,

  },
});
export default HomeScreen;