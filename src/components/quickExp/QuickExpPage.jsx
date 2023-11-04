import { useState } from "react"
import Header from "../header/Header"
import "./QuickExp.css"
import $ from "jquery"


const QuickExpPage = ()=>{

    const [quickExpA, setQuickExpA] = useState(0)
    const [quickExpB, setQuickExpB] = useState(0)
    const [quickExpAnswer, setQuickExpAnswer] = useState(0)

    const quickExpRequest = async ()=>{
        $.get(`http://localhost:8080/quickExp?a=${quickExpA}&b=${quickExpB}`, function(data){
            setQuickExpAnswer(data)
        });

        $("#quickExpAnswer").removeClass("answer-field-hidden")


        // console.log(`192.168.0.103:8080/quickExp?a=${quickExpA}&b=${quickExpB}`)

        // await fetch(`192.168.0.103:8080/quickExp?a=${quickExpA}&b=${quickExpB}`, {
        //     method:"GET"
        // }).then((data) =>{
        //     console.log(data)
        // })
    }

    return(
        <div>
            <Header/>
            <h4 className="mt-3">Решение задачи про быстрое возведение в степень</h4>

            <div className="container mt-3">
                <div className="row justify-content-center quick-exp-container">
                    <div className="col-12">
                        <span className="col-6 fw-bold">Быстрое возведение числа в степень</span>
                    </div>
                    
                    <div className="col-12 mt-2">
                        <input onChange={()=>setQuickExpA($("#quickExpAInput").val())} id="quickExpAInput" type="number" placeholder="Число" className="col-6"/>
                        <input onChange={()=>setQuickExpB($("#quickExpBInput").val())} id="quickExpBInput" type="number" placeholder="Степень" className="col-6"/>
                    </div>
                    
                    <div className="col-12 answer-field-hidden" id="quickExpAnswer">
                        <span>{quickExpA} в степени {quickExpB} будет {quickExpAnswer}</span>
                    </div>

                    <div className="col-12 mt-2 mb-2">
                        <button className="btn calculate-btn" onClick={quickExpRequest}>
                            Посчитать
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default QuickExpPage