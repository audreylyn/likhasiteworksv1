import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/AnimatedLogo.css';

class SVGElement {
  element: SVGElement | any;
  
  constructor(element: any) {
    this.element = element;
  }

  set(attributeName: string, value: any) {
    this.element.setAttribute(attributeName, value);
  }

  style(property: string, value: any) {
    this.element.style[property] = value;
  }
}

const AnimatedLogo = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const offscreenTextRef = useRef<HTMLParagraphElement>(null);
  const [letters, setLetters] = useState<any[]>([]);

  useEffect(() => {
    const colors = [
      { main: '#FBDB4A', shades: ['#FAE073', '#FCE790', '#FADD65', '#E4C650'] },
      { main: '#F3934A', shades: ['#F7B989', '#F9CDAA', '#DD8644', '#F39C59'] },
      { main: '#EB547D', shades: ['#EE7293', '#F191AB', '#D64D72', '#C04567'] },
      { main: '#9F6AA7', shades: ['#B084B6', '#C19FC7', '#916198', '#82588A'] },
      { main: '#5476B3', shades: ['#6382B9', '#829BC7', '#4D6CA3', '#3E5782'] },
      { main: '#2BB19B', shades: ['#4DBFAD', '#73CDBF', '#27A18D', '#1F8171'] },
      { main: '#70B984', shades: ['#7FBE90', '#98CBA6', '#68A87A', '#5E976E'] }
    ];

    const createSVG = (type: string) => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', type);
      return new SVGElement(el);
    };

    const selectSVG = (ref: any) => {
      return new SVGElement(ref.current);
    };

    const svg = selectSVG(svgRef);
    const text = textRef.current;
    const offscreenText = offscreenTextRef.current;
    let width = 300; // Fixed width for logo
    let height = 80; // Fixed height for logo
    let textSize = 0;
    let textCenter = 0;
    const lettersArray: any[] = [];
    const prompt = ['l', 'i', 'k', 'h', 'a', ' ', 's', 'i', 't', 'e', 'w', 'o', 'r', 'k', 's'];

    svg.set('height', height);
    svg.set('width', width);
    svg.set('viewBox', `0 0 ${width} ${height}`);

    const resizeLetters = () => {
      textSize = width / (lettersArray.length + 2);
      if (textSize > 30) textSize = 30; // Smaller max size for logo
      if (text) {
        text.style.fontSize = `${textSize}px`;
        text.style.height = `${textSize}px`;
        text.style.lineHeight = `${textSize}px`;
      }
      if (offscreenText) {
        offscreenText.style.fontSize = `${textSize}px`;
      }
      if (text) {
        const textRect = text.getBoundingClientRect();
        textCenter = textRect.top + textRect.height / 2;
      }
      positionLetters();
    };

    const positionLetters = () => {
      lettersArray.forEach(letter => {
        const timing = letter.shift ? 0.05 : 0;
        if (window.TweenLite) {
          window.TweenLite.to(letter.onScreen, timing, {
            x: letter.offScreen.offsetLeft + 'px',
            ease: window.Power3.easeInOut
          });
        }
        letter.shift = true;
      });
    };

    const animateLetterIn = (letter: any) => {
      if (!window.TweenLite) return;
      const yOffset = (0.5 + Math.random() * 0.5) * textSize * 0.5;
      window.TweenLite.fromTo(letter, 0.3, { scale: 0 }, { scale: 1, ease: window.Back.easeOut });
      window.TweenLite.fromTo(letter, 0.3, { opacity: 0 }, { opacity: 1, ease: window.Power3.easeOut });
      window.TweenLite.to(letter, 0.15, { y: -yOffset, ease: window.Power3.easeInOut });
      window.TweenLite.to(letter, 0.15, { y: 0, ease: window.Power3.easeInOut, delay: 0.15 });
      const rotation = -30 + Math.random() * 60;
      window.TweenLite.to(letter, 0.15, { rotation: rotation, ease: window.Power3.easeInOut });
      window.TweenLite.to(letter, 0.15, { rotation: 0, ease: window.Power3.easeInOut, delay: 0.15 });
    };

    const addDecor = (letter: any, color: any) => {
      setTimeout(() => {
        const x0 = letter.offsetLeft + letter.offsetWidth / 2;
        const y0 = textCenter - textSize * 0.5;
        const shade = color.shades[Math.floor(Math.random() * 4)];
        for (let i = 0; i < 4; i++) addTri(x0, y0, shade);
        for (let i = 0; i < 4; i++) addCirc(x0, y0);
      }, 100);
    };

    const addTri = (x0: number, y0: number, shade: string) => {
      const tri = createSVG('polygon');
      const a = Math.random();
      const a2 = a + (-0.2 + Math.random() * 0.4);
      const r = textSize * 0.52;
      const r2 = r + textSize * Math.random() * 0.2;
      const x = x0 + r * Math.cos(2 * Math.PI * a);
      const y = y0 + r * Math.sin(2 * Math.PI * a);
      const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
      const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
      const triSize = textSize * 0.1;
      const scale = 0.3 + Math.random() * 0.7;
      const offset = triSize * scale;
      tri.set('points', `0,0 ${triSize * 2},0 ${triSize},${triSize * 2}`);
      tri.style('fill', shade);
      svgRef.current?.appendChild(tri.element);
      if (window.TweenLite) {
        window.TweenLite.fromTo(
          tri.element,
          0.4,
          { rotation: Math.random() * 360, scale: scale, x: x - offset, y: y - offset, opacity: 1 },
          {
            x: x2 - offset,
            y: y2 - offset,
            opacity: 0,
            ease: window.Power1.easeInOut,
            onComplete: () => {
              svgRef.current?.removeChild(tri.element);
            }
          }
        );
      }
    };

    const addCirc = (x0: number, y0: number) => {
      const circ = createSVG('circle');
      const a = Math.random();
      const r = textSize * 0.52;
      const r2 = r + textSize;
      const x = x0 + r * Math.cos(2 * Math.PI * a);
      const y = y0 + r * Math.sin(2 * Math.PI * a);
      const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
      const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
      const circSize = textSize * 0.05 * Math.random();
      circ.set('r', circSize);
      circ.style('fill', '#eee');
      svgRef.current?.appendChild(circ.element);
      if (window.TweenLite) {
        window.TweenLite.fromTo(
          circ.element,
          0.4,
          { x: x - circSize, y: y - circSize, opacity: 1 },
          {
            x: x2 - circSize,
            y: y2 - circSize,
            opacity: 0,
            ease: window.Power1.easeInOut,
            onComplete: () => {
              svgRef.current?.removeChild(circ.element);
            }
          }
        );
      }
    };

    const addLetter = (char: string, i: number) => {
      const letter = document.createElement('span');
      const oLetter = document.createElement('span');
      letter.innerHTML = char;
      oLetter.innerHTML = char;
      text?.appendChild(letter);
      const color = colors[i % colors.length];
      letter.style.color = color.main;
      offscreenText?.appendChild(oLetter);
      lettersArray[i] = { offScreen: oLetter, onScreen: letter, char: char };
      animateLetterIn(letter);
      addDecor(oLetter, color);
    };

    const addPrompt = (i: number) => {
      setTimeout(() => {
        if (prompt[i]) {
          addLetter(prompt[i], i);
          resizeLetters();
          addPrompt(i + 1);
        }
      }, 150);
    };

    // Load GSAP if not already loaded
    if (!window.TweenLite) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenLite.min.js';
      script.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/easing/EasePack.min.js';
        script2.onload = () => {
          const script3 = document.createElement('script');
          script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/CSSPlugin.min.js';
          script3.onload = () => {
            addPrompt(0);
          };
          document.head.appendChild(script3);
        };
        document.head.appendChild(script2);
      };
      document.head.appendChild(script);
    } else {
      addPrompt(0);
    }

    setLetters(lettersArray);
  }, []);

  return (
    <div className="animated-logo">
      <p ref={offscreenTextRef} className="offscreen-text"></p>
      <p ref={textRef} className="text"></p>
      <svg ref={svgRef} className="animated-logo-svg"></svg>
    </div>
  );
};

export default AnimatedLogo;
