const { writeFileSync } = require("fs");
const path = require("path");
const axios = require("axios");

let data = "";

const getRawData = async url => {
  try {
    const response = await axios.get(url);
    const content = await response.data;

    return content;
  } catch (error) {
    console.error(error);
  }
};

getRawData(
  "https://www.paypal.com/us/inspire/listing/get/listing_mx_daily_offers_dec_2021"
)
  .then(response => {
    for (let i = 0; i < 1000; i++) {
      data += JSON.stringify(response);
    }

    writeFileSync(
      path.join(__dirname, "content", "generic", "big-data.json"),
      data
    );
  })
  .catch(error => console.error(error));
