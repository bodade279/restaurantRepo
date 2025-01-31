import React, { useState } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { nameStyle } from '@/constants/styles/Styles';

export default function NamePage({navigation}) {
    return (
        <View style={nameStyle.container}>
            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}} showsVerticalScrollIndicator={false} >
                <TouchableOpacity style={{ marginTop: hp('9.1603%'), paddingLeft: wp('6.5%'), position: 'absolute' }}>
                    <CustomArrow
                        leftarrow={true}
                        cl={true}
                    />
                </TouchableOpacity>



                <View style={nameStyle.textInputView}>
                    <Text style={nameStyle.textView}>Name</Text>

                    <TextInput
                        style={nameStyle.input}
                        placeholder='Name'
                        placeholderTextColor={'white'}
                    />


                    <Text style={nameStyle.textView}>Last Name</Text>

                    <TextInput
                        style={nameStyle.input}
                        placeholder='Last Name'
                        placeholderTextColor={'white'}
                    />
                </View>



                <TouchableOpacity style={nameStyle.touchableView}>
                    <CustomButton
                          width={wp('88.5417%')}
                                   height={hp('7.6336%')}
                                   title='Continue'
                                   backgroundColor={'#FEC946'}
                                   borderRadius={wp('2.6042%')}
                                   textAlign={'center'}
                                   fontSize={wp("4.1667%")}
                                   fontFamily='Manrope'
                                   color={"#000000"}
                        onPress={() => navigation.navigate('UserNamePage')}

                    />

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


