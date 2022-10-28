import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'

function Club_View() {
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Club View</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Details / Club View</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="search-box">
                            <form action="#" className="form-horizontal ng-pristine ng-valid" method="post" role="form">
                                <div className="form-wrapper">
                                    <select className="p-2 my-2 mx-3 profile-border bg-color col-10 col-md-10 col-lg-7" style={{color: "white"}}>
                                        <option value="1">Auto Club 1</option>
                                        <option value="2">Auto Club 2</option>
                                        <option value="3">Auto Club 3</option>
                                        <option value="4">Auto Club 4</option>
                                        <option value="5">Auto Club 5</option>
                                        <option value="6">Auto Club 6</option>
                                        <option value="7">Auto Club 7</option>
                                        <option value="8">Auto Club 8</option>
                                        <option value="9">Auto Club 9</option>
                                        <option value="10">Auto Club 10</option>
                                        <option value="11">Auto Club 11</option>
                                        <option value="12">Auto Club 12</option>
                                        <option value="13">Auto Club 13</option>
                                        <option value="14">Auto Club 14</option>
                                        <option value="15">Auto Club 15</option>
                                    </select>
                                    <input type="submit" value="SUBMIT" id="Search" className="btn btn-sm btn-danger submit_btn" />
                                     {/* <!-- <button id="#home"  type="button" className="btn btn-sm btn-danger topmargin float_rt">Home</button> --> */}
                                    {/* <!-- <button onclick="goBack()" type="button" className="btn btn-sm btn-danger topmargin float_rt">Go BACK</button> --> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 row justify-content-center">
                        <div style={{padding: "0px"}}>
                            <div>
                                <div className="row bg-theme bg-theme4">
                                    <div className="card card-1" style={{padding: "0px"}}>
                                        <div id="tree" className="treeview" style={{margin: "40px auto"}}>
                                            <div className="treemember">
                                                <div className="dropdown">
                                                    <button className="dropbtn"><img src="assets/images/tree/1.png" className="abc" width="50" height="50" style={{margin: "0px 80px", cursor: "pointer", border: "2px solid green"}} /></button>
                                                    <div className="span" style={{color: "rgb(255, 255, 255)"}}>
                                                        Database <br />
                                                        778899
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="connecter1">
                                                <img
                                                    src="assets/images/tree/line1.png"
                                                    style={{width: "480px", height: "33px"}}
                                                />
                                            </div>
                                            <div className="tree_row">
                                                <div className="row_2_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" style={{margin: "0px 25px", cursor: "pointer"}} /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}>
                                                            <br />
                                                            421280
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_2_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" style={{margin: "0px 25px", cursor: "pointer"}} /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br />421280</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tree_row" style={{height: "34px"}}>
                                                <div className="row_2_child" style={{height: "34px"}}>
                                                    <img
                                                        src="assets/images/tree/line2.png"
                                                        style={{width: "253px", height: "32px"}}
                                                    />
                                                </div>
                                                <div className="row_2_child" style={{height: "34px"}}>
                                                    <img
                                                        src="assets/images/tree/line2.png"
                                                        style={{width: "253px", height: "32px"}}
                                                    />
                                                </div>
                                            </div>
                                            <div className="tree_row">
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}>
                                                            <br />
                                                            638770
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br />421280</div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br />421280</div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br />421280</div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-info d-none position-fixed text-white col-10 col-lg-6 col-md-7 col-xl-4 col-xxl-3 px-2 py-3 br-1">
                            <h6 className="border_bottom m-0 sponser">Sposer:</h6>
                            <div className="d-flex flex-row justify-content-between align-items-start">
                                <div className="d-flex flex-column pt-2 align-items-start justify-content-start" style={{width: "50%"}}>
                                    <p className="bg-b m-0 p-1">Registration Date :</p>
                                    <p className="m-0 p-1">Status :</p>
                                    <p className="bg-b m-0 p-1">Total Forum A Active :</p>
                                    <p className="m-0 p-1">Total Forum A Active :</p>
                                    <p className="bg-b m-0 p-1">Forum A Business :</p>
                                    <p className="m-0 p-1">Packgae Amount :</p>
                                </div>
                                <div className="d-flex flex-column pt-2 align-items-start border_start justify-content-start" style={{width: "50%"}}>
                                    <p className="bg-b m-0 p-1">Topup Date:</p>
                                    <p className="m-0 p-1">Packgae :</p>
                                    <p className="bg-b m-0 p-1">Total Forum B Active :</p>
                                    <p className="m-0 p-1">Total Forum B Active :</p>
                                    <p className="bg-b m-0 p-1">Forum B Business :</p>
                                </div>
                            </div>
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

export default Club_View