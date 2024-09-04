
import { afterEach, describe, expect, it } from "vitest";
import { JobProviderImpl } from "../src/job-list/JobProvider";
import fetchMock from "fetch-mock";

describe("JobProvider", () => {

  afterEach(() => {
    fetchMock.reset();
  });

  it("return 0 max page", async () => {
    const provider = new JobProviderImpl();
    expect(provider.getMaxPage()).toBe(0);
  });

  it("return 10 max page", async () => {

    fetchMock.get("http://localhost:3000/jobs?page=1&size=10", {
      jobs: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      total: 100
    });
    const provider = new JobProviderImpl();
    await provider.find();


    expect(provider.getMaxPage()).toBe(10);
  });
  it("return 10 max page with no round total", async () => {

    fetchMock.get("http://localhost:3000/jobs?page=1&size=10", {
      jobs: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      total: 98
    });
    const provider = new JobProviderImpl();
    await provider.find();


    expect(provider.getMaxPage()).toBe(10);
  });
  it("return 10 max page with no round total inf to half", async () => {

    fetchMock.get("http://localhost:3000/jobs?page=1&size=10", {
      jobs: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      total: 92
    });
    const provider = new JobProviderImpl();
    await provider.find();


    expect(provider.getMaxPage()).toBe(10);
  });

}); 
