
function autoAdjustHeight(textarea) {
    //Set element to be height-padding of its parent
    var parent_height = textarea.parentNode.getAttribute.style.height;
    textarea.style.height = parent_height;

    // Set the new height based on the scroll height
    textarea.style.height = textarea.scrollHeight + 'px';
}