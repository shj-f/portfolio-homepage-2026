import React, { useState, useEffect } from "react";
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
  contribution: number;
  stack: string[];
  desc: string;
  overview: string;
  implementation: string[];
  challenges: string[];
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    img: "/portfolio-homepage-2026/images/ax-one.png",
    name: "AX-ONE E-catalog",
    type: "E-Catalog",
    year: "2026",
    period: "2026.06",
    role: "UI Publishing · Interactive Front-end · AI-assisted Implementation",
    contribution: 100,
    stack: [
      "React",
      "JavaScript",
      "React Router",
      "Framer Motion",
      "CSS",
      "Tailwind CSS",
      "Figma MCP",
      "Cursor",
    ],
    desc: "Figma 디자인을 AI-assisted workflow로 구현한 인터랙티브 전자카탈로그. 인트로 시퀀스, 페이지 전환, 섹션별 모션·캐러셀을 중심으로 제작했습니다.",
    overview:
      "AX-ONE은 기업의 AI 역량을 진단하고 맞춤형 커리큘럼으로 AX(AI 전환)를 지원하는 교육 솔루션으로, 이 프로젝트는 도입 배경부터 진단·커리큘럼·성과 관리까지 이어지는 서비스 스토리를 몰입감 있게 전달하기 위한 인터랙티브 전자카탈로그입니다. Figma 디자인을 Cursor·Figma MCP로 페이지 단위 구현한 뒤, 생성된 코드를 그대로 사용하지 않고 디자인 의도와 콘텐츠 흐름에 맞게 반복 수정했습니다. 데스크톱(1920px)은 휠·키보드 기반 페이지 탐색과 자동 재생을, 모바일(360px 기준)은 스와이프·세로 스택 레이아웃과 축소된 모션으로 각각 최적화했습니다.",
    implementation: [
      "React Router 기반 카탈로그 라우팅·페이지 맵 구조 설계 및 솔루션/프로젝트/회사 등 다수 섹션 화면 구현",
      "Figma MCP·Cursor로 UI 초안을 생성한 뒤 간격·정렬·반응형·모션을 수동 검수·수정",
      "커버 인트로 시퀀스 모션 및 페이지 진입 애니메이션 구현으로 첫 화면 몰입감 강화",
      "데스크톱 휠·키보드 페이징, 모바일 터치 스와이프·자동 재생 등 카탈로그 탐색 인터랙션 구현",
      "AX 도입 효과·설계 전략의 단계별 모션, 역량 진단 척도 UI, 자동 재생·드래그 캐러셀 등 페이지별 인터랙션 구현",
      "데스크톱 레이아웃을 유지하면서 모바일 전용 마크업·스타일을 분기하는 반응형 UI 퍼블리싱",
    ],
    challenges: [
      "정렬을 transform으로 잡은 요소에 Framer Motion 값을 걸 때 축이 덮어써지는 문제를, 정렬용·모션용 래퍼를 분리해 해결",
      "차트 등장 모션에서 캐시된 이미지의 onLoad 미발화로 높이가 0이 되는 이슈를, 마운트 측정·complete 체크·load 이벤트를 병행해 해결",
      "그래프가 그려지는 흐름을 로봇 이동과 맞추기 위해 단일 progress 값을 여러 속성에 매핑해 애니메이션을 동기화",
      "카탈로그 전역 스와이프와 페이지 내부 캐러셀·드래그 인터랙션의 충돌을 이벤트 범위 분리로 해결",
    ],
    liveUrl: "https://ecatalog.rgbcom.kr/AXONE/",
  },
  {
    img: "/portfolio-homepage-2026/images/fns.png",
    name: "FNS E-catalog",
    type: "E-Catalog",
    year: "2026",
    period: "2026.04",
    role: "UI Publishing · Interactive UI · Responsive Development",
    contribution: 100,
    stack: [
      "React",
      "JavaScript",
      "React Router",
      "Framer Motion",
      "CSS",
      "Tailwind CSS",
      "Cursor",
    ],
    desc: "반도체 부품 기업 FNS의 제품·기술 카탈로그를 인터랙티브 웹으로 구현한 프로젝트. 페이지 단위 탐색과 섹션별 등장 모션 구현에 집중했습니다.",
    overview:
      "FNS는 반도체 공정 장비의 핵심 부품(RF, Plasma, ESC)을 자체 설계·제조하는 기술 기업입니다. 이 전자카탈로그는 회사 소개와 함께 Remote Plasma Source, RF Blocking Filter, RF Matcher, RF Generator, ESC Solution 등 다섯 개 핵심 기술 콘텐츠를 담고 있으며, 화면 전체가 한 편의 프레젠테이션처럼 페이지 단위로 넘어가도록 되어 있습니다. 저는 이 화면들을 인터랙티브 웹으로 퍼블리싱·구현하는 역할을 맡아, 데스크톱의 휠·키보드 페이징과 스페이스바 자동 재생, 모바일의 터치 스와이프 같은 탐색 인터랙션과 페이지 진입 모션, 그리고 반응형 대응을 담당했습니다.",
    implementation: [
      "중첩 페이지 맵을 평탄화(flatten)해 순차 인덱스로 다루는 카탈로그 라우팅 구조 구현 및 회사·기술 섹션 화면 퍼블리싱",
      "커버 인트로 시퀀스와 페이지 진입 애니메이션 구현으로 첫 화면 몰입감 강화",
      "데스크톱 휠·키보드 페이징과 스페이스바 자동 재생, 모바일 터치 스와이프로 이어지는 통합 탐색 인터랙션 구현",
      "RF·Plasma·ESC 기술 페이지별 단계 등장 모션과 스펙·성능 지표 UI 구현",
      "1920px 기준 스케일링 레이아웃을 유지하며 모바일 전용 마크업·스타일로 분기하는 반응형 퍼블리싱",
    ],
    challenges: [
      "커버의 인트로 화면과 목차 화면을 오갈 때 메뉴가 깜빡이며 사라졌다 다시 나타나는 현상을, React StrictMode의 이중 마운트와 화면 전환 조건·중복 애니메이션 래퍼가 겹친 원인으로 좁혀 화면 매핑과 전환 처리를 정리해 해결",
      "화면을 벗어날 때 목차 메뉴가 슬라이드 아웃되며 잔상이 남는 문제를, 해당 화면을 벗어나는 순간 종료 애니메이션을 즉시 처리하도록 분기해 해결",
      "이미지를 가운데 기준으로 양쪽으로 퍼지게 애니메이션할 때 중앙 정렬용 transform과 크기 애니메이션이 서로 덮어쓰던 문제를, 정렬과 모션 값을 함께 제어해 중심을 고정한 채 확장되도록 해결",
    ],
    liveUrl: "http://www.fnsi.co.kr/ecatalog/",
  },
  {
    img: "/portfolio-homepage-2026/images/deotech.png",
    name: "DEOTECH Korea Homepage",
    type: "Homepage",
    year: "2025",
    period: "2025.12",
    role: "UI Publishing · Interactive UI · Responsive Development · GnuBoard Integration",
    contribution: 100,
    stack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "Swiper",
      "FullPage.js",
      "CSS",
      "GnuBoard",
      "Cursor",
    ],
    desc: "구강 케어 전문 기업 (주)디오텍코리아의 국문/영문/중문 홈페이지. 메인 풀스크린 섹션과 회사소개·제품·핵심역량·고객지원 등 다수 서브페이지 퍼블리싱, 그누보드 연동, 온라인 문의·관리자 CMS 안정화를 담당했습니다.",
    overview:
      "디오텍코리아는 지속 가능한 소재와 제품 혁신을 바탕으로 구강 케어 제품을 제조·공급하는 기업입니다. PHP 기반으로 국문(ko)·영문(en)·중문(cn)을 분리 운영하며, 메인에는 FullPage.js 풀스크린 섹션과 스크롤 등장 애니메이션, 서브에는 회사소개·제품 라인업·핵심역량·인증·뉴스·홍보영상·카탈로그·FAQ·온라인 문의까지 아우르는 기업 사이트입니다. 프론트는 Swiper·Intersection Observer 기반 인터랙션과 반응형 레이아웃으로 구성했고, 백오피스는 그누보드5 커스텀 스킨으로 뉴스·인증·문의·카탈로그·영상 등을 관리합니다. 저는 전체 페이지 퍼블리싱과 함께 다국어 문의 폼·관리자 글 등록·파비콘·폰트·데이터 저장 흐름 등 운영 이슈를 점검·수정했습니다.",
    implementation: [
      "국문/영문/중문 이중·삼중 구조 PHP 템플릿 퍼블리싱 및 회사소개·제품·핵심역량·고객지원(뉴스·문의·영상·카탈로그·FAQ) 전 서브페이지 UI 구현",
      "메인 FullPage.js 섹션, Swiper 비주얼, scroll-ani(Intersection Observer) 기반 스크롤 등장 연출 및 모바일 뷰포트(vh) 대응",
      "그누보드5 게시판(뉴스·인증·문의·카탈로그·영상·팝업 등) API 연동, inquiry 커스텀 필드(성명·이메일·연락처·회사) 저장 로직 및 관리자 알림 메일 흐름 구성",
      "영문 온라인 문의 페이지 UI/문구 현지화, 중문 Noto Sans SC 폰트 적용, 파비콘·manifest 경로 정리",
      "관리자 CMS 발행 버튼 중복 ID·submit 비활성화 오류 수정, 로고 클릭 시 관리자 대시보드 이동, 문의 등록 시 제목·내용 외 필드 미저장 문제 해결",
    ],
    challenges: [
      "관리자에서 글 ‘발행’ 버튼을 눌러도 저장되지 않던 문제를 해결. 버튼의 식별값이 비어 있어 제출 처리 스크립트가 오류를 일으키던 원인을 찾아, 버튼 설정과 스크립트를 정리하고 뉴스·인증·영상 등 모든 게시판 작성 화면에 동일하게 적용.",
      "온라인 문의를내면 제목과 내용만 남고 이름·이메일·연락처·회사 정보가 비어 있던 문제를, 문의 전용 입력값이 서버 저장 단계까지 전달·반영되도록 저장 흐름을 보완",
      "게시판 본문에 넣은 유튜브·비메오 영상이 재생되지 않던 이슈를, 보안 필터와 허용 영상 주소·에디터 설정이 맞지 않는 쪽으로 원인을 좁히고 대응 방향을 정리",
    ],
    liveUrl: "http://www.deotech.net/ko/",
  },
  {
    img: "/portfolio-homepage-2026/images/hurotics.png",
    name: "HUROTICS Homepage",
    type: "Homepage",
    year: "2025",
    period: "2025.11",
    role: "UI Publishing · Interactive UI · Responsive Development · GnuBoard Integration",
    contribution: 100,
    stack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "Swiper",
      "GSAP (ScrollTrigger)",
      "CSS",
      "GnuBoard",
      "Cursor",
    ],
    desc: "웨어러블 재활 로봇 전문기업 (주)휴로틱스의 국문/영문 홈페이지. 메인 비주얼과 제품·회사소개·채용·고객지원 등 전 서브페이지 퍼블리싱, 그누보드5 게시판 연동, 제품 페이지의 스크롤 기반 가로 전환 인터랙션 구현을 담당했습니다.",
    overview:
      "휴로틱스는 근력 보조·재활을 위한 웨어러블 로봇(H-Medi, Extension/Flexion)을 개발하는 기업입니다. PHP 기반으로 국문(ko)·영문(en)을 분리 운영하며, 메인에는 Swiper 비주얼과 Intersection Observer 기반 스크롤 등장 애니메이션을, 제품 페이지에는 마우스휠·스크롤로 넘어가는 풀스크린 가로 슬라이드 인터랙션을 적용했습니다. 서브에는 회사소개·연혁·핵심역량·오시는길·제품 라인업·채용·뉴스·인증·홍보영상·고객문의·매뉴얼까지 아우르며, 백오피스는 그누보드5 커스텀 스킨으로 뉴스·인증·문의·영상·채용 등을 관리합니다. 프론트는 Swiper·GSAP ScrollTrigger·Intersection Observer 기반 인터랙션과 반응형 레이아웃으로 구성했고, 저는 전체 페이지 퍼블리싱과 함께 게시판 연동·데이터 저장 흐름·영상 임베드·다국어 대응 등 운영 이슈를 점검·수정했습니다.",
    implementation: [
      "국문/영문 이중 구조 PHP 템플릿 퍼블리싱 및 회사소개·연혁·핵심역량·제품·채용·고객지원(뉴스·문의·영상·인증·매뉴얼) 전 서브페이지 UI 구현",
      "제품 페이지 Swiper(fade) 기반 풀스크린 섹션을 마우스휠·스크롤로 넘기는 가로 전환 인터랙션, hashNavigation, lnb 진행바/active 동기화, 슬라이드별 배경영상 재생 제어, 마지막 슬라이드에서 일반 스크롤로 자연스럽게 전환하는 로직 구현",
      "회사연혁 페이지 GSAP ScrollTrigger 타임라인 진행바 및 연도 메뉴 active 스크롤 동기화, 모바일 뷰포트(vh) 대응",
      "그누보드5 게시판(뉴스·인증·문의·영상·채용·배너 등) 연동, 채용 페이지의 마감일(D-day) 계산 및 전체 진행 중 공고 수 DB 집계, 문의 커스텀 필드(성명·이메일·연락처·회사) 저장 로직 구성",
      "영상 게시판 유튜브·비메오 임베드를 위한 HTMLPurifier 필터 대응, 뉴스 카테고리 라벨 삼항 연산자 오류 수정, 파비콘·manifest 경로 및 영문 스타일 정리",
    ],
    challenges: [
      "세로 스크롤 입력을 가로 슬라이드 전환으로 바꾸면서, 슬라이드별로 배경영상을 재생/정지하고 진행바·메뉴 상태를 맞추며, 첫·마지막 슬라이드에서는 페이지 일반 스크롤로 매끄럽게 이어지도록 스크롤 잠금과 해제 타이밍을 세밀하게 제어",
      "회사연혁 타임라인에서 연도별 섹션 높이가 제각각이라 스크롤 시 특정 연도가 순간적으로만 활성화되거나 건너뛰던 문제를, 진입 이벤트 방식 대신 현재 스크롤 위치를 기준으로 활성 연도를 계산하도록 로직을 바꿔 안정적으로 동기화",
      "채용 공고 개수가 현재 페이지 기준으로만 집계되던 문제와 온라인 문의 시 이름·연락처 등 커스텀 필드가 저장되지 않던 문제를, 게시판 데이터 저장 흐름을 보완해 해결",
    ],
    liveUrl: "https://www.hurotics.com/",
  },
  {
    img: "/portfolio-homepage-2026/images/shinsung.png",
    name: "Shinsung Silicone Homepage",
    type: "Homepage",
    year: "2025",
    period: "2025.10",
    role: "UI Publishing · Interactive UI · Responsive Development · GnuBoard Integration · SEO Optimization",
    contribution: 100,
    stack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "Swiper",
      "GSAP (ScrollTrigger)",
      "CSS",
      "GnuBoard",
      "Cursor",
    ],
    desc: "실리콘 주방·유아용품 전문 기업 신성실리콘의 국문/영문 홈페이지. 메인 비주얼과 제품·핵심역량·보유기술 등 다수 서브페이지의 인터랙티브 퍼블리싱, 반응형 대응, 검색엔진 최적화를 담당했습니다.",
    overview:
      "신성실리콘은 실리콘 주방·유아 OEM&ODM 전문 기업으로, 회사소개·제품·핵심역량·보유기술/설비·OEM&ODM·고객지원까지 아우르는 기업 사이트입니다. PHP 기반으로 국문/영문을 분리 운영하며, 메인에는 풀스크린 비주얼 슬라이드와 카운터·글로벌 네트워크 인터랙션이, 서브에는 스크롤에 반응하는 등장·전환 모션이 적용되어 있습니다. 저는 전체 페이지 퍼블리싱과 함께 스크롤 연동 애니메이션, 메인 비주얼·기술 소개 영상 인터랙션, 그누보드 게시판 연동, 검색엔진 최적화 개선 작업을 맡았습니다.",
    implementation: [
      "국문/영문 이중 구조 PHP 템플릿 퍼블리싱 및 회사소개·제품·핵심역량·보유기술/설비·OEM&ODM·고객지원 전 서브페이지 UI 구현",
      "메인 비주얼 슬라이드, 재생 진행률·일시정지, 기술 소개 영상 인터랙션과 핵심역량·보유기술 페이지의 스크롤 연동 인트로 연출 구현",
      "그누보드 게시판(뉴스·문의·카탈로그·인증) 데이터 연동 및 온라인 문의 폼 저장 흐름 구성",
      "뉴스 목록 링크 구조 정리, 구조화 데이터(JSON-LD) 마크업, 이미지 대체 텍스트·지연 로딩 등 검색엔진 최적화 적용",
    ],
    challenges: [
      "핵심역량·보유기술 페이지에서 대표 이미지 확장 연출 시 중앙 정렬과 크기 애니메이션이 충돌하고, 스크롤 반복 시 화면이 깜빡이던 문제를 타이밍·복원 순서를 정리해 해결",
      "메인 비주얼에서 슬라이드 전환마다 배경 축소 모션이 다시 실행되지 않고, 영상 재생·정지·슬라이드 동기화가 어긋나던 문제를 전환 흐름 전체를 정리해 안정화",
      "문의 폼에 캡차 UI만 있고 실제 검증이 빠져 미입력 제출이 가능했던 문제를, 프론트 제출 검증과 서버 저장 단계 강제 검증을 함께 연결하고 국문/영문 문구까지 분기해 해결",
      "아이폰에서 특정 섹션 요소가 화면 밖으로 밀려 보이지 않던 문제를, 모바일 브라우저의 포지셔닝·애니메이션 특성에 맞춰 조정",
    ],
    liveUrl: "https://ssmold.co.kr/ko/",
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
                      value: "4년 6개월 실무 경험",
                    },
                    {
                      key: "Email",
                      value: "front-son@naver.com",
                      href: "mailto:front-son@naver.com",
                    },
                    {
                      key: "GitHub",
                      value: "github.com/shj-f",
                      href: "https://github.com/shj-f",
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
                className="group text-left bg-background rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-[11px] text-muted-foreground leading-relaxed flex-1 min-w-0 flex flex-wrap">
                      {p.role.split(" · ").map((item, i, arr) => (
                        <span key={i} className="whitespace-nowrap">
                          {item}{i < arr.length - 1 && "\u00A0·\u00A0"}
                        </span>
                      ))}
                    </p>
                    <span
                      className="shrink-0 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      기여도 {p.contribution}%
                    </span>
                  </div>
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
                value: "front-son@naver.com",
                href: "mailto:front-son@naver.com",
              },
              {
                icon: <Github size={18} />,
                label: "GitHub",
                value: "github.com/shj-f",
                href: "https://github.com/shj-f",
              },
            ].map(
              ({ icon, label, value, href, isDownload }: { icon: React.ReactNode; label: string; value: string; href: string; isDownload?: boolean }) => (
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
              © 2026 SON HYEOK JUN
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
              href="https://github.com/shj-f"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:front-son@naver.com"
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