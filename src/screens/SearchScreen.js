import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { LinearGradient } from 'expo-linear-gradient';

export const SearchScreen = ({ navigation }) => {
  // const [term, setTerm] = useState('');
  const [term, setTerm] = useState(navigation.getParam('term', ''));
  const [searchApi, results, errorMsg] = useResults();

  useEffect(() => {
    if (term) {
      searchApi(term);
    }
  }, [term]);

  const filterByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <LinearGradient
    colors={['#EA4C89', '#EA4C89', '#9C2763']}
    start={{ x: 0, y: 0 }}
    end={{ x: Math.cos(10 * Math.PI / 180), y: Math.sin(10 * Math.PI / 180)}}
    style={styles.container}
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMsg ? <Text>{errorMsg}</Text> : null }
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterByPrice('$')}
        />
        <ResultsList
          title='Bit Pricier'
          results={filterByPrice('$$')}
        />
        <ResultsList
          title='Big Spender'
          results={filterByPrice('$$$' || '$$$$')}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
