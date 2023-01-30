import './App.css';
import {Route, Routes} from "react-router-dom";
import Table from "./conpoments/Table/Table";
import {ToastContainer} from 'react-toastify';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Table/>}/>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer/>
        </div>
    );
}

export default App;
