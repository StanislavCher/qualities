import React, { useState, useEffect } from "react";
import EditForm from "../components/ui/editForm";
import { useParams } from "react-router-dom";
import axios from "axios";
axios.interceptors.response.use((res) => res,
    function (error) {
        // console.log('Interceptor')
        const expectedError =
            error.response
            && error.response.status >= 400
            && error.response.status < 500
        if (!expectedError) {
            console.log('UnExpected error', error)
        }
        return Promise.reject(error)
    })
const EditQualityPage = () => {
    const id = useParams().id;
    const [qualities, setQualities] = useState([])

    useEffect(async () => {
        try {
            const {data} = await axios.get(`http://localhost:4000/api/v1/quality/${id}`)
            setQualities(data.content)
            // console.log(data.content)
        }
        catch (e) {
            console.log(e)
        }

    },[])


    const handleAdd = async (data) => {
        console.log(data);
        try {
          await axios.put(`http://localhost:4000/api/v1/quality/${id}`, data)
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
            console.log('Expected error', e)
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
