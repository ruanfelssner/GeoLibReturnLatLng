import { GeolibInputCoordinates, LatitudeKeys, LongitudeKeys, AltitudeKeys } from './types';
declare const getCoordinateKeys: (point: GeolibInputCoordinates, keysToLookup?: {
    longitude: LongitudeKeys[];
    latitude: LatitudeKeys[];
    altitude: AltitudeKeys[];
}) => {
    altitude: AltitudeKeys;
    latitude: "lat" | "latitude" | 1 | undefined;
    longitude: 0 | "lng" | "lon" | "longitude" | undefined;
} | {
    latitude: "lat" | "latitude" | 1 | undefined;
    longitude: 0 | "lng" | "lon" | "longitude" | undefined;
};
export default getCoordinateKeys;
