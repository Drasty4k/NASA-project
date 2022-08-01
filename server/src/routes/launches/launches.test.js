const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should respons with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "Mission Name Test",
    rocket: "Test Rocket",
    destination: "Test Planet",
    launchDate: "January 4, 2028",
  };

  const launchDataWithoutDate = {
    mission: "Mission Name Test",
    rocket: "Test Rocket",
    destination: "Test Planet",
  };

  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("It should catch missing required properties", () => {});

  test("It should catch invalid dates", () => {});
});
