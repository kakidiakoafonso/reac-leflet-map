import { LatLngExpression} from "leaflet";

export type MarkedPlaces = {
    id:number,
    title:string,
    description:string,
    createdAt:string,
    coords: LatLngExpression
  }