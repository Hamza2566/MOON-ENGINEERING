import Services from "@/components/Services";

export const metadata = {
    title: "Our Services | Moon Engineering Consultancy",
    description: "Comprehensive engineering solutions tailored to meet the highest standards of safety, sustainability, and efficiency.",
};

export default function ServicesPage() {
    return (
        <div className="pt-20 min-h-screen">
            <Services />
        </div>
    );
}
