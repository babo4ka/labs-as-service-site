import "./Header.css"

const Header = () =>{

    return(
        <div className="container-fluid header" id="header">
            <div className="row align-items-center">
                <div className="col-12 row mt-3 align-items-center">
                    <h3 className="col-lg-8 col-12 text-wrap text-center">Что-то типо моих лабораторных работ</h3>
                    <span className="col-lg-4 col-12 text-center">8-929-720-55-22</span>
                </div>


                <div className="col-lg-6 col-12 mt-5">
                    <div className="info-field">
                        <span id="name_" className="text-wrap text-center">Иванов Евгений Александрович</span>
                    </div>
                </div>

                <div className="col-lg-6 col-12 mt-5">
                    <span id="about" className="text-center text-wrap">Студент 3 курса Казанского Федерального Университета<br/>
                    Институт вычислительной математики и информационных технологий<br/>
                    Направление подготовки: прикладаня информатика<br/>
                    На удивление всё ещё не отчислен</span>
                </div>

            </div>
        </div>
    )
}


export default Header