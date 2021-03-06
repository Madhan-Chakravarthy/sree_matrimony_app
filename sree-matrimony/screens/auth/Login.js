import React, {useContext, useState} from 'react';
import {

  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  View
} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { FONTS } from '../../constants/Theme';
import LoadExpoFont from '../../constants/LoadExpoFont';
//import { AuthContext } from '../navigation/AuthProvider';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  //const {login}= useContext(AuthContext);

  const handleLogin = () =>{
    const user ={
      email,
      password
    }
    if (email==='' || password===''){
        setError('Please fill in your credentials');
    }
    else{
      console.log('success');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/onboarding_img_1.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Sree Matrimony</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      {/* error */}
      {error ? <Text style={{...FONTS.body3,color:'red'}}>{error}</Text> : null }

      <FormButton
        buttonTittle="Sign In"
        onPress={() => handleLogin()}
      />
      
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}
       >
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    ...FONTS.body2,
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    ...FONTS.body3
  },
});