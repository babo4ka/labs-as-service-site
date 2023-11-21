import { useEffect, useState } from "react"
import "./GradientPage.css"
import $ from 'jquery'

const GradientPage = () =>{

    useEffect(()=>{
        document.body.style.background = "linear-gradient(135deg, rgba(1,89,93,1), rgba(143,29,208,1))"
    })


    const [gradientAnswer, setGradientAnswer] = useState("")
    const operateGrad = () =>{
        var dot = [[parseFloat($("#dot1-inp").val()), parseFloat($("#dot2-inp").val())],
        [parseFloat($("#dot3-inp").val()), parseFloat($("#dot4-inp").val())]]

        dot = encodeURIComponent(JSON.stringify(dot))

        const steps = $("#steps-inp").val()
        
        const request = `http://localhost:8080/${steps?"operateGradDesc?dot=" + dot + "&steps=" + steps
        :"operateGradInDot?dot=" + dot}`

        $.get(request, function(data){
            data = JSON.parse(data)

            setGradientAnswer(`${steps?"Градиентный спуск с приближением " + steps + " = ":"Градиент в заданной точке = "} 
            [${data["dot"][0]}], [${data["dot"][1]}]`)

            $("#gradAnswer").removeClass("answer-field-hidden")
        })
    }

    return(
        <div id="gradientPage">
            <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>


            <div className="container mt-5">
                <div className="row justify-content-center mx-auto">
                    <div className="col-12 row justify-content-center mx-auto text-center">
                        <span className="col-6 fw-bold" style={{color:"#fcfbfc"}}>Вычисление градиента в заданной точке на функции<br/>
                        и градиентного спуска на заданном количестве итераций</span>
                    </div>

                    <div className="col-12 row justify-content-center mx-auto">
                        <img className="col-6" src={require('./grad_func.png')} alt="" />
                    </div>

                    <div className="col-12 row justify-content-center mx-auto">
                        <div className="col-6 operate-container">
                            <div className="col-12 text-center">
                                <span className="fw-bold" style={{color:"#fcfbfc"}}>Вычисление градиента и градиентного спуска (при наличии шагов)</span>
                            </div>

                            <div className="col-12 row justify-content-center mx-auto mt-3">
                                <h1 className="col-1">[</h1>
                                <h1 className="col-1">[</h1>
                                <input id="dot1-inp" min="0" max="1" type="number" placeholder="dot1" className="col-4 arg-inp"/>
                                <input id="dot2-inp" min="0" max="1" type="number" placeholder="dot2" className="col-4 arg-inp"/>
                                <h1 className="col-1">],</h1>
                                <h1 className="col-1">[</h1>
                                <input id="dot3-inp" min="0" max="1" type="number" placeholder="dot3" className="col-4 arg-inp"/>
                                <input id="dot4-inp" min="0" max="1" type="number" placeholder="dot4" className="col-4 arg-inp"/>
                                <h1 className="col-1">]</h1>
                                <h1 className="col-1">]</h1>
                            </div>

                            <div className="col-12 row justify-content-center mx-auto mt-3">
                                <input id="steps-inp" type="number" placeholder="шаги" className="col-4 arg-inp"/>
                            </div>

                            <div className="col-12 answer-field-hidden" id="gradAnswer">
                                <span className="text-wrap" style={{color:"#fcfbfc"}}>{gradientAnswer}</span>
                            </div>

                            <div className="col-12 mt-2 mb-2">
                                <button className="btn calculate-btn" onClick={operateGrad}>
                                    Вычислить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GradientPage