import axios from 'axios'

axios.interceptors.response.use((res) => res,
    function (error) {
        // console.log('Interceptor')
        const expectedError =
            error.response
            && error.response.status >= 400
            && error.response.status < 500
        if (!expectedError) {
            // console.log('UnExpected error', error)
            console.log('UnExpected error')
        }
        return Promise.reject(error)
    })

const httpService = {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete,
}
 export default httpService
