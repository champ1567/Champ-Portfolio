// useScrollReveal - Custom Hook สำหรับจัดการ Animation เมื่อ Scroll มาถึง Element
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // สร้าง Observer พร้อมกำหนดเงื่อนไข
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ตรวจสอบว่า Element กำลังแสดงอยู่บนจอหรือไม่
          if (!entry.isIntersecting) {
            return;
          }
          const el = entry.target;

          // ใส่ Class เพื่อเริ่มเล่น Animation หลัก
          el.classList.add('reveal-visible');

          // สั่งเล่น Animation เฉพาะจุด skill-bar ที่อยู่ภายใน Element นั้น
          const skillBars = el.querySelectorAll('.skill-bar');
          skillBars.forEach((bar) => bar.classList.add('skill-bar-animated'));

          // ให้รันครั้งเดียวแล้วเลิกตาม เพื่อประหยัด CPU
          observer.unobserve(el);
        });
      },
      {
        // กำหนดเมื่อ Element โผล่มาถึง 15% ของความสูงแล้วจึงทำงาน
        threshold: 0.15,
      }
    );

    // เลือกทุก Element ที่ต้องการให้มี Effect Reveal
    const targetElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );

    // เริ่มทำการเฝ้าดู (Observe) แต่ละ Element
    targetElements.forEach((el) => observer.observe(el));

    // Cleanup Function: ยกเลิกการเชื่อมต่อเมื่อ Component นี้ถูกถอดออก
    return () => observer.disconnect();
  }, []); // [] คือให้รัน Logic นี้แค่ครั้งเดียวตอน Mount
}
