import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10},
  imageAndUserWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  user: {color: '#481E14', fontWeight: '600'},
  postTitle: {
    color: '#31363F',
    fontWeight: '800',
    marginVertical: 5,
  },
  postBody: {color: '#222831', fontWeight: '500'},
});
export default styles;
