"use strict";

function App() {
    function choose(min, max) {
        return Math.round(min + Math.random() * (max + 1 - min));
    }

    function randomVal(minId, maxId, valId) {
        var min = parseInt($(minId).val());
        var max = parseInt($(maxId).val());
        var pushUps = choose(min, max);
        $(valId).text(pushUps);
    }

    function randomPushUps() {
        randomVal("#push-ups-min", "#push-ups-max", "#push-ups-val");
    }

    function randomCrunches() {
        randomVal("#crunches-min", "#crunches-max", "#crunches-val");
    }

    function randomSitUps() {
        randomVal("#sit-ups-min", "#sit-ups-max", "#sit-ups-val");
    }

    function randomVals() {
        randomPushUps();
        randomCrunches();
        randomSitUps();
    }

    function start() {
        randomVals();
        $("#random-btn").click(randomVals);
    }

    return {
        start: start
    };
}

$(function () {
    window.app = new App();
    window.app.start();
});
