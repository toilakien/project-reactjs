import React from 'react';
import './App.css';
import Colorpicker from './components/color_Picker';
import Contents from './components/contents';
import Reset from './components/reset';
import Titlesize from './components/titlesize';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:'red',
      fontSize:12
    }
    this.onSetColor=this.onSetColor.bind(this);
    this.onChangeSize=this.onChangeSize.bind(this);
    this.onResetDefault=this.onResetDefault.bind(this);
  }

  onSetColor(params){
      this.setState({
        color:params   
      })
  }
  onChangeSize(value){
    if(this.state.fontSize+value>=8&&this.state.fontSize+value<=  36){
      this.setState({
        fontSize:this.state.fontSize+value
      })
    }
  }
  onResetDefault(value){
   if(value){
    this.setState({
      color:'red',
      fontSize:12
    });
   }
  }
  render(){
    return (
      <div className="container mt-50">
      <div className="row">
        
          <Colorpicker 
            color={this.state.color}
            onReceiveColor={this.onSetColor}
            
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <Titlesize
                  fontSize={this.state.fontSize}
                  onChangeSize= {this.onChangeSize}
                  />
                 <Reset
                  onResetDefault={this.onResetDefault}
                 />
              </div>
          </div>
     <Contents
        color={this.state.color}
        fontSize={this.state.fontSize}
        
     />
  </div>    
    );
  }
}
export default App;