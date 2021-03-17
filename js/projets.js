function afficherText(div) {
    var id = div.id;
    div.childNodes[1].className += ' assombrir' + id;
    div.childNodes[5].style.visibility = 'visible';
}

function cacherText(div) {
    div.childNodes[1].className = 'card-img-top';
    div.childNodes[5].style.visibility = 'hidden';
}

function afficheImagesGSB(IdModal) {
    modal = document.getElementById(IdModal);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(span) {
    span.parentNode.style.display = "none";
}