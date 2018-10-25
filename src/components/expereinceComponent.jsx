import React, { Component } from "react";
import myData from "../data/pogo-exp.json";

class ExperienceComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentExp: 0,
      remainingExp: 20000000
    };
    this.getRemainingExp = this.getRemainingExp.bind(this);
    this.updateExp = this.updateExp.bind(this);
  }

  updateExp(event) {
    let remaining = 20000000 - event.target.value;
    this.setState({
      currentExp: event.target.value,
      remainingExp: remaining
    });
  }

  getRemainingExp(event) {
    console.log(this.state.currentExp);
  }
  render() {
    console.log(myData.raids.tierOne);
    return (
      <div>
        <form onSubmit={this.getRemainingExp}>
          <input
            type="number"
            name="experience"
            placeholder="Enter your current experience"
            id=""
            className="form-control"
            onChange={this.updateExp}
            value={this.state.currentExp}
          />
        </form>
        <div>
          <p>Remaining Exp: {this.state.remainingExp}</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: (this.state.currentExp / 20000000) * 100 + "%"
              }}
              aria-valuenow={
                (this.state.currentExp / this.state.remainingExp) * 100
              }
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <h1>Expereice Breakdown</h1>
          <div>
            <p>
              This breakdown tells you how much of each action you'll need to
              get the rest of the way to level 40.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>Raids</h2>
              <p>
                Tier 1 raids:{" "}
                {Math.ceil(this.state.remainingExp / myData.raids.tierOne)}
              </p>
              <p>
                Tier 2 raids:{" "}
                {Math.ceil(this.state.remainingExp / myData.raids.tierTwo)}
              </p>
              <p>
                Tier 3 raids:{" "}
                {Math.ceil(this.state.remainingExp / myData.raids.tierThree)}
              </p>
              <p>
                Tier 4 raids:{" "}
                {Math.ceil(this.state.remainingExp / myData.raids.tierFour)}
              </p>
              <p>
                Tier 5 raids:{" "}
                {Math.ceil(this.state.remainingExp / myData.raids.tierFive)}
              </p>
            </div>
          </div>

          <div>
            <h2>Catches (with Curveball bonus)</h2>
            <p>
              Pokemon Catches:{" "}
              {Math.ceil(
                this.state.remainingExp /
                  (myData.catch.catch + myData.catch.curveball)
              )}
            </p>
            <p>
              Pokemon Catches (Nice):{" "}
              {Math.ceil(
                this.state.remainingExp /
                  (myData.catch.catch +
                    myData.catch.niceThrow +
                    myData.catch.curveball)
              )}
            </p>
            <p>
              Pokemon Catches (Great):{" "}
              {Math.ceil(
                this.state.remainingExp /
                  (myData.catch.catch +
                    myData.catch.greatThrow +
                    myData.catch.curveball)
              )}
            </p>
            <p>
              Pokemon Catches (Excellent):{" "}
              {Math.ceil(
                this.state.remainingExp /
                  (myData.catch.catch +
                    myData.catch.excellentThrow +
                    myData.catch.curveball)
              )}
            </p>
          </div>
          <div>
            <h2>Eggs and Evolutions</h2>
            <p>
              2 Km Eggs{" "}
              {Math.ceil(this.state.remainingExp / myData.event.twoKEgg)}
            </p>
            <p>
              5 Km Eggs{" "}
              {Math.ceil(this.state.remainingExp / myData.event.fiveKEgg)}
            </p>
            <p>
              10 Km Eggs{" "}
              {Math.ceil(this.state.remainingExp / myData.event.tenKEgg)}
            </p>
            <p>
              Evolutions{" "}
              {Math.ceil(this.state.remainingExp / myData.event.evolve)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceComponent;
