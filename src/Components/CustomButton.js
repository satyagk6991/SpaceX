import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const CustomButton = ({text, onPress, selectedVal}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.customButton,
          {backgroundColor: selectedVal == text ? '#ff6666' : '#99ff99'},
        ]}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: '#99ff99',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: height * 0.008,
  },
  btnText: {
    color: '#000',
    fontSize: 15,
  },
});
