# Omni Locker

## Installing dependencies
You will need Node, the React Native command line interface, a JDK, and Android Studio. You will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.


### Node
 install  10 or newer [Node](https://nodejs.org/en/) or newer.


### Setting up the development environment
- Go to [React Native Page](https://reactnative.dev/docs/environment-setup) and follow the instructions in `React Native CLI Quickstart` section. 
- Once Android Studio is installed, open it from your app manager or via terminal:
```
/usr/local/android-studio/bin/studio.sh
``` 
- OBS: After install Android Studio, if you get this error message `kvm is required to run this avd. /dev/kvm device permission denied` when running the emulator, run those commands in your terminal: 
```
sudo chmod 777 -R /dev/kvm
```

### Start your application 

First time you running the aplication or every time you want to build the app run:
```
npx react-native run-android
```
or just 
```
react-native run-android
```

### Running your React Native application
Once you ran `react-native run-android`, now you just need to run:
```
yarn start
```