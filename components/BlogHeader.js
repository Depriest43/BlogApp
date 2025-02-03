import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogHeader = ({ title, author }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.authorText}>By {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { backgroundColor: "#4CAF50", padding: 20, width: "100%", paddingTop: 40 },
  headerText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  authorText: { color: 'white', fontSize: 14 },
});

export default BlogHeader;
