import { FeaturesPart } from "./_components/features-part";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="overflow-auto overflow-x-hidden flex flex-col min-h-screen bg-slate-100">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            <FeaturesPart />
            <Footer />
        </div>
    )
};

export default MarketingLayout;