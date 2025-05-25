import { DefaultView } from "../common/defaultview/DefaultView"
import {About} from "../pages/aboutus/about"
import { Home } from "../pages/home/Home"
import {ComingSoon} from '../pages/coming_soon/ComingSoon'
 
export const ROUTE_PATH ={
    HOME: '/',
    ABOUT: '/about',
    SERVICES: '/services',
    USE_CASES: '/use-cases',
    PRICING: '/pricing',
    BLOG: '/blog',
    COMING_SOON: '/coming_soon'
} 

export const routes =[
    {
      path: ROUTE_PATH.HOME, 
      element: (<DefaultView><Home/></DefaultView>)
    },
    {
      path: ROUTE_PATH.ABOUT,
      element: <>
        <DefaultView><About/></DefaultView>
      </>
    },
    {
        path: ROUTE_PATH.SERVICES,
        element: <>
         <DefaultView></DefaultView>
        </>
      },
      {
        path: ROUTE_PATH.CONTACT,
        element: <>
          <DefaultView></DefaultView>
        </>
      },
      {
        path: ROUTE_PATH.USE_CASES,
        element: <>
          <DefaultView></DefaultView>
        </>
      },
      {
        path: ROUTE_PATH.PRICING,
        element: <>
          <DefaultView></DefaultView>
        </>
      },
      {
        path: ROUTE_PATH.BLOG,
        element: <>
          <DefaultView></DefaultView>
        </>
      },
      {
        path: ROUTE_PATH.COMING_SOON,
        element: <>
          <DefaultView>
           <ComingSoon/>
          </DefaultView>
        </>
      }
]