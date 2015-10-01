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