let athList = new athletesList();

/*********** COLOR *****************/
function getRandomHex(){
	return Math.floor(Math.random()*255);
};
function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
	return "rgb(" + red + "," + blue + "," + green +")";
};
/*********** END *****************/

/*********** ĐỔI MÀU THEO GIÂY *****************/
setInterval(function(){
    document.getElementById("slogan").style.color = getRandomColor();
}, 50);
/*********** END *****************/

/*********** THÊM VẬN ĐỘNG VIÊN *****************/
function addAthh() {
	//Lấy dữ liệu nhập vào\
	let id = athList.List.length;
	let name = document.getElementById("name").value;
	let image = document.getElementById("img1").value;
	let nation = document.getElementById("nation").value;
	let team = document.getElementById("team").value;
	let position = document.getElementById("position").value;
	let point = document.getElementById("point").value;
	let assist = document.getElementById("assist").value;
	let rebound = document.getElementById("rebound").value;	
	let loi = 0;

	//Ảnh (Đổi /C:\\fakepath\\/i thành rỗng)
	image = image.replace(/C:\\fakepath\\/i, '');

	/*********** VALIDATION *****************/

	if (checkRequired("name",name)) {
		loi++;
	}
	if (checkRequired("nation",nation)) {
		loi++;
	}
	if (checkRequired("team",team)) {
		loi++;
	}
	if (checkRequired("position",position)) {
		loi++;
	}
	if (checkNumber(point)) {
		document.getElementById("point").style.backgroundColor = "#555555";
		document.getElementById("point").style.color = "#fff"
	} else {
		document.getElementById("point").style.backgroundColor = "#333300" ;
		document.getElementById("point").classList.add('your-class');		
		loi++;
	}
	if (checkNumber(assist)) {
		document.getElementById("assist").style.backgroundColor = "#555555";
		document.getElementById("assist").style.color = "#fff"
	} else {
		document.getElementById("assist").style.backgroundColor = "#333300" ;
		document.getElementById("assist").classList.add('your-class');
		loi ++;
	}
	if (checkNumber(rebound)) {
		document.getElementById("rebound").style.backgroundColor = "#555555";
		document.getElementById("rebound").style.color = "#fff"
	} else {
		document.getElementById("rebound").style.backgroundColor = "#333300" ;
		document.getElementById("rebound").classList.add('your-class');
		loi++;
	}
	// nếu có lỗi, dừng lại tại đây
	if (loi != 0) {
		return;
	}else {
		alert("Thêm thành công");
	}
	/*********** END *****************/

	/********** THÊM DỐI TƯỢNG VĐV ***********/
	let athletes = new Athletes(id, name, image, nation, team, position, point, assist, rebound)
	console.log(athletes);
	athList.addAth(athletes);
	updateathletesList(athList); // GỌI HÀM HIỂN THỊ
	/*********** END *************/
};
/*********** CHECK *****************/ 
function checkRequired(id,value) {
	if(Required(value)) {
		document.getElementById(id).style.backgroundColor = "#333300" ;
		document.getElementById(id).classList.add('your-class');
		document.getElementById(id).style.color = "#fff" ;
		return true;
	}
	else {
		document.getElementById(id).style.backgroundColor = "#555555";
		document.getElementById(id).style.color = "#fff	"
		return false;
	}
}

function Required(value) { // check rỗng
	if(value.trim() === "") {
		return true
		}
	return false;
}

function checkNumber(value) { // check số
	let re = /^\d+$/; //dạng số
	if (re.test(value) && value.length < 3) {
		return true;
	}
	return false;
}
/*********** END *****************/

/*********** HIỂN THỊ *****************/
function updateathletesList(value) {
	let listTableVdv = document.getElementById("tbodyVDV");
	listTableVdv.innerHTML = "";
	for(let i = 0; i < value.List.length; i++) {
 
		//lấy thông tin vđv từ mảng List
		let ath = value.List[i];
		let trAth = document.createElement("tr");
		trAth.id  = i;
		trAth.className = "athletes";
		trAth.setAttribute("onclick","updateAth1("+i+")");

		/*********** TẠO THẺ TD*****************/
		let checkboxtd = document.createElement("td");
		let setCheckBox = document.createElement("input");
		let labelCheckbox = document.createElement("label");
		let spanCheckbox = document.createElement("span");
		spanCheckbox.setAttribute("class","checkmark");
		labelCheckbox.setAttribute("class","stylecheckbox");
		setCheckBox.setAttribute("type","checkbox");
		setCheckBox.setAttribute("class","checkboxx");
		setCheckBox.setAttribute("value", ath.Name);
		let createAthID = createTd("center",i+1);
		let createImage = createTd("imagevdv",createImg(ath.Image));
		let createName = createTd("name",ath.Name);
		let createNation = createTd("nation",ath.Nation);
		let createTeam = createTd("center",checklogo(ath.Team));
		let createPosition = createTd("position",checkposition(ath.Position));
		let createPoint= createTd("center",ath.Point);
		let createAssist = createTd("center",ath.Assist);
		let createRebound = createTd("center",ath.Rebound);
		/*********** THÊM VÀO TR *****************/
		trAth.appendChild(checkboxtd);
		trAth.appendChild(createAthID);
		trAth.appendChild(createImage);
		trAth.appendChild(createName);		
		trAth.appendChild(createNation);
		trAth.appendChild(createTeam);
		trAth.appendChild(createPosition);
		trAth.appendChild(createPoint);
		trAth.appendChild(createAssist);
		trAth.appendChild(createRebound);
		//thêm vào tbody
		listTableVdv.appendChild(trAth);

		checkboxtd.appendChild(labelCheckbox);
		labelCheckbox.appendChild(setCheckBox);
		labelCheckbox.appendChild(spanCheckbox);
	}
	
}

function createTd (className, value) {
 	let td = document.createElement("td");
 	td.className = className;
 	td.innerHTML = value;
 	return td;
}
/*********** ẢNH *****************/
function createImg (value) {
	let img = "<img src=" + "image/Athletes/" + value +">";
	return img;
}
/*********** LOGO *****************/
function checklogo (value) {
	if(value == 1) {
		value = "<img src=" + "image/logo/logo10.gif" + ">";
	} else if(value == 2) {
		value = "<img src=" + "image/logo/logo5.gif" + ">";
	}else if(value == 3) {
		value = "<img src=" + "image/logo/logo13.gif" + ">";
	}else if(value == 4) {
		value = "<img src=" + "image/logo/logo18.gif" + ">";
	}else if(value == 5) {
		value = "<img src=" + "image/logo/logo12.gif" + ">";
	}else if(value == 6) {
		value = "<img src=" + "image/logo/logo15.gif" + ">";
	}else if(value == 7) {
		value = "<img src=" + "image/logo/logo7.gif" + ">";
	}else if(value == 8) {
		value = "<img src=" + "image/logo/logo11.gif" + ">";
	}else if(value == 9) {
		value = "<img src=" + "image/logo/logo14.gif" + ">";
	}else if(value == 10) {
		value = "<img src=" + "image/logo/logo3.gif" + ">";
	}

	return value;
	
}
/*********** VỊ TRÍ ***************/
function checkposition (value) {
	if (value == 1) {
		value = "Hậu vệ dẫn bóng (PG)";
	}else if (value == 2) {
		value = "Hậu vệ ghi điểm (SG)";
	}
	else if (value == 3) {
		value = "Tiền phong trụ (SF)";
	}
	else if (value == 4) {
		value = "Tiền phong chính (PF)";
	}
	else if (value == 5) {
		value = "Trung phong (C)";
	}
	return value;
}
/*********** END *****************/

/********** Lưu mảng chứa các đối tượng vđv vào localstorage *****************/
function SetLocalStorage() {
	let jsonathList = JSON.stringify(athList.List);//chuyển object athlist thành chuỗi json
	localStorage.setItem("DanhsachVDV",jsonathList);
}
/***************************** END ****************************/

/********** Lấy dữ đối tượng vđv từ localstorage *****************/
function GetLocalStorage() {
	let jsonathList = localStorage.getItem("DanhsachVDV");// lấy chuỗi json từ localstorage
	let arrList = JSON.parse(jsonathList);
	athList.List = arrList;
	updateathletesList(athList);
}
/***************************** END ****************************/
function DelLocalStorage() {
	window.localStorage.removeItem('DanhsachVDV');
	// athList.List = [{Name: 'Stephen Curry',Image: 'step.jpg',Nation: 'America', Team : 1, Position: 2, Point: 23.3, Assist: 13, Rebound: 5.5},{Name: 'Lebron James',Image: 'lebron.jpg',Nation: 'America', Team : 3, Position: 3, Point: 26, Assist: 10.3, Rebound: 6},{Name: 'Giannis Antetokounmpo',Image: 'giannis.jpg',Nation: 'Greece', Team : 9, Position: 4, Point: 27.4, Assist: 12.5, Rebound: 5.9}];
	// let jsonathList = JSON.stringify(athList.List);//chuyển object athlist thành chuỗi json
	// window.localStorage.setItem("DanhsachVDV",jsonathList);
}

/***************** Xóa ******************/
function DelAth() {
	let listcheckbox = document.getElementsByClassName("checkboxx");
	let listCheckTrue = [];///checked
	for (let i = 0; i < listcheckbox.length; i++) {
		if (listcheckbox[i].checked) {
			listCheckTrue.push(listcheckbox[i].value);
		}
	}
	// console.log(listCheckTrue);
	if (confirm("Are you sure?")) {
		athList.delAth(listCheckTrue);
		updateathletesList(athList);
	} else {
		return;
	}
	
}
/*************** End ******************/ 

function updateAth1(value) {
	let vdv = athList.idAth(value);
	if (vdv != null) {
		document.getElementById("idath").value = vdv.Id;
		document.getElementById("name").value = vdv.Name;
		document.getElementById("nation").value = vdv.Nation;
		document.getElementById("team").value = vdv.Team;
		document.getElementById("position").value = vdv.Position;
		document.getElementById("point").value = vdv.Point;
		document.getElementById("assist").value = vdv.Assist;
		document.getElementById("rebound").value = vdv.Rebound;

	}
}
function updateAthh() {
	let id = document.getElementById("idath").value;
	let name = document.getElementById("name").value;
	let image = document.getElementById("img1").value;
	let nation = document.getElementById("nation").value;
	let team = document.getElementById("team").value;
	let position = document.getElementById("position").value;
	let point = document.getElementById("point").value;
	let assist = document.getElementById("assist").value;
	let rebound = document.getElementById("rebound").value;	
	let loi = 0;
	//Ảnh (Đổi /C:\\fakepath\\/i thành rỗng)
	image = image.replace(/C:\\fakepath\\/i, '');
	console.log(image);

	/*********** VALIDATION *****************/

	if (checkRequired("name",name)) {
		loi++;
	}
	if (checkRequired("nation",nation)) {
		loi++;
	}
	if (checkRequired("team",team)) {
		loi++;
	}
	if (checkRequired("position",position)) {
		loi++;
	}
	if (checkNumber(point)) {
		document.getElementById("point").style.border = "2px green solid";
	} else {
		document.getElementById("point").style.border = "2px red solid" ;
		loi++;
	}
	if (checkNumber(assist)) {
		document.getElementById("assist").style.border = "2px green solid";
	} else {
		document.getElementById("assist").style.border = "2px red solid" ;
		loi ++;
	}
	if (checkNumber(rebound)) {
		document.getElementById("rebound").style.border = "2px green solid";
	} else {
		document.getElementById("rebound").style.border = "2px red solid" ;
		loi++;
	}
	// nếu có lỗi, dừng lại tại đây
	if (loi != 0) {
		return;
	}else {
		alert("Sửa thành công");
	}
	/*********** END *****************/

	/********** THÊM DỐI TƯỢNG VĐV ***********/
	let athletes = new Athletes(id, name, image, nation, team, position, point, assist, rebound)
	console.log(athletes);
	athList.updateAth(athletes);
	updateathletesList(athList); // GỌI HÀM HIỂN THỊ
	/*********** END *************/
}
/**************** Tìm kiếm ************/
function searchATH() {
	let keyword = document.getElementById("key").value;
	if (keyword === "") {
		alert("Vui lòng nhập từ khóa");
		return;
	}
	let listsearchvdv = athList.searchAth(keyword)
	if (listsearchvdv == null) {
		alert("Thành");
	}
	updateathletesList(listsearchvdv);
}
/*************** End ******************/

/**************** Tìm kiếm theo team ************/
function searchTeam() {
	let team = document.getElementById("searchteam").value;
	let teamsearch = athList.searchteam(team)
	updateathletesList(teamsearch);
}
/*************** End ******************/
