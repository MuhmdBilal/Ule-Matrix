import { useState, useEffect } from "react";
import Table from '../../Components/Table/Table'
import Table_Buttons from '../../Components/Table_Buttons/Table_Button'
import { API } from '../../Redux/actions/API'
import Footer from '../../Containers/Footer/Footer'
import Navbar from '../../Containers/Navbar/Navbar'

function Augmented_Reward() {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {


            let user = localStorage.getItem('user')
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
          

            let responce = await API?.get(`https://ulematic-api.herokuapp.com/binaryIncome?id=778899`)
            responce = responce?.data?.data;

            console.log("responce", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    uid:item.uid,

                    // capping_amount: `${item?.capingamount} `,
                    matching_business: `${item?.paidpv} `,
                    // date:moment(item?.edate).format("M/D/YYYY h:m:s A")
                    date: item?.binarydate,
                    net_income: item?.netincome,


                });



            }
            )
            


            setreferralApi(arr)

            console.log('what data from roi', referralApi)



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





    var [matching_income, set_matching_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'From ID', accessor: 'uid' },

            { Header: 'Matching Business', accessor: 'matching_business' },
            // { Header: 'Capping Amount', accessor: 'capping_amount' },
            { Header: 'Net Income', accessor: 'net_income' },
            { Header: 'Date & Time', accessor: 'date' }]
    });
  return (
    <div>
<Navbar />
{/* <!----======body section start=====----> */}
        <div className="page-wrapper">
            <div className="page-content">
                {/* <!--breadcrumb--> */}
             <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Augmented Reward</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href=""><i className="bx bx-home-alt"></i></a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">All Reward / Augmented Reward</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!--end breadcrumb--> */}
                
                
                {/* <!--end breadcrumb--> */}
                <div className="table-responsive">
                <Table
                    data={[...currentPost]}
                    columns={matching_income.cols}
                />
            <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

                    {/* <table className="table card-table border table-vcenter text-nowrap align-items-center">
                        <thead className="thead-light">
                            <tr>
                                <th>S.No</th>
                                <th>From ID</th>
                                <th>Matching Business</th>
                                <th>Net Income</th>
                                <th>Date & Time </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>123</td>
                                <td>338</td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>123</td>
                                <td>338</td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>123</td>
                                <td>338</td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>123</td>
                                <td>338</td>
                                <td>123 USD</td>
                                <td>10/10/2022 03:32:15</td>                                
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                {/* <!--end row--> */}
            </div>
        </div>
        {/* <!----======body section end=====----> */}
        <Footer />
    </div>
  )
}

export default Augmented_Reward