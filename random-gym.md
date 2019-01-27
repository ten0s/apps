---
layout: app
title: Random Gym
js_files:
- /assets/js/random-gym.js
manifest_file: random-gym.manifest
---
<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Random Gym</a>
</nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      <h2>Push-ups:</h2>
    </div>
    <div class="col-6">
      <h2 id="push-ups-val">25</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label for="push-ups-min">Min:</label>
      <input id="push-ups-min" type="number" class="form-control">
    </div>
    <div class="col-6">
      <label for="push-ups-max">Max:</label>
      <input id="push-ups-max" type="number" class="form-control" >
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-6">
      <h2>Crunches:</h2>
    </div>
    <div class="col-6">
      <h2 id="crunches-val">50</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label for="crunches-min">Min:</label>
      <input id="crunches-min" type="number" class="form-control">
    </div>
    <div class="col-6">
      <label for="crunches-max">Max:</label>
      <input id="crunches-max" type="number" class="form-control" >
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-6">
      <h2>Sit-ups:</h2>
    </div>
    <div class="col-6">
      <h2 id="sit-ups-val">100</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label for="sit-ups-min">Min:</label>
      <input id="sit-ups-min" type="number" class="form-control">
    </div>
    <div class="col-6">
      <label for="sit-ups-max">Max:</label>
      <input id="sit-ups-max" type="number" class="form-control" >
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12 text-center">
      <button id="random-btn" type="button" class="btn btn-primary">Random</button>
    </div>
  </div>
</div>
