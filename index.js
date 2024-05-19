const currencyFirstEL = document.getElementById("currency-first");

const currencySecondEl = document.getElementById("currency-second");

const worthFirstEl = document.getElementById("worth-first");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    ` https://v6.exchangerate-api.com/v6/1ec9d2e9c664bbee9ec1fd7f/latest/${currencyFirstEL.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEL.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEL.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
