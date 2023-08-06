import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import axios from "axios";

const QualitiesListPage = () => {
    const history = useHistory();
    const [qualities, setQualities] = useState([])

    useEffect(async () => {
        try {
        const {data} = await axios.get('http://localhost:4000/api/v1/quality')
        setQualities(data.content)
            // console.log(data.content)
        }
        catch (e) {
            console.log(e)
        }

    },[])

    const handleEdit = (param) => {
        // console.log(param);
        history.push(`/edit/${param}`);
    };
    const handleDelete = (param) => {
        console.log(param);
    };
    return (
        <>
            <h1>Qualitites List Page</h1>
            <QualitiesTable
                onDelete={handleDelete}
                onEdit={handleEdit}
                data={qualities}
            />
        </>
    );
};

export default QualitiesListPage;
