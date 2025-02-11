import React from "react";
import { View, Text, TouchableOpacity, privacyStyleheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from "../../custum-component/custom-arrow/CustomArrow";
import { ageStyles, privacyStyle, usernamestyle } from "@/constants/styles/Styles";
import CustomButton from "../../custom-component/custombutton/CustomButton";

const PrivacyAndpolicy = ({ navigation }) => {
    return (
        <View style={privacyStyle.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                          <TouchableOpacity style={[ageStyles.arrowTouch,{left:0}]} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={{marginTop:hp('7.8775%')}}>
            <Text style={privacyStyle.title}>Community{"\n"}amendments</Text>
            </View>
                <Text style={privacyStyle.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
                <Text style={privacyStyle.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
                <Text style={privacyStyle.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
            </ScrollView>
            <TouchableOpacity style={usernamestyle.button}>
                    <CustomButton
                        width={wp('88.5417%')}
                        height={hp('7.6336%')}
                        title='Accept'
                        backgroundColor={'#FEC946'}
                        borderRadius={wp('2.6042%')}
                        textAlign={'center'}
                        fontSize={wp("4.1667%")}
                        fontFamily='Manrope'
                        color={"#000000"}
                        onPress={()=>navigation.navigate('Coupons')}

                    />
                </TouchableOpacity>
        </View>
    );
};


export default PrivacyAndpolicy;
