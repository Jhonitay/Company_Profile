import "./Payment.css";
import React, { useEffect } from "react";

function Payment() {
  useEffect(() => {
    const metodePembayaranRadios = document.getElementsByName("metode_pembayaran");
    const inputMetodeContainers = document.getElementsByClassName("input-metode");

    const handleMetodeChange = (event) => {
      const selectedMetode = event.target.value;

      for (let j = 0; j < inputMetodeContainers.length; j++) {
        if (inputMetodeContainers[j].id === "input-" + selectedMetode) {
          inputMetodeContainers[j].style.display = "block";
        } else {
          inputMetodeContainers[j].style.display = "none";
        }
      }
    };

    for (let i = 0; i < metodePembayaranRadios.length; i++) {
      metodePembayaranRadios[i].addEventListener("change", handleMetodeChange);
    }

    return () => {
      // Cleanup event listeners
      for (let i = 0; i < metodePembayaranRadios.length; i++) {
        metodePembayaranRadios[i].removeEventListener("change", handleMetodeChange);
      }
    };
  }, []);

  return (
    <div class="containe">
      <div class="wrapperr">
        <div class="input_metode mbb-5">
          <h2>Payment Methode</h2>
          <input class="mr-5" type="radio" name="metode_pembayaran" value="metode1" id="metode1" />
          <label className="label" for="metode1">
            Credit Card
          </label>
          <input class="mr-5 ml-4" type="radio" name="metode_pembayaran" value="metode2" id="metode2" />
          <label className="label" for="metode2">
            Cash on Delivery
          </label>
        </div>

        <form action="" method="post">
          {/* <!-- metode cod --> */}
          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Name
            </label>
            <br />
            <input type="text" id="input2" name="input2" class="input_box mbb-5" placeholder="Yourname" required />
          </div>

          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Country
            </label>
            <br />
            <input type="text" id="input2" name="input2" class="input_box mbb-5" placeholder="Your Country" required />
          </div>

          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Address
            </label>
            <br />
            <input type="text" id="input2" name="input2" class="input_box mbb-5" placeholder="Your Address" required />
          </div>

          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Phone Number
            </label>
            <br />
            <input type="text" id="input2" name="input2" class="input_box mbb-5" placeholder="Your Phone Number" required />
          </div>

          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Additional Information
            </label>
            <br />
            <textarea name="" id="" cols="30" rows="10" class="input_box mbb-5">
              Note about your order
            </textarea>
          </div>

          <div id="input-metode2" class="input-metode">
            <label className="label" for="input2">
              Cart Total
            </label>
            <br />
            <div class="total mbb-5">
              <p>Total</p>
              <p>Rp.90.000</p>
            </div>
          </div>

          <div id="input-metode2" class="input-metode">
            <div class="button">
              <button class="btn">PROCCED TO CHECKOUT</button>
            </div>
          </div>

          {/* <!-- metode credit card --> */}
          <div id="input-metode1" class="input-metode">
            <label className="label" for="input1">
              Name
            </label>
            <br />
            <input type="text" id="input1" name="input1" class="input_box mbb-5" placeholder="Yourname" required />
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input1">
              Card Number
            </label>
            <br />
            <input type="text" id="input1" name="input1" class="input_box mbb-5" placeholder="Your card number" required />
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input1">
              Expired date
            </label>
            <br />
            <input type="text" id="input1" name="input1" class="input_expired mbb-5" placeholder="MM/YY" required maxLength={5} />
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input1">
              CVV
            </label>
            <br />
            <input type="text" id="input1" name="input1" class="input_expired mbb-5" placeholder="CVV" required maxLength={3} />
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input1">
              Email
            </label>
            <br />
            <input type="text" id="input1" name="input1" class="input_box mbb-5" placeholder="example@gmail.com" required maxLength={3} />
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input2">
              Additional Information
            </label>
            <br />
            <textarea name="" id="" cols="30" rows="10" class="input_box mbb-5">
              Note about your order
            </textarea>
          </div>

          <div id="input-metode1" class="input-metode">
            <label className="label" for="input2">
              Cart Total
            </label>
            <br />
            <div class="total mbb-5">
              <p>Total</p>
              <p>Rp.90.000</p>
            </div>
          </div>

          <div id="input-metode1" class="input-metode">
            <div class="button">
              <button class="btn">PROCCED TO CHECKOUT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
