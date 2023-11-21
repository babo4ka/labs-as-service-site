import Header from "./header/Header"
import SubjectCard from "./SubjectCard"
import "./MainPage.css"

const MainPage = ()=>{


    return(
        <div>
            <Header/>
            <h4 className="mt-3 text-center">Лабораторные работы по предмету "Криптографические методы защиты информации"</h4>
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-start text-wrap">Алгоритм быстрого возведения в степень</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-6">Было лень искать определение, просто алгоритм,<br/> 
                            который возводит в степень быстрее,<br/> 
                            чем стандартный и работает с большими числами<br/>
                            </span>
                            <div className="col-6 row justify-content-center">
                                <a href="/quickExp" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="mt-5 right-line line-buttom"/> */}

                    <hr className="mt-5 mb-5 right-line line-top"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-end text-wrap">Алгоритм Миллера-Рабина</h2>
                        <div className="col-6 row justify-content-center mt-5">
                            <a href="/primeCheck" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                        </div>
                        
                        <div className="col-6 info_about_task mt-5">
                            <span className="text-center text-wrap col-6">Краткое описание алгоритма<br/>
                                блабла бла балб ала блб ал абла бл<br/>
                                юбдбла ла ба лабл выалывф ф</span>
                        </div>
                    </div>

                    {/* <hr className="mt-5 left-line line-buttom"/> */}
                    
                    
                </div>
                
            </div>

            <h4 className="mt-5 text-center">Лабораторные работы по предмету "Нейронные сети и их приложения"</h4>
            
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-start text-wrap">Нейроны для вычисления операций OR и XOR</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-6">Тут мне тоже лень писать<br/> 
                            дадад))00)<br/> 
                            </span>
                            <div className="col-6 row justify-content-center">
                                <a href="/soloNeuron" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="mt-5 mb-5 right-line line-buttom"/> */}

                    <hr className="mt-5 mb-5 right-line line-top"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-end text-wrap">Вычисление градиента и градиентного спуска</h2>
                        <div className="col-6 row justify-content-center mt-5">
                            <a href="/gradient" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                        </div>
                        
                        <div className="col-6 info_about_task mt-5">
                            <span className="text-center text-wrap col-6">Краткое описание алгоритма<br/>
                                блабла бла балб ала блб ал абла бл<br/>
                                юбдбла ла ба лабл выалывф ф</span>
                        </div>
                    </div>

                    {/* <hr className="mt-5 mb-5 left-line line-buttom"/> */}

                    <hr className="mt-5 mb-5 left-line line-top"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-start text-wrap">Задача линейной регрессии</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-6">Тут мне тоже лень писать<br/> 
                            дадад))00)<br/> 
                            </span>
                            <div className="col-6 row justify-content-center">
                                <a href="/quickExp" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="mt-5 mb-5 right-line line-buttom"/> */}
                </div>
            </div>
        </div>
    )
}


export default MainPage