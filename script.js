let addBtn = document.querySelector('.add-btn')
let modalcont = document.querySelector('.modal-cont')
let maincont = document.querySelector('.main-cont')
let textArea = document.querySelector('.textArea-cont')
let listcolor = document.querySelectorAll('.priority-color')
let addBtnFlag = false

// modal task color//
let modaltaskcolor = ""
addBtn.addEventListener('click',function(){
    addBtnFlag = !addBtnFlag
    if(addBtnFlag){
        modalcont.style.display = 'flex'
    }
    else{
       modalcont.style.display = 'none'
 }
})
function CreateTicket(taskcolor,task,id){
    const TicketCont = document.createElement('div')
    TicketCont.setAttribute('class' , 'ticket-cont')
    TicketCont.innerHTML =`<div class="ticket-color" style="background-color:${taskcolor}"></div>
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
      CreateTicket(modaltaskcolor,task,id)
      modalcont.style.display = 'none'
      addBtnFlag = false
      textArea.value = ""
    }
})

//ticket color //
listcolor.forEach(function(colorElement){
  colorElement.addEventListener('click',function(){
    listcolor.forEach(function(priorityColors){
      priorityColors.classList.remove('active')
    })
    colorElement.classList.add('active')
     modaltaskcolor = colorElement.classList[0]
  })
})