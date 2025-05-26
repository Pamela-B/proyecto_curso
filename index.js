const args = process.argv.slice(2);
const [method, sections, ...params] = args;

async function fetchApiFakeStore(method, sections, params) {
    try {
        let response;
        if (method === 'GET') {
            response = await fetch(`https://fakestoreapi.com/${sections}`)
        } else if (method === 'POST') {
            const product = {title: params[0].toString(), price: params[1], category: params[2]};
            response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            })
        } else if (method === 'DELETE') {
            response = await fetch(`https://fakestoreapi.com/${sections}`, {
                method: 'DELETE'
            })
        } else {
            console.log('Wrong method used')
            return;
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

await fetchApiFakeStore(method, sections, params);

