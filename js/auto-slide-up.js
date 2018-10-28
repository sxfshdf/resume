!function(){
  //添加 offset
  let specialTags = document.querySelectorAll('[data-x]')
    for(let i = 0; i < specialTags.length; i++){
      specialTags[i].classList.add('offset')
    }

  findClosestAndRemoveOffset()
  window.addEventListener('scroll',function(){
    findClosestAndRemoveOffset()
  })



  function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i = 0; i < specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY))
        minIndex = i
    }

    // minIndex 就是离窗口最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id +'"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i = 0; i < brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()