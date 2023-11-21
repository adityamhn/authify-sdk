export interface AuthifyConfigDoc {
  host: string;
  token: string;
  defaultTenant: string;
}

export const configBuilder = (config: AuthifyConfigDoc) => {
  const configBody = {
    host: config.host || "http://127.0.0.1:8080",
    token: config.token || "",
    defaultTenant: config.defaultTenant || "global",
  };

  return configBody;
};
