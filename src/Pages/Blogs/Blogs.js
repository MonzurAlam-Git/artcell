import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blogs = () => {
    return (
        <div className='w-75 container mt-3'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        The authorization is a process utilized in an app that helps in controlling the informational access and limiting actions performed by users. Similarly, authentication is a process to check if the user is allowed to access the information or perform any action. If an authenticated user is using your app, they have identified their true identity through several ways, such as providing the right credentials.

                        Although authentication will help you know the true identity of a user, it can’t help you control access, which is why we utilize authorization with authentication. Without one of these two, havoc can be created in your app. For instance, any user can change the password of another or delete data posted by another user
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase gives a quick database and a backend for web apps that need to be built and scaled fast.

                        Connecting a Firebase database to a React app is, unfortunately, not straightforward. There are some confusing things about the way data sync in Firebase integrates with how React handles state. To get the most out of Firebase, it's best to integrate it in a manner that complements the uni-directional data flow pattern of React

                        <span className='fw-bold'> The best Firebase alternatives</span>
                        1 Back4App
                        2 Backendless
                        3 Kuzzle
                        4 Pubnub
                        5 Kumulos
                        6 Appwrite
                        7 Deployd
                        8 NHost
                        9 AWS Amplify
                        10 Heroku
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        There are many services which Firebase provides, Most useful of them are:
                        Cloud Firestore.
                        Cloud Functions.
                        Authentication.
                        Hosting.
                        Cloud Storage.
                        Google Analytics.
                        Predictions.
                        Cloud Messaging
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    );
};

export default Blogs;