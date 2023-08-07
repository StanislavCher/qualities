import React, { useState, useEffect } from "react";
import EditForm from "../components/ui/editForm";
import { useParams } from "react-router-dom";
// <<<<<<< HEAD
// import axios from "axios";
// axios.interceptors.response.use((res) => res,
//     function (error) {
//         // console.log('Interceptor')
//         const expectedError =
//             error.response
//             && error.response.status >= 400
//             && error.response.status < 500
//         if (!expectedError) {
//             console.log('UnExpected error', error)
//         }
//         return Promise.reject(error)
//     })
// =======
// import axios from "axios";
import httpService from "../services/http.service";

// >>>>>>> 3c9f8cf833be3f561ac8b089537582cf2fe5a182
const EditQualityPage = () => {
    const id = useParams().id;
    const [qualities, setQualities] = useState([])

    useEffect(async () => {
        try {
// <<<<<<< HEAD
            // const {data} = await axios.get(`http://localhost:4000/api/v1/quality/${id}`)
// =======
            const {data} = await httpService.get(`http://localhost:4000/api/v1/quality/${id}`)
// >>>>>>> 3c9f8cf833be3f561ac8b089537582cf2fe5a182
            setQualities(data.content)
            // console.log(data.content)
        }
        catch (e) {
            console.log(e)
        }

    },[])


    const handleAdd = async (data) => {
// <<<<<<< HEAD
//         console.log(data);
//         try {
//           await axios.put(`http://localhost:4000/api/v1/quality/${id}`, data)
// =======
        //console.log(data);
        try {
          await httpService.put(`http://localhost:4000/api/v1/quality/${id}`, data)
// >>>>>>> 3c9f8cf833be3f561ac8b089537582cf2fe5a182
               .then(res => console.log(res.data.content))

          // await axios.post(`https://64c2cbc5eb7fd5d6ebd0567f.mockapi.io/api/v1/testData`, data)
          //       .then(res => console.log(res.data.content))

            // console.log(data.content)
        }
        catch (e) {
            // e.request
            // e.response
            // const expectedError =
            //     e.response && e.response.status >= 400 && e.response.status < 500
            // if (expectedError) console.log('Expected error', e)
            // if (!expectedError) console.log('UnExpected error', e)
            // console.log('Error')
// <<<<<<< HEAD
            // console.log('Expected error', e)
{/*=======*/}
            // console.log('Expected error', e)
            console.log('Expected error')
// >>>>>>> 3c9f8cf833be3f561ac8b089537582cf2fe5a182
        }
    }

    return (
        <>
            { qualities.length !== 0 ?
                (
                    <>
                        <h1>Edit Quality Page</h1>
                        <EditForm
                            qualities={qualities}
                            handleAdd={handleAdd}
                        />
                    </>
                )
                : 'loading...'
            }
        </>

    );
};

export default EditQualityPage;
