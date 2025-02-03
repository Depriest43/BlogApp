import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (title.trim() && content.trim() && author.trim()) {
      onAddPost({ title, content, author });
      setTitle('');
      setContent('');
      setAuthor('');
    }
  };

  return (
    <View>
      <TextInput placeholder="Post Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Author Name" value={author} onChangeText={setAuthor} />
      <TextInput placeholder="Post Content" value={content} onChangeText={setContent} multiline />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPostForm;
