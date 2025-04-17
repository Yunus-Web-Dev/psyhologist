const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

document.querySelectorAll('.diploms_container img').forEach(img => {
    img.addEventListener('click', ()=> {
        popup.classList.remove('hidden');
        popupImg.src = img.src; //Можно заменить на увеличенную версию, если нужно
    });
});

function closePopup() {
    popup.classList.add('hidden');
    popupImg.src= '';
}