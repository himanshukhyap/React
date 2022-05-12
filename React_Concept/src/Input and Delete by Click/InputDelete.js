import { useState } from "react";
import uuid from 'react-uuid'

export default function InputDelete() {

    const [array, setarray] = useState([{ id: uuid() }]);
    const ss = () => {
        let newarray = array.concat([{ id: uuid() }]);
        setarray(newarray);
    };

    const del = (x) => {
        let index = array.indexOf(x);
        // console.log(index);
        // console.log(x);
        array.splice(index, 1);
        let newarray = [].concat(array);
        setarray(newarray);

    };

    return (
        <div>

            {array.map((item) => {
                return (

                    <div className="d-flex gap-3 my-4">
                        <div class="input-group mb-3 w-50">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder={item.id} aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <button className="btn btn-danger mb-3" onClick={() => {
                            del(item);
                        }}>Delete</button>



                    </div>

                )
            })}


            <button
                onClick={() => {
                    ss();
                }}
            >
                button
            </button>

        </div>
    );
}
