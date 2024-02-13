import fs from "fs";

export async function readJsonFile(filePath: string): Promise<any> {
  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");

    const jsonData = JSON.parse(fileContent);

    return jsonData;
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    throw error;
  }
}

