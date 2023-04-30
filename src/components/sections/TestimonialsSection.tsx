import React from 'react';
import useLanguageContext from "../../contexts/LanguageContext";
import {PrimaryHeader} from "../headers";
import {Testimonial, translations} from "../../static";
import {HeaderContainer, Spinner} from "../layouts";
let autoToggle: NodeJS.Timer;
const TestimonialsSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(2);

    //  Retrieve testimonials from external API
    React.useEffect(() => {
        fetch('/testimonials.json').then(resp => resp.json()).then(data => {
            data = data as Testimonial[];
            setTestimonials(data);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setError(true);
            setLoading(false);
        });

        autoToggle = setInterval(() => {
            setCurrentPage(counter => (++counter % 3) + 1);
        }, 10000);
    }, [language]);



    const displayedTestimonials = React.useMemo(() => {
        const testimonialsFiltered = testimonials.filter((testimonial, index) => (currentPage - 1) * 3 < testimonial.id && currentPage * 3 >= testimonial.id);

        return testimonialsFiltered.map((testimonial, index) => (
            <div key={index}
                className={`${(index%3) === 1 ? 'bg-DARK_BLUE lg:scale-[1.1] ' : 'bg-LIGHT_GRAY_2'} px-12 py-8 rounded-xl shadow-2xl lg:w-4/12 mx-8 my-2 lg:my-0 fade-in`} >
                <p className={`font-open-sans text-[26px] mt-8 leading-[42px] px-8 italic ${index % 3 === 1 ? `text-white` : `text-SLATE_GRAY`}`}>{testimonial.comment}</p>
                <div className="flex flex-col items-center mt-8">
                    <img src={`/${testimonial.author.picture}`}
                        alt={testimonial.author.name}
                        className="w-32 h-32 rounded-full" />
                    <p className={`font-open-sans-bold ${index % 3 === 1 ? `text-white` : `text-DARK_BLUE`} text-[21px] leading-[38px] font-bold`}>{testimonial.author.name}</p>
                    <p className={`font-open-sans ${index % 3 === 1 ? `text-white` : `text-DARK_BLUE`} text-[21px] leading-[38px] mb-4 text-center`} >{testimonial.author.occupation}</p>
                </div>
            </div>
        ))
    }, [testimonials, currentPage]);

    const changePage = (page: number): void => {
        clearInterval(autoToggle);
        setCurrentPage(page);
    }

    return (
        <section className="bg-white flex flex-col w-full mt-32">
            <HeaderContainer>
                <PrimaryHeader
                    firstLine={translations[language].TESTIMONIALS.TITLE_1}
                    secondLine={translations[language].TESTIMONIALS.TITLE_2}
                />
            </HeaderContainer>
            <div className="flex flex-col lg:flex-row justify-center w-full lg:px-20 lg:mt-24">
                {error ? <p className="text-DEEP_PINK">Failed to load testimonials. Please try again later.</p> : loading ? <Spinner /> : displayedTestimonials}
            </div>
            <div className="flex flex-row justify-center w-full mx-auto h-12 mt-24 mb-32 items-center">
                <a className={`${currentPage===1 ? 'bg-DARK_BLUE w-9 h-9' : 'bg-LIGHT_GRAY_BLUE w-6 h-6'} rounded-full`} onClick={() => changePage(1)}></a>
                <a className={`${currentPage===2 ? 'bg-DARK_BLUE w-9 h-9' : 'bg-LIGHT_GRAY_BLUE w-6 h-6'} rounded-full mx-8`} onClick={() => changePage(2)}></a>
                <a className={`${currentPage===3 ? 'bg-DARK_BLUE w-9 h-9' : 'bg-LIGHT_GRAY_BLUE w-6 h-6'} rounded-full`} onClick={() => changePage(3)}></a>
            </div>
        </section>
    );
}

export default TestimonialsSection;