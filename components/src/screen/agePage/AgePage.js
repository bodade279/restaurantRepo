import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity,View,Image, ScrollView, TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Images} from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

export default function AgePage() {
  return (
    <View style={styles.container}>  
    <ScrollView contentContainerStyle={{paddingBottom:40}}>
    <View style={{marginTop:40,paddingLeft:24}}>
    <CustomArrow
    leftarrow={true}
    cl={true}
    />
      </View> 
   
      <View style={{marginTop:158}}>
        <Text style={{fontSize:24,textAlign:'center',fontFamily:'Manrope'}}>What's your age?</Text>
      </View>
         <View style={{justifyContent:'center',alignSelf:'center',marginTop:56}}>
           <TextInput
             style={{width:343,height:56,borderWidth:1,borderRadius:16,backgroundColor:'#232323'}}
             placeholder='Age'
             placeholderTextColor={'white'}
           />
            </View>
     <View style={{marginTop:16, paddingLeft:24,
    paddingRight:24}}>
      <Text style={{color:"#06050599",fontSize:16,fontFamily:'Manrope',textAlign:'center'}}>This is to personalize your experience and will not be visible on your profile.</Text>
      </View>
     
      <TouchableOpacity style={{marginTop:274,alignSelf:'center',justifyContent:'center'}}>
        <CustomButton
        width={340}
        height={60}
        title='Continue'
        backgroundColor={'#FEC946'}
        borderRadius={10}
        textAlign={'center'}
        fontSize={16}
        color={"#000000"}
        
        />
        
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },

});
