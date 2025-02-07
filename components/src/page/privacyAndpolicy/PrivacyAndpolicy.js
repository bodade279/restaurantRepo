import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from "../../custum-component/custom-arrow/CustomArrow";

const PrivacyAndpolicy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Community{"\n"}amendments</Text>
            <ScrollView style={styles.content}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp('5%'),
        paddingTop: hp('5%'),
    },
    backButton: {
        position: "absolute",
        top: hp('5%'),
        left: wp('5%'),
        zIndex: 10,
    },
    title: {
        fontSize: wp('7%'),
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: hp('5%'),
        marginTop: hp('5%'),
        fontFamily: "Manrope",
    },
    content: {
        flex: 1,
        marginBottom: hp('2%'),
    },
    text: {
        fontSize: wp('3.5%'),
        color: "#555",
        marginBottom: hp('2%'),
        marginTop: hp('2%'),
        lineHeight: hp('3%'),
        fontFamily: "Manrope",
    },
    button: {
        position: 'absolute',
        bottom: hp('5%'),
        left: wp('5%'),
        right: wp('5%'),
        backgroundColor: "#F4C534",
        paddingVertical: hp('2%'),
        borderRadius: wp('2%'),
        alignItems: "center",
    },
    acceptText: {
        fontSize: wp('4%'),
        fontWeight: "bold",
        color: "#000",
    },
});

export default PrivacyAndpolicy;
