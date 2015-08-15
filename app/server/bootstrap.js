Meteor.startup(function() {
	if (Houses.find().count() == 0) {
		Houses.insert({
			title: "Bán nhà phố Trần Tử Bình",
			description: "200m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "10 tỷ",
			type: 'sell',
			lat: 21.044262239673927,
			lng: 105.79094767570496
		});
		Houses.insert({
			title: "Bán nhà phố Thái Hà",
			description: "150m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "14.5 tỷ",
			type: 'rent',
			lat: 21.04465776284396,
			lng: 105.792396068573
		});
		Houses.insert({
			title: "Bán riêng Trần Đăng Ninh",
			description: "30m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "12 tỷ",
			type: "sold",
			lat: 21.043498726785817,
			lng: 105.79148411750793
		});
		Houses.insert({
			title: "Bán Chung cư cao cấp",
			description: "900m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "72 tỷ",
			type: "sell",
			lat: 21.042765250062555,
			lng: 105.78908085823059
		});
		Houses.insert({
			title: "Bán đất thổ cứ",
			description: "1000m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "8 tỷ",
			type: "sold",
			lat: 21.04102792218387,
			lng: 105.7918918132782
		});
		Houses.insert({
			title: "Cho thuê nhà riêng Trần Tử Bình",
			description: "900m2 sổ đỏ chính chủ, ô tô đỗ cửa, tiện kinh doanh",
			price: "18 tỷ",
			type: "rent",
			lat: 21.04502792218387,
			lng: 105.7918918132782
		});
	}
});