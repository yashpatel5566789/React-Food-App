import React, { Component } from "react";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import "./Style.css";
class Inc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
      if(this.state.clicks >0){
        this.setState({ clicks: this.state.clicks - 1 }); 
      }
    
  };
  render() {
    return (
      <div className="container mb-0">
        <AddBoxOutlinedIcon onClick={this.IncrementItem} />
        <div className="zero">
        {this.state.show ? <h4>{this.state.clicks}</h4> : ""}
        </div>
        <div className="dec">
        <IndeterminateCheckBoxOutlinedIcon onClick={this.DecreaseItem} />
        </div>
      </div>
    );
  }
}

export default Inc;
