import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container} >
      <Image
        source={{ uri: result.image_url }}
        style={styles.image}
      />
      <Text style={styles.name} >{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    color: '#373737',
  }
});

export default ResultsDetail;
