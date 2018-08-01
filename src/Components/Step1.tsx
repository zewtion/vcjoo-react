import * as React from 'react';
import '../App.css';

interface InterProps { 
    clickNext:any
}
interface InterStates { 
    value2:string, 
    checked1:boolean 
}

export default class Step1 extends React.Component<InterProps, InterStates>{
    constructor(props:any){
        super(props);
        this.clickYes = this.clickYes.bind(this);
        this.clickNo = this.clickNo.bind(this);

        this.state={
            checked1: false,
            value2: " "
        }
    }
    
    // 네 버튼 클릭
    public clickYes = () => {
        this.setState({
            checked1 : true,
            value2 : " [네]"
        });
    }
    // 아니오 버튼 클릭
    public clickNo(){
        this.setState({
            value2 : " [아니오]"
        });
        if( window.confirm('창을 닫습니다') ){
            window.close();
        }
    }

    // 다음 버튼 클릭
    public clickNext = () => {
        if( this.state.checked1 ){
            this.props.clickNext();
        }else{
            window.alert('[네] 선택 후 넘어갈 수 있습니다');
        }
    }

    public render(){
        return(
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">아파트 리뷰 작성하기 1/3</h1>
                    </header>
                    <p className="App-intro">
                        최근 5년 이내 아파트에 거주한 경험이 있나요 ? <code>{ this.state.value2 }</code>
                    </p>
                    <p>
                        <button className="btnNormal" onClick={this.clickNo}> 아니오 </button> &nbsp;
                        <button className="btnColor" onClick={this.clickYes}> 네 </button>
                    </p>
                </div>
                <code className="btnNext" onClick={this.clickNext}>다음 →</code>
            </div>
        );
    }
}