# Authify SDK for Node.js Documentation

![Authify logo](https://i.postimg.cc/9FXtgQ4B/authify-full.png)

## Overview

Authify SDK provides a Node.js client for integrating Role-Based Access Control (RBAC) services offered by Authify. It's designed to streamline the implementation of access control in Node.js applications.

#### Key features:

- **Authify** features an intuitive web interface for easy authorization management – think ticking a checkbox simple! - https://github.com/adityamhn/authify (repo)
- Plus, an easy-to-implement SDK to integrate access control seamlessly into your applications.

## Installation

To install the Authify SDK, execute the following command in your project's root directory:

```bash
npm install authify
```

## Getting Started

### Step 1: Import the SDK

Import the `AuthifyClient` module into your Node.js application after installing the Authify package:

```javascript
import { AuthifyClient } from "authify";
```

### Step 2: Initialize the SDK

Initialize the Authify SDK with your API key obtained from the Authify dashboard:

```javascript
const authify = new AuthifyClient({
  token: "[YOUR_API_KEY]", // Replace with your actual API Key
  host: "http://127.0.0.1:8080", // Modify according to your Authify application host
  defaultTenant: "global", // Optional: Specify a default tenant, defaults to "global" if not set
});
```

## Using the SDK

### Checking Permissions

To perform a permission check, use the `authify.check()` method with the following parameters:

- `user`: A unique string identifier for the user performing the action.
- `resource:action`: The resource and action in the format "resource:action".
- `options` (optional): Can specify more options:
  - tenant: Specify a different tenant to check permissions against, if not the default.
  - metadata: An object of key value pairs for any data you want to store.

Example:

```javascript
const allowed = await authify.check("johnny@authify.in", "profile:read", {
  tenant: "global",
  metadata: {
    endpoint: "/api/test",
    key1: "value1",
  },
});

if (allowed) {
  console.log("Access Granted: Johnny can read the profile.");
} else {
  console.log("Access Denied: Johnny cannot read the profile.");
}
```

### Contributing to Authify

We welcome contributions from the community! If you want to contribute through code or documentation, the [Contributing guide](https://github.com/adityamhn/authify/blob/main/CONTRIBUTING.md) is the best place to start. If you have questions, feel free to ask.

## License

Authify is open-sourced under the [MIT License](https://choosealicense.com/licenses/mit/). For more details, refer to our [LICENSE](https://raw.githubusercontent.com/adityamhn/authify/main/LICENSE) file.
