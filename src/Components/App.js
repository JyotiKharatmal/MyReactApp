import React  from 'react';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Common/Header";
import CoursesPage from "./CoursesPage";

function App()
{
    function getPage(){
        const route = window.location.pathname;
        if(route === "/courses" ) return <CoursesPage />;
        if(route === "/about" ) return <AboutPage />;
        return <HomePage></HomePage>;
    }
    return(
        <div className='container-fluid'>
            <Header></Header>
            {getPage()}
        </div>
    );

}

export default App;