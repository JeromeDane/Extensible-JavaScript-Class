(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ExtensibleClass = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* 
 * The MIT License
 *
 * Copyright 2015 Jerome Dane <jeromedane.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function ExtensibleClass() {
	console.log('ExtensibleClass.constructor() called');
	console.log(arguments);
};

/**
 * Extends one class from this class.
 *
 * @param {Function} subClass The class that should be inheriting things. This could be just an inline constructor for the new class.
 * @return {Object} Newly extended sub class
 */
ExtensibleClass.extend = function(input) {
	
	var superClass = this;
	
	// if no sub class constructor is supplied, use the super class constructor
	var subClassConstructor = this;
	
	if(typeof(input) === "function") {
		// sub class constructor supplied as function
		subClassConstructor = input;
	} else if(input && typeof(input.constructor) === "function") {
		// sub class constructor supplied as property of argument
		subClassConstructor = input.constructor;
	}
	
	// store the super class before calling the sub class constructor
	subClass = function() {
		this._super = superClass.prototype;
		subClassConstructor.prototype.constructor.apply(this, arguments);
	};
	
	// duplicate the source properties and methods into the sub class
	subClass.prototype = Object.create(superClass.prototype);
	
	// if input is an object with properties and methods apply them to the subclass
	if(input && typeof(input) === 'object') {
		for(var name in input) {
			if(name !== "constructor") {	// the constructor has already been applied, so ignore it
				subClass.prototype[name] = input[name];
			}
		}
	}
	
	// restore the subclass constructor to either the subclass or parent constructor if no constructor supplied;
	subClass.prototype.constructor = subClassConstructor;
	
	// copy the static extend method onto the subclass so that it can extend subclasses
	subClass.extend = superClass.extend;
	
	// create a reference to the super/parent class
	subClass.super = superClass.prototype;
	
	// return the subclass to allow for inline use
	return subClass;
};

// export ExtensibleClass in CommonJS module style
module.exports = ExtensibleClass;
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXh0ZW5zaWJsZS1jbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogXG4gKiBUaGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNSBKZXJvbWUgRGFuZSA8amVyb21lZGFuZS5jb20+LlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZnVuY3Rpb24gRXh0ZW5zaWJsZUNsYXNzKCkge1xuXHRjb25zb2xlLmxvZygnRXh0ZW5zaWJsZUNsYXNzLmNvbnN0cnVjdG9yKCkgY2FsbGVkJyk7XG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZHMgb25lIGNsYXNzIGZyb20gdGhpcyBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJDbGFzcyBUaGUgY2xhc3MgdGhhdCBzaG91bGQgYmUgaW5oZXJpdGluZyB0aGluZ3MuIFRoaXMgY291bGQgYmUganVzdCBhbiBpbmxpbmUgY29uc3RydWN0b3IgZm9yIHRoZSBuZXcgY2xhc3MuXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ld2x5IGV4dGVuZGVkIHN1YiBjbGFzc1xuICovXG5FeHRlbnNpYmxlQ2xhc3MuZXh0ZW5kID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XG5cdHZhciBzdXBlckNsYXNzID0gdGhpcztcblx0XG5cdC8vIGlmIG5vIHN1YiBjbGFzcyBjb25zdHJ1Y3RvciBpcyBzdXBwbGllZCwgdXNlIHRoZSBzdXBlciBjbGFzcyBjb25zdHJ1Y3RvclxuXHR2YXIgc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXM7XG5cdFxuXHRpZih0eXBlb2YoaW5wdXQpID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHQvLyBzdWIgY2xhc3MgY29uc3RydWN0b3Igc3VwcGxpZWQgYXMgZnVuY3Rpb25cblx0XHRzdWJDbGFzc0NvbnN0cnVjdG9yID0gaW5wdXQ7XG5cdH0gZWxzZSBpZihpbnB1dCAmJiB0eXBlb2YoaW5wdXQuY29uc3RydWN0b3IpID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHQvLyBzdWIgY2xhc3MgY29uc3RydWN0b3Igc3VwcGxpZWQgYXMgcHJvcGVydHkgb2YgYXJndW1lbnRcblx0XHRzdWJDbGFzc0NvbnN0cnVjdG9yID0gaW5wdXQuY29uc3RydWN0b3I7XG5cdH1cblx0XG5cdC8vIHN0b3JlIHRoZSBzdXBlciBjbGFzcyBiZWZvcmUgY2FsbGluZyB0aGUgc3ViIGNsYXNzIGNvbnN0cnVjdG9yXG5cdHN1YkNsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fc3VwZXIgPSBzdXBlckNsYXNzLnByb3RvdHlwZTtcblx0XHRzdWJDbGFzc0NvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXHRcblx0Ly8gZHVwbGljYXRlIHRoZSBzb3VyY2UgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBpbnRvIHRoZSBzdWIgY2xhc3Ncblx0c3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG5cdFxuXHQvLyBpZiBpbnB1dCBpcyBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGFwcGx5IHRoZW0gdG8gdGhlIHN1YmNsYXNzXG5cdGlmKGlucHV0ICYmIHR5cGVvZihpbnB1dCkgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKHZhciBuYW1lIGluIGlucHV0KSB7XG5cdFx0XHRpZihuYW1lICE9PSBcImNvbnN0cnVjdG9yXCIpIHtcdC8vIHRoZSBjb25zdHJ1Y3RvciBoYXMgYWxyZWFkeSBiZWVuIGFwcGxpZWQsIHNvIGlnbm9yZSBpdFxuXHRcdFx0XHRzdWJDbGFzcy5wcm90b3R5cGVbbmFtZV0gPSBpbnB1dFtuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8vIHJlc3RvcmUgdGhlIHN1YmNsYXNzIGNvbnN0cnVjdG9yIHRvIGVpdGhlciB0aGUgc3ViY2xhc3Mgb3IgcGFyZW50IGNvbnN0cnVjdG9yIGlmIG5vIGNvbnN0cnVjdG9yIHN1cHBsaWVkO1xuXHRzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzc0NvbnN0cnVjdG9yO1xuXHRcblx0Ly8gY29weSB0aGUgc3RhdGljIGV4dGVuZCBtZXRob2Qgb250byB0aGUgc3ViY2xhc3Mgc28gdGhhdCBpdCBjYW4gZXh0ZW5kIHN1YmNsYXNzZXNcblx0c3ViQ2xhc3MuZXh0ZW5kID0gc3VwZXJDbGFzcy5leHRlbmQ7XG5cdFxuXHQvLyBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyL3BhcmVudCBjbGFzc1xuXHRzdWJDbGFzcy5zdXBlciA9IHN1cGVyQ2xhc3MucHJvdG90eXBlO1xuXHRcblx0Ly8gcmV0dXJuIHRoZSBzdWJjbGFzcyB0byBhbGxvdyBmb3IgaW5saW5lIHVzZVxuXHRyZXR1cm4gc3ViQ2xhc3M7XG59O1xuXG4vLyBleHBvcnQgRXh0ZW5zaWJsZUNsYXNzIGluIENvbW1vbkpTIG1vZHVsZSBzdHlsZVxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbnNpYmxlQ2xhc3M7Il19
