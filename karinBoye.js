function addLiVerk() {
    const node = document.createElement("LI");
    const listVerk = ['Romaner','Diktsamlingar', ' Noveller', 'Essäer']

    for(let i = 0; i < 4; i++){
        let textnode = document.createTextNode(listVerk[i]);
        node.appendChild(textnode);
        document.getElementById("menuVerk").appendChild(node).appendChild(document.createElement("br"));
    }
}

function deleteChild() {
    const e = document.getElementById("menuVerk");
    
    let child = e.firstChild; 
    while (child) {
        e.removeChild(child);
        child = e.firstChild;
    }
}

