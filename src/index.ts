import axios from "axios";
import { AuthifyConfigDoc, configBuilder } from "./config";

export interface AuthifyClientDoc {
  config: AuthifyConfigDoc;
  check(
    user: string,
    action: string,
    options: { tenant?: string }
  ): Promise<boolean>;
}

export class AuthifyClient implements AuthifyClientDoc {
  public readonly config: AuthifyConfigDoc;
  private apiClient;

  constructor(config: AuthifyConfigDoc) {
    this.config = configBuilder(config);
    this.apiClient = axios.create({
      baseURL: `${this.config.host}/api/sdk/`,
      headers: {
        "x-authify-token": this.config.token,
      },
    });
  }

  public async check(
    user: string,
    resourceAction: string,
    options: { tenant?: string }
  ): Promise<boolean> {
    try {
      const response = await this.apiClient.post("/check", {
        user,
        resourceAction,
        tenant: options?.tenant ?? this.config.defaultTenant,
      });

      if (response.status !== 200) {
        return false;
      }

      return response.data.result;
    } catch (error) {
      return false;
    }
  }
}
