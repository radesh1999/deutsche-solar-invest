import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './appLayout/AppLayout';
import HomePage from '../pages/Homepage/Homepage';
import ProjektePage from '../pages/ProjektePage/ProjektePage';
import ProjectDetailPage from '../pages/ProjektePage/overview/ProjectDetailsPage';
import InvestorenPage from '../pages/InvestorenPage/InvestorenPage';
import BerechnungenPage from '../pages/BerechnungenPage/BerechnungenPage';
import BeratungsunterlagenPage from '../pages/BeratungsunterlagenPage/BeratungsunterlagenPage';
import PresseberichtePage from '../pages/PresseberichtePage/PresseberichtePage';
import InvestorDetailPage from '../pages/InvestorenPage/components/InvestersDetailsPage';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Navigate to="/projekte" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/projects" element={<ProjektePage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/investors" element={<InvestorenPage />} />
                <Route path="/investors/:investorId" element={<InvestorDetailPage />} />
                <Route path="/berechnungen" element={<BerechnungenPage />} />
                <Route path="/beratungsunterlagen" element={<BeratungsunterlagenPage />} />
                <Route path="/presseberichte" element={<PresseberichtePage />} />
            </Route>
        </Routes>
    );
};

export default Router;