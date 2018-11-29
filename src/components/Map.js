import React, { Component } from 'react';
import _ from "lodash";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import GpsFixed from '@material-ui/icons/GpsFixed';
import GpsOff from '@material-ui/icons/GpsOff';

import backButton from '../images/left-arrow.svg';
import './Map.scss';
import config from "../custom/config";
import placeholderImage from '../images/logo.svg';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CENTER = [-0.07, 51.58];
const ZOOM = 10;

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      feature: {
        properties: {
          updated: {}
        },
        geometry: {
          coordinates:{}
        }
      },
      zoomstack:'',
    }

    this.map = {};
    this.renderedThumbnails = {};
    // this.style = 'mapbox://styles/mapbox/streets-v9';
    this.style = 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/styles/open-zoomstack-outdoor/style.json'
  }

  async componentDidMount(){
    const f = fetch(this.style);
    const res = await f;
    const zoomstack = await res.json();
    this.setState({zoomstack})
    //
    // console.log('wtf',json);

    const sources = {
      'terrain': {
        type: 'vector',
        tiles: ['https://s3-eu-west-1.amazonaws.com/tiles.os.uk/data/vector/open-zoomstack/{z}/{x}/{y}.pbf'],
      }
    }
    const layers = [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#444',
        }
      },
    ];

    const glyphs = 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/fonts/{fontstack}/{range}.pbf';

    // if (this.map && !this.map.getSource('composite')) {
    //
    //
    //   this.map.addSource('composite',res.sources.composite)
    //
    //   res.layers.forEach(layer=>{
    //     this.map.addLayer(layer)
    //   })
    //
    // }
    // else{
    //   console.log('wtf2222',this.map.getSource('composite'));
    // }

    const location = this.props.location;
    const photos = config.dbModule.fetchPhotos();

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2RhbGthZm91a2lzIiwiYSI6ImNqajhia3I5cjEzdmwzcW8za3ZkYmk1MWQifQ.b15MXjz3-VA8IkyPXrJVjQ';

    this.map = new mapboxgl.Map({
      container: 'map', // container id
      // style: 'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/styles/open-zoomstack-outdoor/style.json', //stylesheet location
      // style: 'mapbox://styles/mapbox/streets-v9',
      style:{version:8,sources,layers,glyphs},
      center: location.updated ? [location.longitude, location.latitude] : CENTER, // starting position [lng, lat]
      zoom: ZOOM, // starting zoom
      customAttribution: 'Contains OS data &copy; Crown copyright and database rights 2018',
      bounds: [
        -11.91,
        49.3,
        3.61,
        61.61
      ],
      // maxBounds: [
      //   -11.91,
      //   49.3,
      //   3.61,
      //   61.61
      // ],
    });

    this.map.on('load', async () => {
      const geojson = await photos;
      // console.log(this.map.getStyle(),this.map.getSource('composite'));
      this.addFeaturesToMap(geojson);
    });

    window.gtag('event', 'page_view', {
      'event_category': 'view',
      'event_label': 'Map'
    });
  }

  addFeaturesToMap = geojson => {
    this.map.addSource("data", {
        type: "geojson",
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 40 // Radius of each cluster when clustering points (defaults to 50)
    });

    this.map.addLayer({
        id: "clusters",
        type: "circle",
        source: "data",
        filter: ["has", "point_count"],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
                "step",
                ["get", "point_count"],
                "#51bbd6",
                100,
                "#f1f075",
                750,
                "#f28cb1"
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                100,
                30,
                750,
                40
            ]
        }
    });

    this.map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "data",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Source Sans Pro Regular"],
            "text-size": 12
        }
    });

    this.map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "data",
        filter: ["!", ["has", "point_count"]],
        paint: {
            "circle-color": "#11b4da",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });

    this.map.on('render', 'unclustered-point', e => {
      this.updateRenderedThumbails(e.features);
    });

    this.map.on('mouseenter', 'clusters', () => {
        this.map.getCanvas().style.cursor = 'pointer';
    });
    this.map.on('mouseleave', 'clusters', () => {
        this.map.getCanvas().style.cursor = '';
    });

    this.map.on('click', 'clusters', (e) => {
      const features = this.map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
      const clusterId = features[0].properties.cluster_id;
      this.map.getSource('data').getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err)
            return;
        this.map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
        });
      });
    });

    this.map.addSource('composite', {
        type: 'vector',
        tiles: [
          "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/data/vector/open-zoomstack/{z}/{x}/{y}.pbf",
        ],
        vector_layers: [
          {
            "description": "",
            "fields": {
              "name": "String"
            },
            "id": "airports",
            "maxzoom": 14,
            "minzoom": 10,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "type": "String"
            },
            "id": "boundaries",
            "maxzoom": 14,
            "minzoom": 5,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "buildings",
            "maxzoom": 14,
            "minzoom": 5,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "height": "String",
              "type": "String"
            },
            "id": "contours",
            "maxzoom": 14,
            "minzoom": 9,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "etl",
            "maxzoom": 14,
            "minzoom": 12,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "foreshore",
            "maxzoom": 14,
            "minzoom": 9,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "function": "String"
            },
            "id": "greenspaces",
            "maxzoom": 14,
            "minzoom": 10,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "name": "String",
              "type": "String"
            },
            "id": "names",
            "maxzoom": 14,
            "minzoom": 5,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "national-parks",
            "maxzoom": 14,
            "minzoom": 5,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "type": "String"
            },
            "id": "rail",
            "maxzoom": 14,
            "minzoom": 10,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "name": "String",
              "type": "String"
            },
            "id": "railwaystation",
            "maxzoom": 14,
            "minzoom": 12,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "level": "String",
              "name": "String",
              "number": "String",
              "type": "String"
            },
            "id": "roads",
            "maxzoom": 14,
            "minzoom": 5,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "sea",
            "maxzoom": 14,
            "minzoom": 0,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "type": "String"
            },
            "id": "sites",
            "maxzoom": 14,
            "minzoom": 11,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "surfacewater",
            "maxzoom": 14,
            "minzoom": 6,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {
              "type": "String"
            },
            "id": "waterlines",
            "maxzoom": 14,
            "minzoom": 8,
            "source": "os-zoom",
            "source_name": "os-zoom"
          },
          {
            "description": "",
            "fields": {},
            "id": "woodland",
            "maxzoom": 14,
            "minzoom": 6,
            "source": "os-zoom",
            "source_name": "os-zoom"
          }
        ]
    });
    console.log('good',this.map.getSource('composite'));

    this.state.zoomstack.layers.forEach(layer=>{
      console.log('good');
      this.map.addLayer(layer)
    })

  }

  flyToGpsLocation = () =>{
    this.map.flyTo({
      center: [this.props.location.longitude, this.props.location.latitude]
    });
  }

  handleDialogClose = () => {
    this.setState({openDialog:false});
  }

  updateRenderedThumbails = (visibleFeatures) =>{
    _.forEach(this.renderedThumbnails, (thumbnailUrl, id) => {
      const exists = !!_.find(visibleFeatures, (feature) => feature.properties.id === id);
      // if it !exist => remove marker object - delete key from dictionary
      if (!exists) {
        this.renderedThumbnails[id].remove();
        delete this.renderedThumbnails[id];
      }
    })

    visibleFeatures.forEach(feature => {
      if (!this.renderedThumbnails[feature.properties.id]) {
        //create a div element - give attributes
        const el = document.createElement('div');
        el.className = 'marker';
        el.id = feature.properties.id;
        el.style.backgroundImage = `url(${feature.properties.thumbnail})`;
        el.addEventListener('click', () => this.setState({openDialog:true,feature}));
        //create marker
        const marker = new mapboxgl.Marker(el)
          .setLngLat(feature.geometry.coordinates)
          .addTo(this.map);
        //save the marker object to the renderedThumbnails dictionary
        this.renderedThumbnails[feature.properties.id] = marker;
      }
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  func = () => {
    console.log('hi');
    // this.map.setStyle(this.style);
    // fetch(this.style)
    // .then(res=>res.json())
    // .then(res=>{
    //   // this.setState({zoomstack:res})
    //   console.log('wtf',res);
    //
    //   if (this.map && !this.map.getSource('composite')) {
    //
    //     // this.map.addSource('composite', {
    //     //     type: 'vector',
    //     //     tiles: ['https://s3-eu-west-1.amazonaws.com/tiles.os.uk/data/vector/open-zoomstack/{z}/{x}/{y}.pbf']
    //     // })
    //
    //     this.map.addSource('composite',res.sources.composite)
    //
    //     res.layers.forEach(layer=>{
    //       this.map.addLayer(layer)
    //     })
    //
    //   }
    //   else{
    //     console.log('wtf2222',this.map.getSource('composite'));
    //   }
    // })
    // this.map.addLayer(highlightLayer, 'building');
  }

  render() {

    const feature = this.state.feature;
    const gpsOffline = !(this.props.location.online);
    const gpsDisabled = !this.props.location.updated;
    return (
      <div className="geovation-map">
        <div onClick={this.func} className="headline">
          <div className="buttonwrapper">
            <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
              <Button>
                <img className='buttonback' src={backButton} alt=''/>
              </Button>
            </Link>
          </div>
          <div className="headtext">Map</div>
          <div className="headspace"/>
        </div>
        <div id='map' className="map"></div>
        <Button variant="fab" className="location" onClick={this.flyToGpsLocation} disabled={gpsDisabled}>
          {gpsOffline ? <GpsOff/> : <GpsFixed/>}
        </Button>

        <Dialog open={this.state.openDialog} onClose={this.handleDialogClose}>
          <DialogContent>
            <img onError={(e) => { e.target.src=placeholderImage}} className={"main-image"} alt={''} src={feature.properties.main}/>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.properties.description}
                  </Typography>
                  <Typography component="p">
                    Coordinates: {feature.geometry.coordinates[0]}, {feature.geometry.coordinates[1]}
                  </Typography>
                  <Typography component="p">
                    Time: {Date(feature.properties.updated.seconds)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </DialogContent>

        </Dialog>
      </div>
    );
  }
}

export default Map;
