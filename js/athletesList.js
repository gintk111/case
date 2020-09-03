function athletesList() {
	this.List = [];
	this.addAth = function(NewAth) {
		this.List.unshift(NewAth);
	};
	this.delAth = function(DelAth) {
		for(let i = 0; i < DelAth.length; i++){
			for (let j = 0; j < this.List.length; j++) {
				if(DelAth[i] == this.List[j].Name) {	
				 	this.List.splice(j,1)
				}
			}
		}
	};
	this.updateAth = function(UpdateAth) {
		for( let i = 0; i < this.List.length; i++){
			let vdvupdate = this.List[i];
			if(UpdateAth.Id == vdvupdate.Id ){
				vdvupdate.Name = UpdateAth.Name;
				vdvupdate.Image = UpdateAth.Image;
				vdvupdate.Nation = UpdateAth.Nation;
				vdvupdate.Team = UpdateAth.Team;
				vdvupdate.Position = UpdateAth.Position;
				vdvupdate.Point = UpdateAth.Point;
				vdvupdate.Assist = UpdateAth.Assist;
				vdvupdate.Rebound = UpdateAth.Rebound;
			}
		}
	};
	this.searchAth = function(key) {
		let listSearch = new athletesList();//kết quả tìm kiếm
		for(let i = 0; i < this.List.length; i++) {
			let athsearch = this.List[i];
			if(athsearch.Name.toLowerCase().trim().search(key.toLowerCase().trim()) != -1) {
				listSearch.addAth(athsearch);
			}
		}
		return listSearch;
	};
	this.searchteam = function(key) {
		let teamSearch = new athletesList();//kết quả tìm kiếm
		for(let i = 0; i < this.List.length; i++) {
			let athsearch = this.List[i];
			if(key == athsearch.Team) {
				teamSearch.addAth(athsearch);
			}
		}
		if (key === "hihi") {
			teamSearch.List = this.List;
		}
		return teamSearch;
	};	
	this.idAth = function(value) {
		for(let i = 0; i < this.List.length; i++) {
			let vdv = this.List[i];
			if (this.List.indexOf(vdv) === value) {
				return vdv;
			}	
		}
		return null;
	}	
}	