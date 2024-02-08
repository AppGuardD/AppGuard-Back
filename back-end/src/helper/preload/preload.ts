import fs from 'fs';

export async function readJsonFile(filePath: string): Promise<any> {
    try {
        // Leer el contenido del archivo
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');

        // Convertir el contenido a formato JSON
        const jsonData = JSON.parse(fileContent);

        // Devolver los datos
        return jsonData;
    } catch (error) {
        // Manejar errores de lectura
        console.error('Error al leer el archivo JSON:', error);
        throw error; // Puedes manejar el error de otra manera si lo prefieres
    }
}