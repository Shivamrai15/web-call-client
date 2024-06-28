import { IconType } from "react-icons";

interface FeatureCardProps {
    Icon : IconType,
    title : string;
    description : string
}

export const FeatureCard = ({
    Icon,
    title,
    description,
} : FeatureCardProps ) => {

    return (
        <div className="w-full p-4 py-6 rounded-lg cursor-pointer hover:shadow-lg bg-muted/80 hover:scale-105 hover:-translate-y-3 transition-all duration-300 h-full space-y-3">
            <Icon className="h-10 w-10 text-zinc-700" />
            <h2 className="text-lg font-semibold text-zinc-700" >{title}</h2>
            <p className="text-zinc-600" >{description}</p>
        </div>
    )
}
