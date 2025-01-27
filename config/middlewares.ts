module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://your-frontend-domain.onrender.com",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
