import axios from 'axios';

export class Provider {
  public get axios() {
    return axios.create({
      baseURL: 'http://localhost:1337/',
      timeout: 1000,
      headers: {},
    });
  }
}
export const provider = new Provider();
