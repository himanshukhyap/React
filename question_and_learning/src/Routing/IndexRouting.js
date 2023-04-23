import React from 'react'
import Layout from './Layout'
import Home from './Home'
import Blogs from './Blogs'
import Contact from './Contact'
import NoPage from './NoPage'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

function IndexRouting() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [

                {
                    path: "/",
                    
                    element: <Home />,
                },
                {
                    path: "blogs",
                    element: <Blogs />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
            ]
        },

        {
            path: "*",
            element: <NoPage />
        },
    ]);

    return (
        <RouterProvider router={router} />)
        //   <BrowserRouter>
        //     <Routes>
        //     <Route path="/" element={<Layout />}>
        //       <Route index element={<Home />} />
        //       <Route path="blogs" element={<Blogs />} />
        //       <Route path="contact" element={<Contact />} />
        //       <Route path="*" element={<NoPage />} />
        //     </Route>
        //   </Routes>
        // </BrowserRouter>
    
}

export default IndexRouting


// We wrap our content first with <BrowserRouter>.

// Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.

// <Route>s can be nested. The first <Route> has a path of / and renders the Layout component.

// The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

// The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

// Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

