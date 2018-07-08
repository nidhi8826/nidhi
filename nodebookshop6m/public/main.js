(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<app-header></app-header>-->\n<!--<app-registeration></app-registeration>-->\n<!--<app-login></app-login>-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/registeration/registeration.component */ "./src/app/user/registeration/registeration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loginuser/loginuser.component */ "./src/app/loginuser/loginuser.component.ts");
/* harmony import */ var _loginuser_loginhome_loginhome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loginuser/loginhome/loginhome.component */ "./src/app/loginuser/loginhome/loginhome.component.ts");
/* harmony import */ var _loginuser_addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loginuser/addlisting/addlisting.component */ "./src/app/loginuser/addlisting/addlisting.component.ts");
/* harmony import */ var _loginuser_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loginuser/wishlist/wishlist.component */ "./src/app/loginuser/wishlist/wishlist.component.ts");
/* harmony import */ var _loginuser_bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loginuser/bookdetail/bookdetail.component */ "./src/app/loginuser/bookdetail/bookdetail.component.ts");
/* harmony import */ var _loginuser_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loginuser/messages/messages.component */ "./src/app/loginuser/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _user_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_5__["RegisterationComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_13__["LoginuserComponent"],
                _loginuser_loginhome_loginhome_component__WEBPACK_IMPORTED_MODULE_14__["LoginhomeComponent"],
                _loginuser_addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_15__["AddlistingComponent"],
                _loginuser_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"],
                _loginuser_bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_17__["BookdetailComponent"],
                _loginuser_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["appRoutes"])
            ],
            providers: [_bookservice_service__WEBPACK_IMPORTED_MODULE_9__["BookserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/bookservice.service.ts ***!
  \****************************************/
/*! exports provided: BookserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookserviceService", function() { return BookserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookserviceService = /** @class */ (function () {
    function BookserviceService(http) {
        this.http = http;
        this.product = {
            Bookname: '',
            Booksellerid: '',
            useridEmail: ''
        };
    }
    BookserviceService.prototype.postdata = function (data) {
        this.http.post('/api/users', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookserviceService.prototype.postwishlist = function (data) {
        this.http.post('/api/wishlist', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookserviceService.prototype.listpostdata = function (data) {
        this.http.post('/api/listings', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookserviceService.prototype.messagepost = function (data) {
        this.http.post('/api/message', data).subscribe(function (data) {
            console.log(data);
        });
    };
    BookserviceService.prototype.getbook = function () {
        return this.http.get('/api/listings');
    };
    BookserviceService.prototype.getlist = function () {
        return this.http.get('/api/users');
    };
    BookserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookserviceService);
    return BookserviceService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">BookShop</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"/Registration\">Signup</a></li>\n      <li><a routerLink=\"/Login\">Login</a></li>\n    </ul>\n    <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.c = 'value';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/addlisting/addlisting.component.css":
/*!***************************************************************!*\
  !*** ./src/app/loginuser/addlisting/addlisting.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form\r\n{\r\n\tbackground-size: 100% 800px;\r\n\tbackground-size: 100%;\r\n    \r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n    background-color: #e6fbc1;\r\npadding-right:350px;\r\npadding-left:350px;\t\r\n}\r\ninput[type=text]\r\n{\r\n\twidth:40%;\r\n\t padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n\t\r\n}\r\ninput[required].ng-pristine{\r\n\tborder-color:#453A3A;\r\n}\r\ninput.ng-invalid.ng-dirty{\r\n\tborder-color:#453A3A;\r\n}\r\ninput.ng-valid.ng-dirty{\r\n\tborder-color:#2ecc71;\r\n}\r\n#id100\r\n{\r\n\twidth:100%;\r\n\tpadding: 8px 12px;\r\n}\r\ninput[type=date]\r\n{\r\n\twidth:55%;\r\n\t padding: px 12px;\r\n    margin: 0;\r\n    display: inline-block;\r\n     border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=email]\r\n{\r\n\twidth:65%;\r\n\t padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n   border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=number]\r\n{\r\n\twidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=password]\r\n{\r\n\twidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n     border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\n#option\r\n{\r\n\tcolor:grey;\r\n\twidth:100%;\r\n}\r\nspan\r\n{\r\n\tfont-size:110%;\r\n}\r\nselect\r\n{\r\nwidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\t\r\n}\r\ninput[type=submit] {\r\n    width: 30%;\r\n    background-color: #453A3A;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n\tcursor: pointer;\r\n    margin-right: 50px;\r\n}\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n}\r\ninput[type=reset] {\r\n    width: 30%;\r\n    background-color: #453A3A;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n\tcolor:white;\r\n}\r\ninput[type=reset]:hover {\r\n    background-color: #800000;\r\n}\r\nbody\r\n{\r\n\tposition:relative;\r\n\tbackground-color:grey;\r\n\t;\r\n\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 40px;\r\n    margin-top: 200px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\n#span{\r\n    font-size: 20px\r\n}\r\n#width,#width1,#width2,#width3,#width4,#width5,#width6\r\n{\r\n\twidth:100%;\t\r\n}\r\n.div1\r\n{\r\n\tpadding: 8px 0;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border: 1px solid #453A3A;\r\n    border-radius: 4px;\r\n\twidth:100%;\r\n\tbackground-color:white;\r\n\tcolor:grey;\r\n}\r\n#width1\r\n{\r\n\twidth:100%;\t\r\n}\r\n#p1\r\n{\r\n\tcolor:white;\r\n}\r\n#id1\r\n{\r\n\t\r\n\tmargin: auto;\r\n\r\n\t\r\n}\r\nh1\r\n{\r\n\tfont-size:50px;\r\n\ttext-align:center;\r\n\tcolor:white;\r\n}\r\nh2\r\n{\r\n\t\r\n\ttext-align:center;\r\n\tcolor:white;\r\n}\r\ntable\r\n{\r\n\tcolor:white;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/loginuser/addlisting/addlisting.component.html":
/*!****************************************************************!*\
  !*** ./src/app/loginuser/addlisting/addlisting.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Add Book To The List</div>\n      <div>\n        <input type=\"text\" name=\"Bookname\" placeholder=\"Book name\" id=\"width1\" padding-top:80px  required [(ngModel)]=\"register.Bookname\">\n        <input type=\"text\" name=\"author\" placeholder=\"Author name\" id=\"width2\"  required [(ngModel)]=\"register.author\">\n        <span style=\"text-decoration-color: rgb(37, 36, 36)\">Description:</span>\n        <input type=\"text\" name=\"discription\" placeholder=\"Discription\" id=\"width6\"  required [(ngModel)]=\"register.discription\">\n         <span style=\"text-decoration-color: rgb(37, 36, 36)\">Price:</span>\n        <input type=\"number\" name=\"price\" placeholder=\"Price\" id=\"width4\"   required [(ngModel)]=\"register.price\">\n        <br>\n        <div class=\"div1\">\n          <span id=\"span\">Condition of the book  :</span>\n          \n          <input type=\"radio\" name=\"condition\" value=\"New\" [(ngModel)]=\"register.condition\" >\n          New\n          <input type=\"radio\" name=\"condition\" value=\"Almost New\" [(ngModel)]=\"register.condition\">\n          Almost New\n          <input type=\"radio\" name=\"condition\" value=\"Sight Damaged\" [(ngModel)]=\"register.condition\">\n          Sight Damaged\n          <input type=\"radio\" name=\"condition\" value=\"Worn\" [(ngModel)]=\"register.condition\">\n          Worn\n        </div>\n        <br>\n       <!-- <input type=\"email\" name=\"sellerEmail\" placeholder=\"sellerid\" id=\"width6\"  required [(ngModel)]=\"register.sellerEmail\">-->\n        <br>\n        <br>\n        <input type=\"submit\" name=\"submit\" value=\"submit\" (click)=\"adddata()\" >\n        <input type=\"reset\" name=\"reset\">\n        <p id=\"success\"></p>\n      </div>\n    </form>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/loginuser/addlisting/addlisting.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loginuser/addlisting/addlisting.component.ts ***!
  \**************************************************************/
/*! exports provided: AddlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlistingComponent", function() { return AddlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddlistingComponent = /** @class */ (function () {
    function AddlistingComponent(serv) {
        this.serv = serv;
        this.register = {
            id: 0,
            Bookname: '',
            author: '',
            discription: '',
            price: 0,
            condition: '',
            sellerEmail: ''
        };
    }
    AddlistingComponent.prototype.ngOnInit = function () {
        this.Cuserid = this.serv.userid;
        this.register.sellerEmail = this.Cuserid;
    };
    /*adddata(){
       this.addlist.push({Bookname:this.register.Bookname,author:this.register.author,price:this.register.price,condition:this.register.condition,seller:this.register.seller});
       console.log(this.addlist);
     }*/
    AddlistingComponent.prototype.adddata = function () {
        var values = this.register;
        this.serv.listpostdata(values);
    };
    AddlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addlisting',
            template: __webpack_require__(/*! ./addlisting.component.html */ "./src/app/loginuser/addlisting/addlisting.component.html"),
            styles: [__webpack_require__(/*! ./addlisting.component.css */ "./src/app/loginuser/addlisting/addlisting.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"]])
    ], AddlistingComponent);
    return AddlistingComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/bookdetail/bookdetail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/loginuser/bookdetail/bookdetail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11{\r\n\tbackground-size: 100%;\r\n\tbackground-color: #e6fbc1;\r\n\theight:800px;\r\n\tpadding-top: 10px;\r\n}\r\nform\r\n{\r\n\tbackground-size: 100% ;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n\tbackground-color: white;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 300px;\r\n\tmargin-right: 350px;\r\n\tpadding-left: 50px;\r\n\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 40px;\r\n    margin-top: 50px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\ntd{\r\n\tpadding-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/loginuser/bookdetail/bookdetail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/loginuser/bookdetail/bookdetail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Detail of book </div>\n        <table>\n          <tr>\n            <div *ngFor=\"let t of bookinfo\">\n            <td >\n                <p id=\"p1\">BOOk Name: {{t.Bookname}}</p>\n                <p id=\"p1\">Author Name: {{t.author}}</p>\n                <p id=\"p1\">Discription: {{t.discription}}</p>\n                <p id=\"p1\">Condition: {{t.condition}}</p>\n                <p id=\"p2\">Price:<span>Rs.</span>{{t.price}}</p>\n                <p id=\"p1\">Owner of the book: {{t.sellerEmail}}</p>\n                <input type=\"text\" name=\"smessage\" placeholder=\"you can send messages to owner \"   required  [(ngModel)]=\"smessage\">\n                <button (click)=\"addmessage()\">Send</button>\n            </td>\n            </div>\n          </tr>\n        </table>\n        \n    </form>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/loginuser/bookdetail/bookdetail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loginuser/bookdetail/bookdetail.component.ts ***!
  \**************************************************************/
/*! exports provided: BookdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailComponent", function() { return BookdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookdetailComponent = /** @class */ (function () {
    function BookdetailComponent(serv, router, http) {
        this.serv = serv;
        this.router = router;
        this.http = http;
        this.bookinfo = [];
        this.message = {
            Message: '',
            Booksellerid: '',
            useridEmail: ''
        };
    }
    BookdetailComponent.prototype.addmessage = function () {
        this.message = ({
            Message: this.smessage,
            Booksellerid: this.bookinfo[0].sellerEmail,
            useridEmail: this.Cuserid
        });
        var values = this.message;
        this.serv.messagepost(values);
    };
    BookdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.bookId = (params.get('id'));
            _this.Cuserid = _this.serv.userid;
        });
        this.http.post('/api/listings/bookdetail', { id: this.bookId }).subscribe(function (data) {
            _this.bookinfo = data;
        });
    };
    BookdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookdetail',
            template: __webpack_require__(/*! ./bookdetail.component.html */ "./src/app/loginuser/bookdetail/bookdetail.component.html"),
            styles: [__webpack_require__(/*! ./bookdetail.component.css */ "./src/app/loginuser/bookdetail/bookdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_2__["BookserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BookdetailComponent);
    return BookdetailComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/loginhome/loginhome.component.css":
/*!*************************************************************!*\
  !*** ./src/app/loginuser/loginhome/loginhome.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11\r\n{\r\n\tbackground-size: 100% ;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n    background-color: #e6fbc1;\r\npadding-right:350px;\r\npadding-left:350px;\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 40px;\r\n    margin-top: 100px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\n#d3{\r\n\tpadding-left:50px;\r\n    background-color:white;\r\n    margin-left:20px;\r\n\tmargin-right:20px;\r\n\tmargin-bottom:5px;\r\n\tborder-radius:10px;\r\n}\r\n#p1\r\n{\r\n\tfont-size:18px;\r\n\tcolor:#102D49;\r\n}\r\n#p2\r\n{\r\n\tfont-size:18px;\r\n\tcolor:#253387;\r\n}\r\n#d3 img\r\n{\r\n\twidth:150px;\r\n\theight:150px;\r\n}\r\nspan\r\n{\r\n\tcolor:black;\r\n}\r\nbutton{\r\n    margin-left: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n#search{\r\n\twidth: 420px;\r\n}"

/***/ }),

/***/ "./src/app/loginuser/loginhome/loginhome.component.html":
/*!**************************************************************!*\
  !*** ./src/app/loginuser/loginhome/loginhome.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  <div style=\"margin-top: 55px\">\n    <div style=\"padding-left: 0px\">\n    <span id=\"span\">Search your book by  :</span>\n          \n    \n    <input type=\"radio\" name=\"filter\" value=\"condition\" [(ngModel)]=\"filter\">\n    Condition\n    <input type=\"radio\" name=\"filter\" value=\"name\" [(ngModel)]=\"filter\">\n    Name of book\n    <input type=\"radio\" name=\"filter\" value=\"Author\" [(ngModel)]=\"filter\">\n    Author\n    </div>\n        <input id=\"search\"type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fvalue\">\n      \n       <button id=\"sbtn\" type=\"submit\" class=\"btn btn-default\" (click)=\"filterb()\">Submit</button> \n  </div>\n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Buy Your Book </div>\n        <div id=\"d3\" *ngFor=\"let t of bookinfo; let i=index\">\n          <table>\n            \n            <tr>\n             \n                  <td>\n                      <img src=\"/assets/book.jpg\">\n                    </td>\n              \n              <td>\n                <p id=\"p1\">BOOk Name: {{t.Bookname}}</p>\n                <p id=\"p1\">Author Name: {{t.author}}</p>\n                <p id=\"p1\">Discription: {{t.discription}}</p>\n                <p id=\"p1\">Condition: {{t.condition}}</p>\n                <p id=\"p2\">Price:<span>Rs.</span>{{t.price}}</p>\n                <button (click)=\"addtowish(i)\">Add</button>\n                \n                <button (click)=\"rotdeatil(t.id)\">Detail</button>\n              </td>\n            </tr>\n            \n          </table>\n        </div>\n    </form>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/loginuser/loginhome/loginhome.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loginuser/loginhome/loginhome.component.ts ***!
  \************************************************************/
/*! exports provided: LoginhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginhomeComponent", function() { return LoginhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginhomeComponent = /** @class */ (function () {
    function LoginhomeComponent(serv, router, route, http) {
        this.serv = serv;
        this.router = router;
        this.route = route;
        this.http = http;
        this.wishlists = {
            Bookname: '',
            Booksellerid: '',
            useridEmail: ''
        };
        this.bookinfo = [];
        this.Bookname = '';
        this.author = '';
        this.discription = '';
        this.price = 0;
        this.condition = '';
        this.sellerEmail = '';
    }
    LoginhomeComponent.prototype.getbookinfo = function () {
        var _this = this;
        this.serv.getbook().subscribe(function (Prod) {
            _this.bookinfo = Prod;
        });
    };
    LoginhomeComponent.prototype.rotdeatil = function (id) {
        this.route.navigate(['/Detail', id]);
    };
    LoginhomeComponent.prototype.addtowish = function (index) {
        this.wishlists = ({
            Bookname: this.bookinfo[index].Bookname,
            Booksellerid: this.bookinfo[index].sellerEmail,
            useridEmail: this.userId
        });
        var values = this.wishlists;
        this.serv.postwishlist(values);
    };
    LoginhomeComponent.prototype.filterb = function () {
        var _this = this;
        if (this.filter == 'condition') {
            this.http.post('/api/listings/filterbycondition', { condition: this.fvalue }).subscribe(function (data) {
                _this.bookinfo = data;
                // console.log( this. bookinfo);
            });
        }
        if (this.filter == 'name') {
            this.http.post('/api/listings/filterbyname', { Bookname: this.fvalue }).subscribe(function (data) {
                _this.bookinfo = data;
                //console.log( this. bookinfo);
            });
        }
        if (this.filter == 'Author') {
            this.http.post('/api/listings/filterbyauthor', { author: this.fvalue }).subscribe(function (data) {
                _this.bookinfo = data;
                //console.log( this. bookinfo);
            });
        }
    };
    LoginhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getbookinfo();
        this.router.paramMap.subscribe(function (params) {
            _this.userId = (params.get('id'));
            // console.log(this.userId);
        });
    };
    LoginhomeComponent.prototype.ngOnDestroy = function () {
        this.serv.userid = this.userId;
    };
    LoginhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginhome',
            template: __webpack_require__(/*! ./loginhome.component.html */ "./src/app/loginuser/loginhome/loginhome.component.html"),
            styles: [__webpack_require__(/*! ./loginhome.component.css */ "./src/app/loginuser/loginhome/loginhome.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginhomeComponent);
    return LoginhomeComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/loginuser.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginuser/loginuser.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loginuser/loginuser.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginuser/loginuser.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">BookShop</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a [routerLink]=\"['/UserHome',Cuserid]\">Home</a></li>\n      <li><a [routerLink]=\"['/AddListing',Cuserid]\">Add Listings</a></li>\n      <li><a [routerLink]=\"['/WishList',Cuserid]\">Wishlist</a></li>\n      <li><a [routerLink]=\"['/Messages',Cuserid]\">Messages</a></li>\n      <li><a [routerLink]=\"['/Home']\">Logout</a></li>\n    </ul>\n   <!-- <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>-->\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/loginuser/loginuser.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginuser/loginuser.component.ts ***!
  \**************************************************/
/*! exports provided: LoginuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginuserComponent", function() { return LoginuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookservice.service */ "./src/app/bookservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginuserComponent = /** @class */ (function () {
    function LoginuserComponent(serv) {
        this.serv = serv;
    }
    LoginuserComponent.prototype.ngOnInit = function () {
        this.Cuserid = this.serv.sellerid;
        console.log(this.Cuserid);
    };
    LoginuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginuser',
            template: __webpack_require__(/*! ./loginuser.component.html */ "./src/app/loginuser/loginuser.component.html"),
            styles: [__webpack_require__(/*! ./loginuser.component.css */ "./src/app/loginuser/loginuser.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"]])
    ], LoginuserComponent);
    return LoginuserComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/messages/messages.component.css":
/*!***********************************************************!*\
  !*** ./src/app/loginuser/messages/messages.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11{\r\n\tbackground-size: 100%;\r\n\tbackground-color: #e6fbc1;\r\n\theight:800px;\r\n\tpadding-top: 10px;\r\n}\r\nform\r\n{\r\n\tbackground-size: 100% ;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n\tbackground-color: white;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 300px;\r\n\tmargin-right: 350px;\r\n\tpadding-left: 50px;\r\n\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 40px;\r\n    margin-top: 100px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\np{\r\n\tfont-size:20px;\r\n}"

/***/ }),

/***/ "./src/app/loginuser/messages/messages.component.html":
/*!************************************************************!*\
  !*** ./src/app/loginuser/messages/messages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Your Messages </div>\n        <div id=\"d3\" *ngFor=\"let t of message\">\n          <table>\n            \n            <tr>\n               <td>\n                   <p id=\"p1\">Message: {{t.Message}} </p>\n              </td>\n            </tr>\n            \n          </table>\n        </div>\n    </form>\n  </div>\n  </div>\n\n  \n"

/***/ }),

/***/ "./src/app/loginuser/messages/messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/loginuser/messages/messages.component.ts ***!
  \**********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(serv, http) {
        this.serv = serv;
        this.http = http;
        this.message = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Cuserid = this.serv.userid;
        this.http.post('/api/message/getmessage', { Booksellerid: this.Cuserid }).subscribe(function (data) {
            _this.message = data;
            //console.log( this. message); 
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/loginuser/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/loginuser/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/loginuser/wishlist/wishlist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/loginuser/wishlist/wishlist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11{\r\n\tbackground-size: 100%;\r\n\tbackground-color: #e6fbc1;\r\n\theight:800px;\r\n\tpadding-top: 10px;\r\n}\r\nform\r\n{\r\n\tbackground-size: 100% ;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n\tbackground-color: white;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 300px;\r\n\tmargin-right: 350px;\r\n\tpadding-left: 50px;\r\n\tpadding-bottom: 10px;\r\n\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 40px;\r\n    margin-top: 50px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\ntd{\r\n\tborder:2px solid grey ;\r\n\twidth: 400px;\r\n}\r\np{\r\n\tcolor:rgb(37, 36, 36);\r\n    font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/loginuser/wishlist/wishlist.component.html":
/*!************************************************************!*\
  !*** ./src/app/loginuser/wishlist/wishlist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Your Wishlist </div>\n        <div id=\"d3\" *ngFor=\"let t of wishlists\">\n          <table>\n            \n            <tr>\n               <td>\n                   <p id=\"p1\">Name of the book: {{t.Bookname}}</p>\n              </td>\n            </tr>\n            \n          </table>\n        </div>\n    </form>\n  </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/loginuser/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/loginuser/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(serv, http) {
        this.serv = serv;
        this.http = http;
        this.wishlists = [];
        this.arraywish = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.serv.userid;
        /*this.serv.wishlistdata(this.userid);*/
        this.http.post('/api/wishlist/wishlistdata', { useridEmail: this.userid }).subscribe(function (data) {
            _this.wishlists = data;
            // console.log( this.wishlists);
        });
    };
    WishlistComponent.prototype.display = function () {
        //console.log( this.wishlists);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/loginuser/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/loginuser/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_2__["BookserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _user_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/registeration/registeration.component */ "./src/app/user/registeration/registeration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginuser/loginuser.component */ "./src/app/loginuser/loginuser.component.ts");
/* harmony import */ var _loginuser_loginhome_loginhome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginuser/loginhome/loginhome.component */ "./src/app/loginuser/loginhome/loginhome.component.ts");
/* harmony import */ var _loginuser_addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginuser/addlisting/addlisting.component */ "./src/app/loginuser/addlisting/addlisting.component.ts");
/* harmony import */ var _loginuser_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginuser/wishlist/wishlist.component */ "./src/app/loginuser/wishlist/wishlist.component.ts");
/* harmony import */ var _loginuser_bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginuser/bookdetail/bookdetail.component */ "./src/app/loginuser/bookdetail/bookdetail.component.ts");
/* harmony import */ var _loginuser_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginuser/messages/messages.component */ "./src/app/loginuser/messages/messages.component.ts");










var appRoutes = [
    {
        path: 'Home', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }]
    },
    {
        path: 'Registration', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_2__["RegisterationComponent"] }]
    },
    {
        path: 'Login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }]
    },
    {
        path: 'UserHome/:id', component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__["LoginuserComponent"],
        children: [{ path: '', component: _loginuser_loginhome_loginhome_component__WEBPACK_IMPORTED_MODULE_5__["LoginhomeComponent"] }]
    },
    {
        path: 'AddListing/:id', component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__["LoginuserComponent"],
        children: [{ path: '', component: _loginuser_addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_6__["AddlistingComponent"] }]
    },
    {
        path: 'Messages/:id', component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__["LoginuserComponent"],
        children: [{ path: '', component: _loginuser_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"] }]
    },
    {
        path: 'WishList/:id', component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__["LoginuserComponent"],
        children: [{ path: '', component: _loginuser_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"] }]
    },
    {
        path: 'Detail/:id', component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_4__["LoginuserComponent"],
        children: [{ path: '', component: _loginuser_bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_8__["BookdetailComponent"] }]
    },
    {
        path: '', redirectTo: '/Home', pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/user/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11\r\n{\r\n    background-image: url(\"/assets/reg3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n    background-color: grey;\r\npadding-right:350px;\r\npadding-left:350px;\t\r\n\r\n}\r\n\r\n.topleft {\r\n   \r\n\tcolor:white;\r\n    font-size: 40px;\r\n    margin-top: 100px;\r\n\tpadding-left:150px;\r\n\t\r\n}\r\n\r\n#d3{\r\n\tpadding-left:50px;\r\n    background-color:white;\r\n    margin-left:20px;\r\n\tmargin-right:20px;\r\n\tmargin-bottom:5px;\r\n\tborder-radius:10px;\r\n}\r\n\r\n#p1\r\n{\r\n\tfont-size:18px;\r\n\tcolor:#102D49;\r\n}\r\n\r\n#p2\r\n{\r\n\tfont-size:18px;\r\n\tcolor:#253387;\r\n}\r\n\r\n#d3 img\r\n{\r\n\twidth:150px;\r\n\theight:150px;\r\n}\r\n\r\nspan\r\n{\r\n\tcolor:black;\r\n}\r\n\r\nbutton{\r\n    width: 200px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-left: 50px;\r\n}"

/***/ }),

/***/ "./src/app/user/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Buy Your Book </div>\n        <div id=\"d3\" *ngFor=\"let t of bookinfo\">\n          <table>\n            \n            <tr>\n             \n                  <td>\n                      <img src=\"/assets/book.jpg\">\n                    </td>\n              \n              <td>\n                <p id=\"p1\">BOOk Name: {{t.Bookname}}</p>\n                <p id=\"p1\">Author Name: {{t.author}}</p>\n                <p id=\"p1\">Discription: {{t.discription}}</p>\n                <p id=\"p1\">Condition: {{t.condition}}</p>\n                <p id=\"p2\">Price:<span>Rs.</span>{{t.price}}</p>\n                <button (click)=\"addtowish()\">Add Book To your Wishlist</button>\n                \n              </td>\n            </tr>\n            \n          </table>\n        </div>\n    </form>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/user/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(serv, router, route) {
        this.serv = serv;
        this.router = router;
        this.route = route;
        this.bookinfo = [];
        this.Bookname = '';
        this.author = '';
        this.discription = '';
        this.price = 0;
        this.condition = '';
        this.sellerEmail = '';
    }
    HomeComponent.prototype.getbookinfo = function () {
        var _this = this;
        this.serv.getbook().subscribe(function (Prod) {
            _this.bookinfo = Prod;
            console.log(_this.bookinfo);
        });
    };
    HomeComponent.prototype.addtowish = function () {
        this.route.navigate(['/Login']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getbookinfo();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/user/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/user/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div11\r\n{\r\n    background-image: url(\"/assets/reg3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 800px;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n    background-color: grey;\r\npadding-right:350px;\r\npadding-left:350px;\t\r\nheight: 800px;\r\n}\r\ndiv .div1\r\n{\r\n\r\n\ttext-align:center;\r\n\tcolor:white;\r\n\tfont-size:40px;\r\n\tpadding-bottom:10px;\r\n}\r\np\r\n{\r\n\tmargin-bottom:0px;\r\n}\r\n#button\r\n{\r\n\twidth: 30%;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-left: 150px;\r\n}\r\ndiv.div3\r\n{\r\n\tbackground-color:grey;\r\n\ttext-align:center;\r\n    height:40px;\r\n    margin-left: 150px;\r\n    width: 400px;\r\n\t\r\n}\r\n.p\r\n{\r\n\tcolor:white;\r\n}\r\ninput\r\n{\r\n\twidth:60%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    margin-left: 150px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n#div10\r\n{\r\n    width:100%;\r\n    margin-top: 250px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"div11\">\n  <div id=\"div10\">\n\t\n  <div class=\"div1\">\n    <p>Member Login</p>\n  </div>\n  <div class=\"div2\">\n    <input type=\"email\" name=\"email\" placeholder=\"Email address\" required [(ngModel)]=\"email\" >\n    <br>\n    <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n  </div>\n  <div class=\"div4\">\n    <button id=\"button\" (click)=\"matchdata()\">login</button>\n  </div>\n  <div class=\"div3\">\n    <a href=\"#\" class=\"p\">FORGOT PASSWORD?</a>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(serv, route) {
        this.serv = serv;
        this.route = route;
        this.listitem = [];
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.getItems = function () {
        var _this = this;
        this.serv.getlist().subscribe(function (Prod) {
            _this.listitem = Prod;
            //console.log(this.listitem);
        });
    };
    LoginComponent.prototype.matchdata = function () {
        var c = 0;
        for (var i = 0; i < this.listitem.length; i++) {
            if (this.email == this.listitem[i].email && this.password == this.listitem[i].password) {
                c = 1;
                break;
            }
        }
        if (c == 0) {
            console.log("not valid");
        }
        else {
            this.route.navigate(['/UserHome', this.email]);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.serv.sellerid = this.email;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registeration/registeration.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/registeration/registeration.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form\r\n{\r\n    background-image: url(\"/assets/reg3.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 100% ;\r\n\tright:500px;\r\n\ttop:80px;\r\n    border:2px solid grey ;\r\n    background-color: grey;\r\npadding-right:350px;\r\npadding-left:350px;\t\r\n}\r\ninput[type=text]\r\n{\r\n\twidth:40%;\r\n\t padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n\t\r\n}\r\ninput[required].ng-pristine{\r\n\tborder-color:#453A3A;\r\n}\r\ninput.ng-invalid.ng-dirty{\r\n\tborder-color:#453A3A;\r\n}\r\ninput.ng-valid.ng-dirty{\r\n\tborder-color:#2ecc71;\r\n}\r\n#id100\r\n{\r\n\twidth:100%;\r\n\tpadding: 8px 12px;\r\n}\r\ninput[type=date]\r\n{\r\n\twidth:55%;\r\n\t padding: px 12px;\r\n    margin: 0;\r\n    display: inline-block;\r\n     border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=email]\r\n{\r\n\twidth:65%;\r\n\t padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n   border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=number]\r\n{\r\n\twidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\ninput[type=password]\r\n{\r\n\twidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n     border-style:solid ;\r\n\tborder-width:2px 10px;\r\n\tborder-color:#453A3A;\r\n    border-radius: 4px;\r\n}\r\n#option\r\n{\r\n\tcolor:grey;\r\n\twidth:100%;\r\n}\r\nspan\r\n{\r\n\tfont-size:110%;\r\n}\r\nselect\r\n{\r\nwidth:65%;\r\n\t  padding: 8px 12px;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\t\r\n}\r\ninput[type=submit] {\r\n    width: 30%;\r\n    background-color: #453A3A;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n\tcursor: pointer;\r\n    margin-right: 50px;\r\n}\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n}\r\ninput[type=reset] {\r\n    width: 30%;\r\n    background-color: #453A3A;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n\tcolor:white;\r\n}\r\ninput[type=reset]:hover {\r\n    background-color: #800000;\r\n}\r\nbody\r\n{\r\n\tposition:relative;\r\n\tbackground-color:grey;\r\n\t;\r\n\t\r\n}\r\n.topleft {\r\n   \r\n\tcolor:white;\r\n    font-size: 40px;\r\n\tpadding-left:250px;\r\n\t\r\n}\r\n#width,#width1,#width2,#width3,#width4,#width5,#width6\r\n{\r\n\twidth:100%;\t\r\n}\r\n.div1\r\n{\r\n\tpadding: 8px 0;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n\twidth:100%;\r\n\tbackground-color:white;\r\n\tcolor:grey;\r\n}\r\n#width1\r\n{\r\n\twidth:100%;\t\r\n}\r\n#p1\r\n{\r\n\tcolor:white;\r\n}\r\n#id1\r\n{\r\n\t\r\n\tmargin: auto;\r\n\r\n\t\r\n}\r\nh1\r\n{\r\n\tfont-size:50px;\r\n\ttext-align:center;\r\n\tcolor:white;\r\n}\r\nh2\r\n{\r\n\t\r\n\ttext-align:center;\r\n\tcolor:white;\r\n}\r\ntable\r\n{\r\n\tcolor:white;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/user/registeration/registeration.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/registeration/registeration.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div11\" >\n  \n  <div>\n    <form name=\"exampleForm\">\n        <div class=\"topleft\">Membership Registration Form</div>\n      <div>\n        <input type=\"text\" name=\"fname\" placeholder=\"First name\" id=\"width1\" padding-top:80px  required [(ngModel)]=\"register.fname\">\n        <input type=\"text\" name=\"sname\" placeholder=\"Surname\" id=\"width2\"  required [(ngModel)]=\"register.sname\">\n        <br>\n        <input type=\"email\" name=\"email\" placeholder=\"Email address\" id=\"width3\"  required [(ngModel)]=\"register.email\">\n        <br>\n        <input type=\"number\" name=\"number\" placeholder=\"Contact number\" id=\"width4\"   required [(ngModel)]=\"register.number\">\n        <br>\n        <div class=\"div1\">\n          <span>Gender  :</span>\n          <input type=\"radio\" name=\"gender\" value=\"male\" [(ngModel)]=\"register.gender\" >\n          Male\n          <input type=\"radio\" name=\"gender\" value=\"female\" [(ngModel)]=\"register.gender\">\n          Female\n        </div>\n        <br>\n        <input type=\"text\" name=\"college\" placeholder=\"College name\" id=\"width6\"  required [(ngModel)]=\"register.college\">\n        <br>\n        <br>\n        <input type=\"password\" name=\"pswd\" placeholder=\"Password\"  id=\"width5\"  required [(ngModel)]=\"register.password\">\n        <br>\n        <input type=\"checkbox\" checked=\"checked\" id=\"p1\"> Remember me\n        <p id=\"p1\">By creating an account you agree to our <a href=\"#\" id=\"p1\"><br>Terms & Privacy</a>.</p>\n        <br>\n        <input type=\"submit\" name=\"submit\" value=\"submit\" (click)=\"adddata()\" >\n        <input type=\"reset\" name=\"reset\">\n        <p id=\"success\"></p>\n      </div>\n    </form>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/user/registeration/registeration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/registeration/registeration.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookservice.service */ "./src/app/bookservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(serv) {
        this.serv = serv;
        this.register = { fname: '',
            sname: '',
            email: '',
            number: 0,
            gender: '',
            college: '',
            password: '' };
    }
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    /*adddata(){
      console.log(this.register.fname);
      console.log(this.register.gender);
      this.listitem.push({fname:this.register.fname,sname:this.register.sname,email:this.register.email,number:this.register.number,gender:this.register.gender,college:this.register.college,password:this.register.password});
      console.log(this.listitem);
    }*/
    RegisterationComponent.prototype.adddata = function () {
        var values = this.register;
        this.serv.postdata(values);
        // console.log(values);
    };
    RegisterationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration',
            template: __webpack_require__(/*! ./registeration.component.html */ "./src/app/user/registeration/registeration.component.html"),
            styles: [__webpack_require__(/*! ./registeration.component.css */ "./src/app/user/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">BookShop</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/Home\">Home</a></li>\n      <li><a routerLink=\"/Registration\">Signup</a></li>\n      <li><a routerLink=\"/Login\">Login</a></li>\n    </ul>\n    <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\bookshop_project\bookshop4\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map