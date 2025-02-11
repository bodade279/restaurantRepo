  {[...Array(2)].map((_, index) => (
                        <View key={index} style={{ marginTop: hp('1.2%'), justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: wp('89.8%'),
                                height: hp('15.3%'),
                                backgroundColor: 'white',
                                opacity: 0.9,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: hp('0.2%') },
                                shadowOpacity: 0.2,
                                shadowRadius: wp('1%'),
                                elevation: 5,
                            }}>
                                <View style={{ padding: wp('2.4%'), flexDirection: 'row', alignItems: 'center' }}>
                                  
                                    <Img width={wp('24.3%')} height={hp('10.9%')} />

                                 
                                    <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: wp('2.4%'), paddingTop: hp('0.5%') }}>
                                        {[...Array(5)].map((_, index) => (
                                            <View key={index} style={{ width: wp('0.2%'), height: hp('1.9%'), backgroundColor: '#6F6C6C', marginVertical: hp('0.2%') }} />
                                        ))}
                                    </View>

                                 
                                    <View style={{ flexDirection: 'column', paddingLeft: wp('6.3%') }}>
                                        <View
                                            style={{
                                                width: wp('11.2%'),
                                                height: hp('1.6%'),
                                                borderRadius: wp('1.2%'),
                                                backgroundColor: '#060505',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text style={{ fontSize: wp('2.4%'), color: "#FDFDFD", textAlign: 'center' }}>asian</Text>
                                        </View>

                                        <View style={{ marginTop: hp('0.9%') }}>
                                            <Text style={{
                                                fontSize: wp('3.9%'),
                                                textAlign: 'left',
                                                fontFamily: 'Manrope',
                                                color: '#060505',
                                            }}>
                                                Domu Chibi Ramen
                                            </Text>
                                            <Text style={{
                                                fontSize: wp('3.4%'),
                                                color: "#6F6C6C",
                                                textAlign: 'left',
                                                fontFamily: 'Manrope',
                                            }}>
                                                1 share = 1 free appetizer
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>