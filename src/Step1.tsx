import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import Step2 from './Step2';

let switched:boolean = false;

export default class Step1 extends React.Component{
    constructor(props: Readonly<{}>){
        super(props);
        this.clickNext = this.clickNext.bind(this);
        this.clickYes = this.clickYes.bind(this);
        this.clickNo = this.clickNo.bind(this);
        
    }
    
    
    public clickNext(){
        if( !switched ) {
            alert( '네, 선택 후 이동 가능 합니다' );
            return
        }
        ReactDOM.render(<Step2 />, document.getElementById('root') as HTMLElement);
        registerServiceWorker();
    }
    public clickYes( this: any ){
        switched = true;
        this.style = {
            backGroundColor : 'gray'
        }
    }
    public clickNo(){
        switched = false;
        self.close();
    }
    public render(){
        
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">아파트 리뷰 작성하기 1/3</h1>
                </header>
                <p className="App-intro">
                    최근 5년 이내 아파트에 거주한 경험이 있나요 ?
                </p>
                <p>
                    <button className="btnNormal" onClick={this.clickNo}> 아니오 </button> &nbsp;
                    <button className="btnColor" onClick={this.clickYes}> 네 </button>
                </p>
                <code className="btnNext" onClick={this.clickNext}>다음 →</code>
            </div>
        );
    }
}