function namegen(count) {
	let vowels = {
		'1': ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
		'2': ["a", "e", "o", "u", "y"],
		'3': ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "ss", "st", "sw", "ch", "sh", "th", "wh"],
		'4': ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
		'5': ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
		'6': ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"]
	};

	let components = {
		beginsWithCEndsWithV: ["tania", "hiri","gawa", "carro", "rilia", "stea", "lia", "lea", "ria", "mia", "wei", "ruta","zuno", "lara", "nia", "tera", "gantu", "yama", "tune", "cury", "pra", "thea", "clite"],
		beginsWithCEndsWithC: ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "ss", "st", "sw", "ch", "sh", "th", "wh","turn", "ter", "nus", "rus","hines", "nides", "nov", "phus", "nerth", "vis", "liv", "ter", "nus", "bos", "tis"],
		beginsWithVEndsWithC: ["una", "ion", "iea", "iri", "illes", "eshan","erth", "arth", "orth", "oth", "illon", "ov", "arvis", "ars","illes", "ides", "adus", "urn", "iuq", "orix", "apus", "ion", "eon", "eron"],
		beginsWithVEndsWithV: ["a", "e", "o", "u", "y", "ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy", "agua", "olla", "inda", "oria", "ilia", "ichi", "ara", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "ypso", "ora", "ao", "omia"]
	}

	let numbers= ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];

	const buildName = () => {
		const maxLength = 5;
		const minLength = 2;
		const nameLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);

		let name = [];

		const compsKeys = Object.keys(components);
		let randomComp = compsKeys[Math.floor(Math.random() * compsKeys.length)];
		let lastComp = components[randomComp][Math.floor(Math.random() * components[randomComp].length)];

		name.push(lastComp);

		for(let i = 1; i < nameLength; i++) {
			if (lastComp.indexOf("endsWithV") >= 0) {
				randomComp = compsKeys[Math.floor(Math.random() * compsKeys.length)];
				lastComp = components[randomComp][Math.floor(Math.random() * components[randomComp].length)];
				name.push(lastComp);
			} else {
				const filteredComps = compsKeys.filter(key => key.indexOf('beginsWithV') >= 0);
				randomComp =  filteredComps[Math.floor(Math.random() * filteredComps.length)];
				lastComp = components[randomComp][Math.floor(Math.random() * components[randomComp].length)];
				name.push(lastComp);
			}
		}

		return name.join('');
	}
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
		let name = buildName();
		// let comp = mtx[i % mtx.length];
		// for (let j=0; j < comp.length; j++) {
		// 	let randomCompIndex = Math.floor(Math.random() * vowels[comp[j]].length);
		// 	name += vowels[comp[j]][randomCompIndex];
		// }

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
