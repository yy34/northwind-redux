import React, { Component } from "react";
import "./button.css";

export default class Yeni extends Component {
  render() {
    return (
      <div class="wrap">
        <div class="card">
          <div class="front">
            <div class="image-1"></div>
            <div class="content">
              <h3>Range Rover Sport</h3>
              <p>Range Rover Sport H-SUV</p>
            </div>
          </div>
          <div class="back">
            <div class="image-2"></div>
            <div class="content">
              <h3>Coverage back</h3>
              <p>xx kr/md</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
