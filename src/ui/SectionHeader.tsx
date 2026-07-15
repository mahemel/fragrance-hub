const SectionHeader = ({
    center,
    label,
    title,
    subtitle,
}: {
    center?: boolean;
    label: string;
    title: string;
    subtitle?: string;
}) => {
    return (
        <div className={`pb-10 ${center ? "text-center" : ""}`}>
            {label && (
                <p className="text-xs tracking-[0.25em] uppercase text-accent font-bold mb-3">
                    {label}
                </p>
            )}
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-title font-bold ${subtitle && "mb-4"}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`text-sm md:text-base leading-relaxed tracking-wider max-w-2xl ${center ? "mx-auto" : ""}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
