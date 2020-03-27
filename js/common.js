(function (doc, win) {
    var currentWidth = doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = currentWidth / 375 * 50 + 'px';
})(document, window)
