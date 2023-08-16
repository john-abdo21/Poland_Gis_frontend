import { useSelector } from 'react-redux';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'; //for osm 
import { Style, Fill, Stroke, Circle } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { useEffect, useRef } from 'react';
const getVectorLayer = () => {
  const vectorSource = new VectorSource({
    // features: features,
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  return vectorLayer;
}

const MapView = () => {
  console.log('mapview')

  const searchResult = useSelector((state) => state.filter.searchFilter);
  const mapRef = useRef(null); // ref to store the Map instance
  // const vectorLayerRef = useRef(null);      
  //openlayer map show when components mounted
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        getVectorLayer(),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        projection: 'EPSG:3857',
      }),
    });

    mapRef.current = map;

    return () => {
      map.setTarget(null);
    }

  }, []);

  //show feature when searchResult changed
  useEffect(() => {
    if (!searchResult) return;
    const start_time = new Date();
    // const geojson = {
    //   "type": "FeatureCollection",
    //   'crs': {
    //     'type': 'name',
    //     'properties': {
    //       'name': 'EPSG:3857',
    //     },
    //   },
    //   "features": [
    //     {
    //       "type": "Feature",
    //       "geometry": {
    //         "type": "Point",
    //         "coordinates": [102.0, 0.5]
    //       },
    //       "properties": {
    //         "prop0": "value0"
    //       }
    //     },
    //     {
    //       "type": "Feature",
    //       "geometry": {
    //         "type": "LineString",
    //         "coordinates": [
    //           [102.0, 0.0],
    //           [103.0, 1.0],
    //           [104.0, 0.0],
    //           [105.0, 1.0]
    //         ]
    //       },
    //       "properties": {
    //         "prop0": "value0",
    //         "prop1": 0.0
    //       }
    //     },
    //     {
    //       "type": "Feature",
    //       "geometry": {
    //         "type": "Polygon",
    //         "coordinates": [
    //           [
    //             [100.0, 0.0],
    //             [101.0, 0.0],
    //             [101.0, 1.0],
    //             [100.0, 1.0],
    //             [100.0, 0.0]
    //           ]
    //         ]
    //       },
    //       "properties": {
    //         "prop0": "value0",
    //         "prop1": { "this": "that" }
    //       }
    //     }
    //   ]
    // };
    const end_time = new Date();
    console.log(`${end_time - start_time} ms`);
    console.log('searchResult', searchResult)
    // console.log('GeoJSON:', geojson);

    const vectorSource = mapRef.current.getLayers().getArray()[1].getSource(); // Assuming VectorLayer is at index 1
    vectorSource.clear(); // Clear existing features
    const format = new GeoJSON();
    const RiverFeatures = format.readFeatures(searchResult, {
      dataProjection: 'EPSG:3857', // Specify the data projection as EPSG:4326
      featureProjection: 'EPSG:3857', // Specify the feature projection as EPSG:3857
    });
    // const LakeFeatures = format.readFeatures(searchResult['lake'], {
    //   dataProjection: "EPSG:3035", // Specify the data projection as EPSG:4326
    //   featureProjection: 'EPSG:3857', // Specify the feature projection as EPSG:3857
    // });
    // const features=searchResult;
    console.log('GeoJSON:', RiverFeatures);
    // Style for points
    const pointStyle = new Style({
      image: new Circle({
        radius: 5,
        fill: new Fill({
          color: 'red',
        }),
        stroke: new Stroke({
          color: 'black',
          width: 1,
        }),
      }),
    });

    // Style for lines
    const lineStyle = new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 2,
      }),
    });

    // Style for polygons
    const polygonStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,0,0,0.2)',
      }),
      stroke: new Stroke({
        color: 'rgba(255,0,0,0.4)',
        width: 1,
      }),
    });

    // Style for lake polygons
    // const lakepolygonStyle = new Style({
    //   fill: new Fill({
    //     color: 'rgba(0,0,255,0.2)',
    //   }),
    //   stroke: new Stroke({
    //     color: 'blue',
    //     width: 1,
    //   }),
    // });

    // Apply styles to the features based on their geometry type
    RiverFeatures.forEach((feature) => {
      const geometryType = feature.getGeometry().getType();
      if (geometryType === 'Point') {
        feature.setStyle(pointStyle);
      } else if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
        feature.setStyle(lineStyle);
      } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
        feature.setStyle(polygonStyle);
      }
    });
    // LakeFeatures.forEach((feature) => {
    //   const geometryType = feature.getGeometry().getType();
    //   if (geometryType === 'Point') {
    //     feature.setStyle(pointStyle);
    //   } else if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
    //     feature.setStyle(lineStyle);
    //   } else if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
    //     feature.setStyle(lakepolygonStyle);
    //   }
    // });
    // features.setStyle(polygonStyle);

    vectorSource.addFeatures(RiverFeatures); // Add new features        
    // vectorSource.addFeatures(LakeFeatures); // Add new features        
  }, [searchResult]);

  return (
    <div className='map'>
      <div id="map" className='map' ref={mapRef} ></div>
    </div>
  );
}

export default MapView;