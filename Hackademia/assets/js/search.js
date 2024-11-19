const search = document.getElementById('searchbar').addEventListener('input', function(){
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('forumlist');
    items.forEach(item => {
        if (item.textContent.toLocaleLowerCase().includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});
