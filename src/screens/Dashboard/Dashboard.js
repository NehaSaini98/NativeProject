import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import navigationStrings from '../../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header text="Dashboard"/>
        <TouchableOpacity
          style={styles.buttonGo}
          onPress={() => navigation.navigate(navigationStrings.EXPLORE)}>
          <Text style={styles.textGo}>
            {'Go To ' + navigationStrings.EXPLORE}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  buttonGo: {
    backgroundColor: 'pink',
    padding: 15,
    width: '',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1
  },
  textGo: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dashboard;
