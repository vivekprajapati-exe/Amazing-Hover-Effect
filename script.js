var frames = document.querySelectorAll(".frame");

const lerp = (x, y, a) => x * ( 1 - a ) + y * a;

frames.forEach(frame => {
    frame.addEventListener("mousemove" ,  function(dets){

        var dims = frame.getBoundingClientRect();
        console.log(dims);
    
        var xstart = dims.x;
        var xend =dims.x + dims.width;
        var ystart = dims.y;
        var yend = dims.y + dims.height;
    
    
        var zerooneX = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
        var zerooneY = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
        gsap.to(frame.children , {
            x: lerp(-50, 50, zerooneX),
            y: lerp(-15, 15, zerooneY),
            duration:0.3,
            ease:"Power1.out",
        })
    })
    frame.addEventListener("mouseleave" , function(dets){
        gsap.to(frame.children , {
            x: 0,
            y: 0,
            duration:0.3,
            ease:"Power2.out",
        })
    })
})