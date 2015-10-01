(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var Animal = require('./src/animal');
var Fish = require('./src/fish');
var Cat = require('./src/cat');

var bob = new Animal("Bob");
bob.describe();
bob.output("");

var wanda = new Fish("Wanda");
wanda.describe();
wanda.swim();
wanda.output("");

var felix = new Cat("Felix", "brown");
felix.describe();
felix.meow("Hello World!");
},{"./src/animal":2,"./src/cat":3,"./src/fish":4}],2:[function(require,module,exports){
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

// Normally you would use require('extensible-class') here after defining 
// it in your package.json dependencies, but here we're just referring
// to the local copy in this project.
var ExtensibleClass = require('../../../src/extensible-class');

var properties = {
	
	constructor: function(name, type) {
		console.log('Animal.constructor() called', arguments);
		this._name = name;
		this._type = type;
	},
	
	output: function output(str) {
		document.getElementById('output').innerHTML += str + "<br/>";
	},
	
	describe: function() {
		if(this.getType()) {
			this.output(this.getName() + " is a " + this.getType());
		} else {
			this.output(this.getName() + " is some kind of animal");
		}
	},
	
	getName: function() {
		return this._name;
	},
	
	getType: function() {
		return this._type;
	}
};
module.exports = ExtensibleClass.extend(properties);


},{"../../../src/extensible-class":5}],3:[function(require,module,exports){
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

var Animal = require('./animal');

var properties = {
	constructor: function(name, color) {
		console.log('Cat.constructor() called', arguments);
		this._color = color;
		this._super.constructor(name, "cat");
	},
	meow: function(say) {
		this.output(this.getName() + " meows loudly" + (say ? ": '" + say + "'" : ""));
	},
	getColor: function() {
		return this._color;
	},
	describe: function() {
		this._super.describe();
		this.output(this.getName() + " is also " + this.getColor());
	}
};
module.exports = Animal.extend(properties);


},{"./animal":2}],4:[function(require,module,exports){
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

var Animal = require('./animal');

var properties = {
	constructor: function(name, color) {
		console.log('Cat.constructor() called', arguments);
		this._color = color;
		this._super.constructor(name, "fish");
	}, 
	swim: function() {
		this.output(this.getName() + " swims away");
	}
};
module.exports = Animal.extend(properties);


},{"./animal":2}],5:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9icm93c2VyaWZ5L2luZGV4LmpzIiwiZXhhbXBsZXMvYnJvd3NlcmlmeS9zcmMvYW5pbWFsLmpzIiwiZXhhbXBsZXMvYnJvd3NlcmlmeS9zcmMvY2F0LmpzIiwiZXhhbXBsZXMvYnJvd3NlcmlmeS9zcmMvZmlzaC5qcyIsInNyYy9leHRlbnNpYmxlLWNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBcbiAqIFRoZSBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAyMDE1IEplcm9tZSBEYW5lIDxqZXJvbWVkYW5lLmNvbT4uXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG52YXIgQW5pbWFsID0gcmVxdWlyZSgnLi9zcmMvYW5pbWFsJyk7XG52YXIgRmlzaCA9IHJlcXVpcmUoJy4vc3JjL2Zpc2gnKTtcbnZhciBDYXQgPSByZXF1aXJlKCcuL3NyYy9jYXQnKTtcblxudmFyIGJvYiA9IG5ldyBBbmltYWwoXCJCb2JcIik7XG5ib2IuZGVzY3JpYmUoKTtcbmJvYi5vdXRwdXQoXCJcIik7XG5cbnZhciB3YW5kYSA9IG5ldyBGaXNoKFwiV2FuZGFcIik7XG53YW5kYS5kZXNjcmliZSgpO1xud2FuZGEuc3dpbSgpO1xud2FuZGEub3V0cHV0KFwiXCIpO1xuXG52YXIgZmVsaXggPSBuZXcgQ2F0KFwiRmVsaXhcIiwgXCJicm93blwiKTtcbmZlbGl4LmRlc2NyaWJlKCk7XG5mZWxpeC5tZW93KFwiSGVsbG8gV29ybGQhXCIpOyIsIi8qIFxuICogVGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IDIwMTUgSmVyb21lIERhbmUgPGplcm9tZWRhbmUuY29tPi5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8vIE5vcm1hbGx5IHlvdSB3b3VsZCB1c2UgcmVxdWlyZSgnZXh0ZW5zaWJsZS1jbGFzcycpIGhlcmUgYWZ0ZXIgZGVmaW5pbmcgXG4vLyBpdCBpbiB5b3VyIHBhY2thZ2UuanNvbiBkZXBlbmRlbmNpZXMsIGJ1dCBoZXJlIHdlJ3JlIGp1c3QgcmVmZXJyaW5nXG4vLyB0byB0aGUgbG9jYWwgY29weSBpbiB0aGlzIHByb2plY3QuXG52YXIgRXh0ZW5zaWJsZUNsYXNzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3JjL2V4dGVuc2libGUtY2xhc3MnKTtcblxudmFyIHByb3BlcnRpZXMgPSB7XG5cdFxuXHRjb25zdHJ1Y3RvcjogZnVuY3Rpb24obmFtZSwgdHlwZSkge1xuXHRcdGNvbnNvbGUubG9nKCdBbmltYWwuY29uc3RydWN0b3IoKSBjYWxsZWQnLCBhcmd1bWVudHMpO1xuXHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX3R5cGUgPSB0eXBlO1xuXHR9LFxuXHRcblx0b3V0cHV0OiBmdW5jdGlvbiBvdXRwdXQoc3RyKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpLmlubmVySFRNTCArPSBzdHIgKyBcIjxici8+XCI7XG5cdH0sXG5cdFxuXHRkZXNjcmliZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYodGhpcy5nZXRUeXBlKCkpIHtcblx0XHRcdHRoaXMub3V0cHV0KHRoaXMuZ2V0TmFtZSgpICsgXCIgaXMgYSBcIiArIHRoaXMuZ2V0VHlwZSgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vdXRwdXQodGhpcy5nZXROYW1lKCkgKyBcIiBpcyBzb21lIGtpbmQgb2YgYW5pbWFsXCIpO1xuXHRcdH1cblx0fSxcblx0XG5cdGdldE5hbWU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xuXHR9LFxuXHRcblx0Z2V0VHlwZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3R5cGU7XG5cdH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuc2libGVDbGFzcy5leHRlbmQocHJvcGVydGllcyk7XG5cbiIsIi8qIFxuICogVGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IDIwMTUgSmVyb21lIERhbmUgPGplcm9tZWRhbmUuY29tPi5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbnZhciBBbmltYWwgPSByZXF1aXJlKCcuL2FuaW1hbCcpO1xuXG52YXIgcHJvcGVydGllcyA9IHtcblx0Y29uc3RydWN0b3I6IGZ1bmN0aW9uKG5hbWUsIGNvbG9yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhdC5jb25zdHJ1Y3RvcigpIGNhbGxlZCcsIGFyZ3VtZW50cyk7XG5cdFx0dGhpcy5fY29sb3IgPSBjb2xvcjtcblx0XHR0aGlzLl9zdXBlci5jb25zdHJ1Y3RvcihuYW1lLCBcImNhdFwiKTtcblx0fSxcblx0bWVvdzogZnVuY3Rpb24oc2F5KSB7XG5cdFx0dGhpcy5vdXRwdXQodGhpcy5nZXROYW1lKCkgKyBcIiBtZW93cyBsb3VkbHlcIiArIChzYXkgPyBcIjogJ1wiICsgc2F5ICsgXCInXCIgOiBcIlwiKSk7XG5cdH0sXG5cdGdldENvbG9yOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29sb3I7XG5cdH0sXG5cdGRlc2NyaWJlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9zdXBlci5kZXNjcmliZSgpO1xuXHRcdHRoaXMub3V0cHV0KHRoaXMuZ2V0TmFtZSgpICsgXCIgaXMgYWxzbyBcIiArIHRoaXMuZ2V0Q29sb3IoKSk7XG5cdH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hbC5leHRlbmQocHJvcGVydGllcyk7XG5cbiIsIi8qIFxuICogVGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IDIwMTUgSmVyb21lIERhbmUgPGplcm9tZWRhbmUuY29tPi5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbnZhciBBbmltYWwgPSByZXF1aXJlKCcuL2FuaW1hbCcpO1xuXG52YXIgcHJvcGVydGllcyA9IHtcblx0Y29uc3RydWN0b3I6IGZ1bmN0aW9uKG5hbWUsIGNvbG9yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhdC5jb25zdHJ1Y3RvcigpIGNhbGxlZCcsIGFyZ3VtZW50cyk7XG5cdFx0dGhpcy5fY29sb3IgPSBjb2xvcjtcblx0XHR0aGlzLl9zdXBlci5jb25zdHJ1Y3RvcihuYW1lLCBcImZpc2hcIik7XG5cdH0sIFxuXHRzd2ltOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm91dHB1dCh0aGlzLmdldE5hbWUoKSArIFwiIHN3aW1zIGF3YXlcIik7XG5cdH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hbC5leHRlbmQocHJvcGVydGllcyk7XG5cbiIsIi8qIFxuICogVGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IDIwMTUgSmVyb21lIERhbmUgPGplcm9tZWRhbmUuY29tPi5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmZ1bmN0aW9uIEV4dGVuc2libGVDbGFzcygpIHtcblx0Y29uc29sZS5sb2coJ0V4dGVuc2libGVDbGFzcy5jb25zdHJ1Y3RvcigpIGNhbGxlZCcpO1xuXHRjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBFeHRlbmRzIG9uZSBjbGFzcyBmcm9tIHRoaXMgY2xhc3MuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ViQ2xhc3MgVGhlIGNsYXNzIHRoYXQgc2hvdWxkIGJlIGluaGVyaXRpbmcgdGhpbmdzLiBUaGlzIGNvdWxkIGJlIGp1c3QgYW4gaW5saW5lIGNvbnN0cnVjdG9yIGZvciB0aGUgbmV3IGNsYXNzLlxuICogQHJldHVybiB7T2JqZWN0fSBOZXdseSBleHRlbmRlZCBzdWIgY2xhc3NcbiAqL1xuRXh0ZW5zaWJsZUNsYXNzLmV4dGVuZCA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFxuXHR2YXIgc3VwZXJDbGFzcyA9IHRoaXM7XG5cdFxuXHQvLyBpZiBubyBzdWIgY2xhc3MgY29uc3RydWN0b3IgaXMgc3VwcGxpZWQsIHVzZSB0aGUgc3VwZXIgY2xhc3MgY29uc3RydWN0b3Jcblx0dmFyIHN1YkNsYXNzQ29uc3RydWN0b3IgPSB0aGlzO1xuXHRcblx0aWYodHlwZW9mKGlucHV0KSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Ly8gc3ViIGNsYXNzIGNvbnN0cnVjdG9yIHN1cHBsaWVkIGFzIGZ1bmN0aW9uXG5cdFx0c3ViQ2xhc3NDb25zdHJ1Y3RvciA9IGlucHV0O1xuXHR9IGVsc2UgaWYoaW5wdXQgJiYgdHlwZW9mKGlucHV0LmNvbnN0cnVjdG9yKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0Ly8gc3ViIGNsYXNzIGNvbnN0cnVjdG9yIHN1cHBsaWVkIGFzIHByb3BlcnR5IG9mIGFyZ3VtZW50XG5cdFx0c3ViQ2xhc3NDb25zdHJ1Y3RvciA9IGlucHV0LmNvbnN0cnVjdG9yO1xuXHR9XG5cdFxuXHQvLyBzdG9yZSB0aGUgc3VwZXIgY2xhc3MgYmVmb3JlIGNhbGxpbmcgdGhlIHN1YiBjbGFzcyBjb25zdHJ1Y3RvclxuXHRzdWJDbGFzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3N1cGVyID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG5cdFx0c3ViQ2xhc3NDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fTtcblx0XG5cdC8vIGR1cGxpY2F0ZSB0aGUgc291cmNlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW50byB0aGUgc3ViIGNsYXNzXG5cdHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuXHRcblx0Ly8gaWYgaW5wdXQgaXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBhbmQgbWV0aG9kcyBhcHBseSB0aGVtIHRvIHRoZSBzdWJjbGFzc1xuXHRpZihpbnB1dCAmJiB0eXBlb2YoaW5wdXQpID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcih2YXIgbmFtZSBpbiBpbnB1dCkge1xuXHRcdFx0aWYobmFtZSAhPT0gXCJjb25zdHJ1Y3RvclwiKSB7XHQvLyB0aGUgY29uc3RydWN0b3IgaGFzIGFscmVhZHkgYmVlbiBhcHBsaWVkLCBzbyBpZ25vcmUgaXRcblx0XHRcdFx0c3ViQ2xhc3MucHJvdG90eXBlW25hbWVdID0gaW5wdXRbbmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyByZXN0b3JlIHRoZSBzdWJjbGFzcyBjb25zdHJ1Y3RvciB0byBlaXRoZXIgdGhlIHN1YmNsYXNzIG9yIHBhcmVudCBjb25zdHJ1Y3RvciBpZiBubyBjb25zdHJ1Y3RvciBzdXBwbGllZDtcblx0c3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3NDb25zdHJ1Y3Rvcjtcblx0XG5cdC8vIGNvcHkgdGhlIHN0YXRpYyBleHRlbmQgbWV0aG9kIG9udG8gdGhlIHN1YmNsYXNzIHNvIHRoYXQgaXQgY2FuIGV4dGVuZCBzdWJjbGFzc2VzXG5cdHN1YkNsYXNzLmV4dGVuZCA9IHN1cGVyQ2xhc3MuZXh0ZW5kO1xuXHRcblx0Ly8gY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdXBlci9wYXJlbnQgY2xhc3Ncblx0c3ViQ2xhc3Muc3VwZXIgPSBzdXBlckNsYXNzLnByb3RvdHlwZTtcblx0XG5cdC8vIHJldHVybiB0aGUgc3ViY2xhc3MgdG8gYWxsb3cgZm9yIGlubGluZSB1c2Vcblx0cmV0dXJuIHN1YkNsYXNzO1xufTtcblxuLy8gZXhwb3J0IEV4dGVuc2libGVDbGFzcyBpbiBDb21tb25KUyBtb2R1bGUgc3R5bGVcbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5zaWJsZUNsYXNzOyJdfQ==
