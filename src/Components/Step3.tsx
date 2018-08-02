import * as React from 'react'
import './Step3.css';

interface InterProps{
    clickNext:any,
    saveStep3:any
}
interface InterState{
    classNm11:string, classNm12:string,
    classNm21:string, classNm22:string, classNm23:string, classNm24:string, classNm25:string, classNm26:string,
    classNm31:string, classNm32:string, classNm33:string, classNm34:string, classNm35:string,
    classNm41:string, classNm42:string,
    classNm51:string, classNm52:string
    value1:string, value2:string, value3:string, value4:string, value5:string
}

class Step3 extends React.Component<InterProps,InterState>{
    constructor(props:any){
        super(props);

        this.state = {
            classNm11:"S3td", classNm12:"S3td",
            classNm21:"S3td", classNm22:"S3td", classNm23:"S3td", classNm24:"S3td", classNm25:"S3td", classNm26:"S3td",
            classNm31:"S3td", classNm32:"S3td", classNm33:"S3td", classNm34:"S3td", classNm35:"S3td",
            classNm41:"S3td", classNm42:"S3td",
            classNm51:"S3td", classNm52:"S3td",
            value1:"", value2:"", value3:"", value4:"", value5:""
        }
    }

    // 다음버튼 클릭
    public clickNext = () =>{
        const vv:boolean = this.checkStep3();
        if( vv ){
            this.saveStep3();
            this.props.clickNext();
        }else{
            alert( "모든항목 선택 후 이동 가능 합니다" );
        }
    }

    // 1번째 분류 컨트롤
    public v1td = (flag:any) =>{
        if( flag === 1 ){
            this.setState({
                classNm11: "S3tdClick",
                classNm12: "S3td",
                value1: "자가 거주"
            });
        }else if( flag === 2 ){
            this.setState({
                classNm11: "S3td",
                classNm12: "S3tdClick",
                value1: "전세 또는 월세"
            });
        }
    }

    // 2번째 분류 컨트롤
    public v2td = (flag:any) =>{
        if( flag === 1 ){
            this.setState({
                classNm21: "S3tdClick", classNm22: "S3td", classNm23: "S3td",
                classNm24: "S3td", classNm25: "S3td", classNm26: "S3td",
                value2:"2013년까지"
            });
        }else if( flag === 2 ){
            this.setState({
                classNm21: "S3td", classNm22: "S3tdClick", classNm23: "S3td",
                classNm24: "S3td", classNm25: "S3td", classNm26: "S3td",
                value2:"2014년까지"
            });
        }else if( flag === 3 ){
            this.setState({
                classNm21: "S3td", classNm22: "S3td", classNm23: "S3tdClick",
                classNm24: "S3td", classNm25: "S3td", classNm26: "S3td",
                value2:"2015년까지"
            });
        }else if( flag === 4 ){
            this.setState({
                classNm21: "S3td", classNm22: "S3td", classNm23: "S3td",
                classNm24: "S3tdClick", classNm25: "S3td", classNm26: "S3td",
                value2:"2016년까지"
            });
        }else if( flag === 5 ){
            this.setState({
                classNm21: "S3td", classNm22: "S3td", classNm23: "S3td",
                classNm24: "S3td", classNm25: "S3tdClick", classNm26: "S3td",
                value2:"2017년까지"
            });
        }else if( flag === 6 ){
            this.setState({
                classNm21: "S3td", classNm22: "S3td", classNm23: "S3td",
                classNm24: "S3td", classNm25: "S3td", classNm26: "S3tdClick",
                value2:"현재 거주 중"
            });
        }
    }

    // 3번재 분류 컨트롤
    public v3td = (flag:any) =>{
        if( flag === 1 ){
            this.setState({
                classNm31: "S3tdClick", classNm32: "S3td", classNm33: "S3td",
                classNm34: "S3td", classNm35: "S3td",
                value3: "20대"
            });
        }else if( flag === 2 ){
            this.setState({
                classNm31: "S3td", classNm32: "S3tdClick", classNm33: "S3td",
                classNm34: "S3td", classNm35: "S3td",
                value3: "30대"
            });
        }else if( flag === 3 ){
            this.setState({
                classNm31: "S3td", classNm32: "S3td", classNm33: "S3tdClick",
                classNm34: "S3td", classNm35: "S3td",
                value3: "40대"
            });
        }else if( flag === 4 ){
            this.setState({
                classNm31: "S3td", classNm32: "S3td", classNm33: "S3td",
                classNm34: "S3tdClick", classNm35: "S3td",
                value3: "50대"
            });
        }else if( flag === 5 ){
            this.setState({
                classNm31: "S3td", classNm32: "S3td", classNm33: "S3td",
                classNm34: "S3td", classNm35: "S3tdClick",
                value3: "60대 이상"
            });
        }
    }

    // 4번째 분류 컨트롤 
    public v4td = (flag:any) =>{
        if( flag === 1 ){
            this.setState({
                classNm41: "S3tdClick",
                classNm42: "S3td",
                value4: "남자"
            });
        }else if( flag === 2 ){
            this.setState({
                classNm41: "S3td",
                classNm42: "S3tdClick",
                value4: "여자"
            });
        }
    }

    // 5번째 분류 컨트롤
    public v5td = (flag:any) =>{
        if( flag === 1 ){
            this.setState({
                classNm51: "S3tdClick",
                classNm52: "S3td",
                value5: "기혼"
            });
        }else if( flag === 2 ){
            this.setState({
                classNm51: "S3td",
                classNm52: "S3tdClick",
                value5: "미혼"
            });
        }
    }

    // Step3에 대한 유효성 검사
    public checkStep3 = () =>{
        const v1:boolean = ( this.state.value1 !== "" );
        const v2:boolean = ( this.state.value2 !== "" );
        const v3:boolean = ( this.state.value3 !== "" );
        const v4:boolean = ( this.state.value4 !== "" );
        const v5:boolean = ( this.state.value5 !== "" );

        if( v1 && v2 && v3 && v4 && v5 ){
            return true;
        }else{
            return false;
        }
    }

    // 기록한 정보를 저장한다
    public saveStep3 = () =>{
        let myObject:any = null;
        myObject = {
            value1 : this.state.value1,
            value2 : this.state.value2,
            value3 : this.state.value3,
            value4 : this.state.value4,
            value5 : this.state.value5
        }
        this.props.saveStep3( myObject );
    }

    public render(){
        return(
            <React.Fragment>
                <header className="App-header">
                    <h1 className="App-title">아파트 리뷰 작성하기 3/3</h1>
                </header>
                <div className="S3App">
                    <h5>리뷰해주신 아파트의 거주형태는?</h5>
                    <table className="S3table">
                        <tbody>
                            <tr>
                                <td className={this.state.classNm11} onClick={this.v1td.bind(this,1)} style={{width:0.5}}>자가 거주</td>
                                <td className={this.state.classNm12} onClick={this.v1td.bind(this,2)} style={{width:0.5}}>전세 또는 월세</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S3App">
                    <h5>아파트에 거주하셨던 시기는?</h5>
                    <table className="S3table">
                        <tbody>
                            <tr>
                                <td className={this.state.classNm21} onClick={this.v2td.bind(this,1)} style={{width:0.3}}>2013년까지</td>
                                <td className={this.state.classNm22} onClick={this.v2td.bind(this,2)} style={{width:0.3}}>2014년까지</td>
                                <td className={this.state.classNm23} onClick={this.v2td.bind(this,3)} style={{width:0.3}}>2015년까지</td>
                            </tr>
                            <tr>
                                <td className={this.state.classNm24} onClick={this.v2td.bind(this,4)} style={{width:0.3}}>2016년까지</td>
                                <td className={this.state.classNm25} onClick={this.v2td.bind(this,5)} style={{width:0.3}}>2017년까지</td>
                                <td className={this.state.classNm26} onClick={this.v2td.bind(this,6)} style={{width:0.3}}>현재 거주 중</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S3App">
                    <h5>작성해주시는 분의 연령대는?</h5>
                    <table className="S3table">
                        <tbody>
                            <tr>
                                <td className={this.state.classNm31} onClick={this.v3td.bind(this,1)} style={{width:0.2}}>20대</td>
                                <td className={this.state.classNm32} onClick={this.v3td.bind(this,2)} style={{width:0.2}}>30대</td>
                                <td className={this.state.classNm33} onClick={this.v3td.bind(this,3)} style={{width:0.2}}>40대</td>
                                <td className={this.state.classNm34} onClick={this.v3td.bind(this,4)} style={{width:0.2}}>50대</td>
                                <td className={this.state.classNm35} onClick={this.v3td.bind(this,5)} style={{width:0.2}}>60대 이상</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S3App">
                    <h5>작성해주시는 분의 성별은?</h5>
                    <table className="S3table">
                        <tbody>
                            <tr>
                                <td className={this.state.classNm41} onClick={this.v4td.bind(this,1)} style={{width:0.5}}>남자</td>
                                <td className={this.state.classNm42} onClick={this.v4td.bind(this,2)} style={{width:0.5}}>여자</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="S3Line"/>

                <div className="S3App">
                    <h5>결혼 여부를 알려주세요.</h5>
                    <table className="S3table">
                        <tbody>
                            <tr>
                                <td className={this.state.classNm51} onClick={this.v5td.bind(this,1)} style={{width:0.5}}>기혼</td>
                                <td className={this.state.classNm52} onClick={this.v5td.bind(this,2)} style={{width:0.5}}>미혼</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="footerRight">
                    <code className="btnNext" onClick={this.clickNext}>리뷰 제출하기 →</code>
                </p>
            </React.Fragment>
        )
    }
}

export default Step3;