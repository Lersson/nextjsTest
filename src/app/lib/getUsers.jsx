const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout de 5 segundos

export default async function getUsers(){


    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer seu-token',
    'Content-Type': 'application/json'
  },
  signal: controller.signal
})
.then(response => {
  clearTimeout(timeoutId);
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => {
  if (error.name === 'AbortError') {
    console.error('Fetch timeout');
  } else {
    console.error('Fetch error:', error);
  }
});


// const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {})

//         if (!res.ok) {
//             // This will activate the closest `error.js` Error Boundary
//             throw new Error('Failed to fetch data')
//         }
    
//         const data = await res.json()
        
//         return data
    
}
