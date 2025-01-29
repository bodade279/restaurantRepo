import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const tellStyles={


}

export const customeButtonStyles = StyleSheet.create({
    icon: {
      width: wp("5.2083%"),
      height: hp("2.5445%"),
      // right:wp('1%')
    },
    textView: {
      fontWeight: "600",
      textAlign: "center",
      flex: 1,
  
    },
    textMain: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    customText: {
      fontSize: wp("3.6458%"),
      fontFamily: 'Urbanist'
    }
  });