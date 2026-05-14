/**
 * เลื่อนหน้าจอไปยัง Section ที่ต้องการแบบนุ่มนวล (Smooth Scroll) โดยระบุผ่าน id
 * @param {string} id - ค่า id ของ Element เป้าหมายที่ต้องการให้เลื่อนไปหา
 */
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * เครื่องมือสำหรับรวมชื่อ Class เข้าด้วยกันตามเงื่อนไข
 * จะทำการคัดกรองค่าที่ใช้งานไม่ได้ (false, null, undefined, สตริงว่าง) ออกให้โดยอัตโนมัติ
 *
 * @param {...(string | false | null | undefined)} classes - รายชื่อ Class ที่ต้องการนำมารวมกัน
 * @returns {string} - สายอักขระ (String) ของชื่อ Class ที่รวมกันแล้วโดยคั่นด้วยช่องว่าง
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}
