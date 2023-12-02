import { useState } from "react"
import Header from "./info/Header"
import "./MainPage.css"
import { useEffect } from "react"
import $ from 'jquery'
import Footer from "./info/Footer"


const MainPage = ()=>{


    useEffect(() =>{
        var headerHeigth = $("#header").height()
        $("#choose-lesson-btn").css("top", headerHeigth + 85)

        window.onresize = function(){
            var headerHeigth = $("#header").height()
            $("#choose-lesson-btn").css("top", headerHeigth + 85)
        }

        $(".subj-card").hover(function(){
            $(this).children().removeClass("hidden-subj-info");
        }, function(){
            $(this).children(".add-subj-info").addClass("hidden-subj-info");
        })
    })

    const subjs = [
        {name:"Алгоритм быстрого возведения в степень",
        desc:"Алгоритм для быстрого возведения в степень по модулю больших чисел"},
        {name:"Алгоритм Миллера-Рабина",
        desc:"Алгоритм для проверки больших чисел на простоту"},
        {name:"Нейрон OR и XOR",
        desc:"Результаты выполнения операций OR и XOR и их графики"},
        {name:"Градиент",
        desc:"Нахождение градиента в точке и градиентного спуска с указанным шагом"},
        {name:"Линейная регрессия",
        desc:"Предсказывание нзачений для фунции и график"}
    ]

    return(
        <div id="mainPage">
            <Header/>

            <div className="container-fluid subjects-holder">
                <div className="kripta-components">
                    <div className="row justify-content-start">
                        <div className="col-4 col-md-2 subj-card">
                            <span className="col-12">{subjs[0].name}</span>

                            <div className="col-12 hidden-subj-info add-subj-info">
                                <span className="text-center text-wrap col-12 col-md-6 ">{subjs[0].desc}</span>

                                <div className="col-12 col-md-12 row justify-content-center ">
                                    <a href="/quickExp" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-4 col-md-2 subj-card">
                            <span className="col-12">{subjs[1].name}</span>

                            <div className="col-12 hidden-subj-info add-subj-info">
                                <span className="text-center text-wrap col-12 col-md-6 ">{subjs[1].desc}</span>

                                <div className="col-12 col-md-12 row justify-content-center ">
                                    <a href="/primeCheck" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="neuro-components">
                    <div className="row justify-content-start">
                        <div className="col-4 col-md-2 subj-card">
                            <span className="col-12">{subjs[2].name}</span>

                            <div className="col-12 hidden-subj-info add-subj-info">
                                <span className="text-center text-wrap col-12 col-md-6 ">{subjs[2].desc}</span>

                                <div className="col-12 col-md-12 row justify-content-center ">
                                    <a href="/soloNeuron" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-4 col-md-2 subj-card">
                            <span className="col-12">{subjs[3].name}</span>

                            <div className="col-12 hidden-subj-info add-subj-info">
                                <span className="text-center text-wrap col-12 col-md-6 ">{subjs[3].desc}</span>

                                <div className="col-12 col-md-12 row justify-content-center ">
                                    <a href="/gradient" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 col-md-2 subj-card">
                            <span className="col-12">{subjs[4].name}</span>

                            <div className="col-12 hidden-subj-info add-subj-info">
                                <span className="text-center text-wrap col-12 col-md-6 ">{subjs[4].desc}</span>

                                <div className="col-12 col-md-12 row justify-content-center ">
                                    <a href="/linregr" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <Footer/>
        </div>
    )
}


export default MainPage