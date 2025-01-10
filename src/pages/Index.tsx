import { UserHeader } from "@/components/UserHeader";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { resumeData } from "@/data/resume-data";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <UserHeader user={resumeData.user} />
      <ExperienceTimeline jsonUrl="/experiences.json" />
    </div>
  );
};

export default Index;