//LINGHEIN
//linghein.me

//URL
function request(name) {
	var reg = new RegExp ("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};

//replaceALL
String.prototype.replaceALL = function(oldStr, newStr) {
	return this.replace (new RegExp(oldStr,"gm"),newStr);
};