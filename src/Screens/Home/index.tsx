import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {FlatList, SafeAreaView} from 'react-native';
import {fetchPosts} from '../../Services';
import {Loader, SepratorLine, PostCard} from '../../Components';
import styles from './style';
export default function Home() {
  const {isLoading, data}: any = useQuery({
    queryKey: ['Posts'],
    queryFn: fetchPosts,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            ItemSeparatorComponent={SepratorLine}
            data={data}
            renderItem={({item}) => {
              return <PostCard post={item} />;
            }}
          />
        </SafeAreaView>
      )}
    </>
  );
}
