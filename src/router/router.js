
import App from "../App";
import Orders from "../page/Orders/Orders";
import User from "../page/User/User";
import Filter from "../page/Filter/Filter";
import Delicacies from "../components/pages/Delicacies/Delicacies";
import Drinks from "../components/pages/Drinks/Drinks";
import Hamburg from '../components/pages/Hamburg/Hamburg'
import Chicken from "../components/pages/Chicken/Chicken";



import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'orders',
                element:<Orders/>,
            },
            {
                path:'user',
                element:<User/>,
            },
        ]
    },
    {
        path:'/filter',
        element:<Filter/>
    },
    {
        path:'/delicacies',
        element:<Delicacies/>
    },
    {
        path:'/drinks',
        element:<Drinks/>
    },
    {
        path:'/hamburg',
        element:<Hamburg/>
    },
    {
        path:'/chicken',
        element:<Chicken/>
    },

])

export default router