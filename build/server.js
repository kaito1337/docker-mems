"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/vanya', function (req, res) {
    return res.status(200).json("Vanya");
});
app.get('/nikita', function (req, res) {
    console.log(5);
    return res.status(200).json("nikita");
});
app.post('/name', function (req, res) {
    var name = req.body.name.name;
    return res.status(200).json(name);
});
app.listen('7070', function () { return console.log('Server at 7070'); });
