
const NewsRightDiv = ({ news }) => {
    console.log(news)

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">

                {
                    news?.map(singleNews => <div
                        key={singleNews?.title}
                        className="col-span-12 mb-6 md:col-span-8">
                        {
                            singleNews?.urlToImage === null ?
                                null :
                                <img
                                    className="w-full"
                                    src={singleNews?.urlToImage}
                                    alt="thumb"
                                />

                        }
                        <div className="col-span-12 mt-6 md:col-span-4">
                            <a href="#"
                            ><h3
                                className="mb-2.5 text-xl font-bold lg:text-[20px]"
                            >
                                    {singleNews?.title}
                                </h3></a>
                            <p className="text-base text-[#292219]">
                                {singleNews?.description}
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                {
                                    new Date(singleNews?.publishedAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                }
                            </p>
                        </div>
                    </div>)
                }
                {/* <div className="col-span-12 md:col-span-8">
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-xl font-bold lg:text-[20px]"
                        >
                                Why is Uber selling its
                                autonomous-vehicle division?
                            </h3></a>
                        <p className="text-base text-[#292219]">
                            Self-driving cars were meant to be its
                            future
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            25 Feb 2021
                        </p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-xl font-bold lg:text-[20px]"
                        >
                                Az Uber vesztesége meghaladta az
                                egymilliárd dollárt
                            </h3></a>
                        <p className="text-base text-[#292219]">
                            Progress in artificial intelligence belies a
                            lack of transparency that is vital for its
                            adoption, says Gary Marcus, coauthor of
                            “Rebooting AI”
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            21 Feb 2021
                        </p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-xl font-bold lg:text-[20px]"
                        >
                                The power of liberalism can combat
                                oppression in all its forms
                            </h3></a>
                        <p className="text-base text-[#292219]">
                            True liberals stand for individual freedom,
                            explains Deirdre Nansen McCloskey, an
                            iconoclastic economist
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            18 Feb 2021
                        </p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-xl font-bold lg:text-[20px]"
                        >
                                The power of liberalism can combat
                                oppression in all its forms
                            </h3></a>
                        <p className="text-base text-[#292219]">
                            True liberals stand for individual freedom,
                            explains Deirdre Nansen McCloskey, an
                            iconoclastic economist
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            18 Feb 2021
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default NewsRightDiv;