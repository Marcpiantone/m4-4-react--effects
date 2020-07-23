import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  line-height: 2em;
`;

const Title = styled.h4`
  font-size: 25px;
`;

const Text = styled.p``;

const Item = ({ item, purchasedItems, handleClick }) => {
  return (
    <ItemDiv onClick={() => handleClick(item)}>
      <Title>{item.name}</Title>
      <Text>
        Cost {item.cost} cookie(s). Produces {item.value} cookies/second.
      </Text>
    </ItemDiv>
  );
};

export default Item;
