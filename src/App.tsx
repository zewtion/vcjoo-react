import * as React from 'react';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';

interface InterStates { 
  isStep:number 
}

class App extends React.Component< {}, InterStates> {
  constructor(props:any){
    super(props);

    this.state = {
      isStep : 1
    }
  }

  // 이전버튼 클릭
  public clickPrev = () => {
    this.setState({
      isStep : this.state.isStep - 1
    });
  }

  // 다음버튼 클릭
  public clickNext = () => {
    this.setState({
      isStep : this.state.isStep + 1
    });
  }

  public render() {
    let renderStep;
    if( this.state.isStep === 1 ){
      renderStep = (
        <div>
          <Step1 clickNext={this.clickNext} />
        </div>
      );
    }else if( this.state.isStep === 2 ){
      renderStep = (
        <div>
          <Step2 clickPrev={this.clickPrev} clickNext={this.clickNext}/>
        </div>
      );
    }else if( this.state.isStep === 3 ){
      <Step3/>
    }
    return (
      <div> 
        {renderStep}
      </div>
    );
  }
}

export default App;
