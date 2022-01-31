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
        fontFamily: 'PoppinsSemiBold',
        fontSize: 28,
        marginBottom: 12
    },
    input:{ 
        fontFamily: 'PoppinsMedium',
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
        fontFamily: 'PoppinsMedium',
        fontSize: 15,
        width: 70,
        height: 38
    },
    btnCriar:{
        width: 319,
        height: 56, 
        backgroundColor: '#1BD15D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginTop: 138
    },
    txtBtnCriar:{
        fontFamily: 'PoppinsMedium',
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