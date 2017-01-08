/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _style=__webpack_require__(1);var _style2=_interopRequireDefault(_style);var _domToImage=__webpack_require__(5);var _domToImage2=_interopRequireDefault(_domToImage);var _fileSaver=__webpack_require__(6);var _fileSaver2=_interopRequireDefault(_fileSaver);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// Fetch the main element that the app lives within
	// Import libs to save images to your hard drive...
	var element=document.getElementById('bernie');// Lame...
	// Import inline styles
	var loadScript=function loadScript(){window.twttr=function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src='https://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f)};return t}(document,'script','twitter-wjs')};// Convert the page to an image and force download
	var saveJpeg=function saveJpeg(){var filename=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'trumped.jpg';_domToImage2.default.toJpeg(element,{quality:0.95}).then(function(dataUrl){/*
	      var link = document.createElement('a');
	      link.download = filename;
	      link.href = dataUrl;
	      link.click();
	      */_fileSaver2.default.saveAs(dataUrl,filename)})};var savePng=function savePng(){var filename=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'trumped.png';_domToImage2.default.toBlob(element).then(function(blob){_fileSaver2.default.saveAs(blob,filename)})};console.log('Loading Twitter API',twttr);loadScript();window.addEventListener('load',function onPage(){console.log('Page loaded',twttr._e)});twttr.ready(function onTwitter(){console.log('Twitter API loaded');//loadTweets( '511181794914627584' );
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?importLoaders=1!./../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body{\r\n\tfont-family: 'PT Sans', sans-serif;\r\n\tfont-weight:700;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6{\r\n  text-transform:uppercase;\r\n\tfont-size:1.5em;\r\n\tline-height:1.4;\r\n\tletter-spacing:1px;\r\n}\r\nh1,h3{\r\n\tfont-weight:400;\r\n}\r\np{\r\n\tfont-size:1.2em;\r\n\tline-height:1.4;\r\n}\r\n#bernie{\r\n  position:relative;\r\n  display:block;\r\n}\r\n\r\n#bernie header{\r\n  position:absolute;\r\n\r\n  bottom:10%;\r\n  left:10%;\r\n  right:30%;\r\n\tbackground-color:rgba( 0,0,255, 0.5);\r\n\tcolor:white;\r\n}\r\n\r\n#bernie header h1,\r\n#bernie header h2{\r\n\tpadding:0.6% 0.9%;\r\n}\r\n\r\n#bernie header h1{\r\n\tfloat:left;\r\n\tbackground-color:#0000ee;\r\n\tpadding-right:0.9%;\r\n}\r\n#bernie header h2{\r\n\tbackground-color:#fff;\r\n\tcolor:#0000ee;\r\n\tpadding-left:5.6%;\r\n}\r\n#bernie header h3{\r\n\tpadding:0.3% 1.6%;\r\n\tcolor:yellow;\r\n}\r\n#bernie header h3:before{\r\n\tcontent:'';\r\n\tposition:Absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\trght:0;\r\n\theight:3px;\r\n\tbackground-color:yellow;\r\n}\r\n#bernie header p{\r\n\tpadding:0.3% 1.6% 0.9% 1.6%;\r\n}\r\n\r\n#tweets {\r\n  height: 38.1%;\r\n  width: 35.7%;\r\n  border: 1px solid white;\r\n  display:block;\r\n  position:absolute;\r\n  right:3.64%;\r\n  top:7.6%;\r\n  overflow:hidden;\r\n  background-color:white;\r\n  transform-origin: 0 0;\r\n  transform:matrix3d(\r\n    0.9540269737641875,\t0.027696512946097283,\t0,\t-0.00005195596189053812,\r\n    -0.028108321556537537,\t1.0299547060760865,\t0,\t0.00005039899712347379,\r\n    0,\t0,\t1,\t0,\r\n    40,\t5,\t0,\t1\r\n  )\r\n}\r\n\r\n.twitter-timeline{\r\n\r\n}\r\n\r\n.bg{\r\n  position:relative;\r\n  z-index:-1;\r\n}\r\n\r\n.copyright{\r\n  position:absolute;\r\n  z-index:99;\r\n  bottom:0;\r\n  right:0;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function (global) {
	    'use strict';

	    var util = newUtil();
	    var inliner = newInliner();
	    var fontFaces = newFontFaces();
	    var images = newImages();

	    var domtoimage = {
	        toSvg: toSvg,
	        toPng: toPng,
	        toJpeg: toJpeg,
	        toBlob: toBlob,
	        toPixelData: toPixelData,
	        impl: {
	            fontFaces: fontFaces,
	            images: images,
	            util: util,
	            inliner: inliner
	        }
	    };

	    if (true)
	        module.exports = domtoimage;
	    else
	        global.domtoimage = domtoimage;


	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options
	     * @param {Function} options.filter - Should return true if passed node should be included in the output
	     *          (excluding node means excluding it's children as well). Not called on the root node.
	     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
	     * @param {Number} options.width - width to be applied to node before rendering.
	     * @param {Number} options.height - height to be applied to node before rendering.
	     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
	     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
	                defaults to 1.0.
	     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
	     * */
	    function toSvg(node, options) {
	        options = options || {};
	        return Promise.resolve(node)
	            .then(function (node) {
	                return cloneNode(node, options.filter, true);
	            })
	            .then(embedFonts)
	            .then(inlineImages)
	            .then(applyOptions)
	            .then(function (clone) {
	                return makeSvgDataUri(clone,
	                    options.width || util.width(node),
	                    options.height || util.height(node)
	                );
	            });

	        function applyOptions(clone) {
	            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

	            if (options.width) clone.style.width = options.width + 'px';
	            if (options.height) clone.style.height = options.height + 'px';

	            if (options.style)
	                Object.keys(options.style).forEach(function (property) {
	                    clone.style[property] = options.style[property];
	                });

	            return clone;
	        }
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
	     * */
	    function toPixelData(node, options) {
	        return draw(node, options || {})
	            .then(function (canvas) {
	                return canvas.getContext('2d').getImageData(
	                    0,
	                    0,
	                    util.width(node),
	                    util.height(node)
	                ).data;
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
	     * */
	    function toPng(node, options) {
	        return draw(node, options || {})
	            .then(function (canvas) {
	                return canvas.toDataURL();
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
	     * */
	    function toJpeg(node, options) {
	        options = options || {};
	        return draw(node, options)
	            .then(function (canvas) {
	                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
	            });
	    }

	    /**
	     * @param {Node} node - The DOM Node object to render
	     * @param {Object} options - Rendering options, @see {@link toSvg}
	     * @return {Promise} - A promise that is fulfilled with a PNG image blob
	     * */
	    function toBlob(node, options) {
	        return draw(node, options || {})
	            .then(util.canvasToBlob);
	    }

	    function draw(domNode, options) {
	        return toSvg(domNode, options)
	            .then(util.makeImage)
	            .then(util.delay(100))
	            .then(function (image) {
	                var canvas = newCanvas(domNode);
	                canvas.getContext('2d').drawImage(image, 0, 0);
	                return canvas;
	            });

	        function newCanvas(domNode) {
	            var canvas = document.createElement('canvas');
	            canvas.width = options.width || util.width(domNode);
	            canvas.height = options.height || util.height(domNode);

	            if (options.bgcolor) {
	                var ctx = canvas.getContext('2d');
	                ctx.fillStyle = options.bgcolor;
	                ctx.fillRect(0, 0, canvas.width, canvas.height);
	            }

	            return canvas;
	        }
	    }

	    function cloneNode(node, filter, root) {
	        if (!root && filter && !filter(node)) return Promise.resolve();

	        return Promise.resolve(node)
	            .then(makeNodeCopy)
	            .then(function (clone) {
	                return cloneChildren(node, clone, filter);
	            })
	            .then(function (clone) {
	                return processClone(node, clone);
	            });

	        function makeNodeCopy(node) {
	            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
	            return node.cloneNode(false);
	        }

	        function cloneChildren(original, clone, filter) {
	            var children = original.childNodes;
	            if (children.length === 0) return Promise.resolve(clone);

	            return cloneChildrenInOrder(clone, util.asArray(children), filter)
	                .then(function () {
	                    return clone;
	                });

	            function cloneChildrenInOrder(parent, children, filter) {
	                var done = Promise.resolve();
	                children.forEach(function (child) {
	                    done = done
	                        .then(function () {
	                            return cloneNode(child, filter);
	                        })
	                        .then(function (childClone) {
	                            if (childClone) parent.appendChild(childClone);
	                        });
	                });
	                return done;
	            }
	        }

	        function processClone(original, clone) {
	            if (!(clone instanceof Element)) return clone;

	            return Promise.resolve()
	                .then(cloneStyle)
	                .then(clonePseudoElements)
	                .then(copyUserInput)
	                .then(fixSvg)
	                .then(function () {
	                    return clone;
	                });

	            function cloneStyle() {
	                copyStyle(window.getComputedStyle(original), clone.style);

	                function copyStyle(source, target) {
	                    if (source.cssText) target.cssText = source.cssText;
	                    else copyProperties(source, target);

	                    function copyProperties(source, target) {
	                        util.asArray(source).forEach(function (name) {
	                            target.setProperty(
	                                name,
	                                source.getPropertyValue(name),
	                                source.getPropertyPriority(name)
	                            );
	                        });
	                    }
	                }
	            }

	            function clonePseudoElements() {
	                [':before', ':after'].forEach(function (element) {
	                    clonePseudoElement(element);
	                });

	                function clonePseudoElement(element) {
	                    var style = window.getComputedStyle(original, element);
	                    var content = style.getPropertyValue('content');

	                    if (content === '' || content === 'none') return;

	                    var className = util.uid();
	                    clone.className = clone.className + ' ' + className;
	                    var styleElement = document.createElement('style');
	                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
	                    clone.appendChild(styleElement);

	                    function formatPseudoElementStyle(className, element, style) {
	                        var selector = '.' + className + ':' + element;
	                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
	                        return document.createTextNode(selector + '{' + cssText + '}');

	                        function formatCssText(style) {
	                            var content = style.getPropertyValue('content');
	                            return style.cssText + ' content: ' + content + ';';
	                        }

	                        function formatCssProperties(style) {

	                            return util.asArray(style)
	                                .map(formatProperty)
	                                .join('; ') + ';';

	                            function formatProperty(name) {
	                                return name + ': ' +
	                                    style.getPropertyValue(name) +
	                                    (style.getPropertyPriority(name) ? ' !important' : '');
	                            }
	                        }
	                    }
	                }
	            }

	            function copyUserInput() {
	                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
	                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
	            }

	            function fixSvg() {
	                if (!(clone instanceof SVGElement)) return;
	                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	                if (!(clone instanceof SVGRectElement)) return;
	                ['width', 'height'].forEach(function (attribute) {
	                    var value = clone.getAttribute(attribute);
	                    if (!value) return;

	                    clone.style.setProperty(attribute, value);
	                });
	            }
	        }
	    }

	    function embedFonts(node) {
	        return fontFaces.resolveAll()
	            .then(function (cssText) {
	                var styleNode = document.createElement('style');
	                node.appendChild(styleNode);
	                styleNode.appendChild(document.createTextNode(cssText));
	                return node;
	            });
	    }

	    function inlineImages(node) {
	        return images.inlineAll(node)
	            .then(function () {
	                return node;
	            });
	    }

	    function makeSvgDataUri(node, width, height) {
	        return Promise.resolve(node)
	            .then(function (node) {
	                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
	                return new XMLSerializer().serializeToString(node);
	            })
	            .then(util.escapeXhtml)
	            .then(function (xhtml) {
	                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
	            })
	            .then(function (foreignObject) {
	                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
	                    foreignObject + '</svg>';
	            })
	            .then(function (svg) {
	                return 'data:image/svg+xml;charset=utf-8,' + svg;
	            });
	    }

	    function newUtil() {
	        return {
	            escape: escape,
	            parseExtension: parseExtension,
	            mimeType: mimeType,
	            dataAsUrl: dataAsUrl,
	            isDataUrl: isDataUrl,
	            canvasToBlob: canvasToBlob,
	            resolveUrl: resolveUrl,
	            getAndEncode: getAndEncode,
	            uid: uid(),
	            delay: delay,
	            asArray: asArray,
	            escapeXhtml: escapeXhtml,
	            makeImage: makeImage,
	            width: width,
	            height: height
	        };

	        function mimes() {
	            /*
	             * Only WOFF and EOT mime types for fonts are 'real'
	             * see http://www.iana.org/assignments/media-types/media-types.xhtml
	             */
	            var WOFF = 'application/font-woff';
	            var JPEG = 'image/jpeg';

	            return {
	                'woff': WOFF,
	                'woff2': WOFF,
	                'ttf': 'application/font-truetype',
	                'eot': 'application/vnd.ms-fontobject',
	                'png': 'image/png',
	                'jpg': JPEG,
	                'jpeg': JPEG,
	                'gif': 'image/gif',
	                'tiff': 'image/tiff',
	                'svg': 'image/svg+xml'
	            };
	        }

	        function parseExtension(url) {
	            var match = /\.([^\.\/]*?)$/g.exec(url);
	            if (match) return match[1];
	            else return '';
	        }

	        function mimeType(url) {
	            var extension = parseExtension(url).toLowerCase();
	            return mimes()[extension] || '';
	        }

	        function isDataUrl(url) {
	            return url.search(/^(data:)/) !== -1;
	        }

	        function toBlob(canvas) {
	            return new Promise(function (resolve) {
	                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
	                var length = binaryString.length;
	                var binaryArray = new Uint8Array(length);

	                for (var i = 0; i < length; i++)
	                    binaryArray[i] = binaryString.charCodeAt(i);

	                resolve(new Blob([binaryArray], {
	                    type: 'image/png'
	                }));
	            });
	        }

	        function canvasToBlob(canvas) {
	            if (canvas.toBlob)
	                return new Promise(function (resolve) {
	                    canvas.toBlob(resolve);
	                });

	            return toBlob(canvas);
	        }

	        function resolveUrl(url, baseUrl) {
	            var doc = document.implementation.createHTMLDocument();
	            var base = doc.createElement('base');
	            doc.head.appendChild(base);
	            var a = doc.createElement('a');
	            doc.body.appendChild(a);
	            base.href = baseUrl;
	            a.href = url;
	            return a.href;
	        }

	        function uid() {
	            var index = 0;

	            return function () {
	                return 'u' + fourRandomChars() + index++;

	                function fourRandomChars() {
	                    /* see http://stackoverflow.com/a/6248722/2519373 */
	                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
	                }
	            };
	        }

	        function makeImage(uri) {
	            return new Promise(function (resolve, reject) {
	                var image = new Image();
	                image.onload = function () {
	                    resolve(image);
	                };
	                image.onerror = reject;
	                image.src = uri;
	            });
	        }

	        function getAndEncode(url) {
	            var TIMEOUT = 30000;

	            return new Promise(function (resolve) {
	                var request = new XMLHttpRequest();

	                request.onreadystatechange = done;
	                request.ontimeout = timeout;
	                request.responseType = 'blob';
	                request.timeout = TIMEOUT;
	                request.open('GET', url, true);
	                request.send();

	                function done() {
	                    if (request.readyState !== 4) return;

	                    if (request.status !== 200) {
	                        fail('cannot fetch resource: ' + url + ', status: ' + request.status);
	                        return;
	                    }

	                    var encoder = new FileReader();
	                    encoder.onloadend = function () {
	                        var content = encoder.result.split(/,/)[1];
	                        resolve(content);
	                    };
	                    encoder.readAsDataURL(request.response);
	                }

	                function timeout() {
	                    fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
	                }

	                function fail(message) {
	                    console.error(message);
	                    resolve('');
	                }
	            });
	        }

	        function dataAsUrl(content, type) {
	            return 'data:' + type + ';base64,' + content;
	        }

	        function escape(string) {
	            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
	        }

	        function delay(ms) {
	            return function (arg) {
	                return new Promise(function (resolve) {
	                    setTimeout(function () {
	                        resolve(arg);
	                    }, ms);
	                });
	            };
	        }

	        function asArray(arrayLike) {
	            var array = [];
	            var length = arrayLike.length;
	            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
	            return array;
	        }

	        function escapeXhtml(string) {
	            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
	        }

	        function width(node) {
	            var leftBorder = px(node, 'border-left-width');
	            var rightBorder = px(node, 'border-right-width');
	            return node.scrollWidth + leftBorder + rightBorder;
	        }

	        function height(node) {
	            var topBorder = px(node, 'border-top-width');
	            var bottomBorder = px(node, 'border-bottom-width');
	            return node.scrollHeight + topBorder + bottomBorder;
	        }

	        function px(node, styleProperty) {
	            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
	            return parseFloat(value.replace('px', ''));
	        }
	    }

	    function newInliner() {
	        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

	        return {
	            inlineAll: inlineAll,
	            shouldProcess: shouldProcess,
	            impl: {
	                readUrls: readUrls,
	                inline: inline
	            }
	        };

	        function shouldProcess(string) {
	            return string.search(URL_REGEX) !== -1;
	        }

	        function readUrls(string) {
	            var result = [];
	            var match;
	            while ((match = URL_REGEX.exec(string)) !== null) {
	                result.push(match[1]);
	            }
	            return result.filter(function (url) {
	                return !util.isDataUrl(url);
	            });
	        }

	        function inline(string, url, baseUrl, get) {
	            return Promise.resolve(url)
	                .then(function (url) {
	                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
	                })
	                .then(get || util.getAndEncode)
	                .then(function (data) {
	                    return util.dataAsUrl(data, util.mimeType(url));
	                })
	                .then(function (dataUrl) {
	                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
	                });

	            function urlAsRegex(url) {
	                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
	            }
	        }

	        function inlineAll(string, baseUrl, get) {
	            if (nothingToInline()) return Promise.resolve(string);

	            return Promise.resolve(string)
	                .then(readUrls)
	                .then(function (urls) {
	                    var done = Promise.resolve(string);
	                    urls.forEach(function (url) {
	                        done = done.then(function (string) {
	                            return inline(string, url, baseUrl, get);
	                        });
	                    });
	                    return done;
	                });

	            function nothingToInline() {
	                return !shouldProcess(string);
	            }
	        }
	    }

	    function newFontFaces() {
	        return {
	            resolveAll: resolveAll,
	            impl: {
	                readAll: readAll
	            }
	        };

	        function resolveAll() {
	            return readAll(document)
	                .then(function (webFonts) {
	                    return Promise.all(
	                        webFonts.map(function (webFont) {
	                            return webFont.resolve();
	                        })
	                    );
	                })
	                .then(function (cssStrings) {
	                    return cssStrings.join('\n');
	                });
	        }

	        function readAll() {
	            return Promise.resolve(util.asArray(document.styleSheets))
	                .then(getCssRules)
	                .then(selectWebFontRules)
	                .then(function (rules) {
	                    return rules.map(newWebFont);
	                });

	            function selectWebFontRules(cssRules) {
	                return cssRules
	                    .filter(function (rule) {
	                        return rule.type === CSSRule.FONT_FACE_RULE;
	                    })
	                    .filter(function (rule) {
	                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
	                    });
	            }

	            function getCssRules(styleSheets) {
	                var cssRules = [];
	                styleSheets.forEach(function (sheet) {
	                    try {
	                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
	                    } catch (e) {
	                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
	                    }
	                });
	                return cssRules;
	            }

	            function newWebFont(webFontRule) {
	                return {
	                    resolve: function resolve() {
	                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
	                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
	                    },
	                    src: function () {
	                        return webFontRule.style.getPropertyValue('src');
	                    }
	                };
	            }
	        }
	    }

	    function newImages() {
	        return {
	            inlineAll: inlineAll,
	            impl: {
	                newImage: newImage
	            }
	        };

	        function newImage(element) {
	            return {
	                inline: inline
	            };

	            function inline(get) {
	                if (util.isDataUrl(element.src)) return Promise.resolve();

	                return Promise.resolve(element.src)
	                    .then(get || util.getAndEncode)
	                    .then(function (data) {
	                        return util.dataAsUrl(data, util.mimeType(element.src));
	                    })
	                    .then(function (dataUrl) {
	                        return new Promise(function (resolve, reject) {
	                            element.onload = resolve;
	                            element.onerror = reject;
	                            element.src = dataUrl;
	                        });
	                    });
	            }
	        }

	        function inlineAll(node) {
	            if (!(node instanceof Element)) return Promise.resolve(node);

	            return inlineBackground(node)
	                .then(function () {
	                    if (node instanceof HTMLImageElement)
	                        return newImage(node).inline();
	                    else
	                        return Promise.all(
	                            util.asArray(node.childNodes).map(function (child) {
	                                return inlineAll(child);
	                            })
	                        );
	                });

	            function inlineBackground(node) {
	                var background = node.style.getPropertyValue('background');

	                if (!background) return Promise.resolve(node);

	                return inliner.inlineAll(background)
	                    .then(function (inlined) {
	                        node.style.setProperty(
	                            'background',
	                            inlined,
	                            node.style.getPropertyPriority('background')
	                        );
	                    })
	                    .then(function () {
	                        return node;
	                    });
	            }
	        }
	    }
	})(this);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.3.2
	 * 2016-06-16 18:25:19
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */

	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

	var saveAs = saveAs || (function(view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var
			  doc = view.document
			  // only get URL when necessary in case Blob.js hasn't overridden it yet
			, get_URL = function() {
				return view.URL || view.webkitURL || view;
			}
			, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
			, can_use_save_link = "download" in save_link
			, click = function(node) {
				var event = new MouseEvent("click");
				node.dispatchEvent(event);
			}
			, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
			, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
			, throw_outside = function(ex) {
				(view.setImmediate || view.setTimeout)(function() {
					throw ex;
				}, 0);
			}
			, force_saveable_type = "application/octet-stream"
			// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
			, arbitrary_revoke_timeout = 1000 * 40 // in ms
			, revoke = function(file) {
				var revoker = function() {
					if (typeof file === "string") { // file is an object URL
						get_URL().revokeObjectURL(file);
					} else { // file is a File
						file.remove();
					}
				};
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
			, dispatch = function(filesaver, event_types, event) {
				event_types = [].concat(event_types);
				var i = event_types.length;
				while (i--) {
					var listener = filesaver["on" + event_types[i]];
					if (typeof listener === "function") {
						try {
							listener.call(filesaver, event || filesaver);
						} catch (ex) {
							throw_outside(ex);
						}
					}
				}
			}
			, auto_bom = function(blob) {
				// prepend BOM for UTF-8 XML and text/* types (including HTML)
				// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
				if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
					return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
				}
				return blob;
			}
			, FileSaver = function(blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				// First try a.download, then web filesystem, then object URLs
				var
					  filesaver = this
					, type = blob.type
					, force = type === force_saveable_type
					, object_url
					, dispatch_all = function() {
						dispatch(filesaver, "writestart progress write writeend".split(" "));
					}
					// on any filesys errors revert to saving with object URLs
					, fs_error = function() {
						if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
							// Safari doesn't allow downloading of blob urls
							var reader = new FileReader();
							reader.onloadend = function() {
								var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
								var popup = view.open(url, '_blank');
								if(!popup) view.location.href = url;
								url=undefined; // release reference before dispatching
								filesaver.readyState = filesaver.DONE;
								dispatch_all();
							};
							reader.readAsDataURL(blob);
							filesaver.readyState = filesaver.INIT;
							return;
						}
						// don't create more object URLs than needed
						if (!object_url) {
							object_url = get_URL().createObjectURL(blob);
						}
						if (force) {
							view.location.href = object_url;
						} else {
							var opened = view.open(object_url, "_blank");
							if (!opened) {
								// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
								view.location.href = object_url;
							}
						}
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
						revoke(object_url);
					}
				;
				filesaver.readyState = filesaver.INIT;

				if (can_use_save_link) {
					object_url = get_URL().createObjectURL(blob);
					setTimeout(function() {
						save_link.href = object_url;
						save_link.download = name;
						click(save_link);
						dispatch_all();
						revoke(object_url);
						filesaver.readyState = filesaver.DONE;
					});
					return;
				}

				fs_error();
			}
			, FS_proto = FileSaver.prototype
			, saveAs = function(blob, name, no_auto_bom) {
				return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
			}
		;
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function(blob, name, no_auto_bom) {
				name = name || blob.name || "download";

				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name);
			};
		}

		FS_proto.abort = function(){};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;

		FS_proto.error =
		FS_proto.onwritestart =
		FS_proto.onprogress =
		FS_proto.onwrite =
		FS_proto.onabort =
		FS_proto.onerror =
		FS_proto.onwriteend =
			null;

		return saveAs;
	}(
		   typeof self !== "undefined" && self
		|| typeof window !== "undefined" && window
		|| this.content
	));
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window

	if (typeof module !== "undefined" && module.exports) {
	  module.exports.saveAs = saveAs;
	} else if (("function" !== "undefined" && __webpack_require__(7) !== null) && (__webpack_require__(8) !== null)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return saveAs;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
/******/ ]);