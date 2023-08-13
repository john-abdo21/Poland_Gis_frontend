import { useSelector } from 'react-redux';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ScaleLine from 'ol/control/ScaleLine';
import Zoom from 'ol/control/Zoom';

import OSM from 'ol/source/OSM'; //for osm 
import XYZ from 'ol/source/XYZ'; // for googlemap

import { Cluster } from 'ol/source'; // improve render of features
import { Style, Fill, Stroke, Circle } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { GeoJson } from 'ol/format';
import Feature from 'ol/Feature';

import { useEffect, useState, useRef } from 'react';

//set css style to componet
// import '../styles/MapView.css';
const apiKey = 'AIzaSyCQ37FgmzxObFYgNt0-bkmlHTVK0TSSFnU';

const getVectorLayer =()=> {
  const vectorSource = new VectorSource({useSpatialIndex: true,});
  return new VectorLayer({
    source: vectorSource,
    style: new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 100,
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
      image: new Circle({
        radius: 6,
        fill: new Fill({
          color: 'orange',
        }),
      }),
    }),
  });
}

const MapView = () =>{
  console.log('mapvieew')

  const searchResult = useSelector((state) => state.filter.searchFilter);
 
    // const googleSource = new XYZ({
    //     url:
    //       'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&apiKey=' +
    //       apiKey,
    //     tileSize: 256
    //   });
  
    //   const googleLayer = new TileLayer({
    //     preload: Infinity,
    //     opacity: 1,
    //     visible: true,
    //     source: googleSource
    //   });


  

      const mapRef = useRef(null); // ref to store the Map instance

      const vectorLayerRef = useRef(null);
      
      //openlayer map show when components mounted
      useEffect(()=>{
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
          }),
        });

        mapRef.current = map;

        return () => {
          map.setTarget(null);
        }

      }, []);

      // //show feature when searchResult changed
      useEffect(() =>{
        if (!searchResult) return;
        const start_time = new Date();
        // const geojson = {
        //   type:"FeatureCollection",
        //   features:
        //     searchResult.map(segment=>({
        //         "type":"Feature",
        //         "geometry": JSON.parse(segment.geometry),
        //         "properties": {
        //            "id": segment.id
        //         }
        //      })
        //   )
        // }
        const geojson = {
          "type": "FeatureCollection",
          'crs': {
            'type': 'name',
            'properties': {
              'name': 'EPSG:3857',
            },
          },
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [102.0, 0.5]
              },
              "properties": {
                "prop0": "value0"
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [102.0, 0.0],
                  [103.0, 1.0],
                  [104.0, 0.0],
                  [105.0, 1.0]
                ]
              },
              "properties": {
                "prop0": "value0",
                "prop1": 0.0
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [100.0, 0.0],
                    [101.0, 0.0],
                    [101.0, 1.0],
                    [100.0, 1.0],
                    [100.0, 0.0]
                  ]
                ]
              },
              "properties": {
                "prop0": "value0",
                "prop1": { "this": "that" }
              }
            }
          ]
        };
        const end_time = new Date();
        console.log(`${end_time - start_time} ms`);
        console.log(searchResult)

        const vectorSource = mapRef.current.getLayers().getArray()[1].getSource(); // Assuming VectorLayer is at index 1
        vectorSource.clear(); // Clear existing features
        vectorSource.addFeatures(geojson); // Add new features
        console.log(vectorSource);
        // // Adjust the map view to fit the updated features
        // const extent = vectorSource.getExtent();
        // if (extent) {
        //   mapRef.current.getView().fit(extent, {
        //     padding: [50, 50, 50, 50],
        //     maxZoom: 15,
        //   });
        // }
      }, [searchResult]);

    return(
        <div className='map'>
        <div id="map" className='map' ref={mapRef} ></div>
        {/* {coordinate && (
            <div>Coordinates: {coordinate[0].toFixed(2)}, {coordinate[1].toFixed(2)}</div>
          )} */}
        </div>
    );
}

export default MapView;