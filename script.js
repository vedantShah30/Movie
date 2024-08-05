function updateSelectedCount() {
    const selectedCount = document.querySelectorAll('.seat-icon.selected').length * 180;
    document.getElementById('selected-count').innerText = `Total cost: ${selectedCount}`;
}
document.getElementById('seating').addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'IMG' && target.src.includes('unavailable.png')){
        return;
    }
    if (target.tagName === 'IMG' && target.src.includes('available.png')) {
        target.src = 'select.png';
        target.classList.remove('available');
        target.classList.add('selected');
    } else if (target.tagName === 'IMG' && target.src.includes('select.png')) {
        target.src = 'available.png';
        target.classList.remove('selected');
        target.classList.add('available');
    }
    updateSelectedCount();
});
updateSelectedCount();