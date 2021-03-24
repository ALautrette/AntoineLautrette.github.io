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

function slideToRight(IdFigure) {
    var figure = document.getElementById(IdFigure);
    var left = getValeurLeft(figure); //retourne la valeur (int) de la propriété de css left de la figure
    var width = getFigureWidth(figure);
    if (left === 100 - width) {
        var width = getFigureWidth(figure); //retourne la valeur (int) de la propriété de css width de la figure
        var finalWidth = 0;

    } else {
        var finalWidth = left - 100;
    }
    figure.style.left = finalWidth + '%';
}

function slideToLeft(IdFigure) {
    var figure = document.getElementById(IdFigure);
    var left = getValeurLeft(figure); //retourne la valeur (int) de la propriété de css left de la figure
    if (left === 0) {
        var width = getFigureWidth(figure);
        var finalWidth = 100 - width;

    } else {
        var finalWidth = left + 100;
    }
    figure.style.left = finalWidth + '%';
}

function getValeurLeft(figure) {
    var raw = figure.style.left;
    if (raw == '') {
        return 0;
    }
    var value = parseInt(raw.substring(0, raw.length - 1));
    return value;
}

function getFigureWidth(figure) {
    var raw = figure.style.width;
    var value = parseInt(raw.substring(0, raw.length - 1));
    return value;
}