import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {COLORS, FONTS, images, SIZES} from '../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{}}>
        <ScrollView>
          <ImageBackground
            source={images.bg}
            resizeMode="cover"
            style={{height: SIZES.height + 200, width: SIZES.width}}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: '5%',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={images.avatar}
                  style={{height: 50, width: 50}}></Image>
                <View style={{marginLeft: 15, justifyContent: 'center'}}>
                  <Text style={{color: COLORS.white, ...FONTS.h3}}>
                    John Tom
                  </Text>
                  <Text style={{color: COLORS.primary, ...FONTS.h4}}>
                    John.space
                  </Text>
                </View>
              </View>
              <Image
                source={images.star}
                style={{height: 25, width: 25}}></Image>
              <View>
                <ImageBackground
                  source={images.coinbg}
                  style={{
                    width: 100,
                    height: 44,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                  }}>
                  <Text style={{color: COLORS.white, ...FONTS.h3}}>123.34</Text>
                  <Image
                    style={{width: 35, height: 35}}
                    source={images.coin}></Image>
                </ImageBackground>
              </View>
            </View>
            <ImageBackground
              source={images.slidebg}
              imageStyle={{borderRadius: 35}}
              resizeMode="cover"
              style={{
                width: SIZES.width * 0.9,
                alignSelf: 'center',
                marginTop: '10%',
              }}>
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  margin: 50,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{...FONTS.h1, color: COLORS.white, fontSize: 24}}>
                    Fly with
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: COLORS.white,

                        ...FONTS.h1,
                      }}>
                      Stars
                    </Text>
                    <Image
                      source={images.slidestar}
                      style={{width: 32, height: 32, marginLeft: 15}}></Image>
                  </View>
                  <ImageBackground
                    source={images.slidebutton}
                    resizeMode="cover"
                    style={{
                      width: 95,
                      height: 45,
                      marginTop: 10,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{...FONTS.h3, color: COLORS.white, fontSize: 18}}>
                      Fly
                    </Text>
                  </ImageBackground>
                </View>
                <Image
                  source={images.slideimg}
                  style={{
                    height: '100%',
                    width: '75%',
                    resizeMode: 'contain',
                  }}></Image>
              </View>
            </ImageBackground>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                Popular stars
              </Text>
              <Text style={{...FONTS.h2, color: COLORS.primary}}>View all</Text>
            </View>
            <View style={{paddingLeft: '5%'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ImageBackground
                  source={images.scrollbg}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 36}}
                  style={{
                    paddingVertical: 15,
                    width: SIZES.width * 0.7,
                    alignSelf: 'center',
                    marginTop: '5%',
                    marginRight: 30,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image source={images.scroll1} style={{flex: 2}}></Image>
                      <View style={{flex: 1.5}}>
                        <Text style={{...FONTS.h1, color: COLORS.white}}>
                          Mars
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>
                          0.03 ETH
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>
                          123 Km
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: '90%',
                        height: 63,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                      source={images.scrollbutton}>
                      <Text style={{...FONTS.h2, color: COLORS.white}}>
                        Fly with star
                      </Text>
                    </ImageBackground>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={images.scrollbg}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 36}}
                  style={{
                    paddingVertical: 15,
                    width: SIZES.width * 0.7,
                    alignSelf: 'center',
                    marginTop: '5%',
                    marginRight: 30,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image source={images.scroll1} style={{flex: 2}}></Image>
                      <View style={{flex: 1.5}}>
                        <Text style={{...FONTS.h1, color: COLORS.white}}>
                          Mars
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>
                          0.03 ETH
                        </Text>
                        <Text style={{...FONTS.h3, color: COLORS.white}}>
                          123 Km
                        </Text>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: '90%',
                        height: 63,
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                      source={images.scrollbutton}>
                      <Text style={{...FONTS.h2, color: COLORS.white}}>
                        Fly with star
                      </Text>
                    </ImageBackground>
                  </View>
                </ImageBackground>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                Featured visitors
              </Text>
              <Text style={{...FONTS.h2, color: COLORS.primary}}>View all</Text>
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <ImageBackground
                source={images.reviewbg}
                style={{
                  width: '100%',
                  height: 65,
                  alignContent: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '5%',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.avatar2}
                    style={{height: 50, width: 50}}></Image>
                  <View
                    style={{
                      marginLeft: 15,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: COLORS.white, ...FONTS.h3}}>
                      Karim Saif
                    </Text>
                    <Text style={{color: COLORS.primary, ...FONTS.h4}}>
                      1.4 Follower
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '25%',
                      height: '75%',
                      borderRadius: 7,
                      borderWidth: 0.5,
                      borderColor: COLORS.white,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: COLORS.white, ...FONTS.h3}}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
