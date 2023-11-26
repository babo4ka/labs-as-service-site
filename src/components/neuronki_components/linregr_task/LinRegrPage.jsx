import { useEffect, useState } from "react"
import "./LinRegr.css"
import $ from 'jquery'
import AnyChart from "anychart-react"
import anychart from 'anychart'

const LinRegrPage = ({anotherTasks})=>{

    useEffect(() =>{
        linregChart.background().fill("rgba(189, 189, 189, 0)")
        document.body.style.background = "black"

        var elems = document.getElementsByClassName("calculate-btn")
  
        Array.from(elems).forEach(el => {
             el.addEventListener("mousemove", fCardRotate);
             el.addEventListener("mouseout", fCardDefault);
         });
    })

    const [linregrAnswer, setLinRegrAnswer] = useState(0)
    const operateLinRegrOnex = () =>{
        const input_x = parseFloat($("#x-inp").val())

        const expect = Math.pow(Math.cos(input_x + 3), 2) * Math.pow(2, input_x-3)

        const array = [input_x]
        const x = encodeURIComponent(JSON.stringify(array))
        $.get(`http://localhost:8080/operateLinRegr?x=${x}`, function(data){
            data = JSON.parse(data)
            setLinRegrAnswer(`ожидаемый ответ: ${expect} полученный ответ: ${data["answers"][0]}`)

            $("#linregrAnswer").removeClass("answer-field-hidden")
        })

    }

    const func = (x)=>{
       return  Math.pow(Math.cos(x + 3), 2) * Math.pow(2, x-3)
    }

    const linregStage = anychart.graphics.create()
    const linregChart = anychart.scatter()
    const operateLinRegr = () =>{
        var start = -10
        var end = 10
        var arrLength = parseInt($("#count-for-linreg-inp").val())
        var step = (end - start) / arrLength
        var current = start

        var array = Array.from({length: arrLength}, ()=>{
            var num = current
            current += step
            return num
        })


        const expect = array.map(el => func(el))

        const x = encodeURIComponent(JSON.stringify(array))

        $.get(`http://localhost:8080/operateLinRegr?x=${x}`, function(data){
            data = JSON.parse(data)

            const actualDots = data["answers"].map((answer, index) =>({
                x:array[index],
                value:answer
            }))
    
            const expectDots = expect.map((ex, index) => ({
                x:array[index],
                value:ex
            }))
    
            linregChart.removeAllSeries()
            linregChart.legend(true)
            var seriesActual = linregChart.marker(actualDots)
            var sereisExpect = linregChart.marker(expectDots)
            seriesActual.normal().fill("red")
            sereisExpect.normal().fill("green")
            seriesActual.name("полученные значения")
            sereisExpect.name("ожидаемые значения")
        })
    }

    function fCardRotate(ev) {
        this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2)}deg) rotatex(${((ev.offsetY - this.offsetHeight / 2)) * -1}deg)`;
    }
    
    function fCardDefault() {
        this.style.transform = ``;
    }

    return(
        <div id="linRegrPage">
            <div className="container-fluid">
                <div className="row text-center text-md-start">
                    <div className="col-12">
                        <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>
                    </div>
                    
                    <div className="col-12 mt-3">
                        <a href={`${anotherTasks[0].link}`} className="another-task-btn">{anotherTasks[0].name} &rarr;</a>
                        <a href={`${anotherTasks[1].link}`} className="another-task-btn">{anotherTasks[1].name} &rarr;</a>
                    </div>
                    
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center mx-auto">

                    <div className="col-12 row justify-content-center mx-auto text-center">
                        <span className="col-6 fw-bold" style={{color:"#fcfbfc"}}>Предсказывание значений для следующей функции</span>
                    </div>

                    <div className="col-12 row justify-content-center mx-auto">
                        <img className="col-6" src={require('./linreg_func.png')} alt="" />
                    </div>

                    <div className="col-6 operate-container">

                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Предсказание значения функции и реальный результат</span>
                        </div>

                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="x-inp" min="0" max="1" type="number" placeholder="x" className="col-2 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="linregrAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{linregrAnswer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={operateLinRegrOnex}>
                                Вычислить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-5 mb-5 center-line"/>
            <h3 className="text-center" style={{color:"#fcfbfc"}}>График сравнения значений</h3>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 start-operating-area-linregr">
                        <div className="input-data-info text-center">
                            <span className="col-12  fw-bold" style={{color:"#fcfbfc"}}>Мы сгенерируем введённое количество значений<br/>
                            и отобразим на графике сравнение между предсказанными и ожидаемыми ответами</span>
                        </div>

                        <div className="col-12 mt-2 row justify-content-center mx-auto">
                                <input id="count-for-linreg-inp" max="15" className="col-3 arg-inp" type="number" placeholder="кол-во"/>
                        </div>

                        <button className="btn calculate-btn" onClick={operateLinRegr}>
                            Показать
                        </button>
                    </div>

                    <div className="col-12 col-md-9 mt-3 text-center">
                        <AnyChart
                            id="linregrGraph"
                            instance={linregStage}
                            width={800}
                            height={500}
                            charts={[linregChart]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinRegrPage