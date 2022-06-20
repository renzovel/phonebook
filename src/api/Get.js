export default async function Get(url){
    const resquest= await fetch(url)
    .then((res)=>{
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(`Status : ${res.status}`);
        }        
    })
    .catch((erro)=>{
        throw new Error(erro);
    });
    return resquest;
}