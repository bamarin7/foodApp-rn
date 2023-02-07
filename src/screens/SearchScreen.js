import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
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
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
