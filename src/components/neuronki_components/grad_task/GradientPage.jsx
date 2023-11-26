import { useEffect, useState } from "react"
import "./GradientPage.css"
import $ from 'jquery'

const GradientPage = ({anotherTasks}) =>{

    useEffect(()=>{
        document.body.style.background = "black"

        var elems = document.getElementsByClassName("calculate-btn")
  
        Array.from(elems).forEach(el => {
             el.addEventListener("mousemove", fCardRotate);
             el.addEventListener("mouseout", fCardDefault);
         });
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

    function fCardRotate(ev) {
        this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2)}deg) rotatex(${((ev.offsetY - this.offsetHeight / 2)) * -1}deg)`;
    }
    
    function fCardDefault() {
        this.style.transform = ``;
    }

    return(
        <div id="gradientPage">
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
                                <h1 style={{color:"#fcfbfc"}}  className="col-1">[</h1>
                                <h1 style={{color:"#fcfbfc"}} className="col-1">[</h1>
                                <input id="dot1-inp" min="0" max="1" type="number" placeholder="dot1" className="col-4 arg-inp"/>
                                <input id="dot2-inp" min="0" max="1" type="number" placeholder="dot2" className="col-4 arg-inp"/>
                                <h1 style={{color:"#fcfbfc"}} className="col-1">],</h1>
                                <h1 style={{color:"#fcfbfc"}} className="col-1">[</h1>
                                <input id="dot3-inp" min="0" max="1" type="number" placeholder="dot3" className="col-4 arg-inp"/>
                                <input id="dot4-inp" min="0" max="1" type="number" placeholder="dot4" className="col-4 arg-inp"/>
                                <h1 style={{color:"#fcfbfc"}} className="col-1">]</h1>
                                <h1 style={{color:"#fcfbfc"}} className="col-1">]</h1>
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