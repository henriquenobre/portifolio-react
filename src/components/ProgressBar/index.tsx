interface ProgressBarProps {
  title: string;
  progress: number;
}

export const ProgressBar = ({ title, progress }: ProgressBarProps) => {
  const expertiseLevel = () => {
    if (progress <= 25) {
      return "Iniciante";
    } else if (progress <= 50) {
      return "Intermediário";
    } else if (progress <= 75) {
      return "Avançado";
    } else {
      return "Expert";
    }
  };

  return (
    <div className="mt-4 w-3/4">
      <div className="flex justify-between">
        <h2>{title}</h2>
        <p className="text-xs">{expertiseLevel()}</p>
      </div>
      <div className="h-4 mt-1 bg-darkblue rounded-full">
        <div
          className="h-4 bg-gradient-to-r from-purple via-indigo to-teal rounded-full animate-pulse"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
