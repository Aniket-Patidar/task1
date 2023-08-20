// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }
// loco()


var coursor = document.querySelector(".coursor");
document.addEventListener("mousemove", (e) => {
    // coursor.setAttribute("style","top:"+e.pageY)
    coursor.style.top = `${(e.pageY-22)}px`;
    coursor.style.left = `${e.pageX-10}px`;
})


var clutter = ""
document.querySelector(".heading").textContent.split("").forEach((e, index) => {
    if (e == ' ' && index != 0) {
        clutter += `<span>&nbsp</span>`

    } else {
        clutter += `<span>${e}</span>`
    }
    document.querySelector(".heading").innerHTML = clutter
})
gsap.to(".heading span", {
    color: `#fff`,
    y: -50,
    stagger: 0.1,
    marginTop: `20px`,
    top: 0,
    transform: `rotate(0deg)`,
    duration: 0.5,
})

document.querySelectorAll(".heading_1").forEach((e) => {
    var clatter = ""
    e.textContent.split("").forEach((e) => {
        if (e == ' ') {
            clatter += `<span>&nbsp</span>`
        } else {
            clatter += `<span>${e}</span>`
        }
    })
    e.innerHTML = clatter
})

gsap.to(".heading_1 span", {
    scrollTrigger: {
        trigger: ".heading_1 span",
        scroller: "body",
        start: "top 100%",
        scrub: 5,
    },
    color: `#fff`,
    y: -50,
    stagger: 0.1,
    marginTop: `20px`,
    top: 0,
    transform: `rotate(0deg)`,
    duration: 0.5,
})

document.querySelectorAll(".heading_1").forEach((e) => {
    var clatter = ""
    e.textContent.split("").forEach((e) => {
        if (e == ' ') {
            clatter += `<span>&nbsp</span>`
        } else {
            clatter += `<span>${e}</span>`
        }
    })
    e.innerHTML = clatter
})

gsap.to(".heading_1 span", {
    scrollTrigger: {
        trigger: ".heading_1 span",
        scroller: "body",
        start: "top 0%",
        scrub: .5,

    },
    color: `#fff`,
    y: -50,
    stagger: .5,
    marginTop: `20px`,
    top: 0,
    transform: `rotate(0deg)`,
    duration: 0.5,
})

document.querySelectorAll(".heading_3").forEach((e) => {
    var clatter = ""
    e.textContent.split("").forEach((e) => {
        clatter += `<span>${e}</span>`
    })
    e.innerHTML = clatter
})
gsap.to(".heading_3 span", {
    scrollTrigger: {
        trigger: ".heading_3 span",
        scroller: "body",
        start: "top 60%",
        scrub: .5,
    },
    opacity: 1,
    color: `#fff`,
    stagger: .2,
    transform: `rotate(0deg)`,
    display: "inline-block",
    duration: 0.5,
})


var clutter = "";
document.querySelector(".heading_5text").textContent.split("").forEach(function (dets) {
    clutter += `<span>${dets}</span>`
    document.querySelector(".heading_5text").innerHTML = clutter;
})
gsap.to(".heading_5text span", {
    scrollTrigger: {
        trigger: ".heading_5text span",
        scroller: "body",
        start: "top 60%",
        scrub: .5,
    },
    opacity: 1,
    color: `#fff`,
    stagger: .2,
    transform: `rotate(0deg)`,
    display: "inline-block",
    duration: 2,
})


var clutter = ''
document.querySelector(".text").textContent.split("").forEach((e, index) => {
    console.log(e);
    if (e == ' ' && index != 0) {
        clutter += `<span>&nbsp</span>`
    } else {
        clutter += `<span>${e}</span>`
    }
    document.querySelector(".text").innerHTML = clutter
})
gsap.to(".text span", {
    scrollTrigger: {
        trigger: ".text span",
        scroller: "body",
        start: "top 100%",
        scrub: .5,
    },
    opacity: 1,
    color: `#fff`,
    stagger: .2,
    display: "inline-block",
    transform: `rotate(0deg)`,
})

gsap.to(".mysterybox_images", {
    scrollTrigger: {
        trigger: ".mysterybox_images",
        scroller: "body",
        start: "top 100%",
        scrub: 0.5
    },
    duration: 5,
    scale: 0,
})