# Team locations

The [Sourcegraph team](index.md) is distributed around the world!

<!-- https://docs.github.com/en/github/managing-files-in-a-repository/mapping-geojson-files-on-github#embedding-your-map-elsewhere -->
<script src="https://embed.github.com/view/geojson/sourcegraph/about/main/company/team/locations.geojson"></script>

## Adding to the team locations map

To add your own location:

1. Copy the contents of [`locations.geojson`](https://raw.githubusercontent.com/sourcegraph/about/main/company/team/locations.geojson)
1. Drop it in [geojson.io](https://geojson.io)
1. Add a marker with your location and the property `"name": "<yourname>"`, for example:
    ```json
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
1. Send a pull request to update the file!
