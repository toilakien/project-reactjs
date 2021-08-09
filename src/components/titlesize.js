import React from 'react';

class Titlesize extends React.Component{
    
    setFontSize(){
        return{
            fontSize:this.props.fontSize
        };
    }
    changeSize(value){
        this.props.onChangeSize(value)
    }
  render(){
    return (
       <div  className="panel panel-warning">
            <div className="panel-heading ">
                <h3 className="panel-title"
                    fontSize={this.setFontSize()}
                >size:{this.props.fontSize}px</h3>
            </div>
            <div className="panel-boby ">
                <button className="btn btn-success mt" onClick={()=>this.changeSize(+2)}> Tăng </button>
                <button className="btn btn-warning mt" onClick={()=>this.changeSize(-2)}> Giảm</button>
            </div>
       </div>

    );
  }
}
export default Titlesize;