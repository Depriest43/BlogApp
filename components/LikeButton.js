import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LikeButton = ({ likes, onLike }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likesText}>Likes: {likes}</Text>
      <TouchableOpacity style={styles.button} onPress={onLike}>
        <Text style={styles.buttonText}>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LikeButton;
