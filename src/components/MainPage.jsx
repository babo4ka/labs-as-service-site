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
            <h4 className="mt-3">Лабораторные работы по предмету "Криптографические методы защиты информации"</h4>
            <div className="container-fluid">
                <div className="row justify-content-start">

                    <div className="col-12 row one-task-holder justify-content-center mt-5 align-items-center">
                        <div className="col-6 info_about_task">
                            <span className="text-center text-wrap">Алгоритм быстрого возведения в степень</span>
                            <span className="text-center text-wrap">Краткое описание алгоритма</span>
                        </div>
                        <div className="col-6 row justify-content-center">
                            <SubjectCard subjectInfo={subjects[0]}></SubjectCard>
                        </div>
                    </div>

                    <div className="col-12 row one-task-holder justify-content-center mt-5 align-items-center">
                        <div className="col-6 row justify-content-center">
                            <SubjectCard subjectInfo={subjects[1]}></SubjectCard>
                        </div>
                        <div className="col-6 info_about_task">
                            <span className="text-center text-wrap">Алгоритм Миллера-Рабина</span>
                            <span className="text-center text-wrap">Краткое описание алгоритма</span>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}


export default MainPage