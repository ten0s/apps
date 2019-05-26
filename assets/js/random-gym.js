/*jslint
   browser: true,
   devel: true,
   nomen: true,
   vars: true
*/
/*global $ */

"use strict";

function App() {
    function choose(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function randomVal(minId, maxId, valId) {
        var min = parseInt($(minId).val(), 10);
        var max = parseInt($(maxId).val(), 10);
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

    function getIntValue(name, init) {
        var value = localStorage.getItem(name);
        if (value) {
            return parseInt(value, 10);
        }
        return init;
    }

    function setIntValue(name, value) {
        localStorage.setItem(name, value);
    }

    function setVal() {
        var that = $(this)[0];
        setIntValue(that.id, that.value);
    }

    function initPushUps() {
        $("#push-ups-min").val(getIntValue("push-ups-min", 10));
        $("#push-ups-min").change(setVal);
        $("#push-ups-max").val(getIntValue("push-ups-max", 20));
        $("#push-ups-max").change(setVal);
    }

    function initCrunches() {
        $("#crunches-min").val(getIntValue("crunches-min", 20));
        $("#crunches-min").change(setVal);
        $("#crunches-max").val(getIntValue("crunches-max", 40));
        $("#crunches-max").change(setVal);
    }

    function initSitUps() {
        $("#sit-ups-min").val(getIntValue("sit-ups-min", 30));
        $("#sit-ups-min").change(setVal);
        $("#sit-ups-max").val(getIntValue("sit-ups-max", 60));
        $("#sit-ups-max").change(setVal);
    }

    function initVals() {
        initPushUps();
        initCrunches();
        initSitUps();
    }

    function start() {
        initVals();
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
