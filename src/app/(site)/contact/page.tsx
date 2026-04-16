import Contact from "@/components/Contact";

export const metadata = {
    title: "Contact Us | Moon Engineering Consultancy",
    description: "Get in touch with Moon Engineering Consultancy for your next project.",
};

export default function ContactPage() {
    return (
        <div className="pt-20 min-h-screen">
            <Contact />
        </div>
    );
}
