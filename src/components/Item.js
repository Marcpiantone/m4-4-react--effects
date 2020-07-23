import React from "react";
import styled from "styled-components";

const ItemButton = styled.button`
  margin: 15px;
  background: none;
  text-align: left;
  color: white;
  line-height: 2em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid grey;
  outline: none;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 25px;
`;

const Text = styled.p`
  font-size: 1.25em;
`;

const Counter = styled.p`
  margin: 10px;
  font-size: 3em;
`;

const Infos = styled.p`
  vertical-align: middle;
`;

const Item = ({ item, purchasedItems, handleClick }) => {
  const id = item.name.toLowerCase();

  return (
    <ItemButton key={item.name} onClick={() => handleClick(item)}>
      <Infos>
        <Title>{item.name}</Title>
        <Text>
          Cost {item.cost} cookie(s). Produces {item.value} cookies/second.
        </Text>
      </Infos>
      <Counter> {purchasedItems[id]}</Counter>
    </ItemButton>
  );
};

export default Item;
