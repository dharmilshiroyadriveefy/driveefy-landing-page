import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import './tab-system.scss';
import { tabData } from '../../utils/data';

const TabSystem = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  
  const tabsContainerRef = useRef(null);

  const handleTabChange = (index) => {
    setSlideDirection(index > activeTab ? 'right' : 'left');
    setActiveTab(index);
  };

  const checkScroll = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200;
      tabsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    checkScroll();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="tab-system">
      <div className="tab-system__tabs-wrapper">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="tab-system__nav-button tab-system__nav-button--left"
          >
            <ChevronLeft />
          </button>
        )}
        
        <div 
          ref={tabsContainerRef}
          className={`tab-system__tabs-container ${isDragging ? 'tab-system__tabs-container--dragging' : ''}`}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {tabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(index)}
              className={`tab-system__tab ${
                activeTab === index ? 'tab-system__tab--active' : ''
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="tab-system__nav-button tab-system__nav-button--right"
          >
            <ChevronRight />
          </button>
        )}
      </div>

      <div className="tab-system__content">
        <div 
          className={`tab-system__content-wrapper tab-system__content-wrapper--slide-${slideDirection}`}
          key={activeTab} // Force re-render for animation
        >
          <div className="tab-system__text-content">
            {tabData[activeTab].content.mainPoints.map((point, index) => (
              <div key={index} className="tab-system__point">
                <p className="tab-system__point-heading">
                  {point.heading}
                </p>{' '}
                {point.description}
              </div>
            ))}
          </div>
          <div className="tab-system__image-content">
            <img
              src={tabData[activeTab].content.image}
              alt="Feature illustration"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSystem;