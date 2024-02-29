import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../components/spacer/Spacer";
import { SafeArea } from "../../components/utility/safe-area-component";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { RestaurantsContext } from "../../services/restaurants/restaurant.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
  data={restaurants}
  renderItem={({ item }) => {
    return (
    <Spacer position="bottom" size="large">
      <RestaurantInfoCard />
    </Spacer>
    );
  }}
  keyExtractor={(item) => item.name}
/>

  </SafeArea>
  );
};
