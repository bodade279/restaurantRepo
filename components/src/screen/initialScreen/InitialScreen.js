import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity,View,Image,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function InitialScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={{marginTop:hp("35.4962%"),justifyContent:'center',alignSelf:'center',}}>
      <Image source={require('../../../../assets/images/Logo.png')} style={{width:170,height:64}} resizeMode='contain'/>
      </View>
      <TouchableOpacity style={{width:340,height:60,backgroundColor:'#FEC946',marginTop:307,borderRadius:10,alignSelf:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:16,color:"#000000",fontWeight:700}}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width:340,height:60,marginTop:20,borderWidth:2,borderRadius:10,alignSelf:'center',justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:16,color:"#000000",fontWeight:700}}>Login</Text>
        </TouchableOpacity>
    
  
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
