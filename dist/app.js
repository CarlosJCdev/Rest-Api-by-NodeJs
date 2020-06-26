"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
/* //Settings, indicamos que si existe un puerto en donde quiera que sea el despliegue, que lo tome
o toma el puerto 4000 */
app.set('port', process.env.PORT || 4000);
//middlewares, morgan es uno
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//Routes
app.use('/api', index_1.default);
//the folder public is used by public files
app.use('/public', express_1.default.static(path_1.default.resolve('public')));
exports.default = app;
