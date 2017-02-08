var myPlaces = ["Paris","Barcelona","Iceland"];
var paulinaPlaces = ["Gdansk","Norway","Scotland"];

for (var i = 0; i < myPlaces.length; i++) {
	for (var j = 0; j < paulinaPlaces.length; j++) {
		if (myPlaces[i] === paulinaPlaces[j]) {
			console.log('We should go together to: ' + myPlaces[i]);
		} else {
			console.log('We should BREAK UP!!!');
		}
	}
}
//		} else (myPlaces[i] !== paulinaPlaces[j]) 
//			console.log('We should BREAK UP!!!');	
//		}
