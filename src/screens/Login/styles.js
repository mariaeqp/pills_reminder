import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F6C8'
    },
    title:{
        marginTop: 45,
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        marginBottom: 31
    },
    input: { 
        fontFamily: 'PoppinsMedium',
        fontSize: 15,
        color: '#9B9B9B',
        width: 319,
        height: 48.25,
        marginBottom: 15,
        backgroundColor: '#FFF',
        borderRadius: 14,
        paddingLeft: 43
    },
    btnLogin:{
        width: 319,
        height: 56, 
        backgroundColor: '#1BD15D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginTop: 20
    },
    txtBtnLogin:{
        fontFamily: 'PoppinsMedium',
        fontSize: 17,
        color:'#FFF'
    },
    registration:{
        paddingLeft: 10,
        marginTop: 105,
        fontFamily:'PoppinsMedium',
        color: '#9B9B9B'        
    },
    linkCreateAccount:{
        paddingLeft: 30,
        marginTop: 105,
        fontFamily:'PoppinsMedium',
        color: '#0A0909'
     },
    ladoalado:{
        //gambiarra viu haha
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 35,
        paddingRight: 35

    },
})

export default style