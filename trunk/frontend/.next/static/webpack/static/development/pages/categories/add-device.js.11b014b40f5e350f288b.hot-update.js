webpackHotUpdate("static/development/pages/categories/add-device.js",{

/***/ "./pages/categories/add-device.js":
/*!****************************************!*\
  !*** ./pages/categories/add-device.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _src_components_Layout_DashboadLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Layout/DashboadLayout */ "./src/components/Layout/DashboadLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/redux/_actions/categories/rackA */ "./src/redux/_actions/categories/rackA.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/utils/config */ "./src/utils/config.js");
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_utils_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var prevURL = _src_utils_config__WEBPACK_IMPORTED_MODULE_9___default.a[_src_utils_config__WEBPACK_IMPORTED_MODULE_9___default.a.environment].prevURL;


var AddDevice =
/*#__PURE__*/
function (_Component) {
  _inherits(AddDevice, _Component);

  function AddDevice(props) {
    var _this;

    _classCallCheck(this, AddDevice);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddDevice).call(this, props));
    _this.state = {
      disableFormDevice: true,
      dataDevice: []
    };
    return _this;
  }

  _createClass(AddDevice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          racks = _this$props.racks,
          dispatch = _this$props.dispatch;
      var _racks$action = racks.action,
          action = _racks$action === void 0 ? '' : _racks$action,
          _racks$loading = racks.loading,
          loading = _racks$loading === void 0 ? 0 : _racks$loading,
          _racks$current = racks.current,
          current = _racks$current === void 0 ? {} : _racks$current;

      var _current = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('current');

      var _addDevice = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('addDevice');

      if (_current && _addDevice) {
        _current = JSON.parse(_current);
        dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].updateCurrent('current', _current));
        _addDevice = JSON.parse(_addDevice);
        dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].handleAddDevice(_addDevice));
        this.resetCookies();
      }

      if (action === 'update' && loading === 0 && lodash__WEBPACK_IMPORTED_MODULE_8___default.a.size(current) === 0) {
        var _racks$originalUrl = racks.originalUrl,
            originalUrl = _racks$originalUrl === void 0 ? '' : _racks$originalUrl;
        var regex = new RegExp(/id\=(\d+)/);
        var find = originalUrl.match(regex);
        var id = find ? parseInt(find[1]) : null;
        if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isNull(id)) dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].getDeviceById({
          deviceId: id
        }));
      }

      this.getData();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var racks = nextProps.racks;
      var _racks$action2 = racks.action,
          action = _racks$action2 === void 0 ? '' : _racks$action2,
          _racks$loading2 = racks.loading,
          loading = _racks$loading2 === void 0 ? 0 : _racks$loading2,
          _racks$current2 = racks.current,
          current = _racks$current2 === void 0 ? {} : _racks$current2;
      var _racks$addDevice = racks.addDevice,
          addDevice = _racks$addDevice === void 0 ? {} : _racks$addDevice;

      if (action === 'insert' && !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(addDevice.saveSuccess) && addDevice.saveSuccess) {
        var url = prevURL + '/categories/rack-view?id=' + current.rackId;
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(url);
      } // if((action === 'insert' && loading === 2 && !_.isUndefined(current.deviceId) && current.deviceId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
      //     Router.push('/categories/rack-view');
      // }
      // if(action === 'update' && loading === 0 && _.size(current) > 0) {
      //     if(current.parentId) this.setState({isParent: false});
      // }

    }
  }, {
    key: "getData",
    value: function getData() {
      this.props.dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].getOthersPlus());
    }
  }, {
    key: "getHeightMax",
    value: function getHeightMax() {
      var racks = this.props.racks;
      var _racks$addDevice2 = racks.addDevice,
          addDevice = _racks$addDevice2 === void 0 ? {} : _racks$addDevice2,
          _racks$current3 = racks.current,
          current = _racks$current3 === void 0 ? {} : _racks$current3;
      var height = parseInt(addDevice.positionU);

      if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(current.bookingUs) || !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isNull(current.bookingUs)) {
        // co' bookingUs
        var book = current.bookingUs.filter(function (item, index) {
          return item.position === addDevice.position && item.positionU < addDevice.positionU;
        });

        if (book.length > 0) {
          var bookMax = book.reduce(function (prev, curr) {
            return prev.positionU > curr.positionU ? prev : curr;
          });
          height = addDevice.positionU - bookMax.positionU;
        }
      }

      if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(current.devices) || !lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isNull(current.devices)) {
        // co' devices
        var device = current.devices.filter(function (item, index) {
          return item.position === addDevice.position && item.positionU < addDevice.positionU;
        });

        if (device.length > 0) {
          var deviceMax = device.reduce(function (prev, curr) {
            return prev.positionU > curr.positionU ? prev : curr;
          });

          if (addDevice.positionU - deviceMax.positionU < height) {
            height = addDevice.positionU - deviceMax.positionU;
          }
        }
      }

      return height;
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this$props2 = this.props,
          racks = _this$props2.racks,
          dispatch = _this$props2.dispatch;
      var _racks$addDevice3 = racks.addDevice,
          addDevice = _racks$addDevice3 === void 0 ? {} : _racks$addDevice3;
      var err = 0;
      var deviceName = '',
          connectorNumber = '',
          deviceTypeId = '',
          deviceTemplateId = '',
          contract = '',
          ip = '',
          height = '';
      var regexIP = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$");

      if (!addDevice.deviceName) {
        deviceName = 'This field is required';
        err++;
      }

      if (!addDevice.connectorNumber) {
        connectorNumber = 'This field is required';
        err++;
      }

      if (!addDevice.deviceTypeId) {
        deviceTypeId = 'This field is required';
        err++;
      }

      if (!addDevice.deviceTemplateId) {
        deviceTemplateId = 'This field is required';
        err++;
      }

      if (!addDevice.contract) {
        contract = 'This field is required';
      } //
      // if (!addDevice.height) {
      //     height = 'This field is required';
      //     err++;
      // } else if (parseInt(addDevice.height) > this.getHeightMax()) {
      //     height = 'Height less than or equal ' + this.getHeightMax();
      //     err++;
      // }


      if (err === 0) {
        return true;
      }

      console.log("hei", this.getHeightMax());
      dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].validate({
        deviceName: deviceName,
        connectorNumber: connectorNumber,
        deviceTypeId: deviceTypeId,
        deviceTemplateId: deviceTemplateId,
        contract: contract,
        ip: ip,
        height: height
      }));
      return false;
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      if (!this.validate()) return false;
      var _this$props3 = this.props,
          _this$props3$racks = _this$props3.racks,
          racks = _this$props3$racks === void 0 ? {} : _this$props3$racks,
          dispatch = _this$props3.dispatch;
      var _racks$current4 = racks.current,
          current = _racks$current4 === void 0 ? {} : _racks$current4,
          _racks$addDevice4 = racks.addDevice,
          addDevice = _racks$addDevice4 === void 0 ? {} : _racks$addDevice4;

      var data = _objectSpread({
        rackId: current.rackId,
        dataCenterKey: current.dataCenterKey,
        codeRoom: current.codeRoom,
        rackName: current.rackName
      }, addDevice);

      dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].addDevice(data));
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      var _this$props$racks = this.props.racks,
          racks = _this$props$racks === void 0 ? {} : _this$props$racks;

      if (racks.current.rackId) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(prevURL + '/categories/rack-view?id=' + racks.current.rackId);
      } // Router.push('/categories/racks');

    }
  }, {
    key: "handleChangeInput",
    value: function handleChangeInput(e) {
      var _this$props4 = this.props,
          _this$props4$racks = _this$props4.racks,
          racks = _this$props4$racks === void 0 ? {} : _this$props4$racks,
          dispatch = _this$props4.dispatch;
      var _racks$addDevice5 = racks.addDevice,
          addDevice = _racks$addDevice5 === void 0 ? {} : _racks$addDevice5;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].handleAddDevice(_objectSpread({}, addDevice, _defineProperty({}, name, value))));
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(e, data) {
      if (data.name === "deviceTemplateId") {
        this.setState({
          disableFormDevice: false
        });
      }

      var value = data.value,
          name = data.name;
      var _this$props5 = this.props,
          dispatch = _this$props5.dispatch,
          _this$props5$racks = _this$props5.racks,
          racks = _this$props5$racks === void 0 ? {} : _this$props5$racks;
      var _racks$deviceTemplate = racks.deviceTemplate,
          deviceTemplate = _racks$deviceTemplate === void 0 ? [] : _racks$deviceTemplate,
          _racks$addDevice6 = racks.addDevice,
          addDevice = _racks$addDevice6 === void 0 ? {} : _racks$addDevice6;
      var result = deviceTemplate.filter(function (item, index) {
        return item.deviceTypeId === value;
      }).map(function (item) {
        var temp = {
          height: item.height,
          deviceTypeId: item.deviceTypeId,
          deviceTemplateId: item.deviceTemplateId,
          // fullName: '',
          CPU: item.CPU,
          departmentId: "",
          HDD: item.HDD,
          power: item.maxPower,
          RAM: item.RAM
        };
        return temp;
      });
      console.log(result);
      dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].handleAddDevice(_objectSpread({}, addDevice, _defineProperty({}, name, value))));
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      var _this$props$racks2 = this.props.racks,
          racks = _this$props$racks2 === void 0 ? {} : _this$props$racks2;
      var _racks$deviceType = racks.deviceType,
          deviceType = _racks$deviceType === void 0 ? [] : _racks$deviceType;
      var result = deviceType.map(function (item, index) {
        var temp = {
          text: item.deviceTypeName,
          value: item.deviceTypeId
        };
        return temp;
      });
      return result;
    }
  }, {
    key: "getDeviceTemplate",
    value: function getDeviceTemplate() {
      var _this$props$racks3 = this.props.racks,
          racks = _this$props$racks3 === void 0 ? {} : _this$props$racks3;
      var _racks$deviceTemplate2 = racks.deviceTemplate,
          deviceTemplate = _racks$deviceTemplate2 === void 0 ? [] : _racks$deviceTemplate2;
      var result = [];

      if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(racks.addDevice) || lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isUndefined(racks.addDevice.deviceTypeId) || lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isNull(racks.addDevice.deviceTypeId)) {
        return result;
      }

      result = deviceTemplate.filter(function (item, index) {
        return item.deviceTypeId === racks.addDevice.deviceTypeId;
      }).map(function (item) {
        var temp = {
          text: item.deviceTemplateName,
          value: item.deviceTemplateId
        };
        return temp;
      });
      return result;
    }
  }, {
    key: "resetCookies",
    value: function resetCookies() {
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('current');
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('addDevice');
    }
  }, {
    key: "getContracts",
    value: function getContracts() {
      var _this$props$racks4 = this.props.racks,
          racks = _this$props$racks4 === void 0 ? {} : _this$props$racks4;
      var _racks$contracts = racks.contracts,
          contracts = _racks$contracts === void 0 ? [] : _racks$contracts;
      var result = contracts.map(function (item, index) {
        var temp = {
          text: item.contractId + ' - ' + item.contractName,
          value: item.contractId
        };
        return temp;
      });
      return result;
    }
  }, {
    key: "getDepartments",
    value: function getDepartments() {
      var _this$props$racks5 = this.props.racks,
          racks = _this$props$racks5 === void 0 ? {} : _this$props$racks5;
      var _racks$departments = racks.departments,
          departments = _racks$departments === void 0 ? [] : _racks$departments;
      var result = departments.map(function (item, index) {
        var temp = {
          text: item.departmentName,
          value: item.departmentId
        };
        return temp;
      });
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$racks6 = this.props.racks,
          racks = _this$props$racks6 === void 0 ? {} : _this$props$racks6;
      var _racks$current5 = racks.current,
          current = _racks$current5 === void 0 ? {
        deviceName: '',
        label: '',
        connectorNumber: '',
        position: '',
        positionU: '',
        height: '',
        deviceTypeId: '',
        deviceTemplateId: '',
        contractId: '',
        IP: '',
        // fullName: '',
        CPU: '',
        departmentId: '',
        phone: '',
        HDD: '',
        typeServer: '',
        power: '',
        RAM: ''
      } : _racks$current5,
          _racks$addDevice7 = racks.addDevice,
          addDevice = _racks$addDevice7 === void 0 ? {} : _racks$addDevice7,
          _racks$device = racks.device,
          device = _racks$device === void 0 ? {} : _racks$device,
          _racks$loading3 = racks.loading,
          loading = _racks$loading3 === void 0 ? 0 : _racks$loading3,
          _racks$validate = racks.validate,
          validate = _racks$validate === void 0 ? {
        deviceName: '',
        label: '',
        connectorNumber: '',
        position: '',
        positionU: '',
        height: '',
        deviceTypeId: '',
        deviceTemplateId: '',
        contractId: '',
        IP: '',
        // fullName: '',
        CPU: '',
        departmentId: '',
        phone: '',
        HDD: '',
        typeServer: '',
        power: '',
        RAM: ''
      } : _racks$validate;
      var title = 'Add Device';
      var disableFormDevice = this.state.disableFormDevice;
      var formDevice = [];

      if (disableFormDevice === true) {
        formDevice.push("");
      } else {
        console.log("a");
        formDevice.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          className: "form-group",
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          name: "HDD",
          value: device.HDD,
          disabled: true,
          onChange: this.handleChangeInput.bind(this),
          fluid: true,
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "HDD")
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          className: "form-group",
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          name: "CPU",
          value: device.CPU,
          onChange: this.handleChangeInput.bind(this),
          disabled: true,
          fluid: true,
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "CPU")
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          className: "form-group",
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          name: "RAM",
          value: device.RAM,
          onChange: this.handleChangeInput.bind(this),
          fluid: true,
          disabled: true,
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "RAM")
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          className: "form-group",
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          name: "height",
          value: device.height,
          onChange: this.handleChangeInput.bind(this),
          fluid: true,
          type: "number" // max={42} min={1}
          ,
          disabled: true,
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Height") // error={validate.height? true: false}

        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          className: "form-group",
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          name: "power",
          value: device.power,
          onChange: this.handleChangeInput.bind(this),
          fluid: true,
          disabled: true,
          label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Power")
        })))));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Layout_DashboadLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        divided: "vertically"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        columns: 3
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "rackName",
        value: current.rackName,
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Rack name"),
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "position",
        value: addDevice.position ? addDevice.position + ' - ' + addDevice.positionU : '',
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Position"),
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "deviceName",
        value: device.deviceName,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Device name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Device name",
        error: validate.deviceName ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.deviceName ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.deviceName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "connectorNumber",
        value: device.connectorNumber,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        type: "number",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Connector number ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        placeholder: "Connector number",
        error: validate.connectorNumber ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.connectorNumber ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.connectorNumber)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Dropdown, {
        name: "deviceTypeId",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Device Type ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        fluid: true,
        placeholder: "Select...",
        search: true,
        selection: true,
        clearable: true,
        options: this.getDeviceType(),
        onChange: this.handleSelect.bind(this),
        value: addDevice.deviceTypeId || '',
        error: validate.deviceTypeId ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.deviceTypeId ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.deviceTypeId)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Dropdown, {
        name: "deviceTemplateId",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Device Template ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        fluid: true,
        placeholder: "Select...",
        search: true,
        selection: true,
        clearable: true,
        options: this.getDeviceTemplate(),
        onChange: this.handleSelect.bind(this),
        value: addDevice.deviceTemplateId || '',
        error: validate.deviceTemplateId ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.deviceTemplateId ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.deviceTemplateId)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
        secondary: true,
        type: "submit",
        disabled: loading === 1,
        onClick: this.handleCancel.bind(this)
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Button, {
        primary: true,
        type: "submit",
        disabled: loading === 1,
        onClick: this.handleSave.bind(this)
      }, "Save")))), formDevice, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Dropdown, {
        name: "contractId",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Contract code ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        fluid: true,
        placeholder: "Select...",
        search: true,
        selection: true,
        clearable: true,
        options: this.getContracts(),
        onChange: this.handleSelect.bind(this),
        value: addDevice.contractId || '',
        error: validate.contractId ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
        className: "error-text ".concat(validate.contractId ? '' : 'hide'),
        basic: true,
        color: "red",
        pointing: true
      }, validate.contractId)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Dropdown, {
        name: "departmentId",
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Department ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "error-validate"
        }, "*")),
        fluid: true,
        placeholder: "Select...",
        search: true,
        selection: true,
        clearable: true,
        options: this.getDepartments(),
        onChange: this.handleSelect.bind(this),
        value: addDevice.departmentId || '',
        error: addDevice.departmentId ? true : false
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "phone",
        value: device.phone,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Phone")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "typeServer",
        value: device.typeServer,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Type Server")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        className: "form-group",
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        name: "IP",
        value: device.IP,
        onChange: this.handleChangeInput.bind(this),
        fluid: true,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "IP")
      })))))))));
    }
  }]);

  return AddDevice;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

AddDevice.getInitialProps =
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
            return store.dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].initUpdate({
              originalUrl: originalUrl,
              action: 'update'
            }));

          case 5:
            _context.next = 9;
            break;

          case 7:
            _context.next = 9;
            return store.dispatch(_src_redux_actions_categories_rackA__WEBPACK_IMPORTED_MODULE_7__["rackA"].initUpdate({
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
}(); // const mapStateToProps =({racks}) => ({racks});


var mapStateToProps = function mapStateToProps(state, props) {
  var racks = state.racks;
  var _racks = props.racks;

  if (racks.originalUrl) {
    return {
      racks: racks
    };
  } else {
    return {
      racks: _objectSpread({}, props.racks, racks)
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, null)(AddDevice));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/categories/add-device")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=add-device.js.11b014b40f5e350f288b.hot-update.js.map