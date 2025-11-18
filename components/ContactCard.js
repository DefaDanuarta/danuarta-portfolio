"use client";

export default function ContactCard() {
    return (
        <section className="flex flex-col bg-neutral-800 border border-neutral-600 rounded-2xl mt-8 mb-2 mx-4 xl:mx-40 lg:mx-16 md:mx-8">
            <div className="my-16 text-center px-4">
                <p className="text-3xl font-light text-white md:text-5xl">
                    I"m Ready to Collaborate
                </p>
                <p className="mt-2 text-sm font-extralight text-neutral-400 md:text-base">
                    Feel free to contact me to start collaborate :D
                </p>
                <a href={"mailto:defa.danuarta@email.com"}>
                    <button className="mt-4 px-4 py-2 border text-[#C68F6B] border-[#C68F6B] rounded-full hover:bg-[#C68F6B] hover:text-black transition-all text-sm font-extralight">
                        Mail Me <i className="ms-2 fa-solid fa-envelope"></i>
                    </button>
                </a>
            </div>
        </section>
    );
}