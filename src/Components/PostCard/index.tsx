import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {PostType} from '../../Utils/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackNavigatorParams} from '../../Navigation';
import styles from './style';
import Avatar from '../Avatar';

interface PostCardProps {
  post: PostType;
}

const PostCard = (props: PostCardProps) => {
  const {post} = props;
  const navigation: StackNavigationProp<HomeStackNavigatorParams> =
    useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PostDetails', {post: post})}>
      <View style={styles.imageAndUserWrapper}>
        <Avatar />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.user}>{post.user_id}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.postTitle}>{post?.title}</Text>
      <Text style={styles.postBody}>{post?.body}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;
