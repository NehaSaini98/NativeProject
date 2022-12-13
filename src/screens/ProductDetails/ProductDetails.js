import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import navigationStrings from '../../constants/navigationStrings';

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header text={navigationStrings.PRODUCT_DETAIL} goBack={() => navigation.goBack()} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default ProductDetails;