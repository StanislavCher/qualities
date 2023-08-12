import React from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import {useQualities} from "../hooks/useQualities";
// import axios from "axios";
// import qualityService from "../services/quality.service";

const QualitiesListPage = () => {
    const history = useHistory();
    // const [qualities, setQualities] = useState([])

    const { qualities, deleteQuality } = useQualities()

    // useEffect(() => {
    //      qualityService.fetchAll().then((data) => setQualities(data.content))
    // },[])

    const handleEdit = (param) => {
        // console.log(param);
        history.push(`/edit/${param}`);
    };
    const handleDelete = (id) => {
        // console.log(id)
        deleteQuality(id)
        // history.push('/')
    };
    return (
        <>
            <h1>Qualities List Page</h1>
            <QualitiesTable
                onDelete={handleDelete}
                onEdit={handleEdit}
                data={qualities}
            />
        </>
    );
};

export default QualitiesListPage;
