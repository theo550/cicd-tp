const request = require("supertest");
const app = require("../../src/server");

describe("greeting integration", () => {

  describe("GET /hello", () => {
    it("should return Hey there", async () => {
      const res = await request(app).get("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hey there!");
    });

    it("should return Hey there with a name", async () => {
      const res = await request(app).get("/hello/Alice");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hey there! from Alice");
    });

    it("should return Hey there with an empty name", async () => {
      const res = await request(app).get("/hello/");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hey there!");
    });

    it("should return Hey there with a name containing special characters", async () => {
      const res = await request(app).get("/hello/Alice%20%26%20Bob");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hey there! from Alice & Bob");
    });

    it("should return Hey there with a numeric name", async () => {
      const res = await request(app).get("/hello/123");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hey there! from 123");
    });
  });

  describe('POST /hello', () => {
    it('should return a greeting with the name from the request body', async () => {
      const name = 'Alice';
      const response = await request(app)
        .send({ name })
        .expect(200);

      expect(response.text).toBe(`Hey there, ${name}!`);
    });

    it('should return a greeting with the name from the request body', async () => {
      const name = 'Alice';
      const response = await request(app)
        .send({ name })
        .expect(200);

      expect(response.text).toBe(`Hey there, ${name}!`)
    });
  });

});
