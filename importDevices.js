import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const devices = JSON.parse(fs.readFileSync("./phoneDigits.json", "utf8"));

let url = process.env.BASE_URL;
let username = process.env.TRACCAR_USERNAME;
let password = process.env.TRACCAR_PASSWORD;

const importDevices = async () => {
  try {
    for (let i = 0; i < devices.length; i++) {
      let device = {
        name: devices[i].name,
        uniqueId: devices[i].uniqueId,
      };
      let response = await axios.post(url + "api/devices", device, {
        auth: {
          username,
          password,
        },
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error.response);
  }
};

importDevices();
