document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const schoolImage = document.getElementById('school-image');
    const highlightText = document.querySelector('.highlight');

    toggleButton.addEventListener('click', function() {
        if (schoolImage.style.display === 'none') {
            schoolImage.style.display = 'block';
            toggleButton.textContent = '画像を非表示';
        } else {
            schoolImage.style.display = 'none';
            toggleButton.textContent = '画像を表示';
        }
    });

    highlightText.addEventListener('click', function() {
        window.location.href = 'minamiyami.html';
    });
});
