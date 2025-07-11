import React from 'react';
import { mockUserData } from './userMockData';
import UserDataCard from './UserDataCard';
import RequestsCard from './RequestsCard';

const UserProfilePage: React.FC = () => {
    const user = mockUserData;
    return (
        <div className="bg-brand-light-gray min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-lg font-bold text-brand-text-dark">{user.name}</h1>
                </header>

                <main>
                    <UserDataCard data={user} />
                    <RequestsCard requests={user.requests} />
                </main>
            </div>
        </div>
    );
};

export default UserProfilePage;