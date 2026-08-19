import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartScreen({ cart, removeFromCart, goToMenu }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart</Text>
        <TouchableOpacity style={styles.button} onPress={goToMenu}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text>Please add an item from the menu.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  <Text>R {item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.total}>
            <Text style={styles.totalText}>Total: R {total.toFixed(2)}</Text>
          </View>
        </>
      )}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
  },
  list: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  details: {
    flex: 1,
    padding: 8,
  },
  foodName: {
    fontSize: 16,
  },
  remove: {
    color: '#333',
  },
  total: {
    padding: 10,
  },
  totalText: {
    fontSize: 18,
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
  },
  button: {
    padding: 8,
  },
  buttonText: {
    color: '#333',
  },
});
