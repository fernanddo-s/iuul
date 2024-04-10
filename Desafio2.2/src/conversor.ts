import axios from "axios";

interface ExchangeRateResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
}

async function convertCurrency(
  fromCurrency: string,
  toCurrency: string,
  amount: number
): Promise<void> {
  const API_KEY = "661452a87b2072c27dac2db5";
  const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

  try {
    const response = await axios.get<ExchangeRateResponse>(apiUrl);
    const conversionRate = response.data.conversion_rate;
    const convertedAmount = amount * conversionRate;

    console.log(
      `Converted ${amount} ${fromCurrency} to ${convertedAmount} ${toCurrency}`
    );
    console.log(
      `Conversion rate: 1 ${fromCurrency} = ${conversionRate} ${toCurrency}`
    );
  } catch (error) {
    console.error(
      "Error converting currency:",
      error.response?.data ?? error.message
    );
  }
}

// Example usage
convertCurrency("USD", "EUR", 100);
