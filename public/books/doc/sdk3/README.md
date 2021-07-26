# LiveCoding.space

?> Collaborative Live Coding Space with support of user-defined languages and **WebVR** ready 3D graphics  
Based on: **[Virtual World Framework](https://github.com/virtual-world-framework/vwf)** | **[A-Frame](https://aframe.io/)** | **[Ohm language](https://github.com/harc/ohm)** | **[OSC.js](https://github.com/colinbdclark/osc.js/)** | **[Cell.js](https://www.celljs.org/)** | **[GunDB](https://gun.eco)** and more...

!> Online at: **[https://livecoding.space](https://livecoding.space)**

![logo](_images/webimg.jpg)

## Overview

- **Decentralized network model for A-Frame components** and entities based on VWF replicated computation architecture
- **Ohm language driver** for sharing user-defined grammars, parsers, tokenisers inside virtual space
- **In browser Code and Properties editor** based on Cell.js
- **OSC messaging** through OSC relay on the client
- **Avatars** (Simple and GLTF models with animation)
- Multi-window or multi-monitor/multi-machine setups with view **offset cameras**
- **WebRTC** for video/audio streaming, 3D positional audio support
- GearVR, Windows MixedReality motion **controllers** ..

**[LiveCoding.space](/architecture?id=architecture)** ```v0.2``` moves towards pure-decentralized application architecure by introducing:

- **Stand-alone VWF Reflector**
- **Single page web application**
- **Client-side router** (generating **instances IDs** by a client) ([about](/architecture?id=reflector))
- **GunDB storage system** for serving ```Proxy VWF components```, ```Worlds prototypes```, ```World save states```, ```User Inventories``` etc. in fully decentralized (peer-to-peer or multi-master) DB ([about](/architecture?id=distributed-storage))
- **GunDB SEA** (Security, Encryption, Authorization) framework for user authorization and **P2P identities** ([about](/architecture?id=p2p-identites))


