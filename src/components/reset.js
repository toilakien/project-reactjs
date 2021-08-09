import React from 'react';

class Reset extends React.Component{
    reset(value){
        this.props.onResetDefault(true)
    }
  render(){
    return (
        <button className="btn btn-primary " onClick ={()=>this.reset(true)}>Reset</button>
    );
  }
}
export default Reset;