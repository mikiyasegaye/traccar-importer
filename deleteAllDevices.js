import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

let url = process.env.BASE_URL;
let username = process.env.TRACCAR_USERNAME;
let password = process.env.TRACCAR_PASSWORD;

const deleteDevices = async () => {
  try {
    const addedDevices = await axios.get(url + "api/devices", {
      auth: {
        username,
        password,
      },
    });
    for (let i = 0; i < addedDevices.data.length; i++) {
      let device = addedDevices.data[i];
      let response = await axios.delete(url + "api/devices/" + device.id, {
        auth: {
          username,
          password,
        },
      });
      console.log(response);
    }
    console.log(addedDevices.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

deleteDevices();
