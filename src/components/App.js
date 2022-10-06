import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductsPageTemplate } from './ProductsPageTemplate';

import '../styles/app.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path="/:productsPage" element={<ProductsPageTemplate />}></Route>
                        <Route path="*" element={<ProductsPageTemplate />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
