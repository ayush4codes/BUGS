'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Create cursor elements
    const cursor = document.createElement('div');
    const ring = document.createElement('div');
    
    // Set styles inline for immediate visibility
    cursor.style.cssText = `
      position: fixed;
      width: 24px;
      height: 24px;
      background: rgba(6, 182, 212, 0.9);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
      left: 0;
      top: 0;
    `;
    
    ring.style.cssText = `
      position: fixed;
      width: 50px;
      height: 50px;
      border: 2px solid rgba(6, 182, 212, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99998;
      transform: translate(-50%, -50%);
      left: 0;
      top: 0;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(ring);
    
    // State
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let ringX = 0;
    let ringY = 0;
    let isClicking = false;
    let isHovering = false;
    let animationId: number;
    
    // Handlers
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const onMouseDown = () => {
      isClicking = true;
    };
    
    const onMouseUp = () => {
      isClicking = false;
    };
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        isHovering = true;
        ring.style.width = '64px';
        ring.style.height = '64px';
        ring.style.borderColor = 'rgba(168, 85, 247, 0.8)';
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        isHovering = false;
        ring.style.width = '50px';
        ring.style.height = '50px';
        ring.style.borderColor = 'rgba(6, 182, 212, 0.5)';
      }
    };
    
    // Animation loop
    const animate = () => {
      // Instant cursor, smooth ring
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      ringX += (cursorX - ringX) * 0.3;
      ringY += (cursorY - ringY) * 0.3;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${isClicking ? '0.8' : '1'})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Start
    animationId = requestAnimationFrame(animate);
    
    // Add listeners
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationId);
      
      cursor.remove();
      ring.remove();
    };
  }, []);
  
  return null;
}

