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
            <ScrollView contentContainerStyle={nameStyle.scrollContent}>
                <View style={nameStyle.main}>
                    <CustomArrow
                        leftarrow={true}
                        cl={true}
                    />
                </View>



                <View style={nameStyle.textInputView}>
                    <Text style={nameStyle.textView}>First Name</Text>

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
                        width={340}
                        height={60}
                        title='Continue'
                        backgroundColor={'#FEC946'}
                        borderRadius={10}
                        textAlign={'center'}
                        fontSize={16}
                        color={"#000000"}
                        onPress={() => navigation.navigate('UserNamePage')}

                    />

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


