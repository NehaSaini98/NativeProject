import {View, Button,Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import Header from '../../components/Header/Header';

export default function Home({navigation}) {
  console.log('props', navigation);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header text="Home" />
        <TouchableOpacity style={styles.buttonGo} onPress={() =>
            navigation.navigate(navigationStrings.PRODUCT_DETAIL)
          }>
          <Text style={styles.textGo}>{'Go To ' + navigationStrings.PRODUCT_DETAIL}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGo} onPress={() =>
            navigation.navigate(navigationStrings.PROFILE, {screen: navigationStrings.EDIT_PROFILE})
          }>
          <Text style={styles.textGo}>{navigationStrings.EDIT_PROFILE}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
