const axios = require("axios");
const API_KEY = "ADD-API-KEY-HERE";

// Set the model to use (e.g. "text-davinci-003")
const MODEL = "text-davinci-003";

// Set properties
const TOKEN_COUNT = 300;
const TEMPERATURE = 0.4;
const TOP_P = 1;
const FREQUENCY = 0.5;
const PRESENCE = 0.5;

async function getAnswer(question) {
  const PROMPT = question;

  // Generate text using the GPT-3 model
  const BODY = {
    model: MODEL,
    prompt: PROMPT,
    temperature: TEMPERATURE,
    top_p: TOP_P,
    frequency_penalty: FREQUENCY,
    presence_penalty: PRESENCE,
    max_tokens: TOKEN_COUNT,
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      BODY,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const text = response.data.choices[0].text;
    return await text;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {getAnswer}
