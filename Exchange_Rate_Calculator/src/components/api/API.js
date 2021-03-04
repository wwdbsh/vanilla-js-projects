export const calculate = (
    currencyEl_one,
    currencyEl_two,
    amountEl_one,
    amountEl_two,
    rateEl
) => {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value*rate).toFixed(2);
        });
};