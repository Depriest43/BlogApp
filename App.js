import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost';
import NewPostForm from './components/NewPostForm';

export default function App() {
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: "Getting Started with React Native", author: "John Doe", content: "React Native lets you build mobile apps using JavaScript.", likes: 0 },
    { id: 2, title: "State Management in React", author: "Jane Smith", content: "React's useState hook is useful for managing state.", likes: 5 }
  ]);

  const handleLike = (postId) => {
    setBlogPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddPost = (newPost) => {
    setBlogPosts(prevPosts => [
      { id: prevPosts.length + 1, ...newPost, likes: 0 },
      ...prevPosts
    ]);
  };

  return (
    <View style={styles.container}>
      <BlogHeader title="My Blog App" author="React Native Team" />
      <ScrollView style={styles.scrollContainer}>
        <NewPostForm onAddPost={handleAddPost} />
        {blogPosts.map(post => (
          <BlogPost key={post.id} post={post} onLike={handleLike} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF' },
  scrollContainer: { padding: 10 },
});
