"use client";

export default function ContactCard() {
    return (
        <section className='flex flex-col bg-neutral-800 border border-neutral-600 rounded-2xl my-8 mx-4 xl:mx-40 lg:mx-16 md:mx-8'>
            <div className='my-16 text-center'>
                <p className='text-5xl font-light text-white'>
                    Ready to Collaborate
                </p>
                <p className='mt-2 text-base font-extralight text-neutral-400'>
                    Feel free to contact me to start collaborate :D
                </p>
                <a href="mailto:defa.danuarta@email.com?subject=Let's%20Collaborate!&body=Hi%20Defa,%0D%0A%0D%0AI’m%20interested%20in%20working%20with%20you%20on%20a%20project.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">
                    <button className='mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-extralight'>
                        Mail Me <i className="ms-2 fa-solid fa-envelope"></i>
                    </button>
                </a>
            </div>
        </section>
    );
}