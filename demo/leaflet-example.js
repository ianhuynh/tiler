var map = L.map('map');

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 15,
    minZoom: 3,
    noWrap: true  
}).addTo(this.map)

var url = "/tiler/tiler-data/tiles/" + vectortiles + "/{z}/{x}/{y}.pbf";
var type = vectortiles;

var vectorTileStyling = { };
vectorTileStyling[type] = function(properties, zoom) {
    console.log("Styling", properties, zoom)
    return {
        fill: true,
        weight: 1,
        fillColor: "rgba(255,11,11,1)",
        color: "rgba(11,11,11,1)",
        fillOpacity: 0.3,
        opacity: 0.05,
    }
}

var VectorTileOptions = {
    rendererFactory: L.canvas.tile,
    attribution: '',
    vectorTileLayerStyles: vectorTileStyling
};


var PbfLayer = L.vectorGrid.protobuf(url, VectorTileOptions).addTo(map);


map.setView({ lat: 0.0, lng:0.0 }, 3);
