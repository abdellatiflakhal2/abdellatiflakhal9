var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_1.png" /> 2'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'الجهات',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الجهات'
            });
var format_1_3 = new ol.format.GeoJSON();
var features_1_3 = format_1_3.readFeatures(json_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_3.addFeatures(features_1_3);
var lyr_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_3, 
                style: style_1_3,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_3.png" /> 1'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
cluster__4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__4
});
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:cluster__4, 
                style: style__4,
                popuplayertitle: 'المطارات',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> المطارات'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'مطارات',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> مطارات'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2_1.setVisible(true);lyr__2.setVisible(true);lyr_1_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2_1,lyr__2,lyr_1_3,lyr__4,lyr__5];
lyr_2_1.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_ré': 'centre_ré', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_ré': 'centre_ré', });
lyr_1_3.set('fieldAliases', {'fid': 'fid', 'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr_2_1.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'centre_ré': '', });
lyr__2.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'centre_ré': '', });
lyr_1_3.set('fieldImages', {'fid': '', 'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr__4.set('fieldImages', {'fid': '', 'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr__5.set('fieldImages', {'fid': '', 'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr_2_1.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'NOM_REGION': 'header label - visible with data', 'centre_ré': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'NOM_REGION': 'no label', 'centre_ré': 'no label', });
lyr_1_3.set('fieldLabels', {'fid': 'no label', 'Airport_Na': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Google_Map': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'Airport_Na': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Google_Map': 'header label - visible with data', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'Airport_Na': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Google_Map': 'header label - visible with data', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});