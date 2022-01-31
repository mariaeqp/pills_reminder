import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Image, KeyboardAvoidingView,FlatList, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import firebase from "firebase";


const db=  firebase.firestore()

function Inicial({navigation}){
    const[Lembrete, setLembrete] = useState([])

    useEffect(()=>{
        db.collection("Lembrete").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setLembrete(list)
        })

    },[])

    const[fontsLoaded] = useFonts({
        PoppinsSemiBold:require('../../../assets/fontes/Poppins-SemiBold.ttf'),
        PoppinsMedium:require('../../../assets/fontes/Poppins-Medium.ttf'),
        PoppinsRegular:require('../../../assets/fontes/Poppins-Regular.ttf')
    })
    if(!fontsLoaded){
        return null
    }

    return(
    <KeyboardAvoidingView
        style={styles.container}
    >   
        <TouchableOpacity style={styles.pesquisa} >
            <Text >
                <Ionicons name="search" size={20} color="#9B9B9B" /> 
            </Text>
            <TextInput style={styles.inputpesq}
                placeholder='Pesquisar'
            />

        </TouchableOpacity>

        <Text style={styles.ola}>Olá,</Text>
        <Text style={styles.naus}>Nome</Text>
        <Text style={styles.title}>Revisão diária</Text>
        

        <FlatList
            /*(data, index) => {length: number, offset: number, index: number}
            getItemLayout={(data, index) => (
                {length: 0, offset: 0 * index, index}
            )}*/
            data={Lembrete}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{

                return(
                    <View>
                        
                        <TouchableOpacity style={styles.descricao} onPress={()=> {
                            navigation.navigate("Editar",{
                                id:item.id,
                                nome:item.nome,
                                qtd:item.qtd,
                                qtddia:item.qtddia,
                                notificacao:item.notificacao
                            })
                        }}>
                            
                            <Text>{item.nome}</Text>
                            <Text>{item.notificacao}</Text>   

                        </TouchableOpacity>   
                        
                    </View>

                )
            }}
        />

        <TouchableOpacity style={styles.btnAdc} onPress={()=> navigation.navigate('Adicionar')}>
            <Text >
                <Ionicons name="add" size={24} color="white" />
            </Text>
        </TouchableOpacity>

     </KeyboardAvoidingView>
    )
}
export default Inicial