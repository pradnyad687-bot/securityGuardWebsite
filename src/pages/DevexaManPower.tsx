// import { useState, useEffect, useRef, type FormEvent } from "react";
// import "./DevexaManPower.css";
// import appMockup from "../assets/app-mockup.png";

// import {
//   Rocket,
//   PlayCircle,
//   PhoneCall,
//   Clock,
//   Shield,
//   Layers,
//   MapPin,
//   Cloud,
//   Lock,
//   ClipboardX,
//   FileSpreadsheet,
//   MapPinOff,
//   AlertTriangle,
//   EyeOff,
//   FileText,
//   CalendarX,
//   BarChart3,
//   CheckCircle,
//   Sparkles,
//   Users,
//   QrCode,
//   Navigation,
//   CalendarDays,
//   GraduationCap,
//   ClipboardCheck,
//   Package,
//   Building2,
//   LayoutDashboard,
//   Smartphone,
//   UserCog,
//   Crown,
//   Settings,
//   Briefcase,
//   ShieldCheck,
//   HardHat,
//   Factory,
//   Truck,
//   TrendingUp,
//   CalendarClock,
//   AlertCircle,
//   Footprints,
//   Activity,
//   IndianRupee,
//   Zap,
//   Database,
//   KeyRound,
//   Star,
//   Quote,
//   Check,
//   ChevronDown,
//   HelpCircle,
//   CalendarCheck,
//   Mail,
//   Globe,
//   MessageCircle,
//   Send,
// } from "lucide-react";

// /* =====================================================================
//    DATA
// ===================================================================== */

// const HERO_STATS = [
//   { icon: Layers, count: 10, suffix: "+", label: "Business Modules" },
//   { icon: Sparkles, count: 50, suffix: "+", label: "Enterprise Features" },
//   { icon: MapPin, count: 0, suffix: "", label: "Real-Time GPS Tracking" },
//   { icon: Cloud, count: 0, suffix: "", label: "Cloud-Based Platform" },
//   { icon: Lock, count: 0, suffix: "", label: "Role-Based Access Control" },
// ];

// /* =====================================================================
//    HOOKS
// ===================================================================== */

// /** Animated count-up hook that starts when `active` becomes true. */
// function useCountUp(target: number, active: boolean, duration = 1600) {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     if (!active || target <= 0) return;
//     let raf = 0;
//     let start = 0;
//     const animate = (ts: number) => {
//       if (!start) start = ts;
//       const progress = Math.min((ts - start) / duration, 1);
//       // easeOutExpo for a snappy, classic counter feel
//       const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
//       setValue(Math.round(eased * target));
//       if (progress < 1) raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(raf);
//   }, [target, active, duration]);
//   return value;
// }

// /** Hero stat pill that counts up once `active` is true. */
// function StatPill({ stat, active }: { stat: (typeof HERO_STATS)[number]; active: boolean }) {
//   const count = useCountUp(stat.count, active);
//   return (
//     <div className="devexa-hero-stat">
//       <stat.icon size={18} />
//       <span>
//         {stat.count > 0 && <span className="devexa-counter-num">{count}</span>}
//         {stat.count > 0 ? `${stat.suffix} ${stat.label}` : stat.label}
//       </span>
//     </div>
//   );
// }

// const PROBLEMS = [
//   { icon: ClipboardX, title: "Manual Attendance", desc: "Paper registers lead to errors, buddy punching, and no reliable attendance data." },
//   { icon: FileSpreadsheet, title: "Excel-Based Records", desc: "Scattered spreadsheets make it impossible to track workforce data in real time." },
//   { icon: MapPinOff, title: "No Live Tracking", desc: "Field teams operate blindly with zero visibility into employee locations." },
//   { icon: AlertTriangle, title: "Delayed Incident Reporting", desc: "Incidents reported days late, increasing risk and compliance gaps." },
//   { icon: EyeOff, title: "Poor Workforce Visibility", desc: "No single view of who is where, doing what, across multiple sites." },
//   { icon: FileText, title: "Paper-Based Operations", desc: "Mountains of paperwork slow down every operational process." },
//   { icon: CalendarX, title: "Difficult Leave Management", desc: "Leave requests get lost, causing staffing gaps and payroll errors." },
//   { icon: BarChart3, title: "Lack of Reporting", desc: "No actionable insights to make informed workforce decisions." },
// ];

// const FEATURE_CATEGORIES = [
//   {
//     key: "employee",
//     label: "Employee Management",
//     icon: Users,
//     features: [
//       "Employee Registration",
//       "Digital Employee Records",
//       "Employee ID Generation",
//       "Document Management",
//       "Aadhaar & PAN Storage",
//       "Employee Search",
//       "Digital ID Cards",
//     ],
//   },
//   {
//     key: "attendance",
//     label: "Attendance Management",
//     icon: Clock,
//     features: [
//       "GPS Attendance",
//       "QR Attendance",
//       "Geofence Attendance",
//       "Shift Management",
//       "Overtime Management",
//       "Attendance Reports",
//     ],
//   },
//   {
//     key: "tracking",
//     label: "Live GPS Tracking",
//     icon: MapPin,
//     features: [
//       "Real-Time Employee Tracking",
//       "Route History",
//       "Site Monitoring",
//       "Google Maps Integration",
//       "Geofencing",
//     ],
//   },
//   {
//     key: "patrolling",
//     label: "Patrolling Management",
//     icon: ShieldCheck,
//     features: [
//       "Patrol Checkpoints",
//       "Patrol Reports",
//       "Site Visit Logs",
//       "Photo Evidence",
//       "Patrol Monitoring",
//     ],
//   },
//   {
//     key: "incident",
//     label: "Incident Management",
//     icon: AlertTriangle,
//     features: [
//       "Incident Reporting",
//       "Image Uploads",
//       "Investigation Workflow",
//       "Resolution Tracking",
//       "Incident Analytics",
//     ],
//   },
//   {
//     key: "leave",
//     label: "Leave Management",
//     icon: CalendarDays,
//     features: [
//       "Casual Leave",
//       "Sick Leave",
//       "Earned Leave",
//       "Half-Day Leave",
//       "Approval Workflow",
//     ],
//   },
//   {
//     key: "training",
//     label: "Training Management",
//     icon: GraduationCap,
//     features: [
//       "Training Records",
//       "Employee Certifications",
//       "Training Attendance",
//       "Compliance Tracking",
//     ],
//   },
//   {
//     key: "survey",
//     label: "Survey & Audit",
//     icon: ClipboardCheck,
//     features: [
//       "Site Security Audits",
//       "Safety Inspections",
//       "Compliance Reviews",
//     ],
//   },
//   {
//     key: "inventory",
//     label: "Inventory & Issue Slip",
//     icon: Package,
//     features: [
//       "Material Issuance",
//       "Uniform Tracking",
//       "Equipment Allocation",
//     ],
//   },
//   {
//     key: "client",
//     label: "Client Management",
//     icon: Building2,
//     features: [
//       "Client Registration",
//       "Site Management",
//       "Contact Management",
//       "Client Reports",
//     ],
//   },
// ];

// const DASHBOARDS = [
//   {
//     icon: LayoutDashboard,
//     title: "Admin Dashboard",
//     accent: "#f47a20",
//     metrics: [
//       { label: "Total Employees", value: "1,240" },
//       { label: "Active Employees", value: "1,180" },
//       { label: "Attendance Today", value: "96%" },
//       { label: "Leave Requests", value: "14" },
//       { label: "Sites Active", value: "32" },
//       { label: "Incidents Today", value: "3" },
//     ],
//   },
//   {
//     icon: Smartphone,
//     title: "Field Officer Dashboard",
//     accent: "#0f2e4f",
//     metrics: [
//       { label: "GPS Tracking", value: "Live" },
//       { label: "Attendance", value: "Marked" },
//       { label: "Patrol Visits", value: "8" },
//       { label: "QR Scans", value: "22" },
//     ],
//   },
//   {
//     icon: UserCog,
//     title: "HR Dashboard",
//     accent: "#0f2e4f",
//     metrics: [
//       { label: "Employee Records", value: "1,240" },
//       { label: "Documents", value: "5,600" },
//       { label: "Leave Approvals", value: "9" },
//     ],
//   },
// ];

// const ROLES = [
//   { icon: Crown, title: "Super Admin", desc: "Full system control with access to every module, role, and configuration." },
//   { icon: Settings, title: "Admin", desc: "Complete operational access except super-admin security configurations." },
//   { icon: UserCog, title: "HR Manager", desc: "Manage employees, documents, leave, and HR workflows across sites." },
//   { icon: Briefcase, title: "Operational Manager", desc: "Oversee daily operations, attendance, and field deployments." },
//   { icon: MapPin, title: "Area Manager", desc: "Monitor multiple sites and teams within an assigned geographic area." },
//   { icon: Smartphone, title: "Field Officer", desc: "Mark attendance, log patrols, and report incidents from the field." },
//   { icon: ShieldCheck, title: "Supervisor", desc: "Approve attendance, manage shifts, and oversee site teams." },
//   { icon: Shield, title: "Security Guard", desc: "Check-in, complete patrols, and raise SOS alerts on duty." },
//   { icon: Building2, title: "Client", desc: "View deployment status, reports, and site performance via portal." },
// ];

// const INDUSTRIES = [
//   { icon: Shield, title: "Security Agencies", desc: "Manage guards, patrols, incidents, and client sites end-to-end." },
//   { icon: Building2, title: "Facility Management", desc: "Coordinate housekeeping, maintenance, and multi-site operations." },
//   { icon: Sparkles, title: "Housekeeping Services", desc: "Track staff attendance, shifts, and cleaning schedules digitally." },
//   { icon: Users, title: "Contract Workforce Providers", desc: "Handle large distributed teams across multiple client locations." },
//   { icon: Briefcase, title: "Staffing Agencies", desc: "Manage deployments, billing, and compliance for contract staff." },
//   { icon: Factory, title: "Manufacturing Companies", desc: "Monitor shift workers, attendance, and safety compliance on the floor." },
//   { icon: HardHat, title: "Construction Companies", desc: "Track labor attendance, site safety, and contractor workforce." },
//   { icon: Truck, title: "Logistics Companies", desc: "Oversee drivers, warehouse staff, and route-based field teams." },
// ];

// const REPORTS = [
//   { icon: TrendingUp, title: "Attendance Trends", bars: [60, 75, 55, 90, 70, 85, 95] },
//   { icon: Users, title: "Employee Growth", bars: [30, 45, 50, 65, 72, 80, 88] },
//   { icon: CalendarClock, title: "Leave Reports", bars: [40, 35, 60, 50, 45, 70, 55] },
//   { icon: AlertCircle, title: "Incident Analytics", bars: [20, 35, 25, 50, 40, 30, 45] },
//   { icon: Footprints, title: "Patrol Performance", bars: [70, 80, 65, 90, 85, 95, 78] },
//   { icon: MapPin, title: "Site Performance", bars: [55, 68, 72, 60, 88, 76, 92] },
// ];

// const WHY = [
//   { icon: Activity, title: "Real-Time Monitoring", desc: "Track every employee, attendance, and incident live as it happens." },
//   { icon: Cloud, title: "Cloud Based", desc: "Access your workforce data from anywhere, anytime, on any device." },
//   { icon: Lock, title: "Secure Infrastructure", desc: "Enterprise-grade security protecting your sensitive workforce data." },
//   { icon: Smartphone, title: "Mobile First", desc: "Built for the field with a powerful Android app for officers and guards." },
//   { icon: TrendingUp, title: "Scalable To 10,000+ Employees", desc: "Grows with your business from 50 to 10,000+ employees seamlessly." },
//   { icon: IndianRupee, title: "Affordable Pricing", desc: "Enterprise features at a price designed for Indian businesses." },
//   { icon: Zap, title: "Easy Deployment", desc: "Go live in days, not months, with guided onboarding and training." },
//   { icon: ShieldCheck, title: "Enterprise Security", desc: "Role-based access, audit logs, and encrypted data at every layer." },
// ];

// const SECURITY = [
//   { icon: Cloud, title: "Firebase Infrastructure", desc: "Built on Google's Firebase for reliability and global scale." },
//   { icon: Database, title: "Secure Cloud Storage", desc: "All documents and data stored securely with redundancy." },
//   { icon: KeyRound, title: "Role-Based Access Control", desc: "Granular permissions ensure only authorized access." },
//   { icon: Lock, title: "Encrypted Data Transfer", desc: "End-to-end encryption for all data in transit." },
//   { icon: FileText, title: "Audit Logs", desc: "Every action tracked with full audit trail for compliance." },
//   { icon: Database, title: "Daily Backups", desc: "Automatic daily backups ensure your data is never lost." },
// ];

// const TESTIMONIALS = [
//   {
//     quote: "Devexa Man Power transformed how we track our 800+ guards. Live GPS attendance eliminated buddy punching completely. Our client reports are now instant.",
//     name: "Rajesh Kumar",
//     role: "Operations Director",
//     company: "SecureGuard Services",
//   },
//   {
//     quote: "Managing attendance across 15 sites used to be a nightmare of Excel sheets. Now everything is on one dashboard. Leave approvals take minutes, not days.",
//     name: "Priya Sharma",
//     role: "HR Manager",
//     company: "Crest Facility Management",
//   },
//   {
//     quote: "The patrol checkpoint system with photo evidence is exactly what we needed. Clients love the transparency, and incidents get reported in real time now.",
//     name: "Vikram Patel",
//     role: "Founder",
//     company: "Sentinel Security Solutions",
//   },
//   {
//     quote: "We scaled from 120 to 900 contract workers without adding a single admin hire. The role-based access keeps everything organized and audit-ready.",
//     name: "Anjali Deshmukh",
//     role: "Admin Head",
//     company: "PrimeStaff Contracting",
//   },
//   {
//     quote: "The reporting module alone is worth it. Attendance trends, incident analytics, and site performance reports are ready whenever a client asks.",
//     name: "Sunil Iyer",
//     role: "Director",
//     company: "MetroGuard Agency",
//   },
// ];

// const PRICING = [
//   {
//     name: "Starter",
//     price: "₹4,999",
//     period: "/month",
//     capacity: "Up to 50 Employees",
//     popular: false,
//     features: [
//       "Employee Management",
//       "Attendance (GPS + QR)",
//       "Basic Reports",
//       "1 Admin User",
//       "Email Support",
//     ],
//   },
//   {
//     name: "Professional",
//     price: "₹9,999",
//     period: "/month",
//     capacity: "Up to 250 Employees",
//     popular: true,
//     features: [
//       "Everything in Starter",
//       "Live GPS Tracking",
//       "Patrolling Management",
//       "Incident Management",
//       "Leave & Training Modules",
//       "10 Admin Users",
//       "Priority Support",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     capacity: "Unlimited Employees",
//     popular: false,
//     features: [
//       "Everything in Professional",
//       "Custom Roles & Permissions",
//       "API Access",
//       "Dedicated Account Manager",
//       "On-site Training",
//       "24/7 Support",
//     ],
//   },
// ];

// const FAQS = [
//   { q: "What is Devexa Man Power?", a: "Devexa Man Power is a complete workforce and security management SaaS platform that handles employee records, attendance, GPS tracking, patrolling, leave, incidents, training, and client site operations from a single cloud-based system." },
//   { q: "Does it support GPS attendance?", a: "Yes. Employees can mark attendance with GPS location capture and geofence validation, ensuring they check in only from authorised site locations." },
//   { q: "Can I track employees live?", a: "Absolutely. The live GPS tracking module shows real-time employee locations on Google Maps, with route history and geofencing alerts." },
//   { q: "Does it support QR attendance?", a: "Yes. Each site or checkpoint can have a unique QR code. Field officers scan it to mark attendance or log patrol visits instantly." },
//   { q: "Is there a mobile app?", a: "Yes, a dedicated Android app is available for field officers, supervisors, and guards to mark attendance, track patrols, report incidents, and apply for leave on the go." },
//   { q: "Is my data secure?", a: "Your data is protected with Firebase infrastructure, encrypted data transfer, role-based access control, audit logs, and automatic daily backups." },
//   { q: "Can I manage multiple sites?", a: "Yes. The platform is built for multi-site operations. You can register unlimited client sites, assign employees per site, and monitor all of them from one dashboard." },
//   { q: "Can employees apply leave from mobile?", a: "Yes. Employees can raise leave requests (casual, sick, earned, half-day) from the mobile app, which route to supervisors for approval through a configurable workflow." },
//   { q: "What industries does it serve?", a: "Security agencies, facility management, housekeeping services, contract workforce providers, staffing agencies, manufacturing, construction, and logistics companies." },
//   { q: "How many employees can it handle?", a: "The platform is scalable from 50 to 10,000+ employees. The Enterprise plan supports unlimited employees and sites with no performance impact." },
//   { q: "Is training provided?", a: "Yes. Every plan includes guided onboarding. Enterprise customers receive dedicated on-site training and a personal account manager for smooth deployment." },
//   { q: "What reports are available?", a: "Attendance trends, employee growth, leave reports, incident analytics, patrol performance, and site performance reports — all exportable and auto-generated." },
//   { q: "Can I customize roles?", a: "Yes. Beyond the 9 built-in roles, Enterprise plans let you create custom roles with granular, module-level permission controls." },
//   { q: "Is there a free trial?", a: "Yes, you can start a free trial to explore all features with your own data before committing to a paid plan." },
//   { q: "How do I get started?", a: "Simply book a free demo or contact our sales team. We'll understand your requirements, configure your account, and have you live in days." },
// ];

// const MOBILE_FEATURES = [
//   { icon: MapPin, label: "GPS Attendance" },
//   { icon: QrCode, label: "QR Attendance" },
//   { icon: Navigation, label: "Live Tracking" },
//   { icon: ShieldCheck, label: "Patrolling" },
//   { icon: CalendarDays, label: "Leave Requests" },
//   { icon: AlertTriangle, label: "Incident Reporting" },
// ];

// const CONTACT_INFO = [
//   { icon: Building2, label: "Company", value: "Devexa Technologies" },
//   { icon: PhoneCall, label: "Phone", value: "+91 9637753303" },
//   { icon: Mail, label: "Email", value: "info@devexatechnologies.com" },
//   { icon: Globe, label: "Website", value: "www.devexatechnologies.com" },
//   { icon: MapPin, label: "Location", value: "Vishrantwadi, Pune, Maharashtra, India" },
// ];

// /* =====================================================================
//    COMPONENT
// ===================================================================== */

// export default function DevexaManPower() {
//   const [activeTab, setActiveTab] = useState(FEATURE_CATEGORIES[0].key);
//   const [openFaq, setOpenFaq] = useState<number | null>(0);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const rootRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const activeCategory = FEATURE_CATEGORIES.find((c) => c.key === activeTab)!;

//   /* IntersectionObserver: reveal every .devexa-animate-on-scroll element */
//   useEffect(() => {
//     const root = rootRef.current;
//     if (!root) return;
//     const targets = root.querySelectorAll<HTMLElement>(".devexa-animate-on-scroll");
//     if (!targets.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("devexa-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
//     );

//     targets.forEach((t) => observer.observe(t));
//     return () => observer.disconnect();
//   }, []);

//   /* Trigger the hero stat counters once the stats row scrolls into view */
//   useEffect(() => {
//     const node = statsRef.current;
//     if (!node) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0]?.isIntersecting) {
//           setStatsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.4 },
//     );
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   /* Mouse-tracked 3D tilt for interactive cards */
//   const handleTilt = (e: React.MouseEvent<HTMLElement>) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width - 0.5;
//     const py = (e.clientY - rect.top) / rect.height - 0.5;
//     card.style.transform =
//       `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-8px) scale(1.03)`;
//   };
//   const resetTilt = (e: React.MouseEvent<HTMLElement>) => {
//     e.currentTarget.style.transform = "";
//   };

//   return (
//     <div className="devexa-root" ref={rootRef}>
//       {/* ====================== 1. HERO ====================== */}
//       <section id="devexa-hero" className="devexa-hero">
//         <div className="devexa-hero-grid" />
//         <div className="devexa-hero-glow" />
//         <div className="devexa-float-dot devexa-float-dot--md" style={{ top: "18%", right: "10%" }} />
//         <div className="devexa-float-dot devexa-float-dot--rev devexa-float-dot--sm" style={{ bottom: "22%", right: "24%" }} />
//         <div className="devexa-container devexa-hero-inner">
//           <span className="devexa-hero-badge devexa-animate-on-scroll">
//             <Sparkles size={14} /> Devexa Man Power Platform
//           </span>
//           <h1 className="devexa-hero-h1 devexa-animate-on-scroll">
//             Complete Workforce &amp; Security{" "}
//             <span>
//               Management Platform
//               <span className="devexa-cursor" aria-hidden="true" />
//             </span>
//           </h1>
//           <p className="devexa-hero-sub devexa-animate-on-scroll">
//             Manage Employees, Attendance, GPS Tracking, Patrolling, Leave, Incidents, Training,
//             Client Sites, and Workforce Operations from a Single Platform.
//           </p>
//           <div className="devexa-hero-cta devexa-animate-on-scroll">
//             <a href="#devexa-contact" className="devexa-btn devexa-btn-primary">
//               <Rocket size={16} /> Request Demo
//             </a>
//             <a href="#devexa-pricing" className="devexa-btn devexa-btn-secondary">
//               <PlayCircle size={16} /> Start Free Trial
//             </a>
//             <a href="#devexa-contact" className="devexa-btn devexa-btn-ghost">
//               <PhoneCall size={16} /> Contact Sales
//             </a>
//           </div>
//           <div className="devexa-hero-stats" ref={statsRef}>
//             {HERO_STATS.map((s) => (
//               <StatPill key={s.label} stat={s} active={statsVisible} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 2. PROBLEMS ====================== */}
//       <section id="devexa-problems" className="devexa-section devexa-problems devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">The Challenge</span>
//             <h2 className="devexa-h2">
//               Challenges Faced By <span>Security &amp; Manpower</span> Companies
//             </h2>
//             <p className="devexa-lead">
//               Managing a distributed workforce with outdated tools costs time, money, and trust.
//             </p>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--4">
//             {PROBLEMS.map((p) => (
//               <div key={p.title} className="devexa-problem-card devexa-animate-on-scroll">
//                 <div className="devexa-problem-icon">
//                   <p.icon size={22} />
//                 </div>
//                 <h3 className="devexa-card-title">{p.title}</h3>
//                 <p className="devexa-card-desc">{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 3. SOLUTION ====================== */}
//       <section id="devexa-solution" className="devexa-section devexa-solution devexa-section-divider">
//         <div className="devexa-container devexa-solution-inner">
//           <span className="devexa-solution-badge devexa-animate-on-scroll">
//             <CheckCircle size={16} /> The All-In-One Solution
//           </span>
//           <h2 className="devexa-h2 devexa-h2--center devexa-animate-on-scroll">Meet Devexa Man Power</h2>
//           <p className="devexa-lead devexa-lead--center devexa-animate-on-scroll">
//             A complete workforce management ecosystem designed for manpower agencies, security
//             companies, facility management firms, housekeeping companies, industrial staffing
//             providers, and workforce contractors.
//           </p>
//           <div className="devexa-solution-pills devexa-animate-on-scroll">
//             {["Manpower Agencies", "Security Companies", "Facility Management", "Housekeeping", "Industrial Staffing", "Workforce Contractors"].map(
//               (pill) => (
//                 <span key={pill} className="devexa-pill">
//                   <Check size={13} /> {pill}
//                 </span>
//               ),
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 4. FEATURES ====================== */}
//       <section id="devexa-features" className="devexa-section devexa-features devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Capabilities</span>
//             <h2 className="devexa-h2">
//               Powerful Features for <span>Every Need</span>
//             </h2>
//             <p className="devexa-lead">
//               Ten integrated modules covering the entire workforce and security lifecycle.
//             </p>
//           </div>

//           <div className="devexa-tabs devexa-animate-on-scroll">
//             {FEATURE_CATEGORIES.map((cat) => (
//               <button
//                 key={cat.key}
//                 className={`devexa-tab ${activeTab === cat.key ? "devexa-tab--active" : ""}`}
//                 onClick={() => setActiveTab(cat.key)}
//               >
//                 <cat.icon size={16} />
//                 <span>{cat.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="devexa-feature-grid">
//             {activeCategory.features.map((f) => (
//               <div
//                 key={f}
//                 className="devexa-feature-card devexa-animate-on-scroll"
//                 onMouseMove={handleTilt}
//                 onMouseLeave={resetTilt}
//               >
//                 <span className="devexa-feature-check">
//                   <Check size={14} />
//                 </span>
//                 <span className="devexa-feature-text">{f}</span>
//               </div>
//             ))}
//           </div>
//           <div className="devexa-feature-foot">
//             <activeCategory.icon size={18} />
//             <span>{activeCategory.features.length} features in {activeCategory.label}</span>
//           </div>
//         </div>
//       </section>

//       {/* ====================== 5. DASHBOARD SHOWCASE ====================== */}
//       <section id="devexa-dashboard" className="devexa-section devexa-dashboard devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Dashboards</span>
//             <h2 className="devexa-h2">
//               Intuitive Dashboards for <span>Every Role</span>
//             </h2>
//             <p className="devexa-lead">
//               Purpose-built views that surface the right metrics for admins, field officers, and HR.
//             </p>
//           </div>
//           <div className="devexa-dash-grid">
//             {DASHBOARDS.map((d) => (
//               <div key={d.title} className="devexa-dash-card devexa-animate-on-scroll">
//                 <div className="devexa-dash-top" style={{ background: d.accent }}>
//                   <d.icon size={20} />
//                   <span>{d.title}</span>
//                 </div>
//                 <div className="devexa-dash-metrics">
//                   {d.metrics.map((m) => (
//                     <div key={m.label} className="devexa-dash-metric">
//                       <span className="devexa-dash-metric-val">{m.value}</span>
//                       <span className="devexa-dash-metric-lbl">{m.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 6. ROLE BASED ACCESS ====================== */}
//       <section id="devexa-roles" className="devexa-section devexa-roles devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Access Control</span>
//             <h2 className="devexa-h2">Role-Based Access Control</h2>
//             <p className="devexa-lead">Secure, granular access for every team member.</p>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--3">
//             {ROLES.map((r) => (
//               <div key={r.title} className="devexa-role-card devexa-animate-on-scroll">
//                 <div className="devexa-role-icon">
//                   <r.icon size={22} />
//                 </div>
//                 <div>
//                   <h3 className="devexa-card-title">{r.title}</h3>
//                   <p className="devexa-card-desc">{r.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 7. INDUSTRIES ====================== */}
//       <section id="devexa-industries" className="devexa-section devexa-industries devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Who We Serve</span>
//             <h2 className="devexa-h2">
//               Industries We <span>Serve</span>
//             </h2>
//             <p className="devexa-lead">
//               Trusted across sectors that depend on distributed, reliable workforces.
//             </p>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--4">
//             {INDUSTRIES.map((ind) => (
//               <div key={ind.title} className="devexa-industry-card devexa-animate-on-scroll">
//                 <div className="devexa-industry-icon">
//                   <ind.icon size={24} />
//                 </div>
//                 <h3 className="devexa-card-title">{ind.title}</h3>
//                 <p className="devexa-card-desc">{ind.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 8. REPORTS & ANALYTICS ====================== */}
//       <section id="devexa-reports" className="devexa-section devexa-reports devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Insights</span>
//             <h2 className="devexa-h2">
//               Comprehensive <span>Reports &amp; Analytics</span>
//             </h2>
//             <p className="devexa-lead">
//               Data visualisations that turn raw workforce activity into decisions.
//             </p>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--3">
//             {REPORTS.map((r) => (
//               <div key={r.title} className="devexa-report-card devexa-animate-on-scroll">
//                 <div className="devexa-report-head">
//                   <r.icon size={18} />
//                   <span>{r.title}</span>
//                 </div>
//                 <div className="devexa-bar-chart">
//                   {r.bars.map((h, i) => (
//                     <span key={i} className="devexa-bar" style={{ height: `${h}%` }} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 9. MOBILE APP ====================== */}
//       <section id="devexa-mobile" className="devexa-section devexa-mobile devexa-section-divider">
//         <div className="devexa-container devexa-mobile-layout">
//           <div className="devexa-mobile-phone devexa-animate-on-scroll">
//             <img src={appMockup} alt="Devexa Man Power mobile app" />
//             <span className="devexa-mobile-badge">
//               <Smartphone size={14} /> Android App Available
//             </span>
//           </div>
//           <div className="devexa-mobile-content devexa-animate-on-scroll">
//             <span className="devexa-label">On The Go</span>
//             <h2 className="devexa-h2">
//               Manage Your Workforce <span>Anywhere</span>
//             </h2>
//             <p className="devexa-lead devexa-lead--left">
//               A full-featured Android app puts attendance, tracking, and reporting in the hands of
//               every field officer and guard.
//             </p>
//             <ul className="devexa-mobile-list">
//               {MOBILE_FEATURES.map((f) => (
//                 <li key={f.label}>
//                   <f.icon size={18} />
//                   <span>{f.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ====================== 10. WHY CHOOSE ====================== */}
//       <section id="devexa-why" className="devexa-section devexa-why devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Advantages</span>
//             <h2 className="devexa-h2">
//               Why Choose <span>Devexa Man Power?</span>
//             </h2>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--4">
//             {WHY.map((w) => (
//               <div key={w.title} className="devexa-why-card devexa-animate-on-scroll">
//                 <div className="devexa-why-icon">
//                   <w.icon size={22} />
//                 </div>
//                 <h3 className="devexa-card-title">{w.title}</h3>
//                 <p className="devexa-card-desc">{w.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 11. SECURITY ====================== */}
//       <section id="devexa-security" className="devexa-section devexa-security devexa-section-divider">
//         <div className="devexa-float-dot devexa-float-dot--lg" style={{ top: "12%", right: "-4%" }} />
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label devexa-label--light">Protection</span>
//             <h2 className="devexa-h2 devexa-h2--light">
//               Enterprise-Grade <span>Security</span>
//             </h2>
//             <p className="devexa-lead devexa-lead--light">
//               Your workforce data is guarded by layered, enterprise-grade security at every step.
//             </p>
//           </div>
//           <div className="devexa-card-grid devexa-card-grid--3">
//             {SECURITY.map((s) => (
//               <div key={s.title} className="devexa-security-card devexa-animate-on-scroll">
//                 <div className="devexa-security-icon">
//                   <s.icon size={22} />
//                 </div>
//                 <h3 className="devexa-card-title devexa-card-title--light">{s.title}</h3>
//                 <p className="devexa-card-desc devexa-card-desc--light">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 12. TESTIMONIALS ====================== */}
//       <section id="devexa-testimonials" className="devexa-section devexa-testimonials devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Testimonials</span>
//             <h2 className="devexa-h2">
//               Trusted by <span>Industry Leaders</span>
//             </h2>
//           </div>
//           <div className="devexa-testi-grid">
//             {TESTIMONIALS.map((t) => (
//               <div key={t.name} className="devexa-testi-card devexa-animate-on-scroll">
//                 <Quote className="devexa-testi-quote" size={28} />
//                 <p className="devexa-testi-text">{t.quote}</p>
//                 <div className="devexa-stars">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} size={15} fill="currentColor" />
//                   ))}
//                 </div>
//                 <div className="devexa-testi-author">
//                   <strong>{t.name}</strong>
//                   <span>{t.role}, {t.company}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 13. PRICING ====================== */}
//       <section id="devexa-pricing" className="devexa-section devexa-pricing devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Pricing</span>
//             <h2 className="devexa-h2">
//               Simple, <span>Transparent Pricing</span>
//             </h2>
//             <p className="devexa-lead">Plans that scale with your workforce, with no hidden costs.</p>
//           </div>
//           <div className="devexa-price-grid">
//             {PRICING.map((p) => (
//               <div
//                 key={p.name}
//                 className={`devexa-price-card devexa-animate-on-scroll ${p.popular ? "devexa-price-card--popular" : ""}`}
//               >
//                 {p.popular && <span className="devexa-price-tag">Most Popular</span>}
//                 <h3 className="devexa-price-name">{p.name}</h3>
//                 <div className="devexa-price-amount">
//                   <span className="devexa-price-val">{p.price}</span>
//                   <span className="devexa-price-period">{p.period}</span>
//                 </div>
//                 <div className="devexa-price-cap">{p.capacity}</div>
//                 <ul className="devexa-price-list">
//                   {p.features.map((f) => (
//                     <li key={f}>
//                       <Check size={15} /> {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href="#devexa-contact"
//                   className={`devexa-btn ${p.popular ? "devexa-btn-primary" : "devexa-btn-secondary"}`}
//                 >
//                   {p.popular ? "Start Free Trial" : "Get Started"}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 14. FAQ ====================== */}
//       <section id="devexa-faq" className="devexa-section devexa-faq devexa-section-divider">
//         <div className="devexa-container devexa-faq-inner">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Questions</span>
//             <h2 className="devexa-h2">
//               Frequently Asked <span>Questions</span>
//             </h2>
//           </div>
//           <div className="devexa-faq-list">
//             {FAQS.map((item, i) => (
//               <div
//                 key={i}
//                 className={`devexa-faq-item devexa-animate-on-scroll ${openFaq === i ? "devexa-faq-item--open" : ""}`}
//               >
//                 <button
//                   className="devexa-faq-q"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <span>{item.q}</span>
//                   <ChevronDown size={18} className="devexa-faq-chevron" />
//                 </button>
//                 <div className="devexa-faq-a">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== 15. CTA ====================== */}
//       <section id="devexa-cta" className="devexa-cta">
//         <div className="devexa-float-dot devexa-float-dot--md" style={{ top: "20%", left: "6%" }} />
//         <div className="devexa-float-dot devexa-float-dot--rev devexa-float-dot--sm" style={{ bottom: "18%", right: "10%" }} />
//         <div className="devexa-container devexa-cta-inner devexa-animate-on-scroll">
//           <h2 className="devexa-cta-title">Ready to Digitize Your Workforce Operations?</h2>
//           <p className="devexa-cta-sub">
//             Join hundreds of companies already using Devexa Man Power
//           </p>
//           <div className="devexa-cta-btns">
//             <a href="#devexa-contact" className="devexa-btn devexa-btn-primary">
//               <CalendarCheck size={16} /> Book Free Demo
//             </a>
//             <a href="#devexa-contact" className="devexa-btn devexa-btn-ghost">
//               <PhoneCall size={16} /> Contact Sales
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ====================== 16. CONTACT ====================== */}
//       <section id="devexa-contact" className="devexa-section devexa-contact devexa-section-divider">
//         <div className="devexa-container">
//           <div className="devexa-section-head devexa-animate-on-scroll">
//             <span className="devexa-label">Contact</span>
//             <h2 className="devexa-h2">
//               Get In <span>Touch</span>
//             </h2>
//             <p className="devexa-lead">Reach out and our team will respond within 24 hours.</p>
//           </div>
//           <div className="devexa-contact-grid">
//             <div className="devexa-contact-info devexa-animate-on-scroll">
//               {CONTACT_INFO.map((c) => (
//                 <div key={c.label} className="devexa-contact-info-item">
//                   <div className="devexa-contact-info-icon">
//                     <c.icon size={20} />
//                   </div>
//                   <div>
//                     <span className="devexa-contact-info-label">{c.label}</span>
//                     <span className="devexa-contact-info-value">{c.value}</span>
//                   </div>
//                 </div>
//               ))}
//               <a href="https://wa.me/919637753303" className="devexa-btn devexa-btn-wa">
//                 <MessageCircle size={16} /> Chat on WhatsApp
//               </a>
//             </div>
//             <form className="devexa-contact-form devexa-animate-on-scroll" onSubmit={handleSubmit}>
//               {submitted && (
//                 <div className="devexa-form-success">
//                   <CheckCircle size={16} /> Thank you! We'll be in touch shortly.
//                 </div>
//               )}
//               <div className="devexa-form-row">
//                 <input
//                   className="devexa-input"
//                   placeholder="Full Name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//                 <input
//                   className="devexa-input"
//                   type="email"
//                   placeholder="Email Address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//               </div>
//               <div className="devexa-form-row">
//                 <input
//                   className="devexa-input"
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//                 <input
//                   className="devexa-input"
//                   placeholder="Company Name"
//                   value={form.company}
//                   onChange={(e) => setForm({ ...form, company: e.target.value })}
//                 />
//               </div>
//               <textarea
//                 className="devexa-input devexa-textarea"
//                 placeholder="Your Message"
//                 rows={4}
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//               />
//               <button type="submit" className="devexa-btn devexa-btn-primary devexa-form-submit">
//                 <Send size={16} /> Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






import { useState, useEffect, useRef, type FormEvent } from "react";
import "./DevexaManPower.css";
import appMockup from "../assets/app-mockup.png";

import {
  Rocket,
  PlayCircle,
  PhoneCall,
  Clock,
  Shield,
  Layers,
  MapPin,
  Cloud,
  Lock,
  ClipboardX,
  FileSpreadsheet,
  MapPinOff,
  AlertTriangle,
  EyeOff,
  FileText,
  CalendarX,
  BarChart3,
  CheckCircle,
  Sparkles,
  Users,
  QrCode,
  Navigation,
  CalendarDays,
  GraduationCap,
  ClipboardCheck,
  Package,
  Building2,
  LayoutDashboard,
  Smartphone,
  UserCog,
  Crown,
  Settings,
  Briefcase,
  ShieldCheck,
  HardHat,
  Factory,
  Truck,
  TrendingUp,
  CalendarClock,
  AlertCircle,
  Footprints,
  Activity,
  IndianRupee,
  Zap,
  Database,
  KeyRound,
  Star,
  Quote,
  Check,
  ChevronDown,
  HelpCircle,
  CalendarCheck,
  Mail,
  Globe,
  MessageCircle,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =====================================================================
   DATA
===================================================================== */

const HERO_STATS = [
  { icon: Layers, count: 10, suffix: "+", label: "Business Modules" },
  { icon: Sparkles, count: 50, suffix: "+", label: "Enterprise Features" },
  { icon: MapPin, count: 0, suffix: "", label: "Real-Time GPS Tracking" },
  { icon: Cloud, count: 0, suffix: "", label: "Cloud-Based Platform" },
  { icon: Lock, count: 0, suffix: "", label: "Role-Based Access Control" },
];

/* =====================================================================
   HOOKS
===================================================================== */

/** Animated count-up hook that starts when `active` becomes true. */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target <= 0) return;
    let raf = 0;
    let start = 0;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

/** Hero stat pill that counts up once `active` is true. */
function StatPill({ stat, active }: { stat: (typeof HERO_STATS)[number]; active: boolean }) {
  const count = useCountUp(stat.count, active);
  return (
    <div className="devexa-hero-stat">
      <stat.icon size={18} />
      <span>
        {stat.count > 0 && <span className="devexa-counter-num">{count}</span>}
        {stat.count > 0 ? `${stat.suffix} ${stat.label}` : stat.label}
      </span>
    </div>
  );
}

const PROBLEMS = [
  { icon: ClipboardX, title: "Manual Attendance", desc: "Paper registers lead to errors, buddy punching, and no reliable attendance data." },
  { icon: FileSpreadsheet, title: "Excel-Based Records", desc: "Scattered spreadsheets make it impossible to track workforce data in real time." },
  { icon: MapPinOff, title: "No Live Tracking", desc: "Field teams operate blindly with zero visibility into employee locations." },
  { icon: AlertTriangle, title: "Delayed Incident Reporting", desc: "Incidents reported days late, increasing risk and compliance gaps." },
  { icon: EyeOff, title: "Poor Workforce Visibility", desc: "No single view of who is where, doing what, across multiple sites." },
  { icon: FileText, title: "Paper-Based Operations", desc: "Mountains of paperwork slow down every operational process." },
  { icon: CalendarX, title: "Difficult Leave Management", desc: "Leave requests get lost, causing staffing gaps and payroll errors." },
  { icon: BarChart3, title: "Lack of Reporting", desc: "No actionable insights to make informed workforce decisions." },
];

const FEATURE_CATEGORIES = [
  {
    key: "employee",
    label: "Employee Management",
    icon: Users,
    features: [
      "Employee Registration",
      "Digital Employee Records",
      "Employee ID Generation",
      "Document Management",
      "Aadhaar & PAN Storage",
      "Employee Search",
      "Digital ID Cards",
    ],
  },
  {
    key: "attendance",
    label: "Attendance Management",
    icon: Clock,
    features: [
      "GPS Attendance",
      "QR Attendance",
      "Geofence Attendance",
      "Shift Management",
      "Overtime Management",
      "Attendance Reports",
    ],
  },
  {
    key: "tracking",
    label: "Live GPS Tracking",
    icon: MapPin,
    features: [
      "Real-Time Employee Tracking",
      "Route History",
      "Site Monitoring",
      "Google Maps Integration",
      "Geofencing",
    ],
  },
  {
    key: "patrolling",
    label: "Patrolling Management",
    icon: ShieldCheck,
    features: [
      "Patrol Checkpoints",
      "Patrol Reports",
      "Site Visit Logs",
      "Photo Evidence",
      "Patrol Monitoring",
    ],
  },
  {
    key: "incident",
    label: "Incident Management",
    icon: AlertTriangle,
    features: [
      "Incident Reporting",
      "Image Uploads",
      "Investigation Workflow",
      "Resolution Tracking",
      "Incident Analytics",
    ],
  },
  {
    key: "leave",
    label: "Leave Management",
    icon: CalendarDays,
    features: [
      "Casual Leave",
      "Sick Leave",
      "Earned Leave",
      "Half-Day Leave",
      "Approval Workflow",
    ],
  },
  {
    key: "training",
    label: "Training Management",
    icon: GraduationCap,
    features: [
      "Training Records",
      "Employee Certifications",
      "Training Attendance",
      "Compliance Tracking",
    ],
  },
  {
    key: "survey",
    label: "Survey & Audit",
    icon: ClipboardCheck,
    features: [
      "Site Security Audits",
      "Safety Inspections",
      "Compliance Reviews",
    ],
  },
  {
    key: "inventory",
    label: "Inventory & Issue Slip",
    icon: Package,
    features: [
      "Material Issuance",
      "Uniform Tracking",
      "Equipment Allocation",
    ],
  },
  {
    key: "client",
    label: "Client Management",
    icon: Building2,
    features: [
      "Client Registration",
      "Site Management",
      "Contact Management",
      "Client Reports",
    ],
  },
];

const DASHBOARDS = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    accent: "#f47a20",
    metrics: [
      { label: "Total Employees", value: "1,240" },
      { label: "Active Employees", value: "1,180" },
      { label: "Attendance Today", value: "96%" },
      { label: "Leave Requests", value: "14" },
      { label: "Sites Active", value: "32" },
      { label: "Incidents Today", value: "3" },
    ],
  },
  {
    icon: Smartphone,
    title: "Field Officer Dashboard",
    accent: "#0f2e4f",
    metrics: [
      { label: "GPS Tracking", value: "Live" },
      { label: "Attendance", value: "Marked" },
      { label: "Patrol Visits", value: "8" },
      { label: "QR Scans", value: "22" },
    ],
  },
  {
    icon: UserCog,
    title: "HR Dashboard",
    accent: "#0f2e4f",
    metrics: [
      { label: "Employee Records", value: "1,240" },
      { label: "Documents", value: "5,600" },
      { label: "Leave Approvals", value: "9" },
    ],
  },
];

const ROLES = [
  { icon: Crown, title: "Super Admin", desc: "Full system control with access to every module, role, and configuration." },
  { icon: Settings, title: "Admin", desc: "Complete operational access except super-admin security configurations." },
  { icon: UserCog, title: "HR Manager", desc: "Manage employees, documents, leave, and HR workflows across sites." },
  { icon: Briefcase, title: "Operational Manager", desc: "Oversee daily operations, attendance, and field deployments." },
  { icon: MapPin, title: "Area Manager", desc: "Monitor multiple sites and teams within an assigned geographic area." },
  { icon: Smartphone, title: "Field Officer", desc: "Mark attendance, log patrols, and report incidents from the field." },
  { icon: ShieldCheck, title: "Supervisor", desc: "Approve attendance, manage shifts, and oversee site teams." },
  { icon: Shield, title: "Security Guard", desc: "Check-in, complete patrols, and raise SOS alerts on duty." },
  { icon: Building2, title: "Client", desc: "View deployment status, reports, and site performance via portal." },
];

const INDUSTRIES = [
  { icon: Shield, title: "Security Agencies", desc: "Manage guards, patrols, incidents, and client sites end-to-end." },
  { icon: Building2, title: "Facility Management", desc: "Coordinate housekeeping, maintenance, and multi-site operations." },
  { icon: Sparkles, title: "Housekeeping Services", desc: "Track staff attendance, shifts, and cleaning schedules digitally." },
  { icon: Users, title: "Contract Workforce Providers", desc: "Handle large distributed teams across multiple client locations." },
  { icon: Briefcase, title: "Staffing Agencies", desc: "Manage deployments, billing, and compliance for contract staff." },
  { icon: Factory, title: "Manufacturing Companies", desc: "Monitor shift workers, attendance, and safety compliance on the floor." },
  { icon: HardHat, title: "Construction Companies", desc: "Track labor attendance, site safety, and contractor workforce." },
  { icon: Truck, title: "Logistics Companies", desc: "Oversee drivers, warehouse staff, and route-based field teams." },
];

const REPORTS = [
  { icon: TrendingUp, title: "Attendance Trends", bars: [60, 75, 55, 90, 70, 85, 95] },
  { icon: Users, title: "Employee Growth", bars: [30, 45, 50, 65, 72, 80, 88] },
  { icon: CalendarClock, title: "Leave Reports", bars: [40, 35, 60, 50, 45, 70, 55] },
  { icon: AlertCircle, title: "Incident Analytics", bars: [20, 35, 25, 50, 40, 30, 45] },
  { icon: Footprints, title: "Patrol Performance", bars: [70, 80, 65, 90, 85, 95, 78] },
  { icon: MapPin, title: "Site Performance", bars: [55, 68, 72, 60, 88, 76, 92] },
];

const WHY = [
  { icon: Activity, title: "Real-Time Monitoring", desc: "Track every employee, attendance, and incident live as it happens." },
  { icon: Cloud, title: "Cloud Based", desc: "Access your workforce data from anywhere, anytime, on any device." },
  { icon: Lock, title: "Secure Infrastructure", desc: "Enterprise-grade security protecting your sensitive workforce data." },
  { icon: Smartphone, title: "Mobile First", desc: "Built for the field with a powerful Android app for officers and guards." },
  { icon: TrendingUp, title: "Scalable To 10,000+ Employees", desc: "Grows with your business from 50 to 10,000+ employees seamlessly." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Enterprise features at a price designed for Indian businesses." },
  { icon: Zap, title: "Easy Deployment", desc: "Go live in days, not months, with guided onboarding and training." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Role-based access, audit logs, and encrypted data at every layer." },
];

const SECURITY = [
  { icon: Cloud, title: "Firebase Infrastructure", desc: "Built on Google's Firebase for reliability and global scale." },
  { icon: Database, title: "Secure Cloud Storage", desc: "All documents and data stored securely with redundancy." },
  { icon: KeyRound, title: "Role-Based Access Control", desc: "Granular permissions ensure only authorized access." },
  { icon: Lock, title: "Encrypted Data Transfer", desc: "End-to-end encryption for all data in transit." },
  { icon: FileText, title: "Audit Logs", desc: "Every action tracked with full audit trail for compliance." },
  { icon: Database, title: "Daily Backups", desc: "Automatic daily backups ensure your data is never lost." },
];

const TESTIMONIALS = [
  {
    quote: "Devexa Man Power transformed how we track our 800+ guards. Live GPS attendance eliminated buddy punching completely. Our client reports are now instant.",
    name: "Rajesh Kumar",
    role: "Operations Director",
    company: "SecureGuard Services",
  },
  {
    quote: "Managing attendance across 15 sites used to be a nightmare of Excel sheets. Now everything is on one dashboard. Leave approvals take minutes, not days.",
    name: "Priya Sharma",
    role: "HR Manager",
    company: "Crest Facility Management",
  },
  {
    quote: "The patrol checkpoint system with photo evidence is exactly what we needed. Clients love the transparency, and incidents get reported in real time now.",
    name: "Vikram Patel",
    role: "Founder",
    company: "Sentinel Security Solutions",
  },
  {
    quote: "We scaled from 120 to 900 contract workers without adding a single admin hire. The role-based access keeps everything organized and audit-ready.",
    name: "Anjali Deshmukh",
    role: "Admin Head",
    company: "PrimeStaff Contracting",
  },
  {
    quote: "The reporting module alone is worth it. Attendance trends, incident analytics, and site performance reports are ready whenever a client asks.",
    name: "Sunil Iyer",
    role: "Director",
    company: "MetroGuard Agency",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    capacity: "Up to 50 Employees",
    popular: false,
    features: [
      "Employee Management",
      "Attendance (GPS + QR)",
      "Basic Reports",
      "1 Admin User",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "/month",
    capacity: "Up to 250 Employees",
    popular: true,
    features: [
      "Everything in Starter",
      "Live GPS Tracking",
      "Patrolling Management",
      "Incident Management",
      "Leave & Training Modules",
      "10 Admin Users",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    capacity: "Unlimited Employees",
    popular: false,
    features: [
      "Everything in Professional",
      "Custom Roles & Permissions",
      "API Access",
      "Dedicated Account Manager",
      "On-site Training",
      "24/7 Support",
    ],
  },
];

const FAQS = [
  { q: "What is Devexa Man Power?", a: "Devexa Man Power is a complete workforce and security management SaaS platform that handles employee records, attendance, GPS tracking, patrolling, leave, incidents, training, and client site operations from a single cloud-based system." },
  { q: "Does it support GPS attendance?", a: "Yes. Employees can mark attendance with GPS location capture and geofence validation, ensuring they check in only from authorised site locations." },
  { q: "Can I track employees live?", a: "Absolutely. The live GPS tracking module shows real-time employee locations on Google Maps, with route history and geofencing alerts." },
  { q: "Does it support QR attendance?", a: "Yes. Each site or checkpoint can have a unique QR code. Field officers scan it to mark attendance or log patrol visits instantly." },
  { q: "Is there a mobile app?", a: "Yes, a dedicated Android app is available for field officers, supervisors, and guards to mark attendance, track patrols, report incidents, and apply for leave on the go." },
  { q: "Is my data secure?", a: "Your data is protected with Firebase infrastructure, encrypted data transfer, role-based access control, audit logs, and automatic daily backups." },
  { q: "Can I manage multiple sites?", a: "Yes. The platform is built for multi-site operations. You can register unlimited client sites, assign employees per site, and monitor all of them from one dashboard." },
  { q: "Can employees apply leave from mobile?", a: "Yes. Employees can raise leave requests (casual, sick, earned, half-day) from the mobile app, which route to supervisors for approval through a configurable workflow." },
  { q: "What industries does it serve?", a: "Security agencies, facility management, housekeeping services, contract workforce providers, staffing agencies, manufacturing, construction, and logistics companies." },
  { q: "How many employees can it handle?", a: "The platform is scalable from 50 to 10,000+ employees. The Enterprise plan supports unlimited employees and sites with no performance impact." },
  { q: "Is training provided?", a: "Yes. Every plan includes guided onboarding. Enterprise customers receive dedicated on-site training and a personal account manager for smooth deployment." },
  { q: "What reports are available?", a: "Attendance trends, employee growth, leave reports, incident analytics, patrol performance, and site performance reports — all exportable and auto-generated." },
  { q: "Can I customize roles?", a: "Yes. Beyond the 9 built-in roles, Enterprise plans let you create custom roles with granular, module-level permission controls." },
  { q: "Is there a free trial?", a: "Yes, you can start a free trial to explore all features with your own data before committing to a paid plan." },
  { q: "How do I get started?", a: "Simply book a free demo or contact our sales team. We'll understand your requirements, configure your account, and have you live in days." },
];

const MOBILE_FEATURES = [
  { icon: MapPin, label: "GPS Attendance" },
  { icon: QrCode, label: "QR Attendance" },
  { icon: Navigation, label: "Live Tracking" },
  { icon: ShieldCheck, label: "Patrolling" },
  { icon: CalendarDays, label: "Leave Requests" },
  { icon: AlertTriangle, label: "Incident Reporting" },
];

const CONTACT_INFO = [
  { icon: Building2, label: "Company", value: "Devexa Technologies" },
  { icon: PhoneCall, label: "Phone", value: "+91 9637753303" },
  { icon: Mail, label: "Email", value: "info@devexatechnologies.com" },
  { icon: Globe, label: "Website", value: "www.devexatechnologies.com" },
  { icon: MapPin, label: "Location", value: "Vishrantwadi, Pune, Maharashtra, India" },
];

/* =====================================================================
   COMPONENT
===================================================================== */

export default function DevexaManPower() {
  const [activeTab, setActiveTab] = useState(FEATURE_CATEGORIES[0].key);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const rootRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const activeCategory = FEATURE_CATEGORIES.find((c) => c.key === activeTab)!;

  // Get slides per view based on screen width
  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  // Update slides per view on resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Testimonial carousel controls
  const nextTestimonial = () => {
    const maxIndex = Math.max(0, TESTIMONIALS.length - slidesPerView);
    setTestimonialIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  const prevTestimonial = () => {
    const maxIndex = Math.max(0, TESTIMONIALS.length - slidesPerView);
    setTestimonialIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
  };

  const goToTestimonial = (index: number) => {
    const maxIndex = Math.max(0, TESTIMONIALS.length - slidesPerView);
    setTestimonialIndex(Math.min(index, maxIndex));
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (isAutoPlaying && TESTIMONIALS.length > slidesPerView) {
      autoPlayRef.current = setInterval(nextTestimonial, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, slidesPerView]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".devexa-animate-on-scroll");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("devexa-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleTilt = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform =
      `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-8px) scale(1.03)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  // Calculate slide percentage
  const slidePercentage = 100 / slidesPerView;
  const totalSlides = Math.ceil(TESTIMONIALS.length / slidesPerView);
  const currentSlide = Math.min(testimonialIndex, TESTIMONIALS.length - slidesPerView);

  return (
    <div className="devexa-root" ref={rootRef}>
      {/* ====================== 1. HERO ====================== */}
      <section id="devexa-hero" className="devexa-hero">
        <div className="devexa-hero-grid" />
        <div className="devexa-hero-glow" />
        <div className="devexa-float-dot devexa-float-dot--md" style={{ top: "18%", right: "10%" }} />
        <div className="devexa-float-dot devexa-float-dot--rev devexa-float-dot--sm" style={{ bottom: "22%", right: "24%" }} />
        <div className="devexa-container devexa-hero-inner">
          <span className="devexa-hero-badge devexa-animate-on-scroll">
            <Sparkles size={14} /> Devexa Man Power Platform
          </span>
          <h1 className="devexa-hero-h1 devexa-animate-on-scroll">
            Complete Workforce &amp; Security{" "}
            <span>
              Management Platform
              <span className="devexa-cursor" aria-hidden="true" />
            </span>
          </h1>
          <p className="devexa-hero-sub devexa-animate-on-scroll">
            Manage Employees, Attendance, GPS Tracking, Patrolling, Leave, Incidents, Training,
            Client Sites, and Workforce Operations from a Single Platform.
          </p>
          <div className="devexa-hero-cta devexa-animate-on-scroll">
            <a href="#devexa-contact" className="devexa-btn devexa-btn-primary">
              <Rocket size={16} /> Request Demo
            </a>
            <a href="#devexa-pricing" className="devexa-btn devexa-btn-secondary">
              <PlayCircle size={16} /> Start Free Trial
            </a>
            <a href="#devexa-contact" className="devexa-btn devexa-btn-ghost">
              <PhoneCall size={16} /> Contact Sales
            </a>
          </div>
          <div className="devexa-hero-stats" ref={statsRef}>
            {HERO_STATS.map((s) => (
              <StatPill key={s.label} stat={s} active={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 2. PROBLEMS ====================== */}
      <section id="devexa-problems" className="devexa-section devexa-problems devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">The Challenge</span>
            <h2 className="devexa-h2">
              Challenges Faced By <span>Security &amp; Manpower</span> Companies
            </h2>
            <p className="devexa-lead">
              Managing a distributed workforce with outdated tools costs time, money, and trust.
            </p>
          </div>
          <div className="devexa-card-grid devexa-card-grid--4">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="devexa-problem-card devexa-animate-on-scroll">
                <div className="devexa-problem-icon">
                  <p.icon size={22} />
                </div>
                <h3 className="devexa-card-title">{p.title}</h3>
                <p className="devexa-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 3. SOLUTION ====================== */}
      <section id="devexa-solution" className="devexa-section devexa-solution devexa-section-divider">
        <div className="devexa-container devexa-solution-inner">
          <span className="devexa-solution-badge devexa-animate-on-scroll">
            <CheckCircle size={16} /> The All-In-One Solution
          </span>
          <h2 className="devexa-h2 devexa-h2--center devexa-animate-on-scroll">Meet Devexa Man Power</h2>
          <p className="devexa-lead devexa-lead--center devexa-animate-on-scroll">
            A complete workforce management ecosystem designed for manpower agencies, security
            companies, facility management firms, housekeeping companies, industrial staffing
            providers, and workforce contractors.
          </p>
          <div className="devexa-solution-pills devexa-animate-on-scroll">
            {["Manpower Agencies", "Security Companies", "Facility Management", "Housekeeping", "Industrial Staffing", "Workforce Contractors"].map(
              (pill) => (
                <span key={pill} className="devexa-pill">
                  <Check size={13} /> {pill}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ====================== 4. FEATURES ====================== */}
      <section id="devexa-features" className="devexa-section devexa-features devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Capabilities</span>
            <h2 className="devexa-h2">
              Powerful Features for <span>Every Need</span>
            </h2>
            <p className="devexa-lead">
              Ten integrated modules covering the entire workforce and security lifecycle.
            </p>
          </div>

          <div className="devexa-tabs devexa-animate-on-scroll">
            {FEATURE_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`devexa-tab ${activeTab === cat.key ? "devexa-tab--active" : ""}`}
                onClick={() => setActiveTab(cat.key)}
              >
                <cat.icon size={16} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="devexa-feature-grid">
            {activeCategory.features.map((f) => (
              <div
                key={f}
                className="devexa-feature-card devexa-animate-on-scroll"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <span className="devexa-feature-check">
                  <Check size={14} />
                </span>
                <span className="devexa-feature-text">{f}</span>
              </div>
            ))}
          </div>
          <div className="devexa-feature-foot">
            <activeCategory.icon size={18} />
            <span>{activeCategory.features.length} features in {activeCategory.label}</span>
          </div>
        </div>
      </section>

      {/* ====================== 5. DASHBOARD SHOWCASE ====================== */}
      <section id="devexa-dashboard" className="devexa-section devexa-dashboard devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Dashboards</span>
            <h2 className="devexa-h2">
              Intuitive Dashboards for <span>Every Role</span>
            </h2>
            <p className="devexa-lead">
              Purpose-built views that surface the right metrics for admins, field officers, and HR.
            </p>
          </div>
          <div className="devexa-dash-grid">
            {DASHBOARDS.map((d) => (
              <div key={d.title} className="devexa-dash-card devexa-animate-on-scroll">
                <div className="devexa-dash-top" style={{ background: d.accent }}>
                  <d.icon size={20} />
                  <span>{d.title}</span>
                </div>
                <div className="devexa-dash-metrics">
                  {d.metrics.map((m) => (
                    <div key={m.label} className="devexa-dash-metric">
                      <span className="devexa-dash-metric-val">{m.value}</span>
                      <span className="devexa-dash-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 6. ROLE BASED ACCESS ====================== */}
      <section id="devexa-roles" className="devexa-section devexa-roles devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Access Control</span>
            <h2 className="devexa-h2">Role-Based Access Control</h2>
            <p className="devexa-lead">Secure, granular access for every team member.</p>
          </div>
          <div className="devexa-card-grid devexa-card-grid--3">
            {ROLES.map((r) => (
              <div key={r.title} className="devexa-role-card devexa-animate-on-scroll">
                <div className="devexa-role-icon">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="devexa-card-title">{r.title}</h3>
                  <p className="devexa-card-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 7. INDUSTRIES ====================== */}
      <section id="devexa-industries" className="devexa-section devexa-industries devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Who We Serve</span>
            <h2 className="devexa-h2">
              Industries We <span>Serve</span>
            </h2>
            <p className="devexa-lead">
              Trusted across sectors that depend on distributed, reliable workforces.
            </p>
          </div>
          <div className="devexa-card-grid devexa-card-grid--4">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="devexa-industry-card devexa-animate-on-scroll">
                <div className="devexa-industry-icon">
                  <ind.icon size={24} />
                </div>
                <h3 className="devexa-card-title">{ind.title}</h3>
                <p className="devexa-card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 8. REPORTS & ANALYTICS ====================== */}
      <section id="devexa-reports" className="devexa-section devexa-reports devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Insights</span>
            <h2 className="devexa-h2">
              Comprehensive <span>Reports &amp; Analytics</span>
            </h2>
            <p className="devexa-lead">
              Data visualisations that turn raw workforce activity into decisions.
            </p>
          </div>
          <div className="devexa-card-grid devexa-card-grid--3">
            {REPORTS.map((r) => (
              <div key={r.title} className="devexa-report-card devexa-animate-on-scroll">
                <div className="devexa-report-head">
                  <r.icon size={18} />
                  <span>{r.title}</span>
                </div>
                <div className="devexa-bar-chart">
                  {r.bars.map((h, i) => (
                    <span key={i} className="devexa-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 9. MOBILE APP ====================== */}
      <section id="devexa-mobile" className="devexa-section devexa-mobile devexa-section-divider">
        <div className="devexa-container devexa-mobile-layout">
          <div className="devexa-mobile-phone devexa-animate-on-scroll">
            <img src={appMockup} alt="Devexa Man Power mobile app" />
            <span className="devexa-mobile-badge">
              <Smartphone size={14} /> Android App Available
            </span>
          </div>
          <div className="devexa-mobile-content devexa-animate-on-scroll">
            <span className="devexa-label">On The Go</span>
            <h2 className="devexa-h2">
              Manage Your Workforce <span>Anywhere</span>
            </h2>
            <p className="devexa-lead devexa-lead--left">
              A full-featured Android app puts attendance, tracking, and reporting in the hands of
              every field officer and guard.
            </p>
            <ul className="devexa-mobile-list">
              {MOBILE_FEATURES.map((f) => (
                <li key={f.label}>
                  <f.icon size={18} />
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====================== 10. WHY CHOOSE ====================== */}
      <section id="devexa-why" className="devexa-section devexa-why devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Advantages</span>
            <h2 className="devexa-h2">
              Why Choose <span>Devexa Man Power?</span>
            </h2>
          </div>
          <div className="devexa-card-grid devexa-card-grid--4">
            {WHY.map((w) => (
              <div key={w.title} className="devexa-why-card devexa-animate-on-scroll">
                <div className="devexa-why-icon">
                  <w.icon size={22} />
                </div>
                <h3 className="devexa-card-title">{w.title}</h3>
                <p className="devexa-card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 11. SECURITY ====================== */}
      <section id="devexa-security" className="devexa-section devexa-security devexa-section-divider">
        <div className="devexa-float-dot devexa-float-dot--lg" style={{ top: "12%", right: "-4%" }} />
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label devexa-label--light">Protection</span>
            <h2 className="devexa-h2 devexa-h2--light">
              Enterprise-Grade <span>Security</span>
            </h2>
            <p className="devexa-lead devexa-lead--light">
              Your workforce data is guarded by layered, enterprise-grade security at every step.
            </p>
          </div>
          <div className="devexa-card-grid devexa-card-grid--3">
            {SECURITY.map((s) => (
              <div key={s.title} className="devexa-security-card devexa-animate-on-scroll">
                <div className="devexa-security-icon">
                  <s.icon size={22} />
                </div>
                <h3 className="devexa-card-title devexa-card-title--light">{s.title}</h3>
                <p className="devexa-card-desc devexa-card-desc--light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 12. TESTIMONIALS WITH CAROUSEL ====================== */}
      <section id="devexa-testimonials" className="devexa-section devexa-testimonials devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Testimonials</span>
            <h2 className="devexa-h2">
              Trusted by <span>Industry Leaders</span>
            </h2>
          </div>
          
          <div 
            className="devexa-testi-carousel"
            ref={carouselRef}
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
            onTouchStart={pauseAutoPlay}
            onTouchEnd={resumeAutoPlay}
          >
            <div 
              className="devexa-testi-track" 
              style={{ 
                transform: `translateX(-${currentSlide * slidePercentage}%)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="devexa-testi-card-wrapper" style={{ flex: `0 0 ${slidePercentage}%`, minWidth: `${slidePercentage}%` }}>
                  <div className="devexa-testi-card">
                    <Quote className="devexa-testi-quote" size={28} />
                    <p className="devexa-testi-text">{t.quote}</p>
                    <div className="devexa-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <div className="devexa-testi-author">
                      <strong>{t.name}</strong>
                      <span>{t.role}, {t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {TESTIMONIALS.length > slidesPerView && (
              <>
                <button 
                  className="devexa-testi-nav devexa-testi-nav--prev" 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="devexa-testi-nav devexa-testi-nav--next" 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div className="devexa-testi-dots">
              {Array.from({ length: Math.ceil(TESTIMONIALS.length / slidesPerView) }).map((_, idx) => (
                <button
                  key={idx}
                  className={`devexa-testi-dot ${idx === currentSlide ? 'devexa-testi-dot--active' : ''}`}
                  onClick={() => goToTestimonial(idx * slidesPerView)}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                />
              ))}
            </div>

            {/* Progress indicator for auto-slide */}
            <div className="devexa-testi-progress">
              <div className="devexa-testi-progress-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== 13. PRICING ====================== */}
      <section id="devexa-pricing" className="devexa-section devexa-pricing devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Pricing</span>
            <h2 className="devexa-h2">
              Simple, <span>Transparent Pricing</span>
            </h2>
            <p className="devexa-lead">Plans that scale with your workforce, with no hidden costs.</p>
          </div>
          <div className="devexa-price-grid">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`devexa-price-card devexa-animate-on-scroll ${p.popular ? "devexa-price-card--popular" : ""}`}
              >
                {p.popular && <span className="devexa-price-tag">Most Popular</span>}
                <h3 className="devexa-price-name">{p.name}</h3>
                <div className="devexa-price-amount">
                  <span className="devexa-price-val">{p.price}</span>
                  <span className="devexa-price-period">{p.period}</span>
                </div>
                <div className="devexa-price-cap">{p.capacity}</div>
                <ul className="devexa-price-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={15} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#devexa-contact"
                  className={`devexa-btn ${p.popular ? "devexa-btn-primary" : "devexa-btn-secondary"}`}
                >
                  {p.popular ? "Start Free Trial" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 14. FAQ ====================== */}
      <section id="devexa-faq" className="devexa-section devexa-faq devexa-section-divider">
        <div className="devexa-container devexa-faq-inner">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Questions</span>
            <h2 className="devexa-h2">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="devexa-faq-list">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className={`devexa-faq-item devexa-animate-on-scroll ${openFaq === i ? "devexa-faq-item--open" : ""}`}
              >
                <button
                  className="devexa-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="devexa-faq-chevron" />
                </button>
                <div className="devexa-faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== 15. CTA ====================== */}
      <section id="devexa-cta" className="devexa-cta">
        <div className="devexa-float-dot devexa-float-dot--md" style={{ top: "20%", left: "6%" }} />
        <div className="devexa-float-dot devexa-float-dot--rev devexa-float-dot--sm" style={{ bottom: "18%", right: "10%" }} />
        <div className="devexa-container devexa-cta-inner devexa-animate-on-scroll">
          <h2 className="devexa-cta-title">Ready to Digitize Your Workforce Operations?</h2>
          <p className="devexa-cta-sub">
            Join hundreds of companies already using Devexa Man Power
          </p>
          <div className="devexa-cta-btns">
            <a href="#devexa-contact" className="devexa-btn devexa-btn-primary">
              <CalendarCheck size={16} /> Book Free Demo
            </a>
            <a href="#devexa-contact" className="devexa-btn devexa-btn-ghost">
              <PhoneCall size={16} /> Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* ====================== 16. CONTACT ====================== */}
      <section id="devexa-contact" className="devexa-section devexa-contact devexa-section-divider">
        <div className="devexa-container">
          <div className="devexa-section-head devexa-animate-on-scroll">
            <span className="devexa-label">Contact</span>
            <h2 className="devexa-h2">
              Get In <span>Touch</span>
            </h2>
            <p className="devexa-lead">Reach out and our team will respond within 24 hours.</p>
          </div>
          <div className="devexa-contact-grid">
            <div className="devexa-contact-info devexa-animate-on-scroll">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="devexa-contact-info-item">
                  <div className="devexa-contact-info-icon">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <span className="devexa-contact-info-label">{c.label}</span>
                    <span className="devexa-contact-info-value">{c.value}</span>
                  </div>
                </div>
              ))}
              <a href="https://wa.me/919637753303" className="devexa-btn devexa-btn-wa">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
            <form className="devexa-contact-form devexa-animate-on-scroll" onSubmit={handleSubmit}>
              {submitted && (
                <div className="devexa-form-success">
                  <CheckCircle size={16} /> Thank you! We'll be in touch shortly.
                </div>
              )}
              <div className="devexa-form-row">
                <input
                  className="devexa-input"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="devexa-input"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="devexa-form-row">
                <input
                  className="devexa-input"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="devexa-input"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <textarea
                className="devexa-input devexa-textarea"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button type="submit" className="devexa-btn devexa-btn-primary devexa-form-submit">
                <Send size={16} /> Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}