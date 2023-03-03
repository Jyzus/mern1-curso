"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration
dotenv_1.default.config();
// Create Express app
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
//  Rutas
app.get('/', (req, res) => {
    res.send('Hello World, MERN');
});
app.get('/hello', (req, res) => {
    res.send('Hola mundo');
});
// Escucha
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map