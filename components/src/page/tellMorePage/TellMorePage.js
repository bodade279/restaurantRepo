// import React, { useState } from 'react';
// import {
//   StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
//   TextInput,
// } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Images } from '../../../../constants/images/Images'
// import CustomButton from '../../custom-component/custombutton/CustomButton';
// import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
// import { ageStyles, usernamestyle } from '@/constants/styles/Styles';

// export default function TellMorePage({ navigation }) {

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}} showsVerticalScrollIndicator={false}>
//         <TouchableOpacity style={ageStyles.arrowTouch} onPress={()=> navigation.goBack()}>
//           <CustomArrow
//             leftarrow={true}
//             cl={true}
//           />
//         </TouchableOpacity>

//         <View style={{ marginTop: hp('15.2672%') }}>
//           <Text style={{ fontWeight: '700', fontSize: wp('6.25%'), textAlign: 'center', fontFamily: 'Manrope', color: '#060505' }}>Tell us more</Text>
//         </View>
//         <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: hp('3.9796%') }}>
//           <Image source={Images['tellmore']} style={{ width: wp('35.1563%'), height: hp('17.1756%') }} resizeMode='contain' />
//         </View>
//         <View style={{ marginTop: hp('6.1069%'), left: wp('5.2083%') }}>
//           <Text style={{ color: "#06050599", fontSize: wp('4.1667%'), fontFamily: 'Manrope' }}>Add a description</Text>
//         </View>
//         <TextInput 
//         style={{ borderColor: "#00000033", marginTop: hp('1.5267%'), justifyContent: 'center', alignSelf: 'center', borderWidth: 1, width: wp('89.3229%'), height: hp('30%'), borderRadius: wp('4.1667%'),  textAlignVertical: 'top', // Align text to the top vertically
//           textAlign: 'left',        // Align text to the left horizontally
//           padding: wp('4%'),        // Add padding for better readability
//         }}
//         multiline={true} // Ensure multiline input is enabled
//        >

//         </TextInput>
//         </ScrollView>
//         <TouchableOpacity style={usernamestyle.button}>
//           <CustomButton
//             width={wp('88.5417%')}
//             height={hp('7.6336%')}
//             title='Continue'
//             backgroundColor={'#FEC946'}
//             borderRadius={wp('2.6042%')}
//             textAlign={'center'}
//             fontSize={wp("4.1667%")}
//             fontFamily='Manrope'
//             color={"#000000"}
//             onPress={() => navigation.navigate('TellMoreProfile')}


//           />
//         </TouchableOpacity>
     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'

//   },

// });



// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
// } from 'react-native';
// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Images } from '../../../../constants/images/Images';
// import CustomButton from '../../custom-component/custombutton/CustomButton';
// import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
// import { ageStyles, usernamestyle } from '@/constants/styles/Styles';

// export default function TellMorePage({ navigation }) {
//   const [hasPermission, setHasPermission] = useState(false);

//   useEffect(() => {
//     // Request media library permissions on mount
//     (async () => {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const imageUrl = Image.resolveAssetSource(Images['tellmore']).uri; // Get the image URI

//   const downloadImage = async () => {
//     try {
//       if (!hasPermission) {
//         alert('Storage permission is required to save images.');
//         return;
//       }

//       const fileUri = FileSystem.cacheDirectory + 'tellmore.jpg';
//       const result = await FileSystem.downloadAsync(imageUrl, fileUri);
//       console.log('Downloaded to:', result.uri);

//       // Save to gallery
//       const asset = await MediaLibrary.createAssetAsync(result.uri);
//       await MediaLibrary.createAlbumAsync('Download', asset, false);

//       alert('Image saved to your gallery!');
//     } catch (error) {
//       console.error('Download error:', error);
//       alert('Failed to download image.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{ flexGrow:1, paddingBottom:hp('8.1425%') }} showsVerticalScrollIndicator={false}>
//         <TouchableOpacity style={ageStyles.arrowTouch} onPress={() => navigation.goBack()}>
//           <CustomArrow leftarrow={true} cl={true} />
//         </TouchableOpacity>

//         <View style={{ marginTop: hp('15.2672%') }}>
//           <Text style={styles.title}>Tell us more</Text>
//         </View>

//         <View style={styles.imageContainer}>
//           <Image source={Images['tellmore']} style={styles.image} resizeMode='contain' />
//         </View>

//         <TouchableOpacity style={styles.downloadButton} onPress={downloadImage}>
//           <Text style={styles.downloadText}>Download JPG</Text>
//         </TouchableOpacity>

//       </ScrollView>

//       <TouchableOpacity style={usernamestyle.button}>
//         <CustomButton
//           width={wp('88.5417%')}
//           height={hp('7.6336%')}
//           title='Continue'
//           backgroundColor={'#FEC946'}
//           borderRadius={wp('2.6042%')}
//           textAlign={'center'}
//           fontSize={wp("4.1667%")}
//           fontFamily='Manrope'
//           color={"#000000"}
//           onPress={() => navigation.navigate('TellMoreProfile')}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   title: {
//     fontWeight: '700',
//     fontSize: wp('6.25%'),
//     textAlign: 'center',
//     fontFamily: 'Manrope',
//     color: '#060505'
//   },
//   imageContainer: {
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: hp('3.9796%'),
//   },
//   image: {
//     width: wp('35.1563%'),
//     height: hp('17.1756%'),
//   },
//   downloadButton: {
//     backgroundColor: '#FEC946',
//     padding: hp('1.5%'),
//     borderRadius: wp('2%'),
//     alignSelf: 'center',
//     marginTop: hp('2%'),
//   },
//   downloadText: {
//     color: '#000',
//     fontSize: wp('4%'),
//     fontWeight: 'bold',
//   },
// });


import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles, usernamestyle } from '@/constants/styles/Styles';

export default function TellMorePage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const requestPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        "Permission Required",
        "Storage permission is required to save images.",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const downloadImage = async () => {
    try {
      const imageUrl = Image.resolveAssetSource(Images['tellmore']).uri;
      const fileUri = FileSystem.cacheDirectory + 'tellmore.jpg';
  
      const result = await FileSystem.downloadAsync(imageUrl, fileUri);
      console.log('Downloaded to:', result.uri);
  
      Alert.alert("Success", "Image downloaded! But saving to gallery requires a development build.");
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert("Error", "Failed to download image.");
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow:1, paddingBottom:hp('8.1425%') }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={ageStyles.arrowTouch} onPress={() => navigation.goBack()}>
          <CustomArrow leftarrow={true} cl={true} />
        </TouchableOpacity>

        <View style={{ marginTop: hp('15.2672%') }}>
          <Text style={styles.title}>Tell us more</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={Images['tellmore']} style={styles.image} resizeMode='contain' />
        </View>

        <TouchableOpacity style={styles.downloadButton} onPress={downloadImage}>
          <Text style={styles.downloadText}>Download JPG</Text>
        </TouchableOpacity>

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
          onPress={() => navigation.navigate('TellMoreProfile')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: '700',
    fontSize: wp('6.25%'),
    textAlign: 'center',
    fontFamily: 'Manrope',
    color: '#060505'
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('3.9796%'),
  },
  image: {
    width: wp('35.1563%'),
    height: hp('17.1756%'),
  },
  downloadButton: {
    backgroundColor: '#FEC946',
    padding: hp('1.5%'),
    borderRadius: wp('2%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  downloadText: {
    color: '#000',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});
