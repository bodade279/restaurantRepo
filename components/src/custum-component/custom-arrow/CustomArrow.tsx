import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface CustomArrowProps {
  onPress?: () => void; 
  direction?: 'left' | 'right' | 'up' | 'down'; 
  right: boolean; 
  left: number; 
  leftarrow: boolean; 
  marginBottom?: number;
  marginTop?: number; 
  width?: number; 
  height?: number; 
  tintcolor?: string; 
  cl?: boolean; 
  navigation?: any; 
}

const CustomArrow: React.FC<CustomArrowProps> = ({
  onPress,
  right,
  leftarrow,
  cl,
  navigation, 
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {leftarrow && (
        <TouchableOpacity style={styles.arrowButton}  onPress={() => navigation?.goBack()} >
          <Icon name="arrow-left" size={wp('5.6458%')} color={cl ? 'black' : 'white'} />
        </TouchableOpacity>
      )}

      {right && (
        <TouchableOpacity style={styles.arrowButton}  onPress={() => navigation?.goBack()} >
          <Icon name="arrow-right" size={wp('4.6458%')} color={cl ? '#1269EB' : 'white'} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButton: {
    padding: 0, 
    backgroundColor: 'transparent', 
  },
});

export default CustomArrow;

