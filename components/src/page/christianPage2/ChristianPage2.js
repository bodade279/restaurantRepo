import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { ageStyles, categoryStyles, usernamestyle } from '@/constants/styles/Styles';
import Img from '../../../../assets/images/image 26.svg'
import Img1 from '../../../../assets/images/image 26 (1).svg'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Chibi from '../../../../assets/images/image 26 (2).svg'


const ChristianPage2 = ({ navigation }) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const [couponCount, setCouponCount] = useState(1);
    const [select, setSelect] = useState([null])
    
        const handleIncrement = () => {
            setCouponCount(prevCount => prevCount + 1);
        };
    
        const handleDecrement = () => {
            if (couponCount > 1) {
                setCouponCount(prevCount => prevCount - 1);
            }
        };
    const arr = [
        { id: 1, name: 'Catergory' },
        { id: 2, name: 'Catergory' },
        { id: 3, name: 'Catergory' },

    ]

    const handleSelectBox = (id) => {

        if (select.includes(id)) {
            setSelect(select.filter(item => item != id))
        } else {
            setSelect([...select, id])
        }

    }
    console.log("heighy", height);
    console.log("width", width);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('8.1425%') }} showsVerticalScrollIndicator={false}>
                <View style={styles.toggleBtn}>
                    <Text style={styles.textView1}>Christian</Text>
                    <View style={styles.box}>
                        <View style={styles.toggleBackground}>

                        </View>
                    </View>
                </View>
                <View style={styles.searchBar}>

                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        clearButtonMode="always"
                    />
                    <Ionicons name="search"
                        size={20} color="#555"
                        style={styles.icon} />
                </View>

                <View style={{
                    marginTop: hp('0.6718%'),
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                    {arr.reduce((rows, item, index) => {
                        if (index % 3 === 0) {
                            rows.push([item]);
                        } else {
                            rows[rows.length - 1].push(item);
                        }
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.touchableBox}>
                            {row.map((item, colIndex) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[
                                        categoryStyles.touchableBox2,
                                        {
                                            backgroundColor: select.includes(item.id) ? '#060505' : 'white',
                                            // flex: 1,
                                            marginHorizontal: wp('0.3%') // Adds spacing between buttons
                                        }
                                    ]}
                                    onPress={() => handleSelectBox(item.id)}
                                >
                                    <Text style={[categoryStyles.text, { color: select.includes(item.id) ? 'white' : '#060505' }]}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                            {row.length === 1 && <View style={{ flex: 1, marginHorizontal: wp('2%') }} />}

                        </View>
                    ))}
                </View>
                <LinearGradient colors={['#FFB600', '#FEC946']} style={{ width: wp('102.3438%'), height: hp('18.9567%'), }}>
                </LinearGradient>
                <View style={[styles.toggleBtn, { marginTop: hp('1.5267%') }]}>
                    <Text style={[styles.textView1, { left: wp('2%') }]}>Coupons</Text>
                </View>
                <View style={styles.main}>
                    {[...Array(1)].map((_, index) => (
                        <View key={index} style={styles.cardContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardContent}>
                                  
                                   <View style={styles.semiCircleLeft} />

{/* Right semi-circle */}
<View style={styles.semiCircleRight} />
    
                                    <Img width={wp('24.3%')} height={hp('10.9%')} />

                                    <View style={styles.dashedLineContainer}>
                                        
                                        {[...Array(5)].map((_, index) => (
                                            <View key={index} style={styles.dashedLine} />
                                        ))}
                                    </View>


                                    <View style={styles.textContainer}>
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>asian</Text>
                                        </View>

                                        <View style={styles.textSection}>
                                            <Text style={styles.title1}>Domu Chibi Ramen</Text>
                                            <Text style={styles.subtitle}>1 share = 1 free appetizer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
              <View>
              <View style={[styles.subView,{right:wp('9.1922%')}]}>
                        <View style={styles.subView1}>
                        <View style={{flexDirection:'row',}}>
                        <Img width={wp('24.3%')} height={hp('10.9%')} />
                            <View style={styles.dashView}>

                                {[...Array(5)].map((_, index) => (
                                    <View key={index} style={styles.dashStyle} />
                                ))}
                                
                                 </View>
                            </View>
                            <View style={styles.mainCard}>
                                <View
                                    style={styles.subCard}>
                                    <Text style={styles.textView}>asian</Text>
                                </View>

                                <View style={styles.textStyle}>
                                    <Text style={styles.textDetails}>
                                        Domu Chibi Ramen
                                    </Text>
                                    <Text style={styles.textDetails2}>
                                        1 share = 1 free appetizer
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.btnView]}>
                                <CustomButton
                                    width={wp('8%')}
                                    height={hp('15.6%')}
                                    borderRadius={wp('1.4%')}
                                    backgroundColor={'#FEC946'}
                                    title='+'
                                    fontSize={wp('6.1%')}
                                    paddingLeft={0}
                                    paddingRight={wp('1.7%')}
                                    onPress={handleIncrement}
                                />
                                <CustomButton
                                    width={wp('8%')}
                                    height={hp('15.6%')}
                                    borderRadius={wp('1.4%')}
                                    textAlign='center'
                                    color='white'
                                    backgroundColor={'#060505'}
                                    title='!'
                                    fontSize={wp('6.1%')}
                                    paddingLeft={0}
                                    paddingRight={wp('1.7%')}
                                    onPress={handleDecrement}
                                />
                            </View>
                        </View>
                    </View>

                    
                                        {[...Array(couponCount)].map((_, index) => (
                                            <View key={index} style={styles.cardContainer}>
                                                <View style={styles.card}>
                                                    <View style={styles.cardContent}>
                                                        {/* Left Image */}
                                                        <Img width={wp('24.3%')} height={hp('10.9%')} />
                    
                                                        {/* Dashed Line */}
                                                        <View style={styles.dashedLineContainer}>
                                                            {[...Array(5)].map((_, index) => (
                                                                <View key={index} style={styles.dashedLine} />
                                                            ))}
                                                        </View>
                    
                                                        {/* Right Text Section */}
                                                        <View style={styles.textContainer}>
                                                            <View style={styles.badge}>
                                                                <Text style={styles.badgeText}>asian</Text>
                                                            </View>
                    
                                                            <View style={styles.textSection}>
                                                                <Text style={styles.title1}>Domu Chibi Ramen</Text>
                                                                <Text style={styles.subtitle}>1 share = 1 free appetizer</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        ))}

                                        
                    
              </View>

                </View>
              
               
            </ScrollView>
         

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: wp('2.4331%')

    },
    touchableBox: {
        flexDirection: 'row',
        marginBottom: hp('2%')
    },
    textView1: {
        fontSize: wp('5.8394%'),
        fontFamily: 'Manrope',
    },
    semiCircleLeft: {
    width: 20, // Small width
    height: 40, // Half-circle height
    backgroundColor: '#FFFFFF', // Match background color
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    right: wp('85%'), // Half inside, half outside
    top: '50%',
    zIndex:999,
    transform: [{ translateY: -10 }], // Center vertically
    shadowOffset: { width: 0, height: hp('0.2%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('1%'),
    elevation: 5,
  },
  semiCircleRight: {
    width: 20,
    height: 40,
    backgroundColor: '#f5f5f5', // Match background color
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: -10, // Half inside, half outside
    top: '50%',
    transform: [{ translateY: -60 }], // Center vertically
  },
    btnView: { flexDirection: 'row', marginLeft: wp('18.4%'),bottom:wp('0.4243%') },
    textDetails2: {
        fontSize: wp('3.4%'),
        color: "#6F6C6C",
        textAlign: 'left',
        fontFamily: 'Manrope',
    },
    searchBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: wp("2.4331%"),
        paddingHorizontal: wp("2.4331%"),
        height: hp("7.2136%"),
        marginBottom: hp("2.1216%"),
        width: wp("89.781%"),
        borderWidth: wp("0.2238%"),
        borderColor: '#F3EFE8',
        marginTop: hp("7.6379%"),
        justifyContent: 'space-between',

    },
    icon: {
        marginRight: wp("1.9465%"),
        paddingTop: hp("2.1216%")
    },
    input: {
        flex: 1,
        fontSize: wp("3.8929%"),
    },
    textDetails: {
        fontSize: wp('3.9%'),
        textAlign: 'left',
        fontFamily: 'Manrope',
        color: '#060505',
    },
    textStyle: { marginTop: hp('0.9%') },
    subCard: {
        width: wp('11.2%'),
        height: hp('1.9%'),
        borderRadius: wp('1.2%'),
        backgroundColor: '#060505',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: wp("25.3041%"),
        height: hp("5.6577%"),
        borderWidth: wp("0.2433%"),
        borderColor: '#000000',
        borderRadius: wp("2.4331%")
    },
    toggleBackground: {
        width: wp("12.6521%"),
        backgroundColor: '#000000',
        height: hp("5.3748%"),
        borderRadius: wp("2.4331%")
    },
    toggleBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    linearStyle: { width: wp('102.3438%'), height: hp('18.9567%'), marginTop: hp('4.0712%') },
    textView: { fontSize: wp('2.4%'), color: "#FDFDFD", textAlign: 'center' },
    stylesCard: { flexDirection: 'column', paddingLeft: wp('6.3%') },
    dashStyle: { width: wp('0.2%'), height: hp('1.9%'), backgroundColor: '#6F6C6C', marginVertical: hp('0.2%') },
    dashView: { flexDirection: 'column', alignItems: 'center', marginHorizontal: wp('2.4%'), paddingTop: hp('0.5%') },
    subView1: { padding: wp('0%'), flexDirection: 'row', alignItems: 'center' },
    main: { marginTop: hp('1.3995%') },
    headerStyle: { justifyContent: 'center', alignItems: 'center', marginTop: hp('13.1%') },
    textStyle: { fontSize: wp('3.9%'), lineHeight: hp('2.6%'), color: '#060505', fontWeight: '400' },
    subView: {
        width: wp('89.8%'),
        height: hp('15.3%'),
        backgroundColor: 'white',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: hp('0.2%') },
        shadowOpacity: 0.2,
        shadowRadius: wp('1%'),
        elevation: 5,
        marginTop:hp('1.6973%'),
        justifyContent:'flex-start',
        alignItems:'flex-start',
        
    },
    backButton: {
        position: 'absolute',
        top: hp('2%'),
        left: wp('5%'),
        zIndex: 1,
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: '700',
        // marginTop: hp('20%'),
        textAlign: 'center',
        fontFamily: 'Manrope',
        // marginBottom: hp('5%'),

    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6%'),
        fontSize: hp('3%'),
        marginBottom: hp('2%'),
        backgroundColor: '#000',
        color: '#F7B603',
        letterSpacing: wp('2%'),
    },
    resendText: {
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        color: 'grey',
        fontFamily: 'Manrope'
    },
    resendLink: {
        color: '#000',
        // fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#F7B603',
        width: wp('90%'),
        height: hp('7%'),
        position: 'absolute',
        bottom: 50,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('5%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: hp('2.5%'),
        // fontWeight: 'bold',
    },

    cardContainer: {
        marginTop: hp('1.2%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: wp('89.8%'),
        height: hp('15.3%'),
        backgroundColor: '#FFFFFF',
        opacity: 0.9,
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: hp('0.2%') },
        shadowOpacity: 0.2,
        shadowRadius: wp('1%'),
        elevation: 5,

    },
    cardContent: {
        padding: wp('2.4%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: wp('24.3%'),
        height: hp('10.9%'),
    },
    dashedLineContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: wp('2.4%'),
        paddingTop: hp('0.5%'),
    },
    dashedLine: {
        width: wp('0.2%'),
        height: hp('1.9%'),
        backgroundColor: '#6F6C6C',
        marginVertical: hp('0.2%'),
    },
    textContainer: {
        flexDirection: 'column',
        paddingLeft: wp('6.3%'),

    },
    badge: {
        width: wp('11.2%'),
        height: hp('1.9%'),
        borderRadius: wp('1.2%'),
        backgroundColor: '#060505',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: wp('2.4%'),
        color: "#FDFDFD",
        textAlign: 'center',
    },
    textSection: {
        marginTop: hp('0.9%'),
    },
    title1: {
        fontSize: wp('3.9%'),
        textAlign: 'left',
        fontFamily: 'Manrope',
        color: '#060505',
    },
    subtitle: {
        fontSize: wp('3.4%'),
        color: "#6F6C6C",
        textAlign: 'left',
        fontFamily: 'Manrope',
    },
});

export default ChristianPage2;
