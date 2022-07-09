export function GetToken() {

    var body = formBody();

    return fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
        .then(
            response => response.json()
        )
        .catch(error => console.error('Error:', error));
}

export function formBody() {
    var formBody = [];
    var encodedKey = encodeURIComponent("grant_type");
    var encodedValue = encodeURIComponent("client_credentials");
    formBody.push(encodedKey + "=" + encodedValue);
    encodedKey = encodeURIComponent("client_id");
    encodedValue = encodeURIComponent("JgYlGf4562SLkH1GDJChii5xehNeeV9s");
    formBody.push(encodedKey + "=" + encodedValue);
    encodedKey = encodeURIComponent("client_secret");
    encodedValue = encodeURIComponent("CqjwM4BCta5azHD3");
    formBody.push(encodedKey + "=" + encodedValue);
    return formBody.join("&");
}
