
# Device Registrations Remover

This Node.js script is used to manage devices in the Cisco Webex platform. It retrieves a list of devices from the Webex API and deletes each device one by one.

## Prerequisites

Before running this script, make sure you have the following:

- Node.js installed on your system.
- npm installed to manage dependencies.

## Installation

Clone this repository to your local machine or simply copy this code.

Then install Axios:
```
npm install axios
```
## Configuration

Before running the script, you need to provide your Cisco Webex user token. You can obtain your token from the Cisco Webex Developer Portal.

Replace <your BOT token here> with your actual BOT token in the drr.js file:

 ``` javascript

const userToken = "<your user token here>";

 ```
##Usage

To run the script, execute the following command:

 ```bash

node drr.js
 ```
The script will retrieve the list of devices from the Cisco Webex API and attempt to delete each device. If successful, it will print a success message. If there's an error during the deletion process, it will print an error message and prompt you to delete the device manually.
Notes

    This script utilizes the axios library for making HTTP requests.
    The Cisco Webex API endpoint used in this script is https://wdm-a.wbx2.com/wdm/api/v1/devices.
    Make sure to handle errors appropriately, especially if the Cisco Webex API endpoint or your internet connection is unreachable.
    This script may require adjustments depending on changes to the Cisco Webex API or your specific requirements.
