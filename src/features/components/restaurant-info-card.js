import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Avatar, Button, Card } from "react-native-paper";
import star from "../../../assets/star";
import open from "../../../assets/open";

const Title = styled.Text`
  padding: 16px;
  color: black;
  margin-top: 20px;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={5}>
      <Card.Title title="Some great restaurant" />
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title variant="titleLarge">{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isOpenNow && <Open xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
      </Card.Content>
    </Card>
  );
};
