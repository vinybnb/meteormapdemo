Template.home.helpers({
	geolocationError: function() {
		var error = Geolocation.error();
		return error && error.message;
	},
	mapOptions: function() {
		var latLng = Geolocation.latLng();
		// Initialize the map once we have the latLng.
		if (GoogleMaps.loaded() && latLng) {
			return {
				center: new google.maps.LatLng(latLng.lat, latLng.lng),
				zoom: MAP_ZOOM
			};
		}
	},
	houses: function() {
		return Houses.find().fetch();
	}
});

var markers = [];
var houses = [];
Template.home.onCreated(function() {
	GoogleMaps.ready('map', function(map) {
		houses = Houses.find().fetch();
		for (var i = 0; i < houses.length; i++) {

			var marker = new MarkerWithLabel({
				position: new google.maps.LatLng(houses[i].lat, houses[i].lng),
				icon: '/images/' + houses[i].type + '.png',
				labelContent: houses[i].price,
				labelClass: "marker-label",
				labelAnchor: new google.maps.Point(25, 0),
				map: map.instance,
				id: houses[i]._id
			});
			// var marker = new google.maps.Marker({
			// 	position: new google.maps.LatLng(houses[i].lat, houses[i].lng),
			// 	icon: '/images/' + houses[i].type + '.png',
			// 	map: map.instance,
			// 	id: houses[i]._id
			// });
			markers[i] = marker;
		}
		for (var i = 0; i < markers.length; i++) {
			var marker = markers[i];
			marker.addListener('click', function() {
				var house_elements = document.getElementsByClassName('house');
				for (var j = 0; j < house_elements.length; j++) {

					if (house_elements[j].id == this.id) {
						markers[j].setIcon('/images/select.png');
						house_elements[j].style.backgroundColor = "#cccccc";
					} else {
						markers[j].setIcon('images/' + houses[j].type + '.png');
						house_elements[j].style.backgroundColor = "#ffffff";
					}
				}
			});
		}
	});
	this.autorun(function() {
		if (GoogleMaps.loaded()) {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'js/markerwithlabel.js';
			document.body.appendChild(script);
		}
	});
});

Template.home.events({
	'click .house': function(event) {
		var house_item = event.currentTarget;
		var house_items = document.getElementsByClassName('house');
		for (var i = 0; i < markers.length; i++) {
			if (markers[i].id == house_item.id) {
				house_items[i].style.backgroundColor = "#cccccc";
				markers[i].setIcon('/images/select.png');
			} else {
				house_items[i].style.backgroundColor = "#ffffff";
				markers[i].setIcon('images/' + houses[i].type + '.png');
			}
		}
	}
});