"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const phptp_controller_1 = require("../controllers/phptp.controller");
router.route('/')
    .get(phptp_controller_1.helloWorld);
exports.default = router;
