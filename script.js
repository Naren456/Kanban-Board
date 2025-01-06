let addBtn = document.querySelector('.add-btn')
let modalcont = document.querySelector('.modal-cont')
let maincont = document.querySelector('.main-cont')
let textArea = document.querySelector('.textArea-cont')
let listcolor = document.querySelectorAll('.priority-color')
let addBtnFlag = false
addBtn.addEventListener('click',function(){
    addBtnFlag = !addBtnFlag
    if(addBtnFlag){
        modalcont.style.display = 'flex'
    }
    else{
       modalcont.style.display = 'none'
 }
})
function CreateTicket(task,id){
    const TicketCont = document.createElement('div')
    TicketCont.setAttribute('class' , 'ticket-cont')
    TicketCont.innerHTML =`<div class="ticket-color"></div>
             <div class="ticket-id">${id}</div>
             <div class="task-area" >${task}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>`;
              maincont.appendChild(TicketCont)
    
}
modalcont.addEventListener('keydown',function(e){
    if (e.key == "Shift"){
      const task = textArea.value
      const id =shortid();
      CreateTicket(task,id)
      modalcont.style.display = 'none'
      addBtnFlag = false
      textArea.value = ""
    }
})

