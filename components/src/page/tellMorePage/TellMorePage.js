import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

export default function TellMorePage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={{ marginTop: 40, paddingLeft: 32 }}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontFamily: 'Manrope' }}>Tell us more</Text>
        </View>
        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 47 }}>
          <Image source={Images['tellmore']} style={{ width: 135, height: 135 }} resizeMode='contain' />
        </View>
        <View style={{ marginTop: 48, left: 20 }}>
          <Text style={{ color: "#06050599", fontSize: 16, fontFamily: 'Manrope' }}>Add a description</Text>
        </View>
        <View style={{ borderColor: "#F3EFE1", marginTop: 12, justifyContent: 'center', alignSelf: 'center', borderWidth: 1, width: 343, height: 243, borderRadius: 16 }}>

        </View>
        <TouchableOpacity style={{ marginTop: 79, alignSelf: 'center', justifyContent: 'center' }}>
          <CustomButton
            width={340}
            height={60}
            title='Sign Up'
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
