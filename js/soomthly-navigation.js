!function (){
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    init: function(view){
      this.view = view
      let liTags = this.view.querySelectorAll('nav.menu > ul > li')
      for( let i=0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){
           x.currentTarget.classList.add('active')
          }
        liTags[i].onmouseleave = function(x){
          x.currentTarget.classList.remove('active')
        } 
      }
      
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
      
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for(let i=0 ; i<aTags.length ; i++){
        aTags[i].onclick = function(x){
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')//不加getAttri的话会得到一个浏览器处理过的href 如：http://192.168.0.109:8080/#siteAbout
      
          let element = document.querySelector(href)
          let top = element.offsetTop
      
          let currentTop = window.scrollY
          let targetTop = top - 80
          let s = targetTop - currentTop //路程
          let t = Math.abs((s/100)*300) // 时间
          if(t>500){t = 500} 
      
          var coords = { y: currentTop};// 起始位置
          var tween = new TWEEN.Tween(coords) 
          .to({ y: targetTop }, t) // 结束位置和时间
          .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
          .onUpdate(function() {
            // coords.y 已经变了
              window.scrollTo(0 , coords.y);//如何更新界面
          })
          .start();//开始缓动
        }
      }
    }
  }
  controller.init(view)
}.call()
