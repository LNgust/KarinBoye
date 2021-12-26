let exports = {}; //has to be her in order for splide code to work

document.addEventListener( 'DOMContentLoaded', function() { //funtion for fade transition splidejs
    let splide = new Splide( '.splide', {
        type  : 'fade',
        rewind: true,
    } );
      
    splide.mount();
} );


//My plan here was to be able to hover over the undertitles that pop up when hovering over 'Verk' in the hamburger bar to make links to the diffrent pages for the works of karin boye, i did not manage to figure out how to do that in time for the deadline


function addLiVerk() { //function that shows undertitle while hovering over Verk in hamburger bar
    const node = document.createElement("LI");
    node.className = "menuVerkChild";
    const listVerk = ['Romaner','Diktsamlingar', ' Noveller', 'Essäer']

    for(let i = 0; i < 4; i++){
        let textnode = document.createTextNode(listVerk[i]);
        node.appendChild(textnode);
        document.getElementById("menuVerk").appendChild(node).appendChild(document.createElement("br"));
    }
}

function deleteChild() { //function for removing undertitle when not hovering over Verk in the hamburger sidebar
    const e = document.getElementById("menuVerk");
    
    let child = e.firstChild; 
    while (child) {
        e.removeChild(child);
        child = e.firstChild;
    }
}


