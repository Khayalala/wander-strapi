module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000", // For local development
        "https://wander-client.onrender.com", // Your deployed frontend URL
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true, // Allow credentials (e.g., cookies) to be passed
    },
  },
  "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https://wander-client.onrender.com"],
          "img-src": ["'self'", "data:", "blob:", "https://wander-client.onrender.com"],
          "media-src": ["'self'", "data:", "blob:", "https://wander-client.onrender.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
