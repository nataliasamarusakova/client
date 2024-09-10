import { io, Socket } from 'socket.io-client';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '../constants/constants';

export class socketApi {

    static socket: Socket;

    static createConnection() {
        this.socket = io('http://localhost:3300', { auth: { access_token: Cookies.get(ACCESS_TOKEN) } });
    }

    static disconnectSocket() {
        this.socket.disconnect();
    }
}