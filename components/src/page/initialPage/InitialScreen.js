import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity,View,Image, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function InitialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:"10%"}} showsVerticalScrollIndicator={false}>
      {/* Logo */}
      <View style={{marginTop:hp("35.4962%"),justifyContent:'center',alignSelf:'center',}}>
      <Image source={require('../../../../assets/images/Logo.png')} style={{width:wp('44.2708%'),height:hp('8.1425%')}} resizeMode='contain'/>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('RefferalCode')} style={{width:wp('93.75%'),height:hp('7.6336%'),
        backgroundColor:'#FEC946',marginTop:hp('39.0585%'),borderRadius:hp('2.6042%'),alignSelf:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:wp('4.1667%'),color:"#000000",fontFamily:'Manrope'}}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')} style={{width:wp('93.75%'),height:hp('7.6336%'),marginTop:hp('2.5445%'),borderWidth:wp('0.5208%'),borderRadius:hp('2.6042%'),alignSelf:'center',justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:wp('4.1667%'),color:"#000000",fontFamily:'Manrope'}}>Login</Text>
        </TouchableOpacity>
    
  
     </ScrollView>   
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'

  },

});
