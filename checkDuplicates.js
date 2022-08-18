import fs from "fs";

const devices = JSON.parse(fs.readFileSync("./devices.json", "utf8"));

const checkDuplicates = async () => {
  try {
    const duplicatedDevices = devices.filter((device, index) => {
      return devices.findIndex((d) => d.uniqueId === device.uniqueId) !== index;
    });
    fs.writeFileSync(
      "./duplicatedDevices.json",
      JSON.stringify(duplicatedDevices)
    );
  } catch (error) {
    console.log(error);
  }
};

checkDuplicates();
