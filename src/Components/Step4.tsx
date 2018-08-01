import * as React from 'react';
import './Step4.css';

interface InterProps{
    step2v:any,
    step3v:any
}

interface InterState{
    step2v:any,
    step3v:any
}

class Step4 extends React.Component<InterProps,InterState>{
    constructor(props:any){
        super(props);

        this.state={
            step2v: null,
            step3v: null
        }
    }

    public render(){
        return(
            <React.Fragment>
                <header className="App-header">
                    <h1 className="App-title">작성리뷰 확인하기</h1>
                </header>
                <div className="S4App">
                    <table className="S4table">
                        <tbody>
                            <tr>
                                <td rowSpan={2} style={{width:60, border:0}}>
                                    <img src="http://s.zigbang.com/v2/danji/review_w_40.png" width={55}/>
                                </td>
                                <td style={{border:0}}>
                                    <span>30대 남자</span> 
                                    <span>123</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border:0}}>
                                    현재 거주 중
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S4App">
                    <h5>교통 여건 | 3.0</h5>
                    <p> 단지가 커서 </p>
                </div>

                <div className="S4App">
                    <h5>주변 환경 | 3.0</h5>
                    <p> 올림픽공원, </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Step4;