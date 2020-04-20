import React , {Component} from 'react'



class App extends Component {

  constructor(){
    super();
    this.state = {
      number1: '',
      number2:'',
      operator: '',
      result: ''
    }
  }

  calculate(e){
    var number1 = parseInt(this.refs.number1.value);
    var number2 = parseInt(this.refs.number2.value);
    var operator = e;
    var result = this.refs.result.value

    if(operator === '+'){
      result = number1 + number2;
    }
    if(operator ==='-'){
      result = number1 - number2;
    }
    if(operator ==='*'){
      result = number1 * number2;
      if(number1 === '0'|| number2 ==='0'){
        result = '0';
      }

    }
    if(operator ==='/'){
      result = number1 / number2;
      if(number2 === '0'){
        result = 'undefined';
      }
      if(number1 === '0'){
        result = '0';
      
      }
      
    }

    this.setState({
      number1: number1,
      number2: number2,
      operator: operator,
      result: result
    });

  }

  handleResult(){
    const{number1, number2, operator, result} = this.state;
    if (this.state.result){
      return(
         number1+ ' '+operator+' '+number2+ ' = ' +result
      );
    }
  }


render(){
    return (
    <div>
      <div className="form-group">
        <input type = "text" className="form-control" ref="number1"/>
      </div>
      <div className="form-group">
        <input type = "text" className="form-control" ref="number2"/>
      </div>

          <button value = "+" ref="operator" onClick = {()=>this.calculate('+')}>+</button>
          <button value = "-" ref="operator" onClick = {()=>this.calculate('-')}>-</button>
          <button value = "*" ref="operator" onClick = {()=>this.calculate('*')}>*</button>
          <button value = "/" ref="operator" onClick = {()=>this.calculate('/')}>/</button>

     <input type = "text" ref="result" value = {this.handleResult()}/>
    </div>

  );
}
}

export default App