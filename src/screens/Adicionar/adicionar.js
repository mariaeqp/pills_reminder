import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import styles from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from 'firebase';
const db = firebase.firestore()


function Adicionar({navigation}){
    const[nome, setNome]=useState(null)
    const[notificacao, setNotificacao]=useState(null)
    const[qtd, setQtd]=useState(null)
    const[qtddia, setQtddia]=useState(null)


    function AddLembrete() {
        db.collection('Lembrete').add({
            nome:nome,
            notificacao:notificacao,
            qtd:qtd,
            qtddia:qtddia
        })
        navigation.navigate('Inicial')
    }

    const[fontsLoaded] = useFonts({
        Poppins:require('../../../assets/fontes/Poppins-Medium.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    return(
    <KeyboardAvoidingView
        style={styles.container}
    >
            <TouchableOpacity onPress={()=> navigation.navigate('Inicial')} style={styles.btnBack}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" style={styles.arrowBack}/>
            </TouchableOpacity>

        <Text style={styles.title}>Adicionar lembrete</Text>
        
        <View >
                <Text style={styles.categoria}>
                    Nome do medicamento   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: Ocitocina'
                    onChangeText={setNome}
                    value={nome}
                  />
        </View>

        <View style={styles.ladoalado}>
            <View>
                <Text style={styles.categoria}>
                    Quantidade   
                </Text>
                <TextInput style={styles.quantidade}
                    placeholder='Ex: 1 comprimido'
                    onChangeText={setQtd}
                    value={qtd}
                />
            </View>
            <View >
                <Text style={styles.categoria}>
                    Por quantos dias   
                </Text>
                <TextInput style={styles.quantidade}
                    placeholder='Ex: 10 dias'
                    onChangeText={setQtddia}
                    value={qtddia}
                />
            </View>
        </View>

        <View >
                <Text style={styles.categoria}>
                    Notificação   
                </Text>
                <TextInput style={styles.input}
                    placeholder='Ex: 10:00 AM'
                    onChangeText={setNotificacao}
                    value={notificacao}
                />
        </View>



        <TouchableOpacity style={styles.btnFeito} onPress={AddLembrete}>
            <Text style={styles.txtBtnFeito}>
                Feito
            </Text>
        </TouchableOpacity>

     </KeyboardAvoidingView>
    )
}
export default Adicionar
