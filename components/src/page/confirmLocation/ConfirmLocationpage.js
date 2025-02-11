import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ageStyles, locationStyles } from "@/constants/styles/Styles";
import CustomButton from "../../custom-component/custombutton/CustomButton";
import CustomArrow from "../../custum-component/custom-arrow/CustomArrow";

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

    const height = Dimensions.get('screen').height
    const width = Dimensions.get('screen').width

    console.log('height', height)
    console.log('width', width)
    return (
        <View style={locationStyles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={[ageStyles.arrowTouch,{left:0,zIndex:999}]} onPress={() => navigation.goBack()}>
                    <CustomArrow
                        leftarrow={true}
                        cl={true}
                    />
                </TouchableOpacity>
             <View style={{marginTop:hp('4.267%')}}>
                <Text style={locationStyles.title}>Confirm your location</Text>
                </View>
                <View style={locationStyles.mapView}>
                    <MapView
                        style={locationStyles.map}
                        region={region}
                        onPress={handleMapPress}
                    >
                        <Marker coordinate={marker} />
                    </MapView>
                </View>
                <View style={{ marginTop: hp('4.1575%') }}>
                    <Text style={locationStyles.subText}>
                        Touch to drop pin for more accurate location.
                    </Text>
                </View>
            </ScrollView>
            
                <CustomButton
                    width={wp('88.5417%')}
                    height={hp('7.6336%')}
                    title='Confirm'
                    backgroundColor={'#FEC946'}
                    borderRadius={wp('2.6042%')}
                    textAlign={'center'}
                    fontSize={wp("4.1667%")}
                    fontFamily='Manrope'
                    color={"#000000"}
                    onPress={() => navigation.navigate('PrivacyAndpolicy')}


                />
           
            <TouchableOpacity style={{ marginTop: hp('1.0941%'),marginBottom:hp('2%') }} >
                <CustomButton
                    width={wp('88.5417%')}
                    height={hp('7.6336%')}
                    title='Sorry not my address'

                    borderRadius={wp('2.6042%')}
                    textAlign={'center'}
                    fontSize={wp("4.1667%")}
                    fontFamily='Manrope'
                    color={"#000000"}
                    borderWidth={1}
                    borderColor={"#ccc"}

                />

            </TouchableOpacity>

        </View>
    );
};



export default ConfirmLocationPage;
