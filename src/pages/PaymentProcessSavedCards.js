import { useState } from "react";
import MainFrame from "../components/MainFrame";
import DiscountFrame from "../components/DiscountFrame";
import InvoicePreviewContainer from "../components/InvoicePreviewContainer";
import "./PaymentProcessSavedCards.css";

const PaymentProcessSavedCards = () => {
  const [frameIconChecked, setFrameIconChecked] = useState(true);
  return (
    <div className="payment-process-saved-cards">
      <MainFrame />
      <main className="subtotal-tax-frame">
        <DiscountFrame />
        <section className="confirm-payment-button">
          <div className="agree-terms-checkbox">
            <div className="invoice-preview-frame">
              <h1 className="payment">Payment</h1>
              <h1 className="create-a-invoice">
                Create a invoice for your patients
              </h1>
            </div>
            <div className="subtotal-tax-frame1">
              <div className="discount-frame">
                <div className="discount-frame-child" />
                <div className="total-frame">
                  <div className="frame-parent">
                    <div className="rate-qty-amount-frame-parent">
                      <div className="rate-qty-amount-frame">
                        <div className="subtotal-frame">
                          <div className="tax-frame" />
                          <input
                            className="frame"
                            checked={frameIconChecked}
                            type="checkbox"
                            onChange={(event) =>
                              setFrameIconChecked(event.target.checked)
                            }
                          />
                        </div>
                        <h3 className="shipping">Shipping</h3>
                      </div>
                      <h2 className="payment-method">Payment Method</h2>
                    </div>
                    <div className="final-notes-terms-frame">
                      <div className="payment-method-frame" />
                    </div>
                  </div>
                  <div className="notes-terms-text">
                    <div className="dr-vihang-jane-doe-frame" />
                    <div className="div">2</div>
                  </div>
                  <div className="notes-terms-text1">
                    <h3 className="billing">Billing</h3>
                  </div>
                  <div className="save-and-confirm-frame">
                    <div className="agree-to-terms-frame" />
                  </div>
                  <div className="notes-terms-text2">
                    <div className="notes-terms-text-child" />
                    <div className="div1">3</div>
                  </div>
                  <div className="notes-terms-text3">
                    <h3 className="confirmation">Confirmation</h3>
                  </div>
                </div>
                <InvoicePreviewContainer />
                <div className="dr-vihang-jane-doe">
                  <div className="vitamin-a-night-serum">
                    <h3 className="by-clicking-on-container">
                      <p className="by-clicking-on">
                        By Clicking on ‘Confirm Payment’ I agree
                      </p>
                      <p className="with-the-terms">
                        with the terms and conditions of the Company.
                      </p>
                    </h3>
                    <div className="subtotal">
                      <button className="rectangle-parent">
                        <div className="frame-child" />
                        <div className="save">Save</div>
                      </button>
                      <button className="rectangle-group">
                        <div className="frame-item" />
                        <div className="confirm-payment">Confirm Payment</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notes-terms">
                <div className="notes-terms-child" />
                <div className="loremipsumdolorsitamet">
                  <h3 className="preview-invoice">Preview Invoice</h3>
                  <div className="subtotaltax-discount">
                    <div className="preview-invoice-vector">
                      <div className="preview-invoice-vector-child" />
                      <img
                        className="vector-vector-icon"
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <div className="preview-invoice-vector1">
                      <div className="preview-invoice-vector-item" />
                      <img className="vector-icon" alt="" src="/vector2.svg" />
                    </div>
                  </div>
                </div>
                <div className="rectangle-container">
                  <div className="frame-inner" />
                  <div className="design-overview-line">
                    <img
                      className="skinclublogo-logotype-white-2-icon"
                      loading="lazy"
                      alt=""
                      src="/skinclublogo-logotype-white-2@2x.png"
                    />
                    <div className="vitamin-a-night-serum-serum-se">
                      <div className="summery">SUMMERY</div>
                      <img
                        className="payment-frame-icon"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="subtotal-tax-frame2">
                    <div className="discount-frame1">
                      <div className="dr-vihang">Dr. Vihang</div>
                      <div className="jane-doe">Jane Doe</div>
                    </div>
                  </div>
                  <div className="invoice-preview">
                    <div className="product-details-line">
                      <div className="product-details-line-child" />
                      <div className="subtotal-frame1">
                        <div className="subtotal-frame-child" />
                        <div className="item-frame">
                          <div className="item">item</div>
                        </div>
                        <div className="rate">Rate</div>
                        <div className="qty">Qty</div>
                        <div className="amount">Amount</div>
                      </div>
                      <div className="vitamin-a-serum-line">
                        <div className="subtotal-line">
                          <div className="tax-line">
                            <div className="vitamin-a-night">
                              Vitamin A Night Serum
                            </div>
                            <div className="total-line">$90</div>
                          </div>
                          <div className="summary-line">2</div>
                          <div className="notes-terms-frame">$180</div>
                        </div>
                      </div>
                      <div className="vitamin-a-serum-line1">
                        <div className="frame-group">
                          <div className="vitamin-a-night-serum-parent">
                            <div className="vitamin-a-night1">
                              Vitamin A Night Serum
                            </div>
                            <div className="div2">$90</div>
                          </div>
                          <div className="div3">2</div>
                          <div className="div4">$180</div>
                        </div>
                      </div>
                      <div className="vitamin-a-serum-line2">
                        <div className="frame-container">
                          <div className="vitamin-a-night-serum-group">
                            <div className="vitamin-a-night2">
                              Vitamin A Night Serum
                            </div>
                            <div className="div5">$90</div>
                          </div>
                          <div className="div6">2</div>
                          <div className="div7">$180</div>
                        </div>
                      </div>
                    </div>
                    <div className="total-frame1">
                      <div className="notes-terms-line">
                        <div className="final-total-frame">
                          <div className="subtotal1">Subtotal</div>
                          <div className="tax-5">tax 5%</div>
                          <div className="discount-10">Discount 10%</div>
                        </div>
                        <div className="final-total-frame1">
                          <div className="div8">$540.00</div>
                          <div className="div9">$00.00</div>
                          <div className="div10">$00.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="subtotal2" />
                    <div className="total">
                      <div className="summary-line1">
                        <div className="total1">total</div>
                        <div className="total2">$540.00</div>
                      </div>
                    </div>
                    <div className="notes-terms1">
                      <div className="notes-terms-item" />
                      <div className="subtotal-frame-parent">
                        <div className="subtotal-frame2">
                          <div className="notesterms">Notes/Terms</div>
                        </div>
                        <input
                          className="lorem-ipsum-dolor"
                          placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentProcessSavedCards;
