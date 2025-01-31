import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { usernamestyle } from '@/constants/styles/Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

export default function UserNamePage() {
    return (
        <View style={usernamestyle.container}>
            <ScrollView contentContainerStyle={usernamestyle.scrollContent}>
                <View style={usernamestyle.main}>
                    <CustomArrow leftarrow={true} cl={true} />
                </View>

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
                <Text style={usernamestyle.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
