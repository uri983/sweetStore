import axios from 'axios';
export default class AxiosInstance {
  static debug = true;
  static instance() {
    const settings = {
      baseURL: process.env.backendUrl,
      headers: { 'Content-Type': 'application/json' },
    };
    this.axiosInstance = axios.create(settings);
    return this.axiosInstance;
  }
}
