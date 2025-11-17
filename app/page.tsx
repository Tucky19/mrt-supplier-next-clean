<<<<<<< HEAD
"use client";

import Image from "next/image";

const HERO_IMAGE = "/mrt-hero-v2.jpg"; // ใส่ไฟล์จริงใน /public

export default function HomePage() {
  return (
    <div className="mrt-page">
      {/* NAVBAR */}
      <header className="mrt-nav">
        <div className="mrt-container mrt-nav-inner">
          <a href="#top" className="mrt-logo">
            <div className="mrt-logo-mark">MRT</div>
            <div className="mrt-logo-text">
              <span className="mrt-logo-main">MRT SUPPLIER</span>
              <span className="mrt-logo-sub">Industrial Parts &amp; Filters</span>
            </div>
          </a>

          <nav className="mrt-nav-links">
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="mrt-btn mrt-btn-primary">
            Get a Quote
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main id="top">
        {/* HERO */}
<section className="mrt-hero">
  <div className="mrt-container mrt-hero-inner">
    <div className="mrt-hero-text">
      <p className="mrt-section-kicker">MRT SUPPLIER • BEARINGS & FILTERS</p>
      <h1 className="mrt-hero-title">
        Supplying Industrial<br />Parts & Equipment
      </h1>
      <p className="mrt-hero-desc">
        จัดหาและซัพพลายอะไหล่อุตสาหกรรมสำหรับโรงงาน เครื่องจักรงานหนัก และงานซ่อมบำรุง...
      </p>

      <div className="mrt-hero-buttons">
        <a href="#contact" className="mrt-btn-primary">ขอใบเสนอราคา</a>
        <a href="#products" className="mrt-btn-secondary">ดูสินค้า</a>
      </div>
    </div>

    <div className="mrt-hero-image-wrapper">
      <Image
        src= "/mrt-hero-v2.jpg"
        alt="MRT Supplier Industrial Products"
        width={1600}
        height={900}
        priority
      />
    </div>
  </div>
</section>
 

        {/* BRAND STRIP */}
        <section className="mrt-section mrt-brand-strip">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Brands We Supply</p>
            <div className="mrt-brand-row">
              <span className="mrt-brand-pill">NTN BEARINGS</span>
              <span className="mrt-brand-pill">DONALDSON FILTERS</span>
              <span className="mrt-brand-pill">MANN-FILTER</span>
              <span className="mrt-brand-pill">OTHER INDUSTRIAL PARTS</span>
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section className="mrt-section mrt-product-categories" id="products">
  <div className="mrt-container">
    <h2 className="mrt-section-title">Product Categories</h2>
    <p className="mrt-section-subtitle">
      High-quality industrial parts for factories, maintenance teams and heavy-duty applications.
    </p>

    <div className="mrt-product-grid">
      {/* item 1 */}
      <div className="mrt-product-card">
        <img src="/icons/bearing.png" alt="Bearings" className="mrt-product-icon" />
        <h3>Bearings</h3>
        <p>NTN high-precision bearings for industrial and automotive applications.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 2 */}
      <div className="mrt-product-card">
        <img src="/icons/filter.png" alt="Industrial Filters" className="mrt-product-icon" />
        <h3>Industrial Filters</h3>
        <p>High-performance filters for dust, contaminants and heavy-duty systems.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 3 */}
      <div className="mrt-product-card">
        <img src="/icons/hydraulic.png" alt="Hydraulic Filters" className="mrt-product-icon" />
        <h3>Hydraulic Filters</h3>
        <p>Reliable Donaldson hydraulic filtration for machinery and equipment.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 4 */}
      <div className="mrt-product-card">
        <img src="/icons/oil.png" alt="Oil Filters" className="mrt-product-icon" />
        <h3>Oil Filters</h3>
        <p>Premium oil filtration solutions for engines and industrial systems.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 5 */}
      <div className="mrt-product-card">
        <img src="/icons/air.png" alt="Air Filters" className="mrt-product-icon" />
        <h3>Air Filters</h3>
        <p>Effective air purification for clean engine and industrial operations.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 6 */}
      <div className="mrt-product-card">
        <img src="/icons/fuel.png" alt="Fuel Filters" className="mrt-product-icon" />
        <h3>Fuel Filters</h3>
        <p>Designed to keep contaminants out of fuel systems for maximum efficiency.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

    </div>
  </div>
</section>


        {/* INDUSTRIES WE SERVE */}
        <section id="industries" className="mrt-section mrt-industries">
          <div className="mrt-container">
            <h2 className="mrt-section-title">Industries We Serve</h2>
            <p className="mrt-section-subtitle">
              Solutions for factories, heavy equipment, maintenance teams and
              transport fleets.
            </p>

            <div className="mrt-industries-grid">
              {/* 1 Factory */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Factory</div>
                  <h3 className="font-semibold mb-2">
                    Factory &amp; Manufacturing
                  </h3>
                  <p className="text-sm text-slate-300">
                    Bearings, hydraulic &amp; lubrication filters for production
                    lines, conveyors and industrial machines.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Production line</span>
                  <span>Conveyor</span>
                  <span>Machinery</span>
                </div>
              </div>

              {/* 2 Construction */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Construction</div>
                  <h3 className="font-semibold mb-2">
                    Construction &amp; Heavy Equipment
                  </h3>
                  <p className="text-sm text-slate-300">
                    Filtration and bearing solutions for excavators, loaders,
                    cranes and off-road equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Excavator</span>
                  <span>Loader</span>
                  <span>Crane</span>
                </div>
              </div>

              {/* 3 Maintenance */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Maintenance</div>
                  <h3 className="font-semibold mb-2">Maintenance &amp; MRO</h3>
                  <p className="text-sm text-slate-300">
                    Stocking critical filters and bearings for plant shutdowns,
                    preventive maintenance and service teams.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>MRO</span>
                  <span>Spare parts</span>
                  <span>Service team</span>
                </div>
              </div>

              {/* 4 Marine */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Marine</div>
                  <h3 className="font-semibold mb-2">Marine &amp; Offshore</h3>
                  <p className="text-sm text-slate-300">
                    Fuel, lube and air filtration for marine engines, generators
                    and deck equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Marine engine</span>
                  <span>Generator</span>
                  <span>Harbour</span>
                </div>
              </div>

              {/* 5 Power */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Power</div>
                  <h3 className="font-semibold mb-2">Power &amp; Energy</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for gensets, compressors and power
                    plants where uptime is critical.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Genset</span>
                  <span>Compressor</span>
                  <span>Power plant</span>
                </div>
              </div>

              {/* 6 Fleet */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Fleet</div>
                  <h3 className="font-semibold mb-2">Transport &amp; Fleet</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for trucks, buses and logistics fleets
                    to reduce downtime and operating cost.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Truck</span>
                  <span>Bus</span>
                  <span>Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="mrt-section mrt-section-alt">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Why Us</p>
            <h2 className="mrt-section-title">
              Why factories choose MRT Supplier
            </h2>

            <div className="mrt-product-grid">
              {/* 1 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Industrial Expertise</h3>
                <p className="mrt-card-text">
                  ประสบการณ์การทำงานกับโรงงานและงานบำรุงรักษาเครื่องจักร
                  เข้าใจปัญหาหน้างานจริง ช่วยเลือกสินค้าให้เหมาะกับไลน์การผลิตและเครื่องจักรของคุณ
                  ได้ง่ายขึ้น.
                </p>
              </article>

              {/* 2 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Genuine Brand Products</h3>
                <p className="mrt-card-text">
                  จำหน่ายเฉพาะสินค้าของแท้จากแบรนด์ชั้นนำ NTN, Donaldson และ
                  MANN-FILTER มั่นใจได้ว่าชิ้นส่วนที่คุณใช้เป็นของแท้พร้อมเอกสารสเปกครบถ้วน.
                </p>
              </article>

              {/* 3 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Fast Response &amp; Stock Support</h3>
                <p className="mrt-card-text">
                  เช็กสต๊อกและตอบกลับอย่างรวดเร็ว พร้อมแนะนำสเปกสินค้าทดแทน
                  เพื่อให้เครื่องหยุดงานน้อยที่สุด (ลด downtime).
                </p>
              </article>

              {/* 4 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Technical Support</h3>
                <p className="mrt-card-text">
                  ให้คำแนะนำด้านเทคนิคเบื้องต้น เช่น การเลือกเกรดน้ำมัน,
                  อายุการใช้งานของไส้กรอง หรือการดูสภาพลูกปืน เพื่อช่วยยืดอายุอุปกรณ์.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mrt-section mrt-contact">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Contact</p>
            <h2 className="mrt-section-title">Get a Quote or Ask Our Team</h2>

            <div className="mrt-contact-grid">
              <div>
                <p className="mrt-contact-label">Phone</p>
                <p>+66-815-581-323</p>
              </div>
              <div>
                <p className="mrt-contact-label">Email</p>
                <p>sales@mrtsupplier.com</p>
              </div>
              <div>
                <p className="mrt-contact-label">Line / Chat</p>
                <p>@mrtsupplier (Line OA หรือช่องทางที่ Tony ใช้จริง)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mrt-footer">
        <div className="mrt-footer-inner">
          <span>© {new Date().getFullYear()} MRT Supplier Co., Ltd.</span>
          <span>Industrial Parts • Filters • Bearings</span>
        </div>
      </footer>
    </div>
  );
}
=======
"use client";

import Image from "next/image";

const HERO_IMAGE = "/mrt-hero-v2.jpg"; // ใส่ไฟล์จริงใน /public

export default function HomePage() {
  return (
    <div className="mrt-page">
      {/* NAVBAR */}
      <header className="mrt-nav">
        <div className="mrt-container mrt-nav-inner">
          <a href="#top" className="mrt-logo">
            <div className="mrt-logo-mark">MRT</div>
            <div className="mrt-logo-text">
              <span className="mrt-logo-main">MRT SUPPLIER</span>
              <span className="mrt-logo-sub">Industrial Parts &amp; Filters</span>
            </div>
          </a>

          <nav className="mrt-nav-links">
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="mrt-btn mrt-btn-primary">
            Get a Quote
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main id="top">
        {/* HERO */}
<section className="mrt-hero">
  <div className="mrt-container mrt-hero-inner">
    <div className="mrt-hero-text">
      <p className="mrt-section-kicker">MRT SUPPLIER • BEARINGS & FILTERS</p>
      <h1 className="mrt-hero-title">
        Supplying Industrial<br />Parts & Equipment
      </h1>
      <p className="mrt-hero-desc">
        จัดหาและซัพพลายอะไหล่อุตสาหกรรมสำหรับโรงงาน เครื่องจักรงานหนัก และงานซ่อมบำรุง...
      </p>

      <div className="mrt-hero-buttons">
        <a href="#contact" className="mrt-btn-primary">ขอใบเสนอราคา</a>
        <a href="#products" className="mrt-btn-secondary">ดูสินค้า</a>
      </div>
    </div>

    <div className="mrt-hero-image-wrapper">
      <Image
        src= "/mrt-hero-v2.jpg"
        alt="MRT Supplier Industrial Products"
        width={1600}
        height={900}
        priority
      />
    </div>
  </div>
</section>
 

        {/* BRAND STRIP */}
        <section className="mrt-section mrt-brand-strip">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Brands We Supply</p>
            <div className="mrt-brand-row">
              <span className="mrt-brand-pill">NTN BEARINGS</span>
              <span className="mrt-brand-pill">DONALDSON FILTERS</span>
              <span className="mrt-brand-pill">MANN-FILTER</span>
              <span className="mrt-brand-pill">OTHER INDUSTRIAL PARTS</span>
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section className="mrt-section mrt-product-categories" id="products">
  <div className="mrt-container">
    <h2 className="mrt-section-title">Product Categories</h2>
    <p className="mrt-section-subtitle">
      High-quality industrial parts for factories, maintenance teams and heavy-duty applications.
    </p>

    <div className="mrt-product-grid">
      {/* item 1 */}
      <div className="mrt-product-card">
        <img src="/icons/bearing.png" alt="Bearings" className="mrt-product-icon" />
        <h3>Bearings</h3>
        <p>NTN high-precision bearings for industrial and automotive applications.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 2 */}
      <div className="mrt-product-card">
        <img src="/icons/filter.png" alt="Industrial Filters" className="mrt-product-icon" />
        <h3>Industrial Filters</h3>
        <p>High-performance filters for dust, contaminants and heavy-duty systems.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 3 */}
      <div className="mrt-product-card">
        <img src="/icons/hydraulic.png" alt="Hydraulic Filters" className="mrt-product-icon" />
        <h3>Hydraulic Filters</h3>
        <p>Reliable Donaldson hydraulic filtration for machinery and equipment.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 4 */}
      <div className="mrt-product-card">
        <img src="/icons/oil.png" alt="Oil Filters" className="mrt-product-icon" />
        <h3>Oil Filters</h3>
        <p>Premium oil filtration solutions for engines and industrial systems.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 5 */}
      <div className="mrt-product-card">
        <img src="/icons/air.png" alt="Air Filters" className="mrt-product-icon" />
        <h3>Air Filters</h3>
        <p>Effective air purification for clean engine and industrial operations.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

      {/* item 6 */}
      <div className="mrt-product-card">
        <img src="/icons/fuel.png" alt="Fuel Filters" className="mrt-product-icon" />
        <h3>Fuel Filters</h3>
        <p>Designed to keep contaminants out of fuel systems for maximum efficiency.</p>
        <a href="#" className="mrt-product-btn">Explore</a>
      </div>

    </div>
  </div>
</section>


        {/* INDUSTRIES WE SERVE */}
        <section id="industries" className="mrt-section mrt-industries">
          <div className="mrt-container">
            <h2 className="mrt-section-title">Industries We Serve</h2>
            <p className="mrt-section-subtitle">
              Solutions for factories, heavy equipment, maintenance teams and
              transport fleets.
            </p>

            <div className="mrt-industries-grid">
              {/* 1 Factory */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Factory</div>
                  <h3 className="font-semibold mb-2">
                    Factory &amp; Manufacturing
                  </h3>
                  <p className="text-sm text-slate-300">
                    Bearings, hydraulic &amp; lubrication filters for production
                    lines, conveyors and industrial machines.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Production line</span>
                  <span>Conveyor</span>
                  <span>Machinery</span>
                </div>
              </div>

              {/* 2 Construction */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Construction</div>
                  <h3 className="font-semibold mb-2">
                    Construction &amp; Heavy Equipment
                  </h3>
                  <p className="text-sm text-slate-300">
                    Filtration and bearing solutions for excavators, loaders,
                    cranes and off-road equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Excavator</span>
                  <span>Loader</span>
                  <span>Crane</span>
                </div>
              </div>

              {/* 3 Maintenance */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Maintenance</div>
                  <h3 className="font-semibold mb-2">Maintenance &amp; MRO</h3>
                  <p className="text-sm text-slate-300">
                    Stocking critical filters and bearings for plant shutdowns,
                    preventive maintenance and service teams.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>MRO</span>
                  <span>Spare parts</span>
                  <span>Service team</span>
                </div>
              </div>

              {/* 4 Marine */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Marine</div>
                  <h3 className="font-semibold mb-2">Marine &amp; Offshore</h3>
                  <p className="text-sm text-slate-300">
                    Fuel, lube and air filtration for marine engines, generators
                    and deck equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Marine engine</span>
                  <span>Generator</span>
                  <span>Harbour</span>
                </div>
              </div>

              {/* 5 Power */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Power</div>
                  <h3 className="font-semibold mb-2">Power &amp; Energy</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for gensets, compressors and power
                    plants where uptime is critical.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Genset</span>
                  <span>Compressor</span>
                  <span>Power plant</span>
                </div>
              </div>

              {/* 6 Fleet */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Fleet</div>
                  <h3 className="font-semibold mb-2">Transport &amp; Fleet</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for trucks, buses and logistics fleets
                    to reduce downtime and operating cost.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Truck</span>
                  <span>Bus</span>
                  <span>Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="mrt-section mrt-section-alt">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Why Us</p>
            <h2 className="mrt-section-title">
              Why factories choose MRT Supplier
            </h2>

            <div className="mrt-product-grid">
              {/* 1 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Industrial Expertise</h3>
                <p className="mrt-card-text">
                  ประสบการณ์การทำงานกับโรงงานและงานบำรุงรักษาเครื่องจักร
                  เข้าใจปัญหาหน้างานจริง ช่วยเลือกสินค้าให้เหมาะกับไลน์การผลิตและเครื่องจักรของคุณ
                  ได้ง่ายขึ้น.
                </p>
              </article>

              {/* 2 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Genuine Brand Products</h3>
                <p className="mrt-card-text">
                  จำหน่ายเฉพาะสินค้าของแท้จากแบรนด์ชั้นนำ NTN, Donaldson และ
                  MANN-FILTER มั่นใจได้ว่าชิ้นส่วนที่คุณใช้เป็นของแท้พร้อมเอกสารสเปกครบถ้วน.
                </p>
              </article>

              {/* 3 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Fast Response &amp; Stock Support</h3>
                <p className="mrt-card-text">
                  เช็กสต๊อกและตอบกลับอย่างรวดเร็ว พร้อมแนะนำสเปกสินค้าทดแทน
                  เพื่อให้เครื่องหยุดงานน้อยที่สุด (ลด downtime).
                </p>
              </article>

              {/* 4 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Technical Support</h3>
                <p className="mrt-card-text">
                  ให้คำแนะนำด้านเทคนิคเบื้องต้น เช่น การเลือกเกรดน้ำมัน,
                  อายุการใช้งานของไส้กรอง หรือการดูสภาพลูกปืน เพื่อช่วยยืดอายุอุปกรณ์.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mrt-section mrt-contact">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Contact</p>
            <h2 className="mrt-section-title">Get a Quote or Ask Our Team</h2>

            <div className="mrt-contact-grid">
              <div>
                <p className="mrt-contact-label">Phone</p>
                <p>+66-815-581-323</p>
              </div>
              <div>
                <p className="mrt-contact-label">Email</p>
                <p>sales@mrtsupplier.com</p>
              </div>
              <div>
                <p className="mrt-contact-label">Line / Chat</p>
                <p>@mrtsupplier (Line OA หรือช่องทางที่ Tony ใช้จริง)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mrt-footer">
        <div className="mrt-footer-inner">
          <span>© {new Date().getFullYear()} MRT Supplier Co., Ltd.</span>
          <span>Industrial Parts • Filters • Bearings</span>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> 3b9eb9d789cf4e96d69fb58ac7472e2d3560a6d8
