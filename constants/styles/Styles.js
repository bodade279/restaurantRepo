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
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: hp('7.1247%'),
  
  },
  input: {
    width: wp('89.3229%'),
    height: hp('7.1247%'),
    borderWidth: wp('0.2604%'),
    borderRadius: wp('4.1667%'),
    backgroundColor: '#232323',
    fontFamily:'Manrope',
    padding:wp('2.6042%'),
  
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
    backgroundColor: '#fff',

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
    marginRight:wp('6.5%'),
    marginLeft:wp('6.5%'),
  },
  orText: {
    marginHorizontal: wp('2.6042%'),
    color: '#666',
  },
  socialButton: {
    height: hp('6.1069%'),
    width: wp('88.5417%'),
    borderRadius: wp('4.1667%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1.2723%'),
    flexDirection:'row',
    padding:wp('2.6042%'),
    borderWidth:1,
    borderColor:'#ccc'
  },
  appleButton: {
    backgroundColor: '#060505',
  },
  googleButton: {
    backgroundColor: 'Light',
  },
  facebookButton: {
    backgroundColor: '#1964F7',
  },
  socialButtonText: {
    color: '#FEFEFE',
    fontSize: wp('3.6458%'),
    textTransform: 'capitalize',
    fontFamily: 'Manrope',
    fontWeight:'500'
  },



}

export const usernamestyle = {
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: hp('12%')
  },
  main: {
    marginTop: hp('5%'),
    paddingLeft: wp('6.5%')
  },
  section: {
    marginTop: hp('10%'),
    alignItems: 'center',

  },
  titleText: {
    fontSize: wp('6.5%'),
    fontFamily: 'Manrope',
    textAlign: 'center'
  },
  usernameText: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('4%'),
    fontFamily: 'Manrope',
  },
  changeText: {
    fontSize: wp('4%'),
    color: '#555',
    textAlign: 'center',
    marginTop: hp('0.5%'),
    fontFamily: 'Manrope',
  },
  button: {
    backgroundColor: '#F7B603',
    width: wp('90%'),
    height: hp('7%'),
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: wp('4.5%'),
    fontWeight: 'bold'
  }
};
export const nameStyle = {
  container: {
    // flex: 1
    height: '100%',
    backgroundColor: "#fff",
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
    fontSize: wp('3.25%'),
    // textAlign: 'center',
    marginTop: wp('6.25%'),
    marginottom: wp('6.25%'),
    fontFamily: 'Manrope',
    color: '#060505',
    opacity: 0.6,


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
    paddingLeft: wp('5%'),
    backgroundColor: '#232323',
    marginTop: wp('4.25%'),
    color: '#FFFFFF',

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