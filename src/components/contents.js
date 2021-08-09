import React from 'react';

class Contents extends React.Component{ 
    setStyle(){
        return{
                color:this.props.color,
                borderColor:this.props.color,
                padding:this.props.fontSize
        };
    }
  render(){
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p> Color:{this.props.color} - Fontsixe :{this.props.fontSize}px</p>
        <div id="content" style={ this.setStyle()} >
            Nội dung setting
        </div>
    </div>
    );
  }
}
export default Contents;