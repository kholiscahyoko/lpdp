var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby-area-view-1",
      "name": "Lobby Area View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.132497506525274,
          "pitch": 0.3442284526748196,
          "rotation": 0,
          "target": "1-lobby-area-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0144285192297389,
          "pitch": 0.21425172414836702,
          "title": "Information",
          "text": "Information Tentang LPDP"
        },
        {
          "yaw": 1.665250714869937,
          "pitch": 0.027185868368881927,
          "title": "PhotoBooth",
          "text": "Aktif Kamera Depan"
        }
      ]
    },
    {
      "id": "1-lobby-area-view-2",
      "name": "Lobby-Area-View-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.105196854881303,
          "pitch": 0.3789116748872736,
          "rotation": 0,
          "target": "0-lobby-area-view-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LPDP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
