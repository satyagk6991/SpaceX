import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const CustomRadioBtn = ({text, onPress, selectedVal}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.customButton,
          {backgroundColor: selectedVal == text ? '#29a329' : '#ccffcc'},
        ]}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioBtn;

const styles = StyleSheet.create({
  customButton: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: '#ccffcc',
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
