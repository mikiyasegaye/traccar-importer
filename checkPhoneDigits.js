import fs from "fs";

const devices = JSON.parse(fs.readFileSync("./devices.json", "utf8"));

const checkPhoneDigits = async () => {
  try {
    let phoneDigitsList = [];
    for (let i = 0; i < devices.length; i++) {
      const device = devices[i];
      const phoneDigits = device.uniqueId.replace(/[^0-9]/g, "");
      if (phoneDigits.length === 9) {
        phoneDigitsList.push(device);
      }
    }
    fs.writeFileSync("./phoneDigits.json", JSON.stringify(phoneDigitsList));
  } catch (error) {
    console.log(error);
  }
};

checkPhoneDigits();
