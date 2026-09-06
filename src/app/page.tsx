import { ArrowRight, CheckCircle2, Users, FileText, BarChart3, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ระบบประเมินและวินิจฉัยศักยภาพ<br />องค์กรผู้ใช้น้ำ
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              เครื่องมือประเมินระดับความเข้มแข็งขององค์กรผู้ใช้น้ำ ตามพระราชบัญญัติทรัพยากรน้ำ พ.ศ. 2561 เพื่อพัฒนาสู่การจัดสรรทรัพยากรน้ำอย่างยั่งยืน
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="#assessment" 
                className="inline-flex items-center justify-center bg-white text-primary-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
              >
                เริ่มทำแบบประเมิน <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#about" 
                className="inline-flex items-center justify-center bg-primary-700/50 text-white border border-primary-500 font-semibold px-8 py-3 rounded-full hover:bg-primary-700 transition-colors"
              >
                เรียนรู้เพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-slate-50 fill-current" preserveAspectRatio="none">
            <path d="M0,120 L1440,120 L1440,30 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Rationale Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <Info className="w-8 h-8 text-primary-600 mr-3" />
                หลักการและเหตุผล
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  ตามพระราชบัญญัติทรัพยากรน้ำ พ.ศ. 2561 ได้รับรองสิทธิการรวมกลุ่มของประชาชนเป็น <strong>"องค์กรผู้ใช้น้ำ"</strong> เพื่อประโยชน์ในการบริหารจัดการ พัฒนา อนุรักษ์ ฟื้นฟู และบำรุงรักษาทรัพยากรน้ำ
                </p>
                <p>
                  แบบประเมินชุดนี้ออกแบบมาเพื่อวิเคราะห์สถานะและความเข้มแข็งขององค์กรผู้ใช้น้ำใน 2 มิติ คือ 
                  <strong>การมีส่วนร่วมของสมาชิก</strong> และ <strong>ความสามารถในการบริหารจัดการ</strong> 
                  เพื่อนำไปสู่การพัฒนาแผนแม่บทการบริหารทรัพยากรน้ำระดับพื้นที่ได้อย่างมีประสิทธิภาพ
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">รวมกลุ่มจัดตั้ง</h3>
                <p className="text-sm text-slate-500">รวมตัวกันเพื่อประโยชน์ร่วมกันในการบริหารจัดการน้ำ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
                <div className="w-12 h-12 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">ตัวแทนระดับชาติ</h3>
                <p className="text-sm text-slate-500">มีสิทธิเป็นตัวแทนในคณะกรรมการทรัพยากรน้ำแห่งชาติ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">เสนอแผนงาน</h3>
                <p className="text-sm text-slate-500">มีบทบาทในการเสนอแนะแผนงานและมาตรการต่างๆ</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
                <div className="w-12 h-12 bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">จัดสรรและจัดการ</h3>
                <p className="text-sm text-slate-500">ร่วมบริหารจัดการและจัดทำข้อตกลงการใช้น้ำ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">5 กลุ่มสถานะองค์กรผู้ใช้น้ำ</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              ผลการประเมินจะจำแนกศักยภาพขององค์กรผู้ใช้น้ำออกเป็น 5 กลุ่ม เพื่อให้หน่วยงานที่เกี่ยวข้องสามารถออกแบบแนวทางการส่งเสริมได้อย่างตรงจุด
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. กลุ่มในนาม / พักตัว",
                subtitle: "Paper/Dormant",
                desc: "มีการจดทะเบียนแต่ไม่มีการดำเนินกิจกรรมอย่างต่อเนื่อง ขาดการมีส่วนร่วมของสมาชิก",
                color: "bg-slate-100 text-slate-600",
                border: "border-slate-200"
              },
              {
                title: "2. กลุ่มพึ่งพารัฐ",
                subtitle: "State-Dependent",
                desc: "ดำเนินกิจกรรมได้เมื่อมีงบประมาณหรือเจ้าหน้าที่รัฐคอยกำกับดูแล ยังไม่สามารถบริหารจัดการตนเองได้เต็มที่",
                color: "bg-orange-100 text-orange-700",
                border: "border-orange-200"
              },
              {
                title: "3. กลุ่มผู้นำเดี่ยว",
                subtitle: "Single-Leader Dominated",
                desc: "มีผลงานโดดเด่นแต่พึ่งพาผู้นำคนใดคนหนึ่งเป็นหลัก ขาดการกระจายอำนาจและการสร้างผู้สืบทอด",
                color: "bg-purple-100 text-purple-700",
                border: "border-purple-200"
              },
              {
                title: "4. กลุ่มจัดการตนเอง",
                subtitle: "Collective Self-Governing",
                desc: "สมาชิกร่วมกันตั้งกติกา มีการลงขันหรือกองทุน และบริหารจัดการข้อขัดแย้งในชุมชนได้ด้วยตนเอง",
                color: "bg-blue-100 text-blue-700",
                border: "border-blue-200"
              },
              {
                title: "5. กลุ่มบูรณาการเชิงนโยบาย",
                subtitle: "Dynamic Champion",
                desc: "มีความเข้มแข็งสูง สามารถต่อรอง เชื่อมโยงเครือข่ายภายนอก และผลักดันนโยบายระดับลุ่มน้ำได้",
                color: "bg-green-100 text-green-700",
                border: "border-green-200"
              }
            ].map((category, index) => (
              <div key={index} className={`p-6 rounded-2xl border ${category.border} bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${category.color}`}>
                  กลุ่มที่ {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{category.title.substring(3)}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4">{category.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="assessment" className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">พร้อมที่จะประเมินองค์กรของคุณหรือยัง?</h2>
          <p className="text-lg text-slate-600 mb-8">
            แบบประเมินประกอบด้วยคำถามแบบเลือกตอบพฤติกรรม (Behavioral Choice) จำนวน 20 ข้อ ใช้เวลาประมาณ 10-15 นาที
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100 mb-8 max-w-2xl mx-auto text-left">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> สิ่งที่ควรเตรียมก่อนเริ่มทำ
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0"></span>
                <span>ข้อมูลพื้นฐานขององค์กรผู้ใช้น้ำ (ปีที่ก่อตั้ง, จำนวนสมาชิก, งบประมาณ)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0"></span>
                <span>การตอบคำถามควรตอบตามความเป็นจริง เพื่อให้ได้ผลการวินิจฉัยที่แม่นยำที่สุด</span>
              </li>
            </ul>
          </div>
          <button 
            disabled
            className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-full opacity-80 cursor-not-allowed shadow-md"
          >
            เริ่มทำแบบประเมิน (Coming Soon)
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">โครงการประเมินศักยภาพองค์กรผู้ใช้น้ำ ตาม พ.ร.บ. ทรัพยากรน้ำ 2561</p>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
