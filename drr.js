const axios = require('axios');

const userToken = "<your user token here>";
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${userToken}`
};

axios.defaults.headers.common = headers;
axios.defaults.httpsAgent = new axios.httpsAgent({ rejectUnauthorized: false });

async function sendSpark(method, url, data) {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function deleteDevice(url) {
    try {
        await sendSpark("DELETE", url);
        console.log("Device deleted successfully.");
    } catch (error) {
        console.error(`Error deleting device at URL ${url}:`, error);
        console.log("Must be deleted manually.");
    }
}

async function main() {
    const url = "https://wdm-a.wbx2.com/wdm/api/v1/devices";
    try {
        const devices = await sendSpark("GET", url);
        const deviceList = devices.devices;
        for (const device of deviceList) {
            const deviceUrl = device.url;
            console.log(deviceUrl);
            await deleteDevice(deviceUrl);
        }
    } catch (error) {
        console.error("Error getting device list:", error);
    }
    process.exit();
}

main();
