import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {HomeStackNavigatorParams} from '../../Navigation';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation: StackNavigationProp<HomeStackNavigatorParams> =
    useNavigation();
  let scaleValue = React.useMemo(() => {
    return new Animated.Value(1);
  }, []);
  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1.5,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Home');
    });
  }, [scaleValue, navigation]);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../Assets/logo.png')}
        style={[
          styles.image,
          {
            transform: [{scale: scaleValue}],
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {width: 120, resizeMode: 'contain', height: 120},
});
