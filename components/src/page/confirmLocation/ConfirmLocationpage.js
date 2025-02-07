import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ConfirmLocationPage = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 43.688,
        longitude: -79.299,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [marker, setMarker] = useState({
        latitude: region.latitude,
        longitude: region.longitude,
    });

    const handleMapPress = (e) => {
        setMarker(e.nativeEvent.coordinate);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            
            <Text style={styles.title}>Confirm your location</Text>
            <View style={styles.mapView}>
            <MapView
                style={styles.map}
                region={region}
                onPress={handleMapPress}
            >
                <Marker coordinate={marker} />
            </MapView>
            </View>
            <Text style={styles.subText}>
                Touch to drop pin for more accurate location.
            </Text>
            <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('PrivacyAndpolicy')}>
                <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Sorry not my address</Text>
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
        alignItems: "center", 
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
        marginBottom: hp('10%'),
        marginTop: hp('5%'),
        fontFamily: 'Manrope',
    },
    mapView: {
        width: wp('90%'),
        height: hp('25%'),
        borderRadius: wp('5%'),
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#000",  
    },
    map: {
        height: hp('25%'),
        borderRadius: wp('5%'),
        overflow: "hidden",
        borderWidth: 1, 
        borderColor: "#000", 
    },
    subText: {
        textAlign: "center",
        color: "#555",
        marginVertical: hp('1%'),
        fontFamily: 'Manrope',
    },
    confirmButton: {
        backgroundColor: "#F4C534",
        paddingVertical: hp('2%'),
        borderRadius: wp('2%'),
        alignItems: "center",
        marginTop: hp('2%'),
        width: wp('90%'), 
    },
    confirmText: {
        fontSize: wp('4%'),
        fontWeight: "bold",
        color: "#000",
        fontFamily: 'Manrope',
    },
    cancelButton: {
        backgroundColor: "#fff",
        paddingVertical: hp('2%'),
        borderRadius: wp('2%'),
        alignItems: "center",
        marginTop: hp('1%'),
        borderWidth: 1,
        borderColor: "#ccc",
        width: wp('90%'), 
    },
    cancelText: {
        fontSize: wp('4%'),
        fontWeight: "bold",
        color: "#000",
        fontFamily: 'Manrope',
    },
});

export default ConfirmLocationPage;
