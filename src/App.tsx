import * as React from 'react';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';

interface InterStates { 
  isStep:number,
  step2v:any,
  step3v:any
}

class App extends React.Component< {}, InterStates> {
  constructor(props:any){
    super(props);

    this.state = {
      isStep: 2,
      step2v: null,
      step3v: null
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

  // Step2에서 작성한 정보 저장
  public saveStep2 = (obj:any) =>{
    this.setState({
      step2v : obj
    });
    window.console.log("obj["+obj+"]");
  }

  // Step3에서 작성한 정보 저장
  public saveStep3 = (obj:any) =>{
    this.setState({
      step3v : obj
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
          <Step2 saveStep2={this.saveStep2} clickPrev={this.clickPrev} clickNext={this.clickNext}/>
        </div>
      );
    }else if( this.state.isStep === 3 ){
        renderStep = (
          <div>
            <Step3 saveStep3={this.saveStep3} clickNext={this.clickNext}/>
          </div>
        );
    }else if( this.state.isStep === 4 ){
      renderStep = (
        <div>
          <Step4 step2v={this.state.step3v} step3v={this.state.step3v}/>
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
