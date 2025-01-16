var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true
}})

tl.to("#fanta",{
    top: "123%",
    left:"13%"
},'orange')

tl.to("#slice",{
    top: "160%",
    left:"23%"
},'orange')
tl.to("#orange",{
    top: "170%",
    right:"10%",
    width:"15%"
},'orange')
tl.to("#leaf",{
    top: "105%",
    left:"80%",
    width:"15%"
},'orange')
tl.to("#leaf2",{
    top: "120%",
    left:"6%",
    width:"15%"
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}})

tl2.from("#sl",{
    top: "10%",
    width:"280px",
    height:"280px",
    left:"-100%",
    rotate:"-90deg"
},'ac')
tl2.from("#pepsi",{
    top: "10%",
    left:"-100%",
    rotate:"-90deg"
},'ac')
tl2.from("#coke",{
    top: "10%",
    right:"-100%",
    rotate:"90deg"
},'ac')
tl2.from("#sl2",{
    top: "10%",
    right:"-100%",
    width:"280px",
    height:"280px",
    rotate:"90deg"
},'ac')
tl2.to("#slice",{
    top: "210%",
    width:"280px",
    height:"280px",
    left:"42%"
},'ac')
tl2.to("#fanta",{
    top: "218%",
    left:"42%"
},'ac')