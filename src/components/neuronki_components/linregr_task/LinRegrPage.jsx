import { useEffect, useState } from "react"
import "./LinRegr.css"
import $ from 'jquery'
import AnyChart from "anychart-react"
import anychart from 'anychart'

const LinRegrPage = ()=>{

    useEffect(() =>{
        document.body.style.background = "linear-gradient(135deg, rgba(1,89,93,1), rgba(143,29,208,1))"
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
        var array = Array.from({length: parseInt($("#count-for-linreg-inp").val())}, ()=> 
        Math.round((Math.random() + Number.EPSILON) * 100) / 100)

        const expect = array.map(el => func(el))

        const x = encodeURIComponent(JSON.stringify(array))

        $.get(`http://localhost:8080/operateLinRegr?x=${x}`, function(data){
            data = JSON.parse(data)
            console.log(array)
            console.log(expect)
            console.log(data["answers"])
        })

    }


    return(
        <div id="linRegrPage">
            <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>

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
                    <div className="col-3 start-operating-area-linregr">
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

                    <div className="col-9 mt-3 text-center">
                        <AnyChart
                            id="linregrGraph"
                            // instance={orStage}
                            // width={800}
                            // height={500}
                            // charts={[orChart]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinRegrPage