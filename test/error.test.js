import {
  expect
} from "chai";
import {
  unpackApi
} from "../src/utils.js";
import {
  APIError
} from "../src/error";

describe("unpackApi", () => {
  it("should resolve the request", (done) => {
    unpackApi(
      new Promise((resolve, reject) => {
        resolve({
          data: {
            test: "value",
          },
        });
      })
    ).then((data) => {
      expect(data.test).to.eq("value");
      done();
    });
  });

  it("should send an APIError", (done) => {
    unpackApi(
      new Promise((resolve, reject) => {
        reject({
          response: {
            status: 200,
            data: {
              error: "value",
            },
          },
        });
      }),
      "test"
    ).catch((error) => {
      expect(error).to.be.an.instanceOf(APIError);
      done();
    });
  });
});
