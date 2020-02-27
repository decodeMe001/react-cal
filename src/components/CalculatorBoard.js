import React, { Component } from 'react'
import DisplayComponents from './DisplayComponents';
import OperationsButton from './OperationsButton';
import Operation from './Operation';

  
class CalculatorBoard extends Component {

    constructor(props) {
        super(props);
        this.appendDigit = this.appendDigit.bind(this);
        this.resetValue = this.resetValue.bind(this);
        this.plusMinuSign = this.plusMinuSign.bind(this);
        this.percentSign = this.percentSign.bind(this);
        this.divideSign = this.divideSign.bind(this);
        this.multiplySign = this.multiplySign.bind(this);
        this.subtrSign = this.subtrSign.bind(this);
        this.addSign = this.addSign.bind(this);
        this.dotSign = this.dotSign.bind(this);
        this.equalToSign = this.equalToSign.bind(this);

        //-------Local STATE--------

        this.state = {
            previous: null,
            current: '',
            operation: null,
            operationClicked: false,
        }
      }

      //------------------Calculator state changes goes here!----------------------------

      resetValue(){
          this.setState({
              current: '0'
          })
      };

      plusMinuSign() {
        const current = (this.state.current.charAt(0) === '-') ? this.state.current.slice(1) : `-${this.state.current}` ;
        this.setState({ 
          current : current
        });
      }

      percentSign() {
        this.setState({
          current: `${ parseFloat(this.state.current) / 100 }`
        })
      }

      setPrevious(){
        this.setState({
          previous: this.state.current,
          operationClicked: true
        })
      }

      divideSign() {
        const operation = (a, b) => a / b;
          this.setState({
            operation: operation
        });

        this.setPrevious();
      }

      multiplySign() {
        const operation = (a, b) => (a * b);

        this.setState({
            operation: operation,
          });
          this.setPrevious();
      }

      subtrSign() {
        const operation = (a, b) => a - b;

        this.setState({
          operation: operation
        });

        this.setPrevious();
      }

      addSign() {
        const operation = (a, b) => (a + b);

        this.setState({
          operation: operation
        });

        this.setPrevious();
      }

      dotSign() {
        if(this.state.current.indexOf('.') === -1){
          this.appendDigit('.');
        }
      }

      equalToSign() {
        const current = `${this.state.operation(parseFloat(this.state.previous), parseFloat(this.state.current))}`;
        this.setState({
          current: current,
          previous: null
        })
      }

      appendDigit(number){
        
        if(this.state.operationClicked){
          this.setState({
            current: `${number}`,
            operationClicked: false
          });
        }else if(this.state.current === '0'){
          this.setState({
            current: `${number}`
          }); 
        }else {
          this.setState({
            current: `${this.state.current}${number}`,
          })
        } 
      }
    //--------End State Changes Here--------------

      render() {

          return (
            <div className="calculator">
              <DisplayComponents getCurrentState = { this.state.current } />
                <OperationsButton value = {'C'} onClick = { this.resetValue } />
                <OperationsButton value = {'+/-'} onClick = { this.plusMinuSign } /> 
                <OperationsButton value = {'%'} onClick = { this.percentSign } />

                <Operation value = {'÷'} onClick = { this.divideSign } />      

                <OperationsButton value = {7} onClick = { () => this.appendDigit(7) } />
                <OperationsButton value = {8} onClick = { () => this.appendDigit(8) } />
                <OperationsButton value = {9} onClick = { () => this.appendDigit(9) } />

                <Operation value = {'x'} onClick = { this.multiplySign } />

                <OperationsButton value = {4} onClick = { () => this.appendDigit(4) } />
                <OperationsButton value = {5} onClick = { () => this.appendDigit(5) } />
                <OperationsButton value = {6} onClick = { () => this.appendDigit(6) } />

                <Operation value = {'-'} onClick = { this.subtrSign } />

                <OperationsButton value = {1} onClick = { () => this.appendDigit(1) } />
                <OperationsButton value = {2} onClick = { () => this.appendDigit(2) } />
                <OperationsButton value = {3} onClick = { () => this.appendDigit(3) } />

                <Operation value = {'+'} onClick = { this.addSign } />

                <button className="btn zero" onClick = { () => this.appendDigit(0) } > 0 </button>

                <OperationsButton value = {'.'} onClick = { this.dotSign } />
                
                <Operation value = {'='} onClick = { this.equalToSign } />  
            </div>
          );
      }
  }
  
export default CalculatorBoard;
  