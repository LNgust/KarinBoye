function addLiVerk() { //
    const node = document.createElement("LI");
    node.className = "menuVerkChild";
    const listVerk = ['Romaner','Diktsamlingar', ' Noveller', 'Essäer']

    for(let i = 0; i < 4; i++){
        let textnode = document.createTextNode(listVerk[i]);
        node.appendChild(textnode);
        document.getElementById("menuVerk").appendChild(node).appendChild(document.createElement("br"));
    }
}

function deleteChild() { //function for removing underlinks when not hovering over Verk in the hamburger sidebar
    const e = document.getElementById("menuVerk");
    
    let child = e.firstChild; 
    while (child) {
        e.removeChild(child);
        child = e.firstChild;
    }
}

