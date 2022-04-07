var globalUniqueIntStorage = [];

function recursiveIntGenerator(arrayInt, depth, arrangement) {
	for (var i = 0; i < arrayInt.length; i++) {
		if (arrangement.indexOf(i) !== -1) {
			continue;
		}
		
		var newArrangement = arrangement.slice();
		newArrangement.push(i);
		if (depth + 1 == arrayInt.length - 1) {
			var combined = '';
			for (var j = 0; j < newArrangement.length; j++) {
				combined += arrayInt[newArrangement[j]];
			}
			
			if (globalUniqueIntStorage.indexOf(combined) === -1) {
				globalUniqueIntStorage.push(combined);
			}
		} else {
			recursiveIntGenerator(arrayInt, depth + 1, newArrangement);
		}
	}
}

function occupyStorage(arrayInt) {
	for (var i = 0; i < arrayInt.length; i++) {
		if (arrayInt[i] == '0') {
			continue;
		}
		recursiveIntGenerator(arrayInt, 0, [i]);
	}
}

function solution(A) {
	globalUniqueIntStorage = [];
	var strN = parseInt(A).toString();
	var arrayN = strN.split('');
	
	if (parseInt(A) < 0) {
		throw new Error('Invalid value. Accepts only non-negative integers only.');
	}
	
	if (strN.length == 1) {
		return 1;
	}
	
	if (strN.length > 1 && arrayN[0] == '0') {
		throw new Error('Invalid integer.');
	}
	
	occupyStorage(arrayN);
	
	return globalUniqueIntStorage.length;
	
}
