import { readFile } from "fs/promises";

export async function readJSONFile(
  filePath: string
): Promise<Object | undefined> {
  try {
    const buffer = await readFile(filePath);

    const object = JSON.parse(buffer.toString());

    return object;
  } catch (err: unknown) {
    if ((err as any).code === "ENOENT") {
      throw new Error("No such file or directory");
    }
  }
}
