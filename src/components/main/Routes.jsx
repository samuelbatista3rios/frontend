import React from 'react'
import { Route,Routes} from 'react-router-dom'

import Home from '../../components/home/home'
import UserCrud from '../user/UserCrud'

export default props =>(
<Routes>
    <Route exact path='#/' elemnt={<Home />} />
    <Route exact path="/users" element={<UserCrud />} />
    <Route path='*' element={<Home />} />
</Routes>
);