# Architecture

!> LiveCoding.space is based on a modified [Virtual World Framework](https://github.com/virtual-world-framework/vwf) application architecture.

>The new architecure splits original VWF server on two independent stand-alone servers and adds distributed DB storage system
1. Server for single-page web application hosting.
2. Reflector server for Virtual time. 
3. Gun DB server for Virtual Worlds, components, saves and users.

## Reflector

The original VWF's reflector server depends on main application server and filesystem storage or (SQL Server DB in [ADL Sandbox](https://github.com/adlnet/Sandbox) version)

>The new reflector gets all needed information from the client (generated instance ID, load info, save info).
Look for internals at ```getApplicationState()``` in ```app.js```.

Single-page web application and client-side router based on [Page.js](https://visionmedia.github.io/page.js/) is used for generating and handling URLs.

## Distributed storage
The original VWF application serves all files from server's filesystem by handling HTTP GET/POST and AJAX requests. 

>LiveCoding.space uses Offline-first, distributed storage [Gun DB server](https://gun.eco).   
"Gun DB is a small, easy, and fast data sync and storage system that runs everywhere JavaScript does".

Even a connection to the Gun DB server is lost, application will continue working. Updated VWF components, which are serving from the browser Gun DB local storage, will be automatically synchronized after successful reconnection.

## P2P Identites

>All data, that was stored and signed by any registered user in the distributed DB using [Gun SEA framework](https://gun.eco/docs/SEA), has the folowing access rights:  PUBLIC read / PRIVATE write. 

During the setup process the system user is created (global var ```_LCS_SYS_USER``` in the app). By default it is the first registered user, who loads the default Worlds Prototypes and Proxy VWF components onto the distributed DB. For reading/writing an encrepted data the corresponding users's secret keys are required.

## Virtual Worlds

Livecoding.space uses the same three main entities as from the original VWF application architecture:

>- **World Prototypes**
- **World Instances**
- **World States**

?>**World Prototypes** are the blueprints for **World Instances**, where actual collaboration between users happens.

For now they are represented with text files in YAML format. They are stored in decentralized storage under the user paths. For now the **World Prototypes** are created by cloning an existed ones using Web GUI.

?>**World Instances** are like rooms for user collaboration, that are initialized from **World Prototypes**. 

Every new **World Instance** gets it's own generated instance ID, which alives only during collaboration (up to the last remaining participant). **World Instances** are not stored in the distributed DB. Closing them causes destroying of all modifications, that have been made in current Virtual World. To save modifications a User needs to Log In and to save the current Virtual World state. 
For any World Prototype several **World Instances** could be created at the same time.

?>**World States** are the World Instance's save states. 

As World Prototypes they are stored in the decentralized storage under the user paths and belongs to the concrete World Prototype, from which the World Instance has been initialized. Any World Prototype could have an unlimited save states, containing prototype modifications.

## A-Frame & VWF Driver

>These model and view drivers for VWF provides support for using [A-Frame](https://aframe.io/) components in VWF applications. That allows to build a VWF collaborative apps with 3D visualisation, WebVR, HMD, trackers and mobile devices support easily.

Virtual World Framework provides a robust decentralised architecture for building virtual world apps based on replicated computation model. It's original version for programming apps with 3D visualisation and deep interaction support is strongly based on ThreeJS library. So, for building such apps, the developer should be aware of ThreeJS internals, not to mention the knowing of the VWF component's architecture. But, actually VWF is working just with any programmable elements whatever simple they are. The A-Frame framework solves the problem of ThreeJS сomplexity for developing Web apps for Virtual Reality. It provides the component-based architecture for that. A-Frame incapsulates ThreeJS, hiding the internals and providing high-level interface for describing web app declaratively.

Example worlds: [Textures and Models in VWF & A-Frame](https://livecoding.space/app/aframe2)

## Ohm language & VWF Driver

>Object-Oriented Language for Pattern Matching [Ohm language](https://github.com/harc/ohm) driver allows to attach user's created grammar onto any VWF component and use it for scripting it's behaviour.

Example worlds: [L-System parser example in Ohm & VWF](https://livecoding.space/app/ohmlang-lsys) or [Calculator in Ohm & VWF](https://livecoding.space/app/ohmlang-calc)

## OSC (Open Sound Control) Driver

>[OSC.js](https://github.com/colinbdclark/osc.js/) driver allows to send and recive OSC messages inside VWF components

For using that functionality within browser [OSC-relay](https://github.com/NikolaySuslov/osc-relay-lcs) is required. 
