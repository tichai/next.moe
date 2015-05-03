//LINGHEIN
//linghein.me

function replaceEnglish (bodyString) {
	var string = bodyString;
	//top-nav
	string = string.replaceAll ('Home','首页');
	string = string.replaceAll ('Services','服务');
	string = string.replaceAll ('Team','团队');
	string = string.replaceAll ('Products','产品');
	string = string.replaceAll ('Offices','地点');
	string = string.replaceAll ('Contace','联系');
	string = string.replaceAll ('Chinese','English');
	//banner
	string = string.replaceAll ('Your Future Beyound Yourself','');
	string = string.replaceAll ('Know More','了解更多');
	//services
	//offices
	string = string.replaceAll ('OUR OFFICES','咨询中心');
	string = string.replaceAll ('CANADA','加拿大');
	string = string.replaceAll ('USA','美国');
	string = string.replaceAll ('CHINA','中国');
	/*
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');
	string = string.replaceAll ('','');*/
}