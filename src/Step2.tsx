import * as React from 'react';
import Select from 'react-select';
import './App.css';
import vData from './data.json';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

/* tslint:disable */
let optionsDong:{value:string; label:string;}[] = [];
let optionsFloor:{value:string; label:string;}[] = [];

class Step2 extends React.Component<{}, {classNm1: string, classNm2: string, classNm3: string}> {
    constructor(props:any){
        super(props);

        this.state = {
            classNm1: "App-child-close",
            classNm2: "App-child-close",
            classNm3: "App-child-close"
        }
        window.console.log('print me: ' + vData.danjis[0].dong.length )
        
        for( let i=0; i<vData.danjis[0].dong.length; i++ ){
            let v1:string = vData.danjis[0].dong[i].id;
            let v2:string = vData.danjis[0].dong[i].name;
            let v3:string = vData.danjis[0].dong[i].floor;
            optionsDong.push({value: v1, label: v2});
            optionsFloor.push({value: v1, label: v3});
        }
    }

    public clickPrev = () => {
        /* tslint:disable:no-empty */
        
    }
    public clickNext = () => {
        /* tslint:disable:no-empty */
    }

    public clickDiv1 = () => {
        window.console.log( 'is selected' );
        if( this.state.classNm1 === "App-child-open" ){
            this.setState({
                    classNm1: "App-child-close"
                }
            );
        }else{
            this.setState({
                    classNm1: "App-child-open"
                }
            );
        }
    }
    public MyComponent = () => (
        <Select options={options} />
      )

    public clickDiv2 = () => {
        if( this.state.classNm2 === "App-child-open" ){
            this.setState({
                    classNm2: "App-child-close"
                }
            );
        }else{
            this.setState({
                    classNm2: "App-child-open"
                }
            );
        }
    }

    public clickDiv3 = () => {
        if( this.state.classNm3 === "App-child-open" ){
            this.setState({
                    classNm3: "App-child-close"
                }
            );
        }else{
            this.setState({
                    classNm3: "App-child-open"
                }
            );
        }
    }

    public render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">아파트 리뷰 작성하기 2/3</h1>
            </header>
            <p className="App-intro">
                검색한 단지에 대해 아래의 항목들을 입력해주세요.
            </p>
            
            <div id="div1" className="App-close" onClick={this.clickDiv1}>#교통여건[ 펼치기 ]</div>
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

            <div id="div2" className="App-close" onClick={this.clickDiv2}>#주변환경[ 펼치기 ]</div>
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
            

            <div id="div3" className="App-close" onClick={this.clickDiv3}>#동/층 정보[ 펼치기 ]</div>
            <div id="div31" className={this.state.classNm3}>
                거주 하셨던 동, 층 정보를 입력해 주세요.<br/>
                <table> 
                    <tbody>
                        <tr> 
                            <td style={{width: 150}}> {<Select options={optionsDong}/>} </td>
                            <td style={{width: 150}}> {<Select options={optionsFloor} />} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <br/>
            <code className="btnNext" onClick={this.clickPrev}>←이전</code>
            <code className="btnNext" onClick={this.clickNext}>다음 →</code>
        </div>
        );
    }
}

export default Step2;
