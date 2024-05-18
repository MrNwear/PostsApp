import axios from 'axios';
import {Alert} from 'react-native';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://gorest.co.in/public/v2/posts/');
    return response.data;
  } catch (error) {
    Alert.alert('something went wrong ,please try again later');
    return error;
  }
};
export const fetchComments = async (post_id: number) => {
  try {
    const response = await axios.get(
      'https://gorest.co.in/public/v2/posts/' + post_id + '/comments',
    );
    console.log('res', response.data);
    return response.data;
  } catch (error) {
    Alert.alert(
      '',
      'something went wrong while fetching post comments, try again later',
    );

    return error;
  }
};
