const watchButtons = document.querySelectorAll('.whatch');
///const video = document.getElementsByClassName("video")
const ul = document.querySelector("ul")
const textWhatchBtn = document.querySelectorAll(".whatch-text")
//const allLiElements = ul.querySelectorAll("li");
const showChapterBtn = document.querySelectorAll(".show-chapter")
const hideChapterBtn = document.querySelectorAll(".hide-chapter")


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
            let ancestor = exeptLi.parentElement;
            const allLiElements = ancestor.parentElement.querySelectorAll("li")
            allLiElements.forEach(li => {
           if (li !== exeptLi) {
             li.classList.add("is-hidden");
           }})}
    
           function showLi(exeptLi) {
            let ancestor = exeptLi.parentElement;
            const allLiElements = ancestor.parentElement.querySelectorAll("li")
            allLiElements.forEach(li => {
           if (li !== exeptLi) {
             li.classList.remove("is-hidden");
           }})}

           showChapterBtn.forEach(button => {button.addEventListener("click",  () =>{ 
            const chapter = button.parentElement.querySelector(".list")
            const hideChapterBtn = button.parentElement.querySelector(".hide-chapter")
            const showChapterBtn = button.parentElement.querySelector(".show-chapter")
           chapter.classList.remove("is-hidden")
           hideChapterBtn.classList.remove("is-hidden")
           showChapterBtn.classList.add("is-hidden")
        })})
           
        hideChapterBtn.forEach(button => {button.addEventListener("click",  () =>{ 
            const chapter = button.parentElement.querySelector(".list")
            const showChapterBtn = button.parentElement.querySelector(".show-chapter")
            const hideChapterBtn = button.parentElement.querySelector(".hide-chapter")
           chapter.classList.add("is-hidden")
           hideChapterBtn.classList.add("is-hidden")
           showChapterBtn.classList.remove("is-hidden")
        })})
           