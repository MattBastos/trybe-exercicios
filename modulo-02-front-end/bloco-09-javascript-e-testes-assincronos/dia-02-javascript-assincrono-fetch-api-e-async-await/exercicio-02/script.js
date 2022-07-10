const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCoins = async () => {
  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const coinsList = document.getElementById('coins-list');

  coins.filter((coin, index) => index < 10)
    .forEach((coin) => {
      const newLI = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      newLI.innerText = `${coin.name} (${coin.symbol}): R$ ${usdPrice.toFixed(2)}`;
      coinsList.appendChild(newLI);
    });
};

window.onload = () => setCoins();