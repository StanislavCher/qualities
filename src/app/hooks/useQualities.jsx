import React, {useContext, useEffect, useState} from "react";
import qualityService from "../services/quality.service";
import {toast} from "react-toastify";

const QualitiesContext = React.createContext()
export const useQualities = () => {
    return useContext(QualitiesContext)
}
// const QualitiesLoading = ({ children }) => {
//     const { isLoading } = useQualities()
//     // console.log(isLoading)
//     if (!isLoading) {
//         return children
//     }
//     return <h1>Loading qualities...</h1>
// }

// const qualities = [{id: 12345, name: 'qwerty'}]
export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([])
    const [errors, setErrors] = useState(null)
    const [isLoading, setLoading] = useState(true)
    // const prevState = useRef()
    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll()
                setQualities(content)
                setLoading(false)
                // getQuality(id).then((data) => setQualities(data))
            } catch (error) {
                errorCatcher(error)
            }
        }
        getQualities()
    },[])

    const getQuality = (id) => {
        return qualities.find((q) => q._id === id)
    }

    const updateQuality = async ({ _id: id, ...data }) => {
        try {
            const {content} = await qualityService.update(id, data)
            setQualities((prevState) => prevState.map((item) => {
                if (item._id === content._id) return content
                return item
            }))
            return content
        } catch (error) {
            errorCatcher(error)
        }
    }

    const addQuality = async (data) => {
        try {
            // console.log(data);
            const {content} = await qualityService.create(data)
            setQualities((prevState) => [...prevState, content])
            return content
        } catch (error) {
            errorCatcher(error)
        }
    }

    const deleteQuality = async (id) => {
        // prevState.current = qualities
        try {
            const {content} = await qualityService.delete(id)
            setQualities((prevState) => prevState
                .filter((item) => item._id !== content._id)
            )
        } catch (error) {
            // const {message} = error.response.data
            // toast('error => ' + message)
            // setErrors(message)
            // setQualities(prevState.current)
            errorCatcher(error)
        }
    }

    const errorCatcher = (error) => {
        console.log(error)
        const {message} = error.response.data
        setErrors(message)
    }

    useEffect(() => {
        if (errors !== null) {
            toast(errors)
            setErrors(null)
        }
    },[errors])

    return (
        <QualitiesContext.Provider value={ {qualities, getQuality, updateQuality, addQuality, deleteQuality} }>
            {!isLoading ? children : "Loading..."}
             {/* {children}*/}
        </QualitiesContext.Provider>
    )
}