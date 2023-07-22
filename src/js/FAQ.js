function toggleText() {
    const contentt = document.getElementsById('content');

    if (contentt.classList === 'hidden') {
        contentt.classList = 'block';
    } else {
        contentt.classList= 'hidden';
    }
}