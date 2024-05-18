import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {avatarURL} from '../../Utils/constants';
import styles from './style';

const Avatar = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Image source={avatarURL} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Avatar;
