import React from 'react';
import NavBar from '../navBar/NavBar';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='fw-bold  mt-4 mx-md-5 '>No 1. Difference between javascript and nodejs</h1>

            <h4 className='p-2 mx-md-5'>Ans := Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance .It is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</h4>
            <h1 className='fw-bold mt-4 mx-md-5'>No 2. Differences between sql and nosql databases.</h1>
            <h4 className='p-2 mx-md-5'>Ans := The some differences between SQL vs NoSQL are:
                <ul>
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ul>
            </h4>
            <h1 className='fw-bold mt-4 mx-md-5'>No 3. What is the purpose of jwt and how does it work.</h1>
            <h4 className='p-2 mx-md-5'>Ans := JWT, or JSON Web Token, is a open standard used to share security information between two parties a client and a server..
                Encrypting a JWT for a have recipient requires their public RSA key. The decryption alos takes place with the corresponding private RSA key, which the recipient must keep secret.
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. Each JWT contains encoded JSON objects, including a set of claims</h4>
        </div>
    );
};

export default Blog;