# Team locations

The [Sourcegraph team](index.md) is distributed around the world!

<!-- https://docs.github.com/en/github/managing-files-in-a-repository/mapping-geojson-files-on-github#embedding-your-map-elsewhere -->
<script src="https://embed.github.com/view/geojson/sourcegraph/about/master/company/team/locations.geojson"></script>

## Adding to the team locations map

To add your own location:

1. Copy the contents of [`locations.geojson`](https://raw.githubusercontent.com/sourcegraph/about/master/company/team/locations.geojson)
2. Drop it in https://geojson.io
3. Add a marker with your location (doesn't have to be exact, coordinates of your city is fine) and the property `"name": "<yourname>"`, see node example in [README](README.md)
4. Send a pull request to update the file!
