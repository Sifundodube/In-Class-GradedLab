import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import foodItems from './foodItems';

export default function MenuScreen({ cart, addToCart, goToCart }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Food Delivery App</Text>
          <Text style={styles.title}>Today's Menu</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
          <Text>Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.intro}>Food items:</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.foodRow}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text style={styles.addText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appName: {
    fontSize: 16,
  },
  title: {
    fontSize: 22,
  },
  cartButton: {
    padding: 8,
  },
  intro: {
    padding: 10,
  },
  list: {
    padding: 10,
  },
  foodRow: {
    flexDirection: 'row',
    padding: 8,
  },
  image: {
    width: 70,
    height: 70,
  },
  info: {
    flex: 1,
    padding: 8,
  },
  foodName: {
    fontSize: 16,
  },
  price: {
    marginTop: 3,
  },
  addText: {
    marginTop: 6,
  },
});
