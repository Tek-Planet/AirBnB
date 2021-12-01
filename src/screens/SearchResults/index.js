import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Post from '../../components/Post';
import feed from '../../../assets/data/feed'
import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'

const SearchResultsScreen = (props) => {
  // const [posts, setPosts] = useState ([])
 
  // useEffect (()=>{
  //   const fetchPosts = async () => {
  //     try {
  //       const postResult = await API.graphql(
  //         graphqlOperation(listPosts)
  //       )
  //       setPosts(postResult.data.listPosts.items)
  //     } catch (error) {
        
  //     }
  //   }
  //   fetchPosts()
  // }, [])
   const { posts } = props;

  return (
    <View>
      <FlatList 
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
