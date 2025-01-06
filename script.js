let addBtn = document.querySelector('.add-btn')
let modal = document.querySelector('.modal-cont')
let addBtnFlag = false
addBtn.addEventListener('click',function(){
    addBtnFlag = !addBtnFlag
    if(addBtnFlag){
        modal.style.display = 'flex'
    }
    else{
       modal.style.display = 'none'
    }
})