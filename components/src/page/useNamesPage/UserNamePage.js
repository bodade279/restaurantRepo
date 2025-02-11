import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { ageStyles, usernamestyle } from '@/constants/styles/Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';

export default function UserNamePage({navigation}) {
    const handleBackPress = () => {
        console.log('Back button pressed');
        // Add navigation logic here
    };
    return (
        <View style={usernamestyle.container}>
           <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                                                         <TouchableOpacity style={[ageStyles.arrowTouch,]} onPress={() => navigation.goBack()}>
                    <CustomArrow leftarrow={true} cl={true} />
                </TouchableOpacity>

                <View style={usernamestyle.section}>
                    <Text style={usernamestyle.titleText}>Your Instagram username.</Text>
                    <Text style={usernamestyle.usernameText}>@riceuser</Text>
                    <Text style={usernamestyle.changeText}>Change your username</Text>
                </View>

                <View style={usernamestyle.section}>
                    <Text style={usernamestyle.titleText}>Your TikTok username.</Text>
                    <Text style={usernamestyle.usernameText}>@riceuser</Text>
                    <Text style={usernamestyle.changeText}>Change your username</Text>
                </View>
            </ScrollView>

            {/* Button at the bottom */}
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
                                   onPress={() => navigation.navigate('AgePage')}
                                   />
               
            </TouchableOpacity>
        </View>
    );
}
