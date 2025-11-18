"use client";

export default function ExperienceSection({ experiences = [] }) {
    // Group experiences by organization
    const groupedExperiences = experiences.reduce((acc, exp) => {
        if (!acc[exp.organization]) acc[exp.organization] = [];
        acc[exp.organization].push(exp);
        return acc;
    }, {});

    return (
        <section>
            {Object.entries(groupedExperiences).map(([org, exps], idx) => {
                const uniqueSkills = [...new Set(exps.flatMap((e) => e.skills))];

                return (
                    <div key={org} className="mb-10">
                        {exps.map((exp, i) => (
                            <div key={i} className="mb-4 last:mb-4">
                                <div className="flex flex-col font-light md:justify-between md:items-start">
                                    <div className="flex flex-col w-full md:flex-row justify-between">
                                        <div className="flex-auto my-4 md:my-auto text-start">
                                            <h3 className="text-2xl">{exp.job_title}</h3>
                                            <p className="text-neutral-400">{exp.organization}</p>
                                        </div>
                                        <div className="flex-auto text-sm text-start md:my-auto md:text-end lg:text-base">
                                            <p className="font-extralight text-[#cd9570]">{exp.date}</p>
                                            <p className="text-neutral-400">{exp.location}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 font-extralight text-neutral-200 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Unique skill pills hanya muncul sekali per organisasi */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {uniqueSkills.map((skill, s) => (
                                <span
                                    key={s}
                                    className="px-3 py-1 text-sm font-extralight rounded-full border border-neutral-700 bg-neutral-800 hover:bg-[#cd9570] hover:text-white hover:border-[#cd9570] text-neutral-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Divider antar organisasi */}
                        {idx !== Object.entries(groupedExperiences).length - 1 && (
                            <div className="h-px bg-neutral-700 mt-10"></div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}
