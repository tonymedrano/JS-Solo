'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/

//. ABSTRACT FACTORY
//. The first pattern presented here is a method to create kits of objects without knowing the concrete types of the objects.

var KingJoffery = (function () {
	function KingJoffery() {
	}
	KingJoffery.prototype.makeDecision = function () {
		console.log("As King, this is my decision!.");
	};
	KingJoffery.prototype.marry = function () {
		console.log("As King, I'm gettin marry!.");
	};
	return KingJoffery;
})();

var LordTywin = (function () {
	function LordTywin() {
	}
	LordTywin.prototype.makeDecision = function () {
		console.log("As Hand of The King, this is my decision!.");
	};
	return LordTywin;
})();

var LannisterFactory = (function () {
	function LannisterFactory() {
	}
	LannisterFactory.prototype.getKing = function () {
		return new KingJoffery();
	};
	LannisterFactory.prototype.getHandOfTheKing = function ()
	{
		return new LordTywin();
	};
	return LannisterFactory;
})();

var KingAerys = (function () {
	function KingAerys() {
	}
	KingAerys.prototype.makeDecision = function () {
		console.log("As Mother of Dragons, this is my decision!.");
	};
	return KingAerys;
})();

var LordConnington = (function () {
	function LordConnington() {
	}
	LordConnington.prototype.makeDecision = function () {
		console.log("As Hand of The Mother of Dragons, this is my decision!.");
	};
	return LordConnington;
})();

var TargaryenFactory = (function () {
	function TargaryenFactory() {
	}
	TargaryenFactory.prototype.getKing = function () {
		return new KingAerys();
	};
	TargaryenFactory.prototype.getHandOfTheKing = function () {
		return new LordConnington();
	};
	return TargaryenFactory;
})();

var CourtSession = (function () {
	function CourtSession(abstractFactory) {
		this.abstractFactory = abstractFactory;
		this.COMPLAINT_THRESHOLD = 10;
	}
	CourtSession.prototype.complaintPresented = function (complaint)
	{
		if (complaint.severity < this.COMPLAINT_THRESHOLD) {
			this.abstractFactory.getHandOfTheKing().makeDecision();
		} else
		this.abstractFactory.getKing().makeDecision();
	};
	return CourtSession;
})();

var courtSession1 = new CourtSession(new TargaryenFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });
var courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });
