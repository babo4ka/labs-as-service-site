import Header from "./header/Header"
import SubjectCard from "./SubjectCard"

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
                    <SubjectCard subjectInfo={subjects[0]}></SubjectCard>
                    <SubjectCard subjectInfo={subjects[1]}></SubjectCard>
                </div>
                
            </div>
            
        </div>
    )
}


export default MainPage