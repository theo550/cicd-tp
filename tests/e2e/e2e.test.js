const axios = require("axios");
const app = require("../../src/server");
let server;
let baseURL;

beforeAll((done) => {
  server = app.listen(0, () => {
    const { port } = server.address();
    baseURL = `http://127.0.0.1:${port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("E2E GET /hello", () => {
  it("responds with Hello world", async () => {
    const res = await axios.get(`${baseURL}/hello`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world!");
  });

  it("responds with Hello world with a name", async () => {
    const res = await axios.get(`${baseURL}/hello/Alice`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world! From Alice");
  });

  it("responds with Hello world with an empty name", async () => {
    const res = await axios.get(`${baseURL}/hello/`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world!");
  });

  it("responds with Hello world with a name containing special characters", async () => {
    const res = await axios.get(`${baseURL}/hello/Alice%20%26%20Bob`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world! From Alice & Bob");
  });

  it("responds with Hello world with a numeric name", async () => {
    const res = await axios.get(`${baseURL}/hello/123`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world! From 123");
  });
});
