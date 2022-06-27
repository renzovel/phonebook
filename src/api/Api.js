import URLs from "./URLs";

async function connect({ url, options }) {
    const resquest = await fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`Status : ${res.status}`);
            }
        })
        .catch((erro) => {
            throw new Error(erro);
        });
    return resquest;
}

async function GET(url) {
    return await connect({ url: url, options:{method: 'GET' }});
}

async function POST(url) {
    return await connect({ url: url, options:{method: 'POST' }});
}

async function DELETE(url) {
    return await connect({ url: url, options:{method: 'DELETE' }});
}

async function PUT(url, dataObject) {
    console.log(JSON.stringify(dataObject));
    return await connect({ url: url, options:{method: 'PUT', 
    headers: { 
        'Accept':'application/json',
        'Content-Type': 'application/json' 
    }, 
    body:JSON.stringify(dataObject)}});    
}

export { URLs, GET, POST, DELETE, PUT };
