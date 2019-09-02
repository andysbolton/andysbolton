/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emulator/emulator.ts":
/*!**********************************!*\
  !*** ./src/emulator/emulator.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Bit */ "./src/emulator/models/Bit.ts");
/* harmony import */ var _models_ByteArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ByteArray */ "./src/emulator/models/ByteArray.ts");
/* harmony import */ var _models_CpuState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/CpuState */ "./src/emulator/models/CpuState.ts");
/* harmony import */ var _models_Uint16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _models_Uint8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./src/emulator/utils/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};






var Emulator = /** @class */ (function () {
    function Emulator(_a) {
        var _this = this;
        var mediator = _a.mediator, debug = _a.debug, test = _a.test;
        this.instructionNumber = 0;
        this.lastInterrupt = 1;
        this.cycles = 0;
        this.test = false;
        this.testComplete = false;
        // prettier-ignore
        this.cycles8080 = [
            //  0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F
            4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4,
            4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4,
            4, 10, 16, 5, 5, 5, 7, 4, 4, 10, 16, 5, 5, 5, 7, 4,
            4, 10, 13, 5, 10, 10, 10, 4, 4, 10, 13, 5, 5, 5, 7, 4,
            5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
            5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
            5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
            7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 5,
            4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
            4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
            4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
            4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
            5, 10, 10, 10, 11, 11, 7, 11, 5, 10, 10, 10, 11, 17, 7, 11,
            5, 10, 10, 10, 11, 11, 7, 11, 5, 10, 10, 10, 11, 17, 7, 11,
            5, 10, 10, 18, 11, 11, 7, 11, 5, 5, 10, 4, 11, 17, 7, 11,
            5, 10, 10, 4, 11, 11, 7, 11, 5, 5, 10, 4, 11, 17, 7, 11 // F
        ];
        // CPU running at 2mhz, 2 interrupts running at 60mhz
        this.cyclesUntilInterrupt = Math.ceil(2000000 / 60 / 2);
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var state, next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        state = this.state;
                        _a.label = 1;
                    case 1:
                        if (!(state.pc.val() > -1)) return [3 /*break*/, 4];
                        if (this.testComplete) {
                            return [3 /*break*/, 4];
                        }
                        if (!(this.instructionNumber % 1000 === 0)) return [3 /*break*/, 3];
                        // sleep for screen painting
                        // TODO: try to wait based on cpu hz
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5); })];
                    case 2:
                        // sleep for screen painting
                        // TODO: try to wait based on cpu hz
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        next = this.readNext();
                        this.cycles = ((this.cycles + next) & 0xffffffff) >>> 0;
                        if (this.cycles >= this.cyclesUntilInterrupt && !this.test) {
                            if (this.state.intEnable.val() === 1) {
                                if (this.lastInterrupt === 2) {
                                    this.generateInterrupt(1);
                                    this.lastInterrupt = 1;
                                }
                                else {
                                    this.generateInterrupt(2);
                                    this.lastInterrupt = 2;
                                }
                                this.state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0);
                            }
                            this.cycles -= this.cyclesUntilInterrupt;
                        }
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this.cycles];
                }
            });
        }); };
        this.log = function (counter, opcode) {
            var state = _this.state;
            console.log("at " + counter + " (0x" + counter.toString(16) + "), instruction " + _this.instructionNumber + ", command 0x" + opcode.toString(16));
            _this.logState(state);
            console.log("cycles: ", _this.cycles);
        };
        this.readNext = function () {
            var state = _this.state;
            var opcode = state.memory[state.pc.val()].val();
            switch (opcode) {
                case 0x00: {
                    // NOP
                    state.pc.incr(1);
                    break;
                }
                case 0x01:
                    // LXI B, D16
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                case 0x02: {
                    // STAX B
                    _this.updateRam(state.bc.val(), state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0x03: {
                    // INX B
                    var val = state.bc.add(1);
                    state.bc = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x04: {
                    // INR B
                    var val = state.b.add(1);
                    _this.setFlags(val);
                    state.b = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x05: {
                    // DCR B
                    var val = state.b.sub(1);
                    _this.setFlags(val);
                    state.b = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x06: {
                    // MVI B, D8
                    state.b = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x07: {
                    // RLC
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = ((state.a.val() & 0x80) >> 7) | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
                    state.pc.incr(1);
                    break;
                }
                case 0x08: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x09: {
                    // DAD B
                    var val = state.hl.add(state.bc);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x0a: {
                    // LDAX B
                    state.a = state.memory[state.bc.val()];
                    state.pc.incr(1);
                    break;
                }
                case 0x0b: {
                    // DCX B
                    state.bc = state.bc.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x0c: {
                    // INR C
                    var val = state.c.add(1);
                    _this.setFlags(val);
                    state.c = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x0d: {
                    // DCR C
                    var val = state.c.sub(1);
                    _this.setFlags(val);
                    state.c = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x0e: {
                    // MVI C, D8
                    state.c = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x0f: {
                    // RRC
                    var lob = state.a.lowOrderBit;
                    _this.setCarryBit(lob);
                    var rotated = (lob << 7) | (state.a.val() >> 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](rotated);
                    state.pc.incr(1);
                    break;
                }
                case 0x10: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x11: {
                    // LXI D, D16
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x12: {
                    // STAX D
                    _this.updateRam(state.de.val(), state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0x13: {
                    // INX D
                    var val = state.de.add(1);
                    state.de = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x14: {
                    // INR D
                    var val = state.d.add(1);
                    _this.setFlags(val);
                    state.d = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x15: {
                    // DCR D
                    var val = state.d.sub(1);
                    _this.setFlags(val);
                    state.d = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x16: {
                    // MVI D, D8
                    state.d = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x17: {
                    // RAL
                    var carry = state.cc.cy;
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = carry | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
                    state.pc.incr(1);
                    break;
                }
                case 0x18: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x19: {
                    // DAD D
                    var val = state.hl.add(state.de);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x1a: {
                    // LDAX D
                    state.a = state.memory[state.de.val()];
                    state.pc.incr(1);
                    break;
                }
                case 0x1b: {
                    // DCX D
                    state.de = state.de.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x1c: {
                    // INR E
                    var val = state.e.add(1);
                    _this.setFlags(val);
                    state.e = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x1d: {
                    // DCR E
                    var val = state.e.sub(1);
                    _this.setFlags(val);
                    state.e = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x1e: {
                    // MVI E, D8
                    state.e = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x1f: {
                    // RAR
                    var carry = state.cc.cy;
                    state.cc.cy = state.a.lowOrderBit;
                    var a = (carry << 7) | (state.a.val() >> 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
                    state.pc.incr(1);
                    break;
                }
                case 0x20: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x21: {
                    // LXI H, D16
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x22: {
                    // SHLD addr
                    var location_1 = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
                    _this.updateRam(location_1, state.l);
                    _this.updateRam(location_1 + 1, state.h);
                    state.pc.incr(3);
                    break;
                }
                case 0x23: {
                    // INX H
                    var val = state.hl.add(1);
                    state.hl = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x24: {
                    // INR H
                    var val = state.h.add(1);
                    _this.setFlags(val);
                    state.h = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x25: {
                    //	DCR H
                    var val = state.h.sub(1);
                    _this.setFlags(val);
                    state.h = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x26: {
                    // MVI H, D8
                    state.h = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x27: {
                    // DAA
                    var low = state.a.val() & 0xf;
                    var high = state.a.val() >> 4;
                    if (low > 0x09 || state.cc.ac === 1) {
                        low += 0x6;
                        if (low > 0xf) {
                            state.cc.ac = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(1);
                            high += 0x01;
                        }
                        else {
                            state.cc.ac = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(0);
                        }
                        low &= 0xf;
                    }
                    if (high > 0x09 || state.cc.cy === 1) {
                        high += 0x6;
                        _this.setCarryBit(Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(high > 0xf));
                        high &= 0xf;
                    }
                    var val = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"]((high << 4) | low);
                    _this.setFlags(val);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x28: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x29: {
                    // DAD H
                    var val = state.hl.add(state.hl);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x2a: {
                    // LHLD addr
                    var location_2 = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
                    state.l = state.memory[location_2];
                    state.h = state.memory[location_2 + 1];
                    state.pc.incr(3);
                    break;
                }
                case 0x2b: {
                    // DCX H
                    state.hl = state.hl.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x2c: {
                    // INR L
                    var val = state.l.add(1);
                    _this.setFlags(val);
                    state.l = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x2d: {
                    // DCR L
                    var val = state.l.sub(1);
                    _this.setFlags(val);
                    state.l = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x2e: {
                    // MVI L, D8
                    state.l = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x2f: {
                    // CMA
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](~state.a.val());
                    state.pc.incr(1);
                    break;
                }
                case 0x30: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x31: {
                    // LXI SP, D16
                    state.sp = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x32: {
                    // STA addr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    _this.updateRam(addr.val(), state.a);
                    state.pc.incr(3);
                    break;
                }
                case 0x33: {
                    // INX SP
                    var val = state.sp.add(1);
                    state.sp = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x34: {
                    // INR M
                    var val = state.memory[state.hl.val()].add(1);
                    _this.updateRam(state.hl.val(), val);
                    _this.setFlags(val);
                    state.pc.incr(1);
                    break;
                }
                case 0x35: {
                    // DCR M
                    var val = state.memory[state.hl.val()].sub(1);
                    _this.updateRam(state.hl.val(), val);
                    _this.setFlags(val);
                    state.pc.incr(1);
                    break;
                }
                case 0x36: {
                    // MVI M, D8
                    _this.updateRam(state.hl.val(), _this.byteAt(1));
                    state.pc.incr(2);
                    break;
                }
                case 0x37: {
                    // STC
                    _this.setCarryBit(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x38: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x39: {
                    // DAD SP
                    var val = state.hl.add(state.sp);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x3a: {
                    // LDA addr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.a = state.memory[addr.val()];
                    state.pc.incr(3);
                    break;
                }
                case 0x3b: {
                    // DCX SP
                    state.sp = state.sp.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x3c: {
                    // INR A
                    var val = state.a.add(1);
                    _this.setFlags(val);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x3d: {
                    // DCR A
                    var val = state.a.sub(1);
                    _this.setFlags(val);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x3e: {
                    // MVI A, D8
                    state.a = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x3f: {
                    // CMC
                    var val = state.cc.cy === 0 ? 1 : 0;
                    _this.setCarryBit(val);
                    state.pc.incr(1);
                    break;
                }
                case 0x40: {
                    // MOV B, B
                    _this.mov("b", "b");
                    break;
                }
                case 0x41:
                    // MOV B, C
                    _this.mov("b", "c");
                    break;
                case 0x42:
                    // MOV B, D
                    _this.mov("b", "d");
                    break;
                case 0x43:
                    // MOV B, E
                    _this.mov("b", "e");
                    break;
                case 0x44: {
                    // MOV B, H
                    _this.mov("b", "h");
                    break;
                }
                case 0x45: {
                    // MOV B, L
                    _this.mov("b", "l");
                    break;
                }
                case 0x46: {
                    // MOV B, M
                    _this.movMem("b", "m");
                    break;
                }
                case 0x47: {
                    // MOV B, A
                    _this.mov("b", "a");
                    break;
                }
                case 0x48: {
                    // MOV C, B
                    _this.mov("c", "b");
                    break;
                }
                case 0x49: {
                    // MOV C, C
                    _this.mov("c", "c");
                    break;
                }
                case 0x4a: {
                    // 	MOV C, D
                    _this.mov("c", "d");
                    break;
                }
                case 0x4b: {
                    // 	MOV C, E
                    _this.mov("c", "e");
                    break;
                }
                case 0x4c: {
                    // MOV C, H
                    _this.mov("c", "h");
                    break;
                }
                case 0x4d: {
                    // MOV C, L
                    _this.mov("c", "l");
                    break;
                }
                case 0x4e: {
                    // MOV C, M
                    _this.movMem("c", "m");
                    break;
                }
                case 0x4f: {
                    // MOV C, A
                    _this.mov("c", "a");
                    break;
                }
                case 0x50: {
                    // MOV D, B
                    _this.mov("d", "b");
                    break;
                }
                case 0x51: {
                    // MOV D, C
                    _this.mov("d", "c");
                    break;
                }
                case 0x52: {
                    //	MOV D, D
                    _this.mov("d", "d");
                    break;
                }
                case 0x53: {
                    // MOV D, E
                    _this.mov("d", "e");
                    break;
                }
                case 0x54: {
                    // MOV D, H
                    _this.mov("d", "h");
                    break;
                }
                case 0x55: {
                    // MOV D, L
                    _this.mov("d", "l");
                    break;
                }
                case 0x56: {
                    // MOV D, M
                    _this.movMem("d", "m");
                    break;
                }
                case 0x57: {
                    // MOV D, A
                    _this.mov("d", "a");
                    break;
                }
                case 0x58: {
                    // MOV E, B
                    _this.mov("e", "b");
                    break;
                }
                case 0x59: {
                    // MOV E, C
                    _this.mov("e", "c");
                    break;
                }
                case 0x5a: {
                    // MOV E, D
                    _this.mov("e", "d");
                    break;
                }
                case 0x5b: {
                    // MOV E, E
                    _this.mov("e", "e");
                    break;
                }
                case 0x5c: {
                    // MOV E, H
                    _this.mov("e", "h");
                    break;
                }
                case 0x5d: {
                    // MOV E, L
                    _this.mov("e", "l");
                    break;
                }
                case 0x5e: {
                    // MOV E, M
                    _this.movMem("e", "m");
                    break;
                }
                case 0x5f: {
                    // MOV E, A
                    _this.mov("e", "a");
                    break;
                }
                case 0x60: {
                    // MOV H, B
                    _this.mov("h", "b");
                    break;
                }
                case 0x61: {
                    // MOV H, C
                    _this.mov("h", "c");
                    break;
                }
                case 0x62: {
                    // MOV H, D
                    _this.mov("h", "d");
                    break;
                }
                case 0x63: {
                    // MOV H, E
                    _this.mov("h", "e");
                    break;
                }
                case 0x64: {
                    // MOV H, H
                    _this.mov("h", "h");
                    break;
                }
                case 0x65: {
                    // MOV H, L
                    _this.mov("h", "l");
                    break;
                }
                case 0x66: {
                    // MOV H, M
                    _this.movMem("h", "m");
                    break;
                }
                case 0x67: {
                    // MOV H, A
                    _this.mov("h", "a");
                    break;
                }
                case 0x68: {
                    // MOV L, B
                    _this.mov("l", "b");
                    break;
                }
                case 0x69: {
                    // MOV L, C
                    _this.mov("l", "c");
                    break;
                }
                case 0x6a: {
                    // MOV L, D
                    _this.mov("l", "d");
                    break;
                }
                case 0x6b: {
                    // MOV L, E
                    _this.mov("l", "e");
                    break;
                }
                case 0x6c: {
                    // MOV L, H
                    _this.mov("l", "h");
                    break;
                }
                case 0x6d: {
                    // MOV L, L
                    _this.mov("l", "l");
                    break;
                }
                case 0x6e: {
                    // MOV L, M
                    _this.movMem("l", "m");
                    break;
                }
                case 0x6f: {
                    // MOV L, A
                    _this.mov("l", "a");
                    break;
                }
                case 0x70: {
                    // MOV M, B
                    _this.movMem("m", "b");
                    break;
                }
                case 0x71: {
                    // MOV M, C
                    _this.movMem("m", "c");
                    break;
                }
                case 0x72: {
                    // MOV M, D
                    _this.movMem("m", "d");
                    break;
                }
                case 0x73: {
                    // MOV M, E
                    _this.movMem("m", "e");
                    break;
                }
                case 0x74: {
                    // MOV M, H
                    _this.movMem("m", "h");
                    break;
                }
                case 0x75: {
                    // MOV M, L
                    _this.movMem("m", "l");
                    break;
                }
                case 0x76: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x77: {
                    // MOV M, A
                    _this.movMem("m", "a");
                    break;
                }
                case 0x78: {
                    // MOV A, B
                    _this.mov("a", "b");
                    break;
                }
                case 0x79: {
                    // 	MOV A, C
                    _this.mov("a", "c");
                    break;
                }
                case 0x7a: {
                    // MOV A, D
                    _this.mov("a", "d");
                    break;
                }
                case 0x7b: {
                    // 	MOV A, E
                    _this.mov("a", "e");
                    break;
                }
                case 0x7c: {
                    // MOV A, H
                    _this.mov("a", "h");
                    break;
                }
                case 0x7d: {
                    // MOV A, L
                    _this.mov("a", "l");
                    break;
                }
                case 0x7e: {
                    // MOV A, M
                    _this.movMem("a", "m");
                    break;
                }
                case 0x7f: {
                    // MOV A, A
                    _this.mov("a", "a");
                    break;
                }
                case 0x80: {
                    // ADD B
                    var val = state.a.add(state.b);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x81: {
                    // ADD C
                    var val = state.a.add(state.c);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x82: {
                    // ADD D
                    var val = state.a.add(state.d);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x83: {
                    // ADD E
                    var val = state.a.add(state.e);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x84: {
                    // ADD H
                    var val = state.a.add(state.h);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x85: {
                    // ADD L
                    var val = state.a.add(state.l);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x86: {
                    // ADD M
                    var val = state.a.add(state.memory[state.hl.val()]);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x87: {
                    // ADD A
                    var val = state.a.add(state.a);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x88: {
                    // ADC B
                    var val = state.a.add(state.b.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x89: {
                    // ADC C
                    var val = state.a.add(state.c.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8a: {
                    //	ADC D
                    var val = state.a.add(state.d.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8b: {
                    //	ADC E
                    var val = state.a.add(state.e.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8c: {
                    //	ADC H
                    var val = state.a.add(state.h.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8d: {
                    //	ADC L
                    var val = state.a.add(state.l.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8e: {
                    //	ADC M
                    var val = state.a.add(state.memory[state.hl.val()].val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8f: {
                    //	ADC A
                    var val = state.a.add(state.a.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x90: {
                    // SUB B
                    var val = state.a.sub(state.b);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x91: {
                    // SUB C
                    var val = state.a.sub(state.c);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x92: {
                    // SUB D
                    var val = state.a.sub(state.d);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x93: {
                    // SUB E
                    var val = state.a.sub(state.e);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x94: {
                    // SUB H
                    var val = state.a.sub(state.h);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x95: {
                    // SUB L
                    var val = state.a.sub(state.l);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x96: {
                    // SUB M
                    var val = state.a.sub(state.memory[state.hl.val()]);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x97: {
                    // SUB A
                    var val = state.a.sub(state.a);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x98: {
                    // SBB B
                    var val = state.a.sub(state.b.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x99: {
                    // SBB C
                    var val = state.a.sub(state.c.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9a: {
                    // SBB D
                    var val = state.a.sub(state.d.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9b: {
                    // SBB E
                    var val = state.a.sub(state.e.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9c: {
                    // SBB H
                    var val = state.a.sub(state.h.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9d: {
                    // SBB L
                    var val = state.a.sub(state.l.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9e: {
                    // SBB M
                    var val = state.a.sub(state.memory[state.hl.val()].val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9f: {
                    // SBB A
                    var val = state.a.sub(state.a.val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0xa0: {
                    // ANA B
                    var and = state.a.and(state.b.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa1: {
                    // ANA C
                    var and = state.a.and(state.c.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa2: {
                    // ANA D
                    var and = state.a.and(state.d.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa3: {
                    // ANA E
                    var and = state.a.and(state.e.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa4: {
                    // ANA H
                    var and = state.a.and(state.h.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa5: {
                    // ANA L
                    var and = state.a.and(state.l.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa6: {
                    // ANA M
                    var and = state.a.and(state.memory[state.hl.val()].val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa7: {
                    // ANA A
                    var and = state.a.and(state.a.val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(1);
                    break;
                }
                case 0xa8: {
                    // XRA B
                    var xor = state.a.val() ^ state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa9: {
                    // XRA C
                    var xor = state.a.val() ^ state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaa: {
                    // XRA D
                    var xor = state.a.val() ^ state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xab: {
                    // XRA E
                    var xor = state.a.val() ^ state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xac: {
                    // XRA H
                    var xor = state.a.val() ^ state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xad: {
                    // XRA L
                    var xor = state.a.val() ^ state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xae: {
                    // XRA M
                    var xor = state.a.val() ^ state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaf: {
                    // XRA A
                    var xor = state.a.val() ^ state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb0: {
                    // ORA B
                    var val = state.a.val() | state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb1: {
                    // ORA C
                    var val = state.a.val() | state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb2: {
                    // ORA D
                    var val = state.a.val() | state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb3: {
                    // ORA E
                    var val = state.a.val() | state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb4: {
                    // ORA H
                    var val = state.a.val() | state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb5: {
                    // ORA H
                    var val = state.a.val() | state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb6: {
                    // ORA M
                    var val = state.a.val() | state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb7: {
                    // ORA A
                    var val = state.a.val() | state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb8: {
                    // CMP B
                    var comp = state.a.sub(state.b);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xb9: {
                    // CMP C
                    var comp = state.a.sub(state.c);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xba: {
                    // CMP D
                    var comp = state.a.sub(state.d);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbb: {
                    // CMP E
                    var comp = state.a.sub(state.e);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbc: {
                    // CMP H
                    var comp = state.a.sub(state.h);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbd: {
                    // CMP L
                    var comp = state.a.sub(state.l);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbe: {
                    // CMP M
                    var comp = state.a.sub(state.memory[state.hl.val()]);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbf: {
                    // CMP A
                    var comp = state.a.sub(state.a);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xc0: {
                    // RNZ
                    if (state.cc.z === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xc1: {
                    // POP B
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xc2: {
                    // JNZ address
                    if (state.cc.z === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xc3: {
                    // JMP address
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xc4: {
                    // CNZ addr
                    if (state.cc.z === 0) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xc5: {
                    // PUSH B
                    _this.updateRam(state.sp.decr(1), state.b);
                    _this.updateRam(state.sp.decr(1), state.c);
                    state.pc.incr(1);
                    break;
                }
                case 0xc6: {
                    // ADI byte
                    var val = state.a.add(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xc7: {
                    // RST
                    var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc.add(3)), high = _a.high, low = _a.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_3__["default"](0x0);
                    break;
                }
                case 0xc8: {
                    // RZ
                    if (state.cc.z === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xc9: {
                    // RET
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    break;
                }
                case 0xca: {
                    // JZ addr
                    if (state.cc.z === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xcb: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcc: {
                    // CZ addr
                    if (state.cc.z === 1) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xcd: {
                    // CALL address
                    var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](3));
                    var _b = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(val), high = _b.high, low = _b.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xce: {
                    // ACI D8
                    var val = state.a.add(_this.byteAt(1).val() + state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xcf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd0: {
                    // RNC
                    if (state.cc.cy === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xd1: {
                    // POP D
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xd2: {
                    // 	JNC address
                    if (state.cc.cy === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xd3: {
                    // OUT D8
                    if (!_this.test) {
                        _this.send(_this.byteAt(1).val(), state.a.val());
                    }
                    else {
                        // Writing to out indicates the end of a test
                        _this.testComplete = true;
                    }
                    state.pc.incr(2);
                    break;
                }
                case 0xd4: {
                    // CNC addr
                    if (state.cc.cy === 0) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xd5: {
                    // PUSH D
                    _this.updateRam(state.sp.decr(1), state.d);
                    _this.updateRam(state.sp.decr(1), state.e);
                    state.pc.incr(1);
                    break;
                }
                case 0xd6: {
                    // SUI D8
                    var val = state.a.sub(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xd7: {
                    // RST 2
                    var _c = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc.add(2)), high = _c.high, low = _c.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0x10);
                    break;
                }
                case 0xd8: {
                    // RC
                    if (state.cc.cy === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xd9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xda: {
                    // JC addr
                    if (state.cc.cy === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xdb: {
                    // IN D8
                    if (_this.test) {
                        if (state.c.val() === 2) {
                            console.log(String.fromCharCode(state.e.val()));
                        }
                        // print from memory at (DE) until '$' char
                        else if (state.c.val() === 9) {
                            var addr = state.de.val();
                            do {
                                var code = String.fromCharCode(state.memory[addr++].val());
                                console.log(code);
                            } while (String.fromCharCode(state.memory[addr].val()) !== "$");
                            console.log("\n");
                        }
                        state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0xff);
                    }
                    else {
                        state.a = _this.in[_this.byteAt(1).val()];
                    }
                    state.pc.incr(2);
                    break;
                }
                case 0xdc: {
                    // CC addr
                    if (state.cc.cy === 1) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xdd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xde: {
                    // SBI D8
                    var byteWithCarry = _this.byteAt(1).add(state.cc.cy);
                    var val = state.a.sub(byteWithCarry);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xdf: {
                    // RST 3
                    var _d = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc.add(3)), high = _d.high, low = _d.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0x18);
                    break;
                }
                case 0xe0: {
                    // RPO
                    if (state.cc.p === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xe1: {
                    // POP H
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xe2: {
                    // JPO addr
                    if (state.cc.p === 0) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xe3: {
                    // XTHL
                    var l = state.l.clone();
                    var h = state.h.clone();
                    state.l = state.memory[state.sp.val()];
                    state.h = state.memory[state.sp.val() + 1];
                    state.memory[state.sp.val()] = l;
                    state.memory[state.sp.val() + 1] = h;
                    state.pc.incr(1);
                    break;
                }
                case 0xe4: {
                    // CPO addr
                    if (state.cc.p === 0) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xe5: {
                    // PUSH H
                    _this.updateRam(state.sp.decr(1), state.h);
                    _this.updateRam(state.sp.decr(1), state.l);
                    state.pc.incr(1);
                    break;
                }
                case 0xe6: {
                    // ANI D8
                    var and = state.a.and(_this.byteAt(1).val());
                    _this.setCarryBit(0);
                    _this.setFlags(and);
                    state.a = and;
                    state.pc.incr(2);
                    break;
                }
                case 0xe7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe8: {
                    // RPE
                    if (state.cc.p === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xe9: {
                    // PCHL
                    state.pc = state.hl.clone();
                    break;
                }
                case 0xea: {
                    // JPE addr
                    if (state.cc.p === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xeb: {
                    // XCHG
                    var h = state.h.clone();
                    var l = state.l.clone();
                    state.h = state.d.clone();
                    state.l = state.e.clone();
                    state.d = h;
                    state.e = l;
                    state.pc.incr(1);
                    break;
                }
                case 0xec: {
                    // CPE addr
                    if (state.cc.p === 1) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xed: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xee: {
                    // XRI D8
                    var val = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](state.a.val() ^ _this.byteAt(1).val());
                    _this.setCarryBit(0);
                    _this.setFlags(val);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xef: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf0: {
                    // RP
                    if (state.cc.s === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xf1: {
                    // POP PSW
                    var low = state.memory[state.sp.val()].val();
                    var high = state.memory[state.sp.incr(1)];
                    state.a = high;
                    state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 7) & 1);
                    state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 6) & 1);
                    state.cc.ac = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 4) & 1);
                    state.cc.p = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 2) & 1);
                    state.cc.cy = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(low & 1);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xf2: {
                    // JP addr
                    if (state.cc.s === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xf3: {
                    // DI
                    state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0);
                    state.pc.incr(1);
                    break;
                }
                case 0xf4: {
                    // CP addr
                    if (state.cc.s === 0) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xf5: {
                    // PUSH PSW
                    _this.updateRam(state.sp.decr(1), state.a);
                    _this.updateRam(state.sp.decr(1), state.getPsw());
                    state.pc.incr(1);
                    break;
                }
                case 0xf6: {
                    // ORI D8
                    var val = state.a.val() | _this.byteAt(1).val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(2);
                    break;
                }
                case 0xf7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf8: {
                    // RM
                    if (state.cc.s === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xf9: {
                    // SPHL
                    state.sp = state.hl.clone();
                    state.pc.incr(1);
                    break;
                }
                case 0xfa: {
                    // JM addr
                    if (state.cc.s === 1) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xfb: {
                    // EI
                    state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](1);
                    state.pc.incr(1);
                    break;
                }
                case 0xfc: {
                    // CM addr
                    if (state.cc.s === 1) {
                        _this.call();
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xfd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xfe: {
                    // CPI D8
                    var val = state.a.sub(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.pc.incr(2);
                    break;
                }
                case 0xff: {
                    // RST 7
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                default: {
                    _this.unimplementedInstruction(-1);
                }
            }
            _this.instructionNumber++;
            return _this.cycles8080[opcode];
        };
        this.setFlags = function (n, carry) {
            var state = _this.state;
            state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((n.val() & 0xff) === 0);
            state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((n.val() & 0x80) === 0x80);
            state.cc.p = _this.parity(n.val());
            state.cc.ac = n.auxCarry;
            if (carry) {
                _this.setCarryBit(n.carry);
            }
        };
        this.setCarryBit = function (n) { return (_this.state.cc.cy = n); };
        this.parity = function (n) {
            var size = 8;
            var parity = 0;
            var calc = n;
            for (var i = 0; i < size; i++) {
                if (calc & 0x1) {
                    parity++;
                }
                calc = calc >> 1;
            }
            return Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(!(parity % 2));
        };
        this.mov = function (srcKey, destKey) {
            if (srcKey === "m" || destKey === "m") {
                throw new Error("src and dest cannot be a memory location");
            }
            _this.state[srcKey] = _this.state[destKey].clone();
            _this.state.pc.incr(1);
        };
        this.movMem = function (srcKey, destKey) {
            if (srcKey !== "m" && destKey !== "m") {
                throw new Error("must specify a memory location");
            }
            var state = _this.state;
            if (srcKey === "m") {
                _this.updateRam(state.hl.val(), state[destKey]);
            }
            else {
                state[srcKey] = state.memory[state.hl.val()].clone();
            }
            state.pc.incr(1);
        };
        this.byteAt = function (index) {
            var state = _this.state;
            return state.memory[state.pc.val() + index];
        };
        this.ret = function () {
            var state = _this.state;
            var low = state.memory[state.sp.val()];
            var high = state.memory[state.sp.incr(1)];
            state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
            state.sp.incr(1);
            _this.cycles += 6;
        };
        this.unimplementedInstruction = function (opcode) {
            var state = _this.state;
            throw new Error("Unimplemented code at instruction " + _this.instructionNumber + " at for opcode " + opcode.toString(16) + " at offset " + state.pc.val());
        };
        this.state = new _models_CpuState__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.state.memory.alloc(0x10000);
        this.mediator = mediator;
        this.debug = !!debug;
        this.test = !!test;
        this.in = _models_ByteArray__WEBPACK_IMPORTED_MODULE_1__["default"].create();
        this.in.alloc(0x8);
        var port0 = 0x0;
        port0 += 1 << 1;
        port0 += 1 << 2;
        port0 += 1 << 3;
        this.in[0] = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](port0);
        var port1 = 0x0;
        port1 += 1 << 3;
        this.in[1] = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](port1);
    }
    Emulator.prototype.send = function (port, pos, bit) {
        this.mediator.sendOut(port, pos, bit);
    };
    Emulator.prototype.receive = function (port, val, bit) {
        var newVal = val;
        if (bit !== undefined) {
            newVal = this.modifyBit(this.in[port].val(), val, bit);
        }
        this.in.splice(port, 1, new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](newVal));
    };
    Emulator.prototype.updateScreen = function (addr, val) {
        this.mediator.updateScreen(addr, val);
    };
    Emulator.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, buf, view, romBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("invaders")];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.arrayBuffer()];
                    case 2:
                        buf = _a.sent();
                        view = new Uint8Array(buf);
                        romBytes = __spread(view).map(Number);
                        this.state.memory.set(__spread(romBytes)); //  ...ramBytes
                        return [4 /*yield*/, this.run()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Emulator.prototype.logState = function (state) {
        var cc = state.cc;
        console.log("\n    {\n      a: " + state.a.hex + "\n      bc: " + state.bc.hex + "\n      de: " + state.de.hex + "\n      hl: " + state.hl.hex + "\n      pc: " + state.pc.hex + "\n      sp: " + state.sp.hex + "\n      cc: {\n        z: " + cc.z + "\n        s: " + cc.s + "\n        p: " + cc.p + "\n        cy: " + cc.cy + "\n        ac: " + cc.ac + "\n      }\n    }");
    };
    Emulator.prototype.generateInterrupt = function (interruptNum) {
        var state = this.state;
        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc), high = _a.high, low = _a.low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);
        state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_3__["default"](8 * interruptNum);
    };
    Emulator.prototype.call = function () {
        var state = this.state;
        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](3));
        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(val), high = _a.high, low = _a.low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);
        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(this.byteAt(2), this.byteAt(1));
        this.cycles += 6;
    };
    Emulator.prototype.updateRam = function (location, value) {
        var state = this.state;
        state.memory.splice(location, 1, value.clone());
        if (!this.test && location >= 0x2400 && location <= 0x3fff) {
            // video ram
            this.updateScreen(location, value.val());
        }
    };
    Emulator.prototype.modifyBit = function (number, pos, b) {
        var mask = 1 << pos;
        return (number & ~mask) | ((b << pos) & mask);
    };
    return Emulator;
}());
/* harmony default export */ __webpack_exports__["default"] = (Emulator);


/***/ }),

/***/ "./src/emulator/models/Bit.ts":
/*!************************************!*\
  !*** ./src/emulator/models/Bit.ts ***!
  \************************************/
/*! exports provided: toBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBit", function() { return toBit; });
var toBit = function (arg) {
    var val = typeof arg === 'number' ? !!arg : arg;
    return val ? 1 : 0;
};


/***/ }),

/***/ "./src/emulator/models/ByteArray.ts":
/*!******************************************!*\
  !*** ./src/emulator/models/ByteArray.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint8 */ "./src/emulator/models/Uint8.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ByteArray = /** @class */ (function (_super) {
    __extends(ByteArray, _super);
    function ByteArray() {
        var _this = _super.call(this) || this;
        _this.max = 0;
        return _this;
    }
    ByteArray.create = function () {
        return Object.create(ByteArray.prototype);
    };
    ByteArray.prototype.alloc = function (n) {
        for (var i = 0; i < n; i++) {
            this.push(new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]());
        }
    };
    ByteArray.prototype.set = function (n, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        n.forEach(function (val, index) {
            _this.splice(offset + index, 1, new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val));
        });
    };
    return ByteArray;
}(Array));
/* harmony default export */ __webpack_exports__["default"] = (ByteArray);


/***/ }),

/***/ "./src/emulator/models/ConditionCodes.ts":
/*!***********************************************!*\
  !*** ./src/emulator/models/ConditionCodes.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ConditionCodes = /** @class */ (function () {
    function ConditionCodes() {
        this.z = 0;
        this.s = 0;
        this.p = 0;
        this.cy = 0;
        this.ac = 0;
        this.pad = 0;
    }
    return ConditionCodes;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConditionCodes);


/***/ }),

/***/ "./src/emulator/models/CpuState.ts":
/*!*****************************************!*\
  !*** ./src/emulator/models/CpuState.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _Uint16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _ConditionCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionCodes */ "./src/emulator/models/ConditionCodes.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/emulator/utils/utils.ts");
/* harmony import */ var _ByteArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByteArray */ "./src/emulator/models/ByteArray.ts");
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");






var CpuState = /** @class */ (function () {
    function CpuState() {
        this.a = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.b = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.c = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.d = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.e = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.h = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.l = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.sp = new _Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pc = new _Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.memory = _ByteArray__WEBPACK_IMPORTED_MODULE_4__["default"].create();
        this.cc = new _ConditionCodes__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.intEnable = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Object.defineProperty(CpuState.prototype, "af", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.a, this.getPsw());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "bc", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.b, this.c);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.b = high;
            this.c = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "de", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.d, this.e);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.d = high;
            this.e = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "hl", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.h, this.l);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.h = high;
            this.l = low;
        },
        enumerable: true,
        configurable: true
    });
    CpuState.prototype.getPsw = function () {
        var num = 0;
        num |= Object(_Bit__WEBPACK_IMPORTED_MODULE_5__["toBit"])(this.cc.s) << 7;
        num |= Object(_Bit__WEBPACK_IMPORTED_MODULE_5__["toBit"])(this.cc.z) << 6;
        num |= Object(_Bit__WEBPACK_IMPORTED_MODULE_5__["toBit"])(this.cc.ac) << 4;
        num |= Object(_Bit__WEBPACK_IMPORTED_MODULE_5__["toBit"])(this.cc.p) << 2;
        num |= 1 << 1;
        num |= Object(_Bit__WEBPACK_IMPORTED_MODULE_5__["toBit"])(this.cc.cy);
        return new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](num);
    };
    return CpuState;
}());
/* harmony default export */ __webpack_exports__["default"] = (CpuState);


/***/ }),

/***/ "./src/emulator/models/Uint.ts":
/*!*************************************!*\
  !*** ./src/emulator/models/Uint.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");

var Uint = /** @class */ (function () {
    function Uint(max, n) {
        if (n === void 0) { n = 0; }
        this.carry = 0;
        this.auxCarry = 0;
        this.max = max;
        this.num = n & this.max;
    }
    Uint.prototype.toString = function () {
        return this.num.toString();
    };
    Uint.prototype.val = function () {
        return this.num;
    };
    Object.defineProperty(Uint.prototype, "isZero", {
        get: function () {
            return this.num === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uint.prototype, "lowOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(this.num & 1);
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.incr = function (n) {
        var val = (this.num + n) & this.max;
        this.num = val;
        return val;
    };
    Uint.prototype.decr = function (n) {
        var val = (this.num - n) & this.max;
        this.num = val;
        return val;
    };
    Object.defineProperty(Uint.prototype, "hex", {
        get: function () {
            return this.num.toString(16);
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.getCarry = function (val) {
        var carry = val < 0 || val > this.max ? 1 : 0;
        return carry;
    };
    Uint.prototype.getAuxCarry = function (num, value, type) {
        if (type === 'add') {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((((num & 0xf) + (value & 0xf)) & 0x10) === 0x10);
        }
        else if (type === 'sub') {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(!((num & 0xf) - (value & 0xf) < 0));
        }
        else if (type === 'and') {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(((num | value) & 0x08) !== 0);
        }
        throw new Error('`type` must be "add", "sub", or "and"');
    };
    return Uint;
}());
/* harmony default export */ __webpack_exports__["default"] = (Uint);


/***/ }),

/***/ "./src/emulator/models/Uint16.ts":
/*!***************************************!*\
  !*** ./src/emulator/models/Uint16.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint */ "./src/emulator/models/Uint.ts");
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Uint16 = /** @class */ (function (_super) {
    __extends(Uint16, _super);
    function Uint16(n) {
        return _super.call(this, 0xffff, n) || this;
    }
    Uint16.prototype.add = function (n) {
        var val = typeof n === 'number' ? n : n.val();
        var res = this.num + val;
        var ret = new Uint16(res & this.max);
        ret.carry = this.getCarry(res);
        ret.auxCarry = this.getAuxCarry(this.num, res, 'add');
        return ret;
    };
    Uint16.prototype.sub = function (n) {
        var val = typeof n === 'number' ? n : n.val();
        var res = this.num - val;
        var ret = new Uint16(res & this.max);
        ret.carry = this.getCarry(res);
        ret.auxCarry = this.getAuxCarry(this.num, val, 'sub');
        return ret;
    };
    Object.defineProperty(Uint16.prototype, "highOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(this.num >> 15);
        },
        enumerable: true,
        configurable: true
    });
    Uint16.prototype.rotateLeft = function () {
        return new Uint16((this.num << 1) & 0xffff);
    };
    Uint16.prototype.clone = function () {
        return new Uint16(this.num);
    };
    return Uint16;
}(_Uint__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Uint16);


/***/ }),

/***/ "./src/emulator/models/Uint8.ts":
/*!**************************************!*\
  !*** ./src/emulator/models/Uint8.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint */ "./src/emulator/models/Uint.ts");
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Uint8 = /** @class */ (function (_super) {
    __extends(Uint8, _super);
    function Uint8(n) {
        return _super.call(this, 0xff, n) || this;
    }
    Uint8.prototype.add = function (n) {
        var val = typeof n === 'number' ? n : n.val();
        var res = this.num + val;
        var ret = new Uint8(res);
        ret.carry = this.getCarry(res);
        ret.auxCarry = this.getAuxCarry(this.num, val, 'add');
        return ret;
    };
    Uint8.prototype.sub = function (n) {
        var val = typeof n === 'number' ? n : n.val();
        var res = this.num - val;
        var ret = new Uint8(res);
        ret.carry = this.getCarry(res);
        ret.auxCarry = this.getAuxCarry(this.num, val, 'sub');
        return ret;
    };
    Uint8.prototype.and = function (n) {
        var val = typeof n === 'number' ? n : n.val();
        var res = this.num & val;
        var ret = new Uint8(res);
        ret.carry = this.getCarry(res);
        ret.auxCarry = this.getAuxCarry(this.num, val, 'and');
        return ret;
    };
    Object.defineProperty(Uint8.prototype, "highOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(this.num >> 7);
        },
        enumerable: true,
        configurable: true
    });
    Uint8.prototype.rotateLeft = function () {
        return new Uint8((this.num << 1) & 0xff);
    };
    Uint8.prototype.clone = function () {
        return new Uint8(this.num);
    };
    return Uint8;
}(_Uint__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Uint8);


/***/ }),

/***/ "./src/emulator/utils/utils.ts":
/*!*************************************!*\
  !*** ./src/emulator/utils/utils.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _models_Uint16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Uint16 */ "./src/emulator/models/Uint16.ts");


var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.concatUint = function (most, least) {
        return new _models_Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]((most.val() << 8) | least.val());
    };
    default_1.concat = function (most, least) { return (most << 8) | least; };
    default_1.split = function (n) {
        var high = n.val() >> 8;
        var low = n.val() & 0xff;
        return {
            high: new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](high),
            low: new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](low),
        };
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _painter_painter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./painter/painter */ "./src/painter/painter.ts");
/* harmony import */ var _emulator_emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator/emulator */ "./src/emulator/emulator.ts");
/* harmony import */ var _mediator_Mediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediator/Mediator */ "./src/mediator/Mediator.ts");



var Main = /** @class */ (function () {
    function Main() {
        var mediator = new _mediator_Mediator__WEBPACK_IMPORTED_MODULE_2__["Mediator"]();
        this.emulator = new _emulator_emulator__WEBPACK_IMPORTED_MODULE_1__["default"]({ mediator: mediator });
        var painter = new _painter_painter__WEBPACK_IMPORTED_MODULE_0__["Painter"](mediator);
        mediator.registerOut(this.emulator);
        mediator.registerIn(painter);
    }
    Main.prototype.start = function () {
        this.emulator.init();
    };
    return Main;
}());
new Main().start();


/***/ }),

/***/ "./src/mediator/Mediator.ts":
/*!**********************************!*\
  !*** ./src/mediator/Mediator.ts ***!
  \**********************************/
/*! exports provided: Mediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return Mediator; });
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Mediator.prototype.registerIn = function (colleague) {
        this.in = colleague;
    };
    Mediator.prototype.registerOut = function (colleague) {
        this.out = colleague;
    };
    Mediator.prototype.sendOut = function (port, val, bit) {
        if (!this.in) {
            throw new Error('`in` is not initialized');
        }
        this.in.receive(port, val, bit);
    };
    Mediator.prototype.sendIn = function (port, val, bit) {
        if (!this.out) {
            throw new Error('`out` is not initialized');
        }
        this.out.receive(port, val, bit);
    };
    Mediator.prototype.updateScreen = function (addr, val) {
        if (!this.in) {
            throw new Error('`in` is not initialized');
        }
        this.in.updateScreen(addr, val);
    };
    return Mediator;
}());



/***/ }),

/***/ "./src/painter/painter.ts":
/*!********************************!*\
  !*** ./src/painter/painter.ts ***!
  \********************************/
/*! exports provided: Painter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painter", function() { return Painter; });
/* harmony import */ var _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emulator/models/Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _emulator_models_Uint8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emulator/models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _emulator_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emulator/utils/utils */ "./src/emulator/utils/utils.ts");



var Painter = /** @class */ (function () {
    function Painter(mediator) {
        var _this = this;
        this.shiftRegister = new _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.shiftOffset = 0;
        this.write = function (port, val) {
            if (port === 6 || port === 3 || port == 5) {
                return;
            }
            switch (port) {
                case 2: // shift register result offset (bits 0,1,2)
                    _this.shiftOffset = val & 0x7;
                    break;
                case 3: //sound related
                    _this.unimplementedInstruction(port, val);
                    break;
                case 4: // fill shift register
                    var high = _emulator_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(_this.shiftRegister).high;
                    _this.shiftRegister = new _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__["default"]((val << 8) | high.val());
                    var shifted = new _emulator_models_Uint8__WEBPACK_IMPORTED_MODULE_1__["default"]((_this.shiftRegister.val() << _this.shiftOffset) >> 8);
                    _this.send(3, shifted.val());
                    break;
                case 5: // sound related
                    _this.unimplementedInstruction(port, val);
                    break;
                case 6: // debug port
                    _this.unimplementedInstruction(port, val);
                    break;
                default:
                    break;
            }
        };
        this.unimplementedInstruction = function (port, val) {
            console.log("Unimplemented code: port " + port + " with value " + val);
        };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext && this.canvas.getContext('2d');
        this.mediator = mediator;
        this.events = new Events(this.send.bind(this));
        this.events.init();
    }
    Painter.prototype.send = function (port, val, bit) {
        this.mediator.sendIn(port, val, bit);
    };
    Painter.prototype.receive = function (port, val, bit) {
        this.write(port, val);
    };
    Painter.prototype.updateScreen = function (addr, val) {
        var base = addr - 0x2400;
        var y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
        var x = base >> 5;
        var bin = val.toString(2).padStart(8, '0');
        for (var i = 0; i < bin.length; i++) {
            this.paint(x, y + i, Number(bin.charAt(i)));
        }
    };
    Painter.prototype.paint = function (x, y, on) {
        if (this.context) {
            this.context.fillStyle = on ? 'white' : 'black';
            this.context.fillRect(x * 2, y * 2, 2, 2);
        }
    };
    return Painter;
}());

// TODO: add input
var Events = /** @class */ (function () {
    function Events(onKeyPress) {
        this.onKeyPress = onKeyPress;
    }
    Events.prototype.onKeyPress = function (port, bit, val) { };
    Events.prototype.init = function () {
        var _this = this;
        window.onkeydown = function (e) {
            e.preventDefault();
            var key = e.keyCode ? e.keyCode : e.which;
            switch (key) {
                case 16: {
                    // shift (credit)
                    _this.onKeyPress(1, 0, 1);
                    break;
                }
                case 37: {
                    // key left (left)
                    _this.onKeyPress(1, 5, 1);
                    break;
                }
                case 39: {
                    // key right (right)
                    _this.onKeyPress(1, 6, 1);
                    break;
                }
                case 32: {
                    // space (fire)
                    _this.onKeyPress(1, 4, 1);
                    break;
                }
                case 49: {
                    // 1 (first player start)
                    _this.onKeyPress(1, 2, 1);
                    break;
                }
                case 50: {
                    // 2 (second player start)
                    _this.onKeyPress(1, 1, 1);
                    break;
                }
                default:
                    break;
            }
        };
        window.onkeyup = function (e) {
            e.preventDefault();
            var key = e.keyCode ? e.keyCode : e.which;
            switch (key) {
                case 16: {
                    // shift (credit)
                    _this.onKeyPress(1, 0, 0);
                    break;
                }
                case 37: {
                    // key left (left)
                    _this.onKeyPress(1, 5, 0);
                    break;
                }
                case 39: {
                    // key right (right)
                    _this.onKeyPress(1, 6, 0);
                    break;
                }
                case 32: {
                    // space (fire)
                    _this.onKeyPress(1, 4, 0);
                    break;
                }
                case 49: {
                    // 1 (first player start)
                    _this.onKeyPress(1, 2, 0);
                    break;
                }
                case 50: {
                    // 2 (second player start)
                    _this.onKeyPress(1, 1, 0);
                    break;
                }
                default:
                    break;
            }
        };
    };
    return Events;
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL2VtdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQml0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQnl0ZUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQ29uZGl0aW9uQ29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9DcHVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvbW9kZWxzL1VpbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50MTYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50OC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tZWRpYXRvci9NZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFpbnRlci9wYWludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGMEM7QUFDQztBQUNGO0FBRUo7QUFDRjtBQUNEO0FBSWxDO0lBV0Usa0JBQVksRUFRWDtRQVJELGlCQThCQztZQTdCQyxzQkFBUSxFQUNSLGdCQUFLLEVBQ0wsY0FBSTtRQVROLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFrQzlCLGtCQUFrQjtRQUNELGVBQVUsR0FBRztZQUM5QixpRUFBaUU7WUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztZQUM3RCxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO1lBQzdELENBQUMsRUFBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7WUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztZQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO1lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7WUFDN0QsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztZQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO1lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7WUFDN0QsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztZQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO1lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7WUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRTtZQUM5RCxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMs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LEdBQUcsQ0FBQztvQkFDZCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQy9ELEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDL0QsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsTUFBTTtvQkFDTixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNaO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsY0FBYztvQkFDZCxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLEVBQUUsR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0Q7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxjQUFjO29CQUNkLEtBQUssQ0FBQyxFQUFFLEdBQUcsb0RBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxXQUFXO29CQUNYLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUVELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxTQUFTO29CQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxXQUFXO29CQUNYLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNkLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsTUFBTTtvQkFDQSxvRkFBNEMsRUFBMUMsY0FBSSxFQUFFLFlBQW9DLENBQUM7b0JBRW5ELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRXRDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxzREFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSztvQkFDTCxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNaO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsTUFBTTtvQkFDTixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1QyxLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixJQUFNLElBQUksR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUQsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsVUFBVTtvQkFDVixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNiO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsZUFBZTtvQkFDZixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHFEQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsd0VBQWdDLEVBQTlCLGNBQUksRUFBRSxZQUF3QixDQUFDO29CQUV2QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUV0QyxLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsU0FBUztvQkFDVCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVELEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDZCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULE1BQU07b0JBQ04sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDWjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULGVBQWU7b0JBQ2YsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUssQ0FBQyxFQUFFLEdBQUcsb0RBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdEO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsU0FBUztvQkFDVCxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRTt3QkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTTt3QkFDTCw2Q0FBNkM7d0JBQzdDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3FCQUMxQjtvQkFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFdBQVc7b0JBQ1gsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFNBQVM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFNBQVM7b0JBQ1QsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekIsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNGLG9GQUE0QyxFQUExQyxjQUFJLEVBQUUsWUFBb0MsQ0FBQztvQkFFbkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFdEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLHFEQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFLO29CQUNMLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNyQixLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQ1o7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNyQixJQUFNLElBQUksR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUQsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2IsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTs0QkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNqRDt3QkFDRCwyQ0FBMkM7NkJBQ3RDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7NEJBQzVCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQzFCLEdBQUc7Z0NBQ0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQ0FDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDbkIsUUFBUSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUU7NEJBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ25CO3dCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzQjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3FCQUN6QztvQkFFRCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFVBQVU7b0JBQ1YsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFNBQVM7b0JBQ1QsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEQsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDZCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ0Ysb0ZBQTRDLEVBQTFDLGNBQUksRUFBRSxZQUFvQyxDQUFDO29CQUVuRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUV0QyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUkscURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULE1BQU07b0JBQ04sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDWjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFFBQVE7b0JBQ1IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFdBQVc7b0JBQ1gsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLElBQU0sSUFBSSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztxQkFDakI7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxPQUFPO29CQUNQLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsV0FBVztvQkFDWCxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNiO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsU0FBUztvQkFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsU0FBUztvQkFDVCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNkLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsTUFBTTtvQkFDTixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNaO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsT0FBTztvQkFDUCxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxXQUFXO29CQUNYLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixJQUFNLElBQUksR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUQsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsT0FBTztvQkFDUCxJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQixLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1osS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxXQUFXO29CQUNYLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxTQUFTO29CQUNULElBQU0sR0FBRyxHQUFHLElBQUkscURBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFLO29CQUNMLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQ1o7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMvQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNmLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLHlEQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLHlEQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLHlEQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLHlEQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLHlEQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RDt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUs7b0JBQ0wsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLHFEQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsVUFBVTtvQkFDVixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNiO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsV0FBVztvQkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFFakQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxTQUFTO29CQUNULElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDakQsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLHFEQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUs7b0JBQ0wsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDWjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULE9BQU87b0JBQ1AsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM1QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFVBQVU7b0JBQ1YsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxFQUFFLEdBQUcsb0RBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdEO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSztvQkFDTCxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUkscURBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxTQUFTO29CQUNULElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ1AsS0FBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7WUFFRCxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBMkJNLGFBQVEsR0FBRyxVQUFDLENBQU8sRUFBRSxLQUFlO1lBQ2xDLHVCQUFLLENBQVU7WUFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcseURBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyx5REFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzlDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUV6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQztRQUVNLGdCQUFXLEdBQUcsVUFBQyxDQUFNLElBQUssUUFBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUM7UUFFakQsV0FBTSxHQUFHLFVBQUMsQ0FBUztZQUN6QixJQUFNLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7b0JBQ2QsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7Z0JBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLHlEQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQUVNLFFBQUcsR0FBRyxVQUFDLE1BQWMsRUFBRSxPQUFlO1lBQzVDLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVNLFdBQU0sR0FBRyxVQUFDLE1BQWMsRUFBRSxPQUFlO1lBQy9DLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7YUFDbkQ7WUFFTyx1QkFBSyxDQUFVO1lBRXZCLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN0RDtZQUVELEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQU9NLFdBQU0sR0FBRyxVQUFDLEtBQWE7WUFDckIsdUJBQUssQ0FBVTtZQUN2QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUM7UUFFTSxRQUFHLEdBQUc7WUFDSix1QkFBSyxDQUFVO1lBQ3ZCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1QyxLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQixLQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFFTSw2QkFBd0IsR0FBRyxVQUFDLE1BQWM7WUFDeEMsdUJBQUssQ0FBVTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUNiLHVDQUNFLEtBQUksQ0FBQyxpQkFBaUIsdUJBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQWMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUksQ0FDcEUsQ0FBQztRQUNKLENBQUMsQ0FBQztRQTdqRUEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHdEQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsRUFBRSxHQUFHLHlEQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUkscURBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBMEJELHVCQUFJLEdBQUosVUFBSyxJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBUztRQUMxQyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQVUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLHFEQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLElBQVksRUFBRSxHQUFXO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUssdUJBQUksR0FBVjs7Ozs7NEJBQ2MscUJBQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQzs7d0JBQTdCLEdBQUcsR0FBRyxTQUF1Qjt3QkFDdkIscUJBQU0sR0FBRyxDQUFDLFdBQVcsRUFBRTs7d0JBQTdCLEdBQUcsR0FBRyxTQUF1Qjt3QkFDN0IsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixRQUFRLEdBQUcsU0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlO3dCQUNyRCxxQkFBTSxJQUFJLENBQUMsR0FBRyxFQUFFOzt3QkFBaEIsU0FBZ0IsQ0FBQzs7Ozs7S0FDbEI7SUFnRE8sMkJBQVEsR0FBaEIsVUFBaUIsS0FBZTtRQUN0QixpQkFBRSxDQUFXO1FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBRUwsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLG9CQUNWLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFDWixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsb0JBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG9CQUNaLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFDWixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsa0NBRVgsRUFBRSxDQUFDLENBQUMscUJBQ0osRUFBRSxDQUFDLENBQUMscUJBQ0osRUFBRSxDQUFDLENBQUMsc0JBQ0gsRUFBRSxDQUFDLEVBQUUsc0JBQ0wsRUFBRSxDQUFDLEVBQUUscUJBRWIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLG9DQUFpQixHQUF6QixVQUEwQixZQUFvQjtRQUNwQyxzQkFBSyxDQUFVO1FBRWpCLDZFQUFxQyxFQUFuQyxjQUFJLEVBQUUsWUFBNkIsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLHNEQUFNLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFnMERPLHVCQUFJLEdBQVo7UUFDVSxzQkFBSyxDQUFVO1FBRXZCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUkscURBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLHdFQUFnQyxFQUE5QixjQUFJLEVBQUUsWUFBd0IsQ0FBQztRQUV2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFVLFFBQWdCLEVBQUUsS0FBWTtRQUM5QixzQkFBSyxDQUFVO1FBRXZCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO1lBQzFELFlBQVk7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUF1RE8sNEJBQVMsR0FBakIsVUFBa0IsTUFBYyxFQUFFLEdBQVcsRUFBRSxDQUFNO1FBQ25ELElBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTBCSCxlQUFDO0FBQUQsQ0FBQztBQUVjLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1bEV4QjtBQUFBO0FBQU8sSUFBTSxLQUFLLEdBQUcsVUFBQyxHQUFxQjtJQUN6QyxJQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDBCO0FBRTVCO0lBQXVDLDZCQUFLO0lBSzFDO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBSk8sU0FBRyxHQUFXLENBQUMsQ0FBQzs7SUFJeEIsQ0FBQztJQUVNLGdCQUFNLEdBQWI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5QkFBSyxHQUFaLFVBQWEsQ0FBUztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTSx1QkFBRyxHQUFWLFVBQVcsQ0FBZ0IsRUFBRSxNQUFrQjtRQUEvQyxpQkFJQztRQUo0QixtQ0FBa0I7UUFDN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSw4Q0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBeEJzQyxLQUFLLEdBd0IzQzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtJQUFBO1FBQ0UsTUFBQyxHQUFRLENBQUMsQ0FBQztRQUVYLE1BQUMsR0FBUSxDQUFDLENBQUM7UUFFWCxNQUFDLEdBQVEsQ0FBQyxDQUFDO1FBRVgsT0FBRSxHQUFRLENBQUMsQ0FBQztRQUVaLE9BQUUsR0FBUSxDQUFDLENBQUM7UUFFWixRQUFHLEdBQVEsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFO0FBQ2dCO0FBQ1g7QUFDQztBQUNOO0FBRTlCO0lBQUE7UUFHRSxNQUFDLEdBQVUsSUFBSSw4Q0FBSyxFQUFFLENBQUM7UUFFdkIsTUFBQyxHQUFVLElBQUksOENBQUssRUFBRSxDQUFDO1FBRXZCLE1BQUMsR0FBVSxJQUFJLDhDQUFLLEVBQUUsQ0FBQztRQUV2QixNQUFDLEdBQVUsSUFBSSw4Q0FBSyxFQUFFLENBQUM7UUFFdkIsTUFBQyxHQUFVLElBQUksOENBQUssRUFBRSxDQUFDO1FBRXZCLE1BQUMsR0FBVSxJQUFJLDhDQUFLLEVBQUUsQ0FBQztRQUV2QixNQUFDLEdBQVUsSUFBSSw4Q0FBSyxFQUFFLENBQUM7UUFFdkIsT0FBRSxHQUFXLElBQUksK0NBQU0sRUFBRSxDQUFDO1FBRTFCLE9BQUUsR0FBVyxJQUFJLCtDQUFNLEVBQUUsQ0FBQztRQUUxQixXQUFNLEdBQWMsa0RBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV2QyxPQUFFLEdBQW1CLElBQUksdURBQWMsRUFBRSxDQUFDO1FBRTFDLGNBQVMsR0FBVSxJQUFJLDhDQUFLLEVBQUUsQ0FBQztJQThDakMsQ0FBQztJQTVDQyxzQkFBSSx3QkFBRTthQUFOO1lBQ0UsT0FBTyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0JBQUU7YUFBTjtZQUNFLE9BQU8sb0RBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQzthQUVELFVBQU8sS0FBYTtZQUNaLDBFQUFrQyxFQUFoQyxjQUFJLEVBQUUsWUFBMEIsQ0FBQztZQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BTkE7SUFRRCxzQkFBSSx3QkFBRTthQUFOO1lBQ0UsT0FBTyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO2FBRUQsVUFBTyxLQUFhO1lBQ1osMEVBQWtDLEVBQWhDLGNBQUksRUFBRSxZQUEwQixDQUFDO1lBQ3pDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FOQTtJQVFELHNCQUFJLHdCQUFFO2FBQU47WUFDRSxPQUFPLG9EQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7YUFFRCxVQUFPLEtBQWE7WUFDWiwwRUFBa0MsRUFBaEMsY0FBSSxFQUFFLFlBQTBCLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQU5BO0lBUUQseUJBQU0sR0FBTjtRQUNFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEdBQUcsSUFBSSxrREFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsSUFBSSxrREFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsSUFBSSxrREFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLEdBQUcsSUFBSSxrREFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsR0FBRyxJQUFJLGtEQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksOENBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDOUVEO0FBQUE7QUFBbUM7QUFFbkM7SUFNRSxjQUFZLEdBQVcsRUFBRSxDQUFhO1FBQWIseUJBQWE7UUFIL0IsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLGFBQVEsR0FBUSxDQUFDLENBQUM7UUFHdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxrQkFBRyxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQkFBVyx3QkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFVRCxzQkFBVyw2QkFBVzthQUF0QjtZQUNFLE9BQU8sa0RBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRU0sbUJBQUksR0FBWCxVQUFZLENBQVM7UUFDbkIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTSxtQkFBSSxHQUFYLFVBQVksQ0FBUztRQUNuQixJQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHNCQUFXLHFCQUFHO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRVMsdUJBQVEsR0FBbEIsVUFBbUIsR0FBVztRQUM1QixJQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFUywwQkFBVyxHQUFyQixVQUFzQixHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDNUQsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ2xCLE9BQU8sa0RBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUMvRDthQUFNLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtZQUN6QixPQUFPLGtEQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDekIsT0FBTyxrREFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXlCO0FBQ1M7QUFFbkM7SUFBb0MsMEJBQUk7SUFDdEMsZ0JBQVksQ0FBVTtlQUNwQixrQkFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQkFBRyxHQUFWLFVBQVcsQ0FBa0I7UUFDM0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUzQixJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sb0JBQUcsR0FBVixVQUFXLENBQWtCO1FBQzNCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFM0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHNCQUFXLGdDQUFZO2FBQXZCO1lBQ0UsT0FBTyxrREFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFTSwyQkFBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxzQkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBeENtQyw2Q0FBSSxHQXdDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDeUI7QUFDUztBQUVuQztJQUFtQyx5QkFBSTtJQUNyQyxlQUFZLENBQVU7ZUFDcEIsa0JBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRU0sbUJBQUcsR0FBVixVQUFXLENBQWlCO1FBQzFCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFM0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0RCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTSxtQkFBRyxHQUFWLFVBQVcsQ0FBaUI7UUFDMUIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUzQixJQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1CQUFHLEdBQVYsVUFBVyxDQUFpQjtRQUMxQixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTNCLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsc0JBQVcsK0JBQVk7YUFBdkI7WUFDRSxPQUFPLGtEQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVNLDBCQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0FwRGtDLDZDQUFJLEdBb0R0Qzs7Ozs7Ozs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQW9DO0FBQ0U7QUFFdEM7SUFBQTtJQWNBLENBQUM7SUFiUSxvQkFBVSxHQUFHLFVBQUMsSUFBVyxFQUFFLEtBQVk7UUFDNUMsV0FBSSxzREFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUEzQyxDQUEyQyxDQUFDO0lBRXZDLGdCQUFNLEdBQUcsVUFBQyxJQUFZLEVBQUUsS0FBYSxJQUFhLFFBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQztJQUV0RSxlQUFLLEdBQUcsVUFBQyxDQUFTO1FBQ3ZCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUkscURBQUssQ0FBQyxJQUFJLENBQUM7WUFDckIsR0FBRyxFQUFFLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNKLGdCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ0Q7QUFDSTtBQUUvQztJQUdFO1FBQ0UsSUFBTSxRQUFRLEdBQUcsSUFBSSwyREFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDBEQUFRLENBQUMsRUFBRSxRQUFRLFlBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksd0RBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRCxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakJuQjtBQUFBO0FBQUE7SUFBQTtJQWdDQSxDQUFDO0lBNUJDLDZCQUFVLEdBQVYsVUFBVyxTQUFxQjtRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN0QixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLFNBQXFCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLEdBQVcsRUFBRSxHQUFRO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBUTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDRjtBQUNEO0FBRTVDO0lBUUUsaUJBQVksUUFBbUI7UUFBL0IsaUJBTUM7UUFUTyxrQkFBYSxHQUFXLElBQUksK0RBQU0sRUFBRSxDQUFDO1FBQ3JDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBcUN4QixVQUFLLEdBQUcsVUFBQyxJQUFZLEVBQUUsR0FBVztZQUN4QyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxPQUFPO2FBQ1I7WUFDRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLENBQUMsRUFBRSw0Q0FBNEM7b0JBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLENBQUMsRUFBRSxlQUFlO29CQUNyQixLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQyxFQUFFLHNCQUFzQjtvQkFDcEIsd0dBQUksQ0FBcUM7b0JBRWpELEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwrREFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUV6RCxJQUFNLE9BQU8sR0FBRyxJQUFJLDhEQUFLLENBQ3ZCLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUNwRCxDQUFDO29CQUVGLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssQ0FBQyxFQUFFLGdCQUFnQjtvQkFDdEIsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLENBQUMsRUFBRSxhQUFhO29CQUNuQixLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQztRQUVNLDZCQUF3QixHQUFHLFVBQUMsSUFBWSxFQUFFLEdBQVc7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsSUFBSSxvQkFBZSxHQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFyRUEsSUFBSSxDQUFDLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBWSxFQUFFLEdBQVcsRUFBRSxHQUFTO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTyx1QkFBSyxHQUFiLFVBQWMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFVO1FBQzVDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBc0NILGNBQUM7QUFBRCxDQUFDOztBQUVELGtCQUFrQjtBQUNsQjtJQUdFLGdCQUFZLFVBQWU7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUpPLDJCQUFVLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBUSxJQUFHLENBQUM7SUFNbkQscUJBQUksR0FBWDtRQUFBLGlCQWdGQztRQS9FQyxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQUM7WUFDbEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFNUMsUUFBUSxHQUFHLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCxpQkFBaUI7b0JBQ2pCLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLGtCQUFrQjtvQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1Asb0JBQW9CO29CQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCxlQUFlO29CQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLHlCQUF5QjtvQkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1AsMEJBQTBCO29CQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0Q7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFDO1lBQ2hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRTVDLFFBQVEsR0FBRyxFQUFFO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1AsaUJBQWlCO29CQUNqQixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCxrQkFBa0I7b0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLG9CQUFvQjtvQkFDcEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1AsZUFBZTtvQkFDZixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCx5QkFBeUI7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLDBCQUEwQjtvQkFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tIFwiLi9tb2RlbHMvQml0XCI7XHJcbmltcG9ydCBCeXRlQXJyYXkgZnJvbSBcIi4vbW9kZWxzL0J5dGVBcnJheVwiO1xyXG5pbXBvcnQgQ3B1U3RhdGUgZnJvbSBcIi4vbW9kZWxzL0NwdVN0YXRlXCI7XHJcbmltcG9ydCBVaW50IGZyb20gXCIuL21vZGVscy9VaW50XCI7XHJcbmltcG9ydCBVaW50MTYgZnJvbSBcIi4vbW9kZWxzL1VpbnQxNlwiO1xyXG5pbXBvcnQgVWludDggZnJvbSBcIi4vbW9kZWxzL1VpbnQ4XCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSBcIi4vLi4vY29tbW9uL2ludGVyZmFjZXMvSUNvbGxlYWd1ZVwiO1xyXG5pbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tIFwiLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3JcIjtcclxuXHJcbmNsYXNzIEVtdWxhdG9yIGltcGxlbWVudHMgSUNvbGxlYWd1ZSB7XHJcbiAgZGVidWc6IGJvb2xlYW47XHJcbiAgc3RhdGU6IENwdVN0YXRlO1xyXG4gIGluOiBCeXRlQXJyYXk7XHJcbiAgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICBpbnN0cnVjdGlvbk51bWJlcjogbnVtYmVyID0gMDtcclxuICBsYXN0SW50ZXJydXB0OiBudW1iZXIgPSAxO1xyXG4gIGN5Y2xlczogbnVtYmVyID0gMDtcclxuICB0ZXN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGVzdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIG1lZGlhdG9yLFxyXG4gICAgZGVidWcsXHJcbiAgICB0ZXN0XHJcbiAgfToge1xyXG4gICAgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICAgIHRlc3Q/OiBib29sZWFuO1xyXG4gICAgZGVidWc/OiBib29sZWFuO1xyXG4gIH0pIHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgQ3B1U3RhdGUoKTtcclxuICAgIHRoaXMuc3RhdGUubWVtb3J5LmFsbG9jKDB4MTAwMDApO1xyXG5cclxuICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcclxuICAgIHRoaXMuZGVidWcgPSAhIWRlYnVnO1xyXG4gICAgdGhpcy50ZXN0ID0gISF0ZXN0O1xyXG5cclxuICAgIHRoaXMuaW4gPSBCeXRlQXJyYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmluLmFsbG9jKDB4OCk7XHJcblxyXG4gICAgbGV0IHBvcnQwID0gMHgwO1xyXG4gICAgcG9ydDAgKz0gMSA8PCAxO1xyXG4gICAgcG9ydDAgKz0gMSA8PCAyO1xyXG4gICAgcG9ydDAgKz0gMSA8PCAzO1xyXG5cclxuICAgIHRoaXMuaW5bMF0gPSBuZXcgVWludDgocG9ydDApO1xyXG5cclxuICAgIGxldCBwb3J0MSA9IDB4MDtcclxuICAgIHBvcnQxICs9IDEgPDwgMztcclxuXHJcbiAgICB0aGlzLmluWzFdID0gbmV3IFVpbnQ4KHBvcnQxKTtcclxuICB9XHJcblxyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY3ljbGVzODA4MCA9IFtcclxuICAvLyAgMCAgIDEgICAyICAgMyAgIDQgICA1ICAgNiAgIDcgICA4ICAgOSAgIEEgICBCICAgQyAgIEQgICBFICAgRlxyXG4gICAgICA0LCAgMTAsIDcsICA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgNywgIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMFxyXG4gICAgICA0LCAgMTAsIDcsICA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgNywgIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMVxyXG4gICAgICA0LCAgMTAsIDE2LCA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgMTYsIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMlxyXG4gICAgICA0LCAgMTAsIDEzLCA1LCAgMTAsIDEwLCAxMCwgNCwgIDQsICAxMCwgMTMsIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gM1xyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNFxyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNVxyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNlxyXG4gICAgICA3LCAgNywgIDcsICA3LCAgNywgIDcsICA3LCAgNywgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gN1xyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gOFxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gOVxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gQVxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gQlxyXG4gICAgICA1LCAgMTAsIDEwLCAxMCwgMTEsIDExLCA3LCAgMTEsIDUsICAxMCwgMTAsIDEwLCAxMSwgMTcsIDcsICAxMSwgLy8gQ1xyXG4gICAgICA1LCAgMTAsIDEwLCAxMCwgMTEsIDExLCA3LCAgMTEsIDUsICAxMCwgMTAsIDEwLCAxMSwgMTcsIDcsICAxMSwgLy8gRFxyXG4gICAgICA1LCAgMTAsIDEwLCAxOCwgMTEsIDExLCA3LCAgMTEsIDUsICA1LCAgMTAsIDQsICAxMSwgMTcsIDcsICAxMSwgLy8gRVxyXG4gICAgICA1LCAgMTAsIDEwLCA0LCAgMTEsIDExLCA3LCAgMTEsIDUsICA1LCAgMTAsIDQsICAxMSwgMTcsIDcsICAxMSAgLy8gRlxyXG5dO1xyXG5cclxuICAvLyBDUFUgcnVubmluZyBhdCAybWh6LCAyIGludGVycnVwdHMgcnVubmluZyBhdCA2MG1oelxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY3ljbGVzVW50aWxJbnRlcnJ1cHQ6IG51bWJlciA9IE1hdGguY2VpbCgyMDAwMDAwIC8gNjAgLyAyKTtcclxuXHJcbiAgc2VuZChwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ/OiBCaXQpIHtcclxuICAgIHRoaXMubWVkaWF0b3Iuc2VuZE91dChwb3J0LCBwb3MsIGJpdCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdD86IEJpdCkge1xyXG4gICAgbGV0IG5ld1ZhbCA9IHZhbDtcclxuICAgIGlmIChiaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBuZXdWYWwgPSB0aGlzLm1vZGlmeUJpdCh0aGlzLmluW3BvcnRdLnZhbCgpLCB2YWwsIGJpdCBhcyBCaXQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbi5zcGxpY2UocG9ydCwgMSwgbmV3IFVpbnQ4KG5ld1ZhbCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2NyZWVuKGFkZHI6IG51bWJlciwgdmFsOiBudW1iZXIpIHtcclxuICAgIHRoaXMubWVkaWF0b3IudXBkYXRlU2NyZWVuKGFkZHIsIHZhbCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbml0KCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJpbnZhZGVyc1wiKTtcclxuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XHJcbiAgICBjb25zdCByb21CeXRlcyA9IFsuLi52aWV3XS5tYXAoTnVtYmVyKTtcclxuICAgIHRoaXMuc3RhdGUubWVtb3J5LnNldChbLi4ucm9tQnl0ZXNdKTsgLy8gIC4uLnJhbUJ5dGVzXHJcbiAgICBhd2FpdCB0aGlzLnJ1bigpO1xyXG4gIH1cclxuXHJcbiAgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuXHJcbiAgICB3aGlsZSAoc3RhdGUucGMudmFsKCkgPiAtMSkge1xyXG4gICAgICBpZiAodGhpcy50ZXN0Q29tcGxldGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgJSAxMDAwID09PSAwKSB7XHJcbiAgICAgICAgLy8gc2xlZXAgZm9yIHNjcmVlbiBwYWludGluZ1xyXG4gICAgICAgIC8vIFRPRE86IHRyeSB0byB3YWl0IGJhc2VkIG9uIGNwdSBoelxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnJlYWROZXh0KCk7XHJcbiAgICAgIHRoaXMuY3ljbGVzID0gKCh0aGlzLmN5Y2xlcyArIG5leHQpICYgMHhmZmZmZmZmZikgPj4+IDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5jeWNsZXMgPj0gdGhpcy5jeWNsZXNVbnRpbEludGVycnVwdCAmJiAhdGhpcy50ZXN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW50RW5hYmxlLnZhbCgpID09PSAxKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sYXN0SW50ZXJydXB0ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbnRlcnJ1cHQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEludGVycnVwdCA9IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGVzIC09IHRoaXMuY3ljbGVzVW50aWxJbnRlcnJ1cHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jeWNsZXM7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBsb2cgPSAoY291bnRlcjogbnVtYmVyLCBvcGNvZGU6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgYXQgJHtjb3VudGVyfSAoMHgke2NvdW50ZXIudG9TdHJpbmcoMTYpfSksIGluc3RydWN0aW9uICR7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbk51bWJlclxyXG4gICAgICB9LCBjb21tYW5kIDB4JHtvcGNvZGUudG9TdHJpbmcoMTYpfWBcclxuICAgICk7XHJcbiAgICB0aGlzLmxvZ1N0YXRlKHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY3ljbGVzOiBcIiwgdGhpcy5jeWNsZXMpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbG9nU3RhdGUoc3RhdGU6IENwdVN0YXRlKSB7XHJcbiAgICBjb25zdCB7IGNjIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgXHJcbiAgICB7XHJcbiAgICAgIGE6ICR7c3RhdGUuYS5oZXh9XHJcbiAgICAgIGJjOiAke3N0YXRlLmJjLmhleH1cclxuICAgICAgZGU6ICR7c3RhdGUuZGUuaGV4fVxyXG4gICAgICBobDogJHtzdGF0ZS5obC5oZXh9XHJcbiAgICAgIHBjOiAke3N0YXRlLnBjLmhleH1cclxuICAgICAgc3A6ICR7c3RhdGUuc3AuaGV4fVxyXG4gICAgICBjYzoge1xyXG4gICAgICAgIHo6ICR7Y2Muen1cclxuICAgICAgICBzOiAke2NjLnN9XHJcbiAgICAgICAgcDogJHtjYy5wfVxyXG4gICAgICAgIGN5OiAke2NjLmN5fVxyXG4gICAgICAgIGFjOiAke2NjLmFjfVxyXG4gICAgICB9XHJcbiAgICB9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSW50ZXJydXB0KGludGVycnVwdE51bTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYyk7XHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgc3RhdGUucGMgPSBuZXcgVWludDE2KDggKiBpbnRlcnJ1cHROdW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkTmV4dCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IG9wY29kZSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKV0udmFsKCk7XHJcblxyXG4gICAgc3dpdGNoIChvcGNvZGUpIHtcclxuICAgICAgY2FzZSAweDAwOiB7XHJcbiAgICAgICAgLy8gTk9QXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDE6XHJcbiAgICAgICAgLy8gTFhJIEIsIEQxNlxyXG4gICAgICAgIHN0YXRlLmJjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHgwMjoge1xyXG4gICAgICAgIC8vIFNUQVggQlxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmJjLnZhbCgpLCBzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwMzoge1xyXG4gICAgICAgIC8vIElOWCBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYmMuYWRkKDEpO1xyXG4gICAgICAgIHN0YXRlLmJjID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA0OiB7XHJcbiAgICAgICAgLy8gSU5SIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5iLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuYiA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwNToge1xyXG4gICAgICAgIC8vIERDUiBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYi5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmIgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDY6IHtcclxuICAgICAgICAvLyBNVkkgQiwgRDhcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDc6IHtcclxuICAgICAgICAvLyBSTENcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHN0YXRlLmEuaGlnaE9yZGVyQml0KTtcclxuICAgICAgICBjb25zdCBhID0gKChzdGF0ZS5hLnZhbCgpICYgMHg4MCkgPj4gNykgfCAoc3RhdGUuYS52YWwoKSA8PCAxKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KGEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDk6IHtcclxuICAgICAgICAvLyBEQUQgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5iYyk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBhOiB7XHJcbiAgICAgICAgLy8gTERBWCBCXHJcbiAgICAgICAgc3RhdGUuYSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5iYy52YWwoKV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGI6IHtcclxuICAgICAgICAvLyBEQ1ggQlxyXG4gICAgICAgIHN0YXRlLmJjID0gc3RhdGUuYmMuc3ViKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBjOiB7XHJcbiAgICAgICAgLy8gSU5SIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5jLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuYyA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZDoge1xyXG4gICAgICAgIC8vIERDUiBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYy5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmMgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGU6IHtcclxuICAgICAgICAvLyBNVkkgQywgRDhcclxuICAgICAgICBzdGF0ZS5jID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGY6IHtcclxuICAgICAgICAvLyBSUkNcclxuICAgICAgICBjb25zdCBsb2IgPSBzdGF0ZS5hLmxvd09yZGVyQml0O1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQobG9iKTtcclxuICAgICAgICBjb25zdCByb3RhdGVkID0gKGxvYiA8PCA3KSB8IChzdGF0ZS5hLnZhbCgpID4+IDEpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgocm90YXRlZCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMToge1xyXG4gICAgICAgIC8vIExYSSBELCBEMTZcclxuICAgICAgICBzdGF0ZS5kZSA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMjoge1xyXG4gICAgICAgIC8vIFNUQVggRFxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmRlLnZhbCgpLCBzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMzoge1xyXG4gICAgICAgIC8vIElOWCBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuZGUuYWRkKDEpO1xyXG4gICAgICAgIHN0YXRlLmRlID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE0OiB7XHJcbiAgICAgICAgLy8gSU5SIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5kLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuZCA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNToge1xyXG4gICAgICAgIC8vIERDUiBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuZC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmQgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTY6IHtcclxuICAgICAgICAvLyBNVkkgRCwgRDhcclxuICAgICAgICBzdGF0ZS5kID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTc6IHtcclxuICAgICAgICAvLyBSQUxcclxuICAgICAgICBjb25zdCBjYXJyeSA9IHN0YXRlLmNjLmN5O1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoc3RhdGUuYS5oaWdoT3JkZXJCaXQpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBjYXJyeSB8IChzdGF0ZS5hLnZhbCgpIDw8IDEpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxOToge1xyXG4gICAgICAgIC8vIERBRCBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLmRlKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWE6IHtcclxuICAgICAgICAvLyBMREFYIERcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W3N0YXRlLmRlLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxYjoge1xyXG4gICAgICAgIC8vIERDWCBEXHJcbiAgICAgICAgc3RhdGUuZGUgPSBzdGF0ZS5kZS5zdWIoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWM6IHtcclxuICAgICAgICAvLyBJTlIgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmUuYWRkKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5lID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFkOiB7XHJcbiAgICAgICAgLy8gRENSIEVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5lLnN1YigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuZSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZToge1xyXG4gICAgICAgIC8vIE1WSSBFLCBEOFxyXG4gICAgICAgIHN0YXRlLmUgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZjoge1xyXG4gICAgICAgIC8vIFJBUlxyXG4gICAgICAgIGNvbnN0IGNhcnJ5ID0gc3RhdGUuY2MuY3k7XHJcbiAgICAgICAgc3RhdGUuY2MuY3kgPSBzdGF0ZS5hLmxvd09yZGVyQml0O1xyXG4gICAgICAgIGNvbnN0IGEgPSAoY2FycnkgPDwgNykgfCAoc3RhdGUuYS52YWwoKSA+PiAxKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KGEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjE6IHtcclxuICAgICAgICAvLyBMWEkgSCwgRDE2XHJcbiAgICAgICAgc3RhdGUuaGwgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjI6IHtcclxuICAgICAgICAvLyBTSExEIGFkZHJcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHV0aWxzLmNvbmNhdChcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDIpLnZhbCgpLFxyXG4gICAgICAgICAgdGhpcy5ieXRlQXQoMSkudmFsKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKGxvY2F0aW9uLCBzdGF0ZS5sKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShsb2NhdGlvbiArIDEsIHN0YXRlLmgpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIzOiB7XHJcbiAgICAgICAgLy8gSU5YIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjQ6IHtcclxuICAgICAgICAvLyBJTlIgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmguYWRkKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5oID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI1OiB7XHJcbiAgICAgICAgLy9cdERDUiBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmggPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjY6IHtcclxuICAgICAgICAvLyBNVkkgSCwgRDhcclxuICAgICAgICBzdGF0ZS5oID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjc6IHtcclxuICAgICAgICAvLyBEQUFcclxuICAgICAgICBsZXQgbG93ID0gc3RhdGUuYS52YWwoKSAmIDB4ZjtcclxuICAgICAgICBsZXQgaGlnaCA9IHN0YXRlLmEudmFsKCkgPj4gNDtcclxuXHJcbiAgICAgICAgaWYgKGxvdyA+IDB4MDkgfHwgc3RhdGUuY2MuYWMgPT09IDEpIHtcclxuICAgICAgICAgIGxvdyArPSAweDY7XHJcbiAgICAgICAgICBpZiAobG93ID4gMHhmKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNjLmFjID0gdG9CaXQoMSk7XHJcbiAgICAgICAgICAgIGhpZ2ggKz0gMHgwMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNjLmFjID0gdG9CaXQoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsb3cgJj0gMHhmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZ2ggPiAweDA5IHx8IHN0YXRlLmNjLmN5ID09PSAxKSB7XHJcbiAgICAgICAgICBoaWdoICs9IDB4NjtcclxuICAgICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodG9CaXQoaGlnaCA+IDB4ZikpO1xyXG4gICAgICAgICAgaGlnaCAmPSAweGY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWwgPSBuZXcgVWludDgoKGhpZ2ggPDwgNCkgfCBsb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjk6IHtcclxuICAgICAgICAvLyBEQUQgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5obCk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJhOiB7XHJcbiAgICAgICAgLy8gTEhMRCBhZGRyXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB1dGlscy5jb25jYXQoXHJcbiAgICAgICAgICB0aGlzLmJ5dGVBdCgyKS52YWwoKSxcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDEpLnZhbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdGF0ZS5sID0gc3RhdGUubWVtb3J5W2xvY2F0aW9uXTtcclxuICAgICAgICBzdGF0ZS5oID0gc3RhdGUubWVtb3J5W2xvY2F0aW9uICsgMV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmI6IHtcclxuICAgICAgICAvLyBEQ1ggSFxyXG4gICAgICAgIHN0YXRlLmhsID0gc3RhdGUuaGwuc3ViKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJjOiB7XHJcbiAgICAgICAgLy8gSU5SIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5sLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUubCA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyZDoge1xyXG4gICAgICAgIC8vIERDUiBMXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUubC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmwgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmU6IHtcclxuICAgICAgICAvLyBNVkkgTCwgRDhcclxuICAgICAgICBzdGF0ZS5sID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmY6IHtcclxuICAgICAgICAvLyBDTUFcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KH5zdGF0ZS5hLnZhbCgpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDMxOiB7XHJcbiAgICAgICAgLy8gTFhJIFNQLCBEMTZcclxuICAgICAgICBzdGF0ZS5zcCA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMjoge1xyXG4gICAgICAgIC8vIFNUQSBhZGRyXHJcbiAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShhZGRyLnZhbCgpLCBzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMzoge1xyXG4gICAgICAgIC8vIElOWCBTUFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnNwLmFkZCgxKTtcclxuICAgICAgICBzdGF0ZS5zcCA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNDoge1xyXG4gICAgICAgIC8vIElOUiBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5hZGQoMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHZhbCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM1OiB7XHJcbiAgICAgICAgLy8gRENSIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnN1YigxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5obC52YWwoKSwgdmFsKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzY6IHtcclxuICAgICAgICAvLyBNVkkgTSwgRDhcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5obC52YWwoKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM3OiB7XHJcbiAgICAgICAgLy8gU1RDXHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM5OiB7XHJcbiAgICAgICAgLy8gREFEIFNQXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLnNwKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2E6IHtcclxuICAgICAgICAvLyBMREEgYWRkclxyXG4gICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHN0YXRlLm1lbW9yeVthZGRyLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzYjoge1xyXG4gICAgICAgIC8vIERDWCBTUFxyXG4gICAgICAgIHN0YXRlLnNwID0gc3RhdGUuc3Auc3ViKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNjOiB7XHJcbiAgICAgICAgLy8gSU5SIEFcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzZDoge1xyXG4gICAgICAgIC8vIERDUiBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2U6IHtcclxuICAgICAgICAvLyBNVkkgQSwgRDhcclxuICAgICAgICBzdGF0ZS5hID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2Y6IHtcclxuICAgICAgICAvLyBDTUNcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5jYy5jeSA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0MDoge1xyXG4gICAgICAgIC8vIE1PViBCLCBCXHJcbiAgICAgICAgdGhpcy5tb3YoXCJiXCIsIFwiYlwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDE6XHJcbiAgICAgICAgLy8gTU9WIEIsIENcclxuICAgICAgICB0aGlzLm1vdihcImJcIiwgXCJjXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDI6XHJcbiAgICAgICAgLy8gTU9WIEIsIERcclxuICAgICAgICB0aGlzLm1vdihcImJcIiwgXCJkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDM6XHJcbiAgICAgICAgLy8gTU9WIEIsIEVcclxuICAgICAgICB0aGlzLm1vdihcImJcIiwgXCJlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDQ6IHtcclxuICAgICAgICAvLyBNT1YgQiwgSFxyXG4gICAgICAgIHRoaXMubW92KFwiYlwiLCBcImhcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ1OiB7XHJcbiAgICAgICAgLy8gTU9WIEIsIExcclxuICAgICAgICB0aGlzLm1vdihcImJcIiwgXCJsXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Njoge1xyXG4gICAgICAgIC8vIE1PViBCLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJiXCIsIFwibVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDc6IHtcclxuICAgICAgICAvLyBNT1YgQiwgQVxyXG4gICAgICAgIHRoaXMubW92KFwiYlwiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ4OiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIEJcclxuICAgICAgICB0aGlzLm1vdihcImNcIiwgXCJiXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0OToge1xyXG4gICAgICAgIC8vIE1PViBDLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoXCJjXCIsIFwiY1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGE6IHtcclxuICAgICAgICAvLyBcdE1PViBDLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoXCJjXCIsIFwiZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGI6IHtcclxuICAgICAgICAvLyBcdE1PViBDLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoXCJjXCIsIFwiZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGM6IHtcclxuICAgICAgICAvLyBNT1YgQywgSFxyXG4gICAgICAgIHRoaXMubW92KFwiY1wiLCBcImhcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRkOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIExcclxuICAgICAgICB0aGlzLm1vdihcImNcIiwgXCJsXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0ZToge1xyXG4gICAgICAgIC8vIE1PViBDLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJjXCIsIFwibVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGY6IHtcclxuICAgICAgICAvLyBNT1YgQywgQVxyXG4gICAgICAgIHRoaXMubW92KFwiY1wiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUwOiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIEJcclxuICAgICAgICB0aGlzLm1vdihcImRcIiwgXCJiXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1MToge1xyXG4gICAgICAgIC8vIE1PViBELCBDXHJcbiAgICAgICAgdGhpcy5tb3YoXCJkXCIsIFwiY1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTI6IHtcclxuICAgICAgICAvL1x0TU9WIEQsIERcclxuICAgICAgICB0aGlzLm1vdihcImRcIiwgXCJkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Mzoge1xyXG4gICAgICAgIC8vIE1PViBELCBFXHJcbiAgICAgICAgdGhpcy5tb3YoXCJkXCIsIFwiZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTQ6IHtcclxuICAgICAgICAvLyBNT1YgRCwgSFxyXG4gICAgICAgIHRoaXMubW92KFwiZFwiLCBcImhcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU1OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIExcclxuICAgICAgICB0aGlzLm1vdihcImRcIiwgXCJsXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Njoge1xyXG4gICAgICAgIC8vIE1PViBELCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJkXCIsIFwibVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTc6IHtcclxuICAgICAgICAvLyBNT1YgRCwgQVxyXG4gICAgICAgIHRoaXMubW92KFwiZFwiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU4OiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEJcclxuICAgICAgICB0aGlzLm1vdihcImVcIiwgXCJiXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1OToge1xyXG4gICAgICAgIC8vIE1PViBFLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoXCJlXCIsIFwiY1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWE6IHtcclxuICAgICAgICAvLyBNT1YgRSwgRFxyXG4gICAgICAgIHRoaXMubW92KFwiZVwiLCBcImRcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDViOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEVcclxuICAgICAgICB0aGlzLm1vdihcImVcIiwgXCJlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Yzoge1xyXG4gICAgICAgIC8vIE1PViBFLCBIXHJcbiAgICAgICAgdGhpcy5tb3YoXCJlXCIsIFwiaFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWQ6IHtcclxuICAgICAgICAvLyBNT1YgRSwgTFxyXG4gICAgICAgIHRoaXMubW92KFwiZVwiLCBcImxcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVlOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbShcImVcIiwgXCJtXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Zjoge1xyXG4gICAgICAgIC8vIE1PViBFLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoXCJlXCIsIFwiYVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjA6IHtcclxuICAgICAgICAvLyBNT1YgSCwgQlxyXG4gICAgICAgIHRoaXMubW92KFwiaFwiLCBcImJcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYxOiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIENcclxuICAgICAgICB0aGlzLm1vdihcImhcIiwgXCJjXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Mjoge1xyXG4gICAgICAgIC8vIE1PViBILCBEXHJcbiAgICAgICAgdGhpcy5tb3YoXCJoXCIsIFwiZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjM6IHtcclxuICAgICAgICAvLyBNT1YgSCwgRVxyXG4gICAgICAgIHRoaXMubW92KFwiaFwiLCBcImVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY0OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEhcclxuICAgICAgICB0aGlzLm1vdihcImhcIiwgXCJoXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2NToge1xyXG4gICAgICAgIC8vIE1PViBILCBMXHJcbiAgICAgICAgdGhpcy5tb3YoXCJoXCIsIFwibFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjY6IHtcclxuICAgICAgICAvLyBNT1YgSCwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKFwiaFwiLCBcIm1cIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY3OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEFcclxuICAgICAgICB0aGlzLm1vdihcImhcIiwgXCJhXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ODoge1xyXG4gICAgICAgIC8vIE1PViBMLCBCXHJcbiAgICAgICAgdGhpcy5tb3YoXCJsXCIsIFwiYlwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Njk6IHtcclxuICAgICAgICAvLyBNT1YgTCwgQ1xyXG4gICAgICAgIHRoaXMubW92KFwibFwiLCBcImNcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZhOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIERcclxuICAgICAgICB0aGlzLm1vdihcImxcIiwgXCJkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Yjoge1xyXG4gICAgICAgIC8vIE1PViBMLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoXCJsXCIsIFwiZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmM6IHtcclxuICAgICAgICAvLyBNT1YgTCwgSFxyXG4gICAgICAgIHRoaXMubW92KFwibFwiLCBcImhcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZkOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIExcclxuICAgICAgICB0aGlzLm1vdihcImxcIiwgXCJsXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ZToge1xyXG4gICAgICAgIC8vIE1PViBMLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJsXCIsIFwibVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmY6IHtcclxuICAgICAgICAvLyBNT1YgTCwgQVxyXG4gICAgICAgIHRoaXMubW92KFwibFwiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcwOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEJcclxuICAgICAgICB0aGlzLm1vdk1lbShcIm1cIiwgXCJiXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3MToge1xyXG4gICAgICAgIC8vIE1PViBNLCBDXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJtXCIsIFwiY1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzI6IHtcclxuICAgICAgICAvLyBNT1YgTSwgRFxyXG4gICAgICAgIHRoaXMubW92TWVtKFwibVwiLCBcImRcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDczOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEVcclxuICAgICAgICB0aGlzLm1vdk1lbShcIm1cIiwgXCJlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3NDoge1xyXG4gICAgICAgIC8vIE1PViBNLCBIXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJtXCIsIFwiaFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzU6IHtcclxuICAgICAgICAvLyBNT1YgTSwgTFxyXG4gICAgICAgIHRoaXMubW92TWVtKFwibVwiLCBcImxcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzc6IHtcclxuICAgICAgICAvLyBNT1YgTSwgQVxyXG4gICAgICAgIHRoaXMubW92TWVtKFwibVwiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc4OiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEJcclxuICAgICAgICB0aGlzLm1vdihcImFcIiwgXCJiXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3OToge1xyXG4gICAgICAgIC8vIFx0TU9WIEEsIENcclxuICAgICAgICB0aGlzLm1vdihcImFcIiwgXCJjXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3YToge1xyXG4gICAgICAgIC8vIE1PViBBLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoXCJhXCIsIFwiZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2I6IHtcclxuICAgICAgICAvLyBcdE1PViBBLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoXCJhXCIsIFwiZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2M6IHtcclxuICAgICAgICAvLyBNT1YgQSwgSFxyXG4gICAgICAgIHRoaXMubW92KFwiYVwiLCBcImhcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdkOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIExcclxuICAgICAgICB0aGlzLm1vdihcImFcIiwgXCJsXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3ZToge1xyXG4gICAgICAgIC8vIE1PViBBLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oXCJhXCIsIFwibVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2Y6IHtcclxuICAgICAgICAvLyBNT1YgQSwgQVxyXG4gICAgICAgIHRoaXMubW92KFwiYVwiLCBcImFcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgwOiB7XHJcbiAgICAgICAgLy8gQUREIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4MToge1xyXG4gICAgICAgIC8vIEFERCBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODI6IHtcclxuICAgICAgICAvLyBBREQgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgzOiB7XHJcbiAgICAgICAgLy8gQUREIEVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5lKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4NDoge1xyXG4gICAgICAgIC8vIEFERCBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODU6IHtcclxuICAgICAgICAvLyBBREQgTFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg2OiB7XHJcbiAgICAgICAgLy8gQUREIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Nzoge1xyXG4gICAgICAgIC8vIEFERCBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODg6IHtcclxuICAgICAgICAvLyBBREMgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmIudmFsKCkgKyBzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODk6IHtcclxuICAgICAgICAvLyBBREMgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmMudmFsKCkgKyBzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGE6IHtcclxuICAgICAgICAvL1x0QURDIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5kLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhiOiB7XHJcbiAgICAgICAgLy9cdEFEQyBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuZS52YWwoKSArIHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Yzoge1xyXG4gICAgICAgIC8vXHRBREMgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmgudmFsKCkgKyBzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGQ6IHtcclxuICAgICAgICAvL1x0QURDIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5sLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhlOiB7XHJcbiAgICAgICAgLy9cdEFEQyBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoXHJcbiAgICAgICAgICBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpICsgc3RhdGUuY2MuY3lcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhmOiB7XHJcbiAgICAgICAgLy9cdEFEQyBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYS52YWwoKSArIHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5MDoge1xyXG4gICAgICAgIC8vIFNVQiBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYik7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTE6IHtcclxuICAgICAgICAvLyBTVUIgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmMpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkyOiB7XHJcbiAgICAgICAgLy8gU1VCIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5kKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Mzoge1xyXG4gICAgICAgIC8vIFNVQiBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTQ6IHtcclxuICAgICAgICAvLyBTVUIgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmgpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk1OiB7XHJcbiAgICAgICAgLy8gU1VCIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5sKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Njoge1xyXG4gICAgICAgIC8vIFNVQiBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTc6IHtcclxuICAgICAgICAvLyBTVUIgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk4OiB7XHJcbiAgICAgICAgLy8gU0JCIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5iLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk5OiB7XHJcbiAgICAgICAgLy8gU0JCIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5jLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDlhOiB7XHJcbiAgICAgICAgLy8gU0JCIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5kLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDliOiB7XHJcbiAgICAgICAgLy8gU0JCIEVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5lLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDljOiB7XHJcbiAgICAgICAgLy8gU0JCIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5oLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDlkOiB7XHJcbiAgICAgICAgLy8gU0JCIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5sLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDllOiB7XHJcbiAgICAgICAgLy8gU0JCIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihcclxuICAgICAgICAgIHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0udmFsKCkgKyBzdGF0ZS5jYy5jeVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWY6IHtcclxuICAgICAgICAvLyBTQkIgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmEudmFsKCkgKyBzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTA6IHtcclxuICAgICAgICAvLyBBTkEgQlxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmIudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTE6IHtcclxuICAgICAgICAvLyBBTkEgQ1xyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmMudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTI6IHtcclxuICAgICAgICAvLyBBTkEgRFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmQudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTM6IHtcclxuICAgICAgICAvLyBBTkEgRVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmUudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTQ6IHtcclxuICAgICAgICAvLyBBTkEgSFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmgudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTU6IHtcclxuICAgICAgICAvLyBBTkEgTFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmwudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTY6IHtcclxuICAgICAgICAvLyBBTkEgTVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0udmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTc6IHtcclxuICAgICAgICAvLyBBTkEgQVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEuYW5kKHN0YXRlLmEudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTg6IHtcclxuICAgICAgICAvLyBYUkEgQlxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5iLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTk6IHtcclxuICAgICAgICAvLyBYUkEgQ1xyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5jLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWE6IHtcclxuICAgICAgICAvLyBYUkEgRFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5kLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWI6IHtcclxuICAgICAgICAvLyBYUkEgRVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWM6IHtcclxuICAgICAgICAvLyBYUkEgSFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5oLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWQ6IHtcclxuICAgICAgICAvLyBYUkEgTFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWU6IHtcclxuICAgICAgICAvLyBYUkEgTVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWY6IHtcclxuICAgICAgICAvLyBYUkEgQVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjA6IHtcclxuICAgICAgICAvLyBPUkEgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5iLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjE6IHtcclxuICAgICAgICAvLyBPUkEgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5jLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjI6IHtcclxuICAgICAgICAvLyBPUkEgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5kLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjM6IHtcclxuICAgICAgICAvLyBPUkEgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjQ6IHtcclxuICAgICAgICAvLyBPUkEgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5oLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjU6IHtcclxuICAgICAgICAvLyBPUkEgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjY6IHtcclxuICAgICAgICAvLyBPUkEgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjc6IHtcclxuICAgICAgICAvLyBPUkEgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjg6IHtcclxuICAgICAgICAvLyBDTVAgQlxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI5OiB7XHJcbiAgICAgICAgLy8gQ01QIENcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiYToge1xyXG4gICAgICAgIC8vIENNUCBEXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmI6IHtcclxuICAgICAgICAvLyBDTVAgRVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5lKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJjOiB7XHJcbiAgICAgICAgLy8gQ01QIEhcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiZDoge1xyXG4gICAgICAgIC8vIENNUCBMXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmU6IHtcclxuICAgICAgICAvLyBDTVAgTVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJmOiB7XHJcbiAgICAgICAgLy8gQ01QIEFcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMDoge1xyXG4gICAgICAgIC8vIFJOWlxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzE6IHtcclxuICAgICAgICAvLyBQT1AgQlxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5iYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMyOiB7XHJcbiAgICAgICAgLy8gSk5aIGFkZHJlc3NcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMzoge1xyXG4gICAgICAgIC8vIEpNUCBhZGRyZXNzXHJcbiAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM0OiB7XHJcbiAgICAgICAgLy8gQ05aIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzU6IHtcclxuICAgICAgICAvLyBQVVNIIEJcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5jKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjNjoge1xyXG4gICAgICAgIC8vIEFESSBieXRlXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQodGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM3OiB7XHJcbiAgICAgICAgLy8gUlNUXHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHN0YXRlLnBjLmFkZCgzKSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gbmV3IFVpbnQxNigweDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjODoge1xyXG4gICAgICAgIC8vIFJaXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjOToge1xyXG4gICAgICAgIC8vIFJFVFxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgc3RhdGUuc3AuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2E6IHtcclxuICAgICAgICAvLyBKWiBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNjOiB7XHJcbiAgICAgICAgLy8gQ1ogYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNkOiB7XHJcbiAgICAgICAgLy8gQ0FMTCBhZGRyZXNzXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjZToge1xyXG4gICAgICAgIC8vIEFDSSBEOFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHRoaXMuYnl0ZUF0KDEpLnZhbCgpICsgc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDA6IHtcclxuICAgICAgICAvLyBSTkNcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMToge1xyXG4gICAgICAgIC8vIFBPUCBEXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmRlID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDI6IHtcclxuICAgICAgICAvLyBcdEpOQyBhZGRyZXNzXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAwKSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQzOiB7XHJcbiAgICAgICAgLy8gT1VUIEQ4XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlc3QpIHtcclxuICAgICAgICAgIHRoaXMuc2VuZCh0aGlzLmJ5dGVBdCgxKS52YWwoKSwgc3RhdGUuYS52YWwoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFdyaXRpbmcgdG8gb3V0IGluZGljYXRlcyB0aGUgZW5kIG9mIGEgdGVzdFxyXG4gICAgICAgICAgdGhpcy50ZXN0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNDoge1xyXG4gICAgICAgIC8vIENOQyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBEXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDY6IHtcclxuICAgICAgICAvLyBTVUkgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1Yih0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDc6IHtcclxuICAgICAgICAvLyBSU1QgMlxyXG4gICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYy5hZGQoMikpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IG5ldyBVaW50OCgweDEwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDg6IHtcclxuICAgICAgICAvLyBSQ1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGE6IHtcclxuICAgICAgICAvLyBKQyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgICAgc3RhdGUucGMgPSBhZGRyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGI6IHtcclxuICAgICAgICAvLyBJTiBEOFxyXG4gICAgICAgIGlmICh0aGlzLnRlc3QpIHtcclxuICAgICAgICAgIGlmIChzdGF0ZS5jLnZhbCgpID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhdGUuZS52YWwoKSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gcHJpbnQgZnJvbSBtZW1vcnkgYXQgKERFKSB1bnRpbCAnJCcgY2hhclxyXG4gICAgICAgICAgZWxzZSBpZiAoc3RhdGUuYy52YWwoKSA9PT0gOSkge1xyXG4gICAgICAgICAgICBsZXQgYWRkciA9IHN0YXRlLmRlLnZhbCgpO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhdGUubWVtb3J5W2FkZHIrK10udmFsKCkpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvZGUpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXRlLm1lbW9yeVthZGRyXS52YWwoKSkgIT09IFwiJFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KDB4ZmYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5hID0gdGhpcy5pblt0aGlzLmJ5dGVBdCgxKS52YWwoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYzoge1xyXG4gICAgICAgIC8vIENDIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkZToge1xyXG4gICAgICAgIC8vIFNCSSBEOFxyXG4gICAgICAgIGNvbnN0IGJ5dGVXaXRoQ2FycnkgPSB0aGlzLmJ5dGVBdCgxKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKGJ5dGVXaXRoQ2FycnkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRmOiB7XHJcbiAgICAgICAgLy8gUlNUIDNcclxuICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoc3RhdGUucGMuYWRkKDMpKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMgPSBuZXcgVWludDgoMHgxOCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGUwOiB7XHJcbiAgICAgICAgLy8gUlBPXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMToge1xyXG4gICAgICAgIC8vIFBPUCBIXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTI6IHtcclxuICAgICAgICAvLyBKUE8gYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgICAgc3RhdGUucGMgPSBhZGRyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTM6IHtcclxuICAgICAgICAvLyBYVEhMXHJcbiAgICAgICAgY29uc3QgbCA9IHN0YXRlLmwuY2xvbmUoKTtcclxuICAgICAgICBjb25zdCBoID0gc3RhdGUuaC5jbG9uZSgpO1xyXG4gICAgICAgIHN0YXRlLmwgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLmggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCkgKyAxXTtcclxuICAgICAgICBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldID0gbDtcclxuICAgICAgICBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCkgKyAxXSA9IGg7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTQ6IHtcclxuICAgICAgICAvLyBDUE8gYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBIXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUubCk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU2OiB7XHJcbiAgICAgICAgLy8gQU5JIEQ4XHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS5hbmQodGhpcy5ieXRlQXQoMSkudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhhbmQpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBhbmQ7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlODoge1xyXG4gICAgICAgIC8vIFJQRVxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTk6IHtcclxuICAgICAgICAvLyBQQ0hMXHJcbiAgICAgICAgc3RhdGUucGMgPSBzdGF0ZS5obC5jbG9uZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYToge1xyXG4gICAgICAgIC8vIEpQRSBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYjoge1xyXG4gICAgICAgIC8vIFhDSEdcclxuICAgICAgICBjb25zdCBoID0gc3RhdGUuaC5jbG9uZSgpO1xyXG4gICAgICAgIGNvbnN0IGwgPSBzdGF0ZS5sLmNsb25lKCk7XHJcbiAgICAgICAgc3RhdGUuaCA9IHN0YXRlLmQuY2xvbmUoKTtcclxuICAgICAgICBzdGF0ZS5sID0gc3RhdGUuZS5jbG9uZSgpO1xyXG4gICAgICAgIHN0YXRlLmQgPSBoO1xyXG4gICAgICAgIHN0YXRlLmUgPSBsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVjOiB7XHJcbiAgICAgICAgLy8gQ1BFIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVlOiB7XHJcbiAgICAgICAgLy8gWFJJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gbmV3IFVpbnQ4KHN0YXRlLmEudmFsKCkgXiB0aGlzLmJ5dGVBdCgxKS52YWwoKSk7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCgwKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlZjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYwOiB7XHJcbiAgICAgICAgLy8gUlBcclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYxOiB7XHJcbiAgICAgICAgLy8gUE9QIFBTV1xyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV0udmFsKCk7XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5hID0gaGlnaDtcclxuICAgICAgICBzdGF0ZS5jYy5zID0gdG9CaXQoKGxvdyA+PiA3KSAmIDEpO1xyXG4gICAgICAgIHN0YXRlLmNjLnogPSB0b0JpdCgobG93ID4+IDYpICYgMSk7XHJcbiAgICAgICAgc3RhdGUuY2MuYWMgPSB0b0JpdCgobG93ID4+IDQpICYgMSk7XHJcbiAgICAgICAgc3RhdGUuY2MucCA9IHRvQml0KChsb3cgPj4gMikgJiAxKTtcclxuICAgICAgICBzdGF0ZS5jYy5jeSA9IHRvQml0KGxvdyAmIDEpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjI6IHtcclxuICAgICAgICAvLyBKUCBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDApIHtcclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjM6IHtcclxuICAgICAgICAvLyBESVxyXG4gICAgICAgIHN0YXRlLmludEVuYWJsZSA9IG5ldyBVaW50OCgwKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNDoge1xyXG4gICAgICAgIC8vIENQIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNToge1xyXG4gICAgICAgIC8vIFBVU0ggUFNXXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuZ2V0UHN3KCkpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNjoge1xyXG4gICAgICAgIC8vIE9SSSBEOFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCB0aGlzLmJ5dGVBdCgxKS52YWwoKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KHZhbCk7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCgwKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Zjg6IHtcclxuICAgICAgICAvLyBSTVxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Zjk6IHtcclxuICAgICAgICAvLyBTUEhMXHJcbiAgICAgICAgc3RhdGUuc3AgPSBzdGF0ZS5obC5jbG9uZSgpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZhOiB7XHJcbiAgICAgICAgLy8gSk0gYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAxKSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZiOiB7XHJcbiAgICAgICAgLy8gRUlcclxuICAgICAgICBzdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmM6IHtcclxuICAgICAgICAvLyBDTSBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZToge1xyXG4gICAgICAgIC8vIENQSSBEOFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmY6IHtcclxuICAgICAgICAvLyBSU1QgN1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKC0xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIrKztcclxuICAgIHJldHVybiB0aGlzLmN5Y2xlczgwODBbb3Bjb2RlXTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNhbGwoKSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG5cclxuICAgIHRoaXMuY3ljbGVzICs9IDY7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSYW0obG9jYXRpb246IG51bWJlciwgdmFsdWU6IFVpbnQ4KSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIHN0YXRlLm1lbW9yeS5zcGxpY2UobG9jYXRpb24sIDEsIHZhbHVlLmNsb25lKCkpO1xyXG5cclxuICAgIGlmICghdGhpcy50ZXN0ICYmIGxvY2F0aW9uID49IDB4MjQwMCAmJiBsb2NhdGlvbiA8PSAweDNmZmYpIHtcclxuICAgICAgLy8gdmlkZW8gcmFtXHJcbiAgICAgIHRoaXMudXBkYXRlU2NyZWVuKGxvY2F0aW9uLCB2YWx1ZS52YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZsYWdzID0gKG46IFVpbnQsIGNhcnJ5PzogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHN0YXRlLmNjLnogPSB0b0JpdCgobi52YWwoKSAmIDB4ZmYpID09PSAwKTtcclxuICAgIHN0YXRlLmNjLnMgPSB0b0JpdCgobi52YWwoKSAmIDB4ODApID09PSAweDgwKTtcclxuICAgIHN0YXRlLmNjLnAgPSB0aGlzLnBhcml0eShuLnZhbCgpKTtcclxuICAgIHN0YXRlLmNjLmFjID0gbi5hdXhDYXJyeTtcclxuXHJcbiAgICBpZiAoY2FycnkpIHtcclxuICAgICAgdGhpcy5zZXRDYXJyeUJpdChuLmNhcnJ5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNldENhcnJ5Qml0ID0gKG46IEJpdCkgPT4gKHRoaXMuc3RhdGUuY2MuY3kgPSBuKTtcclxuXHJcbiAgcHJpdmF0ZSBwYXJpdHkgPSAobjogbnVtYmVyKTogQml0ID0+IHtcclxuICAgIGNvbnN0IHNpemUgPSA4O1xyXG4gICAgbGV0IHBhcml0eSA9IDA7XHJcbiAgICBsZXQgY2FsYyA9IG47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICBpZiAoY2FsYyAmIDB4MSkge1xyXG4gICAgICAgIHBhcml0eSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGMgPSBjYWxjID4+IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9CaXQoIShwYXJpdHkgJSAyKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb3YgPSAoc3JjS2V5OiBzdHJpbmcsIGRlc3RLZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHNyY0tleSA9PT0gXCJtXCIgfHwgZGVzdEtleSA9PT0gXCJtXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3JjIGFuZCBkZXN0IGNhbm5vdCBiZSBhIG1lbW9yeSBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlW3NyY0tleV0gPSB0aGlzLnN0YXRlW2Rlc3RLZXldLmNsb25lKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS5wYy5pbmNyKDEpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbW92TWVtID0gKHNyY0tleTogc3RyaW5nLCBkZXN0S2V5OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIGlmIChzcmNLZXkgIT09IFwibVwiICYmIGRlc3RLZXkgIT09IFwibVwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm11c3Qgc3BlY2lmeSBhIG1lbW9yeSBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChzcmNLZXkgPT09IFwibVwiKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCBzdGF0ZVtkZXN0S2V5XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZVtzcmNLZXldID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb2RpZnlCaXQobnVtYmVyOiBudW1iZXIsIHBvczogbnVtYmVyLCBiOiBCaXQpIHtcclxuICAgIGNvbnN0IG1hc2sgPSAxIDw8IHBvcztcclxuICAgIHJldHVybiAobnVtYmVyICYgfm1hc2spIHwgKChiIDw8IHBvcykgJiBtYXNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnl0ZUF0ID0gKGluZGV4OiBudW1iZXIpOiBVaW50OCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKSArIGluZGV4XTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuXHJcbiAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcblxyXG4gICAgdGhpcy5jeWNsZXMgKz0gNjtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbiA9IChvcGNvZGU6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYFVuaW1wbGVtZW50ZWQgY29kZSBhdCBpbnN0cnVjdGlvbiAke1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXJcclxuICAgICAgfSBhdCBmb3Igb3Bjb2RlICR7b3Bjb2RlLnRvU3RyaW5nKDE2KX0gYXQgb2Zmc2V0ICR7c3RhdGUucGMudmFsKCl9YFxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXVsYXRvcjtcclxuIiwidHlwZSBCaXQgPSAwIHwgMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0JpdCA9IChhcmc6IGJvb2xlYW4gfCBudW1iZXIpOiBCaXQgPT4ge1xyXG4gIGNvbnN0IHZhbCA9IHR5cGVvZiBhcmcgPT09ICdudW1iZXInID8gISFhcmcgOiBhcmc7XHJcbiAgcmV0dXJuIHZhbCA/IDEgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQml0O1xyXG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCeXRlQXJyYXkgZXh0ZW5kcyBBcnJheSB7XHJcbiAgW2tleTogbnVtYmVyXTogVWludDg7XHJcblxyXG4gIHByaXZhdGUgbWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUoKTogQnl0ZUFycmF5IHtcclxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKEJ5dGVBcnJheS5wcm90b3R5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFsbG9jKG46IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5wdXNoKG5ldyBVaW50OCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQobjogQXJyYXk8bnVtYmVyPiwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICBuLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5zcGxpY2Uob2Zmc2V0ICsgaW5kZXgsIDEsIG5ldyBVaW50OCh2YWwpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQml0IGZyb20gJy4vQml0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uQ29kZXMge1xuICB6OiBCaXQgPSAwO1xuXG4gIHM6IEJpdCA9IDA7XG5cbiAgcDogQml0ID0gMDtcblxuICBjeTogQml0ID0gMDtcblxuICBhYzogQml0ID0gMDtcblxuICBwYWQ6IEJpdCA9IDA7XG59XG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XG5pbXBvcnQgVWludDE2IGZyb20gJy4vVWludDE2JztcbmltcG9ydCBDb25kaXRpb25Db2RlcyBmcm9tICcuL0NvbmRpdGlvbkNvZGVzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gJy4vQnl0ZUFycmF5JztcbmltcG9ydCB7IHRvQml0IH0gZnJvbSAnLi9CaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcHVTdGF0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBhOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGI6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgYzogVWludDggPSBuZXcgVWludDgoKTtcblxuICBkOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGU6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgaDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBsOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIHNwOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XG5cbiAgcGM6IFVpbnQxNiA9IG5ldyBVaW50MTYoKTtcblxuICBtZW1vcnk6IEJ5dGVBcnJheSA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcblxuICBjYzogQ29uZGl0aW9uQ29kZXMgPSBuZXcgQ29uZGl0aW9uQ29kZXMoKTtcblxuICBpbnRFbmFibGU6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgZ2V0IGFmKCk6IFVpbnQxNiB7XG4gICAgcmV0dXJuIHV0aWxzLmNvbmNhdFVpbnQodGhpcy5hLCB0aGlzLmdldFBzdygpKTtcbiAgfVxuXG4gIGdldCBiYygpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuYiwgdGhpcy5jKTtcbiAgfVxuXG4gIHNldCBiYyhieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmIgPSBoaWdoO1xuICAgIHRoaXMuYyA9IGxvdztcbiAgfVxuXG4gIGdldCBkZSgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuZCwgdGhpcy5lKTtcbiAgfVxuXG4gIHNldCBkZShieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmQgPSBoaWdoO1xuICAgIHRoaXMuZSA9IGxvdztcbiAgfVxuXG4gIGdldCBobCgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuaCwgdGhpcy5sKTtcbiAgfVxuXG4gIHNldCBobChieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmggPSBoaWdoO1xuICAgIHRoaXMubCA9IGxvdztcbiAgfVxuXG4gIGdldFBzdygpOiBVaW50OCB7XG4gICAgbGV0IG51bSA9IDA7XG4gICAgbnVtIHw9IHRvQml0KHRoaXMuY2MucykgPDwgNztcbiAgICBudW0gfD0gdG9CaXQodGhpcy5jYy56KSA8PCA2O1xuICAgIG51bSB8PSB0b0JpdCh0aGlzLmNjLmFjKSA8PCA0O1xuICAgIG51bSB8PSB0b0JpdCh0aGlzLmNjLnApIDw8IDI7XG4gICAgbnVtIHw9IDEgPDwgMTtcbiAgICBudW0gfD0gdG9CaXQodGhpcy5jYy5jeSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OChudW0pO1xuICB9XG59XG4iLCJpbXBvcnQgQml0LCB7IHRvQml0IH0gZnJvbSAnLi9CaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVWludCB7XHJcbiAgcHJvdGVjdGVkIG51bTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBtYXg6IG51bWJlcjtcclxuICBwdWJsaWMgY2Fycnk6IEJpdCA9IDA7XHJcbiAgcHVibGljIGF1eENhcnJ5OiBCaXQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXg6IG51bWJlciwgbjogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICB0aGlzLm51bSA9IG4gJiB0aGlzLm1heDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm51bS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1plcm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW0gPT09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgYWRkKG46IFVpbnQgfCBudW1iZXIpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3Qgc3ViKG46IFVpbnQgfCBudW1iZXIpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGdldCBoaWdoT3JkZXJCaXQoKTogQml0O1xyXG5cclxuICBwdWJsaWMgZ2V0IGxvd09yZGVyQml0KCk6IEJpdCB7XHJcbiAgICByZXR1cm4gdG9CaXQodGhpcy5udW0gJiAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbmNyKG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWwgPSAodGhpcy5udW0gKyBuKSAmIHRoaXMubWF4O1xyXG4gICAgdGhpcy5udW0gPSB2YWw7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlY3IobjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm51bSAtIG4pICYgdGhpcy5tYXg7XHJcbiAgICB0aGlzLm51bSA9IHZhbDtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhleCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtLnRvU3RyaW5nKDE2KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDYXJyeSh2YWw6IG51bWJlcik6IEJpdCB7XHJcbiAgICBjb25zdCBjYXJyeSA9IHZhbCA8IDAgfHwgdmFsID4gdGhpcy5tYXggPyAxIDogMDtcclxuXHJcbiAgICByZXR1cm4gY2Fycnk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0QXV4Q2FycnkobnVtOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHR5cGU6IHN0cmluZyk6IEJpdCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgcmV0dXJuIHRvQml0KCgoKG51bSAmIDB4ZikgKyAodmFsdWUgJiAweGYpKSAmIDB4MTApID09PSAweDEwKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N1YicpIHtcclxuICAgICAgcmV0dXJuIHRvQml0KCEoKG51bSAmIDB4ZikgLSAodmFsdWUgJiAweGYpIDwgMCkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYW5kJykge1xyXG4gICAgICByZXR1cm4gdG9CaXQoKChudW0gfCB2YWx1ZSkgJiAweDA4KSAhPT0gMCk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2B0eXBlYCBtdXN0IGJlIFwiYWRkXCIsIFwic3ViXCIsIG9yIFwiYW5kXCInKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFVpbnQgZnJvbSAnLi9VaW50JztcclxuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpbnQxNiBleHRlbmRzIFVpbnQge1xyXG4gIGNvbnN0cnVjdG9yKG4/OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKDB4ZmZmZiwgbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XHJcbiAgICBjb25zdCB2YWwgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogbi52YWwoKTtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMubnVtICsgdmFsO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50MTYocmVzICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIHJldC5jYXJyeSA9IHRoaXMuZ2V0Q2FycnkocmVzKTtcclxuICAgIHJldC5hdXhDYXJyeSA9IHRoaXMuZ2V0QXV4Q2FycnkodGhpcy5udW0sIHJlcywgJ2FkZCcpO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3ViKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XHJcbiAgICBjb25zdCB2YWwgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogbi52YWwoKTtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMubnVtIC0gdmFsO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50MTYocmVzICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIHJldC5jYXJyeSA9IHRoaXMuZ2V0Q2FycnkocmVzKTtcclxuICAgIHJldC5hdXhDYXJyeSA9IHRoaXMuZ2V0QXV4Q2FycnkodGhpcy5udW0sIHZhbCwgJ3N1YicpO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhpZ2hPcmRlckJpdCgpOiBCaXQge1xyXG4gICAgcmV0dXJuIHRvQml0KHRoaXMubnVtID4+IDE1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGVMZWZ0KCk6IFVpbnQxNiB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQxNigodGhpcy5udW0gPDwgMSkgJiAweGZmZmYpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFVpbnQxNiB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQxNih0aGlzLm51bSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBVaW50IGZyb20gJy4vVWludCc7XHJcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaW50OCBleHRlbmRzIFVpbnQge1xyXG4gIGNvbnN0cnVjdG9yKG4/OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKDB4ZmYsIG4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChuOiBVaW50OCB8IG51bWJlcik6IFVpbnQ4IHtcclxuICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiBuLnZhbCgpO1xyXG4gICAgY29uc3QgcmVzID0gdGhpcy5udW0gKyB2YWw7XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHJlcyk7XHJcblxyXG4gICAgcmV0LmNhcnJ5ID0gdGhpcy5nZXRDYXJyeShyZXMpO1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gdGhpcy5nZXRBdXhDYXJyeSh0aGlzLm51bSwgdmFsLCAnYWRkJyk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWIobjogVWludDggfCBudW1iZXIpOiBVaW50OCB7XHJcbiAgICBjb25zdCB2YWwgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogbi52YWwoKTtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMubnVtIC0gdmFsO1xyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50OChyZXMpO1xyXG5cclxuICAgIHJldC5jYXJyeSA9IHRoaXMuZ2V0Q2FycnkocmVzKTtcclxuICAgIHJldC5hdXhDYXJyeSA9IHRoaXMuZ2V0QXV4Q2FycnkodGhpcy5udW0sIHZhbCwgJ3N1YicpO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYW5kKG46IFVpbnQ4IHwgbnVtYmVyKTogVWludDgge1xyXG4gICAgY29uc3QgdmFsID0gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IG4udmFsKCk7XHJcbiAgICBjb25zdCByZXMgPSB0aGlzLm51bSAmIHZhbDtcclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDgocmVzKTtcclxuXHJcbiAgICByZXQuY2FycnkgPSB0aGlzLmdldENhcnJ5KHJlcyk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSB0aGlzLmdldEF1eENhcnJ5KHRoaXMubnVtLCB2YWwsICdhbmQnKTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoaWdoT3JkZXJCaXQoKTogQml0IHtcclxuICAgIHJldHVybiB0b0JpdCh0aGlzLm51bSA+PiA3KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGVMZWZ0KCk6IFVpbnQ4IHtcclxuICAgIHJldHVybiBuZXcgVWludDgoKHRoaXMubnVtIDw8IDEpICYgMHhmZik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogVWludDgge1xyXG4gICAgcmV0dXJuIG5ldyBVaW50OCh0aGlzLm51bSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBVaW50OCBmcm9tICcuLi9tb2RlbHMvVWludDgnO1xuaW1wb3J0IFVpbnQxNiBmcm9tICcuLi9tb2RlbHMvVWludDE2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBzdGF0aWMgY29uY2F0VWludCA9IChtb3N0OiBVaW50OCwgbGVhc3Q6IFVpbnQ4KTogVWludDE2ID0+XG4gICAgbmV3IFVpbnQxNigobW9zdC52YWwoKSA8PCA4KSB8IGxlYXN0LnZhbCgpKTtcblxuICBzdGF0aWMgY29uY2F0ID0gKG1vc3Q6IG51bWJlciwgbGVhc3Q6IG51bWJlcik6IG51bWJlciA9PiAobW9zdCA8PCA4KSB8IGxlYXN0O1xuXG4gIHN0YXRpYyBzcGxpdCA9IChuOiBVaW50MTYpID0+IHtcbiAgICBjb25zdCBoaWdoID0gbi52YWwoKSA+PiA4O1xuICAgIGNvbnN0IGxvdyA9IG4udmFsKCkgJiAweGZmO1xuICAgIHJldHVybiB7XG4gICAgICBoaWdoOiBuZXcgVWludDgoaGlnaCksXG4gICAgICBsb3c6IG5ldyBVaW50OChsb3cpLFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IEVtdWxhdG9yIGZyb20gJy4vZW11bGF0b3IvZW11bGF0b3InO1xuaW1wb3J0IHsgTWVkaWF0b3IgfSBmcm9tICcuL21lZGlhdG9yL01lZGlhdG9yJztcblxuY2xhc3MgTWFpbiB7XG4gIGVtdWxhdG9yOiBFbXVsYXRvcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuICAgIHRoaXMuZW11bGF0b3IgPSBuZXcgRW11bGF0b3IoeyBtZWRpYXRvciB9KTtcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIobWVkaWF0b3IpO1xuXG4gICAgbWVkaWF0b3IucmVnaXN0ZXJPdXQodGhpcy5lbXVsYXRvcik7XG4gICAgbWVkaWF0b3IucmVnaXN0ZXJJbihwYWludGVyKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZW11bGF0b3IuaW5pdCgpO1xuICB9XG59XG5cbm5ldyBNYWluKCkuc3RhcnQoKTtcbiIsImltcG9ydCB7IElDb2xsZWFndWUgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lDb2xsZWFndWUnO1xyXG5pbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3InO1xyXG5pbXBvcnQgQml0IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9CaXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU1lZGlhdG9yIHtcclxuICBpbjogSUNvbGxlYWd1ZSB8IHVuZGVmaW5lZDtcclxuICBvdXQ6IElDb2xsZWFndWUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHJlZ2lzdGVySW4oY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKTogdm9pZCB7XHJcbiAgICB0aGlzLmluID0gY29sbGVhZ3VlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPdXQoY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKTogdm9pZCB7XHJcbiAgICB0aGlzLm91dCA9IGNvbGxlYWd1ZTtcclxuICB9XHJcblxyXG4gIHNlbmRPdXQocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0OiBCaXQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpbmAgaXMgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluLnJlY2VpdmUocG9ydCwgdmFsLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgc2VuZEluKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3V0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYG91dGAgaXMgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm91dC5yZWNlaXZlKHBvcnQsIHZhbCwgYml0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgaW5gIGlzIG5vdCBpbml0aWFsaXplZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbi51cGRhdGVTY3JlZW4oYWRkciwgdmFsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lZGlhdG9yIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3InO1xyXG5pbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JQ29sbGVhZ3VlJztcclxuaW1wb3J0IEJpdCBmcm9tICcuLi9lbXVsYXRvci9tb2RlbHMvQml0JztcclxuaW1wb3J0IFVpbnQxNiBmcm9tICcuLi9lbXVsYXRvci9tb2RlbHMvVWludDE2JztcclxuaW1wb3J0IFVpbnQ4IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9VaW50OCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuLi9lbXVsYXRvci91dGlscy91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlciBpbXBsZW1lbnRzIElDb2xsZWFndWUge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XHJcbiAgcHVibGljIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgcHJpdmF0ZSBldmVudHM6IEV2ZW50cztcclxuICBwcml2YXRlIHNoaWZ0UmVnaXN0ZXI6IFVpbnQxNiA9IG5ldyBVaW50MTYoKTtcclxuICBwcml2YXRlIHNoaWZ0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogSU1lZGlhdG9yKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0ICYmIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XHJcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHModGhpcy5zZW5kLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5ldmVudHMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2VuZChwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBiaXQ/OiBCaXQpOiB2b2lkIHtcclxuICAgIHRoaXMubWVkaWF0b3Iuc2VuZEluKHBvcnQsIHZhbCwgYml0KTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmUocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0PzogQml0KTogdm9pZCB7XHJcbiAgICB0aGlzLndyaXRlKHBvcnQsIHZhbCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY3JlZW4oYWRkcjogbnVtYmVyLCB2YWw6IG51bWJlcikge1xyXG4gICAgY29uc3QgYmFzZSA9IGFkZHIgLSAweDI0MDA7XHJcbiAgICBjb25zdCB5ID0gfigoKGJhc2UgJiAweDFmKSAqIDgpICYgMHhmZikgJiAweGZmO1xyXG4gICAgY29uc3QgeCA9IGJhc2UgPj4gNTtcclxuXHJcbiAgICBjb25zdCBiaW4gPSB2YWwudG9TdHJpbmcoMikucGFkU3RhcnQoOCwgJzAnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnBhaW50KHgsIHkgKyBpLCBOdW1iZXIoYmluLmNoYXJBdChpKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYWludCh4OiBudW1iZXIsIHk6IG51bWJlciwgb246IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gb24gPyAnd2hpdGUnIDogJ2JsYWNrJztcclxuICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHggKiAyLCB5ICogMiwgMiwgMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdyaXRlID0gKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChwb3J0ID09PSA2IHx8IHBvcnQgPT09IDMgfHwgcG9ydCA9PSA1KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN3aXRjaCAocG9ydCkge1xyXG4gICAgICBjYXNlIDI6IC8vIHNoaWZ0IHJlZ2lzdGVyIHJlc3VsdCBvZmZzZXQgKGJpdHMgMCwxLDIpXHJcbiAgICAgICAgdGhpcy5zaGlmdE9mZnNldCA9IHZhbCAmIDB4NztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOiAvL3NvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IC8vIGZpbGwgc2hpZnQgcmVnaXN0ZXJcclxuICAgICAgICBjb25zdCB7IGhpZ2ggfSA9IHV0aWxzLnNwbGl0KHRoaXMuc2hpZnRSZWdpc3Rlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpZnRSZWdpc3RlciA9IG5ldyBVaW50MTYoKHZhbCA8PCA4KSB8IGhpZ2gudmFsKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBzaGlmdGVkID0gbmV3IFVpbnQ4KFxyXG4gICAgICAgICAgKHRoaXMuc2hpZnRSZWdpc3Rlci52YWwoKSA8PCB0aGlzLnNoaWZ0T2Zmc2V0KSA+PiA4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kKDMsIHNoaWZ0ZWQudmFsKCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IC8vIHNvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDY6IC8vIGRlYnVnIHBvcnRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdW5pbXBsZW1lbnRlZEluc3RydWN0aW9uID0gKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBVbmltcGxlbWVudGVkIGNvZGU6IHBvcnQgJHtwb3J0fSB3aXRoIHZhbHVlICR7dmFsfWApO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IGFkZCBpbnB1dFxyXG5jbGFzcyBFdmVudHMge1xyXG4gIHByaXZhdGUgb25LZXlQcmVzcyhwb3J0OiBudW1iZXIsIGJpdDogbnVtYmVyLCB2YWw6IEJpdCkge31cclxuXHJcbiAgY29uc3RydWN0b3Iob25LZXlQcmVzczogYW55KSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MgPSBvbktleVByZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB3aW5kb3cub25rZXlkb3duID0gZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcclxuXHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAxNjoge1xyXG4gICAgICAgICAgLy8gc2hpZnQgKGNyZWRpdClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCAwLCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDM3OiB7XHJcbiAgICAgICAgICAvLyBrZXkgbGVmdCAobGVmdClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCA1LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDM5OiB7XHJcbiAgICAgICAgICAvLyBrZXkgcmlnaHQgKHJpZ2h0KVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDEsIDYsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMzI6IHtcclxuICAgICAgICAgIC8vIHNwYWNlIChmaXJlKVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDEsIDQsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgNDk6IHtcclxuICAgICAgICAgIC8vIDEgKGZpcnN0IHBsYXllciBzdGFydClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCAyLCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDUwOiB7XHJcbiAgICAgICAgICAvLyAyIChzZWNvbmQgcGxheWVyIHN0YXJ0KVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDEsIDEsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25rZXl1cCA9IGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgMTY6IHtcclxuICAgICAgICAgIC8vIHNoaWZ0IChjcmVkaXQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgMCwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzNzoge1xyXG4gICAgICAgICAgLy8ga2V5IGxlZnQgKGxlZnQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgNSwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzOToge1xyXG4gICAgICAgICAgLy8ga2V5IHJpZ2h0IChyaWdodClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCA2LCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDMyOiB7XHJcbiAgICAgICAgICAvLyBzcGFjZSAoZmlyZSlcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCA0LCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDQ5OiB7XHJcbiAgICAgICAgICAvLyAxIChmaXJzdCBwbGF5ZXIgc3RhcnQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgMiwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSA1MDoge1xyXG4gICAgICAgICAgLy8gMiAoc2Vjb25kIHBsYXllciBzdGFydClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCAxLCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=