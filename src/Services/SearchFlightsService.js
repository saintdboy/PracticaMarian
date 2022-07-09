import { GetToken } from "./GetAccessTokenService";

export async function SearchFlights() {
    var json = await GetToken();

    let token = json.access_token;
    var url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2022-11-01&adults=1&max=2'

    return fetch(url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token },
    })
        .then(
            response => response.json()
        )
        .catch(error => console.error('Error:', error));

}