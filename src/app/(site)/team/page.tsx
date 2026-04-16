import Team from "@/components/Team";

export const metadata = {
    title: "Our Team | Moon Engineering Consultancy",
    description: "Meet the engineering professionals driving success at Moon Engineering Consultancy.",
};

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary-dark pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full blur-[100px] z-0 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">Our Team</h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
                        Meet the engineering professionals driving success at MOON.
                    </p>
                </div>
            </section>
            <div className="py-24">
                <Team />
            </div>
        </div>
    );
}
