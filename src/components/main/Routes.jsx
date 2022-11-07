import React from 'react'
import { Route,Routes} from 'react-router-dom'


import UserCrud from '../user/UserCrud'

export default props =>(
<Routes>
    <Route exact path="/users" element={<UserCrud />} />
    
</Routes>
);