import React from "react";
import { TouchableOpacity, Text, Dimensions, Image, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useResponsiveWidth } from "../../utils/responsiveDimensions";
import {customeButtonStyles} from '../../../../constants/styles/Styles'



interface ButtonInterface {
  height: any;
  width: any;
  title: string;
  backgroundColor: any;
  marginTop: number;
  borderColor: string;
  borderWidth: number;
  fontSize: number;
  borderRadius: number;
  color: string;
  email?: boolean;
  google?: boolean;
  linkedin?: boolean;
  apple?: boolean;
  fontFamily?: string;
  profile?: any;
  onPress?: any;
  icon?: any;
  opacity?: number;
  showIcon: boolean;
  id: number;
  customtitle: string;
  marginBottom: number;
  textAlign:string
  paddingRight:number;
  paddingLeft:number




}

const CustomButton: React.FC<ButtonInterface> = ({
  fontSize,
  width,
  height,
  title,
  backgroundColor,
  marginTop,
  borderColor,
  borderWidth,
  borderRadius,
  color,
  
  fontFamily,
  profile,
  onPress,
  opacity,
  icon,
  showIcon,
  id,
  customtitle,
  marginBottom,
  textAlign,
  paddingRight,
  paddingLeft
  

}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        flexDirection: "row",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        marginTop: marginTop,
        // paddingHorizontal: useResponsiveWidth(0.064, 0.064),
        borderColor: borderColor,
        borderWidth: borderWidth,
        opacity: opacity,
        alignItems: "center",
        paddingLeft:paddingLeft,
        paddingRight:paddingRight
      }}
      onPress={onPress}
    >

    

      <Text
        style={[customeButtonStyles.textView,
        {
          fontSize: fontSize,
          color: color,
          fontFamily: fontFamily,
          marginBottom: marginBottom
        }

        ]}
      >

        {showIcon && (<View style={customeButtonStyles.textMain}>
          <Image source={icon} style={customeButtonStyles.icon} />
        </View>
        )}
        <View style={customeButtonStyles.textMain}>
          <Text style={customeButtonStyles.customText}>{customtitle}</Text>
        </View>


        <Text style={{ textAlign: textAlign }}> {title}</Text>


      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;




