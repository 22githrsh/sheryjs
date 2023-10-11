Shery.imageEffect(".back-page",{style:5, debug:true,gooey:true})
var h1s = document.querySelectorAll("h1")
var index = 0
document.querySelector(".main").addEventListener("click",function(){
    gsap.to(h1s[index],{
      top:"-=100%",
      ease: Expo.easeInOut,
      duration:1,
       onComplete:function(){
       get.set(this._targets[0],{top:"100%"})
       }
    })
})
index === h1s.length-1 ? (index=0): index++;
document.querySelector(".main").addEventListener("click",function(){
    gsap.to(h1s[index],{
      top:"-=100%",
      ease: Expo.easeInOut,
      duration:1
    })
})