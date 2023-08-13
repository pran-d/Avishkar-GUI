# Avishkar-GUI
A graphical user interface for Avishkar Hyperloop, a student team from IIT Madras that designs and builds technologies towards the development of the hyperloop.  This GUI will be used as the base station for the pod to run, sending commands to the pod and receiving data from its sensors, over an MQTT network.

To run this project, first clone the repository. Then, run the following commands on the `main` branch.

1. `npm install`
2. `npm run start`

Note that for MQTT data to be received, the Mosquitto broker should be running locally with an active Websockets listener port (1884).
