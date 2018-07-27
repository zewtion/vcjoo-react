import * as React from 'react';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';

interface InterStates { isStep1Condition: boolean, isStep:number }

class App extends React.Component< {}, InterStates> {
  constructor(props:any){
    super(props);

    this.state = {
      isStep : 1,
      isStep1Condition : false
    }
  }

  public clickStep1Condition = ( value:boolean ) => {
    window.console.log( 'value: ' + value );
    this.setState({
        isStep1Condition : value
    });
  }

  public clickPrev = () => {
      /* tslint:disable:no-empty */
  }
  public clickNext = () => {
    if( this.state.isStep === 1 ){
      if( this.state.isStep1Condition ){
        this.setState({
          isStep : 2
        });
      }else{
        window.alert('[네] 선택 후 넘어갈 수 있습니다');
      }
    }
  }

  public render() {
    let renderStep;
    if( this.state.isStep === 1 ){
      renderStep = (
        <div>
          <Step1 clickStep1Condition={this.clickStep1Condition} />
          <p>
            <code className="btnNext" onClick={this.clickNext}>다음 →</code>
          </p>
        </div>
      );
    }else if( this.state.isStep === 2 ){
      renderStep = (
        <div>
          <Step2/>
          <p>
            <code className="btnNext" onClick={this.clickPrev}>← 이전</code>
            <code className="btnNext" onClick={this.clickNext}>다음 →</code>
          </p>
        </div>
      );
    }
    return (
      <div>
        {renderStep}
      </div>
    );
  }
}

export default App;
