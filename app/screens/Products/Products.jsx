import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  useWindowDimensions,
} from 'react-native';

import useProducts from './hooks';
import { decode } from 'html-entities';
import RenderHTML from 'react-native-render-html';

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  priceText: {
    fontSize: 18,
    color: 'green',
  },
});

export default function Products({ route }) {
  const { width } = useWindowDimensions();
  const { id } = route.params;
  const [getProducts, results, isLoading] = useProducts();

  useEffect(() => {
    getProducts(id);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.productContainer}>
        <ActivityIndicator color="blue" />
      </View>
    );
  }

  if (!isLoading) {
    const {
      name,
      description,
      image: { sizes },
      options,
    } = results.data;
    const { priceString } = options[0];
    return (
      <ScrollView style={styles.productContainer}>
        <View style={{ padding: 20 }}>
          <Image
            source={{ uri: sizes[2].url }}
            style={{ height: 300, width: 300, alignSelf: 'center' }}
          />
          <Text style={styles.titleText}>
            {decode(name, { level: 'html5' })}
          </Text>
          <Text style={styles.priceText}>{priceString}</Text>
          <RenderHTML
            contentWidth={width}
            source={{ html: `${description}` }}
          />
        </View>
      </ScrollView>
    );
  }
}
