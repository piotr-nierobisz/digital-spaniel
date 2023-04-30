import React from 'react';
import {PageContainer, Spinner} from "../components/layouts";
import {
    FooterSection,
    HeaderSection,
    ProjectsSection,
    ServicesSection,
    StudiesSection,
    TestimonialsSection
} from "../components/sections";
const LandingPage: React.FC = (): JSX.Element => {
    const AboutWrapper = React.lazy(() => import('../components/sections/AboutSection'))

    return (
        <PageContainer>
            <HeaderSection />
            <ServicesSection />
            <ProjectsSection />
            <StudiesSection />
            <React.Suspense fallback={<Spinner />}>
                <AboutWrapper />
            </React.Suspense>
            <TestimonialsSection />
            <FooterSection />
        </PageContainer>
    );
}

export default LandingPage;