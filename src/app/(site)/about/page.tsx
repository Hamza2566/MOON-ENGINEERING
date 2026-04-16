import About from "@/components/About";

export const metadata = {
    title: "About Us | Moon Engineering Consultancy",
    description: "Learn more about our vision, mission, and core values.",
};

export default function AboutPage() {
    return (
        <div className="pt-20 min-h-screen">
            <About />
        </div>
    );
}
