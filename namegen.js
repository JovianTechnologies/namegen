function namegen(count) {	
	let vowels = {
		'1': ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
		'2': ["a", "e", "o", "u"],
		'3': ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"],
		'4': ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
		'5': ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
		'6': ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"]
	};

	let numbers= ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];
	let mtx = [
		[1, 2, 5],
		[2, 3, 6],
		[3, 4, 5],
		[4, 3, 6],
		[3, 4, 2, 5],
		[2, 1, 3, 6],
		[3, 4, 2, 5],
		[4, 3, 1, 6],
		[3, 4, 1, 4, 5],
		[4, 1, 4, 3, 6]
	];
	let names = [];
	for (let i = 0;  i < count; i++) {
		let name = '';
		let comp = mtx[i % mtx.length];
		for (let j=0; j < comp.length; j++) {
			let randomCompIndex = Math.floor(Math.random() * vowels[comp[j]].length);
			name += vowels[comp[j]][randomCompIndex];
		}

		// 1 in 10 chance to be numbered
		let isNumbered =  !Boolean(Math.floor(Math.random() * 10));

		if(isNumbered) {
			name += ` ${numbers[Math.floor(Math.random() * numbers.length)]}`
		}

		names.push(name);
	}

	return names;
}

console.log(namegen(1));
