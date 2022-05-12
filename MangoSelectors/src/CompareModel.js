import { Modal, Button } from "react-bootstrap";
// import MangoData from "./MangoData";





function CompareModel(props) {
  console.log(props.data.sort(function(a, b){return b.Sugar_Level - a.Sugar_Level}))

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Selected Mango
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.data.sort(function(a, b){return b.Sugar_Level - a.Sugar_Level}).map(x => {
        return (
          <div class="card mb-3 d-inline" style={{ maxWidth: "540px" }}>
            <div class="row g-0 ">
              <div class="col-md-4">
                <img src={x.Mango_Image} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{x.Name}</h5>
                  <ul>
                    <li className='card-text'><b>Description</b>: {x.Description}</li>
                    <li className='card-text'><b>Location</b>: {x.Origin_of_Mango + "  "}</li>
                    <li className='card-text'><b>Sugar Level</b>: {x.Sugar_Level}</li>
                    <li className='card-text'><b>Consume</b> : </li>
                    <ul>
                      {x.Consume_Instruction.map(e => <li>{e}</li>)}
                    </ul>


                  </ul>


                </div>
              </div>
            </div>
          </div>
        )
      })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default CompareModel;