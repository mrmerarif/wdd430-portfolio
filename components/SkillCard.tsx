interface SkillCardProps {
    skill: string;
  }
  
  export default function SkillCard({ skill }: SkillCardProps) {
    return (
      <div className="p-4 border rounded bg-blue-50 text-blue-800 shadow-sm">
        <h3 className="text-xl font-semibold">{skill}</h3>
      </div>
    );
  }
  