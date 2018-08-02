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
      isStep: 1,
      step2v: {
        value11 : "5.0",
        value12 : "교통여건은..",
        value21 : "5.0",
        value22 : "주변환경은.."
      },
      step3v: {
        value1 : "자가 거주",
        value2 : "2014년까지",
        value3 : "20대",
        value4 : "남자",
        value5 : "미혼"
      }
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
          <Step4 step2v={this.state.step2v} step3v={this.state.step3v}/>
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
