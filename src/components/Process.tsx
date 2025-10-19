import React, { useEffect, useRef } from 'react';
import '../styles/components/Process.css';
import { Lightbulb, Rocket, CheckSquare } from 'lucide-react';

// Declare jQuery and Snap for TypeScript
declare global {
  interface Window {
    jQuery: any;
    $: any;
    Snap: any;
  }
}

const Process = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const steps = [
    {
      Icon: Lightbulb,
      number: '01',
      title: 'Research Project',
      description: 'We analyze your requirements and develop a comprehensive strategy tailored to your goals'
    },
    {
      Icon: Rocket,
      number: '02',
      title: 'Targeting',
      description: 'We implement precise strategies to ensure your project reaches its full potential'
    },
    {
      Icon: CheckSquare,
      number: '03',
      title: 'Result',
      description: 'Deliver exceptional outcomes that exceed expectations and drive success'
    }
  ];

  useEffect(() => {
    // Wait for jQuery and Snap to be loaded
    const initAnimation = () => {
      if (typeof window.Snap !== 'undefined' && typeof window.jQuery !== 'undefined') {
        const $ = window.jQuery;
        const Snap = window.Snap;

        const snapC = Snap("#svgC");
        
        if (!snapC || !snapC.node) {
          setTimeout(initAnimation, 200);
          return;
        }

        const myPathC = snapC.path("M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1").attr({
          id: "squiggle",
          fill: "none",
          strokeWidth: "2",
          stroke: "rgba(249, 168, 37, 0.5)",
          strokeMiterlimit: "10",
          strokeDasharray: "5 10",
          strokeDashoffset: "180"
        });

        const Triangle = snapC.polyline("0, 30, 15, 0, 30, 30");
        Triangle.attr({
          id: "plane",
          fill: "rgba(249, 168, 37, 0.8)"
        });

        let animated = false;

        const animateSVG = () => {
          myPathC.attr({
            stroke: 'rgba(249, 168, 37, 0.8)',
            strokeWidth: 3,
            fill: 'none',
            "stroke-dasharray": "5 10",
            "stroke-dashoffset": "180"
          }).animate({"stroke-dashoffset": 10}, 2500);

          const triangleGroup = snapC.g(Triangle);
          const pathLength = myPathC.getTotalLength();
          
          setTimeout(() => {
            Snap.animate(0, pathLength, (value: number) => {
              const movePoint = myPathC.getPointAtLength(value);
              triangleGroup.transform(`t${movePoint.x - 15},${movePoint.y - 15}r${movePoint.alpha - 90}`);
            }, 2500);
          }, 0);
        };

        // Only trigger animation when Process section is in view
        $(window).on('scroll', function() {
          if (!animated) {
            const sectionTop = $('section#Process').offset()?.top || 0;
            const scrollTop = $(window).scrollTop() || 0;
            const windowHeight = $(window).height() || 0;

            if (scrollTop + windowHeight > sectionTop + 100) { // Trigger when section is 100px into view
              animateSVG();
              animated = true;
            }
          }
        });

        // Also trigger if section is already in view on load
        const sectionTop = $('section#Process').offset()?.top || 0;
        const scrollTop = $(window).scrollTop() || 0;
        const windowHeight = $(window).height() || 0;

        if (scrollTop + windowHeight > sectionTop + 100) {
          animateSVG();
          animated = true;
        }
      } else {
        // Retry after a short delay if libraries aren't loaded yet
        setTimeout(initAnimation, 100);
      }
    };

    // Start initialization with a small delay to ensure DOM is ready
    setTimeout(initAnimation, 500);
  }, []);

  return (
    <section className="process-section text-center" id="Process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="rainbow-text rainbow-text-large rainbow-text-extrabold">Three Simple Steps To Get Started</h2>
        </div>

        <div className="process-steps">
          <div id="svg-container">
            <svg ref={svgRef} id="svgC" width="100%" height="100%" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet">
              {/* Path and airplane will be created dynamically by Snap.svg */}
            </svg>
          </div>
          {steps.map((step, index) => {
            const IconComponent = step.Icon;
            return (
              <div key={index} className="work-process">
                {index < 2 && (
                  <div className="box-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <div className="step-num-box">
                  <div className="step-icon">
                    <span><IconComponent size={40} strokeWidth={2} /></span>
                  </div>
                  <div className="step-num">{step.number}</div>
                </div>
                <div className="step-desc">
                  <h4>{step.title}</h4>
                  <p className="mb-0">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
