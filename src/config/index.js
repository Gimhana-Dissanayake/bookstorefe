const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set(
  "bookstorefe-dev.herokuapp.com",
  "https://bookstorefe-dev.herokuapp.com"
);
environmentUrls.set(
  "bookstorefe-prod.herokuapp.com",
  "https://bookstorefe-prod.herokuapp.com"
);

export default environmentUrls.get(window.location.hostname);
