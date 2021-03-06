import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../styles/Grid.css';
import Cthulu from '../gameElements/cthulu.png';

const Dungeon = observer(class Dungeon extends Component {
  componentDidMount() {
    this.props.store.trackPosition();
    this.props.store.compiledCreation();
    this.props.store.noReset = true;
  }

  render() {
    const cells = this.props.store.grid.map((el, i) => {
      return(
        <div className="row" key={i + el}>
          {
            el.map((cell, i) => {

              return(
                <div
                  className=
                  {
                      ((cell.hidden) ? "hidden " : "") + cell.type + " cell"
                   }
                  key={i}
                >
                  {
                    (cell.type === "Boss") ? <img alt="" src={Cthulu} /> : null
                  }
                </div>
              );
            })
          }
        </div>
      );
    });

    return(
      <div className="Dungeon">
        <div className="flex-container">
          { cells }
        </div>
      </div>
    );
  }
})

export default Dungeon;
