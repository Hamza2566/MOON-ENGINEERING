import Team from "@/components/Team";

export const metadata = {
    title: "Our Team | Moon Engineering Consultancy",
    description: "Meet the engineering professionals driving success at Moon Engineering Consultancy.",
};

export default function TeamPage() {
    return (
        <div className="pt-20 min-h-screen">
            <Team />
        </div>
    );
}
