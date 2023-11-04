import "./Header.css"

const Header = () =>{

    return(
        <div className="container-fluid header">
            <div className="row">
                <div className="col-8 row">
                    <div className="info-field">
                        <span>Иванов Евгений Александрович</span>
                        <span id="group-info">Группа 09-151, 3 курс</span>
                    </div>
                </div>

                <div className="col-4">
                    <div className="info-field">
                        <span>Телефон: 8-929-720-55-22</span>
                        <div>
                            <a href="https://vk.com/ya_tut_babo4ka" className="link">Вконтакте</a>
                            <a href="https://t.me/ya_tut_babo4ka" className="link">Телеграм</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header