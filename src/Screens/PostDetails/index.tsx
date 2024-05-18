import * as React from 'react';
import {FlatList, Text} from 'react-native';
import styles from './style';
import {RouteProp, useRoute} from '@react-navigation/native';
import {PostType} from '../../Utils/types';
import {Comment, Loader, PostCard} from '../../Components';
import {useQuery} from '@tanstack/react-query';
import {fetchComments} from '../../Services';

type routeParams = {
  params: {post: PostType};
};
const PostDetails = () => {
  const route: RouteProp<routeParams> = useRoute();
  const {isLoading, data}: any = useQuery({
    queryKey: ['Comments'],
    queryFn: () => fetchComments(post.id),
  });
  const {post} = route.params || 'Test';
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          contentContainerStyle={styles.container}
          ListEmptyComponent={<Text>There is no comment</Text>}
          ListHeaderComponent={
            <>
              <PostCard post={post} />

              <Text style={styles.commentsHeader}>Comments</Text>
            </>
          }
          renderItem={({item}) => {
            return <Comment comment={item} />;
          }}
        />
      )}
    </>
  );
};

export default PostDetails;
