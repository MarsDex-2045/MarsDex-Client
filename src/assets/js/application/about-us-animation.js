"use strict";

document.addEventListener("DOMContentLoaded", initAnimation);

function initAnimation() {
    document.querySelectorAll("main article").forEach(container => {
        let inner = container.querySelector('img');
        // Mouse
        const mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,

            updatePosition: function(e) {
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },

            setOrigin: function(e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },

            show: function() {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        //----------------------------------------------------

        let counter = 0;
        let refreshRate = 2;
        let isTimeToUpdate = function() {
            return counter++ % refreshRate === 0;
        };

        //----------------------------------------------------

        let onMouseEnterHandler = function(event) {
            console.log("Test")
            update(event);
        };

        let onMouseLeaveHandler = function() {
            inner.style = "rotateX(0deg) rotateY(0deg)";
        };

        let onMouseMoveHandler = function(event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //----------------------------------------------------

        let update = function(event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / container.offsetHeight / 2).toFixed(2),
                (mouse.x / container.offsetWidth / 2).toFixed(2)
            );
        };

        let updateTransformStyle = function(x, y) {
            let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        //--------------------------------------------------------

        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
    });
}
