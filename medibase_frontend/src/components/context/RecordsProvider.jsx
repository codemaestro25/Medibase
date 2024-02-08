import { createContext, useState } from "react";
export const RecordsContext = createContext(null);

const RecordsProvider = ({children}) =>{
    const [vaccineRecs, setVaccineRecs] = useState([]);
    const [hospitalRecs, setHospitalRecs] = useState([]);
    const [testRecs, setTestRecs] = useState([]);
    const [clinicRecs , setClinicRecs] = useState([]);

    return(
        <RecordsContext.Provider value={{
            vaccineRecs,
            setVaccineRecs,
            testRecs,
            setTestRecs,
            hospitalRecs,
            setHospitalRecs,
            clinicRecs,
            setClinicRecs

        }}>
            {children}
        </RecordsContext.Provider>
    )
}

export default RecordsProvider;