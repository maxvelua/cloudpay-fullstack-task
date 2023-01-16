import { readJSONFile } from "../services/file.service";

describe("File Service", () => {
  it("should read json file", async () => {
    const filePath = "./testData.json";
    const obj = await readJSONFile(filePath);

    expect(obj).toBeDefined();
  });

  it("should throw error an error no such file when wrong path", async () => {
    try {
      const filePath = "";
      await readJSONFile(filePath);
    } catch (e) {
      expect((e as Error).message).toEqual("No such file or directory");
    }
  });
});
