export default function Loading() {
    return (
        <section className="px-5 section-padding overflow-hidden relative animate-pulse">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10 space-y-4">
                    <div className="h-4 w-20 bg-coffee/20 rounded mx-auto"></div>
                    <div className="h-8 w-60 bg-coffee/20 rounded mx-auto"></div>
                    <div className="h-4 w-40 bg-coffee/20 rounded mx-auto"></div>
                </div>

                <div className="h-10 w-full bg-coffee/20 rounded mx-auto mb-8"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border bg-white p-4 space-y-3"
                        >
                            <div className="h-40 bg-coffee/20 rounded-xl"></div>
                            <div className="h-4 w-3/4 bg-coffee/20 rounded"></div>
                            <div className="h-3 w-1/2 bg-coffee/20 rounded"></div>
                            <div className="flex justify-between pt-2">
                                <div className="h-3 w-10 bg-coffee/20 rounded"></div>
                                <div className="h-5 w-14 bg-coffee/20 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
