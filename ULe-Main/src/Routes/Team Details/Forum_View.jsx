import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'

function Forum_View() {
    const handleSubmit =(e)=>{
e.preventDefault()
    }
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper" id="home">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Forum View</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Details / Forum View</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                
                {/* <!--end breadcrumb--> */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="search-box">
                            <form  className="form-horizontal ng-pristine ng-valid" onSubmit={handleSubmit}>
                                <div className="form-wrapper">
                                    <input className="form-control srch_frm" id="ddluserid" name="userId" type="text" value="" />
                                    <span className="field-validation-valid" data-valmsg-for="userId" data-valmsg-replace="true"></span>
                                    <input type="submit" value="SUBMIT" id="Search" className="btn btn-sm btn-danger topmargin submit_btn" />
                                     {/* <!-- <button id="#home"  type="button" className="btn btn-sm btn-danger topmargin float_rt">Home</button> --> */}
                                    <button onclick="goBack()" type="button" className="btn btn-sm btn-danger topmargin float_rt">Go BACK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                     <div className="tree_icon">
                        <div className="tree_name">
                            <img src="assets/images/tree/green.png" width="40px" height="40px" />
                            Active
                        </div>
                        <div className="tree_name">
                            <img src="assets/images/tree/red.png" width="40px" height="40px" />
                            In-Active
                        </div>
                        <div className="tree_name">
                            <img src="assets/images/tree/black.png" width="40px" height="40px" />
                            Not Registered
                        </div>
                     </div>   
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 row justify-content-center">
                        <div style={{padding: "0px"}}>
                            <div >
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
                                                    <div className="dropdown-content">
                                                        <table className="tables" cellpadding="0px" cellspacing="0px">
                                                            <tbody>
                                                                <tr className="fgtybmd">
                                                                    <td className="table_heading">Sponser :</td>
                                                                    <td className="grtydfbc" colspan="3">0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                    <td className="grtydfbc bg-b">Sep 23 2022 12:47PM</td>
                                                                    <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                    <td className="grtydfbc bg-b">Sep 23 2022 12:47PM</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading">Status :</td>
                                                                    <td className="grtydfbc">Active</td>
                                                                    <td className="table_heading">Package :</td>
                                                                    <td className="grtydfbc">1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading bg-b">Total Forum A :</td>
                                                                    <td className="grtydfbc bg-b">28</td>
                                                                    <td className="table_heading bg-b">Total Forum B :</td>
                                                                    <td className="grtydfbc bg-b">0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading">Total Forum A Active :</td>
                                                                    <td className="grtydfbc">1339</td>
                                                                    <td className="table_heading">Total Forum B Active :</td>
                                                                    <td className="grtydfbc">15</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading bg-b">Forum A :</td>
                                                                    <td className="grtydfbc bg-b">16500</td>
                                                                    <td className="table_heading bg-b">Forum B :</td>
                                                                    <td className="grtydfbc bg-b">0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_heading">Package amount :</td>
                                                                    <td className="grtydfbc">5000</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" style={{margin: "0px 25px; cursor", pointer:""}} /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}>
                                                            <br />
                                                            421280
                                                        </div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">778899</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b">Sep 24 2022 8:14PM</td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">9</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_2_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" style={{margin: "0px 25px", cursor: "pointer"}} /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br />123</div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
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
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">778899</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b">Sep 27 2022 10:56PM</td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">8</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/black.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/green.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tree_row" style={{height: "27px"}}>
                                                <div className="row_3_child" style={{height: "27px"}}>
                                                    <img
                                                        src="assets/images/tree/line3.png"
                                                        style={{width: "129px", height: "27px"}}
                                                    />
                                                </div>
                                                <div className="row_3_child" style={{height: "27px"}}>
                                                    <img
                                                        src="assets/images/tree/line3.png"
                                                        style={{width: "129px", height: "27px"}}
                                                    />
                                                </div>
                                                <div className="row_3_child" style={{height: "27px"}}>
                                                    <img
                                                        src="assets/images/tree/line3.png"
                                                        style={{width: "129px", height: "27px"}}
                                                    />
                                                </div>
                                                <div className="row_3_child" style={{height: "27px"}}>
                                                    <img
                                                        src="assets/images/tree/line3.png"
                                                        style={{width: "129px", height: "27px"}}
                                                    />
                                                </div>
                                            </div>
                                            <div className="tree_row">
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}>
                                                            <br />
                                                            443292
                                                        </div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">778899</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b">Sep 27 2022 11:18PM</td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">7</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/black.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/black.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_4_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn"><img src="assets/images/tree/red.png" className="abc" width="50" height="50" /></button>
                                                        <div className="span" style={{color: "rgb(255, 255, 255)"}}><br /></div>
                                                        <div className="dropdown-content">
                                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                                                <tbody>
                                                                    <tr className="fgtybmd" style={{display: "none"}}>
                                                                        <td className="table_heading">Sponser Name:</td>
                                                                        <td colspan="3"></td>
                                                                    </tr>
                                                                    <tr className="fgtybmd">
                                                                        <td className="table_heading">Sponser :</td>
                                                                        <td className="grtydfbc" colspan="3">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Registration&nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                        <td className="table_heading bg-b">Topup &nbsp;Date :</td>
                                                                        <td className="grtydfbc bg-b"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Status :</td>
                                                                        <td className="grtydfbc">UnActive</td>
                                                                        <td className="table_heading">Package :</td>
                                                                        <td className="grtydfbc">NULL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Total Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Total Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Total Forum A Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                        <td className="table_heading">Total Forum B Active :</td>
                                                                        <td className="grtydfbc">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading bg-b">Forum A :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                        <td className="table_heading bg-b">Forum B :</td>
                                                                        <td className="grtydfbc bg-b">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="table_heading">Package amount :</td>
                                                                        <td className="grtydfbc"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
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

export default Forum_View