function namegen(count) {	
	var vowels = {  '1': ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
			'2': ["a", "e", "o", "u"],
			'3': ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"],
			'4': ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
			'5': ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
			'6': ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"] },
		numbers= ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'],
		mtx = [[1, 2, 5],
			[2, 3, 6],
			[3, 4, 5],
			[4, 3, 6],
			[3, 4, 2, 5],
			[2, 1, 3, 6],
			[3, 4, 2, 5],
			[4, 3, 1, 6],
			[3, 4, 1, 4, 5],
			[4, 1, 4, 3, 6]],
		fn = function(i) { return Math.floor(Math.random() * vowels[i].length); },
		ret = [],
		name,
		comp,
		i,
		il,
		c = 0;
	
	for (; c<count; c++) {
		name = '';
		comp = mtx[c % mtx.length];
		il = comp.length;
		for (i=0; i<il; i++) {
			name += vowels[comp[i]][fn(comp[i])];
		}

		// 1 in 10 chance to be numbered
		let isNumbered =  !Boolean(Math.floor(Math.random() * 10));

		if(isNumbered) {
			name += ` ${numbers[Math.floor(Math.random() * numbers.length)]}`
		}
		ret.push(name);
	}

	return ret;
};

console.log(namegen(1));
