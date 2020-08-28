# Update yourself to Team Map

Add yourself to the team map by editing [locations.geojson](https://github.com/sourcegraph/about/blob/master/company/team/locations.geojson):

1. Go to [geojson.io](https://geojson.io/#map=2/20.0/0.0) and place a marker close to your location (doesn't have to be exact, coordinates of your city is fine).

2. Copy the following node from geojson into the file, and update with your name:
```
{
  "type": "Feature",
  "properties": {
    "name": "<YOUR NAME>"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      <LONGITUDE>,
      <LATITUDE>
    ]
  }
}
```
