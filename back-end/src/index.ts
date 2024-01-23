import app from "./app";

let PORT = app.get("PORT");

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
