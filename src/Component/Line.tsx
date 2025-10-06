interface LineProps {
    className?: string;
}

const Line = ({ className }: LineProps) => {
    return <div className={`h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent ${className}`}></div>;
};

export default Line;
