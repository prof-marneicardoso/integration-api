export const apiRequest = (path, method = 'GET', body) => {
    return fetch('http://localhost:3000/api/' + path, {
        body: JSON.stringify(body),
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    })
    .then(response => response.json())        
}