import * as React from 'react';
import './Step4.css';

interface InterProps{
    step2v:any,
    step3v:any
}

interface InterState{
    today:string
}

class Step4 extends React.Component<InterProps,InterState>{
    constructor(props:any){
        super(props);

        const today:any = new Date();
        const date:any = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate()+ ' 등록';

        this.state={
            today: date
        }

        // window.console.log("step2v["+this.props.step2v+"]");
        // window.console.log("step3v["+this.props.step3v+"]");
    }

    public render(){
        const step2v:any = this.props.step2v;
        const step3v:any = this.props.step3v;
        const imgUrl:string = getImage( step3v.value3, step3v.value4 );
        const rating1:string = getRating( step2v.value11 );
        const rating2:string = getRating( step2v.value21 );
        return(
            <>
                <header className="App-header">
                    <h1 className="App-title">작성리뷰 확인하기</h1>
                </header>
                <div className="S4App">
                    <table className="S4table">
                        <tbody>
                            <tr>
                                <td rowSpan={2} style={{width:60, border:0}}>
                                    <img src={imgUrl} width={55}/>
                                </td>
                                <td style={{border:0}}>
                                    <span><b>{ step3v.value3 } { step3v.value4 }</b></span> 
                                    <span className="S4sp1">{this.state.today}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border:0}}>
                                    {step3v.value2} · {step3v.value1} · {step3v.value5}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S4App">
                    <h5>교통 여건 | {step2v.value11} {rating1}</h5>
                    <p> {step2v.value12} </p>
                </div>

                <div className="S4App">
                    <h5>주변 환경 | {step2v.value21} {rating2}</h5>
                    <p> {step2v.value22} </p>
                </div>
            </>
        )
    }
}

function getImage( age:string, gender:string ){
    let rtUrl:string = "http://s.zigbang.com/v2/danji/review_";
    const transAge:string = age.substring(0,2);
    const transGender:string = (gender==="남자")? "m" : "w";

    rtUrl = rtUrl + transGender + '_' + transAge + '.png';
    window.console.log("rtUrl: " + rtUrl);
    return rtUrl;
}

function getRating( point:number ){
    let rating:string = "";
    for( let i:number=1; i<=5; i++ ){
        if( i <= point ){
            rating = rating + "●";
        }else{
            rating = rating + "○";
        }
    }
    return rating;
}

export default Step4;