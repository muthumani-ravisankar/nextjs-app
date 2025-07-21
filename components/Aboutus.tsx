export default function Aboutus() {
    return (
            <section className="min-h-screen bg-primary text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
                    <img src="https://64.media.tumblr.com/6997a2cec9404506d032262ff92d99cb/tumblr_o7he4kisDT1ubsl2qo1_1280.jpg" alt="About Me" className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg" />
                </div>

                <div className="w-full md:w-7/12 text-center md:text-left relative">
                    <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-[2px] bg-white"></div>
                            <p>MORE ABOUT</p>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
                        Precision. Performance. Prestige.
                    </h2>


                    <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                        At Apex Motors, we don't just build cars — we engineer experiences.<br /> Since our inception, we've been driven by a singular mission:<br />
                        to redefine the art of driving through innovation, luxury, and uncompromising performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#" className="bg-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center">
                            See Projects
                        </a>
                        <a href="#" className="border border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center">
                            More Details
                        </a>
                    </div>
                </div>

            </section>
    

    )
}
