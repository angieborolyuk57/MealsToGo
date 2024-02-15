import React, { useState } from "react";
import { StatusBar, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.secondContainer}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 15,
  },
  text: {
    padding: 16,
  },
  search: {
    padding: 15,
  },
});
