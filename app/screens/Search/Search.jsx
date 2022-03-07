import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import useSearch from './hooks';
import { decode } from 'html-entities';

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 4,
  },
  itemContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    padding: 4,
  },
  titleText: {
    fontSize: 17,
  },
  priceText: {
    color: 'green',
    fontSize: 15,
  },
});

export default function Search({ navigation }) {
  const [search, setSearch] = useState('');
  const [SearchApi, results] = useSearch();
  const updateSearch = (term) => {
    setSearch(term);
  };

  useEffect(() => {
    SearchApi(search);
  }, [search]);

  if (results) {
    // console.log(results.data.products);
  }

  const renderItem = (item) => {
    const {
      id,
      name,
      image: { sizes },
      maximumPriceString: maxPrice,
      minimumPriceString: minPrice,
      shortDescription: shortDesc,
    } = item.item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Products', { id: id })}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.titleText}>
            {decode(name, { level: 'html5' })}
          </Text>
          <Text style={styles.priceText}>{minPrice}</Text>
          <Image
            source={{ uri: sizes[0].url }}
            style={{ height: 150, width: 150, alignSelf: 'center' }}
          />
          <Text style={{ fontSize: 14 }}>
            {decode(shortDesc, { level: 'html5' })}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Searchbar
        placeholder="Search items..."
        onChangeText={updateSearch}
        value={search}
      />
      <View style={styles.searchContainer}>
        <FlatList data={results?.data?.products} renderItem={renderItem} />
      </View>
    </>
  );
}
