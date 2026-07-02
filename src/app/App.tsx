import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  Github,
  ExternalLink,
  BookOpen,
  Server,
  Layout,
  Code2,
  Globe,
  ChevronRight,
  X,
  FileText,
  ChevronDown,
} from "lucide-react";

const NAV_ITEMS = [
  "ABOUT",
  "SKILLS",
  "PROJECTS",
  "WORK LOG",
  "CONTACT",
];
const SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "worklog",
  "contact",
];

const SKILLS = [
  {
    icon: <Layout size={20} />,
    title: "Web Publishing",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web",
      "Cross Browser",
      "Web Animation",
    ],
  },
  {
    icon: <Code2 size={20} />,
    title: "Front-end Development",
    tags: [
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Swiper",
      "Interactive UI",
    ],
  },
  {
    icon: <Server size={20} />,
    title: "CMS Integration",
    tags: [
      "PHP",
      "GnuBoard",
      "MySQL",
      "PHPMailer",
      "CMS Integration",
    ],
  },
  {
    icon: <Globe size={20} />,
    title: "Web Operations",
    tags: [
      "Hosting Management",
      "Domain / DNS",
      "FTP / SFTP",
      "SSL Setup",
      "PHP Environment Checks",
      "Basic Troubleshooting",
    ],
  },
  {
    icon: <BookOpen size={20} />,
    title: "SEO / Optimization",
    tags: ["Meta Tags", "Image Optimization", "Redirect"],
  },
];

interface Project {
  img: string;
  name: string;
  type: string;
  year: string;
  period: string;
  role: string;
  stack: string[];
  desc: string;
  overview: string;
  implementation: string[];
  challenges: string[];
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&auto=format",
    name: "RIGAS Product Catalog Renewal",
    type: "B2B Product Catalog",
    year: "2026",
    period: "2025.11 — 2026.02",
    role: "UI Publishing · Responsive Development · Interactive Catalog",
    stack: ["React", "Swiper", "CSS", "PHP"],
    desc: "복잡한 제품 정보를 사용자가 빠르게 탐색할 수 있도록 카탈로그 구조와 반응형 콘텐츠 흐름을 재구성했습니다.",
    overview:
      "B2B 제조사의 제품 카탈로그 사이트를 전면 리뉴얼한 프로젝트입니다. 수백 개의 제품 정보를 카테고리·필터·슬라이더 구조로 재편해 탐색 효율을 높이고, 모바일 환경에서도 동일한 정보 접근성을 확보했습니다.",
    implementation: [
      "React 기반 제품 필터·검색 UI 구현 및 상태 관리",
      "Swiper를 활용한 제품 이미지 갤러리 및 썸네일 연동",
      "PHP 백엔드와 AJAX 통신으로 동적 제품 데이터 로딩",
      "반응형 그리드 레이아웃으로 데스크탑·태블릿·모바일 대응",
    ],
    challenges: [
      "가로형 카탈로그 구조를 모바일에서 세로형으로 자연스럽게 전환하는 레이아웃 재설계",
      "대량 제품 이미지 최적화 및 지연 로딩으로 초기 로드 시간 단축",
    ],
    liveUrl: "https://example.com",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop&auto=format",
    name: "Corporate Website Rebuild",
    type: "Company Homepage",
    year: "2025",
    period: "2025.04 — 2025.08",
    role: "Full Publishing · CMS Integration · Server Setup",
    stack: ["HTML", "CSS", "JavaScript", "GnuBoard"],
    desc: "레거시 구조의 기업 홈페이지를 반응형으로 재구축하고 CMS와 연동해 콘텐츠 운영 환경을 개선했습니다.",
    overview:
      "10년 이상 운영된 기업 홈페이지를 현대적인 반응형 구조로 전면 재구축했습니다. 기존 GnuBoard CMS를 유지하면서 퍼블리싱 레이어를 완전히 교체하고, 서버 마이그레이션과 SSL 적용까지 전담했습니다.",
    implementation: [
      "GnuBoard 스킨 커스터마이징으로 디자인 시안 100% 구현",
      "CSS Grid·Flexbox 기반 반응형 레이아웃 전면 재설계",
      "JavaScript 메뉴·슬라이더·스크롤 인터랙션 구현",
      "리눅스 서버 마이그레이션 및 Apache 가상 호스트·SSL 설정",
    ],
    challenges: [
      "레거시 GnuBoard 구조를 유지하면서 디자인만 완전히 교체하는 스킨 재설계",
      "기존 URL 구조를 보존하면서 301 리다이렉트로 SEO 손실 방지",
    ],
    liveUrl: "https://example.com",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=750&fit=crop&auto=format",
    name: "Interactive Product Intro",
    type: "Product Introduction Site",
    year: "2025",
    period: "2025.01 — 2025.04",
    role: "Front-end Development · Animation · Responsive",
    stack: ["React", "Next.js", "Tailwind CSS"],
    desc: "제품 특성을 시각적으로 전달하기 위해 스크롤 기반 인터랙션과 애니메이션 흐름을 설계하고 구현했습니다.",
    overview:
      "신제품 출시에 맞춰 제작된 마이크로사이트입니다. 스크롤 진행에 따라 제품 특징이 순차적으로 노출되는 인터랙티브 스토리텔링 구조로 설계했으며, Next.js App Router 기반으로 구축했습니다.",
    implementation: [
      "Intersection Observer 기반 스크롤 트리거 애니메이션 구현",
      "Next.js App Router + Tailwind CSS로 빠른 컴포넌트 개발",
      "CSS transform 활용한 제품 이미지 패럴랙스 효과",
      "Vercel 배포 및 도메인 연결",
    ],
    challenges: [
      "스크롤 애니메이션이 모바일 기기에서 성능 저하 없이 동작하도록 최적화",
      "다양한 화면 비율에서 제품 이미지 비율과 텍스트 레이아웃 일관성 유지",
    ],
    liveUrl: "https://example.com",
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=750&fit=crop&auto=format",
    name: "E-Catalog Mobile Restructure",
    type: "Electronic Catalog",
    year: "2024",
    period: "2024.07 — 2024.10",
    role: "Publishing · Mobile Optimization · Cross-browser",
    stack: ["JavaScript", "CSS", "PHP", "Swiper"],
    desc: "가로형 전자카탈로그를 모바일 환경에 맞게 레이아웃 구조와 네비게이션 방식을 전면 재설계했습니다.",
    overview:
      "기존 데스크탑 전용 가로 스크롤 전자카탈로그를 모바일에서도 완전히 동작하도록 재구성한 프로젝트입니다. 콘텐츠 우선순위를 재정의하고 Swiper 기반 모바일 네비게이션 구조를 새로 설계했습니다.",
    implementation: [
      "Swiper 두 인스턴스를 단일 네비게이션으로 동기화하는 연동 구현",
      "CSS media query 기반 콘텐츠 블록 우선순위 재배치",
      "터치 이벤트 처리 및 모바일 제스처 인터랙션 최적화",
      "크로스 브라우저 (Chrome·Safari·Samsung Internet) 호환성 검증",
    ],
    challenges: [
      "가로형 페이지 흐름을 세로형 스크롤 구조로 자연스럽게 전환하는 콘텐츠 재설계",
      "iOS Safari의 100vh 이슈 및 스크롤 관성 차이 대응",
    ],
    liveUrl: "https://example.com",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=750&fit=crop&auto=format",
    name: "GnuBoard Skin Customization",
    type: "CMS Skinning",
    year: "2024",
    period: "2024.03 — 2024.05",
    role: "GnuBoard Skinning · PHP · Responsive Publishing",
    stack: ["GnuBoard", "PHP", "HTML", "CSS"],
    desc: "기존 GnuBoard 기반 사이트의 스킨을 전면 교체해 디자인 시안을 완전히 구현하고 관리자 운영 편의성을 개선했습니다.",
    overview:
      "중소기업 홈페이지의 GnuBoard 스킨을 새 디자인 시안에 맞게 전면 커스터마이징한 프로젝트입니다. 기존 CMS 구조와 DB를 유지하면서 프론트엔드 레이어만 교체해 운영 연속성을 확보했습니다.",
    implementation: [
      "GnuBoard 스킨 템플릿 구조 분석 후 PHP 스킨 파일 전면 재작성",
      "CSS Grid 기반 반응형 레이아웃으로 모바일·태블릿 대응",
      "게시판·회원·팝업 등 주요 모듈 스킨 커스터마이징",
      "관리자 페이지 레이아웃 정비 및 운영 가이드 문서 작성",
    ],
    challenges: [
      "GnuBoard 내부 변수·함수 의존성을 유지하면서 HTML 구조를 완전히 교체하는 작업 범위 조율",
      "기존 콘텐츠 데이터와 새 레이아웃 간 이미지 비율·텍스트 길이 불일치 대응",
    ],
    liveUrl: "https://example.com",
  },
  {
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=750&fit=crop&auto=format",
    name: "Landing Page Series",
    type: "Marketing Landing Pages",
    year: "2023",
    period: "2023.06 — 2023.12",
    role: "UI Publishing · JavaScript Animation · Cross-browser",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "제품 출시 및 이벤트 목적의 단기 랜딩페이지를 다수 제작했습니다. 빠른 납기와 높은 완성도를 동시에 확보하는 작업 방식을 정립했습니다.",
    overview:
      "반기 동안 여러 제품 출시·프로모션용 랜딩페이지를 연속으로 제작한 시리즈 프로젝트입니다. 디자인 시안이 확정된 후 짧은 일정 안에 고품질 퍼블리싱을 반복 납품하며 효율적인 작업 템플릿을 구축했습니다.",
    implementation: [
      "Scroll-triggered 섹션 애니메이션 및 카운터 효과 순수 JavaScript로 구현",
      "CSS 변수 기반 테마 토큰으로 다수 페이지 간 일관성 유지",
      "OG 태그·구조화 데이터 적용으로 SNS 공유 및 검색 노출 최적화",
      "GTM 삽입 및 GA 전환 이벤트 연동",
    ],
    challenges: [
      "디자인 시안 변경이 잦은 환경에서 CSS 구조를 유연하게 유지하는 컴포넌트화 전략",
      "IE11 부분 지원 요건 충족을 위한 CSS·JS 폴리필 적용",
    ],
    liveUrl: "https://example.com",
  },
];

interface WorkLog {
  category: string;
  title: string;
  desc: string;
  date: string;
  tags: string[];
  problem: string;
  cause: string;
  solution: string;
  result: string;
  takeaway: string;
}

const WORKLOGS: WorkLog[] = [
  {
    category: "Server / SMTP",
    title: "Gmail SMTP 메일 발송 오류를 점검하는 순서",
    desc: "앱 비밀번호 설정부터 방화벽, PHPMailer 설정까지 단계별 점검 항목을 정리했습니다.",
    date: "2026.05",
    tags: ["SMTP", "PHP", "Troubleshooting"],
    problem:
      "운영 서버에서 문의 메일이 발송되지 않는 오류가 지속적으로 발생했습니다. 로컬 환경에서는 정상 동작했으나 서버에서만 실패했습니다.",
    cause:
      "Gmail의 보안 정책 변경으로 일반 비밀번호 인증이 차단되었고, 서버 방화벽에서 포트 587이 막혀 있었습니다.",
    solution:
      "Google 계정에서 앱 비밀번호를 발급하고 PHPMailer의 SMTP 설정을 수정했습니다. 방화벽에서 포트 587을 열고 STARTTLS 암호화 방식을 적용했습니다.",
    result:
      "메일 발송이 정상적으로 복구되었으며 이후 동일한 환경에서 재현 없이 안정적으로 운영되고 있습니다.",
    takeaway:
      "SMTP 오류는 코드보다 서버 환경·인증 정책 문제인 경우가 많습니다. 점검 순서를 포트 → 인증 → 코드 순으로 가져가는 것이 효율적입니다.",
  },
  {
    category: "SSL",
    title: "SSL 적용 후 리다이렉트 루프 해결 방법",
    desc: "Apache .htaccess 설정과 Let's Encrypt 인증 충돌로 발생한 무한 루프의 원인과 해결 과정을 기록했습니다.",
    date: "2026.04",
    tags: ["SSL", "Apache", "Server"],
    problem:
      "Let's Encrypt SSL 인증서를 적용한 후 사이트 접속 시 ERR_TOO_MANY_REDIRECTS 오류가 발생했습니다.",
    cause:
      ".htaccess의 HTTP→HTTPS 리다이렉트 규칙과 Apache VirtualHost 설정이 중복 적용되어 무한 루프가 형성되었습니다.",
    solution:
      "Apache VirtualHost에서 SSL 리다이렉트를 처리하도록 일원화하고 .htaccess의 중복 규칙을 제거했습니다. RewriteCond에 %{HTTPS} off 조건을 명확히 지정했습니다.",
    result:
      "리다이렉트 루프가 해소되었고 HTTP→HTTPS 전환이 단일 경로로 정상 동작합니다.",
    takeaway:
      "SSL 리다이렉트는 Apache 설정과 .htaccess 둘 중 하나에서만 처리해야 합니다. 양쪽에 중복 설정이 있으면 루프가 발생합니다.",
  },
  {
    category: "Interactive UI",
    title: "Swiper 두 개를 하나의 네비게이션으로 연동하는 방법",
    desc: "메인 슬라이더와 썸네일 슬라이더를 단일 컨트롤로 동기화하는 구현 방식과 주의사항을 정리했습니다.",
    date: "2026.03",
    tags: ["Swiper", "JavaScript", "Interactive UI"],
    problem:
      "메인 슬라이더와 썸네일 슬라이더가 각각 독립적으로 동작해 사용자가 두 곳을 별도로 제어해야 하는 불편함이 있었습니다.",
    cause:
      "두 Swiper 인스턴스가 서로의 상태를 참조하지 않아 슬라이드 전환 시 동기화되지 않는 구조였습니다.",
    solution:
      "Swiper의 thumbs 옵션과 controller 모듈을 활용해 두 인스턴스를 양방향으로 연결했습니다. 초기화 순서(썸네일 → 메인)를 지켜야 올바르게 동작합니다.",
    result:
      "메인 슬라이더와 썸네일이 완전히 동기화되어 어느 쪽에서 조작해도 양쪽이 함께 움직입니다.",
    takeaway:
      "Swiper 연동 시 인스턴스 초기화 순서가 중요합니다. thumbs로 연결할 경우 썸네일 Swiper를 반드시 먼저 생성해야 합니다.",
  },
  {
    category: "Responsive",
    title:
      "[B Project] 가로형 카탈로그를 모바일 구조로 재구성한 과정",
    desc: "콘텐츠 우선순위 재정의부터 터치 인터랙션 설계까지, 반응형 전환에서 고려한 판단 기준을 기록했습니다.",
    date: "2026.02",
    tags: ["Responsive", "Mobile", "CSS"],
    problem:
      "데스크탑 전용으로 제작된 가로 스크롤 카탈로그가 모바일에서 전혀 사용 불가능한 상태였습니다.",
    cause:
      "가로형 레이아웃 자체가 모바일 세로 스크롤 패턴과 근본적으로 충돌했으며, 터치 이벤트 처리도 전혀 고려되지 않았습니다.",
    solution:
      "콘텐츠 블록의 우선순위를 재정의하고 CSS order 속성으로 모바일 배치를 별도 설계했습니다. Swiper로 가로 탐색 구조를 대체하고 터치 제스처를 적용했습니다.",
    result:
      "모바일에서 자연스러운 세로 스크롤 + 카테고리 간 스와이프 탐색이 가능해졌습니다.",
    takeaway:
      "가로형 콘텐츠를 모바일로 전환할 때 단순 CSS 변경으로는 한계가 있습니다. 콘텐츠 우선순위와 탐색 방식 자체를 모바일 맥락에서 다시 설계해야 합니다.",
  },
  {
    category: "PHP / GnuBoard",
    title:
      "PHP 환경에서 이미지 업로드 오류가 발생했을 때 확인할 항목",
    desc: "권한 설정, php.ini 제한, 업로드 디렉토리 경로 문제를 유형별로 분류해 점검 순서를 정리했습니다.",
    date: "2026.01",
    tags: ["PHP", "GnuBoard", "Troubleshooting"],
    problem:
      "GnuBoard 관리자 페이지에서 이미지 업로드 시 오류가 발생하며 파일이 저장되지 않는 문제가 생겼습니다.",
    cause:
      "서버 마이그레이션 후 업로드 디렉토리의 소유자 권한이 변경되었고, php.ini의 upload_max_filesize 설정이 기존보다 낮게 설정되어 있었습니다.",
    solution:
      "chown 명령으로 업로드 디렉토리 소유자를 웹서버 사용자로 변경하고 chmod 755를 적용했습니다. php.ini에서 upload_max_filesize와 post_max_size를 조정했습니다.",
    result:
      "이미지 업로드가 정상적으로 동작하게 되었으며 관리자 콘텐츠 등록 워크플로가 복구되었습니다.",
    takeaway:
      "서버 마이그레이션 후에는 디렉토리 권한과 php.ini 설정이 변경될 수 있으므로 반드시 체크리스트로 확인해야 합니다.",
  },
  {
    category: "Performance",
    title: "반응형 웹에서 콘텐츠 우선순위를 정하는 기준",
    desc: "뷰포트 크기별 콘텐츠 위계를 설계하는 방법과 실무에서 자주 발생하는 판단 기준을 정리했습니다.",
    date: "2025.12",
    tags: ["Responsive", "Performance", "UX"],
    problem:
      "반응형 레이아웃 작업 시 어떤 콘텐츠를 모바일에서 우선 노출하고 어떤 것을 숨길지 명확한 기준이 없어 매번 판단이 달라졌습니다.",
    cause:
      "콘텐츠 우선순위에 대한 기획 단계의 정의 없이 퍼블리싱 단계에서 즉흥적으로 결정하는 관행이 문제였습니다.",
    solution:
      "사용자의 핵심 작업 목표를 기준으로 콘텐츠를 1순위(필수)·2순위(보조)·3순위(숨김 가능)로 분류하는 체크리스트를 만들었습니다.",
    result:
      "이후 반응형 작업 시 의사결정이 빠르고 일관되게 이루어졌으며, 모바일 UX 품질이 향상되었습니다.",
    takeaway:
      "반응형 콘텐츠 우선순위는 퍼블리셔가 아닌 기획 단계에서 결정되어야 합니다. 기준이 없으면 퍼블리셔가 UX 판단까지 떠맡게 됩니다.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return active;
}

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [expandedLog, setExpandedLog] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex flex-col leading-none group"
          >
            <span
              className="text-[11px] font-bold tracking-[0.2em] text-primary group-hover:text-accent transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              SON HYEOK JUN
            </span>
            <span
              className="text-[9px] tracking-widest text-muted-foreground mt-0.5"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              PORTFOLIO
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => {
              const id = SECTION_IDS[i];
              const isActive = activeSection === id;
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`text-xs font-semibold tracking-widest transition-colors ${isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6F7F9] via-[#EEF1F8] to-[#E8EDF6]" />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.04] select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <pre className="text-[10px] leading-5 text-foreground pt-24 pr-12 text-right">
            {`const developer = {
  name: "Your Name",
  role: "Web Developer & Publisher",
  skills: [
    "HTML", "CSS", "JavaScript",
    "React", "PHP", "GnuBoard"
  ],
  approach: "design → code → ship",
  focus: [
    "Responsive Web",
    "CMS Integration",
    "Performance",
    "Maintenance"
  ]
};`}
          </pre>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium text-primary/50 border border-primary/15 rounded-full px-3 py-1 mb-8"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Web Portfolio
            </div>

            <p
              className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              손혁준
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Web Developer
              <br />
              <span className="text-accent">&</span> Publisher
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              디자인을 정확하게 구현하고,
              <br />
              운영과 유지보수까지 고려하는 웹을 만듭니다.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "Responsive Web",
                "UI Publishing",
                "CMS Integration",
                "Front-end Implementation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-primary bg-primary/8 border border-primary/15 rounded px-2.5 py-1"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent transition-colors"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                View Projects <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("worklog")}
                className="inline-flex items-center gap-2 text-primary border border-primary/25 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-primary/50 hover:bg-primary/4 transition-colors"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                View Work Log
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-12 bg-foreground" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest text-accent mb-4 uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                01 — About Me
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Building useful
                <br />
                digital experiences.
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  안녕하세요.
                  <br />
                  디자인 의도를 웹에서 정확하게 구현하고,
                  <br />
                  사용자 경험과 운영 환경까지 고려하는 웹
                  개발자입니다.
                </p>
                <p>
                  기업 홈페이지, 제품 소개 사이트, 전자카탈로그,
                  반응형 웹사이트, CMS 연동, 유지보수, 서버 및
                  도메인 설정 업무를 경험했습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Profile identity card */}
              <div className="bg-background rounded-xl px-5 py-4 border border-border">
                <p
                  className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Profile
                </p>
                <div className="space-y-2">
                  {[
                    { key: "Name", value: "손혁준" },
                    {
                      key: "Role",
                      value: "Web Developer / Publisher",
                    },
                    {
                      key: "Career",
                      value: "3년 (2022 — 현재)",
                    },
                    {
                      key: "Email",
                      value: "hello@yourname.dev",
                      href: "mailto:hello@yourname.dev",
                    },
                    {
                      key: "GitHub",
                      value: "github.com/yourname",
                      href: "https://github.com",
                    },
                  ].map(({ key, value, href }) => (
                    <div
                      key={key}
                      className="flex items-baseline gap-3"
                    >
                      <span
                        className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase w-16 shrink-0"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {key}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-accent hover:underline underline-offset-2"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Focus",
                    items: [
                      "Responsive Web",
                      "CMS Integration",
                      "Web Maintenance",
                      "Performance",
                    ],
                  },
                  {
                    label: "Experience",
                    items: [
                      "Corporate Website",
                      "Product Catalog",
                      "Interactive Web",
                      "Legacy Maintenance",
                    ],
                  },
                ].map(({ label, items }) => (
                  <div
                    key={label}
                    className="bg-background rounded-xl px-4 py-3.5 border border-border"
                  >
                    <p
                      className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-2"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {label}
                    </p>
                    <ul className="space-y-0.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="text-sm font-medium text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest text-accent mb-4 uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            02 — Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-primary mb-16"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Skills & Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map(({ icon, title, tags }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    {icon}
                  </div>
                  <h3
                    className="text-sm font-bold text-foreground"
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-muted-foreground bg-muted rounded px-2 py-0.5"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest text-accent mb-4 uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            03 — Projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-primary mb-16"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <button
                key={p.name}
                onClick={() => setSelectedProject(p)}
                onMouseEnter={() => setHoveredProject(p.name)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group text-left bg-background rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                    <div className={`flex items-center gap-2 text-white text-sm font-semibold transition-all duration-300 ${hoveredProject === p.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <ExternalLink size={15} /> View Project
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p
                        className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-1"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {p.type} · {p.year}
                      </p>
                      <h3
                        className="text-base font-bold text-foreground"
                        style={{
                          fontFamily:
                            "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {p.name}
                      </h3>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 mt-1 shrink-0"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium text-accent bg-accent/8 border border-accent/20 rounded px-2 py-0.5"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {p.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK LOG ── */}
      <section id="worklog" className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest text-accent mb-4 uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            04 — Work Log
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-primary"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Work Log
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs text-right hidden md:block">
              작업 과정에서 마주한 문제를 분석하고,
              <br />
              재사용 가능한 해결 방식으로 기록합니다.
            </p>
          </div>

          <div className="divide-y divide-border">
            {WORKLOGS.map((log, i) => {
              const isOpen = expandedLog === i;
              return (
                <div key={i} className="group">
                  <button
                    onClick={() =>
                      setExpandedLog(isOpen ? null : i)
                    }
                    className="w-full flex flex-col md:flex-row md:items-center gap-3 py-5 px-4 text-left hover:bg-white rounded-lg transition-all duration-200"
                  >
                    <div className="md:w-36 shrink-0">
                      <span
                        className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {log.category}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base font-semibold text-foreground group-hover:text-accent transition-colors"
                        style={{
                          fontFamily:
                            "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {log.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {log.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex flex-wrap gap-1.5 hidden md:flex">
                        {log.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium text-muted-foreground bg-muted rounded px-2 py-0.5"
                            style={{
                              fontFamily:
                                "'JetBrains Mono', monospace",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        className="text-xs text-muted-foreground shrink-0"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {log.date}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  {/* Accordion body */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pb-6 pt-1 pl-0 md:pl-[144px] grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          label: "Problem",
                          content: log.problem,
                        },
                        { label: "Cause", content: log.cause },
                        {
                          label: "Solution",
                          content: log.solution,
                        },
                        {
                          label: "Result",
                          content: log.result,
                        },
                        {
                          label: "Key Takeaway",
                          content: log.takeaway,
                        },
                      ].map(({ label, content }) => (
                        <div
                          key={label}
                          className={`bg-white rounded-lg p-4 border border-border ${label === "Key Takeaway" ? "sm:col-span-2 border-accent/20 bg-accent/4" : ""}`}
                        >
                          <p
                            className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-2"
                            style={{
                              fontFamily:
                                "'JetBrains Mono', monospace",
                            }}
                          >
                            {label}
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-28 bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest text-white/40 mb-4 uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            05 — Contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Contact & Links
          </h2>
          <p className="text-white/60 text-base mb-14 max-w-sm">
            추가 정보는 아래 링크에서 확인하실 수 있습니다.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "hello@yourname.dev",
                href: "mailto:hello@yourname.dev",
              },
              {
                icon: <Github size={18} />,
                label: "GitHub",
                value: "github.com/yourname",
                href: "https://github.com",
              },
            ].map(
              ({ icon, label, value, href, isDownload }) => (
                <a
                  key={label}
                  href={href}
                  target={isDownload ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={isDownload}
                  className="group flex flex-col gap-3 bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/25 rounded-xl p-5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/12 flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold tracking-widest text-white/40 uppercase mb-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white/85 group-hover:text-white transition-colors flex items-center gap-1.5">
                      {value}
                      <ExternalLink
                        size={11}
                        className="opacity-0 group-hover:opacity-60 transition-opacity"
                      />
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D1929] text-white/40 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              © 2026 Your Name
            </p>
            <p
              className="text-xs mt-0.5"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Web Developer & Publisher
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:hello@yourname.dev"
              className="hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-1.5 text-xs hover:text-white transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <ArrowUp size={13} /> Back to Top
            </button>
          </div>
        </div>
      </footer>

      {/* ── PROJECT DETAIL PANEL ── */}
      {selectedProject && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          {/* Slide panel */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-white shadow-2xl overflow-y-auto flex flex-col">
            {/* Panel header */}
            <div className="sticky top-0 bg-white border-b border-border px-8 py-5 flex items-center justify-between z-10">
              <p
                className="text-xs font-semibold tracking-widest text-muted-foreground uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {selectedProject.type} · {selectedProject.year}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Panel image */}
            <div className="aspect-[16/9] bg-muted overflow-hidden shrink-0">
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel body */}
            <div className="px-8 py-8 space-y-8 flex-1">
              <div>
                <h2
                  className="text-2xl font-extrabold text-primary mb-2"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.period}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p
                    className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Role
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedProject.role}
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p
                    className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium text-accent bg-accent/8 border border-accent/20 rounded px-2 py-0.5"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p
                  className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Overview
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              <div>
                <p
                  className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  핵심 구현 내용
                </p>
                <ul className="space-y-2">
                  {selectedProject.implementation.map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <p
                  className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  해결한 핵심 과제
                </p>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent transition-colors"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  <ExternalLink size={14} /> Live Site
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}