import URLs from "./URLs";

async function connect({url, method}){
    const resquest = await fetch(url, { method: method })
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
    return await connect({url:url, method:'GET'});
}

async function POST(url) {
    return await connect({url:url, method:'POST'});
}

async function DELETE(url) {
    return await connect({url:url, method:'DELETE'});
}

export {URLs, GET, POST , DELETE};
