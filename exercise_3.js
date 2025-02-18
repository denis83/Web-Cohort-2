// DO NOT COMMIT ANY CREDENTIALS!!!

// Using pseudocode, explain in plain English how you would use the Google Maps API to receive directions from Altria HQ to the nearest gas station. Assume you know the address of Altria HQ, but not the address of the nearest gas station
/*
    - Places API - POST Text Search - change body to "Altria HQ Richmond, VA"
        - Store Place ID, Address and Location (lattitude and Longitude)
     - Places API - POST Nearby Search - Takes in coordinates, radious in meters (2000), optionally add Included Types - Gas station
        - First result is address to Sheets - Save Address, Location, Place ID
    - Directions API GET Directions - takes in Parameters Origin and Destination as addresses frm previous two calls

*/

// Challenge - Extreme: Write a function in Javascript that executes this process, taking the API key as an argument. DO NOT COMMIT THE API KEY.

async function getGoogleMapsData(apiKey) {
  const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Altria+HQ+Richmond,+VA&key=${apiKey}`;
  const nearbySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}`;
  const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?key=${apiKey}`;

  try {
    // Perform Text Search
    const textSearchResponse = await fetch(textSearchUrl);
    const textSearchData = await textSearchResponse.json();
    const altriaPlace = textSearchData.results[0];
    const altriaPlaceId = altriaPlace.place_id;
    const altriaAddress = altriaPlace.formatted_address;
    const altriaLocation = altriaPlace.geometry.location;

    console.log("Altria HQ:", altriaAddress, altriaLocation, altriaPlaceId);

    // Perform Nearby Search
    // Pass Parameters - Altria lattitude and longitude, Radius of 2000m, type gas_station
    const nearbySearchParams = new URLSearchParams({
      location: `${altriaLocation.lat},${altriaLocation.lng}`,
      radius: 2000,
      type: "gas_station",
    });
    const nearbySearchResponse = await fetch(
      `${nearbySearchUrl}&${nearbySearchParams.toString()}`
    );
    // Just curious what the full call looks like when including Params
    console.log(
      "Full Call: " + `${nearbySearchUrl}&${nearbySearchParams.toString()}`
    );

    // Save first option's PlaceID, Address, Coordinates  - Sheets Gas Station
    const nearbySearchData = await nearbySearchResponse.json();
    const gasStation = nearbySearchData.results[0];
    const gasStationPlaceId = gasStation.place_id;
    const gasStationAddress = gasStation.vicinity;
    const gasStationLocation = gasStation.geometry.location;

    console.log(
      "Gas Station:",
      gasStationAddress,
      gasStationLocation,
      gasStationPlaceId
    );

    // Get Directions
    // Passing only origin and destination adresses via URLparams
    const directionsParams = new URLSearchParams({
      origin: altriaAddress,
      destination: gasStationAddress,
    });
    const directionsResponse = await fetch(
      `${directionsUrl}&${directionsParams.toString()}`
    );
    const directionsData = await directionsResponse.json();
    const directions = directionsData.routes[0].legs[0];

    console.log(directions);
    return directions;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function with your API key
const apiKey = "APIkeyPlaceholder";
getGoogleMapsData(apiKey);
