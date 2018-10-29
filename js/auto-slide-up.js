!function(){
  var view = document.querySelectorAll('[data-x]')
  var controller = {
    view: null, 
    init: function(view){
      this.view = view
      this.bindEvents()  
    },
    bindEvents: function(){
      //添加 offset
      let specialTags = this.view
      for(let i = 0; i < specialTags.length; i++){
        specialTags[i].classList.add('offset')
      }

      this.initOffset(view)
      window.addEventListener('scroll',()=>{
      this.initOffset(view)
      })
    },
    initOffset: function(view){
      this.view = view
      let specialTags = this.view
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
  }
  controller.init(view)
}.call()
