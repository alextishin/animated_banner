(function() {

    document.addEventListener("DOMContentLoaded", function(event) {
        var body = document.body;

        body.onmouseover = function (e) {

            var target = e.target;

            if(target.tagName == 'SPAN' && target.classList.contains("pyramid__face")) {
                var pyramid = target.parentNode;
                var pyramidStyle = window.getComputedStyle(pyramid);
                var currentPyramidTranslateZValue = 0;

                if(pyramid.style.transform !== "") {
                    currentPyramidTranslateZValue = parseInt(pyramid.style.transform.split('(')[1].split(')')[0]);
                    console.log("pyramid.style.transform", currentPyramidTranslateZValue);

                } else {
                    if(pyramidStyle.getPropertyValue("transform") !== "none") {
                        var pyramidTranslateZ = pyramidStyle.getPropertyValue("transform").split(",");
                        currentPyramidTranslateZValue = +(pyramidTranslateZ[pyramidTranslateZ.length - 2].trim());
                    }
                    console.log("pyramid.getPropertyValue", currentPyramidTranslateZValue);
                }


                var newPyramidTranslateZValue = currentPyramidTranslateZValue + 20;

                pyramid.style.transform = "translateZ("+newPyramidTranslateZValue+"px)";

                if(typeof(target.onmouseout) !== "function") {
                    target.onmouseout = function () {
                        console.log("onmouseout", currentPyramidTranslateZValue);
                        pyramid.style.transform = "translateZ("+currentPyramidTranslateZValue+"px)";
                    }
                }
            }
        }
        // var cube = document.getElementById("cube");
        // var wrap = document.getElementById("wrap");
        //
        // cube.onmouseover = function () {
        //     wrap.style.perspective = 300+'px';
        //     cube.style.transform = "translateZ(100px)";
        // }
        //
        // cube.onmouseout = function () {
        //     wrap.style.perspective = 500+'px';
        //     cube.style.transform = "translateZ(0)";
        // }
    });
})();