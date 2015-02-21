var countryMap = {
	"bi":"Africa",
	"km":"Africa",
	"dj":"Africa",
	"er":"Africa",
	"et":"Africa",
	"ke":"Africa",
	"mg":"Africa",
	"mw":"Africa",
	"mu":"Africa",
	"mz":"Africa",
	"re":"Africa",
	"rw":"Africa",
	"sc":"Africa",
	"so":"Africa",
	"ug":"Africa",
	"tz":"Africa",
	"zm":"Africa",
	"zw":"Africa",
	"ao":"Africa",
	"cm":"Africa",
	"cf":"Africa",
	"td":"Africa",
	"cg":"Africa",
	"cd":"Africa",
	"gq":"Africa",
	"ga":"Africa",
	"st":"Africa",
	"dz":"Africa",
	"eg":"Africa",
	"ly":"Africa",
	"ma":"Africa",
	"sd":"Africa",
	"tn":"Africa",
	"bw":"Africa",
	"ls":"Africa",
	"na":"Africa",
	"za":"Africa",
	"sz":"Africa",
	"bj":"Africa",
	"bf":"Africa",
	"cv":"Africa",
	"ci":"Africa",
	"gm":"Africa",
	"gh":"Africa",
	"gn":"Africa",
	"gw":"Africa",
	"lr":"Africa",
	"ml":"Africa",
	"mr":"Africa",
	"ne":"Africa",
	"ng":"Africa",
	"sn":"Africa",
	"sl":"Africa",
	"tg":"Africa",

	"cn":"Asia",
	"kp":"Asia",
	"jp":"Asia",
	"mn":"Asia",
	"kr":"Asia",
	"af":"Asia",
	"bd":"Asia",
	"bt":"Asia",
	"in":"Asia",
	"ir":"Asia",
	"kz":"Asia",
	"kg":"Asia",
	"mv":"Asia",
	"np":"Asia",
	"pk":"Asia",
	"lk":"Asia",
	"tj":"Asia",
	"tm":"Asia",
	"uz":"Asia",
	"bn":"Asia",
	"kh":"Asia",
	"tl":"Asia",
	"id":"Asia",
	"la":"Asia",
	"my":"Asia",
	"mm":"Asia",
	"ph":"Asia",
	"th":"Asia",
	"vn":"Asia",
	"az":"Asia",
	"am":"Asia",
	"cy":"Asia",
	"ge":"Asia",
	"iq":"Asia",
	"il":"Asia",
	"jo":"Asia",
	"kw":"Asia",
	"lb":"Asia",
	"om":"Asia",
	"qa":"Asia",
	"sa":"Asia",
	"sy":"Asia",
	"tr":"Asia",
	"ae":"Asia",
	"ye":"Asia",
	"ru":"Asia",
	"tw":"Asia",

	"by":"Europe",
	"bg":"Europe",
	"cz":"Europe",
	"hu":"Europe",
	"pl":"Europe",
	"md":"Europe",
	"ro":"Europe",
	"sk":"Europe",
	"ua":"Europe",
	"dk":"Europe",
	"ee":"Europe",
	"fi":"Europe",
	"is":"Europe",
	"ie":"Europe",
	"lv":"Europe",
	"lt":"Europe",
	"no":"Europe",
	"se":"Europe",
	"gb":"Europe",
	"al":"Europe",
	"ba":"Europe",
	"hr":"Europe",
	"gr":"Europe",
	"it":"Europe",
	"mt":"Europe",
	"pt":"Europe",
	"si":"Europe",
	"es":"Europe",
	"mk":"Europe",
	"rs":"Europe",
	"at":"Europe",
	"be":"Europe",
	"fr":"Europe",
	"de":"Europe",
	"nl":"Europe",
	"ch":"Europe",

	"ar":"southAmerica",
	"bo":"southAmerica",
	"br":"southAmerica",
	"cl":"southAmerica",
	"co":"southAmerica",
	"ec":"southAmerica",
	"fk":"southAmerica",
	"gy":"southAmerica",
	"gf":"southAmerica",
	"pe":"southAmerica",
	"py":"southAmerica",
	"sr":"southAmerica",
	"uy":"southAmerica",
	"ve":"southAmerica",

	"ca":"northAmerica",
	"gl":"northAmerica",
	"us":"northAmerica",
	"bz":"northAmerica",
	"cr":"northAmerica",
	"sv":"northAmerica",
	"gt":"northAmerica",
	"hn":"northAmerica",
	"mx":"northAmerica",
	"ni":"northAmerica",
	"pa":"northAmerica",
	"bs":"northAmerica",
	"dm":"northAmerica",
	"ag":"northAmerica",
	"ds":"northAmerica",
	"bb":"northAmerica",
	"cu":"northAmerica",
	"dn":"northAmerica",
	"do":"northAmerica",
	"gd":"northAmerica",
	"ht":"northAmerica",
	"jm":"northAmerica",
	"kn":"northAmerica",
	"lc":"northAmerica",
	"tt":"northAmerica",

	"au":"australia",
	"nz":"australia",
	"fj":"australia",
	"sb":"australia",
	"pg":"australia",
	"vu":"australia",
	"nc":"australia",
	"pf":"australia"
};
var regionMap = {
	"Africa" : {
		"countries" : ["bi", "km", "dj", "er", "et", "ke", "mg", "mw", "mu", "mz", "re", "rw", "sc", "so", "ug", "tz", "zm", "zw", "bj", "bf", "cv", "ci", "gm", "gh", "gn", "gw", "lr", "ml", "mr", "ne", "ng", "sn", "sl", "tg", "bw", "ls", "na", "za", "sz", "dz", "eg", "ly", "ma", "sd", "tn", "ao", "cm", "cf", "td", "cg", "cd", "gq", "ga", "st"],
		"name" : "Africa"
	},
	"Asia" : {
		"countries" : ["cn", "kp", "ru", "jp", "mn", "kr", "af", "bd", "bt", "in", "ir", "kz", "kg", "mv", "np", "pk", "lk", "tj", "tm", "uz", "bn", "kh", "tl", "id", "la", "my", "mm", "ph", "th", "vn", "az", "am", "cy", "ge", "iq", "il", "jo", "kw", "lb", "om", "qa", "sa", "sy", "tr", "ae", "ye", "tw"],
		"name" : "Asia"
	},
	"Europe" : {
		"countries" : ["by", "bg", "cz", "hu", "pl", "md", "ro", "sk", "ua", "at", "be", "fr", "de", "nl", "ch", "al", "ba", "hr", "gr", "it", "mt", "pt", "si", "es", "mk", "rs", "dk", "ee", "fi", "is", "ie", "lv", "lt", "no", "se", "gb"],
		"name" : "Europe"
	},
	"southAmerica" :{
		"countries" : ["ar", "bo", "br", "cl", "co", "ec", "fk", "gy", "gf", "pe", "py", "sr", "uy", "ve"],
		"name" : "South America"
	},
	"northAmerica" :{
		"countries" : ["ca", "gl", "us", "bz", "cr", "sv", "gt", "hn", "mx", "ni", "pa", "bs", "dm", "ag", "ds", "bb", "cu", "dn", "do", "gd", "ht", "jm", "kn", "lc", "tt"],
		"name" : "North America"
	},
	"australia" :{
		"countries" : ["au", "nz", "fj", "sb", "pg", "vu", "nc", "pf"],
		"name" : "Australia",
	},
};

var currentlyZoomed = false;
var currentRegionSelected;

function getCountriesInRegion(cc) {
	for (var regionKey in regionMap)
	{
		var countries = regionMap[regionKey].countries;
		for (var countryIndex in countries)
		{
			if (cc == countries[countryIndex])
			{
				return countries;
			}
		}
	}
}

function getRegion(cc) {
	var regionCode = countryMap[cc];
	return regionMap[regionCode];
}

function highlightRegionOfCountry (cc) {
    if(!currentlyZoomed){
      	var countries = getRegion(cc).countries;
	    for (countryIndex in countries){
	      	$('#vmap').vectorMap('highlight',countries[countryIndex]);
	    }
	    //$('#vmap').vectorMap('highlight',cc);
    }
}

function unhighlightRegionOfCountry (cc) {
	if(!currentlyZoomed){
		var countries = getRegion(cc).countries;
	    for (countryIndex in countries){
	      	$('#vmap').vectorMap('unhighlight',countries[countryIndex]);
	    }
	    //$('#vmap').vectorMap('unhighlight',cc);
	} else{
	    $('#vmap').vectorMap('set', 'colors', getColors(currentRegionSelected));
	} 
}

function zoomInOnContinent () {
	if(!currentlyZoomed){
		currentlyZoomed = true;
		$('#vmap').vectorMap('zoomIn');
		document.getElementById('select-continent').style.display='none';
		$('#description-box').fadeIn();
	}
}

function displayBoxText (cc) {
	var selectedRegion = countryMap[cc];
	currentRegionSelected = selectedRegion;
	if(selectedRegion === 'southAmerica')
		selectedRegion = 'South America';
	else if(selectedRegion === 'northAmerica')
		selectedRegion = 'North America';
	$('#text').text(selectedRegion);
}

function setRegionColors () {
	$('#vmap').vectorMap('set', 'colors', getColors(currentRegionSelected));
}