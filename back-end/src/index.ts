import path from "path";
import app from "./app";
console.log(path.join(__dirname, "../preloadDatas"));
import { readJsonFile } from "./helper/preload/preload";
readJsonFile(path.join(__dirname, "../preloadDatas/preloadDatas.json"));

let PORT = app.get("PORT");


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


