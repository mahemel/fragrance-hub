export default function Loading() {
    return (
        <section className="px-5 section-padding overflow-hidden relative animate-pulse">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border h-100 w-full bg-coffee/20"></div>

                    <div className="rounded-2xl border h-100 w-full bg-coffee/10"></div>

                    <div className="rounded-2xl border h-50 w-full bg-coffee/10 md:col-span-2"></div>

                    <div className="rounded-2xl border h-50 w-full bg-coffee/10 md:col-span-2"></div>
                </div>
            </div>
        </section>
    );
}
