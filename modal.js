const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');

openModal.addEventListener('click',()=>
{
    document.getElementById('modal-body').style.display='flex';

});
closeModal.addEventListener('click',()=>
{
    document.getElementById('modal-body').style.display='none';

});
