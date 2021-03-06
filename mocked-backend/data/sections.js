/**
 * Example file how to use json object inside of a .js file.
 * Use as:
 * import sections from './sections';
 */
module.exports = [
    {
        "title": "Webservers",
        "dataCards": [
            {
                "title": "UVSC",
                "icon": "telekom_sq.png",
                "environments": [
                    {
                        "name": "PREINT",
                        "status": true
                    },
                    {
                        "name": "INT",
                        "status": false
                    },
                    {
                        "name": "PROD",
                        "status": true
                    }
                ],
                "chart": {
                    "style": "pie",
                    "data": {
                        "innerPie": [
                            {
                                "name": "Group A",
                                "value": 400
                            },
                            {
                                "name": "Group B",
                                "value": 300
                            },
                            {
                                "name": "Group C",
                                "value": 300
                            },
                            {
                                "name": "Group D",
                                "value": 200
                            }
                        ],
                        "outerPie": [
                            {
                                "name": "A1",
                                "value": 100
                            },
                            {
                                "name": "A2",
                                "value": 300
                            },
                            {
                                "name": "B1",
                                "value": 100
                            },
                            {
                                "name": "B2",
                                "value": 80
                            },
                            {
                                "name": "B3",
                                "value": 40
                            },
                            {
                                "name": "B4",
                                "value": 30
                            },
                            {
                                "name": "B5",
                                "value": 50
                            },
                            {
                                "name": "C1",
                                "value": 100
                            },
                            {
                                "name": "C2",
                                "value": 200
                            },
                            {
                                "name": "D1",
                                "value": 150
                            },
                            {
                                "name": "D2",
                                "value": 50
                            }
                        ]
                    }
                }
            },
            {
                "title": "UVS-Services",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ],
                "chart": {
                    "style": "bar",
                    "data": {
                        "bars": [
                            {
                                "name": "Page A",
                                "uv": 4000,
                                "pv": 2400,
                                "amt": 2400
                            },
                            {
                                "name": "Page B",
                                "uv": -3000,
                                "pv": 1398,
                                "amt": 2210
                            },
                            {
                                "name": "Page C",
                                "uv": -2000,
                                "pv": -9800,
                                "amt": 2290
                            },
                            {
                                "name": "Page D",
                                "uv": 2780,
                                "pv": 3908,
                                "amt": 2000
                            },
                            {
                                "name": "Page E",
                                "uv": -1890,
                                "pv": 4800,
                                "amt": 2181
                            },
                            {
                                "name": "Page F",
                                "uv": 2390,
                                "pv": -3800,
                                "amt": 2500
                            },
                            {
                                "name": "Page G",
                                "uv": 3490,
                                "pv": 4300,
                                "amt": 2100
                            }
                        ]
                    }
                }
            },
            {
                "title": "CPS",
                "icon": "telekom_sq.png",
                "environments": [
                    {
                        "name": "INT",
                        "status": true
                    },
                    {
                        "name": "INTRA-",
                        "status": false
                    },
                    {
                        "name": "PROD",
                        "status": true
                    },
                    {
                        "name": "INTRA-",
                        "status": false
                    }
                ],
                "chart": {
                    "style": "area",
                    "data": {
                        "areas": [
                            {
                                "name": "Page A",
                                "uv": 4000,
                                "pv": 2400,
                                "amt": 2400
                            },
                            {
                                "name": "Page B",
                                "uv": -3000,
                                "pv": 1398,
                                "amt": 2210
                            },
                            {
                                "name": "Page C",
                                "uv": -2000,
                                "pv": -9800,
                                "amt": 2290
                            },
                            {
                                "name": "Page D",
                                "uv": 2780,
                                "pv": 3908,
                                "amt": 2000
                            },
                            {
                                "name": "Page E",
                                "uv": -1890,
                                "pv": 4800,
                                "amt": 2181
                            },
                            {
                                "name": "Page F",
                                "uv": 2390,
                                "pv": -3800,
                                "amt": 2500
                            },
                            {
                                "name": "Page G",
                                "uv": 3490,
                                "pv": 4300,
                                "amt": 2100
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        "title": "Infrastructure",
        "dataCards": [
            {
                "title": "vse-data-hub",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "PREINT",
                    "INT",
                    "MAINT",
                    "PROD"
                ]
            },
            {
                "title": "vse-search-web",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "PREINT",
                    "INT",
                    "MAINT",
                    "PROD"
                ]
            },
            {
                "title": "vse-stockmanagement",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "PREINT",
                    "INT",
                    "MAINT",
                    "PROD"
                ]
            },
            {
                "title": "vse-api-gateway",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "PREINT",
                    "INT",
                    "MAINT",
                    "...OCPS",
                    "...YCPS"
                ]
            },
            {
                "title": "vse-media-management",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "PREINT",
                    "INT",
                    "PROD"
                ]
            },
            {
                "title": "vse-media-retriever",
                "icon": "springboot.png",
                "environments": [
                    "LOCAL",
                    "TEST",
                    "INT",
                    "PROD"
                ]
            }
        ]
    },
    {
        "title": "Services",
        "dataCards": [
            {
                "title": "UVSC",
                "icon": "telekom_sq.png",
                "environments": [
                    "PREINT",
                    "INT",
                    "PROD"
                ]
            },
            {
                "title": "UVS-Services",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            },
            {
                "title": "CPS",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            }
        ]
    },
    {
        "title": "Openshift",
        "dataCards": [
            {
                "title": "UVSC",
                "icon": "telekom_sq.png",
                "environments": [
                    "PREINT",
                    "INT",
                    "PROD"
                ]
            },
            {
                "title": "UVS-Services",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            },
            {
                "title": "CPS",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            }
        ]
    },
    {
        "title": "Cross Functionalities",
        "dataCards": [
            {
                "title": "UVSC",
                "icon": "telekom_sq.png",
                "environments": [
                    "PREINT",
                    "INT",
                    "PROD"
                ]
            },
            {
                "title": "UVS-Services",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            },
            {
                "title": "CPS",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            }
        ]
    },
    {
        "title": "Databases",
        "dataCards": [
            {
                "title": "UVSC",
                "icon": "telekom_sq.png",
                "environments": [
                    "PREINT",
                    "INT",
                    "PROD"
                ]
            },
            {
                "title": "UVS-Services",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            },
            {
                "title": "CPS",
                "icon": "telekom_sq.png",
                "environments": [
                    "INT",
                    "INTRA-",
                    "PROD",
                    "INTRA-"
                ]
            }
        ]
    }
];