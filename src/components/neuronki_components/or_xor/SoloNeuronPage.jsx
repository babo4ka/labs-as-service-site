import "./SoloNeuron.css"
import { useEffect, useState } from "react";
import $ from 'jquery'
import AnyChart from "anychart-react"
import anychart from 'anychart'

const SoloNeuronPage = () =>{

    useEffect(()=>{
        orChart.background().fill("rgba(189, 189, 189, 0)")
        xorChart.background().fill("rgba(189, 189, 189, 0)")
        document.body.style.background = "black"
    })


    const [ORanswer, setORanswer] = useState(0)
    const operateOR = ()=>{
        const arrX1 = []
        arrX1.push(parseFloat($("#x1_inp").val()))
        const arrX2 = []
        arrX2.push(parseFloat($("#x2_inp").val()))

        var x1 = encodeURIComponent(JSON.stringify(arrX1))
        var x2 = encodeURIComponent(JSON.stringify(arrX2))

        $.get(`http://localhost:8080/operateOR?x1=${x1}&x2=${x2}`, function(data){
            setORanswer(JSON.parse(data)["answers"][0])

            $("#operateOrAnswer").removeClass("answer-field-hidden")
        })
    }

    const [XORanswer, setXORanswer] = useState(0)
    const operateXOR = ()=>{
        const arrX1 = []
        arrX1.push(parseFloat($("#x1_xor_inp").val()))
        const arrX2 = []
        arrX2.push(parseFloat($("#x2_xor_inp").val()))

        var x1 = encodeURIComponent(JSON.stringify(arrX1))
        var x2 = encodeURIComponent(JSON.stringify(arrX2))

        $.get(`http://localhost:8080/operateXOR?x1=${x1}&x2=${x2}`, function(data){
            setXORanswer(JSON.parse(data)["answers"][0])

            $("#operateXOrAnswer").removeClass("answer-field-hidden")
        })
    }


    const orStage = anychart.graphics.create()

    const orChart = anychart.scatter()
    const operateORWithGraphics = ()=>{
        var x1arr = Array.from({length: parseInt($("#count-for-or-inp").val())}, ()=> 
        Math.round((Math.random() + Number.EPSILON) * 100) / 100)

        var x2arr = Array.from({length: parseInt($("#count-for-or-inp").val())}, ()=> 
        Math.round((Math.random() + Number.EPSILON) * 100) / 100)

        var x1 = encodeURIComponent(JSON.stringify(x1arr))
        var x2 = encodeURIComponent(JSON.stringify(x2arr))

        $.get(`http://localhost:8080/operateOR?x1=${x1}&x2=${x2}`, function(data){
            data = JSON.parse(data)

            var dots0 = data["dots0"].map((dot) => ({
                x:dot[0],
                value:dot[1]
            }))

            var dots1 = data["dots1"].map((dot) => ({
                x:dot[0],
                value:dot[1]
            }))

            orChart.removeAllSeries()
            var series0 = orChart.marker(dots0)
            var series1 = orChart.marker(dots1)
            var line = orChart.line([[0, 0.5], [0.5, 0]])
            line.normal().stroke("#FFFFFF")
            series0.normal().fill("red")
            series1.normal().fill("green")
        })
    }

    const xorStage = anychart.graphics.create()

    const xorChart = anychart.scatter()
    const operateXORWithGraphics = ()=>{
        var x1arr = Array.from({length: parseInt($("#count-for-xor-inp").val())}, ()=> 
        Math.round((Math.random() + Number.EPSILON) * 100) / 100)

        var x2arr = Array.from({length: parseInt($("#count-for-xor-inp").val())}, ()=> 
        Math.round((Math.random() + Number.EPSILON) * 100) / 100)

        var x1 = encodeURIComponent(JSON.stringify(x1arr))
        var x2 = encodeURIComponent(JSON.stringify(x2arr))

        $.get(`http://localhost:8080/operateXOR?x1=${x1}&x2=${x2}`, function(data){
            data = JSON.parse(data)
            
            var dots0 = data["dots0"].map((dot) => ({
                x:dot[0],
                value:dot[1]
            }))

            var dots1 = data["dots1"].map((dot) => ({
                x:dot[0],
                value:dot[1]
            }))
            
            xorChart.removeAllSeries()
            var series0 = xorChart.marker(dots0)
            var series1 = xorChart.marker(dots1)
            var line1 = xorChart.line([[0, 0.5], [0.5, 0]])
            var line2 = xorChart.line([[0.5, 1], [1, 0.5]])
            line1.normal().stroke("#FFFFFF")
            line2.normal().stroke("#FFFFFF")
            series0.normal().fill("red")
            series1.normal().fill("green")
        })
    }

    return(
        <div id="soloNeuronPage">
            <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>

            <div className="container mt-5">
                <div className="row justify-content-center mx-auto">
                    <div className="col-6 operate-container">
                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Вычисление x1 OR x2<br/>
                            Введите x1 и x2</span>
                        </div>

                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="x1_inp" min="0" max="1" type="number" placeholder="x1" className="col-4 arg-inp"/>
                            <input id="x2_inp" min="0" max="1" type="number" placeholder="x2" className="col-4 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="operateOrAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{$("#x1_inp").val() + " OR " + $("#x2_inp").val() + " = " + ORanswer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={operateOR}>
                                Вычислить
                            </button>
                        </div>
                    </div>

                    <div className="col-6 operate-container">
                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Вычисление x1 XOR x2<br/>
                            Введите x1 и x2</span>
                        </div>

                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="x1_xor_inp" min="0" max="1" type="number" placeholder="x1" className="col-4 arg-inp"/>
                            <input id="x2_xor_inp" min="0" max="1" type="number" placeholder="x2" className="col-4 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="operateXOrAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{$("#x1_xor_inp").val() + " XOR " + $("#x2_xor_inp").val() + " = " + XORanswer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={operateXOR}>
                                Вычислить
                            </button>
                        </div>
                    </div>
                </div>

                
            </div>

            <hr className="mt-5 mb-5 center-line"/>
            <h3 className="text-center" style={{color:"#fcfbfc"}}>График нейрона OR</h3>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 start-operating-area">
                        <div className="input-data-info text-center">
                            <span className="col-12  fw-bold" style={{color:"#fcfbfc"}}>Мы сгенерируем введённое количество значений x1 и x2<br/>
                            и отобразим их на графике</span>
                        </div>

                        <div className="col-12 mt-2 row justify-content-center mx-auto">
                                <input id="count-for-or-inp" max="15" className="col-3 arg-inp" type="number" placeholder="кол-во"/>
                        </div>

                        <button className="btn calculate-btn" onClick={operateORWithGraphics}>
                                Показать
                        </button>
                    </div>

                    <div className="col-9 mt-3 text-center">
                        <AnyChart
                            id="orGraph"
                            instance={orStage}
                            width={800}
                            height={500}
                            charts={[orChart]}
                        />
                    </div>
                </div>
            </div>

            <hr className="mt-5 mb-5 center-line"/>
            <h3 className="text-center" style={{color:"#fcfbfc"}}>График нейрона XOR</h3>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-9 mt-3 text-center">
                        <AnyChart
                            id="xorGraph"
                            instance={xorStage}
                            width={800}
                            height={500}
                            charts={[xorChart]}
                        />
                    </div>

                    <div className="col-3 start-operating-area">
                        <div className="input-data-info text-center">
                            <span className="col-12  fw-bold" style={{color:"#fcfbfc"}}>Мы сгенерируем введённое количество значений x1 и x2<br/>
                            и отобразим их на графике</span>
                        </div>

                        <div className="col-12 mt-2 row justify-content-center mx-auto">
                            <input id="count-for-xor-inp" max="15" className="col-3 arg-inp" type="number" placeholder="кол-во"/>
                        </div>

                        <button className="btn calculate-btn" onClick={operateXORWithGraphics}>
                            Показать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloNeuronPage