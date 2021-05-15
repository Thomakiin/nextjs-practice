import Link from 'next/link'
import NavBar from '../components/NavBar'
//import Image from 'next/image'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { usersData: data } // initalized new variable = "data"
    }
}

const Users = ({ usersData }) => {
    return (
        <>
            <NavBar />
            <div className="blog">
                {usersData.map(user => (
                    <a >
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Users;