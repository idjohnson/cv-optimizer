import { UserDetails } from "@/types/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface UserHeaderProps {
  user: UserDetails;
}

export const UserHeader = ({ user }: UserHeaderProps) => {
  return (
    <Card className="p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
          <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">{user.title}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${user.email}`} className="text-primary hover:underline">
                {user.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${user.phone}`} className="text-primary hover:underline">
                {user.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};