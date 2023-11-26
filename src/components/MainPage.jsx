import { useState } from "react"
import Header from "./info/Header"
import "./MainPage.css"
import { useEffect } from "react"
import $ from 'jquery'
import Footer from "./info/Footer"

const MainPageContent = ({element})=>{

    const elements = [<KriptaContent/>, <NeuronetsContent/>]

    return(
        <div>
            {elements[element]}
        </div>
    )
}

const KriptaContent = () =>{
    return(
        <div className="mb-5">
            <h4 className="mt-3 text-center col-6 mx-auto">Лабораторные работы по предмету "Криптографические методы защиты информации"</h4>
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder mx-auto justify-content-center align-items-center">
                        <h2 className="col-12 text-center text-md-start">Алгоритм быстрого возведения в степень</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-12 col-md-6">Было лень искать определение, просто алгоритм,<br/> 
                            который возводит в степень быстрее,<br/> 
                            чем стандартный и работает с большими числами<br/>
                            </span>
                            <div className="col-12 col-md-6 row justify-content-center">
                                <a href="/quickExp" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>


                    <hr className="mt-5 mb-5 right-line line-top"></hr>

                    <div className="col-12 row one-task-holder mx-auto justify-content-center align-items-center">
                        <h2 className="col-12 text-center text-md-end text-wrap">Алгоритм Миллера-Рабина</h2>
                        <div className="col-12 col-md-6 row justify-content-center mt-5">
                            <a href="/primeCheck" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                        </div>
                        
                        <div className="col-12 col-md-6 info_about_task mt-5">
                            <span className="text-center text-wrap col-12 col-md-6">Краткое описание алгоритма<br/>
                                блабла бла балб ала блб ал абла бл<br/>
                                юбдбла ла ба лабл выалывф ф</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const NeuronetsContent = () =>{
    return(
        <div className="mb-5">
            <h4 className="mt-3 text-center col-6 mx-auto">Лабораторные работы по предмету "Нейронные сети и их приложения"</h4>
            
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder mx-auto justify-content-center align-items-center">
                        <h2 className="col-12 text-center text-md-start text-wrap">Нейроны для вычисления операций OR и XOR</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-12 col-md-6">Тут мне тоже лень писать<br/> 
                            дадад))00)<br/> 
                            </span>
                            <div className="col-12 col-md-6 row justify-content-center">
                                <a href="/soloNeuron" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-5 mb-5 right-line line-top"></hr>

                    <div className="col-12 row one-task-holder mx-auto justify-content-center align-items-center">
                        <h2 className="col-12 text-center text-md-end text-wrap">Вычисление градиента и градиентного спуска</h2>
                        <div className="col-12 col-md-6 row justify-content-center mt-5">
                            <a href="/gradient" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                        </div>
                        
                        <div className="col-12 col-md-6 info_about_task mt-5">
                            <span className="text-center text-wrap col-12 col-md-6">Краткое описание алгоритма<br/>
                                блабла бла балб ала блб ал абла бл<br/>
                                юбдбла ла ба лабл выалывф ф</span>
                        </div>
                    </div>

                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder mx-auto justify-content-center align-items-center">
                        <h2 className="col-12 text-center text-md-start text-wrap">Задача линейной регрессии</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-12 col-md-6">Тут мне тоже лень писать<br/> 
                            дадад))00)<br/> 
                            </span>
                            <div className="col-12 col-md-6 row justify-content-center">
                                <a href="/linregr" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainPage = ()=>{

    const [currentLesson, setCurrentLesson] = useState(0)

    const changeLesson = (id) =>{
        setCurrentLesson(id)
    }

    useEffect(() =>{
        var headerHeigth = $("#header").height()
        $("#choose-lesson-btn").css("top", headerHeigth + 85)

        window.onresize = function(){
            var headerHeigth = $("#header").height()
            $("#choose-lesson-btn").css("top", headerHeigth + 85)
        }
    })

    return(
        <div>
            <Header/>
            <button  id="choose-lesson-btn" class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#chooseLessonOffcanvas" aria-controls="offcanvasExample">
                Предмет
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="chooseLessonOffcanvas" aria-labelledby="chooseLessonOffcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="chooseLessonOffcanvasLabel">Выбор предмета</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                </div>

                <div class="offcanvas-body">
                    <div class="list-group">
                        <button data-bs-dismiss="offcanvas" onClick={()=>changeLesson(0)} className="btn btn-secondary list-group-item list-group-item-action">Криптографические методы защиты информации</button>
                        <button data-bs-dismiss="offcanvas" onClick={()=>changeLesson(1)} className="btn btn-secondary list-group-item list-group-item-action">Нейронные сети и их приложения</button>
                    </div>
                </div>
            </div>

            <MainPageContent element={currentLesson}/>
            
            <Footer/>
        </div>
    )
}


export default MainPage