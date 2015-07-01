ymaps.modules.define('myNS.myModule', [
	'meta'
], function (provide, meta) {
	var coords = [55.734046, 37.588628];
	if (meta.coordinatesOrder == 'longlat') {
		coords = coords.reverse();
	}
    provide({ coords: coords });
});