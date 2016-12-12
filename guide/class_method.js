	'use strict';
	/**********************************************************
	************ Created by Tony A. Medrano 2016 **************
	**********************************************************/

	//. Procedural
	function startAnimation() {
		console.log("Animation just started!");
	};
	function stopAnimation() {
		console.log("Animation just stopped!");
	};
	/* Uso. */
	startAnimation();
	stopAnimation();

	//. Clase y métodos
	var AnimA = function() {
	};
	AnimA.prototype.start = function() {
		console.log("A: Animation just started!");
	};
	AnimA.prototype.stop = function() {
		console.log("A: Animation just stopped!");
	};
	/* Uso. */
	var myAnim = new AnimA();
	myAnim.start();
	myAnim.stop();

	//. Sintaxis distinta para declarar métodos.
	var AnimB = function() {
	};
	AnimB.prototype = {
		start: function() {
			console.log("B: Animation just started!");
		},
		stop: function() {
			console.log("B: Animation just stopped!");
		}
	};
	/* Uso. */
	var masAnim = new AnimB();
	masAnim.start();
	masAnim.stop();

	//. Añade métodos al prototype de Function.
	Function.prototype.method = function(name, fn) {
		this.prototype[name] = fn;
	};

	//. Anim class, métodos creados usando método de conveniencia.
	var AnimC = function() {

	};
	AnimC.method('start', function() {
		console.log("C: Animation just started!");
	});
	AnimC.method('stop', function() {
		console.log("C: Animation just stopped!");
	});
	/* Uso. */
	var otroAnim = new AnimC();
	otroAnim.start();
	otroAnim.stop();

	//. Esta versión admite encadenamiento
	Function.prototype.method = function(name, fn) {
		this.prototype[name] = fn;
		return this;
	};
	/* Anim class, métodos creados usando método de conveniencia y encadenamiento. */
	var AnimD = function() {
	};
	AnimD.
	method('start', function() {
		console.log("D: Animation just started!");
	}).
	method('stop', function() {
		console.log("D: Animation just stopped!");
	});
	/* Uso. */
	var otroAnimMas = new AnimD();
	otroAnimMas.start();
	otroAnimMas.stop();

	/**********************************************************/

	//. Función anónima, ejecutada inmediatamente.
	(function() {
		var foo = 10;
		var bar = 2;
		console.log(foo * bar);
	})();

	//. Función anónima con argumentos
	(function(foo, bar) {
		console.log(foo * bar);
	})(10, 2);

	//. Función anónima con argumentos que retorna un valor.
	var baz = (function(foo, bar) {
	    return foo * bar;
	})(10, 2);
	console.log(baz); //. baz será igual a 20.

	//. Función anónima usada como un closure
	var baza;
	(function() {
		var foo = 10;
		var bar = 2;
		baza = function() {
		    return foo * bar;
		};
	})();
	console.log(baza());


	/*************** Mutabilidad de objetos ***********************/

	function displayError(message) {
	     displayError.numTimesExecuted++;
	     console.log(message);
	};
	displayError.numTimesExecuted = 0;

	//. Clase Persona.
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}
	Person.prototype = {
		getName: function() {
		    return this.name;
		},
		getAge: function() {
		    return this.age;
		}
	}
	//. Instanciar la clase.
	var alice = new Person('Alice', 93);
	var bill = new Person('Bill', 30);

	//. Modifica la clase.
	Person.prototype.getGreeting = function() {
	    return 'Hi ' + this.getName() + '!';
	};
	//. Modifica una instancia específica.
	alice.displayGreeting = function() {
		console.log(this.getGreeting());
	}
