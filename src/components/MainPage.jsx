import Header from "./header/Header"
import SubjectCard from "./SubjectCard"
import "./MainPage.css"

const MainPage = ()=>{

    const subjects = [
        {
            name:"Быстрое возведение в степень",
            link:"/quickExp"
        },
        {
            name:"Алгоритм Миллера-Рабина",
            link:"/primeCheck"
        }
    ]

    return(
        <div>
            <Header/>
            <h4 className="mt-3 text-center">Лабораторные работы по предмету "Криптографические методы защиты информации"</h4>
            <div className="container-fluid">
                <div className="row justify-content-start">
                    <hr className="mt-5"></hr>

                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-start text-wrap">Алгоритм быстрого возведения в степень</h2>
                        <div className="col-12 row align-items-center mt-5">
                            <span className="text-center text-wrap col-6">Краткое описание алгоритма<br/>
                            блабла бла балб ала блб ал абла бл<br/>
                            юбдбла ла ба лабл выалывф ф</span>
                            <div className="col-6 row justify-content-center">
                                <a href="/quickExp" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                                {/* <SubjectCard subjectInfo={subjects[0]}></SubjectCard> */}
                            </div>
                        </div>
                    </div>

                    <hr className="mt-5"></hr>
                    <div className="col-12 row one-task-holder justify-content-center align-items-center">
                        <h2 className="col-12 text-end text-wrap">Алгоритм Миллера-Рабина</h2>
                        <div className="col-6 row justify-content-center">
                            <a href="/primeCheck" className="text-center lab-res-link">Посмотреть результаты &rarr;</a>
                            {/* <SubjectCard subjectInfo={subjects[1]}></SubjectCard> */}
                        </div>
                        
                        <div className="col-6 info_about_task">
                        <span className="text-center text-wrap col-6">Краткое описание алгоритма<br/>
                            блабла бла балб ала блб ал абла бл<br/>
                            юбдбла ла ба лабл выалывф ф</span>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}


export default MainPage