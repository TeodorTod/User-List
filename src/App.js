
import * as userService from './services/userService';

import Footer from './components/common/Footer';
import Header from "./components/common/Header";
import Search from './components/Search/Search';
import UserList from './components/UserList/UserList';
import './App.css'



function App() {

    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList />
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;
