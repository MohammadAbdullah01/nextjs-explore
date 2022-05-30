import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {
    return (
        <div>
            {users.map(user => <div key={user.id}>
                <h3> Name: {user.name} <button><Link href={`users/${user.id}`}>
                    <a>details</a>
                </Link></button></h3>
            </div>)}
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}