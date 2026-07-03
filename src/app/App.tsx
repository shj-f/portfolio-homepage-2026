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
  Menu,
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
    role: "UI Publishing · Interactive UI · Responsive Development",
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
    desc: "Figma 디자인을 AI-assisted workflow로 구현한 인터랙티브 전자카탈로그입니다. 인트로 시퀀스, 페이지 전환, 섹션별 모션·캐러셀을 중심으로 제작했습니다.",
    overview:
      "AX-ONE은 기업의 AI 역량을 진단하고 맞춤형 커리큘럼으로 AX(AI 전환)를 지원하는 교육 솔루션으로, 이 프로젝트는 도입 배경부터 진단·커리큘럼·성과 관리까지 이어지는 서비스 스토리를 몰입감 있게 전달하기 위한 인터랙티브 전자카탈로그입니다. Figma 디자인을 Cursor·Figma MCP로 페이지 단위 구현한 뒤, 생성된 코드를 그대로 사용하지 않고 디자인 의도와 콘텐츠 흐름에 맞게 반복 수정했습니다. 데스크톱(1920px)은 휠·키보드 기반 페이지 탐색과 자동 재생을, 모바일(360px 기준)은 스와이프·세로 스택 레이아웃과 축소된 모션으로 각각 최적화했습니다.",
    implementation: [
      "React Router 기반 카탈로그 라우팅·페이지 맵 구조 설계 및 솔루션 · 프로젝트 · 회사 등 다수 섹션 화면 구현",
      "Figma MCP·Cursor로 UI 초안을 생성한 뒤 간격·정렬·반응형·모션을 수동 검수·수정",
      "커버 인트로 시퀀스 모션 및 페이지 진입 애니메이션 구현으로 첫 화면 몰입감 강화",
      "데스크톱 휠·키보드 페이징, 모바일 터치 스와이프·자동 재생 등 카탈로그 탐색 인터랙션 구현",
      "AX 도입 효과·설계 전략의 단계별 모션, 역량 진단 척도 UI, 자동 재생·드래그 캐러셀 등 페이지별 인터랙션 구현",
      "데스크톱 레이아웃을 유지하면서 모바일 전용 마크업·스타일을 분기하는 반응형 UI 퍼블리싱",
    ],
    challenges: [
      "Framer Motion 기반 모션과 transform 정렬이 충돌하지 않도록 레이아웃·애니메이션 구조를 분리",
      "캐시된 이미지에서 onLoad가 실행되지 않아 차트 높이가 0으로 계산되는 문제를, 마운트 측정·complete 체크·load 이벤트 병행으로 해결",
      "그래프와 로봇 이동 애니메이션의 진행 타이밍이 어긋나는 문제를, 단일 progress 값을 여러 속성에 매핑해 동기화",
      "카탈로그 전역 스와이프와 페이지 내부 캐러셀·드래그가 함께 반응하는 문제를, 이벤트 처리 범위 분리로 해결",
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
      "인트로·목차 전환 과정에서 발생한 메뉴 깜빡임을 화면 매핑과 애니메이션 구조 정리로 안정화",
      "화면 이탈 시 목차 메뉴의 슬라이드 아웃 잔상이 남는 문제를 종료 애니메이션 분기로 해결",
      "중앙 정렬 transform과 확장 애니메이션이 충돌하는 문제를 정렬·모션 값을 분리해 중심을 유지하도록 해결",
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
    desc: "구강 케어 전문 기업 디오텍코리아의 국문·영문·중문 기업 홈페이지입니다. 풀스크린 메인, 다수 서브페이지 퍼블리싱과 GnuBoard 기반 문의·관리자 CMS 연동을 담당했습니다.",
    overview:
      "디오텍코리아는 지속 가능한 소재와 제품 혁신을 바탕으로 구강 케어 제품을 제조·공급하는 기업입니다. PHP 기반으로 국문(ko)·영문(en)·중문(cn)을 분리 운영하며, 메인에는 FullPage.js 기반 풀스크린 섹션과 스크롤 등장 애니메이션을 적용했습니다. 회사소개·제품 라인업·핵심역량·인증·뉴스·홍보영상·카탈로그·FAQ·온라인 문의까지 기업 사이트 전반을 구현했고, GnuBoard5 커스텀 스킨을 통해 뉴스·인증·문의·카탈로그·영상 등을 관리할 수 있도록 구성했습니다. 전체 페이지 퍼블리싱과 함께 다국어 문의 폼, 관리자 글 등록, 폰트·파비콘·데이터 저장 흐름 등 운영 이슈를 점검·수정했습니다.",
    implementation: [
      "국문·영문·중문 PHP 템플릿 구조 퍼블리싱 및 회사소개·제품·핵심역량·고객지원 전 서브페이지 UI 구현",
      "메인 FullPage.js 섹션, Swiper 비주얼, scroll-ani(Intersection Observer) 기반 스크롤 등장 연출 및 모바일 뷰포트(vh) 대응",
      "그누보드5 게시판·문의·카탈로그·영상·팝업 관리 기능 연동 및 inquiry 커스텀 필드 저장 로직 구성",
      "영문 온라인 문의 페이지 UI · 문구 현지화, 중문 Noto Sans SC 폰트 적용, 파비콘·manifest 경로 정리",
      "관리자 CMS 발행 버튼 중복 ID·submit 비활성화 오류 수정, 로고 클릭 시 관리자 대시보드 이동, 문의 등록 시 제목·내용 외 필드 미저장 문제 해결",
    ],
    challenges: [
      "관리자 발행 버튼의 식별값 누락으로 저장 스크립트가 오류를 일으키던 문제를, 버튼 설정과 제출 로직 정리로 게시판 작성 화면에 공통 적용",
      "온라인 문의의 커스텀 필드가 저장되지 않던 문제를, 폼 입력값과 서버 저장 흐름을 보완해 해결",
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
    desc: "웨어러블 재활 로봇 전문기업 휴로틱스의 국문·영문 홈페이지입니다. 제품 페이지의 스크롤 기반 가로 전환 인터랙션과 전 서브페이지 퍼블리싱, GnuBoard 연동을 담당했습니다.",
    overview:
      "휴로틱스는 근력 보조·재활을 위한 웨어러블 로봇(H-Medi, Extension · Flexion)을 개발하는 기업입니다. 국문과 영문을 분리 운영하는 PHP 기반 기업 홈페이지로, 메인에는 Swiper 비주얼과 Intersection Observer 기반 스크롤 등장 애니메이션을 적용했고 제품 페이지에는 마우스휠·스크롤 입력으로 전환되는 풀스크린 가로 슬라이드 인터랙션을 구현했습니다. 회사소개·연혁·핵심역량·제품·채용·뉴스·인증·홍보영상·고객문의·매뉴얼 등 기업 사이트 전반의 UI를 구성했으며, GnuBoard5 커스텀 스킨을 통해 뉴스·인증·문의·영상·채용 콘텐츠를 관리할 수 있도록 연동했습니다. 전체 페이지 퍼블리싱과 함께 게시판 데이터 저장, 영상 임베드, 다국어 스타일, 파비콘·manifest 경로 등 운영 과정에서 발생한 이슈를 점검·수정했습니다.",
    implementation: [
      "국문·영문 PHP 템플릿 구조 퍼블리싱 및 회사소개·연혁·핵심역량·제품·채용·고객지원 전 서브페이지 UI 구현",
      "제품 페이지 Swiper(fade) 기반 풀스크린 섹션을 마우스휠·스크롤로 넘기는 가로 전환 인터랙션, hashNavigation, lnb 진행바 · active 동기화, 슬라이드별 배경영상 재생 제어, 마지막 슬라이드에서 일반 스크롤로 자연스럽게 전환하는 로직 구현",
      "회사연혁 페이지 GSAP ScrollTrigger 타임라인 진행바 및 연도 메뉴 active 스크롤 동기화, 모바일 뷰포트(vh) 대응",
      "그누보드5 게시판(뉴스·인증·문의·영상·채용·배너 등) 연동, 채용 페이지의 마감일(D-day) 계산 및 전체 진행 중 공고 수 DB 집계, 문의 커스텀 필드(성명·이메일·연락처·회사) 저장 로직 구성",
      "영상 게시판 유튜브·비메오 임베드를 위한 HTMLPurifier 필터 대응, 뉴스 카테고리 라벨 삼항 연산자 오류 수정, 파비콘·manifest 경로 및 영문 스타일 정리",
    ],
    challenges: [
      "세로 스크롤을 가로 슬라이드 전환으로 연결하면서 배경영상 재생·진행바·메뉴 상태와 첫·마지막 슬라이드의 일반 스크롤 전환이 자연스럽게 이어지도록 스크롤 잠금·해제 타이밍을 제어",
      "회사연혁 타임라인에서 섹션별 높이 차이로 활성 연도가 건너뛰는 문제를, 현재 스크롤 위치 기준으로 활성 연도를 계산하도록 변경해 해결",
      "채용 공고 수 집계와 온라인 문의 커스텀 필드 저장이 누락되는 문제를, 게시판 데이터 조회·저장 흐름을 보완해 해결",
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
      "신성실리콘은 실리콘 주방·유아용품 OEM&ODM 전문 기업입니다. 국문과 영문을 분리 운영하는 PHP 기반 기업 홈페이지로, 메인에는 풀스크린 비주얼 슬라이드와 카운터·글로벌 네트워크 인터랙션을 적용했고, 서브 페이지에는 스크롤에 반응하는 등장·전환 모션을 구현했습니다. 회사소개·제품·핵심역량·보유기술·설비·OEM&ODM·고객지원 등 기업 사이트 전반의 UI를 구성했으며, GnuBoard 기반 뉴스·문의·카탈로그·인증 콘텐츠 관리 기능도 연동했습니다. 전체 페이지 퍼블리싱과 함께 메인 비주얼·기술 소개 영상 인터랙션, 온라인 문의 저장 흐름, 검색엔진 최적화, 모바일 브라우저 대응까지 담당했습니다.",
    implementation: [
      "국문 · 영문 PHP 템플릿 구조 퍼블리싱 및 회사소개·제품·핵심역량·보유기술 · 설비·OEM&ODM·고객지원 전 서브페이지 UI 구현",
      "메인 비주얼 슬라이드, 재생 진행률·일시정지, 기술 소개 영상 인터랙션과 핵심역량·보유기술 페이지의 스크롤 연동 인트로 연출 구현",
      "그누보드 게시판(뉴스·문의·카탈로그·인증) 연동 및 온라인 문의 폼 저장·검증 흐름 구성",
      "뉴스 목록 링크 구조 정리, 구조화 데이터(JSON-LD) 마크업, 이미지 대체 텍스트·지연 로딩 등 검색엔진 최적화 적용",
    ],
    challenges: [
      "핵심역량·보유기술 페이지에서 중앙 정렬 transform과 이미지 확장 애니메이션이 충돌하고, 반복 스크롤 시 화면이 깜빡이는 문제를 타이밍과 복원 순서 정리로 해결",
      "메인 비주얼 전환 시 배경 축소 모션이 재실행되지 않고 영상 재생·정지·슬라이드 상태가 어긋나는 문제를 전환 흐름 재구성으로 안정화",
      "문의 폼의 검증 UI와 실제 저장 검증이 분리된 문제를, 클라이언트·서버 단계 검증으로 보완",
    ],
    liveUrl: "https://ssmold.co.kr/ko/",
  },
];

interface WorkLog {
  category: string;
  title: string;
  desc: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
  takeaway: string;
}

const WORKLOGS: WorkLog[] = [
  {
    category: "Front-end Development",
    title: "Framer Motion과 transform 기반 정렬 충돌 해결",
    desc: "정렬용 transform과 모션 transform이 서로 덮어쓰는 문제를 래퍼 분리 구조로 해결했습니다.",
    problem:
      "가운데 정렬을 위해 transform을 적용한 요소에 Framer Motion의 위치·스케일 애니메이션을 추가하자, 기존 정렬 값이 덮어써져 요소 위치가 틀어졌습니다.",
    cause:
      "CSS 정렬과 Framer Motion이 같은 DOM 요소의 transform 속성을 동시에 제어하고 있었습니다.",
    solution:
      "외부 래퍼는 정렬 전용으로 유지하고, 내부 래퍼에만 Framer Motion 애니메이션을 적용해 transform의 역할을 분리했습니다.",
    result:
      "기존 중앙 정렬을 유지하면서 위치·투명도·스케일 애니메이션을 안정적으로 적용할 수 있었습니다.",
    takeaway:
      "레이아웃 정렬과 모션 애니메이션이 모두 transform을 사용한다면, 하나의 요소에 함께 적용하기보다 역할별 래퍼를 분리하는 편이 안전합니다.",
  },
  {
    category: "React / Interactive UI",
    title: "React StrictMode 환경의 화면 전환 깜빡임 해결",
    desc: "인트로와 목차 화면 전환 시 메뉴가 사라졌다 다시 나타나는 문제를 화면 매핑과 애니메이션 구조 정리로 해결했습니다.",
    problem:
      "인트로 화면과 목차 화면을 오갈 때 메뉴가 순간적으로 사라졌다 다시 나타나며 화면 전환이 불안정하게 보였습니다.",
    cause:
      "React StrictMode 환경에서 컴포넌트가 이중 마운트되고, 화면 전환 조건과 중복 애니메이션 래퍼가 함께 동작하고 있었습니다.",
    solution:
      "화면별 렌더링 매핑과 전환 조건을 정리하고, 중복 적용된 애니메이션 래퍼를 분리해 메뉴 노출 상태를 일관되게 관리했습니다.",
    result:
      "인트로와 목차 화면을 오갈 때 메뉴가 깜빡이지 않고 자연스럽게 전환되도록 개선했습니다.",
    takeaway:
      "화면 전환 애니메이션이 불안정할 때는 단순히 모션 값을 조정하기보다, 컴포넌트 마운트 구조와 렌더링 조건을 함께 점검해야 합니다.",
  },
  {
    category: "Interactive UI",
    title: "GSAP ScrollTrigger 기반 연혁 메뉴 동기화 안정화",
    desc: "섹션별 높이가 다른 연혁 페이지에서 스크롤 위치를 기준으로 활성 연도를 계산해 메뉴 동기화를 안정화했습니다.",
    problem:
      "회사 연혁 페이지에서 스크롤 시 특정 연도가 잠깐만 활성화되거나 일부 연도가 건너뛰는 현상이 발생했습니다.",
    cause:
      "연도별 섹션 높이가 서로 다른 상태에서 진입 이벤트 중심으로 active 상태를 처리해, 스크롤 위치와 메뉴 상태가 정확히 맞지 않았습니다.",
    solution:
      "섹션 진입 여부에만 의존하지 않고 현재 스크롤 위치를 기준으로 활성 연도를 계산하도록 로직을 변경했습니다.",
    result:
      "섹션 높이가 달라도 현재 화면 위치에 맞는 연도 메뉴가 안정적으로 활성화되었습니다.",
    takeaway:
      "가변 높이 섹션이 많은 스크롤 인터랙션에서는 이벤트 발생 여부보다 현재 스크롤 위치를 기준으로 상태를 계산하는 방식이 더 안정적입니다.",
  },
  {
    category: "PHP / GnuBoard",
    title: "온라인 문의 폼의 커스텀 필드 저장 누락 해결",
    desc: "문의 등록 시 제목과 내용만 저장되던 문제를 입력값 전달부터 서버 저장 단계까지 점검해 해결했습니다.",
    problem:
      "온라인 문의 등록 후 제목과 내용은 저장되지만 이름·이메일·연락처·회사 정보가 관리자 화면에 남지 않았습니다.",
    cause:
      "문의 전용 입력 필드가 폼 화면에는 존재했지만, 서버 저장 처리 단계에서 게시판 필드로 전달·저장되지 않고 있었습니다.",
    solution:
      "각 입력 필드의 name 값과 서버 처리 로직을 점검하고, 문의 전용 커스텀 필드가 저장 단계까지 전달되도록 흐름을 보완했습니다.",
    result:
      "문의 등록 시 기본 내용과 함께 이름·이메일·연락처·회사 정보가 정상적으로 저장되고 관리자에서 확인할 수 있게 되었습니다.",
    takeaway:
      "폼 UI가 정상적으로 보여도 실제 저장 로직까지 연결되지 않으면 데이터가 누락될 수 있으므로, 화면·전송·서버 저장 단계를 함께 확인해야 합니다.",
  },
  {
    category: "Form Validation",
    title: "문의 폼의 프론트·서버 이중 검증 적용",
    desc: "캡차 UI만 표시되고 실제 검증이 누락된 문의 폼에 클라이언트와 서버 단계의 검증을 함께 적용했습니다.",
    problem:
      "문의 폼에 캡차 UI는 있었지만 실제 입력 여부를 검증하지 않아, 필수값을 입력하지 않아도 제출이 가능한 상태였습니다.",
    cause:
      "브라우저 단계의 제출 검증과 서버 저장 전 검증이 모두 충분히 적용되지 않아, UI와 실제 검증 로직이 분리되어 있었습니다.",
    solution:
      "프론트엔드에서 제출 전 필수 입력값과 캡차 상태를 확인하고, 서버에서도 동일한 조건을 다시 검증하도록 저장 로직을 보완했습니다.",
    result:
      "필수 입력값이나 검증값이 누락된 문의는 저장되지 않도록 처리했고, 국문·영문 환경별 안내 문구도 분기했습니다.",
    takeaway:
      "폼 검증은 클라이언트 단계만으로 처리하지 않고, 서버 저장 전 검증까지 함께 적용해야 데이터 품질과 입력 안정성을 확보할 수 있습니다.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const offset = 80;
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10;

      if (atBottom) {
        setActive(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            className="flex flex-col leading-none group cursor-pointer"
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
                  className={`text-xs font-semibold tracking-widest transition-colors cursor-pointer ${isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
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
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {/* 모바일 메뉴 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-80 border-t border-border" : "max-h-0"} ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white/95 backdrop-blur-md"}`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map((item, i) => {
              const id = SECTION_IDS[i];
              const isActive = activeSection === id;
              return (
                <button
                  key={item}
                  onClick={() => {
                    scrollTo(id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold tracking-widest text-left py-3 border-b border-border/50 last:border-0 transition-colors cursor-pointer ${isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                View Projects <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("worklog")}
                className="inline-flex items-center gap-2 text-primary border border-primary/25 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-primary/50 hover:bg-primary/4 transition-colors cursor-pointer"
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
                      개발 기여도 {p.contribution}%
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
                    className="w-full flex flex-col md:flex-row md:items-center gap-3 py-5 px-4 text-left hover:bg-white rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="md:w-52 shrink-0">
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
                    <div className="pb-6 pt-1 pl-0 md:pl-[208px] grid sm:grid-cols-2 gap-4">
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