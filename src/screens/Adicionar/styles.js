import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 30
        
    },
    title:{
        marginTop: 32,
        fontFamily: 'Poppins',
        fontSize: 28,
        marginBottom: 31,
        alignSelf:'flex-start',
        paddingLeft: 15
        
    },
    input:{ 
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#9B9B9B',
        width: 319,
        height: 48,
        marginBottom: 15,
        backgroundColor: '#F8F8F6',
        borderRadius: 14,
        paddingLeft: 10
    },
    categoria:{
        fontFamily: 'Poppins',
        fontSize: 15,
        width: 190,
        height: 38
       
    },
    quantidade:{ 
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#9B9B9B',
        width: 152,
        height: 48,
        marginBottom: 15,
        backgroundColor: '#F8F8F6',
        borderRadius: 14,
        paddingLeft: 10
    },
    
    /*note:{ 
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#9B9B9B',
        width: 255,
        height: 48,
        marginBottom: 15,
        backgroundColor: '#F8F8F6',
        borderRadius: 14,
        paddingLeft: 10
    */
    ladoalado:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        paddingLeft: 40
    },

    btnFeito:{
        width: 319,
        height: 56, 
        backgroundColor: '#1BD15D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginTop: 138
    },
    txtBtnFeito:{
        fontFamily: 'Poppins',
        fontSize: 17,
        color:'#FFF'
    },
    
    btnBack:{
        width: 56,
        height: 56, 
        alignSelf:'flex-start',
        backgroundColor: '#F8F8F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,

    }


})
export default style