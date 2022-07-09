const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const handleError = (error) =>
  console.log(`Error getting temperature: ${error}`);

const successRate = (rate) => Math.random() <= rate;

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (callbackSuccess, callbackError) => {
  const temperature = getMarsTemperature();
  setTimeout(() => {
    if (successRate(0.6)) {
      callbackSuccess(temperature);
    } else {
      callbackError('Robot is busy.');
    }
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);