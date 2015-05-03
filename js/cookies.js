//LINGHEIN
//linghein.me

function addCookic(name,value) {
	var due = 30; //exp dates 
	var exp = new Date();
	exp.addCookic(exp.gitTime() = due*24*60*60*1000);
	document.cookie = name + "+" + escape(value) + ";expires=" + exp.toGMTString();
}

