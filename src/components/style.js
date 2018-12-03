const OSMstyle = {
    version: 8,
    sources: {
        "simple-tiles": {
            "type": "raster",
            // point to our third-party tiles. Note that some examples
            // show a "url" property. This only applies to tilesets with
            // corresponding TileJSON (such as mapbox tiles).
            "tiles": [
                "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ],
            "tileSize": 256,
            // "bounds": [
            //   -11.91,
            //   49.3,
            //   3.61,
            //   61.61
            // ],
        }
    },
    layers: [{
        "id": "simple-tiles",
        "type": "raster",
        "source": "simple-tiles",
        "minzoom": 0,
        "maxzoom": 22
    }],
    glyphs:'https://s3-eu-west-1.amazonaws.com/tiles.os.uk/fonts/{fontstack}/{range}.pbf'
}

const OSsource = {
  "tilejson": "2.2.0",
  "id": "os-zoom",
  "name": "os-zoom",
  "description": "OS Zoom Stack",
  "minzoom": 0,
  "maxzoom": 14,
  "version": "1",
  "scheme": "xyz",
  "type": "vector",
  "bounds": [
    -11.91,
    49.3,
    3.61,
    61.61
  ],
  "center": [
    0.85,
    51.77,
    14
  ],
  "format": "pbf",
  "mapbox_logo": false,
  "tiles": [
    "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/data/vector/open-zoomstack/{z}/{x}/{y}.pbf"
  ],
  "vector_layers": [
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
}

const OSstyle = {
    "version": 8,
    "name": "OS Outdoor",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "template",
        "mapbox:print": {
            "units": "in",
            "width": 8.5,
            "height": 11,
            "resolution": 300,
            "format": "png"
        },
        "mapbox:sdk-support": {
            "js": "0.45.0",
            "android": "6.0.0",
            "ios": "4.0.0"
        },
        "mapbox:groups": {
            "95de6b6a9598813bfa2767abe8c13e6b": {
                "name": "Names Group",
                "collapsed": false
            },
            "b70308493053f7bbb91b528ae2a71241": {
                "name": "Road Level 0",
                "collapsed": true
            },
            "544b2a8d8b4148c11cbdbcbf6ea8173d": {
                "name": "Road Level 1",
                "collapsed": true
            }
        }
    },
    "center": [
        -1.445462913521851,
        50.924985957591986
    ],
    "zoom": 13.822550415023533,
    "bearing": -1.393608084872767,
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "composite2": {
            "url": "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/data/vector/open-zoomstack/config.json",
            "type": "vector",
        },
    },
    "sprite": "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/styles/open-zoomstack-outdoor/sprites",
    "glyphs": "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/fonts/{fontstack}/{range}.pbf",
    "layers": [
        // {
        //     "id": "background",
        //     "type": "background",
        //     "layout": {},
        //     "paint": {
        //         "background-color": "#f4f4ee"
        //     }
        // },
        // {
        //     "id": "sea shadow",
        //     "type": "fill",
        //     "source": "composite2",
        //     "source-layer": "sea",
        //     "layout": {},
        //     "paint": {
        //         "fill-color": "hsl(195, 67%, 65%)",
        //         "fill-translate": [
        //             "interpolate",
        //             [
        //                 "linear"
        //             ],
        //             [
        //                 "zoom"
        //             ],
        //             5,
        //             [
        //                 "literal",
        //                 [
        //                     -0.2,
        //                     -0.2
        //                 ]
        //             ],
        //             15,
        //             [
        //                 "literal",
        //                 [
        //                     -1,
        //                     -1
        //                 ]
        //             ]
        //         ],
        //         "fill-translate-anchor": "viewport"
        //     }
        // },
        // {
        //     "id": "sea",
        //     "type": "fill",
        //     "source": "composite2",
        //     "source-layer": "sea",
        //     "layout": {},
        //     "paint": {
        //         "fill-color": "hsl(195, 68%, 80%)"
        //     }
        // },
        {
            "id": "national-parks",
            "type": "fill",
            "source": "composite2",
            "source-layer": "national-parks",
            "minzoom": 5,
            "maxzoom": 12,
            "layout": {},
            "paint": {
                "fill-color": "#e2efce",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            12,
                            0.1
                        ]
                    ]
                }
            }
        },
        {
            "id": "built up areas",
            "type": "fill",
            "source": "composite2",
            "source-layer": "buildings",
            "minzoom": 5,
            "maxzoom": 11,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(46, 24%, 82%)",
                "fill-opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.2,
                    11,
                    0.4
                ]
            }
        },
        {
            "id": "sites",
            "type": "fill",
            "source": "composite2",
            "source-layer": "sites",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "Air Transport",
                    "#e6e6e6",
                    "Education",
                    "#f7eaca",
                    "Medical Care",
                    "#f3d8e7",
                    "Road Transport",
                    "#f7f3ca",
                    "Water Transport",
                    "#d8e6f3",
                    "hsl(55, 74%, 88%)"
                ],
                "fill-opacity": 0.6
            }
        },
        {
            "id": "greenspaces",
            "type": "fill",
            "source": "composite2",
            "source-layer": "greenspaces",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": "#e3f0db",
                "fill-outline-color": "#d1e7c3",
                "fill-opacity": 1,
                "fill-antialias": false
            }
        },
        {
            "id": "greenspaces outlines",
            "type": "line",
            "source": "composite2",
            "source-layer": "greenspaces",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "line-color": "#b9dba4",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    0.1,
                    15,
                    0.3,
                    18,
                    0.6
                ]
            }
        },
        {
            "id": "woodland",
            "type": "fill",
            "source": "composite2",
            "source-layer": "woodland",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": "#d1e7c3",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.3
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "contours",
            "type": "line",
            "source": "composite2",
            "source-layer": "contours",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "line-width": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "Normal",
                    0.2,
                    0.5
                ],
                "line-opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    9,
                    0.15,
                    11,
                    0.25,
                    12,
                    0.6
                ],
                "line-color": "hsl(36, 16%, 45%)"
            }
        },
        {
            "id": "waterlines",
            "type": "line",
            "source": "composite2",
            "source-layer": "waterlines",
            "minzoom": 5,
            "filter": [
                "in",
                "type",
                "Surface",
                "surface"
            ],
            "layout": {},
            "paint": {
                "line-color": "#a4daeb"
            }
        },
        {
            "id": "surfacewater shadow",
            "type": "fill",
            "source": "composite2",
            "source-layer": "surfacewater",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": "#6ac4e2",
                "fill-translate": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    [
                        "literal",
                        [
                            0,
                            0
                        ]
                    ],
                    15,
                    [
                        "literal",
                        [
                            -0.8,
                            -0.8
                        ]
                    ],
                    16,
                    [
                        "literal",
                        [
                            -1.5,
                            -1.5
                        ]
                    ],
                    20,
                    [
                        "literal",
                        [
                            -2,
                            -2
                        ]
                    ]
                ],
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "surfacewater",
            "type": "fill",
            "source": "composite2",
            "source-layer": "surfacewater",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": "hsl(195, 68%, 80%)"
            }
        },
        {
            "id": "foreshore",
            "type": "fill",
            "source": "composite2",
            "source-layer": "foreshore",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "fill-color": "#ebebd3"
            }
        },
        {
            "id": "roads 0 Restricted Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "Restricted"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    3.5,
                    17,
                    7,
                    22,
                    60
                ],
                "line-dasharray": [
                    2,
                    0.5
                ]
            }
        },
        {
            "id": "roads 0 Local Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "Local"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    4.5,
                    17,
                    16,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 0 Minor Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "Minor"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 0 B Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "B Road"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 0 A Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "A Road"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 0 Primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "Primary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#77c776",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    6,
                    17,
                    22,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 0 Motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "b70308493053f7bbb91b528ae2a71241"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "0"
                ],
                [
                    "==",
                    "type",
                    "Motorway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#08b8e8",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    6,
                    17,
                    22,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 Local Road case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Local"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(60, 22%, 90%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    8.5,
                    17,
                    24,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 Minor Road case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Minor"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(60, 22%, 90%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    9,
                    17,
                    28,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 B Road case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "B Road"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(60, 22%, 90%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    9,
                    17,
                    28,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 A Road case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "A Road"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(60, 22%, 90%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    9,
                    17,
                    28,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 Primary case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Primary"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(60, 22%, 90%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    10,
                    17,
                    32,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 Motorway case",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Motorway"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#ebebe0",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    6,
                    15,
                    10,
                    17,
                    32,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 1 Restricted Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Restricted"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    3.5,
                    17,
                    7,
                    22,
                    60
                ],
                "line-dasharray": [
                    2,
                    0.5
                ]
            }
        },
        {
            "id": "roads 1 Local Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Local"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    4.5,
                    17,
                    16,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 Minor Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Minor"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 B Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "B Road"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 A Road",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "A Road"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5.5,
                    17,
                    20,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 Primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Primary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#77c776",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    6,
                    17,
                    22,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 1 Motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "544b2a8d8b4148c11cbdbcbf6ea8173d"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    "1"
                ],
                [
                    "==",
                    "type",
                    "Motorway"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(193, 93%, 47%)",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    6,
                    17,
                    22,
                    22,
                    100
                ]
            }
        },
        {
            "id": "roads 2 case",
            "type": "line",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
                "==",
                "level",
                "2"
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#ebebe0",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    12,
                    2.5,
                    14,
                    3,
                    15,
                    9,
                    17,
                    24,
                    22,
                    120
                ]
            }
        },
        {
            "id": "roads 2",
            "type": "line",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 5,
            "filter": [
                "==",
                "level",
                "2"
            ],
            "layout": {
                "line-cap": "square",
                "line-join": "round"
            },
            "paint": {
                "line-color": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "Motorway",
                    "#08b8e8",
                    "Primary",
                    "#77c776",
                    "hsl(0, 0%, 100%)"
                ],
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    0.35,
                    10,
                    1.75,
                    14,
                    2,
                    15,
                    5,
                    17,
                    18,
                    22,
                    100
                ]
            }
        },
        {
            "id": "rail",
            "type": "line",
            "source": "composite2",
            "source-layer": "rail",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "line-color": "#949197",
                "line-width": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    [
                        "match",
                        [
                            "get",
                            "type"
                        ],
                        "Multi Track",
                        0.6,
                        "Single Track",
                        0.5,
                        "Narrow Gauge",
                        0.5,
                        "tunnel",
                        0.6,
                        0.5
                    ],
                    17,
                    [
                        "match",
                        [
                            "get",
                            "type"
                        ],
                        "Multi Track",
                        2,
                        "Single Track",
                        1.5,
                        "Narrow Gauge",
                        1,
                        "tunnel",
                        1,
                        1
                    ]
                ],
                "line-opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    0.2,
                    14,
                    1
                ]
            }
        },
        {
            "id": "road numbers under",
            "type": "symbol",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 14,
            "filter": [
                "!in",
                "type",
                "Motorway",
                "Primary"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    7,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro SemiBold"
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#858585"
            }
        },
        {
            "id": "Primary road numbers under",
            "type": "symbol",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 14,
            "filter": [
                "==",
                "type",
                "Primary"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    8,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Bold"
                ]
            },
            "paint": {
                "text-halo-color": "#77c776",
                "text-halo-width": 1,
                "text-color": "#fff",
                "text-halo-blur": 0
            }
        },
        {
            "id": "Motorway numbers under",
            "type": "symbol",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 14,
            "filter": [
                "==",
                "type",
                "Motorway"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    8,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Bold"
                ]
            },
            "paint": {
                "text-halo-color": "#08b8e8",
                "text-halo-width": 1,
                "text-color": "#fff",
                "text-halo-blur": 0
            }
        },
        {
            "id": "road names under",
            "type": "symbol",
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 14,
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    8,
                    15,
                    10,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#5c5c5c"
            }
        },
        {
            "id": "buildings",
            "type": "fill-extrusion",
            "source": "composite2",
            "source-layer": "buildings",
            "minzoom": 11,
            "layout": {},
            "paint": {
                "fill-extrusion-color": "#dcd7c6",
                "fill-extrusion-height": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    0,
                    15,
                    7
                ]
            }
        },
        {
            "id": "boundaries",
            "type": "line",
            "source": "composite2",
            "source-layer": "boundaries",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "line-width": 1,
                "line-color": "#c4c4c4",
                "line-opacity": 1
            }
        },
        {
            "id": "etl",
            "type": "line",
            "source": "composite2",
            "source-layer": "etl",
            "minzoom": 5,
            "layout": {},
            "paint": {
                "line-opacity": 0.4,
                "line-color": "hsl(0, 9%, 55%)",
                "line-dasharray": [
                    10,
                    5
                ]
            }
        },
        {
            "id": "road numbers",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "!in",
                "type",
                "Motorway",
                "Primary"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    7,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro SemiBold"
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#858585"
            }
        },
        {
            "id": "Primary road numbers",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "==",
                "type",
                "Primary"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    8,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Bold"
                ]
            },
            "paint": {
                "text-halo-color": "#77c776",
                "text-halo-width": 1,
                "text-color": "#fff",
                "text-halo-blur": 0
            }
        },
        {
            "id": "Motorway numbers",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "==",
                "type",
                "Motorway"
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "{number}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    8,
                    15,
                    11,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Bold"
                ]
            },
            "paint": {
                "text-halo-color": "#08b8e8",
                "text-halo-width": 1,
                "text-color": "#fff",
                "text-halo-blur": 0
            }
        },
        {
            "id": "road names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "roads",
            "minzoom": 10,
            "maxzoom": 14,
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    8,
                    15,
                    10,
                    22,
                    20
                ],
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#5c5c5c"
            }
        },
        {
            "id": "contour labels",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "contours",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Index"
            ],
            "layout": {
                "text-field": [
                    "to-string",
                    [
                        "get",
                        "height"
                    ]
                ],
                "symbol-placement": "line",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    12,
                    7,
                    15,
                    9,
                    22,
                    20
                ],
                "text-letter-spacing": 0.05,
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-max-angle": 35,
                "symbol-spacing": 250
            },
            "paint": {
                "text-color": "#b2a695",
                "text-halo-color": "hsla(60, 21%, 95%, 0.7)",
                "text-halo-blur": 1,
                "text-halo-width": 1
            }
        },
        {
            "id": "Motorway Junctions",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 14,
            "filter": [
                "==",
                "type",
                "Motorway Junction"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Bold"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    14,
                    11,
                    22,
                    20
                ]
            },
            "paint": {
                "text-halo-color": "hsl(193, 78%, 36%)",
                "text-color": "#fff",
                "text-halo-blur": 0,
                "text-halo-width": 10
            }
        },
        {
            "id": "Greenspace names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 13,
            "filter": [
                "==",
                "type",
                "Greenspace"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    13,
                    9,
                    14,
                    11
                ],
                "text-line-height": 1
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#438519"
            }
        },
        {
            "id": "Sites names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 13,
            "filter": [
                "==",
                "type",
                "Sites"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    13,
                    9,
                    14,
                    11
                ],
                "text-line-height": 1
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#a79720"
            }
        },
        {
            "id": "Landform names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Landform"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    9,
                    14,
                    11
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#af7631"
            }
        },
        {
            "id": "Landcover names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Landcover"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    9,
                    14,
                    11
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#af9031"
            }
        },
        {
            "id": "Water names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Water"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    9,
                    14,
                    11
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#318fae"
            }
        },
        {
            "id": "Woodland names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Woodland"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    9,
                    14,
                    11
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#599c30"
            }
        },
        {
            "id": "Small Settlement names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Small Settlements"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    12,
                    9,
                    14,
                    11
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(47, 66%, 27%)"
            }
        },
        {
            "id": "Suburban names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 10,
            "filter": [
                "==",
                "type",
                "Suburban Area"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    10.5,
                    14,
                    14
                ],
                "text-padding": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    6,
                    14,
                    2
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(47, 66%, 27%)",
                "text-opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    0.8,
                    14,
                    1
                ]
            }
        },
        {
            "id": "railwaystation names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "railwaystation",
            "minzoom": 5,
            "layout": {
                "text-line-height": 1,
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    12,
                    9,
                    15,
                    13
                ],
                "icon-image": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "Railway Station",
                    "RS",
                    "London Underground Station",
                    "UG",
                    "Light Rapid Transit Station",
                    "LRTS",
                    "Light Rapid Transit Station And London Underground Station",
                    "LRTS-UG",
                    "Light Rapid Transit Station And Railway Station",
                    "RS-LRTS",
                    "Railway Station And London Underground Station",
                    "RS-UG",
                    ""
                ],
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-justify": "left",
                "text-offset": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "Railway Station",
                    [
                        "literal",
                        [
                            1,
                            0
                        ]
                    ],
                    "Light Rapid Transit Station",
                    [
                        "literal",
                        [
                            1,
                            0
                        ]
                    ],
                    "London Underground Station",
                    [
                        "literal",
                        [
                            1,
                            0
                        ]
                    ],
                    "Railway Station And London Underground Station",
                    [
                        "literal",
                        [
                            1.7,
                            0
                        ]
                    ],
                    "Light Rapid Transit Station And London Underground Station",
                    [
                        "literal",
                        [
                            1.5,
                            0
                        ]
                    ],
                    "Light Rapid Transit Station And Railway Station",
                    [
                        "literal",
                        [
                            1.7,
                            0
                        ]
                    ],
                    [
                        "literal",
                        [
                            0,
                            0
                        ]
                    ]
                ],
                "icon-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    12,
                    0.4,
                    15,
                    1
                ],
                "text-anchor": "left",
                "text-field": [
                    "to-string",
                    [
                        "get",
                        "name"
                    ]
                ]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "airport names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "airports",
            "minzoom": 5,
            "layout": {
                "text-line-height": 1,
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    9,
                    15,
                    13
                ],
                "icon-image": "Airport",
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-justify": "left",
                "text-offset": [
                    0.8,
                    0
                ],
                "icon-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    10,
                    0.8,
                    15,
                    1
                ],
                "text-anchor": "left",
                "text-field": [
                    "to-string",
                    [
                        "get",
                        "name"
                    ]
                ]
            },
            "paint": {
                "text-halo-blur": 1,
                "text-halo-width": 1,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-color": "#303030"
            }
        },
        {
            "id": "Village names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "in",
                "type",
                "Hamlet",
                "Village"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    9,
                    9,
                    14,
                    15
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#655314"
            }
        },
        {
            "id": "Town names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Town"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Regular"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    7,
                    10,
                    14,
                    18
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(46, 67%, 13%)"
            }
        },
        {
            "id": "City names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "City"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro SemiBold"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    10,
                    14,
                    20
                ]
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#342a07"
            }
        },
        {
            "id": "National Park names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "National Park"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro SemiBold"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    8,
                    14,
                    15
                ],
                "text-letter-spacing": 0.05,
                "text-line-height": 1
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#599c30",
                "text-opacity": 0.8
            }
        },
        {
            "id": "Capital City names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "filter": [
                "==",
                "type",
                "Capital"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro Bold"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    11,
                    14,
                    26
                ],
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#342a07"
            }
        },
        {
            "id": "Country names",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "95de6b6a9598813bfa2767abe8c13e6b"
            },
            "source": "composite2",
            "source-layer": "names",
            "minzoom": 5,
            "maxzoom": 10,
            "filter": [
                "==",
                "type",
                "Country"
            ],
            "layout": {
                "text-font": [
                    "Source Sans Pro SemiBold"
                ],
                "text-field": "{name}",
                "text-size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    5,
                    18,
                    10,
                    30
                ],
                "text-letter-spacing": 0.2,
                "text-transform": "uppercase"
            },
            "paint": {
                "text-halo-color": "#f4f4ee",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#342a07",
                "text-opacity": 0.6
            }
        }
    ],
    "created": "2018-05-11T11:38:48.884Z",
    "id": "cjh1w236f0tj22sl87sm547vt",
    "modified": "2018-05-26T21:01:47.000Z",
    "owner": "Ordnance Survey",
    "visibility": "public",
    "draft": false
}

const MBstyle = {
    "version": 8,
    "name": "Basic",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "template"
    },
    "sources": {
        "mapbox": {
            "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7",
            "type": "vector"
        }
    },
    "center": [
        -1.445462913521851,
        50.924985957591986
    ],
    "zoom": 13.822550415023533,
    "bearing": 0,
    "pitch": 0,
    "sprite": "mapbox://sprites/mapbox/basic-v9",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        // {
        //     "id": "background",
        //     "type": "background",
        //     "paint": {
        //         "background-color": "#dedede"
        //     },
        //     "interactive": true
        // },
        {
            "id": "landuse_overlay_national_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse_overlay",
            "filter": [
                "==",
                "class",
                "national_park"
            ],
            "paint": {
                "fill-color": "#d2edae",
                "fill-opacity": 0.75
            },
            "interactive": true
        },
        {
            "id": "landuse_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "park"
            ],
            "paint": {
                "fill-color": "#d2edae"
            },
            "interactive": true
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "mapbox",
            "source-layer": "waterway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "river",
                    "canal"
                ]
            ],
            "paint": {
                "line-color": "#a0cfdf",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            8,
                            0.5
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "water",
            "paint": {
                "fill-color": "#a0cfdf"
            },
            "interactive": true
        },
        {
            "id": "building",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "building",
            "paint": {
                "fill-color": "#d6d6d6"
            },
            "interactive": true
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "tunnel_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    0.36,
                    0.18
                ]
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "tunnel_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    0.28,
                    0.14
                ]
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "in",
                        "structure",
                        "none",
                        "ford"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "in",
                        "structure",
                        "none",
                        "ford"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_minor case",
            "paint": {
                "line-color": "#dedede",
                "line-width": {
                    "base": 1.6,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_major case",
            "paint": {
                "line-color": "#dedede",
                "line-width": {
                    "base": 1.6,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "<=",
                        "admin_level",
                        2
                    ],
                    [
                        "==",
                        "maritime",
                        0
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "admin_country",
            "paint": {
                "line-color": "#8b8a8a",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            22,
                            15
                        ]
                    ]
                }
            },
            "source-layer": "admin"
        },
        {
            "interactive": true,
            "minzoom": 5,
            "layout": {
                "icon-image": "{maki}-11",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 8,
                "text-anchor": "top",
                "text-size": 11,
                "icon-size": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "all",
                    [
                        "==",
                        "scalerank",
                        1
                    ],
                    [
                        "==",
                        "localrank",
                        1
                    ]
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "poi_label",
            "paint": {
                "text-color": "#666",
                "text-halo-width": 1,
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-blur": 1
            },
            "source-layer": "poi_label"
        },
        {
            "interactive": true,
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-transform": "uppercase",
                "text-letter-spacing": 0.1,
                "text-size": {
                    "base": 1.4,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                }
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "road_major_label",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 2
            },
            "source-layer": "road_label"
        },
        {
            "interactive": true,
            "minzoom": 8,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 6,
                "text-size": {
                    "stops": [
                        [
                            6,
                            12
                        ],
                        [
                            12,
                            16
                        ]
                    ]
                }
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "type",
                    "town",
                    "village",
                    "hamlet",
                    "suburb",
                    "neighbourhood",
                    "island"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "place_label_other",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-size": {
                    "stops": [
                        [
                            3,
                            12
                        ],
                        [
                            8,
                            16
                        ]
                    ]
                }
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "place_label_city",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 10,
                "text-size": {
                    "stops": [
                        [
                            3,
                            14
                        ],
                        [
                            8,
                            22
                        ]
                    ]
                }
            },
            "maxzoom": 12,
            "filter": [
                "==",
                "$type",
                "Point"
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "country_label",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            },
            "source-layer": "country_label"
        }
    ]
}

const MBstyle2 = {
    "version": 8,
    "name": "Basic Template",
    "metadata": {
        "mapbox:origin": "basic-template-v1",
        "mapbox:autocomposite": true,
        "mapbox:type": "template",
        "mapbox:sdk-support": {
            "js": "0.46.0",
            "android": "6.0.0",
            "ios": "4.0.0"
        }
    },
    "center": [2.3176, 48.8665],
    "zoom": 12,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "mapbox": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/kdalkafoukis/cjkl9p2v865f52qruteaomco4",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(38, 43%, 89%)",
                    7,
                    "hsl(38, 48%, 86%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "national_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse_overlay",
            "filter": ["==", "class", "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(78, 51%, 73%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.5
                ]
            },
            "interactive": true
        },
        {
            "id": "landuse",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": ["in", "class", "hospital", "park", "pitch", "school"],
            "layout": {},
            "paint": {
                "fill-color": [
                    "match",
                    ["get", "class"],
                    "park",
                    "hsl(78, 51%, 73%)",
                    "pitch",
                    "hsl(78, 51%, 73%)",
                    "hospital",
                    "hsl(0, 56%, 89%)",
                    "school",
                    "hsl(25, 45%, 85%)",
                    "hsla(0, 0%, 0%, 0)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    1
                ]
            },
            "interactive": true
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "mapbox",
            "source-layer": "waterway",
            "minzoom": 8,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "class", "canal", "river"]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-color": "hsl(205, 76%, 70%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    8.5,
                    0.1,
                    20,
                    8
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(205, 76%, 67%)",
                    7,
                    "hsl(205, 76%, 70%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "aeroway",
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["in", "type", "helipad", "runway", "taxiway"]
            ],
            "layout": {},
            "paint": {"fill-color": "hsl(0, 0%, 77%)"},
            "interactive": true
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "source": "mapbox",
            "source-layer": "aeroway",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "type", "runway", "taxiway"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.5,
                    18,
                    20
                ],
                "line-color": "hsl(0, 0%, 77%)"
            },
            "interactive": true
        },
        {
            "id": "building",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", "type", "building:part"],
                ["==", "underground", "false"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(38, 28%, 77%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15.5,
                    0,
                    16,
                    1
                ]
            },
            "interactive": true
        },
        {
            "id": "pedestrian-path",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "platform"],
                    ["in", "class", "path", "pedestrian"]
                ]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        "pedestrian",
                        1,
                        "path",
                        0.75,
                        0.75
                    ],
                    20,
                    ["match", ["get", "class"], "pedestrian", 8, "path", 5, 5]
                ],
                "line-color": [
                    "match",
                    ["get", "type"],
                    "sidewalk",
                    "hsl(38, 35%, 80%)",
                    "crossing",
                    "hsl(38, 35%, 80%)",
                    "hsl(38, 28%, 70%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "tunnel",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "tunnel"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ],
                "line-dasharray": [0.2, 0.2]
            },
            "interactive": true
        },
        {
            "id": "road",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["!in", "structure", "bridge", "tunnel"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "bridge-case",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "bridge"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "hsl(38, 48%, 86%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ]
            },
            "interactive": true
        },
        {
            "id": "bridge",
            "type": "line",
            "source": "mapbox",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "bridge"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "admin-state-province",
            "type": "line",
            "source": "mapbox",
            "source-layer": "admin",
            "minzoom": 2,
            "filter": ["all", ["==", "maritime", 0], [">=", "admin_level", 3]],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [2, 0]],
                    7,
                    ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0.75,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": [
                    "step",
                    ["zoom"],
                    "hsl(0, 0%, 80%)",
                    4,
                    "hsl(0, 0%, 65%)"
                ]
            },
            "interactive": true
        },
        {
            "id": "admin-country",
            "type": "line",
            "source": "mapbox",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["<=", "admin_level", 2],
                ["==", "disputed", 0],
                ["==", "maritime", 0]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-color": "hsl(0, 0%, 50%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ]
            },
            "interactive": true
        },
        {
            "id": "admin-country-disputed",
            "type": "line",
            "source": "mapbox",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["<=", "admin_level", 2],
                ["==", "disputed", 1],
                ["==", "maritime", 0]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "hsl(0, 0%, 50%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-dasharray": [1.5, 1.5]
            },
            "interactive": true
        },
        {
            "id": "road-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "road_label",
            "minzoom": 12,
            "filter": [
                "in",
                "class",
                "link",
                "motorway",
                "pedestrian",
                "primary",
                "secondary",
                "street",
                "street_limited",
                "tertiary",
                "trunk"
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    9,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        10,
                        "trunk",
                        10,
                        "primary",
                        10,
                        "secondary",
                        10,
                        "tertiary",
                        10,
                        9
                    ],
                    20,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        15,
                        "trunk",
                        15,
                        "primary",
                        15,
                        "secondary",
                        15,
                        "tertiary",
                        15,
                        14
                    ]
                ],
                "text-max-angle": 30,
                "text-font": ["Roboto Regular", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["get", "name_en"]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 0%)",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1
            },
            "interactive": true
        },
        {
            "id": "poi-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "poi_label",
            "filter": ["<=", "scalerank", 3],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    11,
                    18,
                    13
                ],
                "icon-image": ["concat", ["get", "maki"], "-11"],
                "text-max-angle": 38,
                "text-font": ["Roboto Regular", "Arial Unicode MS Regular"],
                "text-padding": 2,
                "text-offset": [0, 0.75],
                "text-anchor": "top",
                "text-field": ["get", "name_en"],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(38, 19%, 29%)",
                "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            },
            "interactive": true
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "airport_label",
            "filter": ["<=", "scalerank", 2],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    12,
                    18,
                    18
                ],
                "icon-image": [
                    "step",
                    ["zoom"],
                    ["concat", ["get", "maki"], "-11"],
                    13,
                    ["concat", ["get", "maki"], "-15"]
                ],
                "text-font": ["Roboto Regular", "Arial Unicode MS Regular"],
                "text-padding": 2,
                "text-offset": [0, 0.75],
                "text-anchor": "top",
                "text-field": [
                    "step",
                    ["zoom"],
                    ["get", "ref"],
                    14,
                    ["get", "name_en"]
                ],
                "text-max-width": 9
            },
            "paint": {
                "text-color": "hsl(38, 19%, 29%)",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1
            },
            "interactive": true
        },
        {
            "id": "place-neighborhood-suburb-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "place_label",
            "minzoom": 12,
            "maxzoom": 15,
            "filter": ["in", "type", "neighbourhood", "suburb"],
            "layout": {
                "text-field": ["get", "name_en"],
                "text-transform": "uppercase",
                "text-letter-spacing": 0.15,
                "text-max-width": 8,
                "text-font": ["Roboto Regular", "Arial Unicode MS Regular"],
                "text-padding": 3,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    12,
                    11,
                    16,
                    16
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-color": "hsl(38, 62%, 21%)"
            },
            "interactive": true
        },
        {
            "id": "place-town-village-hamlet-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "place_label",
            "minzoom": 6,
            "maxzoom": 14,
            "filter": ["in", "type", "hamlet", "town", "village"],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    ["match", ["get", "type"], "town", 9.5, 8],
                    16,
                    ["match", ["get", "type"], "town", 20, 16]
                ],
                "text-font": [
                    "step",
                    ["zoom"],
                    ["literal", ["Roboto Regular", "Arial Unicode MS Regular"]],
                    12,
                    [
                        "match",
                        ["get", "type"],
                        "town",
                        [
                            "literal",
                            ["Roboto Medium", "Arial Unicode MS Regular"]
                        ],
                        [
                            "literal",
                            ["Roboto Regular", "Arial Unicode MS Regular"]
                        ]
                    ]
                ],
                "text-max-width": 7,
                "text-field": ["get", "name_en"]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 0%)",
                "text-halo-blur": 0.5,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1
            },
            "interactive": true
        },
        {
            "id": "place-city-label-minor",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": ["all", ["!has", "scalerank"], ["==", "type", "city"]],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    12,
                    16,
                    22
                ],
                "text-font": [
                    "literal",
                    ["Roboto Medium", "Arial Unicode MS Regular"]
                ],
                "text-max-width": 10,
                "text-field": ["get", "name_en"]
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(0, 0%, 33%)",
                    6,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-blur": 0.5,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1.25
            },
            "interactive": true
        },
        {
            "id": "place-city-label-major",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": ["all", ["==", "type", "city"], ["has", "scalerank"]],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    ["step", ["get", "scalerank"], 14, 4, 12],
                    16,
                    ["step", ["get", "scalerank"], 30, 4, 22]
                ],
                "text-font": [
                    "step",
                    ["zoom"],
                    ["literal", ["Roboto Medium", "Arial Unicode MS Regular"]],
                    10,
                    [
                        "step",
                        ["get", "scalerank"],
                        ["literal", ["Roboto Bold", "Arial Unicode MS Bold"]],
                        5,
                        [
                            "literal",
                            ["Roboto Medium", "Arial Unicode MS Regular"]
                        ]
                    ]
                ],
                "text-max-width": 10,
                "text-field": ["get", "name_en"]
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(0, 0%, 33%)",
                    6,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-blur": 0.5,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1.25
            },
            "interactive": true
        },
        {
            "id": "state-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "state_label",
            "minzoom": 4,
            "maxzoom": 8,
            "layout": {
                "text-line-height": 1.2,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    4,
                    ["step", ["get", "area"], 8, 20000, 9, 80000, 10],
                    9,
                    ["step", ["get", "area"], 14, 20000, 18, 80000, 23]
                ],
                "text-transform": "uppercase",
                "text-font": ["Roboto Black", "Arial Unicode MS Bold"],
                "text-padding": 1,
                "text-field": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "area"],
                        ["get", "abbr"],
                        80000,
                        ["get", "name_en"]
                    ],
                    5,
                    ["get", "name_en"]
                ],
                "text-letter-spacing": 0.2,
                "text-max-width": 6
            },
            "paint": {
                "text-color": "hsl(38, 7%, 64%)",
                "text-halo-width": 1,
                "text-halo-color": "hsl(0, 0%, 100%)"
            },
            "interactive": true
        },
        {
            "id": "country-label",
            "type": "symbol",
            "source": "mapbox",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 8,
            "layout": {
                "text-field": ["get", "name_en"],
                "text-max-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    5,
                    3,
                    6
                ],
                "text-font": [
                    "step",
                    ["zoom"],
                    ["literal", ["Roboto Medium", "Arial Unicode MS Regular"]],
                    4,
                    ["literal", ["Roboto Bold", "Arial Unicode MS Bold"]]
                ],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    ["step", ["get", "scalerank"], 13, 3, 11, 5, 9],
                    9,
                    ["step", ["get", "scalerank"], 35, 3, 27, 5, 22]
                ]
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-color": "hsl(0, 0%, 0%)"
            },
            "interactive": true
        }
    ],
    "created": "2018-08-08T15:07:20.921Z",
    "id": "cjkl9p2v865f52qruteaomco4",
    "modified": "2018-08-08T15:07:20.921Z",
    "owner": "kdalkafoukis",
    "visibility": "private",
    "draft": false
}

const OMTstyle={
  "version": 8,
  "name": "OSM Bright",
  "metadata": {
    "mapbox:type": "template",
    "mapbox:groups": {
      "1444849364238.8171": {
        "collapsed": false,
        "name": "Buildings"
      },
      "1444849354174.1904": {
        "collapsed": true,
        "name": "Tunnels"
      },
      "1444849388993.3071": {
        "collapsed": false,
        "name": "Land"
      },
      "1444849242106.713": {
        "collapsed": false,
        "name": "Places"
      },
      "1444849382550.77": {
        "collapsed": false,
        "name": "Water"
      },
      "1444849345966.4436": {
        "collapsed": false,
        "name": "Roads"
      },
      "1444849334699.1902": {
        "collapsed": true,
        "name": "Bridges"
      }
    },
    "mapbox:autocomposite": false,
    "openmaptiles:version": "3.x",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
  },
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://free.tilehosting.com/data/v3.json?key=Wrowlsxw7StlrAIvO6Rz"
    }
  },
  // "sprite": "https://openmaptiles.github.io/osm-bright-gl-style/sprite",
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=Wrowlsxw7StlrAIvO6Rz",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#f8f4f0"
      }
    },
    {
      "id": "landcover-glacier",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        "subclass",
        "glacier"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#fff",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.9
            ],
            [
              10,
              0.3
            ]
          ]
        }
      }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "residential"
      ],
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              12,
              "hsla(30, 19%, 90%, 0.4)"
            ],
            [
              16,
              "hsla(30, 19%, 90%, 0.2)"
            ]
          ]
        }
      }
    },
    {
      "id": "landuse-commercial",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "commercial"
        ]
      ],
      "paint": {
        "fill-color": "hsla(0, 60%, 87%, 0.23)"
      }
    },
    {
      "id": "landuse-industrial",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "industrial"
        ]
      ],
      "paint": {
        "fill-color": "hsla(49, 100%, 88%, 0.34)"
      }
    },
    {
      "id": "park",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "park",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": {
          "base": 1.8,
          "stops": [
            [
              9,
              0.5
            ],
            [
              12,
              0.2
            ]
          ]
        }
      }
    },
    {
      "id": "park-outline",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "park",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {},
      "paint": {
        "line-color": {
          "base": 1,
          "stops": [
            [
              6,
              "hsla(96, 40%, 49%, 0.36)"
            ],
            [
              8,
              "hsla(96, 40%, 49%, 0.66)"
            ]
          ]
        },
        "line-dasharray": [
          3,
          3
        ]
      }
    },
    {
      "id": "landuse-cemetery",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "cemetery"
      ],
      "paint": {
        "fill-color": "#e0e4dd"
      }
    },
    {
      "id": "landuse-hospital",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "hospital"
      ],
      "paint": {
        "fill-color": "#fde"
      }
    },
    {
      "id": "landuse-school",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "school"
      ],
      "paint": {
        "fill-color": "#f0e8f8"
      }
    },
    {
      "id": "landuse-railway",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "railway"
      ],
      "paint": {
        "fill-color": "hsla(30, 19%, 90%, 0.4)"
      }
    },
    {
      "id": "landcover-wood",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "wood"
      ],
      "paint": {
        "fill-color": "#6a4",
        "fill-opacity": 0.1,
        "fill-outline-color": "hsla(0, 0%, 0%, 0.03)",
        "fill-antialias": {
          "base": 1,
          "stops": [
            [
              0,
              false
            ],
            [
              9,
              true
            ]
          ]
        }
      }
    },
    {
      "id": "landcover-grass",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        "class",
        "grass"
      ],
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover-grass-park",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849388993.3071"
      },
      "source": "openmaptiles",
      "source-layer": "park",
      "filter": [
        "==",
        "class",
        "public_park"
      ],
      "paint": {
        "fill-color": "#d8e8c8",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "waterway_tunnel",
      "filter": [
        "all",
        [
          "in",
          "class",
          "river",
          "stream",
          "canal"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        },
        "line-dasharray": [
          2,
          4
        ]
      },
      "minzoom": 14
    },
    {
      "id": "waterway-other",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "!in",
        "class",
        "canal",
        "river",
        "stream"
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-stream-canal",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "in",
          "class",
          "canal",
          "stream"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-river",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "class",
          "river"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#a0c8f0",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.8
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "water-offset",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "water",
      "maxzoom": 8,
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-opacity": 1,
        "fill-color": "#a0c8f0",
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              6,
              [
                2,
                0
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ]
        }
      }
    },
    {
      "id": "water",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "water",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(210, 67%, 85%)"
      }
    },
    {
      "id": "water-pattern",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "water",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-translate": [
          0,
          2.5
        ],
        "fill-pattern": "wave"
      }
    },
    {
      "id": "landcover-ice-shelf",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849382550.77"
      },
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
        "==",
        "subclass",
        "ice_shelf"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#fff",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.9
            ],
            [
              10,
              0.3
            ]
          ]
        }
      }
    },
    {
      "id": "building",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849364238.8171"
      },
      "source": "openmaptiles",
      "source-layer": "building",
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [
              15.5,
              "#f2eae2"
            ],
            [
              16,
              "#dfdbd7"
            ]
          ]
        },
        "fill-antialias": true
      }
    },
    {
      "id": "building-top",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849364238.8171"
      },
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-translate": {
          "base": 1,
          "stops": [
            [
              14,
              [
                0,
                0
              ]
            ],
            [
              16,
              [
                -2,
                -2
              ]
            ]
          ]
        },
        "fill-outline-color": "#dfdbd7",
        "fill-color": "#f2eae2",
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              16,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-service-track-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-minor-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "tunnel"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-dasharray": [
          1.5,
          0.75
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-service-track",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              2
            ],
            [
              20,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-minor",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "minor_road"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-trunk-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff4c6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#ffdaa6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel-railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849354174.1904"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        },
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "ferry",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "in",
          "class",
          "ferry"
        ]
      ],
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(108, 159, 182, 1)",
        "line-width": 1.1,
        "line-dasharray": [
          2,
          2
        ]
      }
    },
    {
      "id": "aeroway-taxiway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "taxiway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              2
            ],
            [
              17,
              12
            ]
          ]
        },
        "line-opacity": 1
      }
    },
    {
      "id": "aeroway-runway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              5
            ],
            [
              17,
              55
            ]
          ]
        },
        "line-opacity": 1
      }
    },
    {
      "id": "aeroway-area",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "in",
          "class",
          "runway",
          "taxiway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-opacity": {
          "base": 1,
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              1
            ]
          ]
        },
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "aeroway-taxiway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "in",
          "class",
          "taxiway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              1
            ],
            [
              17,
              10
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              12,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway-runway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "aeroway",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "in",
          "class",
          "runway"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          "base": 1.5,
          "stops": [
            [
              11,
              4
            ],
            [
              17,
              50
            ]
          ]
        },
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              11,
              0
            ],
            [
              12,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "highway-area",
      "type": "fill",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsla(0, 0%, 89%, 0.56)",
        "fill-outline-color": "#cfcdca",
        "fill-opacity": 0.9,
        "fill-antialias": false
      }
    },
    {
      "id": "highway-motorway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!=",
            "brunnel",
            "tunnel"
          ],
          [
            "in",
            "class",
            "minor",
            "service",
            "track"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#cfcdca",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "highway-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": {
          "stops": [
            [
              7,
              0
            ],
            [
              8,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              7,
              0
            ],
            [
              8,
              0.6
            ],
            [
              9,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "highway-trunk-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "trunk"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 4,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              4,
              0
            ],
            [
              5,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "highway-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-dasharray": [
          1.5,
          0.75
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!=",
            "brunnel",
            "tunnel"
          ],
          [
            "in",
            "class",
            "minor",
            "service",
            "track"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "highway-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "in",
            "class",
            "primary"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8.5,
              0
            ],
            [
              9,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "highway-trunk",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "in",
            "class",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "railway-transit",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "transit"
          ],
          [
            "!in",
            "brunnel",
            "tunnel"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.77)",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "railway-transit-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "transit"
          ],
          [
            "!in",
            "brunnel",
            "tunnel"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.68)",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              2
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "railway-service",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.77)",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              20,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "railway-service-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "rail"
          ],
          [
            "has",
            "service"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(0, 0%, 73%, 0.68)",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              2
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "railway-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!has",
            "service"
          ],
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "rail"
          ]
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-link-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-secondary-tertiary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-trunk-primary-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(28, 76%, 67%)",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              26
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e9ac77",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-path-casing",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#f8f4f0",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-path",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "brunnel",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ]
      ],
      "paint": {
        "line-color": "#cba",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1.2
            ],
            [
              20,
              4
            ]
          ]
        },
        "line-dasharray": [
          1.5,
          0.75
        ]
      }
    },
    {
      "id": "bridge-motorway-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-link",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-secondary-tertiary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-trunk-primary",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fea",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-motorway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-railway",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "bridge-railway-hatching",
      "type": "line",
      "metadata": {
        "mapbox:group": "1444849334699.1902"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#bbb",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "cablecar",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "==",
        "class",
        "cable_car"
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          "base": 1,
          "stops": [
            [
              11,
              1
            ],
            [
              19,
              2.5
            ]
          ]
        }
      }
    },
    {
      "id": "cablecar-dash",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "==",
        "class",
        "cable_car"
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          "base": 1,
          "stops": [
            [
              11,
              3
            ],
            [
              19,
              5.5
            ]
          ]
        },
        "line-dasharray": [
          2,
          3
        ]
      }
    },
    {
      "id": "boundary-land-level-4",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          ">=",
          "admin_level",
          4
        ],
        [
          "<=",
          "admin_level",
          8
        ],
        [
          "!=",
          "maritime",
          1
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9e9cab",
        "line-dasharray": [
          3,
          1,
          1,
          1
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              4,
              0.4
            ],
            [
              5,
              1
            ],
            [
              12,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "boundary-land-level-2",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "!=",
          "maritime",
          1
        ],
        [
          "!=",
          "disputed",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(248, 7%, 66%)",
        "line-width": {
          "base": 1,
          "stops": [
            [
              0,
              0.6
            ],
            [
              4,
              1.4
            ],
            [
              5,
              2
            ],
            [
              12,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "boundary-land-disputed",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "!=",
          "maritime",
          1
        ],
        [
          "==",
          "disputed",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(248, 7%, 70%)",
        "line-dasharray": [
          1,
          3
        ],
        "line-width": {
          "base": 1,
          "stops": [
            [
              0,
              0.6
            ],
            [
              4,
              1.4
            ],
            [
              5,
              2
            ],
            [
              12,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "boundary-water",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          2,
          4
        ],
        [
          "==",
          "maritime",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(154, 189, 214, 1)",
        "line-width": {
          "base": 1,
          "stops": [
            [
              0,
              0.6
            ],
            [
              4,
              1.4
            ],
            [
              5,
              2
            ],
            [
              12,
              8
            ]
          ]
        },
        "line-opacity": {
          "stops": [
            [
              6,
              0.6
            ],
            [
              10,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "waterway-name",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "has",
          "name"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-size": 14,
        "text-field": "{name:latin} {name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "text-letter-spacing": 0.2,
        "symbol-spacing": 350
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-lakeline",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "==",
        "$type",
        "LineString"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-size": 14,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-ocean",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-size": 14,
        "text-field": "{name:latin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "water-name-other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "!in",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-size": {
          "stops": [
            [
              0,
              10
            ],
            [
              6,
              14
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      "id": "poi-level-3",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          ">=",
          "rank",
          25
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-2",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "<=",
          "rank",
          24
        ],
        [
          ">=",
          "rank",
          15
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-level-1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "<=",
          "rank",
          14
        ],
        [
          "has",
          "name"
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "poi-railway",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "has",
          "name"
        ],
        [
          "==",
          "class",
          "railway"
        ],
        [
          "==",
          "subclass",
          "station"
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-anchor": "top",
        "icon-image": "{class}_11",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9,
        "icon-optional": false,
        "icon-ignore-placement": false,
        "icon-allow-overlap": false,
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-optional": true
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "road_oneway",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "oneway",
          1
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk",
          "primary",
          "secondary",
          "tertiary",
          "minor",
          "service"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": "oneway",
        "symbol-spacing": 75,
        "icon-padding": 2,
        "icon-rotation-alignment": "map",
        "icon-rotate": 90,
        "icon-size": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              19,
              1
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": 0.5
      }
    },
    {
      "id": "road_oneway_opposite",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "oneway",
          -1
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk",
          "primary",
          "secondary",
          "tertiary",
          "minor",
          "service"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "icon-image": "oneway",
        "symbol-spacing": 75,
        "icon-padding": 2,
        "icon-rotation-alignment": "map",
        "icon-rotate": -90,
        "icon-size": {
          "stops": [
            [
              15,
              0.5
            ],
            [
              19,
              1
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": 0.5
      }
    },
    {
      "id": "highway-name-path",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15.5,
      "filter": [
        "==",
        "class",
        "path"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{name:latin} {name:nonlatin}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-color": "#f8f4f0",
        "text-color": "hsl(30, 23%, 62%)",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "minor",
          "service",
          "track"
        ]
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{name:latin} {name:nonlatin}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#765",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 12.2,
      "filter": [
        "in",
        "class",
        "primary",
        "secondary",
        "tertiary",
        "trunk"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-field": "{name:latin} {name:nonlatin}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#765",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-shield",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "network",
          "us-interstate",
          "us-highway",
          "us-state"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "road_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Noto Sans Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {}
    },
    {
      "id": "highway-shield-us-interstate",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "network",
          "us-interstate"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Noto Sans Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              7,
              "point"
            ],
            [
              7,
              "line"
            ],
            [
              8,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "highway-shield-us-other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "network",
          "us-highway",
          "us-state"
        ]
      ],
      "layout": {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": [
          "Noto Sans Regular"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "airport-label-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "aerodrome_label",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "has",
          "iata"
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-anchor": "top",
        "icon-image": "airport_11",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12,
        "text-max-width": 9,
        "visibility": "visible",
        "icon-size": 1,
        "text-optional": true
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "place-other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "!in",
        "class",
        "city",
        "town",
        "village",
        "country",
        "continent"
      ],
      "layout": {
        "text-letter-spacing": 0.1,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-transform": "uppercase",
        "text-max-width": 9,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#633",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-village",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "village"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              12
            ],
            [
              15,
              22
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 8,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-town",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "town"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              14
            ],
            [
              15,
              24
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 8,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-city",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "!=",
          "capital",
          2
        ],
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 8,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-city-capital",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "capital",
          2
        ],
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 8,
        "icon-image": "star_11",
        "text-offset": [
          0.4,
          0
        ],
        "icon-size": 0.8,
        "text-anchor": "left",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-other",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          3
        ],
        [
          "!has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Italic"
        ],
        "text-field": "{name:latin}",
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              7,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-3",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          ">=",
          "rank",
          3
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-field": "{name:latin}",
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              7,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-2",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "==",
          "rank",
          2
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-field": "{name:latin}",
        "text-size": {
          "stops": [
            [
              2,
              11
            ],
            [
              5,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-country-1",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "country"
        ],
        [
          "==",
          "rank",
          1
        ],
        [
          "has",
          "iso_a2"
        ]
      ],
      "layout": {
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-field": "{name:latin}",
        "text-size": {
          "stops": [
            [
              1,
              11
            ],
            [
              4,
              17
            ]
          ]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-continent",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 1,
      "filter": [
        "==",
        "class",
        "continent"
      ],
      "layout": {
        "text-font": [
          "Noto Sans Bold"
        ],
        "text-field": "{name:latin}",
        "text-size": 14,
        "text-max-width": 6.25,
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    }
  ],
  "id": "osm-bright"
}


export {
  OMTstyle,
  OSsource,
  OSstyle,
  MBstyle,
  MBstyle2,
  OSMstyle
};
