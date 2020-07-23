import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item";

import useInterval from "../hooks/use-interval.hook";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  //const numCookies = 100;

  const [numCookies, setNumcookies] = useState(100);

  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const [cookiesPerSec, setCookiesPerSec] = useState(0);

  const handleCookieClick = (num) => {
    setNumcookies(numCookies + num);
  };

  const purchasedItemsUpdater = (item) => {
    setPurchasedItems({
      ...purchasedItems,
      [item]: 1 + purchasedItems[item],
    });
  };

  const handleClick = (item) => {
    console.log("clicked on " + item.name);
    setNumcookies(numCookies - item.cost);
    purchasedItemsUpdater(item.name.toLowerCase());
  };

  const calculateCookiesPerTick = (purchasedItems) => {
    let cookies = 0;

    const getItemByid = (id) => {
      return items.find((item) => item.id.toLowerCase() === id);
    };

    for (const item in purchasedItems) {
      cookies = getItemByid(item).value * purchasedItems[item] + cookies;
    }
    return cookies;
  };

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    console.log(`${numOfGeneratedCookies} PER SECOND`);
    setNumcookies(numCookies + numOfGeneratedCookies);
    setCookiesPerSec(numOfGeneratedCookies);
  }, 1000);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{cookiesPerSec}</strong> cookies per second
        </Indicator>
        <Button>
          <Cookie src={cookieSrc} onClick={() => handleCookieClick(1)} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item) => {
          return (
            <Item
              item={item}
              purchasedItems={purchasedItems}
              handleClick={handleClick}
            />
          );
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
