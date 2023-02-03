import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

const filterByPrice = (price) => {
  return results.filter(result => {
    return result.price === price;
  });
};

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMsg ? <Text>{errorMsg}</Text> : null }
      <Text>We have found {results.length} results</Text>
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
        results={filterByPrice('$$$')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
