import { useState, useEffect } from "react";
import Table from '../../Components/Table/Table'
import Table_Buttons from '../../Components/Table_Buttons/Table_Button'
import { API } from '../../Redux/actions/API'
import moment from "moment";
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'

function Registration_Direct_Reward() {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)




    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.get(`https://ulematic-api.herokuapp.com/registrationDirectIncome?id=778899`)
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
               


                arr?.push({
                    sr: index + 1,
                    amount: item?.income[0],
                    from_id: item?.uid[0],

                    date: moment(item?.dd).format("M/D/YYYY h:m:s A")
                });



            }
            )
           

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }

    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)




    var [referral_income, set_referral_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'from_id' },
            // {Header:'Package',accessor:'package'},
            // {Header:'Token',accessor:'token'},
            { Header: 'Amount', accessor: 'amount' },
            { Header: 'Date & Time', accessor: 'date' }],
        
    });
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                      <div className="breadcrumb-title pe-3">Registration Direct Reward</div>
                      <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">All Reward / Registration Direct Reward</li>
                            </ol>
                         </nav>
                       </div>
                </div>
                
                {/* <!--end breadcrumb--> */}
                <div className="table-responsive">
    
                <Table
                    data={[...currentPost]}
                    columns={referral_income.cols}
                />
                                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

                    {/* <table cellpadding="0" cellspacing="0" className="table align-middle mb-0">
                        <thead className="thead-light">
                            <tr>
                                <th>S.No</th>
                                <th>User ID</th>
                                <th>Amount</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>100 </td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>100 </td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>100 </td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
        {/* <!----======body section end=====----> */}
        <Footer />
    </div>
  )
}

export default Registration_Direct_Reward