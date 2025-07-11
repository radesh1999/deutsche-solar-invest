import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './appLayout/AppLayout';
import HomePage from '../pages/Homepage/Homepage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import ProjectDetailPage from '../pages/ProjectPage/overview/ProjectDetailsPage';
import InvestorPage from '../pages/InvestorPage/InvestorPage';
import InvestorDetailPage from '../pages/InvestorPage/components/InvestersDetailsPage';
import UserPage from '../pages/User/UserPage';
import Calculations from '../pages/Calculations/Calculations';
import ConsultingDocuments from '../pages/ConsultingDocuments/Consulting-documents';
import ProjectDeveloper from '../pages/ProjectDeveloper/ProjectDeveloper';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Navigate to="/projects" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/investors" element={<InvestorPage />} />
                <Route path="/investors/:investorId" element={<InvestorDetailPage />} />
                <Route path="/calculations" element={<Calculations />} />
                <Route path="/consulting-documents" element={<ConsultingDocuments/>} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/project-developer" element={<ProjectDeveloper/>} />
            </Route>
        </Routes>
    );
};

export default Router;