import './App.css'
import Footer from './components/common/Footer';
import Header from "./components/common/Header";
import Search from './components/Search/Search';
import UserList from './components/UserList/UserList';

import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3005/api';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/users`)
            .then(res => res.json())
            .then(result => {
                setUsers(result.users)
            })
    }, [])

    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList users={users}/>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;
