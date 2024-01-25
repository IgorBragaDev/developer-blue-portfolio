import Link from "next/link";
import Image from "next/image";
import {
  RiGithubFill,
  RiExternalLinkFill
} from "react-icons/ri";

import { Card, CardHeader } from "@/components/Other/UI/card";
import { Badge } from "@/components/Other/UI/badge";

import { ProjectCardInterface } from "@/interfaces/ProjectInterface";

const ProjectCard = ({ project, specialStyle }: ProjectCardInterface) => {
  const cardClass = specialStyle ? "min-description-height" : "";

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div
          className="relative w-full h-[300px]
           flex items-center justify-center bg-secondary/40 xl:bg-work_project_bg 
            xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt="Project Image"
            priority
          />
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              href={project.link}
              className="bg-secondary w-[54px] h[54px]
              rounded-[4px] flex justify-center scale-0
                  opacity-0 group-hover:scale-100 group-hover:opacity-100
                  transition-all duration-200"
            >
              <RiExternalLinkFill className="text-white" />
            </Link>

            <Link
              target="_blank"
              href={project.github}
              className="bg-secondary w-[54px] h[54px]
              rounded-[4px] flex justify-center scale-0
                  opacity-0 group-hover:scale-100 group-hover:opacity-100
                  transition-all duration-200"
            >
              <RiGithubFill className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge
          className="uppercase
                text-sm font-medium mb-2 absolute top-4
                left-5"
        >
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p
          className={`text-muted-foreground
                text-lg  ${cardClass}`}
        >
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
