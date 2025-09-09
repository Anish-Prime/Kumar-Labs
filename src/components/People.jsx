import React, { use, useState } from "react";
import piImg from '../images/People/Dr.-Rakesh-Kumar.png';

import mem1 from '../images/People/Lab Members/Ms.-Minerva-Sharma.png';
import mem2 from "../images/People/Lab Members/Mr.-Rajeshwer-S-Jamwal.png";
import mem3 from "../images/People/Lab Members/Mr.-Bhawani-Sharma.png";
import mem4 from "../images/People/Lab Members/Ms.-Pushpa-Oraon.png";

import alm1 from "../images/People/Alumni/Dr. Ashna Nagpal.png";
import alm2 from "../images/People/Alumni/Dr. Sonali Verma.png";
import alm3 from "../images/People/Alumni/Dr. GR Bhat.png";
import alm4 from "../images/People/Alumni/Dr. Amrita Bhat.png";
import alm5 from "../images/People/Alumni/Dr. Divya Bakshi.png";
import alm6 from "../images/People/Alumni/Dr. Bhanu Sharma.png";

export function People() {
    
    const [showModal, setShowModal] = useState(false);
    const [modalChoice, setModalChoice] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const members = [
        {
        name: "Ms. Minerva Sharma",
        image: mem1,
        labStatus: "Research Scholar",
        academicQualification: "Ph.D. Ongoing",
        description: "I am Minerva, a researcher with a strong academic background in Biotechnology, holding both graduate and postgraduate degrees in the field. Currently, I am pursuing a Ph.D. in Cancer Genetics, with my research focusing on the genetic mechanisms of ovarian cancer. My passion lies in understanding how these mechanisms drive cancer progression and finding ways to translate this knowledge into therapeutic advancements. Beyond my work, I am a nature lover who finds joy in traveling, exploring new places, and immersing myself in different cultures. I enjoy observing people and learning about their traditions, which inspires me and enriches my perspective on life. Balancing my academic pursuits with these personal interests keeps me grounded and fuels my curiosity.\n"
        },
        {
        name: "Mr. Rajeshwer S Jamwal",
        image: mem2,
        labStatus: "Senior Research Fellow-CSIR",
        academicQualification: "Ph.D. Ongoing",
        description: "I completed my Bachelor’s in Biotechnology from University of Jammu and my Master’s in Science in Biotechnology, specializing in Genetics, from Shri Mata Vaishno Devi University, India. Currently, I am pursuing my Ph.D. at SMVDU as a Senior Research Fellow under CSIR, focusing on the role of DNA damage-associated genes in non-small cell lung cancer. My work combines advanced molecular biology techniques and bioinformatics to understand genetic predispositions and cancer mechanisms.\n Additionally, I have a deep passion for riding bikes and exploring new destinations, which not only fuels my adventurous spirit but also inspires my curiosity about the world around me. Whether it's navigating winding mountain trails or discovering hidden cultural gems, these experiences provide fresh perspectives that often influence my approach towards Life and  Research."
        },
        {
        name: "Mr. Bhawani Sharma",
        image: mem3,
        labStatus: "Research Scholar",
        academicQualification: "Ph.D. Ongoing",
        description: "Driven by a curiosity for the complexities of human genetics, I have pursued a dedicated academic journey. After completing my schooling and undergraduate studies in Jammu and earning a master’s degree in Biotechnology from SMVDU, I am now engaged in PhD research at SMVDU. My work delves into the genetic basis of male infertility, focusing on Y chromosome microdeletions, mitochondrial alterations, and genetic mutations. By combining advanced genomic tools with community health initiatives, I aim to contribute to both scientific understanding and impactful health solutions. Originally from the picturesque Rajouri district, I value traveling and exploring new experiences as sources of inspiration. Outside of research, I enjoy connecting with diverse perspectives, enriching my outlook on life and science.\n"
        },
        {
        name: "Ms. Pushpa Oraon",
        image: mem4,
        labStatus: "Research Scholar",
        academicQualification: "Ph.D. Ongoing",
        description: "I am  passionate educator committed to shaping the future of nursing. Alongside my academic role, I am currently pursuing a part-time Ph.D., which allows me to balance my teaching responsibilities with my dedication to research and professional growth. With years of experience in nursing education, I strive to inspire and guide my students by combining theoretical knowledge with practical applications.\n My doctoral research focuses on addressing critical challenges in healthcare, with the aim of contributing to evidence-based practices that improve patient outcomes and elevate the standards of nursing education. Balancing my dual roles as an educator and a researcher has been both challenging and rewarding, fuelling my passion for lifelong learning. I actively participate in academic collaborations, workshops, and conferences to stay updated and share insights with the wider community."
        }
    ];

    const alumni = [
        {
        name: "Dr. Ashna Nagpal",
        image: alm1,
        description: "Awarded"
        },
        {
        name: "Dr. Sonali Verma",
        image: alm2,
        description: "Awarded"
        },
        {
        name: "Dr. GR Bhat",
        image: alm3,
        description: "Awarded"
        },
        {
        name: "Dr. Amrita Bhat",
        image: alm4,
        description: "Awarded"
        },
        {
        name: "Dr. Divya Bakshi",
        image: alm5,
        description: "Awarded"
        },
        {
        name: "Dr. Bhanu Sharma",
        image: alm6,
        description: "Awarded"
        }
    ];

    const openModal = (index,choice) => {
        setModalChoice(choice);
        setCurrentIndex(index);
        setShowModal(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove("overflow-hidden");
    };

    const previousMember = () => {
        if(modalChoice)
        setCurrentIndex((currentIndex - 1 + members.length) % members.length);
        else
        setCurrentIndex((currentIndex - 1 + alumni.length) % alumni.length);
    };

    const nextMember = () => {
        if(modalChoice)
        setCurrentIndex((currentIndex + 1) % members.length);
        else
        setCurrentIndex((currentIndex + 1) % alumni.length);
    };

    let current;
    if(modalChoice)
    current = members[currentIndex];
    else
    current = alumni[currentIndex];

    function toggleAlumni() {
        const list = document.getElementById("alumni-list");
        const btn = document.getElementById("alumni-toggle-btn");
        list.classList.toggle("hidden");
        btn.textContent = list.classList.contains("hidden") ? "SHOW FULL LIST" : "HIDE FULL LIST";
    }

    function togglePI() {
        const desc = document.getElementById("pi-description");
        const icon = document.getElementById("pi-toggle-icon");
        desc.classList.toggle("hidden");
        icon.textContent = desc.classList.contains("hidden") ? "+" : "−";
    }

    return (
        <div className="bg-white text-[#2e2e2e]">
            
             <div className="bg-[#000f3a] h-40 "><div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">PEO</div>PLE</div></div>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">PRINCIPAL INVESTIGATOR</h2>
                <div className="relative flex flex-col md:flex-row items-start gap-8 bg-gray-50 shadow rounded-lg p-6">
                    <img src={piImg} alt="Dr. Rakesh Kumar" className="w-48 h-auto bg-white border-1 border-gray-400 rounded-full shadow-md" />
                    <button onClick={togglePI} className="absolute top-4 right-6 z-10 text-xl font-bold bg-[#003865] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#000f3a] transition">
                        <span id="pi-toggle-icon">+</span>
                    </button>
                    <div className="w-full">
                        <div className="relative flex-col items-center justify-between">
                            <h3 className="text-4xl text-[#000f3a] font-bold">Dr. Rakesh Kumar</h3>
                            <h4 className="text-3xl text-[#003865] font-semibold">Assistant Professor, SMVDU</h4>
                        </div>
                        <p id="pi-description" className="mt-4 text-gray-700 text-xl text-justify leading-relaxed hidden">
                            My research focuses on deciphering the genetic and molecular mechanisms underlying infertility and cancer through advanced genomic tools and epigenetic profiling. Over the years, I have successfully led numerous national and international research projects funded by esteemed agencies such as ICMR, DST, and DBT, securing substantial grants.
                            I am deeply committed to mentoring the next generation of scientists and fostering collaborative initiatives. I have organized multiple national and international workshops and serve on editorial boards of reputed journals. 
                            A key aspect of my vision is to bridge the gap between laboratory discoveries and their real-world applications, driving advancements in healthcare and biotechnology.
                        </p>
                        <div className="mt-4 font-medium text-gray-900 text-justify text-xl ">
                            I earned my Ph.D. from AIIMS, New Delhi, where my pioneering work laid the foundation for exploring the intricate genetic mechanisms of infertility. My academic journey then led to prestigious postdoctoral fellowships at the UTSW Medical Center in Dallas, USA, and Washington University in St. Louis, USA, further enriching my expertise in reproductive biology and cancer genomics.
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">LAB MEMBERS</h2>
                <div id="member-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {
                        members.map( (member, memIndex) => (
                            <div
                                key={memIndex}
                                className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden aspect-[3/4]
                                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                                onClick={() => openModal(memIndex, true)}
                            >
                                <div className="flex-1 flex items-center justify-center p-4 min-h-0">
                                    <img
                                        src={ member.image }
                                        alt={ member.name }
                                        className="w-full aspect-square object-cover border-1 border-gray-300 rounded-full shadow-md"
                                    />
                                </div>

                                <div className="p-3 text-center border-t border-gray-200">
                                    <h3 className="font-semibold text-[#000f3a] md:text-xl truncate" title={member.name}>
                                        { member.name }
                                    </h3>
                                    <h4 className="text-sm text-[#003865] md:text-base font-medium truncate" title={member.labStatus}>
                                        { member.labStatus }
                                    </h4>
                                    <h4 className="text-sm text-gray-800 md:text-base truncate" title={member.academicQualification}>
                                        { member.academicQualification }
                                    </h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-4 border-b-2 border-[#cccccc] pb-2">ALUMNI</h2>
                <button onClick={toggleAlumni} id="alumni-toggle-btn" className="mb-4 px-4 py-2 bg-white border border-gray-400 text-[#003865] rounded hover:bg-[#f0f0f0] transition">
                    SHOW FULL LIST
                </button>
                <div id="alumni-list" className="hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {
                        alumni.map( (alum, alumIndex) => (
                            <div 
                                key={alumIndex} 
                                className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden aspect-[3/4] 
                                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" 
                                onClick={() => openModal(alumIndex, false)}
                            >
                                <div className="flex-1 relative min-h-0">
                                    <img 
                                        src={ alum.image } 
                                        alt={ alum.name } 
                                        className="absolute w-full h-full object-cover" 
                                    />
                                </div>

                                <div className="p-3 text-center">
                                    <h3 className="text-[#000f3a] md:text-xl font-semibold truncate" title={alum.name}>
                                        { alum.name }
                                    </h3>
                                    <h4 className="text-sm text-[#003865] md:text-lg font-medium truncate" title={alum.description}>
                                        { alum.description }
                                    </h4>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </section>

            {showModal && (
                <>
                    <div className="sm:hidden fixed inset-0 bg-black/50 z-50 flex items-center">
                        <div className="bg-[#2a2a2a]/95 text-white rounded-lg shadow-xl mx-[10vw] w-[80vw] py-4 max-h-full overflow-y-auto relative">
                            <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
                            aria-label="Close modal"
                            >
                            &times;
                            </button>
    
                            <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={previousMember}
                                className="w-10 h-10 bg-gray-100 text-black text-xl rounded-full hover:bg-gray-200"
                            >
                                &#8592;
                            </button>
    
                            <img
                                src={current.image}
                                alt={current.name}
                                className="w-[80%] aspect-square object-cover rounded-full shadow-md"
                            />
    
                            <button
                                onClick={nextMember}
                                className="w-10 h-10 bg-gray-100 text-black text-xl rounded-full hover:bg-gray-200"
                            >
                                &#8594;
                            </button>
    
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-semibold mb-2">{current.name}</h3>
                                <p className="text-gray-200 whitespace-pre-line text-justify p-4 text-sm">{current.description}</p>
                            </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="hidden sm:flex items-center justify-center fixed inset-0 bg-black/10 z-50">
                        <div className="bg-[#2a2a2a]/95 p-8 md:p-12 rounded-xl max-w-3xl w-[90%] h-[95vh] overflow-y-auto shadow-xl text-center text-white flex-col justify-center relative">
                            <button onClick={closeModal} className="absolute top-4 right-6 text-white hover:text-red-400 text-3xl font-bold">&times;</button>
                            <div className="h-[65vh] flex justify-around mb-2">
                                <button onClick={previousMember} className="w-[20%] h-[8vh] my-auto text-3xl text-black bg-gray-100 rounded hover:bg-gray-200">&#8592;</button>
                                <img src={current.image} alt={current.name} className="p-3 aspect-square object-cover rounded-full shadow-md" />
                                <button onClick={nextMember} className="w-[20%] h-[8vh] my-auto text-3xl text-black bg-gray-100 rounded hover:bg-gray-200">&#8594;</button>
                            </div>
                            <div className="h-[20vh] flex-col justify-center items-center mb-2">
                                <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
                                <p className="text-gray-100 max-w-3xl whitespace-pre-line text-justify p-4 text-lg mx-auto">{current.description}</p> 
                            </div>  
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
