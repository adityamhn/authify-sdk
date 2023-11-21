# Authify SDK for Node.js Documentation

## Overview
Authify SDK provides a Node.js client for integrating Role-Based Access Control (RBAC) services offered by Authify. It's designed to streamline the implementation of access control in Node.js applications.

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
  defaultTenant: "global" // Optional: Specify a default tenant, defaults to "global" if not set
});
```

## Using the SDK

### Checking Permissions
To perform a permission check, use the `authify.check()` method with the following parameters:

- `user`: A unique string identifier for the user performing the action.
- `resource:action`: The resource and action in the format "resource:action".
- `options` (optional): Specify a different tenant to check permissions against, if not the default.

Example:

```javascript
const allowed = await authify.check("johnny@authify.in", "profile:read", {
  tenant: "global"
});

if (allowed) {
  console.log("Access Granted: Johnny can read the profile.");
} else {
  console.log("Access Denied: Johnny cannot read the profile.");
}
```

## Contributing to Authify
Contributions from the community are welcome to enhance the Authify SDK.

## License
Authify is open-sourced under the [MIT License](https://choosealicense.com/licenses/mit/). For more details, refer to our [LICENSE](https://raw.githubusercontent.com/adityamhn/authify/main/LICENSE) file.
