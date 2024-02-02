import * as fs from "fs";
import * as path from "path";

const directorioAVaciar = "ruta/a/tu/directorio";

export const deleteImage = (rutaDirectorio: string): void => {
  try {
    fs.readdirSync(rutaDirectorio).forEach((archivo) => {
      const rutaArchivo = path.join(rutaDirectorio, archivo);

      if (fs.statSync(rutaArchivo).isFile()) {
        fs.unlinkSync(rutaArchivo);
        console.log(`Archivo eliminado: ${rutaArchivo}`);
      }
    });

    console.log(`Todos los archivos en ${rutaDirectorio} han sido eliminados.`);
  } catch (error) {
    console.error(`Error al vaciar el directorio: ${error}`);
  }
};
