import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#EA4C89', '#EA4C89', '#9C2763']}
      start={{ x: 0, y: 0 }}
      end={{ x: Math.cos(10 * Math.PI / 180), y: Math.sin(10 * Math.PI / 180)}}
      style={styles.container}
    >
      <View>
        <Text style={styles.name}>{result.name}</Text>
        <FlatList 
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {
            return <Image style={styles.image} source={{ uri: item }} />
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 15,
    borderBottomColor: '#373737',
  },
  container: {
    flex: 1,
  }
});

export default ResultsShowScreen;
