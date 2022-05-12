import { FaLock } from "react-icons/fa";

export default function NetBanking() {
  return (
    <div className="NetBanking">
      <div className="card border bg-light shadow-sm my-6 ">
        <div className="card-body p-4">
          <div>
            <p>
              In order to complete your transaction, we will transfer you over
              to Adyen's secure servers.
            </p>
            <p>
              {" "}
              Select your bank from the drop-down list and click proceed to
              continue with your payment.
            </p>
          </div>

          <div className="mb-4">
            <select
              className="form-select w-75 py-3 border border-secondary bg-white border border-secondary  rounded-0 shadow-sm"
              name="cars"
              id="MostPopular"
            >
              <option value disabled>
                Please choose one
              </option>
              <option value="ALB_DIRECT">Allahabad Bank </option>
              <option value="APG_DIRECT">Andhra Pragathi Grameena Bank</option>
              <option value="AUB_DIRECT">AU Small Finance Bank</option>
              <option value="UTI_DIRECT">Axis Bank </option>
              <option value="BDN_DIRECT">Bandhan bank</option>
              <option value="BBK_DIRECT">Bank of Bahrain and Kuwait</option>
              <option value="BBR_DIRECT">
                Bank of Baroda - Retail Banking
              </option>
              <option value="BOM_DIRECT">Bank of Maharashtra</option>
              <option value="BCB_DIRECT">
                Bassien Catholic Co-Operative Bank{" "}
              </option>
              <option value="CNB_DIRECT">Canara Bank</option>
              <option value="SYD_DIRECT">Canara Bank (e-Syndicate)</option>
              <option value="CSB_DIRECT">Catholic Syrian Bank</option>
              <option value="CBI_DIRECT">Central Bank of India</option>
              <option value="CUB_DIRECT">City Union Bank</option>
              <option value="COB_DIRECT">Cosmos Bank</option>
              <option value="DEN_DIRECT">Dena Bank</option>
              <option value="DBK_DIRECT">Deutsche Bank</option>
              <option value="DCB_DIRECT">Development Credit Bank</option>
              <option value="DLB_DIRECT">
                Dhanlakshmi Bank - Retail Net Banking
              </option>
              <option value="DBS_DIRECT">digibank by DBS</option>
              <option value="EQB_DIRECT">Equitas Small Finance Bank</option>
              <option value="ESF_DIRECT">ESAF Small Finance Bank</option>
              <option value="FBK_DIRECT">Federal Bank</option>
              <option value="FNC_DIRECT">Fincare Bank</option>
              <option value="HDF_DIRECT">HDFC Bank</option>
              <option value="ICI_DIRECT">ICICI Bank </option>
              <option value="IDB_DIRECT">IDBI Bank - Retail Net Banking</option>
              <option value="IDN_DIRECT">IDFC FIRST Bank</option>
              <option value="INB_DIRECT">Indian Bank</option>
              <option value="IOB_DIRECT">Indian Overseas Bank</option>
              <option value="IDS_DIRECT">IndusInd Bank</option>
              <option value="JKB_DIRECT">Jammu &amp; Kashmir Bank</option>
              <option value="JNB_DIRECT">Jana Small Finance Bank</option>
              <option value="JSB_DIRECT">Janata Sahakari Bank Ltd Pune</option>
              <option value="KJB_DIRECT">Kalyan Janata Sahakari Bank</option>
              <option value="KBL_DIRECT">Karnataka Bank Ltd</option>
              <option value="PKB_DIRECT">Karnataka Gramin Bank</option>
              <option value="KVG_DIRECT">Karnataka Vikas Grameena Bank</option>
            </select>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <span>
              <FaLock size={25} />
            </span>
            <span className="ms-2 text-muted d-inline-flex ">
              <small>
                Secure
                <br />
                Connection
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
