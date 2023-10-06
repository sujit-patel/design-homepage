var tl =gsap.timeline();

tl
    .from("#header",{
        y:"-150",
        opacity:0,
        duration:3,
    })
    .from(".logo",{
        x:"1500",
        opacity:0,
        duration:2,
    })
    .from("#header .menu",{
        x:"20",
        dealy:3,
        duration:2,
        opacity:0,
        backgroundColor:blue,
        borderRadius:"20%",
        borde:" white",
        zindex:5,

    })