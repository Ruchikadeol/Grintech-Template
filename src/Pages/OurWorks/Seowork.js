import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from '../Services/Form'
import Australia from "../../assets/images/New folder/aus2.png"
import Ausdata from "../../assets/images/New folder/ausdata.png"

import Takoon from "../../assets/images/New folder/takoon.png"
import Takoondata from "../../assets/images/New folder/takoondata.png"

import Zoewest from "../../assets/images/New folder/zoewest.png"
import Zoewestdata from "../../assets/images/New folder/zoewestdata.png"

import Milari from "../../assets/images/New folder/milari.png"
import Milaridata from "../../assets/images/New folder/milaridata.png"

import Beetroot from "../../assets/images/New folder/beetroot.png"
import Beetrootdata from "../../assets/images/New folder/beetrootdata.png"


import { Link } from 'react-router-dom'
const seowork = () => {
  return (
    <div>
      <Header />
      <section className="seowork">
        <div className="container">
          <div className="row seowork_main">
            <div className="col-lg-6 seowork_main_div1">
              <span >Lorem Ipsum</span>
              <h1 >Our SEO Portfolio</h1>
              <p >In today's digital age, having a website that stands out is crucial for businesses to attract and retain customers. Grintech Web Agency is a leading web design company that offers expert web designing services to help businesses create responsive and engaging websites.</p>
            </div>
            <div className="col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className='seowork_heading'>
        <div className='container'>
          <div className='row'>
            <p>  Google 1 Rankings + Case Studies</p>
            <span>We have delivered top rankings and promised results to our customers and they are happy to endorse us.</span>
          </div>
        </div>
      </section>

      <section className='mt-5'>
        <div className='container'>
          <div className='seorankingtable'>
            <div className='row mt-3 text-center'>
              <h2> Australian Passivhaus Association</h2>
            </div>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Australia} alt="australia" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <table className='table-striped'>

                  <thead>
                    <tr>
                      <th scope="col">Keywords</th>
                      <th scope="col " className='theading'> Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody class="case-st">
                    <tr>
                      <th>Passive House Australia </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Australian Passive House Association </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Passivhaus Australia </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Passive House Conference Sydney </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>South Pacific Passive House Conference 2023 </th>
                      <td>1</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
            <div className='row  mt-5'>
              <div className='col-md-6 text-center'>
                <h3 className='mb-5'>Improved the Revenue & Conversion<b> Rate by 57.43% & 8 Keywords ranked </b> in first page of Google.</h3>
                <Link to="https://takoon.com/">Visit Website</Link>
              </div>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Ausdata} alt="australia" className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className=''>
        <div className='container'>
          <div className='seorankingtable2'>
            <div className='row mt-3 text-center'>
              <h2>Takoon</h2>
            </div>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Takoon} alt="australia" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <table className='table-striped'>

                  <thead>
                    <tr>
                      <th scope="col">Keywords</th>
                      <th scope="col " className='theading'> Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody class="case-st">
                    <tr>
                      <th>Takoon Wing </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Takoon Glide</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Takoon Foil </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Takoon Escape </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Takoon Wing v2</th>
                      <td>1</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>


            <div className='row  mt-5'>
              <div className='col-md-6 text-center'>
                <h2 className='mb-5'>Improved the Revenue & Conversion Rate by 57.43% & 8 Keywords ranked in first page of Google.</h2>
                <Link to="https://takoon.com/">Visit Website</Link>
              </div>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Takoondata} alt="australia" className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className=''>
        <div className='container'>
          <div className='seorankingtable3'>
            <div className='row mt-3 text-center'>
              <h2>Beetroot</h2>
            </div>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Beetroot} alt="australia" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <table className='table-striped'>

                  <thead>
                    <tr>
                      <th scope="col">Keywords</th>
                      <th scope="col " className='theading'> Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody class="case-st">
                    <tr>
                      <th>Beetroot Nutritional Value Per 100g </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Beets Nutrition Facts 100g</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Beet Root Powder </th>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th>Beet Root Powder Benefits </th>
                      <td>7</td>
                    </tr>
                    {/* <tr>
                      <th>Used Iphone Unlocked </th>
                      <td>6</td>
                    </tr> */}
                  </tbody>

                </table>
              </div>
            </div>


            <div className='row  mt-5'>
              <div className='col-md-6 text-center'>
                <h2 className='mb-5'>Improved the Revenue & Conversion Rate by 57.43% & 8 Keywords ranked in first page of Google.</h2>
                <Link to="https://beetrootpro.com/">Visit Website</Link>
              </div>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Beetrootdata} alt="australia" className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className=''>
        <div className='container'>
          <div className='seorankingtable4'>
            <div className='row mt-3 text-center'>
              <h2>Zoe west</h2>
            </div>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Zoewest} alt="australia" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <table className='table-striped'>

                  <thead>
                    <tr>
                      <th scope="col">Keywords</th>
                      <th scope="col " className='theading'> Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody class="case-st">
                    <tr>
                      <th>Ways to show commitment without getting married </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Eft life coaching </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>Introducing intimacy in relationships </th>
                      <td>7</td>
                    </tr>
                    <tr>
                      <th>Way to show commitment in a relationship </th>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th>Introducing EFT tapping</th>
                      <td>10</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>


            <div className='row  mt-5'>
              <div className='col-md-6 text-center'>
                <h2 className='mb-5'>Improved the Revenue & Conversion Rate by 57.43% & 8 Keywords ranked in first page of Google.</h2>
                <Link to="https://www.zoewest.co/">Visit Website</Link>
              </div>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Zoewestdata} alt="australia" className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className=''>
        <div className='container'>
          <div className='seorankingtable5'>
            <div className='row mt-3 text-center'>
              <h2>Milari Organics</h2>
            </div>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Milari} alt="australia" className='img-fluid'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <table className='table-striped'>

                  <thead>
                    <tr>
                      <th scope="col">Keywords</th>
                      <th scope="col " className='theading'> Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody class="case-st">
                    <tr>
                      <th>organic baby mattress </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>luxury baby mattress </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>buy organic latex pillow for baby </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>non toxic cot mattress </th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th>organic cotton cot mattress  </th>
                      <td>1</td>
                    </tr>

                    <tr>
                      <th>non toxic cot mattress australia  </th>
                      <td>1</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>


            <div className='row  mt-5'>
              <div className='col-md-6 text-center'>
                <h2 className='mb-5'>Improved the Revenue & Conversion Rate by 57.43% & 8 Keywords ranked in first page of Google.</h2>
                <Link to="https://milariorganics.com.au/">Visit Website</Link>
              </div>
              <div className='col-md-6'>
                <div className='seoimg'>
                  <img src={Milaridata} alt="australia" className='img-fluid'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default seowork
