import React from "react";
import ProductThumbnailSlider from "./ProductThumbnailSlider";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./singleproduct.css";


export default function SingleProduct() {
    return (
        <>
            <Header />
            <section id="single-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="sinlge-page-slider">
                                <h4>2020 Mercedes-Benz G-Class G-63 AMG 4MATIC</h4>
                                <ProductThumbnailSlider />
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <div className="single-product-details">
                                <div className="single-price">
                                    <h4>$569</h4>
                                    <div className="single-product-table">
                                        <table class="table table-striped">
                                            <thead>
                                                {/* <tr>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                </tr> */}
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>LEASE TERMS:</b> </td>
                                                    <td>27 MONTHS</td>
                                                </tr>
                                                <tr><td><b>MILES INCLUDE: </b></td>
                                                    <td>10,000/YR</td></tr>
                                                <tr>
                                                    <td><b>DOWN PAYMENT:</b> </td>
                                                    <td>$1,250.00</td></tr>
                                                <tr>
                                                    <td><b>BASED ON MRSP:</b></td>
                                                    <td>$78,990</td></tr>
                                                <tr>
                                                    <td><b>DUE AT SIGNING: </b></td>
                                                    <td>$1,690</td></tr>
                                            </tbody>
                                        </table>
                                        <div className="image-bottom-links mt-3">
                                            <Link to=""><i class="bi bi-suit-heart-fill"></i><span>Save</span></Link>
                                            <Link to=""><i class="bi bi-arrow-left-right"></i><span>Compare</span></Link>
                                            <Link to=""><i class="bi bi-stickies"></i><span>Window Sticker</span></Link>
                                            <Link to=""><i class="bi bi-printer"></i></Link>
                                            <Link to=""><i class="bi bi-share"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="sell-car-contact">
                                    <h5>Mercedes-Benz of south orlando</h5>
                                    <p>4301 Millenia Blved,<br />Orlando, FL 32839</p>
                                    <div className="icon-with-number">
                                        <p><i class="bi bi-telephone-fill"></i> &nbsp; &nbsp; Call Us! (404)230-1984</p>
                                        <p><i class="bi bi-telephone-fill"></i> &nbsp; &nbsp; Call Us! (404)230-1984</p>
                                        <h5 className="dealer-website"><Link to="">All Dealer Offer</Link> &nbsp;  &nbsp; &nbsp;  <Link to="">Dealer Website <i class="bi bi-box-arrow-up-right"></i></Link></h5>
                                    </div>
                                </div>
                                <div className="INQUIRE"><a href="#" data-bs-toggle="modal" data-bs-target="#verify_email"><h4 className="text-white">INQUIRE</h4></a></div>
                            </div>
                        </div><br/><br/>
                        <div className="dealer-notes mt-2 mt-md-4">
                            <h3 className="fw-bold text-uppercase">Dealer's Notes</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-page-box">
                                <p>Highlight Features</p>
                                <p>Packages & Options</p>
                                <p>Specification</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-page-box2">
                                <table class="table table-striped">
                                    <thead>
                                        {/* <tr>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                </tr> */}
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bodystyle: </td>
                                            <td>Wagon</td>
                                        </tr>
                                        <tr><td>Engine: </td>
                                            <td>2.OL I-4 cyl</td></tr>
                                        <tr>
                                            <td>Transmission: </td>
                                            <td>Automatic</td></tr>
                                        <tr>
                                            <td>Exterior Color: </td>
                                            <td>Osmium Gray</td></tr>
                                        <tr>
                                            <td>Interior Color: </td>
                                            <td>Charcoal</td></tr>
                                        <tr>
                                            <td>Drive Line: </td>
                                            <td>Front-wheel Drive</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="car-feature2">
                                <ul>
                                    <li><img src="assets/images/icon/navi.png" /><span>Navigation</span></li>
                                    <li><img src="assets/images/icon/blind.png" /><span>Blind spot sensor</span></li>
                                    <li><img src="assets/images/icon/lane.png" /><span>Lane departure</span></li>
                                    <li><img src="assets/images/icon/leather.png" /><span>Leather upholstery</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="car-feature2">
                                <ul>
                                    <li><img src="assets/images/icon/temp.png" /><span>Automatic temperature control</span></li>
                                    <li><img src="assets/images/icon/alert.png" /><span>Emergency communication system</span></li>
                                    <li><img src="assets/images/icon/connect.png" /><span>Wireless phone connectivity</span></li>
                                    <li><img src="assets/images/icon/parking_.png" /><span>Parking sensors</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal text-center" id="verify_email" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-3">
                    <div class="m-btn">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-header border-0 bg-black">
                      <h5 className="modal-title text-center text-white" id="staticBackdropLabel"><b>INQUIRE</b></h5>
                    </div>
                    <div className="modal-body customclass">
                        <form>
                        <div className="form-group mb-3">
                            <input className="custominput1" id="name" type="text" placeholder="Name" required>
                            </input>
                        </div>
                        <div className="form-group mb-3">
                            <input className="custominput1" id="email" type="text" placeholder="Email" required>
                            </input>
                        </div>
                        <div className="form-group mb-3">
                            <input className="custominput1" id="phone" type="tel" placeholder="Phone" required>
                            </input>
                        </div>
                        <div className="col-md-12 mt-2">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>
                        </div>
                        <div className="meassage-button text-center mt-3">
                            <button className='custombutton btn btn-primary btn-block w-100'>Send Message</button>
                        </div>
                        </form>
                    </div>
                    </div>
                  </div>
                </div>
        
            </section>
            <Footer />
        </>
    )
}