import * as React from 'react';
import '../App.css';

interface InterProps { clickStep1Condition:any }
interface InterStates { value2:string }

export default class Step1 extends React.Component<InterProps, InterStates>{
    constructor(props:any){
        super(props);
        this.clickYes = this.clickYes.bind(this);
        this.clickNo = this.clickNo.bind(this);

        this.state={
            value2: " "
        }
    }
    
    public clickYes = () => {
        this.setState(
            {
                value2 : " [네]"
            }
        )
        this.props.clickStep1Condition(true);
    }
    public clickNo(){
        this.setState(
            {
                value2 : " [아니오]"
            }
        )
        this.props.clickStep1Condition(false);
        if( window.confirm('창을 닫습니다') ){
            window.close();
        }
    }
    public render(){
        
        return(
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
        );
    }
}