import { useEffect, useState } from "react"
import "./PrimeChecker.css"
import $ from 'jquery'
import { copyAnswer } from "../../utils_funcs"

const PrimeCheckerPage = ({anotherTasks}) =>{

    const[answer, setAnswer] = useState("")

    const fetchCheckPrime = ()=>{
        var request = $("#num_inp").val()
        if($("#rounds_inp").val() != ""){
            request += `_${$("#rounds_inp").val()}`
        }
        
        $.get(`http://localhost:8080/isPrime?line=${request}`,
        function(data){
            setAnswer(`${data["num"]}${data["rounds"]==null?"":" раунды: " + data["rounds"]} ${data["answer"]}`)
        });

        $("#isPrimeAnswer").removeClass("answer-field-hidden")
    }

    const[generatedNum, setGeneratedNum] = useState(0)
    const generatePrimeNum = ()=>{
        $.get(`http://localhost:8080/generatePrime?length=${$("#len_inp").val()}`, function(data){
            setGeneratedNum(data)
        })

        $("#generatePrimeAnswer").removeClass("answer-field-hidden")
    }

    const[file, setFile] = useState(null)
    useEffect(()=>{
        $('.input-file input[type=file]').on('change', function(){
            let file = this.files[0];
            setFile(file)
            $(this).next().html(file.name);
        });

        document.body.style.background = "black"

        var elems = document.getElementsByClassName("calculate-btn")
  
        Array.from(elems).forEach(el => {
             el.addEventListener("mousemove", fCardRotate);
             el.addEventListener("mouseout", fCardDefault);
         });
    })

    const[fileFetchAnswer, serFileFetchAnswer] = useState(null)
    const[colContentCount, setColContentCount] = useState(0)
    const fetchPrimeForFile = async () =>{
        serFileFetchAnswer(null)
        const formData = new FormData()
        console.log(file)
        
        formData.append('file', file)


        $.ajax({
            url:"http://localhost:8080/arePrime",
            data: formData,
            type:"post",
            contentType: false, 
            processData: false,
            success:function(data){
                serFileFetchAnswer(data)
                setColContentCount(Math.ceil(data.length/3))
            }
        })
    }

    function fCardRotate(ev) {
        this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2)}deg) rotatex(${((ev.offsetY - this.offsetHeight / 2)) * -1}deg)`;
    }
    
    function fCardDefault() {
        this.style.transform = ``;
    }

    return(
        <div id="primeCheckPage">
           <div className="container-fluid">
                <div className="row text-center text-md-start">
                    <div className="col-12">
                        <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>
                    </div>
                    
                    <div className="col-12 mt-3">
                        <a href={`${anotherTasks[0].link}`} className="another-task-btn">{anotherTasks[0].name} &rarr;</a>
                    </div>
                    
                </div>
            </div>

            <h4 className="mt-3 text-center" style={{color:"#fcfbfc"}}>Проверка числа на простоту</h4>

            <div className="container mt-5 ">
                <div className="row justify-content-center mx-auto">
                    <div className="col-6 prime-check-container">
                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Введите число и (если хотите) количество раундов</span>
                        </div>
                        
                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="num_inp" type="number" placeholder="число" className="col-4 arg-inp"/>
                            <input id="rounds_inp" type="number" placeholder="раунды" className="col-4 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="isPrimeAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{answer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={fetchCheckPrime}>
                                Проверить
                            </button>
                        </div>
                    </div>

                    <div className="col-6 prime-check-container">
                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Введите длину числа для генерации</span>
                        </div>

                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="len_inp" type="number" placeholder="длина" className="col-4 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="generatePrimeAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{generatedNum.toString(10).length>15?
                            generatedNum.toString(10).substring(0,15) + "...":generatedNum}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={generatePrimeNum}>
                                Сгенерировать
                            </button>

                            <button className="btn calculate-btn" onClick={()=>copyAnswer(generatedNum)}>
                                Копировать ответ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-5 mb-5 center-line"/>
            <h4 className="mt-3 text-center" style={{color:"#fcfbfc"}}>Проверка чисел из текстового файла</h4>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div id="file_nums_form" className="col-12 file_inp_container mt-5">
                            <div className="col-12 mt-3 mb-3">
                                <span className="text-wrap fw-bold" style={{color:"#fcfbfc"}}>Выберите файл</span>
                            </div>

                            <label className="input-file">
                                <input id="file_inp" type="file" name="file"/>		
                                <span>Выберите файл</span>
                            </label>
                            
                            <div className="col-12 mt-3 mb-3">
                                <button className="btn calculate-btn" onClick={fetchPrimeForFile}>
                                    Проверить числа из файла
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 row answers_container">
                        {fileFetchAnswer==null?(
                            <span className="text-center mt-3 fw-bold" style={{color:"#fcfbfc"}}>Здесь будут отображаться ответы</span>
                        ):(
                            <table className="mt-5">
                                <th >
                                    {fileFetchAnswer.slice(0, colContentCount).map((item, index) =>(
                                        <tr >{`${item["num"]}${item["rounds"]==null?"":" раунды: " + item["rounds"]} ${item["answer"]}`}</tr>
                                    ))}
                                </th>

                                <th>
                                    {fileFetchAnswer.slice(colContentCount, colContentCount * 2).map((item, index) =>(
                                        <tr>{`${item["num"]}${item["rounds"]==null?"":" раунды: " + item["rounds"]} ${item["answer"]}`}</tr>
                                    ))}
                                </th>

                                <th>
                                    {fileFetchAnswer.slice(colContentCount*2).map((item, index)=>(
                                        <tr>{`${item["num"]}${item["rounds"]==null?"":" раунды: " + item["rounds"]} ${item["answer"]}`}</tr>
                                    ))}
                                </th>
                            </table>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimeCheckerPage