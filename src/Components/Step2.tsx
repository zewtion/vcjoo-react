import * as React from 'react';
import Select from 'react-select';
import '../App.css';
import vData from '../data.json';

interface InterStates {
    classNm1: string, 
    classNm2: string, 
    classNm3: string,
    optionsDong: Array<{value:string; label:string; floor:number}>,
    optionsFloor: Array<{value:string; label:string}>,
    selectedOption:any,
    closeNm1:string,
    closeNm2:string,
    closeNm3:string
}

class Step2 extends React.Component<{}, InterStates > {
    constructor(props:any){
        super(props);
        
        let tempArray1:Array<{value:string; label:string; floor:number}>;
        let tempArray2:Array<{value:string; label:string}>;
        tempArray1 = []; tempArray2 = [];

        vData.danjis[0].dong.map( (x:any) => {
            tempArray1.push({ value:x.id, label:x.name, floor:x.floor });
        });
        vData.danjis[0].dong.map( (x:any) => {
            tempArray2.push({ value:x.id, label:x.floor });
        });

        this.state = {
            classNm1: "App-child-close",
            classNm2: "App-child-close",
            classNm3: "App-child-close",
            closeNm1: "보기",
            closeNm2: "보기",
            closeNm3: "보기",
            optionsDong: tempArray1,
            optionsFloor: tempArray2,
            selectedOption: ''
        }
    }

    public onChangeHandler = (selectedOption:any) => {
        /* tslint:disable:no-empty */
        this.setState({selectedOption});
        let tempArray2:Array<{value:string; label:string}> = [];
        if( selectedOption.floor === null ){
            tempArray2 = [];
        }else{
            tempArray2 = [];
            for( let i=1; i<=selectedOption.floor; i++ ){
                tempArray2.push({ value:i+"", label:i+"" });
            }
        }
        this.setState({
            optionsFloor : tempArray2
        });
    }

    public selectBoxFloor = (selectedValue:any) => {
        window.console.log( 'selectedValue: ' + selectedValue )
        
        if( selectedValue === null || selectedValue === ''){
            return (<input type='text' placeholder='층 정보를 수기로 입력해주세요.'/>);
        }else{
            return (<Select options={this.state.optionsFloor}/>);
            
        }
    }

    public clickDiv = ( value:number ) => {
        if( value === 1 && this.state.classNm1 === "App-child-open" ){
            this.setState({
                classNm1: "App-child-close",
                closeNm1: "보기"
            });
        }else if( value === 1 && this.state.classNm1 === "App-child-close" ){
            this.setState({
                classNm1: "App-child-open",
                closeNm1: "닫기"
            });
        }else if( value === 2 && this.state.classNm2 === "App-child-open" ){
            this.setState({
                classNm2: "App-child-close",
                closeNm2: "보기"
            });
        }else if( value === 2 && this.state.classNm2 === "App-child-close" ){
            this.setState({
                classNm2: "App-child-open",
                closeNm2: "닫기"
            });
        }else if( value === 3 && this.state.classNm3 === "App-child-open" ){
            this.setState({
                classNm3: "App-child-close",
                closeNm3: "보기"
            });
        }else if( value === 3 && this.state.classNm3 === "App-child-close" ){
            this.setState({
                classNm3: "App-child-open",
                closeNm3: "닫기"
            });
        }
    }

    public render() {
        const { selectedOption } = this.state;
        const isSelect = (typeof( selectedOption.floor ) === "number" && selectedOption.floor !== 0) ? true : false;

        const tbody = (
            <table> 
                <tbody>
                    <tr> 
                        <td style={{width: 150}}> {<Select value={selectedOption} onChange={this.onChangeHandler} options={this.state.optionsDong}/>} </td>
                        <td style={{width: 150}}> {isSelect ? <Select options={this.state.optionsFloor}/> : <input className="txtBox" type="number" maxLength={3}/>} </td>
                    </tr>
                </tbody>
            </table>
        )
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">아파트 리뷰 작성하기 2/3</h1>
            </header>
            <p className="App-intro">
                검색한 단지에 대해 아래의 항목들을 입력해주세요.
            </p>
            
            <div id="div1" className="App-close" onClick={this.clickDiv.bind(this, 1)}><input type="checkBox" name="check1"/>교통여건[ {this.state.closeNm1} ]</div>
            <div id="div11" className={this.state.classNm1}>
                대중교통 이용이나, 자동차 운행과 같은 교통여건에 대해 평가해주세요.(50자이상)<br/>
                <form className="rating">
                    <label>
                        <input type="radio" name="stars1" value="1" />
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars1" value="2" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars1" value="3" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>   
                    </label>
                    <label>
                        <input type="radio" name="stars1" value="4" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars1" value="5" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    </form>
                <br/>
                <div>
                    (예시)삼각지역이 도보 3분 거리이고, 종각으로 가는 501버스를 집 바로 앞 버스류장에서 탈 수 있다
                    배차 간격이 짧아 출퇴근이 편리하다. 하지만 서울역이 근처에 있어서 차가 항상 막혀, 자가용 이용은
                    자제하려고 한다.<br/>
                </div>
                <textarea placeholder="교통 여건의 장단점을 입력해주세요." rows={10} style={{ width: '100%' }}/>
            </div>

            <div id="div2" className="App-close" onClick={this.clickDiv.bind(this, 2)}><input type="checkBox" name="check2"/>주변환경[ {this.state.closeNm2} ]</div>
            <div id="div21" className={this.state.classNm2}>
                슈퍼(편의점), 백화점(대형마트), 산책로 공원 등의 주변 환경에 대해 말씀해주세요. (50자이상)
                <form className="rating">
                    <label>
                        <input type="radio" name="stars2" value="1" />
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars2" value="2" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars2" value="3" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>   
                    </label>
                    <label>
                        <input type="radio" name="stars2" value="4" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars2" value="5" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                </form>
                <br/><br/>
                (예시)마을 버스로 2정거장이면 용산역 이마트도 있꼬, 정문 앞에 신선한 아채를 파는 레몬 마트가
                있어서 장을 보기 편하다. 용산가족공원 바로 아래에 위치한 아파트여서, 아이들을 자주 데리고 나간다.
                공기도 주변 아파트보다 더 맑은 느낌이다.<br/><br/>
                <textarea placeholder="주변 환경의 장단점을 입력해주세요." rows={10} style={{ width: '100%' }}/>
            </div>

            <div id="div3" className="App-close" onClick={this.clickDiv.bind(this, 3)}><input type="checkBox" name="check3"/>동/층 정보[ {this.state.closeNm3} ]</div>
            <div id="div31" className={this.state.classNm3}>
                거주 하셨던 동, 층 정보를 입력해 주세요.<br/>
                {tbody}
            </div>
        </div>
        );
    }
}

export default Step2;
