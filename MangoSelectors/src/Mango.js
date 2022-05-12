import { Button } from "react-bootstrap";
import React, { useEffect } from 'react'
import CompareModel from "./CompareModel"
//import MangoData from "./MangoData.json"
import $ from "jquery";
export default function Mango() {
const [MangoData, setMangoData] = React.useState([])
useEffect(() => {
    $.ajax({

        url: "mangodata.json",
        type: 'get',

        success: function (result) {
            console.log(result)
            setMangoData(result)
        },
        error: function () {
            alert("error");
        }
    });
  },[]);
   

    const [modalShow, setModalShow] = React.useState(false);
    const [indexarr, setindexarr] = React.useState([]);
    const [finalSelection, setfinalSelection] = React.useState([]);

    var compare = (index) => {

        let indexarrNew = [];
        if (indexarr.filter(x => x === index).length > 0) {
            indexarrNew = indexarr.filter(x => x !== index);
        } else {

            indexarrNew = indexarr.concat(index);

        }
        setindexarr(indexarrNew);

    }

    var comFunction = () => {
        let seletedItems = indexarr.map((i) => MangoData[i]);

        setfinalSelection(seletedItems);
        setModalShow(true);
    }

    console.log(indexarr)



    return (
        <div className="my-5"> {
            MangoData.map((x, index) => {
                return (
                    <div class="card mb-3" style={{ maxWidth: "60rem" }}>
                        <div class="row g-0 ">
                            < div class="col-md-3">
                                < img src={x.Mango_Image} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"> {x.Name} </h5>
                                    <ul>
                                        < li className='card-text'>
                                            <b> Description </b>: {x.Description}</li>
                                        < li className='card-text'>
                                            < b> Location </b>: {x.Origin_of_Mango + " "}</li>
                                        < li className='card-text'>
                                            < b> Sugar Level </b>: {x.Sugar_Level}</li>
                                        < li className='card-text'>
                                            <b> Consume </b> : </li>
                                        <ul> {
                                            x.Consume_Instruction.map(e => <li> {e} </li>)} </ul>
                                    </ul>


                                </div>
                            </div>
                            <div className="col-md-1">


                                <div
                                    class="mb-3">
                                    <label class="" for="exampleCheck1">
                                        Add
                                        to
                                        select
                                    </label>
                                    < input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="exampleCheck1"
                                        onChange={
                                            () =>
                                                compare(index)
                                        }
                                    />

                                </div>
                            </
                            div>
                        </div>
                    </div>
                )
            })
        }

            <Button
                variant="primary"
                onClick={
                    () =>
                        comFunction()
                }
            >
                Go
                To
                Selection
            </Button>

            {
                finalSelection.length
                >
                0
                &&
                < CompareModel
                    data={finalSelection}
                    show={modalShow}
                    onHide={
                        () =>
                            setModalShow(false)
                    }
                />}

        </div>

    )
}