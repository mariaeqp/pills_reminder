import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import styles from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from "firebase";


function Register({navigation}){


    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorCadastro, setErrorCadastro] = useState("")
    
    const cadastroBd=()=>{
    
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
    
            var user = userCredential.user;
            navigation.navigate('Login', {idUser:user.uid})
    
        })
        .catch((error) => {
            setErrorCadastro(true)
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
        <KeyboardAvoidingView style={styles.container}>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.btnBack}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" style={styles.arrowBack}/>
            </TouchableOpacity>

            <View>
                <Text style={styles.title}>Criar um novo usuário</Text>
            </View>

            <View >
                <Text style={styles.categoria}>
                    Nome:   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: Luis Fernando'
                />
            </View>
            <View>
                <Text style={styles.categoria}>
                    Email:   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: luisfernando@gmail.com'
                    onChangeText={(text)=> setEmail(text)}
                    value={email}
                />
            </View>
            <View>
                <Text style={styles.categoria}>
                    Usuário:   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: proflulu'
                />
            </View>
            <View>
                <Text style={styles.categoria}>
                    Senha:   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: profnotaA'
                    onChangeText={(text)=> setSenha(text)}
                    value={senha}
                />
            </View>

            <TouchableOpacity style={styles.btnCriar} onPress={cadastroBd}>
                <Text style={styles.txtBtnCriar}>Criar</Text>

            </TouchableOpacity>



        </KeyboardAvoidingView>




    )

}
export default Register