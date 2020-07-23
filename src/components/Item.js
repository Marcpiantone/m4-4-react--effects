import React from "react";
import styled from "styled-components";

const ItemButton = styled.button`
  margin: 1 0px;
  background: none;
  text-align: left;
  color: white;
  line-height: 2em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid grey;
  outline: none;
`;

const Title = styled.h4`
  font-size: 25px;
`;

const Text = styled.p``;

const Item = ({ item, purchasedItems, handleClick }) => {
  return (
    <ItemButton key={item.name} onClick={() => handleClick(item)}>
      <Title>{item.name}</Title>
      <Text>
        Cost {item.cost} cookie(s). Produces {item.value} cookies/second.
      </Text>
    </ItemButton>
  );
};

export default Item;
