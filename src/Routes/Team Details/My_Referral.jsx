// import React from 'react'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'
import { useState, useEffect } from 'react'
import Table from '../../Components/Table/Table'
import Table_Buttons from '../../Components/Table_Buttons/Table_Button'
// import { PagePath, Table, Table_Buttons } from '../../Components'
import { API } from '../../Redux/actions/API'

function My_Referral() {

    const [referralApi, setreferralApi] = useState([])
  const [referralApi_right, setreferralApiRight] = useState([])

  const [currentPage, setcurrentPage] = useState(1)
  const [listPerpage, setlistPerpage] = useState(10)

  const referral_API = async () => {
    try {
      const user = localStorage?.getItem('user')

      let ress = JSON.parse(user)
      let uId = ress?.uid

      let responce = fetch(`https://ulematic-api.herokuapp.com/directDetails`, {
        id: 778899,
        position: 1,
        status: 2,
      })
      let dataaa = responce?.data.data
      console.log('responce', dataaa)

      let arr = []
      dataaa.forEach((item, index) => {
        arr?.push({
          sr: index + 1,
          package: item?.packagename,
          amount: item?.income,
          user_id: item?.uid,
          date: item?.edate,
          activation_date: item?.top_update,
        })
      })

      setreferralApi(arr)
    } catch (e) {
      console.log('Error While calling Referrer API', e)
    }
  }

  const indexOfLastPost = currentPage * listPerpage
  const indexOfFirstPage = indexOfLastPost - listPerpage
  const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
  const currentPostRight = referralApi_right.slice(indexOfFirstPage, indexOfLastPost)

  var [my_referral, set_my_referral] = new useState({
    cols: [
      { Header: 'S.No', accessor: 'sr' },
      { Header: 'User ID', accessor: 'user_id' },
      { Header: 'Packgae', accessor: 'package' },
      { Header: 'RegistrationDate', accessor: 'date' },
      { Header: 'Activation Date Time', accessor: 'activation_date' },
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
                    <div className="breadcrumb-title pe-3">My Referral</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Details / My Referral</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row" style={{marginLeft: "10px"}}>
                    <div className="col-md-3">
                        <label>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" className="System"  placeholder="Enter From Date" />
                    </div><br /><br />
                    <div className="col-md-3">
                        <label>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date"  className="System" />
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
                        <input type="submit" name="to_date" value="Search" onClick={referral_API} className="btn btn_clr mt_5" />
                    </div>
                </div>
                <br />
                <div className="table-responsive">

                    <Table
                    data={[...currentPost]}
                    columns={my_referral.cols}
                    toolbar={false}


                />
                   
                </div>
                <div className="pagination-box">
                <Table_Buttons
          indexOfFirstPage={indexOfFirstPage}
          indexOfLastPost={indexOfLastPost}
          setcurrentPage={setcurrentPage}
          currentPage={currentPage}
          totalData={referralApi.length}
          listPerpage={listPerpage}
        />
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

export default My_Referral