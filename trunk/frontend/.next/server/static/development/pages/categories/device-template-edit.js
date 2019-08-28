module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/categories/device-template-edit.js":
/*!**************************************************!*\
  !*** ./pages/categories/device-template-edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Layout_DashboadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Layout/DashboadLayout */ "./src/components/Layout/DashboadLayout.js");
/* harmony import */ var _src_components_Uploads_ImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Uploads/ImageUpload */ "./src/components/Uploads/ImageUpload.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/redux/_actions/categories/deviceTemplateA */ "./src/redux/_actions/categories/deviceTemplateA.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/utils/config */ "./src/utils/config.js");
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_utils_config__WEBPACK_IMPORTED_MODULE_10__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var config = _src_utils_config__WEBPACK_IMPORTED_MODULE_10___default.a[_src_utils_config__WEBPACK_IMPORTED_MODULE_10___default.a.environment];
var prevURL = config.prevURL;
var originBackend = config.originBackend;
var prevOrigin = config.prevOrigin;

var DeviceTemplateEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(DeviceTemplateEdit, _Component);

  function DeviceTemplateEdit(props) {
    var _this;

    _classCallCheck(this, DeviceTemplateEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceTemplateEdit).call(this, props));
    _this.state = {
      refresh: true
    };
    return _this;
  }

  _createClass(DeviceTemplateEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          deviceTemplates = _this$props.deviceTemplates,
          dispatch = _this$props.dispatch;
      ;
      var _deviceTemplates$acti = deviceTemplates.action,
          action = _deviceTemplates$acti === void 0 ? '' : _deviceTemplates$acti,
          _deviceTemplates$load = deviceTemplates.loading,
          loading = _deviceTemplates$load === void 0 ? 0 : _deviceTemplates$load,
          _deviceTemplates$curr = deviceTemplates.current,
          current = _deviceTemplates$curr === void 0 ? {} : _deviceTemplates$curr;

      if (action === 'update' && loading === 0 && lodash__WEBPACK_IMPORTED_MODULE_9___default.a.size(current) === 0) {
        var _deviceTemplates$orig = deviceTemplates.originalUrl,
            originalUrl = _deviceTemplates$orig === void 0 ? '' : _deviceTemplates$orig;
        var regex = new RegExp(/id\=(\d+)/);
        var find = originalUrl.match(regex);
        var id = find ? parseInt(find[1]) : null;
        if (!lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isNull(id)) dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].getDeviceTemplateById({
          deviceTemplateId: id
        }));
      }

      this.getData();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var deviceTemplates = nextProps.deviceTemplates;
      var _deviceTemplates$acti2 = deviceTemplates.action,
          action = _deviceTemplates$acti2 === void 0 ? '' : _deviceTemplates$acti2,
          _deviceTemplates$load2 = deviceTemplates.loading,
          loading = _deviceTemplates$load2 === void 0 ? 0 : _deviceTemplates$load2,
          _deviceTemplates$curr2 = deviceTemplates.current,
          current = _deviceTemplates$curr2 === void 0 ? {} : _deviceTemplates$curr2;

      if (action === 'insert' && loading === 2 && !lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isUndefined(current.deviceTemplateId) && current.deviceTemplateId !== '' || action === 'update' && loading === 2 && lodash__WEBPACK_IMPORTED_MODULE_9___default.a.size(current) > 0) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(prevURL + '/categories/device-templates');
      }

      if (action === 'update' && loading === 0 && lodash__WEBPACK_IMPORTED_MODULE_9___default.a.size(current) > 0) {
        if (current.parentId) this.setState({
          isParent: false
        });
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.props.dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].getOthers());
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this$props2 = this.props,
          deviceTemplates = _this$props2.deviceTemplates,
          dispatch = _this$props2.dispatch;
      var _deviceTemplates$curr3 = deviceTemplates.current,
          current = _deviceTemplates$curr3 === void 0 ? {} : _deviceTemplates$curr3;
      var deviceTemplateName = '';
      var deviceTypeId = '';
      var weight = '';
      var height = '';
      var maxPower = '';
      var powerModule = '';
      var manufacturer = '';

      if (!current.deviceTemplateName) {
        deviceTemplateName = 'May be not empty';
      }

      if (!current.deviceTypeId) {
        deviceTypeId = 'May be not empty';
      }

      if (!current.maxPower) {
        maxPower = 'May be not empty';
      }

      if (!current.powerModule) {
        powerModule = 'May be not empty';
      }

      if (!current.weight) {
        weight = 'May be not empty';
      }

      if (!current.height) {
        height = 'May be not empty';
      }

      if (!current.manufacturer) {
        manufacturer = 'May be not empty';
      }

      if (!deviceTemplateName && !deviceTypeId && !maxPower && !powerModule && !weight && !height && !manufacturer) {
        return true;
      }

      dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].validate({
        deviceTemplateName: deviceTemplateName,
        deviceTypeId: deviceTypeId,
        maxPower: maxPower,
        powerModule: powerModule,
        weight: weight,
        height: height,
        manufacturer: manufacturer
      }));
      return false;
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      if (!this.validate()) return false;
      var _this$props3 = this.props,
          deviceTemplates = _this$props3.deviceTemplates,
          dispatch = _this$props3.dispatch;
      var current = deviceTemplates.current,
          action = deviceTemplates.action;
      var formData = new FormData();

      if (action === 'insert') {
        var data = {
          deviceTemplateName: current.deviceTemplateName,
          deviceTypeId: current.deviceTypeId,
          weight: current.weight,
          height: current.height,
          CPU: current.CPU,
          RAM: current.RAM,
          disk: current.disk,
          maxPower: current.maxPower,
          manufacturer: current.manufacturer,
          powerModule: current.powerModule,
          description: current.description
        };
        formData.append('info', JSON.stringify(data));
        if (current.fronts && current.fronts.file) formData.append('front', current.fronts.file);
        if (current.rears && current.rears.file) formData.append('rear', current.rears.file);
        dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].insertDeviceTemplate(formData));
      } else if (action === 'update') {
        var _data = {
          deviceTemplateId: current.deviceTemplateId,
          deviceTemplateName: current.deviceTemplateName,
          deviceTypeId: current.deviceTypeId,
          weight: current.weight,
          height: current.height,
          CPU: current.CPU,
          RAM: current.RAM,
          disk: current.disk,
          maxPower: current.maxPower,
          manufacturer: current.manufacturer,
          powerModule: current.powerModule,
          description: current.description
        };
        formData.append('info', JSON.stringify(_data));
        if (current.fronts && current.fronts.file) formData.append('front', current.fronts.file);
        if (current.rears && current.rears.file) formData.append('rear', current.rears.file);
        dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].updateDeviceTemplate(formData));
      }
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(prevURL + '/categories/device-templates');
    }
  }, {
    key: "handleChangeInput",
    value: function handleChangeInput(e) {
      var _this$props4 = this.props,
          deviceTemplates = _this$props4.deviceTemplates,
          dispatch = _this$props4.dispatch;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      var _deviceTemplates$vali = deviceTemplates.validate,
          validate = _deviceTemplates$vali === void 0 ? {} : _deviceTemplates$vali;
      var _error = '';

      if (!value && !lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isUndefined(validate[name])) {
        _error = 'May be not empty';
      }

      dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].updateCurrent(name, value, _error));
    }
  }, {
    key: "handleSelectDeviceTypes",
    value: function handleSelectDeviceTypes(e, data) {
      this.props.dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].updateCurrent('deviceTypeId', data.value));
    }
  }, {
    key: "getChildState",
    value: function getChildState(data, name) {
      this.props.dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].updateCurrent(name, data));
    }
  }, {
    key: "render",
    value: function render() {
      var deviceTemplates = this.props.deviceTemplates;
      var _deviceTemplates$curr4 = deviceTemplates.current,
          current = _deviceTemplates$curr4 === void 0 ? {
        deviceTemplateName: '',
        description: '',
        fronts: {
          imagePreviewUrl: ''
        },
        rears: {
          imagePreviewUrl: ''
        }
      } : _deviceTemplates$curr4,
          _deviceTemplates$vali2 = deviceTemplates.validate,
          validate = _deviceTemplates$vali2 === void 0 ? {
        deviceTemplateName: ''
      } : _deviceTemplates$vali2,
          _deviceTemplates$load3 = deviceTemplates.loading,
          loading = _deviceTemplates$load3 === void 0 ? 0 : _deviceTemplates$load3,
          action = deviceTemplates.action,
          _deviceTemplates$devi = deviceTemplates.deviceTypes,
          deviceTypes = _deviceTemplates$devi === void 0 ? [] : _deviceTemplates$devi;
      var title = action === 'update' ? 'Edit Device Template' : 'Add new Device Template';

      var _deviceTypes = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.map(deviceTypes, function (item) {
        return {
          text: item.deviceTypeName,
          value: item.deviceTypeId
        };
      });

      var frontImage = current.fronts ? current.fronts.imagePreviewUrl : '';
      var rearImage = current.rears ? current.rears.imagePreviewUrl : '';

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.size(frontImage) === 0 && current.front && frontImage.indexOf('data:image') === -1) {
        frontImage = "".concat(originBackend + prevOrigin, "/uploads/deviceTemplates/").concat(current.deviceTemplateId, "/front/").concat(current.front);
      }

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.size(rearImage) === 0 && current.rear && rearImage.indexOf('data:image') === -1) {
        rearImage = "".concat(originBackend + prevOrigin, "/uploads/deviceTemplates/").concat(current.deviceTemplateId, "/rear/").concat(current.rear);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Layout_DashboadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        className: "grid-toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Dropdown, {
        name: "deviceTypeId",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Type ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        fluid: true,
        placeholder: "Select...",
        search: true,
        selection: true,
        clearable: true,
        options: _deviceTypes,
        onChange: this.handleSelectDeviceTypes.bind(this),
        value: current.deviceTypeId,
        error: validate.deviceTypeId ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.deviceTypeId ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.deviceTypeId)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "deviceTemplateName",
        value: current.deviceTemplateName,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Name",
        error: validate.deviceTemplateName ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.deviceTemplateName ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.deviceTemplateName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "CPU",
        value: current.CPU,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "CPU"),
        placeholder: "CPU"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "RAM",
        value: current.RAM,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "RAM"),
        placeholder: "RAM"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "disk",
        value: current.disk,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Disk"),
        placeholder: "Disk"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "maxPower",
        value: current.maxPower,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Power max ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Power max",
        error: validate.maxPower ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.maxPower ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.maxPower)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "powerModule",
        value: current.powerModule,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Power module ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Power module",
        error: validate.powerModule ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.powerModule ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.powerModule)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "weight",
        value: current.weight,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Weight ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Power module",
        error: validate.weight ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.weight ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.weight)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "height",
        value: current.height,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Height ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Height",
        error: validate.height ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.height ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.height)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "manufacturer",
        value: current.manufacturer,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Manufacturer ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Manufacturer",
        error: validate.manufacturer ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.manufacturer ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.manufacturer))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "label label-image"
      }, "Front")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Uploads_ImageUpload__WEBPACK_IMPORTED_MODULE_4__["default"], {
        getChildState: this.getChildState.bind(this),
        name: "fronts",
        imagePreview: frontImage,
        refresh: true
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "label label-image"
      }, "Rear")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Uploads_ImageUpload__WEBPACK_IMPORTED_MODULE_4__["default"], {
        getChildState: this.getChildState.bind(this),
        name: "rears",
        imagePreview: rearImage,
        refresh: true
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        width: 16
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].TextArea, {
        name: "description",
        fluid: "true",
        onChange: this.handleChangeInput.bind(this),
        value: current.description || '',
        label: "Description",
        placeholder: "Description"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
        secondary: true,
        type: "submit",
        disabled: loading === 1,
        onClick: this.handleCancel.bind(this)
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
        primary: true,
        type: "submit",
        disabled: loading === 1,
        onClick: this.handleSave.bind(this)
      }, "Save")))))))));
    }
  }]);

  return DeviceTemplateEdit;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

DeviceTemplateEdit.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$req, req, _context$query, query, store, originalUrl;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context$req = context.req, req = _context$req === void 0 ? {} : _context$req, _context$query = context.query, query = _context$query === void 0 ? {} : _context$query, store = context.store;
            originalUrl = req.originalUrl;

            if (!query.id) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return store.dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].initUpdate({
              originalUrl: originalUrl,
              action: 'update'
            }));

          case 5:
            _context.next = 9;
            break;

          case 7:
            _context.next = 9;
            return store.dispatch(_src_redux_actions_categories_deviceTemplateA__WEBPACK_IMPORTED_MODULE_8__["deviceTemplateA"].initUpdate({
              originalUrl: originalUrl,
              action: 'insert'
            }));

          case 9:
            return _context.abrupt("return", store.getState());

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // const mapStateToProps =({deviceTemplates}) => ({deviceTemplates});


var mapStateToProps = function mapStateToProps(state, props) {
  var deviceTemplates = state.deviceTemplates;
  var _deviceTemplates = props.deviceTemplates;

  if (deviceTemplates.originalUrl) {
    return {
      deviceTemplates: deviceTemplates
    };
  } else {
    return {
      deviceTemplates: _objectSpread({}, props.deviceTemplates, deviceTemplates)
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, null)(DeviceTemplateEdit));

/***/ }),

/***/ "./src/assets/css/NavMenu.css":
/*!************************************!*\
  !*** ./src/assets/css/NavMenu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Extension/TextIcon.js":
/*!**********************************************!*\
  !*** ./src/components/Extension/TextIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TextIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(TextIcon, _Component);

  function TextIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "styleTextIcon", {
      wrapper: {
        whiteSpace: 'nowrap',
        display: 'inline-flex'
      },
      text: {
        alignSelf: 'center',
        paddingLeft: '4px'
      }
    });

    return _this;
  }

  _createClass(TextIcon, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.styleTextIcon.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        size: "large",
        color: this.props.color,
        name: this.props.name
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.styleTextIcon.text,
        hidden: this.props.hideText
      }, this.props.children));
    }
  }]);

  return TextIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(TextIcon, "propTypes", {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hideText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});



/***/ }),

/***/ "./src/components/Layout/DashboadLayout.js":
/*!*************************************************!*\
  !*** ./src/components/Layout/DashboadLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/css/index.css */ "./src/assets/css/index.css");
/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_NavMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/NavMenu.css */ "./src/assets/css/NavMenu.css");
/* harmony import */ var _assets_css_NavMenu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_NavMenu_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/awesome/css/font-awesome.css */ "./static/awesome/css/font-awesome.css");
/* harmony import */ var _static_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Menu_TopMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/TopMenu */ "./src/components/Menu/TopMenu.js");
/* harmony import */ var _Menu_SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/SideMenu */ "./src/components/Menu/SideMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var DashboardLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardLayout, _Component);

  function DashboardLayout() {
    _classCallCheck(this, DashboardLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardLayout).apply(this, arguments));
  }

  _createClass(DashboardLayout, [{
    key: "render",
    // componentWillReceiveProps(nextProps) {
    //     const {alerts} = this.props;
    //     const _alerts = nextProps.alerts || {};
    //     if(_alerts.message !== alerts.message) {
    //         if(_alerts.type === 'success') {
    //             toast.success(_alerts.message);
    //         } else if(_alerts.type === 'warn') {
    //             toast.warn(_alerts.message);
    //         } else if(_alerts.type === 'error') {
    //             toast.error(_alerts.message);
    //         }
    //     }
    // }
    // componentWillMount(){
    //     console.log('router ... ',Router);
    //     if(!_.isUndefined(Router.router) && !_.isNull(Router.router) && Router.router.asPath !== '/login'){
    //         Router.push('/login');
    //     }
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_TopMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu_SideMenu__WEBPACK_IMPORTED_MODULE_7__["default"], null, this.props.children)));
    }
  }]);

  return DashboardLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var alerts = _ref.alerts;
  return {
    alerts: alerts
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, null)(DashboardLayout));

/***/ }),

/***/ "./src/components/Menu/SideMenu.js":
/*!*****************************************!*\
  !*** ./src/components/Menu/SideMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Extension/TextIcon */ "./src/components/Extension/TextIcon.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/_actions/sideMenuA */ "./src/redux/_actions/sideMenuA.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var prevURL = _utils_config__WEBPACK_IMPORTED_MODULE_8___default.a[_utils_config__WEBPACK_IMPORTED_MODULE_8___default.a.environment].prevURL;


var SideMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SideMenu, _Component);

  function SideMenu(props) {
    var _this;

    _classCallCheck(this, SideMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.props.sideMenuR.activeIndex;
      var newIndex = activeIndex === index ? -1 : index;

      _this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].sendIndex(newIndex)); // this.setState({ activeIndex: newIndex })

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (e) {// this.setState({activeItem: name});
      // Router.push(name);
      // this.props.dispatch(sideMenuA.sendIndex(-1));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenu", function () {
      // let user = Cookies.get('user');
      // let permission = [];
      // if(user && user !== 'undefined') {
      //     user = JSON.parse(user);
      //     permission = user.permission || [];
      // }
      // const permission = user.permission;
      var activeIndex = _this.props.sideMenuR.activeIndex;
      var _this$props$sideMenuR = _this.props.sideMenuR,
          smallMenu = _this$props$sideMenuR.smallMenu,
          activeItem = _this$props$sideMenuR.activeItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"],
        fixed: "left",
        borderless: true,
        className: (smallMenu ? 'small-side' : 'large-side') + ' side',
        vertical: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/',
        onClick: _this.handleItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        hideText: smallMenu,
        color: "blue",
        name: "home"
      }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
        active: activeIndex === 'admin',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hideText: smallMenu,
          name: "users"
        }, "Admin"),
        index: 'admin',
        onClick: _this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
        active: activeIndex === 'admin'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        vertical: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/admin/users'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/users'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "U"
      }, "Users"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/admin/routes'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/routes'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "R"
      }, "Routes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/admin/actions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/actions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "A"
      }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/admin/groups'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/groups'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "G"
      }, "Groups"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/admin/permissions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/permissions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "P"
      }, "Permissions")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
        active: activeIndex === 'categories',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hideText: smallMenu,
          name: "list layout"
        }, "Categories"),
        index: 'categories',
        onClick: _this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
        active: activeIndex === 'categories'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        vertical: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/locations'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/locations'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Lo"
      }, "Locations"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/datacenters'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/datacenters'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Dc"
      }, "DataCenters"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/rooms'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/rooms'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Rm"
      }, "Rooms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/zones'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/zones'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Zn"
      }, "Zones"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/departments'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/departments'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "De"
      }, "Departments"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/customers'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/customers'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Cu"
      }, "Customers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/regions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/regions'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Rg"
      }, "Regions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/device-types'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/device-types'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Dt"
      }, "Device Types"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/device-templates'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/device-templates'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "DT"
      }, "Device Templates"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/racks'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/racks'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Ra"
      }, "Racks"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/categories/contracts'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/contracts'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "Ct"
      }, "Contracts")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
        active: activeIndex === 'layouts',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hideText: smallMenu,
          name: "th large"
        }, "Layouts"),
        index: 'layouts',
        onClick: _this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
        active: activeIndex === 'layouts'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        vertical: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/layouts/layouts'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/layouts'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "LO"
      }, "Layouts")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
        active: activeIndex === 'request',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Extension_TextIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hideText: smallMenu,
          name: "checked calendar"
        }, "Request"),
        index: 'request',
        onClick: _this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
        active: activeIndex === 'request'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        vertical: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: prevURL + '/request/up-new'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        active: activeItem === '/up-new'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'item-side-bar',
        name: "U"
      }, "Up new")))))));
    });

    _this.state = {
      smallMenu: false
    };
    return _this;
  }

  _createClass(SideMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var path = next_router__WEBPACK_IMPORTED_MODULE_4___default.a.asPath;
      var index = path.split('/');

      if (index.length === 2) {
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].activeItem(path));
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].sendIndex(-1));
      } else if (index.length === 3) {
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].activeItem("/".concat(index[2])));
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].sendIndex(index[1]));
      } else if (index.length === 4) {
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].activeItem("/".concat(index[3])));
        this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_7__["sideMenuA"].sendIndex(index[2]));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var iconDropdown = document.querySelectorAll('.title>i.dropdown.icon');
      var itemSidebar = document.querySelectorAll('.item-side-bar');

      if (nextProps.sideMenuR.smallMenu !== this.state.smallMenu) {
        this.setState({
          smallMenu: nextProps.sideMenuR.smallMenu
        });

        if (nextProps.sideMenuR.smallMenu) {
          // a.style.cssText = 'display:none !important';
          iconDropdown.forEach(function (el) {
            return el.style.display = 'none';
          });
          itemSidebar.forEach(function (item) {
            var temp = item.innerHTML;
            item.innerHTML = item.getAttribute("name");
            item.setAttribute("name", temp);
            item.style.cssText = 'padding-left: 0px';
          });
        } else {
          iconDropdown.forEach(function (el) {
            return el.style.display = 'inline';
          });
          itemSidebar.forEach(function (item) {
            var temp = item.innerHTML;
            item.innerHTML = item.getAttribute("name");
            item.setAttribute("name", temp);
            item.style.cssText = 'padding-left: 20px';
          });
        }
      }
    } // changeSize = () => this.setState({smallSidebar: !this.props.smallMenu});

  }, {
    key: "render",
    value: function render() {
      var smallMenu = this.props.sideMenuR.smallMenu;
      var _class = '';

      if (smallMenu) {
        _class = 'small-side ';
      } else {
        _class = 'large-side ';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: "sideMenu",
        className: "parent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: (smallMenu ? 'small-side ' : 'large-side ') + 'side'
      }, this.getMenu()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: (smallMenu ? 'small-content ' : '') + 'content-layout'
      }, this.props.children));
    }
  }]);

  return SideMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var sideMenuR = _ref.sideMenuR;
  return {
    sideMenuR: sideMenuR
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, null)(SideMenu));

/***/ }),

/***/ "./src/components/Menu/TopMenu.js":
/*!****************************************!*\
  !*** ./src/components/Menu/TopMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/_actions/sideMenuA */ "./src/redux/_actions/sideMenuA.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_icons8_r_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/images/icons8-r.png */ "./static/images/icons8-r.png");
/* harmony import */ var _static_images_icons8_r_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_icons8_r_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_user_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/images/user.png */ "./static/images/user.png");
/* harmony import */ var _static_images_user_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_user_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import 'semantic-ui-css/semantic.min.css';

 // import Link from 'next/link';
// import cookie from "js-cookie";


var config = _utils_config__WEBPACK_IMPORTED_MODULE_4___default.a[_utils_config__WEBPACK_IMPORTED_MODULE_4___default.a.environment]; // import Router from 'next/router';






var TopMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopMenu, _React$Component);

  function TopMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TopMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TopMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_2__["sideMenuA"].toggleMenu());
    });

    return _this;
  }

  _createClass(TopMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var mini = this.isMiniMenu();
      if (mini) this.props.dispatch(_redux_actions_sideMenuA__WEBPACK_IMPORTED_MODULE_2__["sideMenuA"].toggleMenu(true));
    }
  }, {
    key: "doSearch",
    value: function doSearch(event) {
      console.log("search"); // this.props.actions.search(event.target.value);
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove("authtoken");
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove("user");
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove("redirect"); // axios.get('https://auth.csoc.fpt.net/accounts/logout');

      var url = "".concat(config.originRoot, "/openid/logout");
      console.log(url);
      window.open(url, '_self'); // Router.push(url);
    }
  }, {
    key: "isMiniMenu",
    value: function isMiniMenu() {
      var side = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this.refs.menu);
      var mini = false;

      if (side) {
        var parent = side.parentElement;
        if (parent) mini = parent.clientWidth < 1024;
      }

      return mini;
    }
  }, {
    key: "render",
    value: function render() {
      var smallMenu = this.props.sideMenuR.smallMenu;
      var user = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('user');
      var username = 'username';

      if (user) {
        user = JSON.parse(user);
        username = user.username;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        ref: "menu",
        fixed: "top",
        className: "top-menu"
      }, smallMenu ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        className: "logo-space-menu-item small-side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-inline logo-space"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        src: _static_images_icons8_r_png__WEBPACK_IMPORTED_MODULE_5___default.a
      }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        className: "logo-space-menu-item large-side"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-inline logo-space"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        src: _static_images_icons8_r_png__WEBPACK_IMPORTED_MODULE_5___default.a
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "project-name"
      }, "RACA"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        className: "no-border",
        onClick: this.toggleMenu
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "bars"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        className: "no-border drop-left-padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        className: "icon",
        icon: "search",
        placeholder: "Search...",
        onChange: this.doSearch.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Menu, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        className: "no-border",
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        animated: true,
        size: "tiny",
        onClick: this.handleLogout
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        avatar: true,
        spaced: "right",
        src: _static_images_user_png__WEBPACK_IMPORTED_MODULE_6___default.a
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"].Content, {
        hidden: true
      }, "Log Out"))))));
    }
  }]);

  return TopMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var sideMenuR = _ref.sideMenuR;
  return {
    sideMenuR: sideMenuR
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(TopMenu)); // export default connect(null)(TopMenu);

/***/ }),

/***/ "./src/components/Uploads/ImageUpload.js":
/*!***********************************************!*\
  !*** ./src/components/Uploads/ImageUpload.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/images/default_image.png */ "./static/images/default_image.png");
/* harmony import */ var _static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // used for making the prop types of this component






var ImageUpload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload(props) {
    var _this;

    _classCallCheck(this, ImageUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageUpload).call(this, props));
    _this.state = {
      file: null,
      refresh: props.refresh,
      imagePreview: null,
      imagePreviewUrl: _static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3___default.a // uploaded: this.props.uploaded

    };
    _this.handleImageChange = _this.handleImageChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRemove = _this.handleRemove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageUpload, [{
    key: "handleImageChange",
    value: function handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function (event) {
        var img = document.getElementById('imgPreview');

        _this2.setState({
          file: file,
          imagePreview: img,
          imagePreviewUrl: reader.result
        }); // if (this.state.uploaded) this.state.uploaded(this.state);


        _this2.setParentState();
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "setParentState",
    value: function setParentState() {
      var _this$props = this.props,
          getChildState = _this$props.getChildState,
          name = _this$props.name;

      if (getChildState) {
        getChildState(this.state, name);
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault(); // this.state.file is the file/image uploaded
      // in this function you can save the image (this.state.file) on form submit
      // you have to call it yourself
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.refs.fileInput.click();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // console.log(nextProps);
      // const {refresh} = nextProps;
      // if(refresh) {
      //     this.handleRemove();
      // }
      var imagePreview = nextProps.imagePreview;

      if (imagePreview && !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isObject(imagePreview)) {
        this.setState({
          imagePreviewUrl: imagePreview
        });
      } else if (lodash__WEBPACK_IMPORTED_MODULE_4___default.a.size(imagePreview) === 0) {
        this.setState({
          imagePreviewUrl: _static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3___default.a
        });
      }
    }
  }, {
    key: "handleRemove",
    value: function handleRemove() {
      this.setState({
        file: null,
        imagePreview: null,
        imagePreviewUrl: _static_images_default_image_png__WEBPACK_IMPORTED_MODULE_3___default.a
      });
      this.refs.fileInput.value = null;
      this.forceUpdate(); // this.state.uploaded(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          avatar = _this$props2.avatar,
          hide = _this$props2.hide,
          addButtonProps = _this$props2.addButtonProps,
          changeButtonProps = _this$props2.changeButtonProps,
          removeButtonProps = _this$props2.removeButtonProps,
          size = _this$props2.size;
      var imagePreviewUrl = this.state.imagePreviewUrl;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fileinput text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "fileUpload",
        type: "file",
        onChange: this.handleImageChange,
        ref: "fileInput"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thumbnail" + (avatar ? " img-circle" : "") + (hide ? " hide" : "")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        size: size,
        id: "imgPreview",
        src: imagePreviewUrl,
        alt: "..."
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.file === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, addButtonProps, {
        onClick: function onClick() {
          return _this3.handleClick();
        }
      }), avatar ? "Add Photo" : "Select image") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, changeButtonProps, {
        onClick: function onClick() {
          return _this3.handleClick();
        }
      }), "Change"), avatar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, removeButtonProps, {
        onClick: function onClick() {
          return _this3.handleRemove();
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times"
      }), " Remove"))));
    }
  }]);

  return ImageUpload;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ImageUpload.defaultProps = {
  hide: false,
  avatar: false,
  size: 'small'
};
ImageUpload.propTypes = {
  hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  changeButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  removeButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['mini', 'tiny', 'small', 'large', 'gig', 'huge', 'massive'])
};
/* harmony default export */ __webpack_exports__["default"] = (ImageUpload); // WEBPACK FOOTER //
// ./src/components/CustomUpload/ImageUpload.jsx

/***/ }),

/***/ "./src/redux/_actions/alertA.js":
/*!**************************************!*\
  !*** ./src/redux/_actions/alertA.js ***!
  \**************************************/
/*! exports provided: alertA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertA", function() { return alertA; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");

var alertA = {
  success: success,
  warning: warning,
  error: error,
  clear: clear
};

function success(message) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_SUCCESS,
    message: message
  };
}

function warning(message) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_WARNING,
    message: message
  };
}

function error(message) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_ERROR,
    message: message
  };
}

function clear() {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_CLEAR
  };
}

/***/ }),

/***/ "./src/redux/_actions/api.js":
/*!***********************************!*\
  !*** ./src/redux/_actions/api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_0__);

var env = _utils_config__WEBPACK_IMPORTED_MODULE_0___default.a.environment;
var _config = _utils_config__WEBPACK_IMPORTED_MODULE_0___default.a[env];
var origin = _config.originBackend + _config.prevOrigin;
var api_key = ''; //'?api_key=' + config.apiKey;

console.log('origin', origin);
/* harmony default export */ __webpack_exports__["default"] = ({
  login: origin + '/login' + api_key,
  auth_user: origin + '/auth-user' + api_key,
  //---------------- routes -------------------//
  get_all_route: origin + '/get-all-route' + api_key,
  get_routes: origin + '/get-routes' + api_key,
  get_route_by_id: origin + '/get-route' + api_key,
  get_route_parents: origin + '/get-route-parents' + api_key,
  insert_route: origin + '/insert-route' + api_key,
  update_route: origin + '/update-route' + api_key,
  delete_route: origin + '/delete-route' + api_key,
  //---------------- end routes -------------------//
  //---------------- actions -------------------//
  get_all_action: origin + '/get-all-action' + api_key,
  get_actions: origin + '/get-actions' + api_key,
  get_action_by_id: origin + '/get-action' + api_key,
  insert_action: origin + '/insert-action' + api_key,
  update_action: origin + '/update-action' + api_key,
  delete_action: origin + '/delete-action' + api_key,
  //---------------- end actions -------------------//
  //---------------- groups -------------------//
  get_all_group: origin + '/get-all-group' + api_key,
  get_groups: origin + '/get-groups' + api_key,
  get_group_by_id: origin + '/get-group' + api_key,
  insert_group: origin + '/insert-group' + api_key,
  update_group: origin + '/update-group' + api_key,
  delete_group: origin + '/delete-group' + api_key,
  //---------------- end groups -------------------//
  //---------------- users -------------------//
  get_all_user: origin + '/get-all-user' + api_key,
  get_users: origin + '/get-users' + api_key,
  get_user_by_id: origin + '/get-user' + api_key,
  insert_user: origin + '/insert-user' + api_key,
  update_user: origin + '/update-user' + api_key,
  reset_password: origin + '/reset-password' + api_key,
  delete_user: origin + '/delete-user' + api_key,
  //---------------- end users -------------------//
  //---------------- permissions -------------------//
  get_others: origin + '/get-others' + api_key,
  get_max_action_of_route: origin + '/max-action-of-route' + api_key,
  get_all_route_action: origin + '/get-all-route-action' + api_key,
  update_permission: origin + '/update-permission' + api_key,
  get_permission: origin + '/get-permission' + api_key,
  //---------------- end permissions -------------------//
  //---------------- locations -------------------//
  get_all_location: origin + '/get-all-location' + api_key,
  get_locations: origin + '/get-locations' + api_key,
  get_location_by_id: origin + '/get-location' + api_key,
  insert_location: origin + '/insert-location' + api_key,
  update_location: origin + '/update-location' + api_key,
  delete_location: origin + '/delete-location' + api_key,
  //---------------- end locations -------------------//
  //---------------- dataCenters -------------------//
  get_all_datacenter: origin + '/get-all-datacenter' + api_key,
  get_datacenters: origin + '/get-datacenters' + api_key,
  get_datacenter_by_id: origin + '/get-datacenter' + api_key,
  insert_datacenter: origin + '/insert-datacenter' + api_key,
  update_datacenter: origin + '/update-datacenter' + api_key,
  delete_datacenter: origin + '/delete-datacenter' + api_key,
  //---------------- end dataCenters -------------------//
  //---------------- rooms -------------------//
  get_all_room: origin + '/get-all-room' + api_key,
  get_rooms: origin + '/get-rooms' + api_key,
  get_room_by_id: origin + '/get-room' + api_key,
  insert_room: origin + '/insert-room' + api_key,
  update_room: origin + '/update-room' + api_key,
  delete_room: origin + '/delete-room' + api_key,
  //---------------- end rooms -------------------//
  //---------------- zones -------------------//
  get_all_zone: origin + '/get-all-zone' + api_key,
  get_zones: origin + '/get-zones' + api_key,
  get_zone_by_id: origin + '/get-zone' + api_key,
  insert_zone: origin + '/insert-zone' + api_key,
  update_zone: origin + '/update-zone' + api_key,
  delete_zone: origin + '/delete-zone' + api_key,
  //---------------- end zones -------------------//
  //---------------- customers -------------------//
  get_all_customer: origin + '/get-all-customer' + api_key,
  get_customers: origin + '/get-customers' + api_key,
  get_customer_by_id: origin + '/get-customer' + api_key,
  insert_customer: origin + '/insert-customer' + api_key,
  update_customer: origin + '/update-customer' + api_key,
  delete_customer: origin + '/delete-customer' + api_key,
  //---------------- end customers -------------------//
  //---------------- departments -------------------//
  get_all_department: origin + '/get-all-department' + api_key,
  get_departments: origin + '/get-departments' + api_key,
  get_department_by_id: origin + '/get-department' + api_key,
  insert_department: origin + '/insert-department' + api_key,
  update_department: origin + '/update-department' + api_key,
  delete_department: origin + '/delete-department' + api_key,
  //---------------- end departments -------------------//
  //---------------- regions -------------------//
  get_all_region: origin + '/get-all-region' + api_key,
  get_regions: origin + '/get-regions' + api_key,
  get_region_by_id: origin + '/get-region' + api_key,
  insert_region: origin + '/insert-region' + api_key,
  update_region: origin + '/update-region' + api_key,
  delete_region: origin + '/delete-region' + api_key,
  //---------------- end regions -------------------//
  //---------------- device types -------------------//
  get_all_device_type: origin + '/get-all-device-type' + api_key,
  get_device_types: origin + '/get-device-types' + api_key,
  get_device_type_by_id: origin + '/get-device-type' + api_key,
  insert_device_type: origin + '/insert-device-type' + api_key,
  import_device_type: origin + '/import-device-type' + api_key,
  update_device_type: origin + '/update-device-type' + api_key,
  delete_device_type: origin + '/delete-device-type' + api_key,
  //---------------- end device-types -------------------//
  //---------------- device templates -------------------//
  get_all_device_template: origin + '/get-all-device-template' + api_key,
  get_device_templates: origin + '/get-device-templates' + api_key,
  get_device_template_by_id: origin + '/get-device-template' + api_key,
  insert_device_template: origin + '/insert-device-template' + api_key,
  import_device_template: origin + '/import-device-template' + api_key,
  update_device_template: origin + '/update-device-template' + api_key,
  delete_device_template: origin + '/delete-device-template' + api_key,
  //---------------- end device-templates -------------------//
  //---------------- racks -------------------//
  get_all_rack: origin + '/get-all-rack' + api_key,
  get_device_by_id: origin + '/get-device' + api_key,
  get_racks: origin + '/get-racks' + api_key,
  get_rack_by_id: origin + '/get-rack' + api_key,
  get_rack_by_zone: origin + '/get-rack-by-zone' + api_key,
  get_rack_by_zones: origin + '/get-rack-by-zones' + api_key,
  get_rack_by_room: origin + '/get-rack-by-room' + api_key,
  insert_rack: origin + '/insert-rack' + api_key,
  update_rack: origin + '/update-rack' + api_key,
  delete_rack: origin + '/delete-rack' + api_key,
  booking_u: origin + '/booking-u' + api_key,
  add_device_rack: origin + '/add-device-rack' + api_key,
  delete_booking: origin + '/delete-booking' + api_key,
  delete_device: origin + '/delete-device-rack' + api_key,
  save_move_u: origin + '/save-move-u' + api_key,
  import_device_to_rack: origin + '/import-device-to-rack' + api_key,
  //---------------- end racks -------------------//
  //---------------- layouts -------------------//
  get_all_layout: origin + '/get-all-layout' + api_key,
  get_layouts: origin + '/get-layouts' + api_key,
  get_layout_by_id: origin + '/get-layout' + api_key,
  insert_layout: origin + '/insert-layout' + api_key,
  update_layout: origin + '/update-layout' + api_key,
  delete_layout: origin + '/delete-layout' + api_key,
  //---------------- end layouts -------------------//
  //---------------- contracts -------------------//
  get_all_contract: origin + '/get-all-contract' + api_key,
  get_contracts: origin + '/get-contracts' + api_key,
  get_contract_by_id: origin + '/get-contract' + api_key,
  insert_contract: origin + '/insert-contract' + api_key,
  update_contract: origin + '/update-contract' + api_key,
  delete_contract: origin + '/delete-contract' + api_key //---------------- end contracts -------------------//

});

/***/ }),

/***/ "./src/redux/_actions/axios_base.js":
/*!******************************************!*\
  !*** ./src/redux/_actions/axios_base.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  post: function post(body, callback) {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('authtoken') || ''; // localStorage.getItem('token');

    var header = body.headers ? _objectSpread({}, body.headers, {
      'x-access-token': token
    }) : {
      'x-access-token': token
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(body.url, body.params, {
      headers: header
    }).then(function (resp) {
      callback(resp);
    }).catch(function (error) {
      callback({
        status: 500,
        data: [],
        message: error.message
      });
      console.error(error);
    });
  },
  get: function get(body, callback) {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('authtoken') || '';
    var header = body.headers ? _objectSpread({}, body.headers, {
      'x-access-token': token
    }) : {
      'x-access-token': token
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'get',
      url: body.url,
      params: body.params || {},
      headers: header
    }).then(function (resp) {
      callback(resp);
    }).catch(function (error) {
      callback({
        status: 500,
        data: [],
        message: error.message
      });
      console.error(error);
    });
  },
  put: function put(body, callback) {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('authtoken') || '';
    var header = body.headers ? _objectSpread({}, body.headers, {
      'x-access-token': token
    }) : {
      'x-access-token': token
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(body.url, body.params, {
      headers: header
    }).then(function (resp) {
      callback(resp);
    }).catch(function (error) {
      callback({
        status: 500,
        data: [],
        message: error.message
      });
      console.error(error);
    });
  },
  delete: function _delete(body, callback) {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('authtoken') || '';
    var header = body.headers ? _objectSpread({}, body.headers, {
      'x-access-token': token
    }) : {
      'x-access-token': token
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'delete',
      url: body.url,
      params: body.params,
      headers: header
    }).then(function (resp) {
      callback(resp);
    }).catch(function (error) {
      callback({
        status: 500,
        data: [],
        message: error.message
      });
      console.error(error);
    });
  }
});

/***/ }),

/***/ "./src/redux/_actions/categories/deviceTemplateA.js":
/*!**********************************************************!*\
  !*** ./src/redux/_actions/categories/deviceTemplateA.js ***!
  \**********************************************************/
/*! exports provided: deviceTemplateA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceTemplateA", function() { return deviceTemplateA; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var _axios_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../axios_base */ "./src/redux/_actions/axios_base.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/redux/_actions/api.js");
/* harmony import */ var _alertA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alertA */ "./src/redux/_actions/alertA.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loadingA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loadingA */ "./src/redux/_actions/loadingA.js");






var deviceTemplateA = {
  getDeviceTemplates: getDeviceTemplates,
  insertDeviceTemplate: insertDeviceTemplate,
  validate: validate,
  updateCurrent: updateCurrent,
  updateDeviceTemplate: updateDeviceTemplate,
  deleteDeviceTemplate: deleteDeviceTemplate,
  modal: modal,
  handleDeleteRow: handleDeleteRow,
  handleUpdateRow: handleUpdateRow,
  initUpdate: initUpdate,
  getDeviceTemplateById: getDeviceTemplateById,
  handleSearch: handleSearch,
  onPageChange: onPageChange,
  getOthers: getOthers,
  getDeviceTypes: getDeviceTypes,
  importDeviceTemplate: importDeviceTemplate
};

function getDeviceTemplates(params) {
  return function (dispatch) {
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].get({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].get_device_templates,
      params: params
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          // dispatch(paginationActions.pagination(data.pagination));
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(resp.message);
        dispatch(failure(resp.message));
      }
    });

    function success(value) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_SUCCESS,
        value: value
      };
    }

    function failure(error) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_FAILURE,
        error: error
      };
    }
  };
}

function getDeviceTypes() {
  return function (dispatch) {
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].get({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].get_all_device_type
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          // dispatch(paginationActions.pagination(data.pagination));
          dispatch(success(data));
        } else {
          // toast.error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        // toast.error(resp.message);
        dispatch(failure(resp.message));
      }
    });

    function success(value) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS,
        value: value
      };
    }

    function failure(error) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE,
        error: error
      };
    }
  };
}

function insertDeviceTemplate(params) {
  return function (dispatch) {
    dispatch(request({}));
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].post({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].insert_device_template,
      params: params
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success(data.message);
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(resp.message);
        dispatch(failure(resp.message));
      }
    });
  };

  function request() {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_REQUEST
    };
  }

  function success(value) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_SUCCESS,
      value: value
    };
  }

  function failure(error) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_FAILURE,
      error: error
    };
  }
}

function updateCurrent(name, value, error) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_DEVICE_TEMPLATE,
    name: name,
    value: value,
    error: error
  };
}

function validate(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_DEVICE_TEMPLATE,
    value: value
  };
}

function modal(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_DEVICE_TEMPLATE,
    value: value
  };
}

function handleDeleteRow(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_DEVICE_TEMPLATE,
    value: value
  };
}

function handleUpdateRow(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_DEVICE_TEMPLATE,
    value: value
  };
}

function deleteDeviceTemplate(params) {
  return function (dispatch) {
    dispatch(request({}));
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].delete({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].delete_device_template,
      params: params
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success(data.message);
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(resp.message);
        dispatch(failure(resp.message));
      }
    });
  };

  function request() {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_REQUEST
    };
  }

  function success(value) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_SUCCESS,
      value: value
    };
  }

  function failure(error) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_FAILURE,
      error: error
    };
  }
}

function initUpdate(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_DEVICE_TEMPLATE,
    value: value
  };
}

function getDeviceTemplateById(params) {
  return function (dispatch) {
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].get({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].get_device_template_by_id,
      params: params
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          // dispatch(paginationActions.pagination(data.pagination));
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        dispatch(failure(resp.message));
      }
    });

    function success(value) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_BY_ID_SUCCESS,
        value: value
      };
    }

    function failure(error) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_BY_ID_FAILURE,
        error: error
      };
    }
  };
}

function updateDeviceTemplate(params) {
  return function (dispatch) {
    dispatch(request({}));
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].put({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].update_device_template,
      params: params
    }, function (resp) {
      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success(data.message);
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message);
          dispatch(failure(data.message));
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(resp.message);
        dispatch(failure(resp.message));
      }
    });

    function request() {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_REQUEST
      };
    }

    function success(value) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_SUCCESS,
        value: value
      };
    }

    function failure(error) {
      return {
        type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_FAILURE,
        error: error
      };
    }
  };
}

function handleSearch(name, value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_DEVICE_TEMPLATE,
    name: name,
    value: value
  };
}

function onPageChange(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_DEVICE_TEMPLATES,
    value: value
  };
}

function getOthers(params) {
  return function (dispatch) {
    var promises = [];
    var types = new Promise(function (resolve) {
      _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].get({
        url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].get_all_device_type
      }, function (resp) {
        var result = [];

        if (resp.status === 200) {
          var data = resp.data;
          result = data.data;
        }

        resolve(result);
      });
    });
    promises.push(types);
    Promise.all(promises).then(function (resp) {
      var data = {
        deviceTypes: resp[0]
      };
      dispatch(success(data));
    }).catch(function (error) {
      dispatch(failure(error.toString()));
    });
  };

  function success(value) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_OTHER_SUCCESS,
      value: value
    };
  }

  function failure(error) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_OTHER_FAILURE,
      error: error
    };
  }
}

function importDeviceTemplate(params) {
  return function (dispatch) {
    _axios_base__WEBPACK_IMPORTED_MODULE_1__["default"].post({
      url: _api__WEBPACK_IMPORTED_MODULE_2__["default"].import_device_template,
      params: params
    }, function (resp) {
      dispatch(_loadingA__WEBPACK_IMPORTED_MODULE_5__["loadingA"].stop());

      if (resp.status === 200) {
        var data = resp.data;

        if (data.status === 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success(data.message);
          dispatch(success(data));
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(data.message, {
            autoClose: false
          });
          dispatch(failure(data.message));
        }

        dispatch(getDeviceTemplates());
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(resp.message);
        dispatch(failure(resp.message));
      }
    });
  };

  function success(value) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TEMPLATE_SUCCESS,
      value: value
    };
  }

  function failure(error) {
    return {
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TEMPLATE_FAILURE,
      error: error
    };
  }
}

/***/ }),

/***/ "./src/redux/_actions/loadingA.js":
/*!****************************************!*\
  !*** ./src/redux/_actions/loadingA.js ***!
  \****************************************/
/*! exports provided: loadingA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingA", function() { return loadingA; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");

var loadingA = {
  start: start,
  stop: stop
};

function start(message) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_START,
    message: message
  };
}

function stop() {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_STOP
  };
}

/***/ }),

/***/ "./src/redux/_actions/sideMenuA.js":
/*!*****************************************!*\
  !*** ./src/redux/_actions/sideMenuA.js ***!
  \*****************************************/
/*! exports provided: sideMenuA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuA", function() { return sideMenuA; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");

var sideMenuA = {
  toggleMenu: toggleMenu,
  activeItem: activeItem,
  sendIndex: sendIndex
};

function toggleMenu(value) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_MENU,
    value: value
  };
}

function activeItem(name) {
  return function (dispatch) {
    dispatch({
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ACTIVE_ITEM,
      name: name
    });
  };
}

function sendIndex(index) {
  return function (dispatch) {
    dispatch({
      type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ACTIVE_INDEX_SIDEBAR,
      index: index
    });
  };
}

/***/ }),

/***/ "./src/redux/_constants/actionTypes.js":
/*!*********************************************!*\
  !*** ./src/redux/_constants/actionTypes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actionTypes = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  ACTIVE_ITEM: 'ACTIVE_ITEM',
  ACTIVE_INDEX_SIDEBAR: 'ACTIVE_INDEX_SIDEBAR',
  //------------ alerts ------------//
  ALERT_SUCCESS: 'ALERT_SUCCESS',
  ALERT_WARNING: 'ALERT_WARNING',
  ALERT_ERROR: 'ALERT_ERROR',
  ALERT_CLEAR: 'ALERT_CLEAR',
  //------------ routes ------------//
  GET_ROUTES_SUCCESS: 'GET_ROUTES_SUCCESS',
  GET_ROUTES_FAILURE: 'GET_ROUTES_FAILURE',
  GET_ALL_ACTION_ROUTE_SUCCESS: 'GET_ALL_ACTION_ROUTE_SUCCESS',
  GET_ALL_ACTION_ROUTE_FAILURE: 'GET_ALL_ACTION_ROUTE_FAILURE',
  GET_ROUTES_BY_ID_SUCCESS: 'GET_ROUTES_BY_ID_SUCCESS',
  GET_ROUTES_BY_ID_FAILURE: 'GET_ROUTES_BY_ID_FAILURE',
  PAGINATION_ROUTES: "PAGINATION_ROUTES",
  PAGINATION_ROUTES_CLEAR: "PAGINATION_ROUTES_CLEAR",
  ON_PAGE_CHANGE_ROUTES: "ON_PAGE_CHANGE_ROUTES",
  GET_ROUTE_PARENTS_SUCCESS: 'GET_ROUTE_PARENTS_SUCCESS',
  GET_ROUTE_PARENTS_FAILURE: 'GET_ROUTE_PARENTS_FAILURE',
  INSERT_ROUTE_REQUEST: 'INSERT_ROUTE_REQUEST',
  INSERT_ROUTE_SUCCESS: 'INSERT_ROUTE_SUCCESS',
  INSERT_ROUTE_FAILURE: 'INSERT_ROUTE_FAILURE',
  UPDATE_ROUTE_REQUEST: 'UPDATE_ROUTE_REQUEST',
  UPDATE_ROUTE_SUCCESS: 'UPDATE_ROUTE_SUCCESS',
  UPDATE_ROUTE_FAILURE: 'UPDATE_ROUTE_FAILURE',
  DELETE_ROUTE_REQUEST: 'DELETE_ROUTE_REQUEST',
  DELETE_ROUTE_SUCCESS: 'DELETE_ROUTE_SUCCESS',
  DELETE_ROUTE_FAILURE: 'DELETE_ROUTE_FAILURE',
  UPDATE_CURRENT_ROUTE: 'UPDATE_CURRENT_ROUTE',
  VALIDATE_ROUTE: 'VALIDATE_ROUTE',
  MODAL_ROUTE: 'MODAL_ROUTE',
  HANDLE_DELETE_ROUTE: 'HANDLE_DELETE_ROUTE',
  HANDLE_UPDATE_ROUTE: 'HANDLE_UPDATE_ROUTE',
  INIT_UPDATE_ROUTE: 'INIT_UPDATE_ROUTE',
  SEARCH_ROUTE: 'SEARCH_ROUTE',
  CHECK_ALL_ACTION_ROUTE: 'CHECK_ALL_ACTION_ROUTE',
  //------------ end routes ------------//
  //------------ groups ------------//
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILURE: 'GET_GROUPS_FAILURE',
  GET_GROUPS_BY_ID_SUCCESS: 'GET_GROUPS_BY_ID_SUCCESS',
  GET_GROUPS_BY_ID_FAILURE: 'GET_GROUPS_BY_ID_FAILURE',
  PAGINATION_GROUPS: "PAGINATION_GROUPS",
  PAGINATION_GROUPS_CLEAR: "PAGINATION_GROUPS_CLEAR",
  ON_PAGE_CHANGE_GROUPS: "ON_PAGE_CHANGE_GROUPS",
  INSERT_GROUP_REQUEST: 'INSERT_GROUP_REQUEST',
  INSERT_GROUP_SUCCESS: 'INSERT_GROUP_SUCCESS',
  INSERT_GROUP_FAILURE: 'INSERT_GROUP_FAILURE',
  UPDATE_GROUP_REQUEST: 'UPDATE_GROUP_REQUEST',
  UPDATE_GROUP_SUCCESS: 'UPDATE_GROUP_SUCCESS',
  UPDATE_GROUP_FAILURE: 'UPDATE_GROUP_FAILURE',
  DELETE_GROUP_REQUEST: 'DELETE_GROUP_REQUEST',
  DELETE_GROUP_SUCCESS: 'DELETE_GROUP_SUCCESS',
  DELETE_GROUP_FAILURE: 'DELETE_GROUP_FAILURE',
  UPDATE_CURRENT_GROUP: 'UPDATE_CURRENT_GROUP',
  VALIDATE_GROUP: 'VALIDATE_GROUP',
  MODAL_GROUP: 'MODAL_GROUP',
  HANDLE_DELETE_GROUP: 'HANDLE_DELETE_GROUP',
  HANDLE_UPDATE_GROUP: 'HANDLE_UPDATE_GROUP',
  INIT_UPDATE_GROUP: 'INIT_UPDATE_GROUP',
  SEARCH_GROUP: 'SEARCH_GROUP',
  //------------ end groups ------------//
  //------------ actions ------------//
  GET_ACTIONS_SUCCESS: 'GET_ACTIONS_SUCCESS',
  GET_ACTIONS_FAILURE: 'GET_ACTIONS_FAILURE',
  GET_ACTIONS_BY_ID_SUCCESS: 'GET_ACTIONS_BY_ID_SUCCESS',
  GET_ACTIONS_BY_ID_FAILURE: 'GET_ACTIONS_BY_ID_FAILURE',
  PAGINATION_ACTIONS: "PAGINATION_ACTIONS",
  PAGINATION_ACTIONS_CLEAR: "PAGINATION_ACTIONS_CLEAR",
  ON_PAGE_CHANGE_ACTIONS: "ON_PAGE_CHANGE_ACTIONS",
  INSERT_ACTION_REQUEST: 'INSERT_ACTION_REQUEST',
  INSERT_ACTION_SUCCESS: 'INSERT_ACTION_SUCCESS',
  INSERT_ACTION_FAILURE: 'INSERT_ACTION_FAILURE',
  UPDATE_ACTION_REQUEST: 'UPDATE_ACTION_REQUEST',
  UPDATE_ACTION_SUCCESS: 'UPDATE_ACTION_SUCCESS',
  UPDATE_ACTION_FAILURE: 'UPDATE_ACTION_FAILURE',
  DELETE_ACTION_REQUEST: 'DELETE_ACTION_REQUEST',
  DELETE_ACTION_SUCCESS: 'DELETE_ACTION_SUCCESS',
  DELETE_ACTION_FAILURE: 'DELETE_ACTION_FAILURE',
  UPDATE_CURRENT_ACTION: 'UPDATE_CURRENT_ACTION',
  VALIDATE_ACTION: 'VALIDATE_ACTION',
  MODAL_ACTION: 'MODAL_ACTION',
  HANDLE_DELETE_ACTION: 'HANDLE_DELETE_ACTION',
  HANDLE_UPDATE_ACTION: 'HANDLE_UPDATE_ACTION',
  INIT_UPDATE_ACTION: 'INIT_UPDATE_ACTION',
  SEARCH_ACTION: 'SEARCH_ACTION',
  //------------ end actions ------------//
  //------------ users ------------//
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  GET_USERS_BY_ID_SUCCESS: 'GET_USERS_BY_ID_SUCCESS',
  GET_USERS_BY_ID_FAILURE: 'GET_USERS_BY_ID_FAILURE',
  PAGINATION_USERS: "PAGINATION_USERS",
  PAGINATION_USERS_CLEAR: "PAGINATION_USERS_CLEAR",
  ON_PAGE_CHANGE_USERS: "ON_PAGE_CHANGE_USERS",
  INSERT_USER_REQUEST: 'INSERT_USER_REQUEST',
  INSERT_USER_SUCCESS: 'INSERT_USER_SUCCESS',
  INSERT_USER_FAILURE: 'INSERT_USER_FAILURE',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
  UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
  VALIDATE_USER: 'VALIDATE_USER',
  MODAL_USER: 'MODAL_USER',
  HANDLE_DELETE_USER: 'HANDLE_DELETE_USER',
  HANDLE_UPDATE_USER: 'HANDLE_UPDATE_USER',
  INIT_UPDATE_USER: 'INIT_UPDATE_USER',
  SEARCH_USER: 'SEARCH_USER',
  GET_USER_OTHER_SUCCESS: 'GET_USER_OTHER_SUCCESS',
  GET_USER_OTHER_FAILURE: 'GET_USER_OTHER_FAILURE',
  //------------ end users ------------//
  //------------ permissions ------------//
  GET_PERMISSION_OTHER: 'GET_PERMISSION_OTHER',
  HANDLE_UPDATE_PERMISSION: 'HANDLE_UPDATE_PERMISSION',
  HANDLE_CANCEL_PERMISSION: 'HANDLE_CANCEL_PERMISSION',
  HANDLE_SAVE_PERMISSION_SUCCESS: 'HANDLE_SAVE_PERMISSION_SUCCESS',
  HANDLE_GET_PERMISSION_SUCCESS: 'HANDLE_GET_PERMISSION_SUCCESS',
  UPDATE_CURRENT_PERMISSION: 'UPDATE_CURRENT_PERMISSION',
  //------------ end permissions ------------//
  //------------ locations ------------//
  GET_LOCATIONS_SUCCESS: 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_FAILURE: 'GET_LOCATIONS_FAILURE',
  GET_LOCATIONS_BY_ID_SUCCESS: 'GET_LOCATIONS_BY_ID_SUCCESS',
  GET_LOCATIONS_BY_ID_FAILURE: 'GET_LOCATIONS_BY_ID_FAILURE',
  PAGINATION_LOCATIONS: "PAGINATION_LOCATIONS",
  PAGINATION_LOCATIONS_CLEAR: "PAGINATION_LOCATIONS_CLEAR",
  ON_PAGE_CHANGE_LOCATIONS: "ON_PAGE_CHANGE_LOCATIONS",
  GET_LOCATION_PARENTS_SUCCESS: 'GET_LOCATION_PARENTS_SUCCESS',
  GET_LOCATION_PARENTS_FAILURE: 'GET_LOCATION_PARENTS_FAILURE',
  INSERT_LOCATION_REQUEST: 'INSERT_LOCATION_REQUEST',
  INSERT_LOCATION_SUCCESS: 'INSERT_LOCATION_SUCCESS',
  INSERT_LOCATION_FAILURE: 'INSERT_LOCATION_FAILURE',
  UPDATE_LOCATION_REQUEST: 'UPDATE_LOCATION_REQUEST',
  UPDATE_LOCATION_SUCCESS: 'UPDATE_LOCATION_SUCCESS',
  UPDATE_LOCATION_FAILURE: 'UPDATE_LOCATION_FAILURE',
  DELETE_LOCATION_REQUEST: 'DELETE_LOCATION_REQUEST',
  DELETE_LOCATION_SUCCESS: 'DELETE_LOCATION_SUCCESS',
  DELETE_LOCATION_FAILURE: 'DELETE_LOCATION_FAILURE',
  UPDATE_CURRENT_LOCATION: 'UPDATE_CURRENT_LOCATION',
  VALIDATE_LOCATION: 'VALIDATE_LOCATION',
  MODAL_LOCATION: 'MODAL_LOCATION',
  HANDLE_DELETE_LOCATION: 'HANDLE_DELETE_LOCATION',
  HANDLE_UPDATE_LOCATION: 'HANDLE_UPDATE_LOCATION',
  INIT_UPDATE_LOCATION: 'INIT_UPDATE_LOCATION',
  SEARCH_LOCATION: 'SEARCH_LOCATION',
  //------------ end locations ------------//
  //------------ datacenters ------------//
  GET_DATACENTERS_SUCCESS: 'GET_DATACENTERS_SUCCESS',
  GET_DATACENTERS_FAILURE: 'GET_DATACENTERS_FAILURE',
  GET_DATACENTER_OTHER_SUCCESS: 'GET_DATACENTER_OTHER_SUCCESS',
  GET_DATACENTER_OTHER_FAILURE: 'GET_DATACENTER_OTHER_FAILURE',
  GET_DATACENTERS_BY_ID_SUCCESS: 'GET_DATACENTERS_BY_ID_SUCCESS',
  GET_DATACENTERS_BY_ID_FAILURE: 'GET_DATACENTERS_BY_ID_FAILURE',
  PAGINATION_DATACENTERS: "PAGINATION_DATACENTERS",
  PAGINATION_DATACENTERS_CLEAR: "PAGINATION_DATACENTERS_CLEAR",
  ON_PAGE_CHANGE_DATACENTERS: "ON_PAGE_CHANGE_DATACENTERS",
  GET_DATACENTER_PARENTS_SUCCESS: 'GET_DATACENTER_PARENTS_SUCCESS',
  GET_DATACENTER_PARENTS_FAILURE: 'GET_DATACENTER_PARENTS_FAILURE',
  INSERT_DATACENTER_REQUEST: 'INSERT_DATACENTER_REQUEST',
  INSERT_DATACENTER_SUCCESS: 'INSERT_DATACENTER_SUCCESS',
  INSERT_DATACENTER_FAILURE: 'INSERT_DATACENTER_FAILURE',
  UPDATE_DATACENTER_REQUEST: 'UPDATE_DATACENTER_REQUEST',
  UPDATE_DATACENTER_SUCCESS: 'UPDATE_DATACENTER_SUCCESS',
  UPDATE_DATACENTER_FAILURE: 'UPDATE_DATACENTER_FAILURE',
  DELETE_DATACENTER_REQUEST: 'DELETE_DATACENTER_REQUEST',
  DELETE_DATACENTER_SUCCESS: 'DELETE_DATACENTER_SUCCESS',
  DELETE_DATACENTER_FAILURE: 'DELETE_DATACENTER_FAILURE',
  UPDATE_CURRENT_DATACENTER: 'UPDATE_CURRENT_DATACENTER',
  VALIDATE_DATACENTER: 'VALIDATE_DATACENTER',
  MODAL_DATACENTER: 'MODAL_DATACENTER',
  HANDLE_DELETE_DATACENTER: 'HANDLE_DELETE_DATACENTER',
  HANDLE_UPDATE_DATACENTER: 'HANDLE_UPDATE_DATACENTER',
  INIT_UPDATE_DATACENTER: 'INIT_UPDATE_DATACENTER',
  SEARCH_DATACENTER: 'SEARCH_DATACENTER',
  //------------ end datacenters ------------//
  //------------ rooms ------------//
  GET_ROOMS_SUCCESS: 'GET_ROOMS_SUCCESS',
  GET_ROOMS_FAILURE: 'GET_ROOMS_FAILURE',
  GET_ROOM_OTHER_SUCCESS: 'GET_ROOM_OTHER_SUCCESS',
  GET_ROOM_OTHER_FAILURE: 'GET_ROOM_OTHER_FAILURE',
  GET_ROOMS_BY_ID_SUCCESS: 'GET_ROOMS_BY_ID_SUCCESS',
  GET_ROOMS_BY_ID_FAILURE: 'GET_ROOMS_BY_ID_FAILURE',
  PAGINATION_ROOMS: "PAGINATION_ROOMS",
  PAGINATION_ROOMS_CLEAR: "PAGINATION_ROOMS_CLEAR",
  ON_PAGE_CHANGE_ROOMS: "ON_PAGE_CHANGE_ROOMS",
  GET_ROOM_PARENTS_SUCCESS: 'GET_ROOM_PARENTS_SUCCESS',
  GET_ROOM_PARENTS_FAILURE: 'GET_ROOM_PARENTS_FAILURE',
  INSERT_ROOM_REQUEST: 'INSERT_ROOM_REQUEST',
  INSERT_ROOM_SUCCESS: 'INSERT_ROOM_SUCCESS',
  INSERT_ROOM_FAILURE: 'INSERT_ROOM_FAILURE',
  UPDATE_ROOM_REQUEST: 'UPDATE_ROOM_REQUEST',
  UPDATE_ROOM_SUCCESS: 'UPDATE_ROOM_SUCCESS',
  UPDATE_ROOM_FAILURE: 'UPDATE_ROOM_FAILURE',
  DELETE_ROOM_REQUEST: 'DELETE_ROOM_REQUEST',
  DELETE_ROOM_SUCCESS: 'DELETE_ROOM_SUCCESS',
  DELETE_ROOM_FAILURE: 'DELETE_ROOM_FAILURE',
  UPDATE_CURRENT_ROOM: 'UPDATE_CURRENT_ROOM',
  VALIDATE_ROOM: 'VALIDATE_ROOM',
  MODAL_ROOM: 'MODAL_ROOM',
  HANDLE_DELETE_ROOM: 'HANDLE_DELETE_ROOM',
  HANDLE_UPDATE_ROOM: 'HANDLE_UPDATE_ROOM',
  INIT_UPDATE_ROOM: 'INIT_UPDATE_ROOM',
  SEARCH_ROOM: 'SEARCH_ROOM',
  ONCHANGE_LOCATION_ROOM: 'ONCHANGE_LOCATION_ROOM',
  //------------ end rooms ------------//
  //------------ zones ------------//
  GET_ZONES_SUCCESS: 'GET_ZONES_SUCCESS',
  GET_ZONES_FAILURE: 'GET_ZONES_FAILURE',
  GET_ZONE_OTHER_SUCCESS: 'GET_ZONE_OTHER_SUCCESS',
  GET_ZONE_OTHER_FAILURE: 'GET_ZONE_OTHER_FAILURE',
  GET_ZONES_BY_ID_SUCCESS: 'GET_ZONES_BY_ID_SUCCESS',
  GET_ZONES_BY_ID_FAILURE: 'GET_ZONES_BY_ID_FAILURE',
  PAGINATION_ZONES: "PAGINATION_ZONES",
  PAGINATION_ZONES_CLEAR: "PAGINATION_ZONES_CLEAR",
  ON_PAGE_CHANGE_ZONES: "ON_PAGE_CHANGE_ZONES",
  GET_ZONE_PARENTS_SUCCESS: 'GET_ZONE_PARENTS_SUCCESS',
  GET_ZONE_PARENTS_FAILURE: 'GET_ZONE_PARENTS_FAILURE',
  INSERT_ZONE_REQUEST: 'INSERT_ZONE_REQUEST',
  INSERT_ZONE_SUCCESS: 'INSERT_ZONE_SUCCESS',
  INSERT_ZONE_FAILURE: 'INSERT_ZONE_FAILURE',
  UPDATE_ZONE_REQUEST: 'UPDATE_ZONE_REQUEST',
  UPDATE_ZONE_SUCCESS: 'UPDATE_ZONE_SUCCESS',
  UPDATE_ZONE_FAILURE: 'UPDATE_ZONE_FAILURE',
  DELETE_ZONE_REQUEST: 'DELETE_ZONE_REQUEST',
  DELETE_ZONE_SUCCESS: 'DELETE_ZONE_SUCCESS',
  DELETE_ZONE_FAILURE: 'DELETE_ZONE_FAILURE',
  UPDATE_CURRENT_ZONE: 'UPDATE_CURRENT_ZONE',
  VALIDATE_ZONE: 'VALIDATE_ZONE',
  MODAL_ZONE: 'MODAL_ZONE',
  HANDLE_DELETE_ZONE: 'HANDLE_DELETE_ZONE',
  HANDLE_UPDATE_ZONE: 'HANDLE_UPDATE_ZONE',
  INIT_UPDATE_ZONE: 'INIT_UPDATE_ZONE',
  SEARCH_ZONE: 'SEARCH_ZONE',
  ONCHANGE_LOCATION_ZONE: 'ONCHANGE_LOCATION_ZONE',
  ONCHANGE_DATACENTER_ZONE: 'ONCHANGE_DATACENTER_ZONE',
  ONCHANGE_ROOM_ZONE: 'ONCHANGE_ROOM_ZONE',
  HANDLE_VIEW_IMAGE_ZONE: 'HANDLE_VIEW_IMAGE_ZONE',
  HANDLE_CLOSE_VIEW_IMAGE_ZONE: 'HANDLE_CLOSE_VIEW_IMAGE_ZONE',
  //------------ end zones ------------//
  //------------ customers ------------//
  GET_CUSTOMERS_SUCCESS: 'GET_CUSTOMERS_SUCCESS',
  GET_CUSTOMERS_FAILURE: 'GET_CUSTOMERS_FAILURE',
  GET_CUSTOMER_OTHER_SUCCESS: 'GET_CUSTOMER_OTHER_SUCCESS',
  GET_CUSTOMER_OTHER_FAILURE: 'GET_CUSTOMER_OTHER_FAILURE',
  GET_CUSTOMERS_BY_ID_SUCCESS: 'GET_CUSTOMERS_BY_ID_SUCCESS',
  GET_CUSTOMERS_BY_ID_FAILURE: 'GET_CUSTOMERS_BY_ID_FAILURE',
  PAGINATION_CUSTOMERS: "PAGINATION_CUSTOMERS",
  PAGINATION_CUSTOMERS_CLEAR: "PAGINATION_CUSTOMERS_CLEAR",
  ON_PAGE_CHANGE_CUSTOMERS: "ON_PAGE_CHANGE_CUSTOMERS",
  GET_CUSTOMER_PARENTS_SUCCESS: 'GET_CUSTOMER_PARENTS_SUCCESS',
  GET_CUSTOMER_PARENTS_FAILURE: 'GET_CUSTOMER_PARENTS_FAILURE',
  INSERT_CUSTOMER_REQUEST: 'INSERT_CUSTOMER_REQUEST',
  INSERT_CUSTOMER_SUCCESS: 'INSERT_CUSTOMER_SUCCESS',
  INSERT_CUSTOMER_FAILURE: 'INSERT_CUSTOMER_FAILURE',
  UPDATE_CUSTOMER_REQUEST: 'UPDATE_CUSTOMER_REQUEST',
  UPDATE_CUSTOMER_SUCCESS: 'UPDATE_CUSTOMER_SUCCESS',
  UPDATE_CUSTOMER_FAILURE: 'UPDATE_CUSTOMER_FAILURE',
  DELETE_CUSTOMER_REQUEST: 'DELETE_CUSTOMER_REQUEST',
  DELETE_CUSTOMER_SUCCESS: 'DELETE_CUSTOMER_SUCCESS',
  DELETE_CUSTOMER_FAILURE: 'DELETE_CUSTOMER_FAILURE',
  UPDATE_CURRENT_CUSTOMER: 'UPDATE_CURRENT_CUSTOMER',
  VALIDATE_CUSTOMER: 'VALIDATE_CUSTOMER',
  MODAL_CUSTOMER: 'MODAL_CUSTOMER',
  HANDLE_DELETE_CUSTOMER: 'HANDLE_DELETE_CUSTOMER',
  HANDLE_UPDATE_CUSTOMER: 'HANDLE_UPDATE_CUSTOMER',
  INIT_UPDATE_CUSTOMER: 'INIT_UPDATE_CUSTOMER',
  SEARCH_CUSTOMER: 'SEARCH_CUSTOMER',
  //------------ end customers ------------//
  //------------ departments ------------//
  GET_DEPARTMENTS_SUCCESS: 'GET_DEPARTMENTS_SUCCESS',
  GET_DEPARTMENTS_FAILURE: 'GET_DEPARTMENTS_FAILURE',
  GET_DEPARTMENT_OTHER_SUCCESS: 'GET_DEPARTMENT_OTHER_SUCCESS',
  GET_DEPARTMENT_OTHER_FAILURE: 'GET_DEPARTMENT_OTHER_FAILURE',
  GET_DEPARTMENTS_BY_ID_SUCCESS: 'GET_DEPARTMENTS_BY_ID_SUCCESS',
  GET_DEPARTMENTS_BY_ID_FAILURE: 'GET_DEPARTMENTS_BY_ID_FAILURE',
  PAGINATION_DEPARTMENTS: "PAGINATION_DEPARTMENTS",
  PAGINATION_DEPARTMENTS_CLEAR: "PAGINATION_DEPARTMENTS_CLEAR",
  ON_PAGE_CHANGE_DEPARTMENTS: "ON_PAGE_CHANGE_DEPARTMENTS",
  GET_DEPARTMENT_PARENTS_SUCCESS: 'GET_DEPARTMENT_PARENTS_SUCCESS',
  GET_DEPARTMENT_PARENTS_FAILURE: 'GET_DEPARTMENT_PARENTS_FAILURE',
  INSERT_DEPARTMENT_REQUEST: 'INSERT_DEPARTMENT_REQUEST',
  INSERT_DEPARTMENT_SUCCESS: 'INSERT_DEPARTMENT_SUCCESS',
  INSERT_DEPARTMENT_FAILURE: 'INSERT_DEPARTMENT_FAILURE',
  UPDATE_DEPARTMENT_REQUEST: 'UPDATE_DEPARTMENT_REQUEST',
  UPDATE_DEPARTMENT_SUCCESS: 'UPDATE_DEPARTMENT_SUCCESS',
  UPDATE_DEPARTMENT_FAILURE: 'UPDATE_DEPARTMENT_FAILURE',
  DELETE_DEPARTMENT_REQUEST: 'DELETE_DEPARTMENT_REQUEST',
  DELETE_DEPARTMENT_SUCCESS: 'DELETE_DEPARTMENT_SUCCESS',
  DELETE_DEPARTMENT_FAILURE: 'DELETE_DEPARTMENT_FAILURE',
  UPDATE_CURRENT_DEPARTMENT: 'UPDATE_CURRENT_DEPARTMENT',
  VALIDATE_DEPARTMENT: 'VALIDATE_DEPARTMENT',
  MODAL_DEPARTMENT: 'MODAL_DEPARTMENT',
  HANDLE_DELETE_DEPARTMENT: 'HANDLE_DELETE_DEPARTMENT',
  HANDLE_UPDATE_DEPARTMENT: 'HANDLE_UPDATE_DEPARTMENT',
  INIT_UPDATE_DEPARTMENT: 'INIT_UPDATE_DEPARTMENT',
  SEARCH_DEPARTMENT: 'SEARCH_DEPARTMENT',
  //------------ end departments ------------//
  //------------ regions ------------//
  GET_REGIONS_SUCCESS: 'GET_REGIONS_SUCCESS',
  GET_REGIONS_FAILURE: 'GET_REGIONS_FAILURE',
  GET_REGION_OTHER_SUCCESS: 'GET_REGION_OTHER_SUCCESS',
  GET_REGION_OTHER_FAILURE: 'GET_REGION_OTHER_FAILURE',
  GET_REGIONS_BY_ID_SUCCESS: 'GET_REGIONS_BY_ID_SUCCESS',
  GET_REGIONS_BY_ID_FAILURE: 'GET_REGIONS_BY_ID_FAILURE',
  PAGINATION_REGIONS: "PAGINATION_REGIONS",
  PAGINATION_REGIONS_CLEAR: "PAGINATION_REGIONS_CLEAR",
  ON_PAGE_CHANGE_REGIONS: "ON_PAGE_CHANGE_REGIONS",
  GET_REGION_PARENTS_SUCCESS: 'GET_REGION_PARENTS_SUCCESS',
  GET_REGION_PARENTS_FAILURE: 'GET_REGION_PARENTS_FAILURE',
  INSERT_REGION_REQUEST: 'INSERT_REGION_REQUEST',
  INSERT_REGION_SUCCESS: 'INSERT_REGION_SUCCESS',
  INSERT_REGION_FAILURE: 'INSERT_REGION_FAILURE',
  UPDATE_REGION_REQUEST: 'UPDATE_REGION_REQUEST',
  UPDATE_REGION_SUCCESS: 'UPDATE_REGION_SUCCESS',
  UPDATE_REGION_FAILURE: 'UPDATE_REGION_FAILURE',
  DELETE_REGION_REQUEST: 'DELETE_REGION_REQUEST',
  DELETE_REGION_SUCCESS: 'DELETE_REGION_SUCCESS',
  DELETE_REGION_FAILURE: 'DELETE_REGION_FAILURE',
  UPDATE_CURRENT_REGION: 'UPDATE_CURRENT_REGION',
  VALIDATE_REGION: 'VALIDATE_REGION',
  MODAL_REGION: 'MODAL_REGION',
  HANDLE_DELETE_REGION: 'HANDLE_DELETE_REGION',
  HANDLE_UPDATE_REGION: 'HANDLE_UPDATE_REGION',
  INIT_UPDATE_REGION: 'INIT_UPDATE_REGION',
  SEARCH_REGION: 'SEARCH_REGION',
  //------------ end regions ------------//
  //------------ device types ------------//
  GET_DEVICE_TYPES_SUCCESS: 'GET_DEVICE_TYPES_SUCCESS',
  GET_DEVICE_TYPES_FAILURE: 'GET_DEVICE_TYPES_FAILURE',
  GET_DEVICE_TYPE_OTHER_SUCCESS: 'GET_DEVICE_TYPE_OTHER_SUCCESS',
  GET_DEVICE_TYPE_OTHER_FAILURE: 'GET_DEVICE_TYPE_OTHER_FAILURE',
  GET_DEVICE_TYPES_BY_ID_SUCCESS: 'GET_DEVICE_TYPES_BY_ID_SUCCESS',
  GET_DEVICE_TYPES_BY_ID_FAILURE: 'GET_DEVICE_TYPES_BY_ID_FAILURE',
  PAGINATION_DEVICE_TYPES: "PAGINATION_DEVICE_TYPES",
  PAGINATION_DEVICE_TYPES_CLEAR: "PAGINATION_DEVICE_TYPES_CLEAR",
  ON_PAGE_CHANGE_DEVICE_TYPES: "ON_PAGE_CHANGE_DEVICE_TYPES",
  GET_DEVICE_TYPE_PARENTS_SUCCESS: 'GET_DEVICE_TYPE_PARENTS_SUCCESS',
  GET_DEVICE_TYPE_PARENTS_FAILURE: 'GET_DEVICE_TYPE_PARENTS_FAILURE',
  INSERT_DEVICE_TYPE_REQUEST: 'INSERT_DEVICE_TYPE_REQUEST',
  INSERT_DEVICE_TYPE_SUCCESS: 'INSERT_DEVICE_TYPE_SUCCESS',
  INSERT_DEVICE_TYPE_FAILURE: 'INSERT_DEVICE_TYPE_FAILURE',
  IMPORT_DEVICE_TYPE_SUCCESS: 'IMPORT_DEVICE_TYPE_SUCCESS',
  IMPORT_DEVICE_TYPE_FAILURE: 'IMPORT_DEVICE_TYPE_FAILURE',
  UPDATE_DEVICE_TYPE_REQUEST: 'UPDATE_DEVICE_TYPE_REQUEST',
  UPDATE_DEVICE_TYPE_SUCCESS: 'UPDATE_DEVICE_TYPE_SUCCESS',
  UPDATE_DEVICE_TYPE_FAILURE: 'UPDATE_DEVICE_TYPE_FAILURE',
  DELETE_DEVICE_TYPE_REQUEST: 'DELETE_DEVICE_TYPE_REQUEST',
  DELETE_DEVICE_TYPE_SUCCESS: 'DELETE_DEVICE_TYPE_SUCCESS',
  DELETE_DEVICE_TYPE_FAILURE: 'DELETE_DEVICE_TYPE_FAILURE',
  UPDATE_CURRENT_DEVICE_TYPE: 'UPDATE_CURRENT_DEVICE_TYPE',
  VALIDATE_DEVICE_TYPE: 'VALIDATE_DEVICE_TYPE',
  MODAL_DEVICE_TYPE: 'MODAL_DEVICE_TYPE',
  HANDLE_DELETE_DEVICE_TYPE: 'HANDLE_DELETE_DEVICE_TYPE',
  HANDLE_UPDATE_DEVICE_TYPE: 'HANDLE_UPDATE_DEVICE_TYPE',
  INIT_UPDATE_DEVICE_TYPE: 'INIT_UPDATE_DEVICE_TYPE',
  SEARCH_DEVICE_TYPE: 'SEARCH_DEVICE_TYPE',
  //------------ end device types ------------//
  //------------ device templates ------------//
  GET_DEVICE_TEMPLATES_SUCCESS: 'GET_DEVICE_TEMPLATES_SUCCESS',
  GET_DEVICE_TEMPLATES_FAILURE: 'GET_DEVICE_TEMPLATES_FAILURE',
  GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS: 'GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS',
  GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE: 'GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE',
  GET_DEVICE_TEMPLATE_OTHER_SUCCESS: 'GET_DEVICE_TEMPLATE_OTHER_SUCCESS',
  GET_DEVICE_TEMPLATE_OTHER_FAILURE: 'GET_DEVICE_TEMPLATE_OTHER_FAILURE',
  GET_DEVICE_TEMPLATES_BY_ID_SUCCESS: 'GET_DEVICE_TEMPLATES_BY_ID_SUCCESS',
  GET_DEVICE_TEMPLATES_BY_ID_FAILURE: 'GET_DEVICE_TEMPLATES_BY_ID_FAILURE',
  PAGINATION_DEVICE_TEMPLATES: "PAGINATION_DEVICE_TEMPLATES",
  PAGINATION_DEVICE_TEMPLATES_CLEAR: "PAGINATION_DEVICE_TEMPLATES_CLEAR",
  ON_PAGE_CHANGE_DEVICE_TEMPLATES: "ON_PAGE_CHANGE_DEVICE_TEMPLATES",
  GET_DEVICE_TEMPLATE_PARENTS_SUCCESS: 'GET_DEVICE_TEMPLATE_PARENTS_SUCCESS',
  GET_DEVICE_TEMPLATE_PARENTS_FAILURE: 'GET_DEVICE_TEMPLATE_PARENTS_FAILURE',
  INSERT_DEVICE_TEMPLATE_REQUEST: 'INSERT_DEVICE_TEMPLATE_REQUEST',
  INSERT_DEVICE_TEMPLATE_SUCCESS: 'INSERT_DEVICE_TEMPLATE_SUCCESS',
  INSERT_DEVICE_TEMPLATE_FAILURE: 'INSERT_DEVICE_TEMPLATE_FAILURE',
  IMPORT_DEVICE_TEMPLATE_SUCCESS: 'IMPORT_DEVICE_TEMPLATE_SUCCESS',
  IMPORT_DEVICE_TEMPLATE_FAILURE: 'IMPORT_DEVICE_TEMPLATE_FAILURE',
  UPDATE_DEVICE_TEMPLATE_REQUEST: 'UPDATE_DEVICE_TEMPLATE_REQUEST',
  UPDATE_DEVICE_TEMPLATE_SUCCESS: 'UPDATE_DEVICE_TEMPLATE_SUCCESS',
  UPDATE_DEVICE_TEMPLATE_FAILURE: 'UPDATE_DEVICE_TEMPLATE_FAILURE',
  DELETE_DEVICE_TEMPLATE_REQUEST: 'DELETE_DEVICE_TEMPLATE_REQUEST',
  DELETE_DEVICE_TEMPLATE_SUCCESS: 'DELETE_DEVICE_TEMPLATE_SUCCESS',
  DELETE_DEVICE_TEMPLATE_FAILURE: 'DELETE_DEVICE_TEMPLATE_FAILURE',
  UPDATE_CURRENT_DEVICE_TEMPLATE: 'UPDATE_CURRENT_DEVICE_TEMPLATE',
  VALIDATE_DEVICE_TEMPLATE: 'VALIDATE_DEVICE_TEMPLATE',
  MODAL_DEVICE_TEMPLATE: 'MODAL_DEVICE_TEMPLATE',
  HANDLE_DELETE_DEVICE_TEMPLATE: 'HANDLE_DELETE_DEVICE_TEMPLATE',
  HANDLE_UPDATE_DEVICE_TEMPLATE: 'HANDLE_UPDATE_DEVICE_TEMPLATE',
  INIT_UPDATE_DEVICE_TEMPLATE: 'INIT_UPDATE_DEVICE_TEMPLATE',
  SEARCH_DEVICE_TEMPLATE: 'SEARCH_DEVICE_TEMPLATE',
  //------------ end device templates ------------//
  //------------ racks ------------//
  GET_RACKS_SUCCESS: 'GET_RACKS_SUCCESS',
  GET_RACKS_FAILURE: 'GET_RACKS_FAILURE',
  GET_RACK_OTHER_SUCCESS: 'GET_RACK_OTHER_SUCCESS',
  GET_RACK_OTHER_FAILURE: 'GET_RACK_OTHER_FAILURE',
  GET_RACK_OTHER_PLUS_SUCCESS: 'GET_RACK_OTHER_PLUS_SUCCESS',
  GET_RACK_OTHER_PLUS_FAILURE: 'GET_RACK_OTHER_PLUS_FAILURE',
  GET_RACK_BY_ID_SUCCESS: 'GET_RACK_BY_ID_SUCCESS',
  GET_RACK_BY_ID_FAILURE: 'GET_RACK_BY_ID_FAILURE',
  GET_RACKS_BY_ZONE_REQUEST: 'GET_RACKS_BY_ZONE_REQUEST',
  GET_RACKS_BY_ZONE_SUCCESS: 'GET_RACKS_BY_ZONE_SUCCESS',
  GET_RACKS_BY_ZONE_FAILURE: 'GET_RACKS_BY_ZONE_FAILURE',
  GET_RACKS_BY_ZONES_REQUEST: 'GET_RACKS_BY_ZONES_REQUEST',
  GET_RACKS_BY_ZONES_SUCCESS: 'GET_RACKS_BY_ZONES_SUCCESS',
  GET_RACKS_BY_ZONES_FAILURE: 'GET_RACKS_BY_ZONES_FAILURE',
  GET_RACKS_BY_ROOM_REQUEST: 'GET_RACKS_BY_ROOM_REQUEST',
  GET_RACKS_BY_ROOM_SUCCESS: 'GET_RACKS_BY_ROOM_SUCCESS',
  GET_RACKS_BY_ROOM_FAILURE: 'GET_RACKS_BY_ROOM_FAILURE',
  GET_DEVICE_BY_ID_SUCCESS: 'GET_DEVICE_BY_ID_SUCCESS',
  GET_BOOKING_U_ID_SUCCESS: 'GET_BOOKING_U_ID_SUCCESS',
  PAGINATION_RACKS: "PAGINATION_RACKS",
  PAGINATION_RACKS_CLEAR: "PAGINATION_RACKS_CLEAR",
  ON_PAGE_CHANGE_RACKS: "ON_PAGE_CHANGE_RACKS",
  GET_RACK_PARENTS_SUCCESS: 'GET_RACK_PARENTS_SUCCESS',
  GET_RACK_PARENTS_FAILURE: 'GET_RACK_PARENTS_FAILURE',
  INSERT_RACK_REQUEST: 'INSERT_RACK_REQUEST',
  INSERT_RACK_SUCCESS: 'INSERT_RACK_SUCCESS',
  INSERT_RACK_FAILURE: 'INSERT_RACK_FAILURE',
  UPDATE_RACK_REQUEST: 'UPDATE_RACK_REQUEST',
  UPDATE_RACK_SUCCESS: 'UPDATE_RACK_SUCCESS',
  UPDATE_RACK_FAILURE: 'UPDATE_RACK_FAILURE',
  DELETE_RACK_REQUEST: 'DELETE_RACK_REQUEST',
  DELETE_RACK_SUCCESS: 'DELETE_RACK_SUCCESS',
  DELETE_RACK_FAILURE: 'DELETE_RACK_FAILURE',
  UPDATE_CURRENT_RACK: 'UPDATE_CURRENT_RACK',
  BOOKING_U_RACK_REQUEST: 'BOOKING_U_RACK_REQUEST',
  BOOKING_U_RACK_SUCCESS: 'BOOKING_U_RACK_SUCCESS',
  BOOKING_U_RACK_FAILURE: 'BOOKING_U_RACK_FAILURE',
  VALIDATE_RACK: 'VALIDATE_RACK',
  MODAL_RACK: 'MODAL_RACK',
  HANDLE_DELETE_RACK: 'HANDLE_DELETE_RACK',
  HANDLE_UPDATE_RACK: 'HANDLE_UPDATE_RACK',
  INIT_UPDATE_RACK: 'INIT_UPDATE_RACK',
  SEARCH_RACK: 'SEARCH_RACK',
  ONCHANGE_LOCATION_RACK: 'ONCHANGE_LOCATION_RACK',
  ONCHANGE_DATACENTER_RACK: 'ONCHANGE_DATACENTER_RACK',
  ONCHANGE_ROOM_RACK: 'ONCHANGE_ROOM_RACK',
  ONCHANGE_ZONE_RACK: 'ONCHANGE_ZONE_RACK',
  HANDLE_BOOKING_U_RACK: 'HANDLE_BOOKING_U_RACK',
  HANDLE_ADD_DEVICE: 'HANDLE_ADD_DEVICE',
  ADD_DEVICE_RACK_SUCCESS: 'ADD_DEVICE_RACK_SUCCESS',
  ADD_DEVICE_RACK_FAILURE: 'ADD_DEVICE_RACK_FAILURE',
  DELETE_BOOKING_RACK_SUCCESS: 'DELETE_BOOKING_RACK_SUCCESS',
  DELETE_BOOKING_RACK_FAILURE: 'DELETE_BOOKING_RACK_FAILURE',
  DELETE_DEVICE_RACK_SUCCESS: 'DELETE_DEVICE_RACK_SUCCESS',
  DELETE_DEVICE_RACK_FAILURE: 'DELETE_DEVICE_RACK_FAILURE',
  HANDLE_MOVE_U: 'HANDLE_MOVE_U',
  SAVE_MOVE_U_SUCCESS: 'SAVE_MOVE_U_SUCCESS',
  SAVE_MOVE_U_FAILURE: 'SAVE_MOVE_U_FAILURE',
  GET_RACK_BY_ID2_SUCCESS: 'GET_RACK_BY_ID2_SUCCESS',
  GET_RACK_BY_ID2_FAILURE: 'GET_RACK_BY_ID2_FAILURE',
  IMPORT_DEVICE_TO_RACK: 'IMPORT_DEVICE_TO_RACK',
  //------------ end racks ------------//
  //------------ layouts ------------//
  GET_LAYOUTS_SUCCESS: 'GET_LAYOUTS_SUCCESS',
  GET_LAYOUTS_FAILURE: 'GET_LAYOUTS_FAILURE',
  GET_LAYOUT_OTHER_SUCCESS: 'GET_LAYOUT_OTHER_SUCCESS',
  GET_LAYOUT_OTHER_FAILURE: 'GET_LAYOUT_OTHER_FAILURE',
  GET_LAYOUTS_BY_ID_SUCCESS: 'GET_LAYOUTS_BY_ID_SUCCESS',
  GET_LAYOUTS_BY_ID_FAILURE: 'GET_LAYOUTS_BY_ID_FAILURE',
  PAGINATION_LAYOUTS: "PAGINATION_LAYOUTS",
  PAGINATION_LAYOUTS_CLEAR: "PAGINATION_LAYOUTS_CLEAR",
  ON_PAGE_CHANGE_LAYOUTS: "ON_PAGE_CHANGE_LAYOUTS",
  GET_LAYOUT_PARENTS_SUCCESS: 'GET_LAYOUT_PARENTS_SUCCESS',
  GET_LAYOUT_PARENTS_FAILURE: 'GET_LAYOUT_PARENTS_FAILURE',
  INSERT_RACK_LAYOUT_REQUEST: 'INSERT_RACK_LAYOUT_REQUEST',
  INSERT_RACK_LAYOUT_SUCCESS: 'INSERT_RACK_LAYOUT_SUCCESS',
  INSERT_RACK_LAYOUT_FAILURE: 'INSERT_RACK_LAYOUT_FAILURE',
  UPDATE_RACK_LAYOUT_REQUEST: 'UPDATE_RACK_LAYOUT_REQUEST',
  UPDATE_RACK_LAYOUT_SUCCESS: 'UPDATE_RACK_LAYOUT_SUCCESS',
  UPDATE_RACK_LAYOUT_FAILURE: 'UPDATE_RACK_LAYOUT_FAILURE',
  DELETE_RACK_LAYOUT_REQUEST: 'DELETE_RACK_LAYOUT_REQUEST',
  DELETE_RACK_LAYOUT_SUCCESS: 'DELETE_RACK_LAYOUT_SUCCESS',
  DELETE_RACK_LAYOUT_FAILURE: 'DELETE_RACK_LAYOUT_FAILURE',
  UPDATE_CURRENT_LAYOUT: 'UPDATE_CURRENT_LAYOUT',
  UPDATE_LOADING_LAYOUT: 'UPDATE_LOADING_LAYOUT',
  VALIDATE_LAYOUT: 'VALIDATE_LAYOUT',
  MODAL_LAYOUT: 'MODAL_LAYOUT',
  HANDLE_DELETE_RACK_LAYOUT: 'HANDLE_DELETE_RACK_LAYOUT',
  HANDLE_UPDATE_LAYOUT: 'HANDLE_UPDATE_LAYOUT',
  INIT_UPDATE_LAYOUT: 'INIT_UPDATE_LAYOUT',
  SEARCH_LAYOUT: 'SEARCH_LAYOUT',
  ONCHANGE_LOCATION_LAYOUT: 'ONCHANGE_LOCATION_LAYOUT',
  ONCHANGE_DATACENTER_LAYOUT: 'ONCHANGE_DATACENTER_LAYOUT',
  ONCHANGE_ROOM_LAYOUT: 'ONCHANGE_ROOM_LAYOUT',
  ONCHANGE_ZONE_LAYOUT: 'ONCHANGE_ZONE_LAYOUT',
  //------------ end layouts ------------//
  //------------ contracts ------------//
  GET_CONTRACTS_SUCCESS: 'GET_CONTRACTS_SUCCESS',
  GET_CONTRACTS_FAILURE: 'GET_CONTRACTS_FAILURE',
  GET_CONTRACTS_BY_ID_SUCCESS: 'GET_CONTRACTS_BY_ID_SUCCESS',
  GET_CONTRACTS_BY_ID_FAILURE: 'GET_CONTRACTS_BY_ID_FAILURE',
  PAGINATION_CONTRACTS: "PAGINATION_CONTRACTS",
  PAGINATION_CONTRACTS_CLEAR: "PAGINATION_CONTRACTS_CLEAR",
  ON_PAGE_CHANGE_CONTRACTS: "ON_PAGE_CHANGE_CONTRACTS",
  GET_CONTRACT_PARENTS_SUCCESS: 'GET_CONTRACT_PARENTS_SUCCESS',
  GET_CONTRACT_PARENTS_FAILURE: 'GET_CONTRACT_PARENTS_FAILURE',
  INSERT_CONTRACT_REQUEST: 'INSERT_CONTRACT_REQUEST',
  INSERT_CONTRACT_SUCCESS: 'INSERT_CONTRACT_SUCCESS',
  INSERT_CONTRACT_FAILURE: 'INSERT_CONTRACT_FAILURE',
  UPDATE_CONTRACT_REQUEST: 'UPDATE_CONTRACT_REQUEST',
  UPDATE_CONTRACT_SUCCESS: 'UPDATE_CONTRACT_SUCCESS',
  UPDATE_CONTRACT_FAILURE: 'UPDATE_CONTRACT_FAILURE',
  DELETE_CONTRACT_REQUEST: 'DELETE_CONTRACT_REQUEST',
  DELETE_CONTRACT_SUCCESS: 'DELETE_CONTRACT_SUCCESS',
  DELETE_CONTRACT_FAILURE: 'DELETE_CONTRACT_FAILURE',
  UPDATE_CURRENT_CONTRACT: 'UPDATE_CURRENT_CONTRACT',
  VALIDATE_CONTRACT: 'VALIDATE_CONTRACT',
  MODAL_CONTRACT: 'MODAL_CONTRACT',
  HANDLE_DELETE_CONTRACT: 'HANDLE_DELETE_CONTRACT',
  HANDLE_UPDATE_CONTRACT: 'HANDLE_UPDATE_CONTRACT',
  INIT_UPDATE_CONTRACT: 'INIT_UPDATE_CONTRACT',
  SEARCH_CONTRACT: 'SEARCH_CONTRACT',
  //------------ end contracts ------------//
  //------------ loading ------------//
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP' //------------ end loading ------------//

};
/* harmony default export */ __webpack_exports__["default"] = (actionTypes);

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const dotenv = require('dotenv');
// dotenv.config();
var node_env = "development";
var config = {};
config.production = {
  originBackend: 'https://raca.ast.fpt.net',
  originFrontend: 'https://raca.ast.fpt.net',
  originRoot: 'https://ast.fpt.net',
  prevOrigin: '/raca-api',
  prevURL: '' // originBackend: 'http://172.27.229.69:4000'

};
config.development = {
  // originBackend: `${protocol}//${hostname}:4000`
  originBackend: "http://localhost:3001",
  originFrontend: 'http://localhost:3000',
  // originRoot: 'https://ast.fpt.net',
  originRoot: 'https://localhost:4000',
  // originRoot: 'https://172.27.137.72:4000',
  // originRoot: 'http://172.27.137.72:4000',
  prevOrigin: '/raca-api',
  prevURL: ''
};
config.environment = 'development';

if (~['production'].indexOf(node_env)) {
  config.environment = 'production';
} // console.log('ENV: ', config.environment ,config);


module.exports = config;

/***/ }),

/***/ "./static/awesome/css/font-awesome.css":
/*!*********************************************!*\
  !*** ./static/awesome/css/font-awesome.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/images/default_image.png":
/*!*****************************************!*\
  !*** ./static/images/default_image.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAMcCAMAAACo9Dz9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEZDRUU0QjREQTIxMUU0ODAwMUVCOTYwMzA5MzE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEZDRUU0QzREQTIxMUU0ODAwMUVCOTYwMzA5MzE3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRkNFRTQ5NERBMjExRTQ4MDAxRUI5NjAzMDkzMTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRkNFRTRBNERBMjExRTQ4MDAxRUI5NjAzMDkzMTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D7rN8gAAAMZQTFRFvL7A5+jpuLm7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"

/***/ }),

/***/ "./static/images/icons8-r.png":
/*!************************************!*\
  !*** ./static/images/icons8-r.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/user.png":
/*!********************************!*\
  !*** ./static/images/user.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 5:
/*!********************************************************!*\
  !*** multi ./pages/categories/device-template-edit.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/categories/device-template-edit.js */"./pages/categories/device-template-edit.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=device-template-edit.js.map