import L  from "leaflet";

export function Icon(iconSize:L.PointExpression) {
    return L.icon(
        {
            iconUrl:'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-File.png',
            iconSize:iconSize
        }
    )
}



export const layerConfig = {
    attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}