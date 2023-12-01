import { AboutContainer } from "./AboutContainer";
import { TechnologiesContainer } from "./TechnologiesContainer";
import { ProjectsContainer } from "./ProjectsContainer";

export const MainContent = () => {
  return (
    <>
      <main className="bg-blue-600 md:flex-2 rounded-xl p-5 md:p-8">
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
      </main>
    </>
  );
};
