import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const tellStyles = {


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

export const ageStyles = {
  container: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: hp('5.0891%')
  },
  main: {
    marginTop: hp('5.0891%'),
    paddingLeft: wp('6.5104%')
  },
  subMain: {
    marginTop: hp('20.1018%')
  },
  textView: {
    fontSize: wp('6.25%'),
    textAlign: 'center',
    fontFamily: 'Manrope'
  },
  textInputView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('7.1247%')
  },
  input: {
    width: wp('89.3229%'),
    height: hp('7.1247%'),
    borderWidth: wp('0.2604%'),
    borderRadius: wp('4.1667%'),
    backgroundColor: '#232323'
  },
  textView1: {
    marginTop: hp('2.0356%'),
    paddingLeft: wp('6.25%'),
    paddingRight: wp('6.25%'),
  },
  text2: {
    color: "#06050599",
    fontSize: wp('4.1667%'),
    fontFamily: 'Manrope',
    textAlign: 'center'
  },
  touchableView: {
    marginTop: hp('34.8601%'),
    alignSelf: 'center',
    justifyContent: 'center'
  }
}

export const loginStyles = {
  container: {
    flex: 1,

  },
  main: {
    paddingLeft: wp('6.5%'),
    marginTop: hp('3.944%'),
    marginBottom: hp('4.7074%')
  },
  icon: {
    marginTop: hp('1.2723%'),  // Adjust the position of the icon
    marginRight: wp('2.6042%'),  // Add spacing to the right of the icon
  },

  logo: {

    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: hp('1.2723%'),
  },
  subtitle: {
    fontSize: wp('4.6875%'),
    textAlign: 'left',
    color: '#060505',
    marginBottom: hp('2.5445%'),
    fontFamily: 'Manrope'

  },
  inputContainer: {
    borderWidth: wp('0.2604%'),
    borderColor: '#ccc',
    borderRadius: wp('2.6042%'),
    // paddingHorizontal: 10,
    marginTop: hp('9.9237%'),
    height: hp('6.1069%'),
    width: wp('88.5417%'),
    marginBottom: hp('3.4351%')

  },
  pickerInput: {
    fontSize: wp('4.1667%'),
    paddingVertical: hp('1.5267%'),
    paddingLeft: wp('2.6042%')

  },
  input: {
    height: hp('6.1069%'),
    width: wp('88.5417%'),
    borderWidth: wp('0.2604%'),
    borderColor: '#ccc',
    borderRadius: wp('2.0833%'),
    paddingHorizontal: wp('2.6042%'),
    fontSize: wp('3.6458%'),
    fontFamily: 'Manrope',
    color: '#0605054D'
    // marginBottom: 10,
  },
  accountLink: {
    fontFamily: 'Manrope',
    color: '#1964F7',
    textAlign: 'right',
    fontSize: wp('3.6458%')
    // marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    height: hp('6.1069%'),
    width: wp('88.5417%'),
    borderRadius: wp('2.6042%'),
    justifyContent: 'center',
    alignSelf: 'center',
    // marginBottom: 20,
    marginTop: hp('6.4885%'),
    marginBottom: hp('9.9237%')
  },
  loginButtonText: {
    color: '#fff',
    fontSize: wp('4.1667%'),
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: hp('0.1272%'),
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: wp('2.6042%'),
    color: '#666',
  },
  socialButton: {
    height: hp('6.1069%'),
    width: wp('88.5417%'),
    borderRadius: wp('2.6042%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1.2723%'),
  },
  appleButton: {
    backgroundColor: '#000',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: wp('4.1667%'),
    textTransform: 'capitalize',
  },
}