"use strict";
gsap.registerPlugin(ScrollTrigger);

const tlLegs = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec2",
        start: "-300vw top",
        end: "100vw top",
        scrub: true,
        // markers: true,

    }
});


tlLegs.from(".legpartsspan", { color: "darkseagreen", duration: 2 });
tlLegs.from(".leg1", { yPercent: 350, duration: 2 });
tlLegs.from(".leg2", { rotation: 360, duration: 3 });
tlLegs.from(".leg3", { xPercent: 350, duration: 1 });

const tlArms = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec3",
        start: "-300vw top",
        end: "100vw top",
        scrub: true,
        // markers: true,

    }
});

tlArms.from(".arm1", { yPercent: 350, duration: 2 });
tlArms.from(".arm2", { rotation: 360, duration: 3 });
tlArms.from(".arm3", { xPercent: 450, duration: 1 });
tlArms.from(".armsspan", { color: "black", duration: 2 });

const tlBody = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec4",
        start: "-300vw top",
        end: "100vw top",
        scrub: true,
        // markers: true,
    }
});

tlBody.from(".corespan", { fontSize: "2rem", duration: 2 });
tlBody.from(".body1", { scale: 0, duration: 2 });
tlBody.from(".body2", { rotation: 360, duration: 3 });
tlBody.from(".body3", { scale: 1.8, duration: 1 });

const tlHead = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec5",
        start: "-300vw top",
        end: "100vw top",
        scrub: true,
        // markers: true,
    }
});

tlHead.from(".cpuspan", { fontSize: "15rem", duration: 2 });
tlHead.from(".head1", { xPercent: 450, duration: 2 });
// tlHead.from(".head2", { rotation: 360, duration: 3 });
tlHead.from(".head3", { xPercent: -450, duration: 1 });

const tlEnd = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec6",
        start: "-300vw top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
    }
});

tlEnd.from(".endspan", { fontSize: "1rem", duration: 2 });
tlEnd.from(".endspan", { fontSize: "15rem", duration: 2 });
tlEnd.from(".endspan", { fontSize: "4rem", duration: 2 });
tlEnd.to(".endspan", { fontSize: "8rem", duration: 2 });
