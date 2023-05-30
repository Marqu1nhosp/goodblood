import { Route, Routes,  } from 'react-router-dom'
import Home from './pages/Home'
import UserRegistration from './pages/UserRegistration'
import UserCompany from './pages/UserCompany'
import ConfirmUser from './pages/ConfirmUser'

import CommonQuestions from './pages/CommonQuestions'
import Scheduling from './pages/Scheduling'
import { SchedulingHourDateHospital } from './pages/SchedulingHourDateHospital'

export function Router(){
    return(
        <Routes>    
            <Route exact path="/" element={<Home />}/>
            
            <Route path="/scheduling" element={<Scheduling />}/>
            <Route path="/schedulingHDH" element={<SchedulingHourDateHospital />}/>

            <Route path="/userRegistration" element={<UserRegistration />} />
            <Route path="/userCompany" element={<UserCompany />}/>
            <Route path="/confirmUser" element={<ConfirmUser />}/>
            <Route path="/commonQuestions" element={<CommonQuestions />}/>
           
        </Routes>
    )
}