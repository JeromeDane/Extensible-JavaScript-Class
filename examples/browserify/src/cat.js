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

