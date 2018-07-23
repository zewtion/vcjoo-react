import * as React from 'react';
import './App.css';


class Step2 extends React.Component {
    constructor(props: Readonly<{}>){
        super(props);

        this.clickDiv1 = this.clickDiv1.bind(this);
    }

    public clickPrev(){
        /* tslint:disable:no-empty */
    }
    public clickNext(){
        /* tslint:disable:no-empty */
    }
    public clickDiv1(){

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
            <div id="div11" className="App-child" style={{display : 'none'}}>
                대중교통 이용이나, 자동차 운행과 같은 교통여건에 대해 평가해주세요.(50자이상)<br/>
                <form className="rating">
                    <label>
                        <input type="radio" name="stars" value="1" />
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="2" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="3" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>   
                    </label>
                    <label>
                        <input type="radio" name="stars" value="4" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="5" />
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

            <div id="div2" className="App-close">#주변환경[ 펼치기 ]</div>
            <div id="div21" className="App-child" style={{display : 'block'}}>
            -
            </div>
            

            <div id="div3" className="App-close">#동/층 정보[ 펼치기 ]</div>
            <div id="div31" className="App-child" style={{display : 'none'}}>
            -
            </div>
            
            <br/>
            <code className="btnNext" onClick={this.clickPrev}>←이전</code>
            <code className="btnNext" onClick={this.clickNext}>다음 →</code>
        </div>
    );
  }
}

export default Step2;
