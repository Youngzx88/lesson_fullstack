"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.querySelector('button');
const tableBody = document.querySelector('#table-body');
class Cat {
    constructor(id, url, height, width) {
        this.id = id;
        this.url = url;
        this.height = height;
        this.width = width;
    }
}
class WebDisplay {
    static addData(data) {
        const cat = new Cat(data.id, data.url, data.height, data.width);
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${cat.id}</td>
            <td><img src="${cat.url}" /></td>
            <td>${cat.height.toString()}</td>
            <td>${cat.width.toString()}</td>
            <td>${cat.url}</td>
            <td><a href="#">X</a></td>
        `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tableRow);
    }
    static deleteData(deleteButton) {
        const td = deleteButton.parentElement;
        const tr = td.parentElement;
        tr.remove();
    }
}
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const json = yield response.json();
        return json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield getJSON(url);
            const data = json[0];
            WebDisplay.addData(data);
        }
        catch (error) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            }
            else {
                message = String(error);
            }
            console.log(error);
        }
    });
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', getData);
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener('click', (ev) => {
    WebDisplay.deleteData(ev.target);
});
