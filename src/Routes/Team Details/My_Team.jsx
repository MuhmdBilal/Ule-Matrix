// import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'
import { useEffect, useState } from "react";
import Table from '../../Components/Table/Table'
import Table_Buttons from '../../Components/Table_Buttons/Table_Button'
import { API } from '../../Redux/actions/API'
import './My_Team.css';

function My_Team() {

    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])
  
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)
  
    const referral_API = async () => {
      try {
        const user = localStorage?.getItem('user')
  
        let ress = JSON.parse(user)
        let uId = ress?.uid
        // let user_id = localStorage.getItem('user_Id')
  
        let responce = await API?.post(`downlineDetails`, {
          id: uId,
          position: 1,
          SearchTerm: '',
          status: 2,
        })
        let dataaa = responce?.data.data
        console.log('responce', dataaa)
  
        let arr = []
        dataaa.forEach((item, index) => {
          console.log('item', item)
  
          arr?.push({
            sr: index + 1,
            package: item?.package,
            remark: item?.status,
            amount: item?.income,
            id: (item?.user_id).lengt>8 ? item?.user:item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
          //   id: item?.user_id?.substring(0, 4) + "..." + item?.user_id?.substring(item?.user_id?.length - 4),
           
            date_time: item?.edate,
            pkg: `${item.packagename}`,
  
            activation_date: item?.top_update,
          })
        })
        console.log('responce', arr)
  
        setreferralApi(arr)
      } catch (e) {
        console.log('Error While calling Referrer API', e)
      }
    }
  
    const referral_API_Right = async () => {
      try {
        const user = localStorage?.getItem('user')
  
        let ress = JSON.parse(user)
        let uId = ress?.uid
        // let user_id = localStorage.getItem('user_Id')
  
        let responce = await API?.post(`https://ulematic-api.herokuapp.com/downlineDetails`, {
          id: 778899,
          position: 2,
          SearchTerm: '',
          status: 2,
        })
        let dataaa = responce?.data.data
        console.log('responce', dataaa)
  
        let arr = []
        dataaa.forEach((item, index) => {
          console.log('item', item)
  
          arr?.push({
            sr: index + 1,
            package: item?.package,
            remark: item?.status,
            amount: item?.income,
            id: item?.user_id,
            date_time: item?.edate,
            pkg: `${item.packagename}`,
            activation_date: item?.top_update,
          })
        })
        console.log('responce', arr)
  
        setreferralApiRight(arr)
      } catch (e) {
        console.log('Error While calling Referrer API', e)
      }
    }
  
    useEffect(() => {
      referral_API()
      referral_API_Right()
    }, [])
  
    const indexOfLastPost = currentPage * listPerpage
    const indexOfFirstPage = indexOfLastPost - listPerpage
    const indexOfLastPost2 = currentPage2 * listPerpage2
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostRight = referralApi_right.slice(indexOfFirstPage2, indexOfLastPost2)
  
    var [My_Team, set_My_Team] = new useState({
      cols: [
        { Header: 'S.No', accessor: 'sr' },
        { Header: 'ID', accessor: 'id' },
        { Header: 'Package', accessor: 'pkg' },
        // { Header: 'Wallet', accessor: 'wallet' },
        { Header: 'Reg Date and Time', accessor: 'date_time' },
        { Header: 'Remark', accessor: 'remark' },
        { Header: 'Activation Date Time', accessor: 'activation_date' },
        // { Header: 'Staking', accessor: 'staking' },
      ]
      
    })
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">My Team</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Details / My Team</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row" style={{marginLeft: "10px"}}>
                    <div className="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" className="System" placeholder="Enter From Date" />
                    </div><br /><br />
                    <div className="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" className="System" />
                    </div><br /><br />
                    <div className="col-md-3">
                        <label>Choose Status</label>
                        <select className="System" id="status" onchange="getvalue_status()">
                            <option value="">Select Status</option>
                            <option value="2">All</option>
                            <option value="1">Active</option>
                            <option value="0">In-Active</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Position</label>
                        <select className="System" id="status" onchange="getvalue_status()">
                            <option value="">Select Position</option>
                            <option value="2">Left</option>
                            <option value="1">Right</option>
                           
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input type="submit" name="to_date" value="Search" className="btn btn_clr mt_5" />
                    </div>
                </div>
                <br />
                <div className="table-responsive">

                <Table
                    data={[...currentPost]}
                    columns={My_Team.cols}
                    toolbar={false}


                />
              
                    {/* <table className="table card-table border table-vcenter text-nowrap align-items-center">
                        <thead className="thead-light">
                            <tr>
                                <th>Sr.No</th>
                                <th> ID</th>
                                <th>Position</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th>Activation Date & Time</th>
                                <th>Package</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>992607</td>
                                
                                <td >
                                    Right
                                </td>
                                <td>6/20/2022 9:36:01 AM</td>
                                <td className="actbtn">
                                    <button type="button" className="btn1 active_btn green">Active</button>
                                </td>
                                <td>6/20/2022 9:47:08 AM</td>
                                <td>200.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>992607</td>
                                
                                <td>
                                    Left
                                </td>
                                <td>6/20/2022 9:36:01 AM</td>
                                <td className="actbtn">
                                    <button type="button" className="btn1 active_btn green">Active</button>
                                </td>
                                <td>6/20/2022 9:47:08 AM</td>
                                <td>200.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>992607</td>
                                
                                <td>
                                    Right
                                </td>
                                <td>6/20/2022 9:36:01 AM</td>
                                <td className="actbtn">
                                    <button type="button" className="btn1 active_btn green">Active</button>
                                </td>
                                <td>6/20/2022 9:47:08 AM</td>
                                <td>200.00</td>
                            </tr>
                                   
                        </tbody>
                    </table> */}
                </div>
                <div className="pagination-box">
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
                    {/* <ul>
                        <li className="page-start disabled"><a href="javascript:void(0);">First</a></li>
                        <li className="page-last "><a href="javascript:void(0);">Prev</a></li>
                        <li className="page-number on " data-page="1"><a href="javascript:void(0);">1</a></li>
                        <li className="page-number " data-page="1"><a href="javascript:void(0);">2</a></li>
                        <li className="page-next "><a href="javascript:void(0);">Next</a></li>
                        <li className="page-end disabled"><a href="javascript:void(0);">Last</a></li>
                    </ul> */}
                </div>
                {/* <!--end row--> */}
            </div>
        </div>
        {/* <!----======body section end=====----> */}
        <Footer />
    </div>
  )
}

export default My_Team