import { useEffect, useState } from "react"
import Header from "../header/Header"
import "./QuickExp.css"
import $ from "jquery"
import AnyChart from "anychart-react"
import anychart from 'anychart'

const QuickExpPage = ()=>{

    const [quickExpA, setQuickExpA] = useState(0)
    const [quickExpB, setQuickExpB] = useState(0)
    const [quickExpAnswer, setQuickExpAnswer] = useState(0)

    const quickExpRequest = async ()=>{
        $.get(`http://localhost:8080/quickExp?a=${quickExpA}&b=${quickExpB}`, function(data){
            setQuickExpAnswer(data)
        });

        $("#quickExpAnswer").removeClass("answer-field-hidden")
    }


    const [quickExpModA, setQuickExpModA] = useState(0)
    const [quickExpModB, setQuickExpModB] = useState(0)
    const [quickExpModN, setQuickExpModN] = useState(0)
    const [quickExpModAnswer, setQuickExpModAnswer] = useState(0)

    const quickExpModRequest = async()=>{
        $.get(`http://localhost:8080/quickExpMod?a=${quickExpModA}&b=${quickExpModB}&n=${quickExpModN}`, function(data){
            setQuickExpModAnswer(data)
        });

        $("#quickExpModAnswer").removeClass("answer-field-hidden")
    }


    let quickAlgStage = anychart.graphics.create();
    let longAlgStage = anychart.graphics.create();


    const [quickExpModGrLen, setQuickExpModGrLen] = useState(0)
    const [quickExpModGrStep, setQuickExpModGrStep] = useState(0)
    const [quickExpModGrCount, setQuickExpModGrCount] = useState(0)
    const [quickExpModChart , setQuickExpModChart] = useState(anychart.line())

    quickExpModChart.bounds(1, 0, '100%', '50%');
    
    const quickExpModStatsRequest = async()=>{
        $.get(`http://localhost:8080/quickExpModStats?length=${quickExpModGrLen}&step=${quickExpModGrStep}&count=${quickExpModGrCount}`, 
        function(data){
            var chartData = new Array()
            for(let i=0;i<data["quickTimes"].length;i++){
                chartData.push([data["numsLength"][i], data["quickTimes"][i]])
            }
            quickExpModChart.removeAllSeries()
            quickExpModChart.line(chartData)
        });
    }

    const [quickExpAndModGrLen, setQuickExpAndModGrLen] = useState(0)
    const [quickExpAndModGrStep, setQuickExpAndModGrStep] = useState(0)
    const [quickExpAndModGrCount, setQuickExpAndModGrCount] = useState(0)
    const [quickExpAndModChart , setQuickExpAndModChart] = useState(anychart.line())

    quickExpAndModChart.bounds(1, 0, '100%', '50%');
    const quickExpAndModStatsRequest = async()=>{
        $.get(`http://localhost:8080/quickExpAndModStats?length=${quickExpAndModGrLen}&step=${quickExpAndModGrStep}&count=${quickExpAndModGrCount}`, 
        function(data){
            var quickChartData = new Array()
            var longChartData = new Array()

            for(let i=0;i<data["quickTimes"].length;i++){
                quickChartData.push([data["numsLength"][i], data["quickTimes"][i]])
                longChartData.push([data["numsLength"][i], data["longTimes"][i]])
            }
            quickExpAndModChart.removeAllSeries()
            quickExpAndModChart.legend(true)
            var quickSeries = quickExpAndModChart.line(quickChartData)
            var longSeries = quickExpAndModChart.line(longChartData)
            quickSeries.name("a^b mod m")
            longSeries.name("(a^b) mod m")
            quickSeries.normal().stroke("#04b404");
            longSeries.normal().stroke("#ff2400");
        });
    }

    useEffect(()=>{
        quickExpModChart.xAxis().title("битовая длина числа")
        quickExpModChart.yAxis().title("время выполнения алгоритма в наносекундах")

        quickExpAndModChart.xAxis().title("битовая длина числа")
        quickExpAndModChart.yAxis().title("время выполнения алгоритма в наносекундах")
    })

    const copyAnswer = (text)=>{
        navigator.clipboard.writeText(text)
    }

    return(
        <div>
            <Header/>
            <h4 className="mt-3">Решение задачи про быстрое возведение в степень</h4>

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-6 justify-content-center quick-exp-container">
                        <div className="col-12">
                            <span className="col-6 fw-bold">Быстрое возведение числа в степень</span>
                        </div>
                        
                        <div className="col-12 mt-2">
                            <input onChange={()=>setQuickExpA($("#quickExpAInput").val())} id="quickExpAInput" type="number" placeholder="Число" className="col-6"/>
                            <input onChange={()=>setQuickExpB($("#quickExpBInput").val())} id="quickExpBInput" type="number" placeholder="Степень" className="col-6"/>
                        </div>
                        
                        <div className="col-12 answer-field-hidden" id="quickExpAnswer">
                            <span className="text-wrap">{quickExpA} в степени {quickExpB} будет 
                            {quickExpAnswer.toString(10).length > 15?
                            quickExpAnswer.toString(10).substring(0, 15) +"...":quickExpAnswer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={quickExpRequest}>
                                Посчитать
                            </button>
                            <button className="btn calculate-btn" onClick={()=>copyAnswer(quickExpAnswer)}>
                               Копировать ответ
                            </button>
                        </div>
                        
                    </div>

                    <div className="col-6 justify-content-center quick-exp-container">
                        <div className="col-12">
                            <span className="col-6 fw-bold">Быстрое возведение числа в степень по модулю</span>
                        </div>
                        
                        <div className="col-12 mt-2">
                            <input onChange={()=>setQuickExpModA($("#quickExpModAInput").val())} id="quickExpModAInput" type="number" placeholder="Число" className="col-6"/>
                            <input onChange={()=>setQuickExpModB($("#quickExpModBInput").val())} id="quickExpModBInput" type="number" placeholder="Степень" className="col-6"/>
                            <input onChange={()=>setQuickExpModN($("#quickExpModNInput").val())} id="quickExpModNInput" type="number" placeholder="Модуль" className="col-6"/>
                        </div>
                        
                        <div className="col-12 answer-field-hidden" id="quickExpModAnswer">
                            <span className="text-wrap">{quickExpModA} в степени {quickExpModB} по модулю {quickExpModN} будет {quickExpModAnswer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={quickExpModRequest}>
                                Посчитать
                            </button>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        
            <hr size="4" className="mt-5"/>
            <h3 className="text-center">График времени выполнения алгоритма в зависимости от битовой длины числа</h3>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 input-data-area">
                        <div className="input-data-fields mt-3">
                            <span className="col-12">Введите данные</span>
                            <input onChange={()=>setQuickExpModGrLen($("#firstNumLengthInput").val())} id="firstNumLengthInput" className="col-12 mt-2" type="number" placeholder="Длина первого числа"/>
                            <input onChange={()=>setQuickExpModGrStep($("#stepInput").val())} id="stepInput" className="col-12 mt-2" type="number" placeholder="Шаг длины"/>
                            <input onChange={()=>setQuickExpModGrCount($("#countInput").val())} id="countInput" className="col-12 mt-2 mb-2" type="number" placeholder="Количество"/>
                            <button className="btn calculate-btn col-12" onClick={quickExpModStatsRequest}>
                                Посчитать
                            </button>
                        </div>
                    </div>

                    <div className="col-9 graphics-area mt-3">
                        <AnyChart
                            id="quickGraph"
                            instance={quickAlgStage}
                            width={800}
                            height={600}
                            charts={[quickExpModChart]}
                        />
                    </div>
                </div>
            </div>

            <hr size="4" className="mt-5"/>
            <h3 className="text-center">График сравнения времени выполнения алгоритмов</h3>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-3 input-data-area">
                        <div className="input-data-fields mt-3">
                            <span className="col-12">Введите данные</span>
                            <input onChange={()=>setQuickExpAndModGrLen($("#firstNumLengthInput2").val())} id="firstNumLengthInput2" className="col-12 mt-2" type="number" placeholder="Длина первого числа"/>
                            <input onChange={()=>setQuickExpAndModGrStep($("#stepInput2").val())} id="stepInput2" className="col-12 mt-2" type="number" placeholder="Шаг длины"/>
                            <input onChange={()=>setQuickExpAndModGrCount($("#countInput2").val())} id="countInput2" className="col-12 mt-2 mb-2" type="number" placeholder="Количество"/>
                            <button className="btn calculate-btn col-12" onClick={quickExpAndModStatsRequest}>
                                Посчитать
                            </button>
                        </div>
                    </div>

                    <div className="col-9 graphics-area mt-3">
                        <AnyChart
                            id="longGraph"
                            instance={longAlgStage}
                            width={800}
                            height={600}
                            charts={[quickExpAndModChart]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickExpPage