A fixed version of [nodered-contrib-xiaomi-scale](https://flows.nodered.org/node/nodered-contrib-xiaomi-scale) that supports `node 12.15.0`.

# nodered-contrib-xiaomi-scale

![Xiaomi Scale](https://raw.githubusercontent.com/originallyus/nodered-contrib-xiaomi-scale/master/xiaomi_scale.jpg "Xiaomi Scale")

![Screenshot](https://raw.githubusercontent.com/originallyus/nodered-contrib-xiaomi-scale/master/screenshot.png "Screenshot")

This is a NodeRed node for receive data from XiaoMi Scale without. Your NodeRed host will need to have BLE capability for this node to work.
Tested on Mac OS & Raspberry Pi 3.


Developed by the super cool folks at [Originally US](http://originally.us) - a mobile app development company from Singapore

## Installation

### Prerequisites

    sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev

### Package installation

Change your working directory to your node red installation. Usually it's in ~/.node-red.

    npm install https://github.com/turbobabr/nodered-contrib-xiaomi-scale
    
### Running without root/sudo

Run the following command:

```sh
sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)
```

This grants the ```node``` binary ```cap_net_raw``` privileges, so it can start/stop BLE advertising.

__Note:__ The above command requires ```setcap``` to be installed, it can be installed using the following:

 * apt: ```sudo apt-get install libcap2-bin```
 * yum: ```su -c \'yum install libcap2-bin\'```

## FAQ

##### Do I need to pair my device with XiaoMi Scale?
No. However your NodeRed host will need to have BLE hardware capability for this node to work. Tested on Mac OS devices & Raspberry Pi 3.

##### I have some suggestions, how do I get in touch?
Please drop us an [email](mailto:hello@originally.us), or create an issue in our [Github](https://github.com/originallyus/nodered-contrib-xiaomi-scale/issues)

##### How do I control my other (non-smart) devices at home with NodeRED?
Check out [RMPlugin app](https://play.google.com/store/apps/details?id=us.originally.tasker&hl=en) developed by us. Here's an [intro video](https://www.youtube.com/watch?v=QUKYKhK57sc) for the hardware.



## TODO
  * To be tested with XiaoMi Scale version 2 & 3