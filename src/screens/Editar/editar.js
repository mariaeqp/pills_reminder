import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import styles from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from "firebase";

const bd=firebase.firestore()

function Editar({navigation, route}){
    
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [qtdEdit, setQtdEdit]= useState(route.params.qtd)
    const [qtdDiaEdit, setDiaEdit]= useState(route.params.qtddia)
    const [notificacaoEdit, setNotificacaoEdit]= useState(route.params.notificacao)
    const idLembrete = route.params.id


    function salvarEditar(nome,qtd,qtddia,notificacao, id){
        bd.collection("Lembrete").doc(id).update({
            nome: nomeEdit,
            qtd: qtdEdit,
            qtddia:qtdDiaEdit,
            notificacao:notificacaoEdit
        })
        
        navigation.navigate('Inicial')
    }

    function deletar(id){
        bd.collection("Lembrete").doc(id).delete()

        navigation.navigate('Inicial')
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
        <TouchableOpacity onPress={()=> navigation.navigate('Inicial')} style={styles.btnBack}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" style={styles.arrowBack}/>
        </TouchableOpacity>

        <Text style={styles.title}>Editar lembrete</Text>
        
        <View >
            <Text style={styles.categoria}>
                Nome do medicamento   
            </Text>
            <TextInput style={styles.input}
                onChangeText={setNomeEdit}
                value={nomeEdit}
            />
        </View>


        <View style={styles.ladoalado}>
            <View>
                <Text style={styles.categoria}>
                    Quantidade   
                </Text>
                <TextInput style={styles.quantidade}
                    onChangeText={setQtdEdit}
                    value={qtdEdit}  
                />
            </View>

            <View >
                <Text style={styles.categoria}>
                    Por quantos dias   
                </Text>
                <TextInput style={styles.quantidade}
                    onChangeText={setDiaEdit}
                    value={qtdDiaEdit}   
                />
            </View>
        </View>   

        <View >
            <Text style={styles.categoria}>
                Notificação   
            </Text>
            <TextInput style={styles.input}
                onChangeText={setNotificacaoEdit}
                value={notificacaoEdit}    
            />
        </View>

        <TouchableOpacity style={styles.btnExcluir} 
            onPress={()=>{
                deletar(idLembrete)    
            }}
        >    
            <Text style={styles.txtBtnExcluir}>
                Excluir
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSalvar}
            onPress={()=>{
                salvarEditar(nomeEdit,qtdEdit,qtdDiaEdit,notificacaoEdit,idLembrete)    
            }}
        >
            <Text 
            style={styles.txtBtnSalvar}>
                Salvar alterações
            </Text>

        </TouchableOpacity>

     </KeyboardAvoidingView>
    )
}
export default Editar