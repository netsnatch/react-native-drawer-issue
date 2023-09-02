### Install
```
make up
make bash
yarn install
```

### Run local
```
REACT_NATIVE_PACKAGER_HOSTNAME=<host_ip> BASE_URL=http://<host_ip>:8070 expo start
```
* where <host_ip> is Windows ip in android subsystem lan `172.xx.......`
 see ("Ethernet adapter vEthernet (WSLCore)") from `ipconfig /all`
* or 10.0.2.2 if it is Android emulator
