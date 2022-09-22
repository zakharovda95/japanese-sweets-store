import axios from 'axios';

import { APP_CONFIG } from '@/helpers/services/_app-config.service';

export class Provider {
  public get axios() {
    return axios.create({
      baseURL: APP_CONFIG.BACK_URL,
      timeout: 1000,
      headers: {},
    });
  }
}
export const provider = new Provider();
