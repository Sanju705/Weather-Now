export async function getCoordinates(city) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`
  );
  const data = await response.json();
  if (data && data.length > 0) {
    return { latitude: data[0].lat, longitude: data[0].lon };
  }
  throw new Error("City not found");
}
