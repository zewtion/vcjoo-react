import * as React from 'react';
import './App.css';
import Step1 from './Components/Step1';

class App extends React.Component< {}, {isStep1Condition: boolean, isStep:number}> {
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
      /* tslint:disable:no-empty */
  }

  public render() {
    let renderStep;
    if( this.state.isStep === 1 ){
      renderStep = (
        <div>
          <Step1 onClickYes={this.clickStep1Condition} />
        </div>
      );
    }else{
      renderStep = (
        <div>
          <Step1 onClickYes={this.clickStep1Condition} />
        </div>
      );
    }
    return (
      <div>
        {renderStep}
        <p>
          <code className="btnNext" onClick={this.clickPrev}>← 이전</code>
          <code className="btnNext" onClick={this.clickNext}>다음 →</code>
        </p>
      </div>
    );
  }
}

export default App;
