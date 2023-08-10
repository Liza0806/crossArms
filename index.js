const watchButtons = document.querySelectorAll('.whatch');
///const video = document.getElementsByClassName("video")
const ul = document.querySelector("ul")
const textWhatchBtn = document.querySelectorAll(".whatch-text")
const allLiElements = ul.querySelectorAll("li");

 watchButtons.forEach(button => {
  button.addEventListener('click', () => {
      // Находим видео элемент внутри того же родительского элемента
      const video = button.parentElement.querySelector(".video")
      const hideBtn = button.parentElement.querySelector(".stop-whatch")
      console.log("sdgsd")
      // Проверяем, есть ли видео, и запускаем его
      if (video) { 
        video.classList.remove("is-hidden");
        button.classList.add("is-hidden");
        hideBtn.classList.remove("is-hidden");
        hideLi(button.parentElement)
      }
      hideBtn.addEventListener("click", ()=> { 
        video.classList.add("is-hidden");
        button.classList.remove("is-hidden");
        hideBtn.classList.add("is-hidden");
        showLi(button.parentElement)
    })
     } )});

     textWhatchBtn.forEach(button => {
      button.addEventListener('click', () => {
          // Находим видео элемент внутри того же родительского элемента
          const text = button.parentElement.querySelector(".descr")
          const hideBtnTx = button.parentElement.querySelector(".stop-whatch-text")
          console.log("sdgsdaaaa")
          // Проверяем, есть ли видео, и запускаем его
          if (text) { 
            text.classList.remove("is-hidden");
           button.classList.add("is-hidden");
            hideBtnTx.classList.remove("is-hidden");
            hideLi(button.parentElement)
    
          }
          hideBtnTx.addEventListener("click", ()=> { 
            text.classList.add("is-hidden");
           button.classList.remove("is-hidden");
            hideBtnTx.classList.add("is-hidden");
            showLi(button.parentElement)
        })
         } )});

        
        function hideLi(exeptLi) {
            allLiElements.forEach(li => {
           if (li !== exeptLi) {
             li.classList.add("is-hidden");
           }})}
    
           function showLi(exeptLi) {
            allLiElements.forEach(li => {
           if (li !== exeptLi) {
             li.classList.remove("is-hidden");
           }})}