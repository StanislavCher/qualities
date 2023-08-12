import React from "react";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../hooks/useQualities";
import {useHistory} from "react-router-dom";
const AddQualityPage = () => {
    const history = useHistory()
    const { addQuality } = useQualities()
    const handleSubmit = (data) => {
        // console.log(data);
        addQuality(data).then((data) => {if (data) history.push('/')})
        // console.log(data);
        // updateQuality(data)
        // qualityService.update(id, data).then((data) => console.log(data))
    }

    return (
        <>
            <h1>Add Quality</h1>
            <QualityForm onSubmit={handleSubmit}/>
        </>
    );
};

export default AddQualityPage;
