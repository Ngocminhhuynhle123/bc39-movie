import { lazy } from "react";
import { Route } from "react-router-dom";
const routers = [{
    path: "",
    element: lazy(() => import('./../pages/Home/')),
    nested: [
        {
            path: "",
            element: lazy(() => import('./../pages/Home/HomeMovie')),
        },
        {
            path: "/listmovie",
            element: lazy(() => import('./../pages/Home/listMoviePage')),
        }
        ,
        {
            path: "/log-in",
            element: lazy(() => import('./../pages/Home/AuthPage')),
        }
    ],
},
{
    path: "admin",
    element: lazy(() => import('./../pages/Admin')),
    // nested: [
    //     {
    //         path: "",
    //         element: "",
    //     }
    // ],
}]

export const renderRouter = () => {
    return routers.map((router) => {
        if (router.nested) {
            return <Route key={router.path} path={router.path} element={<router.element />} >
                {router.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route>
        } else {
            return <Route key={router.path} path={router.path} element={<router.element />} />

        }
    })
}