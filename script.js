function homePageAnimation(){
    gsap.set(".slidesm",{
        scale:3
    })
    
    var timeLine = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end: "bottom bottom",
            // pin:true,
            scrub:1
          }
    })
    
    timeLine.to(".Vdodiv",{ 
        '--clip':"0%",
        ease:Power2,  
    }
    ,"a").to(".slidesm",{
      scale:1,
      ease:Power2
    }
    ,"a").to(".rgt",{
        xPercent:20,
        ease:Power2,
        stagger:.03,
      }
      ,"b").to(".lft",{
        xPercent:-20,
        stagger:.03,
        ease:Power2
      }
      ,"b")
}


function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end : "bottom bottom",
            scrub:1
        },
      xPercent:-200,
      ease:Power4
    })
}

function teamAnimation(){
  document.querySelectorAll(".listelem").forEach(function(el){
    el.addEventListener("mousemove",function(dets){
 
       gsap.to(this.querySelector(".picture"),{
         opacity:1,
         x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
         ease:Power4,
         duration:.5
       })
    })
 
    el.addEventListener("mouseleave",function(dets){
     gsap.to(this.querySelector(".picture"),{
         opacity:0,
         ease:Power4,
         duration:.5
       })
    })
 })
}


function ParaAnimation(){
  var clutter= "";
document.querySelector('.textpara').textContent.split("").forEach(function(e){
  if(e === " ")  clutter += `<span>&nbsp;</span>`
   clutter += `<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span",{opacity: .2})
gsap.to(".textpara span",{
  scrollTrigger:{
    trigger:".pera",
   start:"top 60%",
   end:"bottom 90%",
   scrub:1,
  },
  opacity:1,
  stagger:.03,
  ease:Power4
})
}

function loco(){
  (function () {
    var scroll = new LocomotiveScroll();
})();
}

function capsulesAnimation(){
  gsap.to(".capsule:nth-child(2)",{
    ScrollTrigger:{
      trigger:".capsules",
      start:"top 70%",
      end:"bottom bottom",
      scrub:1
    },
    y:0,
    ease:Power4,
  })
}

document.querySelectorAll(".section").forEach(function(e){
  ScrollTrigger.create({
    trigger:e,
    start:"top 50%",
    end:"bottom 50%",
    onEnter:function(){
        document.body.setAttribute("theme",e.dataset.color)
    },
    onEnterBack:function(){
      document.body.setAttribute("theme",e.dataset.color)
    }
  })
})

homePageAnimation()
realPageAnimation()
teamAnimation()
ParaAnimation()
loco();
capsulesAnimation()