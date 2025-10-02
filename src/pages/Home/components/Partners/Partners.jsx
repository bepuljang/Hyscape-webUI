import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Partners.css';
import Investor from './Investor';

// Import all partner images
const materialSuppliers = Array.from({length: 14}, (_, i) =>
    new URL(`./partners/material_suppliers/material_suppliers_${String(i + 1).padStart(2, '0')}.png`, import.meta.url).href
);

const componentSuppliers = Array.from({length: 4}, (_, i) =>
    new URL(`./partners/component_suppliers/component_suppliers_${String(i + 1).padStart(2, '0')}.png`, import.meta.url).href
);

const equipmentSuppliers = Array.from({length: 3}, (_, i) =>
    new URL(`./partners/equipment_suppliers/equipment_suppliers_${String(i + 1).padStart(2, '0')}.png`, import.meta.url).href
);

const partnersData = {
    topCategories: [
        {
            title: "Hydrogen production plant EPC companies",
            description: "Engineering, Procurement, and Construction partners"
        },
        {
            title: "Electrolysis system manufacturers",
            description: "System integration and manufacturing partners"
        },
        {
            title: "Research institutes & universities",
            description: "Domestic and international academic partners"
        },
        {
            title: "Material & component developers",
            description: "Electrolysis and PEM fuel cell suppliers"
        }
    ],
    supplierCategories: [
        {
            type: "Material Suppliers",
            items: ["Catalysts", "Electrode membranes/ionomers", "Films"],
            images: materialSuppliers
        },
        {
            type: "Component Suppliers",
            items: ["MEA", "PTL/GDL", "Bipolar plates"],
            images: componentSuppliers
        },
        {
            type: "Equipment/Processing",
            items: ["Manufacturing equipment", "Coating technology", "Evaluation equipment"],
            images: equipmentSuppliers
        }
    ]
};

const Partners = () => {
    return (
        <section id="investor" className='partners-section'>
            <div className="container">
                <h2 className="section-title">Key Partners</h2>

                {/* Partner Categories Section - 3 Column Layout with Swiper */}
                <div className="partners-three-column-section">
                    <div className="partners-columns-container">
                        {/* Column 1: Material Suppliers */}
                        <div className="partner-column">
                            <div className="column-header">
                                <h4>Material Suppliers</h4>
                                <p className="column-subtitle">Catalysts • Electrode membranes • Ionomers • Films</p>
                            </div>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                loop={true}
                                loopedSlides={14}
                                speed={5000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                className="partner-swiper"
                            >
                                {/* Double the slides for better loop */}
                                {[...materialSuppliers, ...materialSuppliers].map((image, idx) => (
                                    <SwiperSlide key={idx} className="partner-slide">
                                        <div className="partner-logo-swiper">
                                            <img src={image} alt={`Material Supplier ${(idx % 14) + 1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Column 2: Component Suppliers */}
                        <div className="partner-column">
                            <div className="column-header">
                                <h4>Component Suppliers</h4>
                                <p className="column-subtitle">MEA • PTL/GDL • Bipolar plates</p>
                            </div>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                loop={true}
                                loopedSlides={8}
                                speed={4000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                className="partner-swiper"
                            >
                                {/* Triple the slides for better loop with short list */}
                                {[...componentSuppliers, ...componentSuppliers, ...componentSuppliers].map((image, idx) => (
                                    <SwiperSlide key={idx} className="partner-slide">
                                        <div className="partner-logo-swiper">
                                            <img src={image} alt={`Component Supplier ${(idx % 4) + 1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Column 3: Equipment Suppliers */}
                        <div className="partner-column">
                            <div className="column-header">
                                <h4>Equipment Suppliers</h4>
                                <p className="column-subtitle">Manufacturing • Coating • Evaluation</p>
                            </div>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                loop={true}
                                loopedSlides={9}
                                speed={3500}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                className="partner-swiper"
                            >
                                {/* Quadruple the slides for better loop with very short list */}
                                {[...equipmentSuppliers, ...equipmentSuppliers, ...equipmentSuppliers, ...equipmentSuppliers].map((image, idx) => (
                                    <SwiperSlide key={idx} className="partner-slide">
                                        <div className="partner-logo-swiper">
                                            <img src={image} alt={`Equipment Supplier ${(idx % 3) + 1}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <Investor/>
        </section>
    );
};

export default Partners;