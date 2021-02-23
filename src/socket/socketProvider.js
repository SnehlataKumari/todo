import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

import {SocketApp} from './socketConnector';

const socket = io.connect(8000);
socket.on('message', msg => console.log(msg));

const DOMNode = document.getElementById('renderTarget');

return(
  <SocketProvider socket={socket}>
    <SocketApp />
  </SocketProvider>,
  DOMNode
);