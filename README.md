# Service, based on Electron.js, that allow user to send request for making screenshot of web-page
To run it on server Linux, you can use x11. Config example:

//apt-get install -y libgtk2.0-0 libnotify-bin libgconf-2-4 libnss3 xvfb dbus-x11 <br />
//export DISPLAY=':99.0' <br />
//Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 +extension RANDR & <br />
//electron app
