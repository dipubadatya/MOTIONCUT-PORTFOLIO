


const form= document.querySelector("form")
const name= document.getElementById("name");
const number= document.getElementById("phone");
const gmaile= document.getElementById("email");
const mess= document.getElementById("message");
const subject= document.getElementById("subject");



function sendEmail(){
const body=  `name : ${name.value} <br/><br/> Number:${number.value} <br/><br/> email:${gmaile.value} <br/> <br/> message: ${mess.value} <br/> `

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dipubadatya113@gmail.com",
    Password : "CACD19DB2CAD3EB5AD7D400142399E195263",
    To : 'dipubadatya113@gmail.com',
    From : "dipubadatya113@gmail.com",
    Subject :  subject.value,
    Body : body
}).then(
  message => alert(message)
);

}

form.addEventListener("submit",(e)=>{
   e.preventDefault();

   sendEmail()

   form.reset()
   return false;
}) 





var tl = gsap.timeline()

tl.from("#page1 h1",{
    y:-20,
    opacity:0,
    duration:1,
    dealy:0.5,
})


tl.from("nav a",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0,
    ease:"none"
})



gsap.from("#page2 img",{
    // transform:"translateX(-150%)",
    y:-20,
    opacity:0,
    duration:1,
    // dealy:0.5,

    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        
        start:"top 25%",
        end:"end 150%",
        scrub:2,
        pin:true,
        

    }
});


gsap.from("#page2 #page2-hr-right",{
    // transform:"translateX(-150%)",
    y:20,
    opacity:0,
    duration:2,
    // dealy:0.5,

    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        
        start:"top 25%",
        end:"top 150%",
        scrub:2,
        pin:true,
        

    }
});


gsap.from("#page3 .pg3-cards",{
    stagger:2,
    // ease: "elastic.out(1,0.3)",
    y:20,
    opacity:0,
    duration:2,
    dealy:0.5,
    // ease: "steps(12)",
    ease: "bounce.out",

    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        
        start:"top 25%",
        end:"top 150%",
        scrub:2,
        pin:true,
        

    }
});

gsap.from("#page5 #right-contact #right-form",{
    stagger:2,
    // ease: "elastic.out(1,0.3)",
    y:20,
    opacity:0,
    duration:2,
    dealy:0.5,
    // ease: "steps(12)",
    ease: "bounce.out",

    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
       
        start:"top 25%",
        end:"top 150%",
        scrub:2,
        pin:true,
        

    }
});

gsap.from("#page5 #contact-left, .contact-info",{
    stagger:2,
    // ease: "elastic.out(1,0.3)",
    y:20,
    opacity:0,
    duration:2,
    dealy:0.5,
    // ease: "steps(12)",
    ease: "bounce.out",

    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
       
        start:"top 25%",
        end:"top 150%",
        scrub:2,
        pin:true,
        

    }
});



// for contact form
