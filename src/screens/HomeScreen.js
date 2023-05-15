import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import SearchBar from "../components/SearchBar";
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

export const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');

  const handleTermSubmit = () => {
    // This will navigate to the Search Screen with the search term as a parameter
    navigation.navigate('Search', { term });
  };

  return (
    <LinearGradient
      colors={['#EA4C89', '#EA4C89', '#9C2763']}
      start={{ x: 0, y: 0 }}
      end={{ x: Math.cos(10 * Math.PI / 180), y: Math.sin(10 * Math.PI / 180)}}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to FoodApp!</Text>
      <Text style={styles.sub}>Search for your favorite foods using the search bar below!</Text>
      <View style={styles.searchContainer}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={handleTermSubmit}
        />
      </View>
      <Text style={styles.sub2}>Made by Brian Marin Silva</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  searchContainer: {
    marginBottom: height / 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
  },
  sub: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  sub2: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  }
});

export default HomeScreen;
