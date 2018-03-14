import React, { Component } from 'react';
import Header from './Header';
import ResultBox from './ResultBox';
import MediaPlayer from './MediaPlayer';
import SideBar from './SideBar';
import './App.css';

/*
const dummyData = [
      {
       "kind": "youtube#searchResult",
       "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/V1dzRKsJkVe9bSqJ8ISu-mWJNes\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "iJEF6OS22Ws"
       },
       "snippet": {
        "publishedAt": "2017-12-10T22:03:31.000Z",
        "channelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "title": "Bears vs. Bengals | NFL Week 14 Game Highlights",
        "description": "The Chicago Bears take on the Cincinnati Bengals in Week 14 of the 2017 NFL Season. Have Your Say! Vote now for the 2018 Pro Bowl in Orlando: http://www.nfl.com/probowl/ballot Watch full...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/iJEF6OS22Ws/default.jpg",
          "width": 120,
          "height": 90
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/iJEF6OS22Ws/mqdefault.jpg",
          "width": 320,
          "height": 180
         },
         "high": {
          "url": "https://i.ytimg.com/vi/iJEF6OS22Ws/hqdefault.jpg",
          "width": 480,
          "height": 360
         }
        },
        "channelTitle": "NFL",
        "liveBroadcastContent": "none"
       }
      },
      {
       "kind": "youtube#searchResult",
       "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/rShklT4Cb3zCKg830OnX1fjxY_E\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "WoQN9v1ui8c"
       },
       "snippet": {
        "publishedAt": "2017-07-31T20:45:44.000Z",
        "channelId": "UC3339WgBDKIcxTfywuSmG8w",
        "title": "Hiking With Bears || ViralHog",
        "description": "Occurred 2017 / Katmai National Park, Alaska, USA \"Grizzly mom and two young cubs on a trail.\" TO SEE THE HOTTEST VIRAL VIDEOS DAILY... Subscribe to us on YouTube: https://goo.gl/A0gBKk Like...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/WoQN9v1ui8c/default.jpg",
          "width": 120,
          "height": 90
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/WoQN9v1ui8c/mqdefault.jpg",
          "width": 320,
          "height": 180
         },
         "high": {
          "url": "https://i.ytimg.com/vi/WoQN9v1ui8c/hqdefault.jpg",
          "width": 480,
          "height": 360
         }
        },
        "channelTitle": "ViralHog",
        "liveBroadcastContent": "none"
       }
      },
      {
       "kind": "youtube#searchResult",
       "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/F8pmFoqfXAaVEPuFa0Qu4tXYuNU\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "Ce-l9VpZn84"
       },
       "snippet": {
        "publishedAt": "2016-12-24T14:47:52.000Z",
        "channelId": "UCSmb8AUAsGAUVtbpKQN062Q",
        "title": "Grizzly Bears and Wolves - National Geographic Documentary",
        "description": "National Geographic Documentary - Two Predators Reign Supreme: Grizzly Bears and Wolves. Size and power square off against speed and teamwork, as mighty grizzly bears contend with powerful...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/Ce-l9VpZn84/default.jpg",
          "width": 120,
          "height": 90
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/Ce-l9VpZn84/mqdefault.jpg",
          "width": 320,
          "height": 180
         },
         "high": {
          "url": "https://i.ytimg.com/vi/Ce-l9VpZn84/hqdefault.jpg",
          "width": 480,
          "height": 360
         }
        },
        "channelTitle": "Explore Nature",
        "liveBroadcastContent": "none"
       }
      },
      {
       "kind": "youtube#searchResult",
       "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/0UKlTyPV0SvxN8OKa3osfFVMYbw\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "dk_fIrjnIGE"
       },
       "snippet": {
        "publishedAt": "2017-12-24T21:22:34.000Z",
        "channelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "title": "Browns vs. Bears | NFL Week 16 Game Highlights",
        "description": "The Cleveland Browns take on the Chicago Bears in Week 16 of the 2017 NFL Season. Watch full games with NFL Game Pass: https://www.nfl.com/gamepass?campaign=sp-nf-gd-ot-yt-3000342 Sign up...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/dk_fIrjnIGE/default.jpg",
          "width": 120,
          "height": 90
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/dk_fIrjnIGE/mqdefault.jpg",
          "width": 320,
          "height": 180
         },
         "high": {
          "url": "https://i.ytimg.com/vi/dk_fIrjnIGE/hqdefault.jpg",
          "width": 480,
          "height": 360
         }
        },
        "channelTitle": "NFL",
        "liveBroadcastContent": "none"
       }
      },
      {
       "kind": "youtube#searchResult",
       "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/HkmUsxJaqoOMdlyyjRs6aCLgGv0\"",
       "id": {
        "kind": "youtube#video",
        "videoId": "oES0FMx3k4Q"
       },
       "snippet": {
        "publishedAt": "2017-10-15T20:59:53.000Z",
        "channelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "title": "Bears vs. Ravens | NFL Week 6 Game Highlights",
        "description": "The Chicago Bears battle the Baltimore Ravens in Week 6 of the 2017 NFL Season. Watch full games with NFL Game Pass: https://www.nfl.com/gamepass?campaign=sp-nf-gd-ot-yt-3000342 Sign up for...",
        "thumbnails": {
         "default": {
          "url": "https://i.ytimg.com/vi/oES0FMx3k4Q/default.jpg",
          "width": 120,
          "height": 90
         },
         "medium": {
          "url": "https://i.ytimg.com/vi/oES0FMx3k4Q/mqdefault.jpg",
          "width": 320,
          "height": 180
         },
         "high": {
          "url": "https://i.ytimg.com/vi/oES0FMx3k4Q/hqdefault.jpg",
          "width": 480,
          "height": 360
         }
        },
        "channelTitle": "NFL",
        "liveBroadcastContent": "none"
       }
      }
     ];;;
*/

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Header />
          
        <div className="main-container">
          <ResultBox />
          <MediaPlayer />
        </div>
      </div>
    );
  }
}

export default App;
