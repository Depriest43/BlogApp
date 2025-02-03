import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LikeButton from './LikeButton';

const BlogPost = ({ post, onLike }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.authorText}>By {post.author}</Text>
      <Text style={styles.contentText}>{post.content}</Text>
      <LikeButton likes={post.likes} onLike={() => onLike(post.id)} />
    </View>
  );
};

export default BlogPost;
