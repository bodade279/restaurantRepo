import React, { useState } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles, nameStyle, usernamestyle } from '@/constants/styles/Styles';

export default function NamePage({navigation}) {
    const handleBackPress = () => {
       navigation.goBack();
        // Add navigation logic here
    };
    return (
        <View style={nameStyle.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                                                                    <TouchableOpacity style={[ageStyles.arrowTouch,]} onPress={() => navigation.goBack()}>
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
                </ScrollView>


                <TouchableOpacity style={usernamestyle.button}>
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
       
        </View>
    );
}


