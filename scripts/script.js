function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {

            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Có lỗi khi tải nội dung:', error);
        });
}
