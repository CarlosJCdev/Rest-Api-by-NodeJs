"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConecction = void 0;
const mongoose_1 = require("mongoose");
async function startConecction() {
    await mongoose_1.connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true
    });
    console.log('Conectado a db');
}
exports.startConecction = startConecction;
