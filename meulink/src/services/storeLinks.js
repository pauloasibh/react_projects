//buscar os links
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}


//cadastrar o link
export async function saveLink (key, newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(Link => Link.id === newLink.id)
    if(hasLink){
        console.log("esse link ja existe na sua lista")
        return;
    }
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("link salvo com sucesso")
}


//deletar o link
export function deleteLink(Links, id){
    let myLinks = Links.filter( item => {
        return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso");
    return myLinks;
}