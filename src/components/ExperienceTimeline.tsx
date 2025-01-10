import { useEffect, useState } from "react";
import { Experience } from "@/types/resume";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ExperienceTimelineProps {
  jsonUrl: string;
}

export const ExperienceTimeline = ({ jsonUrl }: ExperienceTimelineProps) => {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data.experiences);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching experiences:", error);
        setLoading(false);
      });
  }, [jsonUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!experiences) {
    return <div>No experiences available.</div>;
  }

  return (
    <div className="relative pl-8 md:pl-16">
      <div className="timeline-connector" />
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={`${experience.companyName}-${index}`}
            className="relative animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Avatar className="w-16 h-16 border-2 border-background absolute -left-8 md:-left-16">
                  <AvatarImage src={experience.companyLogo} alt={experience.companyName} />
                  <AvatarFallback>{experience.companyName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 ml-8 md:ml-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.companyName}</h3>
                      <p className="text-muted-foreground">{experience.title}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{experience.location}</p>
                  <p className="mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};