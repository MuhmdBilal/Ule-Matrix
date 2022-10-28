import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'

function Self_Address() {
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Self Address</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Address / Self Address</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!--end breadcrumb--> */}
                {/* <!--end breadcrumb--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h4 className="text-white" style={{marginTop: "100px", color: "white"}}>
                                Wallet Address&nbsp;:&nbsp;<span style={{fontSize: "large"}}><a href="https://polygonscan.com/address/85458745sdf" className="text-white" target="_blank">85458745sdf</a></span>
                            </h4>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}
            </div>
        </div>
        {/* <!----======body section end=====----> */}
        <Footer />
    </div>
  )
}

export default Self_Address