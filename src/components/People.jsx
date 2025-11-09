import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import piImg from '/images/People/Dr.-Rakesh-Kumar.png';

// Lab Members Images
import mem1 from '/images/People/Lab Members/Ms.-Minerva-Sharma.png';
import mem2 from "/images/People/Lab Members/Mr.-Rajeshwer-S-Jamwal.png";
import mem3 from "/images/People/Lab Members/Mr.-Bhawani-Sharma.jpeg";
import mem4 from "/images/People/Lab Members/Ms.-Agamya.jpeg";
import mem5 from "/images/People/Lab Members/Swati-Misri.jpeg";
import mem6 from "/images/People/Lab Members/Ms.-Sheen-Bhat.jpeg";
import mem7 from "/images/People/Lab Members/Ms.-Arushi-Gupta.jpeg";
import mem8 from "/images/People/Lab Members/Mr.-Jagdeep-Singh.jpeg";
import mem9 from "/images/People/Lab Members/Vitasta-Kuchroo.jpeg";
import mem10 from "/images/People/Lab Members/Ms.-Pushpa-Oraon.jpeg";

// Alumni Images
import alm1 from "/images/People/Alumni/Dr. Ashna Nagpal.png";
import alm2 from "/images/People/Alumni/Dr. Sonali Verma.png";
import alm3 from "/images/People/Alumni/Dr. GR Bhat.png";
import alm4 from "/images/People/Alumni/Dr. Amrita Bhat.png";
import alm5 from "/images/People/Alumni/Dr. Divya Bakshi.png";
import alm6 from "/images/People/Alumni/Dr. Bhanu Sharma.png";

export function People() {
    
    const [showModal, setShowModal] = useState(false);
    const [modalSource, setModalSource] = useState('members');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAlumniVisible, setIsAlumniVisible] = useState(true);
    const [isPiVisible, setIsPiVisible] = useState(false);

    const members = [
        { 
            name: "Ms. Minerva Sharma", 
            image: mem1, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Submitted", 
            description: "I am Minerva, a researcher with a strong academic background in Biotechnology, holding both graduate and postgraduate degrees in the field. Currently, I am pursuing a Ph.D. in Cancer Genetics, with my research focusing on the genetic mechanisms of ovarian cancer. My passion lies in understanding how these mechanisms drive cancer progression and finding ways to translate this knowledge into therapeutic advancements. Beyond my work, I am a nature lover who finds joy in traveling, exploring new places, and immersing myself in different cultures. I enjoy observing people and learning about their traditions, which inspires me and enriches my perspective on life. Balancing my academic pursuits with these personal interests keeps me grounded and fuels my curiosity.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Mr. Rajeshwer S Jamwal", 
            image: mem2, 
            labStatus: "Senior Research Fellow-CSIR", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I completed my Bachelor’s in Biotechnology from University of Jammu and my Master’s in Science in Biotechnology, specializing in Genetics, from Shri Mata Vaishno Devi University, India. Currently, I am pursuing my Ph.D. at SMVDU as a Senior Research Fellow under CSIR, focusing on the role of DNA damage-associated genes in non-small cell lung cancer. My work combines advanced molecular biology techniques and bioinformatics to understand genetic predispositions and cancer mechanisms.\n Additionally, I have a deep passion for riding bikes and exploring new destinations, which not only fuels my adventurous spirit but also inspires my curiosity about the world around me. Whether it's navigating winding mountain trails or discovering hidden cultural gems, these experiences provide fresh perspectives that often influence my approach towards Life and Research.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Mr. Bhawani Sharma", 
            image: mem3, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "Driven by a curiosity for the complexities of human genetics, I have pursued a dedicated academic journey. After completing my schooling and undergraduate studies in Jammu and earning a master’s degree in Biotechnology from SMVDU, I am now engaged in PhD research at SMVDU. My work delves into the genetic basis of male infertility, focusing on Y chromosome microdeletions, mitochondrial alterations, and genetic mutations. By combining advanced genomic tools with community health initiatives, I aim to contribute to both scientific understanding and impactful health solutions. Originally from the picturesque Rajouri district, I value traveling and exploring new experiences as sources of inspiration. Outside of research, I enjoy connecting with diverse perspectives, enriching my outlook on life and science.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Ms. Agamya", 
            image: mem4, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I am Agamya, a researcher driven by curiosity about how life at the microscopic level shapes health and disease. My journey began with a fascination for biology, which led me to earn a postgraduate degree in Zoology with distinction, followed by a deep dive into Biotechnology. My research journey has been shaped by diverse hands-on experiences across both molecular and behavioral biology. Currently, I am pursuing my Ph.D. in Biotechnology, particularly in Cancer Biology at Shri Mata Vaishno Devi University, where my research focuses on understanding how dietary nitrosamines and genetic factors contribute to colorectal cancer in the population of Jammu and Kashmir. Through this work, I aim to uncover the molecular links between lifestyle, environment, and cancer, with the hope of contributing to strategies for early detection and prevention. Beyond the world of cells and molecules, I am an avid nature lover and traveler. These experiences remind me that curiosity—whether in the lab or in life—is the key to discovery.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Ms. Swati Misri", 
            image: mem5, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "A Researcher whose career is defined by curiosity, perseverance, and a deep commitment to advancing the fields of molecular biology and genomics. Ever since receiving my Bsc. from Gharwal university and Msc from Central University of Kerala I have been interested in pursuing my curiosities. Since 2018, I have made significant contributions at Dr. Ganju Lab (OSU), leading pivotal research on microRNA expression, drug resistance in cancer, and tumor micro-environment mechanisms. I have joined Dr. Rakesh Kumar as a PhD scholar in 2025. My focus of research is on lung cancer drug resistance and molecular pathways involved in drug resistance. Apart from being a researcher I love dancing my heart out and exploring new places. Exploring new places and cultures helps me refresh my mind and thoughts.", 
            cvLink: "#", 
            scholarLink: "https://scholar.google.com/citations?user=mktchc8AAAAJ&hl=en&oi=ao" 
        },
        { 
            name: "Ms. Sheen Bhat", 
            image: mem6, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I completed my Bachelor’s degree in Botany from Miranda House, University of Delhi, followed by a Master’s in Life Sciences from the Central University of Gujarat. During my master’s dissertation, I explored the field of nanotechnology-based drug delivery, focusing on the synthesis of a hybrid system combining monocyte membranes and liposomes for targeted cancer therapy, exploring its potential for enhanced drug delivery and bio-compatibility. Currently, I am pursuing my Ph.D. at the Centre for Human Genomics, Shri Mata Vaishno Devi University, where my research is focused on cancer genetics, aiming to understand the molecular and genetic mechanisms underlying cancer progression. Joint PhD scholar.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Ms. Arushi Gupta", 
            image: mem7, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I hold a Bachelor of Science degree from Government College for Women, Parade, Jammu, followed by a Master’s in Human Genetics from the University of Jammu. During my postgraduate studies, I developed a deep interest in genetic research, which inspired me to pursue a PhD in Biotechnology at Shri Mata Vaishno Devi University. My doctoral research focuses on the genetics of female infertility, with the aim of identifying key genetic factors and molecular mechanisms that contribute to reproductive challenges in women. Through this work, I hope to contribute to the understanding of infertility from a genetic perspective. Outside of my academic interests, I enjoy traveling and experiencing diverse cultures, which has enriched my perspective and adaptability. I’m particularly interested in historical sites and natural landscapes.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Mr. Jagdeep Singh", 
            image: mem8, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I have done my masters in zoology and currently I am researching on various genetic and non-genetic factors and their association with prostate cancer development. I aim to identify the various genetic factors of prostate cancer and the link between non-genetic factors in the Jammu & Kashmir population. Earlier a teacher by profession, research is a field that inspires a sense of enthusiasm and new learning opportunities. I follow the philosophy of Bhagavad Gita which states- In fact all actions are being performed by the modes of Prakruti (Primordial Nature). The fool, whose mind is deluded by egoism, thinks: “I am the doer.”", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Ms. Vitasta Kuchroo", 
            image: mem9, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "Bachelors: (BSc Biotechnology) Shri Mata Vaishno Devi University\nMasters: (MSc Biotechnology) Shri Mata Vaishno Devi university\nIn my masters I, studied the effects of natural and synthetic drugs on senescent cells. Project Description: Cancer Genetics focusing on genetic mechanism of Gastric cancer and further looking for therapeutic advancements. Beside working as a researcher, I enjoy exploring different cuisines and seeking out new adventures.", 
            cvLink: "#", 
            scholarLink: "#" 
        },
        { 
            name: "Ms. Pushpa Oraon", 
            image: mem10, 
            labStatus: "Research Scholar", 
            academicQualification: "Ph.D. Ongoing", 
            description: "I am passionate educator committed to shaping the future of nursing. Alongside my academic role, I am currently pursuing a part-time Ph.D., which allows me to balance my teaching responsibilities with my dedication to research and professional growth. With years of experience in nursing education, I strive to inspire and guide my students by combining theoretical knowledge with practical applications.\n My doctoral research focuses on addressing critical challenges in healthcare, with the aim of contributing to evidence-based practices that improve patient outcomes and elevate the standards of nursing education. Balancing my dual roles as an educator and a researcher has been both challenging and rewarding, fuelling my passion for lifelong learning. I actively participate in academic collaborations, workshops, and conferences to stay updated and share insights with the wider community.", 
            cvLink: "#", 
            scholarLink: "#" 
        }
    ];

    // Added generic descriptions for Alumni to populate the modal
    const alumni = [
        { name: "Dr. Ashna Nagpal", image: alm1, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. Ashna Nagpal is a valued alumnus of our laboratory. She successfully completed her Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." },
        { name: "Dr. Sonali Verma", image: alm2, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. Sonali Verma is a valued alumnus of our laboratory. She successfully completed her Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." },
        { name: "Dr. GR Bhat", image: alm3, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. GR Bhat is a valued alumnus of our laboratory. He successfully completed his Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." },
        { name: "Dr. Amrita Bhat", image: alm4, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. Amrita Bhat is a valued alumnus of our laboratory. She successfully completed her Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." },
        { name: "Dr. Divya Bakshi", image: alm5, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. Divya Bakshi is a valued alumnus of our laboratory. She successfully completed her Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." },
        { name: "Dr. Bhanu Sharma", image: alm6, labStatus: "Research Alumni", academicQualification: "Ph.D. Awarded", description: "Dr. Bhanu Sharma is a valued alumnus of our laboratory. She successfully completed her Ph.D. research under the guidance of Dr. Rakesh Kumar and has since moved on to contribute further to the scientific community." }
    ];

    const openModal = (index, source) => {
        setModalSource(source);
        setCurrentIndex(index);
        setShowModal(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove("overflow-hidden");
    };

    const activeList = modalSource === 'members' ? members : alumni;

    const navigateModal = (direction) => {
        const newIndex = (currentIndex + direction + activeList.length) % activeList.length;
        setCurrentIndex(newIndex);
    };

    const currentItem = activeList[currentIndex];

    return (
        <div className="bg-white text-[#2e2e2e]">
             <div className="bg-[#000f3a] h-40 "><div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">PEO</div>PLE</div></div>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">PRINCIPAL INVESTIGATOR</h2>
                <div className="relative flex flex-col md:flex-row items-start gap-8 bg-gray-50 shadow rounded-lg p-6">
                    <img src={piImg} alt="Dr. Rakesh Kumar" className="w-48 h-auto bg-white border-1 border-gray-400 rounded-full shadow-md" />
                    <button onClick={() => setIsPiVisible(!isPiVisible)} className="absolute top-4 right-6 z-10 text-xl font-bold bg-[#003865] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#000f3a] transition">
                        <span>{isPiVisible ? "−" : "+"}</span>
                    </button>
                    <div className="w-full">
                        <div className="relative flex-col items-center justify-between">
                            <h3 className="text-4xl text-[#000f3a] font-bold">Dr. Rakesh Kumar</h3>
                            <h4 className="text-3xl text-[#003865] font-semibold">Assistant Professor, SMVDU</h4>
                            <div className="flex gap-4 mt-4">
                                <a href="/people" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003865] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#000f3a] transition-colors">
                                    View CV
                                </a>
                                <a href="/people" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f0f0f0] text-[#003865] border border-gray-300 px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-300 transition-colors">
                                    Google Scholar
                                </a>
                            </div>
                        </div>
                        {isPiVisible && (
                            <p className="mt-4 text-gray-700 text-xl leading-relaxed sm:text-justify">
                                His research focuses on deciphering the genetic and molecular mechanisms underlying infertility and cancer through advanced genomic tools and epigenetic profiling. Over the years, he has successfully led numerous national and international research projects funded by esteemed agencies such as ICMR, DST, and DBT, securing substantial grants.
                                He is deeply committed to mentoring the next generation of scientists and fostering collaborative initiatives. He has organized multiple national and international workshops and serve on editorial boards of reputed journals. 
                                A key aspect of his vision is to bridge the gap between laboratory discoveries and their real-world applications, driving advancements in healthcare and biotechnology.
                            </p>
                        )}
                        <div className="mt-4 font-medium text-gray-900 text-xl sm:text-justify">
                            He earned his Ph.D. from AIIMS, New Delhi, where his pioneering work laid the foundation for exploring the intricate genetic mechanisms of infertility. His academic journey then led to prestigious postdoctoral fellowships at the UTSW Medical Center in Dallas, USA, and Washington University in St. Louis, USA, further enriching his expertise in reproductive biology and cancer genomics.
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">LAB MEMBERS</h2>
                <div id="member-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {members.map((member, memIndex) => (
                        <div key={memIndex} className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden aspect-[3/4] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => openModal(memIndex, 'members')}>
                            <div className="flex-1 flex items-center justify-center p-4 min-h-0">
                                <img src={member.image} alt={member.name} loading="lazy" className="w-full aspect-square object-cover border-1 border-gray-300 rounded-full shadow-md"/>
                            </div>
                            <div className="p-3 text-center border-t border-gray-200">
                                <h3 className="font-semibold text-[#000f3a] md:text-xl truncate" title={member.name}>{member.name}</h3>
                                <h4 className="text-sm text-[#003865] md:text-base font-medium truncate" title={member.labStatus}>{member.labStatus}</h4>
                                <h4 className="text-sm text-gray-800 md:text-base truncate" title={member.academicQualification}>{member.academicQualification}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-4 border-b-2 border-[#cccccc] pb-2">ALUMNI</h2>
                <button onClick={() => setIsAlumniVisible(!isAlumniVisible)} className="mb-4 px-4 py-2 bg-white border border-gray-400 text-[#003865] rounded hover:bg-[#f0f0f0] transition">
                    {isAlumniVisible ? "HIDE FULL LIST" : "SHOW FULL LIST"}
                </button>
                {isAlumniVisible && (
                    <div id="alumni-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {alumni.map((alum, alumIndex) => (
                            <div key={alumIndex} className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden aspect-[3/4] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => openModal(alumIndex, 'alumni')}>
                                <div className="flex-1 flex items-center justify-center p-4 min-h-0">
                                    <img src={alum.image} alt={alum.name} loading="lazy" className="w-full aspect-square object-cover border-1 border-gray-300 rounded-full shadow-md"/>
                                </div>
                                <div className="p-3 text-center border-t border-gray-200">
                                    <h3 className="font-semibold text-[#000f3a] md:text-xl truncate" title={alum.name}>{alum.name}</h3>
                                    <h4 className="text-sm text-[#003865] md:text-base font-medium truncate" title={alum.labStatus}>{alum.labStatus}</h4>
                                    <h4 className="text-sm text-gray-800 md:text-base truncate" title={alum.academicQualification}>{alum.academicQualification}</h4>
                                </div>
                            </div> 
                        ))}
                    </div>
                )}
            </section>

            {showModal && (
                <>
                    <div className="sm:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                        <div className="bg-[#2a2a2a]/95 text-white rounded-lg shadow-xl mx-auto w-[90vw] p-4 max-h-[80vh] overflow-y-auto relative flex flex-col">
                            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl hover:text-red-400 z-10" aria-label="Close modal">&times;</button>
                            <div className="flex items-center justify-between">
                                <button onClick={() => navigateModal(-1)} className="p-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Previous">
                                    <ChevronLeft size={24}/>
                                </button>
                                <img src={currentItem.image} alt={currentItem.name} className="w-3/5 aspect-square object-cover rounded-full shadow-md mx-2"/>
                                <button onClick={() => navigateModal(1)} className="p-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Next">
                                    <ChevronRight size={24}/>
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-2xl font-semibold mb-2">{currentItem.name}</h3>
                                <div className="flex justify-center gap-3 my-3">
                                    {currentItem.cvLink && currentItem.cvLink !== "#" && (
                                        <a href={currentItem.cvLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-3 py-1 rounded-md font-semibold text-xs hover:bg-gray-200 transition-colors">
                                            View CV
                                        </a>
                                    )}
                                    {currentItem.scholarLink && currentItem.scholarLink !== "#" && (
                                        <a href={currentItem.scholarLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-3 py-1 rounded-md font-semibold text-xs hover:bg-gray-200 transition-colors">
                                            Google Scholar
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-200 whitespace-pre-line text-justify p-2 text-sm">{currentItem.description}</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="hidden sm:flex items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
                        <div className="bg-[#2a2a2a]/95 p-8 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl text-white flex flex-col relative">
                            <button onClick={closeModal} className="absolute top-4 right-6 text-white hover:text-red-400 text-4xl font-bold" aria-label="Close modal">&times;</button>
                            <div className="flex items-center justify-center gap-6">
                                <button onClick={() => navigateModal(-1)} className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Previous member">
                                    <ChevronLeft size={32}/>
                                </button>
                                <div className="w-full max-w-sm flex-shrink-0">
                                    <img src={currentItem.image} alt={currentItem.name} className="w-full aspect-square object-contain rounded-full shadow-md"/>
                                </div>
                                <button onClick={() => navigateModal(1)} className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Next member">
                                    <ChevronRight size={32}/>
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-3xl font-bold">{currentItem.name}</h3>
                                <div className="flex justify-center gap-4 my-2">
                                    {currentItem.cvLink && currentItem.cvLink !== "#" && (
                                        <a href={currentItem.cvLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">
                                            View CV
                                        </a>
                                    )}
                                    {currentItem.scholarLink && currentItem.scholarLink !== "#" && (
                                        <a href={currentItem.scholarLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">
                                            Google Scholar
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-100 max-w-3xl whitespace-pre-line text-justify text-lg mx-auto">{currentItem.description}</p> 
                            </div>  
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}