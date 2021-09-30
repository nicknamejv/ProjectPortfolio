import React from 'react';
import { TechStackData } from '../TechStack/data/TechStackData';
import '../TechStack/techstack.css';

const TechStack = () => {
    return (
        <>
            <section className="p-5" id="stack">
                <div class="container px-4 px-lg-5">
                    <h2 class="text-center mt-0" id="section-title">
                        My Tech Stack!
                    </h2>
                    <hr class="divider" />
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-2 g-lg-3" id="tech-stack">
                        {TechStackData.map((item, index) => {
                            return (
                                <div key={index} class="row text-center" id="tech-card">
                                    <div class="mt-5">
                                        <h3 class="h4 mb-2" id="tech-stack-title">
                                            {item.title}
                                        </h3>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            id="techstack-img"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechStack;