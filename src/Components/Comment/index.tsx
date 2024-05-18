import * as React from 'react';
import {Text, View} from 'react-native';
import {CommentType} from '../../Utils/types';
import Avatar from '../Avatar';
import styles from './style';

interface CommentProps {
  comment: CommentType;
}

const Comment = (props: CommentProps) => {
  const {comment} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageAndUserWrapper}>
        <Avatar />
        <Text>{comment.name}</Text>
      </View>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
};

export default Comment;
