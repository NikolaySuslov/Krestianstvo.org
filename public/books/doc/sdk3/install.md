# Installation

!> Use these install instructions, if you want to install LiveCoding.space on your own server

**Requirements:**
- OS: Linux, Mac OS X, Windows 
- Language VM: **NodeJS v.10.x**
- Web Browser: **Chrome v.68**

## 1. Application source code hosting

Server for hosting LCS **single page web application**, providing access to the needed JS libraries **```(GunDB, A-Frame, Page.js, Cell.js, OSC.js etc..)```**, LCS main apps: **```app.js, index-app.js```** and modified **```VWF.js```** for using with offline-first, pure distributed GunDB storage system. 

!> LCS application uses a **client-side router** for generating and handling all URL requests.

?> Actually every participant could **HOST LOCALY** that server (ensuring, that application source code is identical for all participants).

To install:
1. Clone: ```git clone https://github.com/NikolaySuslov/livecodingspace.git```
2. Install: ```npm install```
3. Run: ```npm start``` (for localhost testing using http, default port ```3007```) 

or ```npm startSSL``` (https needs certs)

## 2. Reflector

Reflector is a tiny server from VWF application architecture, that is modified to be used with the current LCS single page web application and GunDB storage.

!> Reflector server could be run anywhere in the network, but should be accessible to the main LCS app. 

?> Several Reflector servers could be run to choose from in the main LCS app. 

To install:
1. Clone: ```git clone https://github.com/NikolaySuslov/lcs-reflector```
2. Install: ```npm install```
3. Run: ```npm start``` (for localhost testing using http, default port ```3002```) 

or ```npm startSSL``` (https needs certs)

## 3. GunDB storage

You could use any running already GunDB storage system in the network or run your own, using the default template.

!> For now, GunDB storage server has no LCS application specific server-side code, so using any fresh install of GunDB will be fine [Official GunDB install tutorial](https://gun.eco/docs/Installation)  

?> Several GunDB storage systems could be run to choose from in the main LCS app 

To install:
1. Clone: ```git clone https://github.com/NikolaySuslov/lcs-storage.git```
2. Install: ```npm install```
3. Run: ```npm start``` (for localhost testing using http, default port ```8080```)

or ```npm startSSL``` (https needs certs)

## 4. Setup LCS application

After **fresh & clean** install, to start working with LCS application we need to go through setup process:

1. Point web browser to LCS app: [https://localhost:3007](https://localhost:3007)
2. Check out and fill (if needed) the ```Reflector``` and ```DB host``` fields with the right network addresses.
2. ```Sing UP``` with a new user (for example login: ```app```)
3. Point web browser to setup page: [https://localhost:3007/setup](https://localhost:3007/setup) and set app system PUB key.
4. Reload [https://localhost:3007/setup](https://localhost:3007/setup) page and procceed with the next setup steps.

## 5. Run LCS application

1. Point web browser to LCS app: [https://localhost:3007](https://localhost:3007)
2. Start **World** from the list as ```not registered``` user or ```Sign UP``` with a new one
