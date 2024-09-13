const listItems = document.querySelectorAll('#myList a');
if (listItems.length > 0) {
    listItems[0].classList.add('selected');
}
listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        listItems.forEach(li => li.classList.remove('selected'));
        item.classList.add('selected');
    });
});