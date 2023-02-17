import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {height, width} from '../Utils';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    headingText: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      paddingHorizontal: width * 0.2,
      paddingVertical: height * 0.02,
    },
    filterBlock: {
      marginHorizontal: width * 0.04,
      backgroundColor: 'white',
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.02,
      marginVertical: height * 0.01,
    },
    filterTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    launchTxt: {
      fontSize: 18,
      fontWeight: '700',
      color: '#000',
    },
    launchBlock: {
      borderBottomWidth: 1,
      borderColor: '#000',
      marginHorizontal: width * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.04,
      marginBottom: 20,
    },
    fabFilter: {
      width: width * 0.2,
      height: width * 0.2,
      backgroundColor: 'red',
      position: 'absolute',
      bottom: 40,
      right: 30,
      borderRadius: width * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fabTxt: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    modalBtn: {
      width: width * 0.5,
      height: height * 0.06,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: height * 0.01,
      borderRadius: 20,
    },
    modalBtnTxt: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    detailBlock: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    descTxt: {
      fontSize: 17,
      fontWeight: '700',
      color: '#0000FF',
      marginLeft: 5,
    },
  });