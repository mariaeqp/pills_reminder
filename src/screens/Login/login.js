import React, {useState, useEfecct} from 'react';
import {View, Text, TouchableOpacity, Button, KeyboardAvoidingView, TextInput, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styles from './styles';
import firebase from'../../util/firebase';

function Login ({navigation}){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                var user = userCredential.user;
                navigation.navigate('Inicial')
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    const[fontsLoaded] = useFonts({
        PoppinsSemiBold:require('../../../assets/fontes/Poppins-SemiBold.ttf'),
        PoppinsMedium:require('../../../assets/fontes/Poppins-Medium.ttf')
    })

    if(!fontsLoaded){
        return null
    }

    return(
    <KeyboardAvoidingView
        style={styles.container}
    >
        <Image source={require('../../../assets/Slider.png')}/>

        <Text style={styles.title}>LOGIN</Text>
       
        <View style= {styles.inputEmail}>   
        <TextInput
            style={styles.input}
            placeholder='Email'
            type='text'
            onChangeText={(text)=> setEmail(text)}
            value={email}
            />
        </View>
        
        <View>   
        <TextInput
            style={styles.input}
            secureTextEntry
            placeholder='Senha'
            type='text'
            onChangeText={(text)=> setSenha(text)}
            value={senha}
            />
        </View>  

        {/*errorLogin === true
        ?
        <View style={styles.input}>
            <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#bdbdbd"
            />
            <Text style={styles.input}>Email ou senha incorreta</Text>
            </View>

        : 
            <View/>

        */}

        <TouchableOpacity style={styles.btnLogin} onPress={loginFirebase}>
            <Text style={styles.txtBtnLogin}>
                Entrar
            </Text>
        </TouchableOpacity>
        
        <View style={styles.ladoalado}>
            <Text style={styles.registration}>
                Não possue uma conta?
            </Text>
            <Text style={styles.linkCreateAccount} onPress={()=> navigation.navigate('Register')}>
                Criar conta
            </Text>
        </View>

    
     </KeyboardAvoidingView>
    )
}

export default Login