import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Avatar, Button, Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: black;
  margin-top: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Title title="Some great restaurant" />
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title variant="titleLarge">{name}</Title>
      </Card.Content>
    </Card>
  );
};
