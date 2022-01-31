import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    ola:{
        marginTop: 36,
        fontFamily: 'PoppinsSemiBold',
        fontSize: 28,
        marginBottom: 31,
        paddingRight: 260
    },
    naus:{
       
        fontFamily: 'PoppinsRegular',
        fontSize: 28,
        paddingRight: 237
    },
    title:{
        marginTop: 32,
        fontFamily: 'PoppinsMedium',
        fontSize: 17,
        marginBottom: 31,
        paddingRight: 190,
    },
    pesquisa:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F6',
        width: 319,
        height: 56, 
        borderRadius: 14,
        marginTop: 56
    },
    inputpesq:{
        paddingLeft: 10,
        paddingRight: 170,
        fontFamily: 'PoppinsMedium',
        fontSize: 15,
        color: '#9B9B9B',
    },
    
    imageStyle: {
        padding: 10, 
        margin: 15, 
        height: 20, 
        width: 20, 
        resizeMode: 'stretch', 
        alignItems: 'center', 
    },

    /*nome:{
        fontFamily: 'Poppins',
        fontSize: 15,
        color:'#FFF'
    },*/
    descricao:{
         
        padding: 18,
        fontFamily: 'PoppinsMedium',
        fontSize: 15,
        color: '#9B9B9B',
        backgroundColor: '#F8F8F6', //#F8F8F6
        height: 72, 
        width: 319,
        borderRadius: 14,
        marginBottom:12
        
    },
    btnAdc:{
        width: 56,
        height: 56, 
        backgroundColor: '#1BD15D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginTop: 138,
        marginBottom:30
    }
})
export default style