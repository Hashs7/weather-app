/**
 *  CONST FOR API
 */
const API_KEY = '4037fd54a5d149739a173015180210';
export const API_URL_FORECAST = `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&lang=fr&days=6&q=`;
export const API_URL_SEARCH = `https://api.apixu.com/v1/search.json?key=${API_KEY}&lang=fr&q=`;


/**
 *  CONST CONVERT WEATHER CODE TO ICONS
 */
export const ICON_LIST = {
    1000: "sun",
    1003: "sun_cloud",
    1006: "cloud",
    1009: "cloud",
    1030: "drizzle",
    1063: "light_rain_cloud",
    1066: "snowing" , // neige légère
    1069: "freezing_rain",
    1072: "drizzle",
    1087: "thunder",
    1114: "snowing", // blwoing snow
    1117: "snowing", // blizzard
    1135: "drizzle", // fog
    1147: "drizzle", // fog
    1150: "drizzle", // fog
    1153: "drizzle", // fog
    1171: "drizzle", // fog
    1180: "light_rain_cloud",
    1183: "light_rain_cloud",
    1186: "light_rain_cloud",
    1189: "light_rain_cloud",
    1192: "heavy_rain_cloud",
    1195: "heavy_rain_cloud",
    1198: "freezing_rain",
    1201: "freezing_rain",
    1204: "freezing_rain",
    1207: "freezing_rain",
    1210: "snowing",
    1213: "snowing",
    1219: "snowing",
    1222: "snowing",
    1225: "snowing",
    1237: "snowing", // grésil
    1240: "light_rain_cloud",
    1243: "heavy_rain_cloud",
    1246: "heavy_rain_cloud",
    1249: "snowing",
    1252: "snowing",
    1255: "snowing",
    1258: "snowing",
    1261: "snowing",
    1264: "snowing",
    1276: "thunder",
    1279: "thunder",
    1282: "thunder"
};
