import React from 'react';
import useLanguageContext from "../../contexts/LanguageContext";
import {PrimaryHeader} from "../headers";
import {ProjectInfo, ProjectType, translations} from "../../static";
import {ProjectButton, UnderlineButton} from "../buttons";
import {HeaderContainer, Spinner} from "../layouts";


const ProjectsSection: React.FC = (): JSX.Element => {
    const [projectTypeSelected, setProjectTypeSelected] = React.useState<ProjectType>(ProjectType.ALL)
    const {language} = useLanguageContext();
    const projectTypes = React.useMemo(() => translations[language].PROJECTS.PROJECT_TYPES.map((projectType: string, index: number) => (
        <ProjectButton
            key={index}
            name={projectType}
            isSelected={projectType===projectTypeSelected}
            onClick={() => {
                setProjectTypeSelected(projectType as ProjectType)}
            }/>
    )), [projectTypeSelected, language]);
    const ProjectWrapper = React.lazy(() => import('../layouts/ProjectTile'));

    const projects = React.useMemo(() => {
        const projectsUnfiltered = translations[language].PROJECTS.PROJECT_INFO as ProjectInfo[];
        let projectsFiltered = projectsUnfiltered;
        if (projectTypeSelected !== ProjectType.ALL) {
            projectsFiltered = projectsUnfiltered.filter((project) => project.category === projectTypeSelected);
        }
        return projectsFiltered.map((project, index) => (
            <div key={index} className={`lg:p-2 relative overflow-hidden ${project.col_span > 1 ? 'col-span-2' : ''}`}>
                <React.Suspense fallback={<Spinner />}>
                    <ProjectWrapper project={project} />
                </React.Suspense>
            </div>
        ))
    }, [projectTypeSelected, language]);

    return (
        <section className="bg-white flex flex-col w-full mt-14 lg:mt-28">
            <HeaderContainer>
                <PrimaryHeader
                    firstLine={translations[language].PROJECTS.TITLE_1}
                    secondLine={translations[language].PROJECTS.TITLE_2}
                />
            </HeaderContainer>
            <div className="flex flex-col mb-20 px-2 lg:px-0">
                <div className="flex flex-row lg:w-3/4 w-full mx-auto mb-16 justify-center lg:justify-normal">
                    {projectTypes}
                </div>
                <div className="flex flex-row lg:w-3/4 mx-auto mb-20">
                    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-1 w-full">
                        {projects}
                    </div>
                </div>
                <div className="flex flex-row lg:w-3/4 w-full mx-auto">
                    <div className="flex flex-row justify-between w-full">
                        <UnderlineButton>{translations[language].PROJECTS.VIEW_BUTTON}</UnderlineButton>
                        <div className="flex flex-row">
                            <div className="flex h-16 w-16 bg-SLATE_GRAY_TRANSPARENT cursor-pointer mx-8">
                                <a className="text-SLATE_GRAY m-auto text-lg font-bold">＜</a>
                            </div>
                            <div className="flex h-16 w-16 bg-DARK_BLUE cursor-pointer">
                                <a className="text-white m-auto font-bold">＞</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;