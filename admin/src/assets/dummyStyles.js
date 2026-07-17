// src/assets/dummyStyles.js
export const addJobsPageStyles = {
  // Toast
  toastWrapper: "fixed top-4 right-2 sm:right-4 z-50 animate-slide-in",
  toastContent:
    "flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.45)] border-l-4 backdrop-blur-sm border-transparent",
  toastSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-rose-500",
  toastDot: "w-3 h-3 rounded-full animate-ping",
  toastDotSuccess: "bg-emerald-400",
  toastDotError: "bg-rose-400",
  toastDotStatic: "absolute inset-0 w-3 h-3 rounded-full",
  toastMessage: "font-semibold text-sm sm:text-base text-white",
  toastCloseBtn:
    "ml-3 sm:ml-4 text-white/70 hover:text-white hover:rotate-90 transition-transform duration-300",

  // AnimatedField
  fieldContainer: "space-y-2 w-full",
  fieldLabel: "block text-sm font-medium text-stone-700",
  requiredStar: "text-[#D4293F]",
  fieldWrapper: "relative group transition-all duration-300",
  fieldFocusedScale: "scale-[1.02]",
  fieldGlow:
    "absolute inset-0 bg-linear-to-r from-[#7A0F22]/20 to-[#2B0810]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500",
  fieldInner:
    "relative flex items-center border-2 rounded-xl overflow-hidden transition-all duration-300",
  fieldInnerError: "border-rose-300 bg-rose-50",
  fieldInnerFocused: "border-[#F5304B] bg-white shadow-lg shadow-[#7A0F22]/30",
  fieldInnerDefault: "border-stone-200 bg-white hover:border-[#D4293F]",
  fieldIconSpan: "pl-3 sm:pl-4 text-stone-400",
  fieldIconFocused: "text-[#F5304B]",
  fieldInputWrapper: "relative flex-1",
  selectInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none appearance-none cursor-pointer text-sm sm:text-base text-stone-700",
  textareaInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none resize-none text-sm sm:text-base text-stone-700",
  inputBase:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none text-sm sm:text-base text-stone-700 placeholder-stone-400 disabled:opacity-50 disabled:cursor-not-allowed",
  requiredSpan: "pr-3 sm:pr-4 text-[#F5304B] text-sm",
  errorText: "text-rose-500 text-sm mt-1 animate-shake",

  // ImageUpload
  uploadContainer: "space-y-2",
  uploadLabel: "flex items-center gap-2 text-stone-700 font-semibold",
  uploadIcon: "text-[#F5304B]",
  uploadRequired: "text-[#D4293F]",
  uploadDropzone:
    "relative border-2 border-dashed rounded-xl p-4 sm:p-6 transition-all duration-300",
  uploadDropzoneActive: "border-[#F5304B] bg-[#2B0810]/50",
  uploadDropzoneError: "border-rose-300 bg-rose-50",
  uploadDropzonePreview: "border-[#D4293F] bg-[#2B0810]/30",
  uploadDropzoneDefault: "border-stone-300 bg-[#09090B] hover:border-[#D4293F]",
  previewContainer: "relative flex justify-center",
  previewImage: "max-h-20 sm:max-h-32 rounded-lg object-contain",
  removeImageBtn:
    "absolute -top-2 -right-2 p-1 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors",
  uploadPlaceholder: "text-center",
  uploadIconLarge: "mx-auto h-10 w-10 sm:h-12 sm:w-12 text-stone-400",
  uploadText: "mt-2 text-sm sm:text-sm text-stone-500",
  browseLabel: "text-[#D4293F] hover:text-[#D4293F] cursor-pointer font-bold",
  fileInputHidden: "hidden",

  // Main layout
  pageContainer:
    "min-h-screen font-sans bg-[#09090B] py-8 sm:py-12 px-3 sm:px-4",
  contentWrapper: "max-w-5xl mx-auto",
  headerCenter: "text-center mb-6 sm:mb-8",
  title:
    "text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#F5304B] to-[#D4293F] flex items-center justify-center gap-3",
  titleInner: "leading-tight",
  subtitle: "text-stone-500 mt-2 text-sm sm:text-base",
  formCard:
    "bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 border border-stone-200",

  // Grids
  grid3: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6",
  grid2: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
  colSpan1: "col-span-1",
  mdColSpan2: "md:col-span-2 space-y-3 sm:space-y-4",

  // Array sections
  arraySection: "space-y-3",
  arrayLabel: "flex items-center gap-2 text-stone-700 font-semibold",
  arrayItemRow: "flex gap-2 flex-col sm:flex-row items-start",
  arrayInput:
    "flex-1 px-3 py-2 sm:px-4 sm:py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-sm sm:text-base",
  arrayInputError: "border-rose-300 bg-rose-50 focus:ring-rose-200",
  arrayInputDefault:
    "border-stone-200 bg-white focus:border-[#F5304B] focus:ring-4 focus:ring-[#7A0F22]",
  removeBtn:
    "p-2 sm:p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-all hover:scale-110",
  addBtn:
    "flex items-center gap-1 text-[#D4293F] hover:text-[#D4293F] text-sm font-medium transition-transform hover:translate-x-1",

  // Salary specific
  salaryContainer: "w-full",
  salaryLabel: "block text-sm font-medium text-stone-700",
  salaryInputWrapper: "mt-2",
  salaryInputGroup:
    "flex items-center border-2 rounded-xl overflow-hidden transition-all duration-300",
  salaryInputGroupError: "border-rose-300 bg-rose-50",
  salaryInputGroupFilled:
    "border-[#F5304B] bg-white shadow-lg shadow-[#7A0F22]/30",
  salaryInputGroupDefault: "border-stone-200 bg-white hover:border-[#D4293F]",
  salaryIconSpan: "pl-3 sm:pl-4 text-stone-400",
  salaryIconFilled: "text-[#F5304B]",
  salaryAmountInput:
    "w-full px-3 py-2 sm:px-3 sm:py-3 bg-transparent outline-none text-sm sm:text-base text-stone-700",
  salaryPeriodSelect:
    "px-2 sm:px-3 py-2 sm:py-3 bg-transparent outline-none border-l-2 border-stone-200 cursor-pointer text-sm sm:text-base text-stone-700",

  // Submit button
  submitBtn:
    "w-full cursor-pointer bg-linear-to-r from-[#F5304B] to-[#D4293F] text-white font-bold py-3 sm:py-4 px-5 rounded-full hover:from-[#D4293F] hover:to-[#7A0F22] transition-all duration-300 transform hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#7A0F22] text-sm sm:text-base flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinnerIcon: "w-5 h-5 animate-spin",
};

export const dashboardStyles = {
  container: "min-h-screen font-sans bg-[#09090B]",

  // Toast
  toastWrapper: "fixed top-6 right-6 z-50 animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.45)] border-l-4",
  toastSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-rose-500",
  toastDefault: "bg-stone-900 text-stone-100 border-stone-600",
  toastIconSuccess: "text-emerald-400",
  toastIconError: "text-rose-400",
  toastIconDefault: "text-stone-400",
  toastMessage: "font-semibold text-sm text-white",
  toastButtonContainer: "mt-3 flex gap-2",
  toastConfirmBtn:
    "px-4 py-1.5 rounded-full bg-rose-500 text-white text-xs font-bold hover:bg-rose-600 transition-all shadow-md active:scale-95 cursor-pointer",
  toastCancelBtn:
    "px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold hover:bg-stone-200 transition-all cursor-pointer",
  toastCloseBtn: "ml-2 text-white/70 hover:text-white",
  toastFlex: "flex-1",

  contentWrapper:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12",

  // Header
  headerContainer: "mb-10 sm:mb-12 animate-fadeIn",
  headerEyebrow: "inline-flex items-center gap-2 mb-3",
  headerDot: "w-2 h-2 rounded-full bg-[#F5304B] animate-pulse",
  headerEyebrowText:
    "text-xs font-black text-[#F5304B] uppercase tracking-[0.15em]",
  headerTitle:
    "text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-linear-to-r from-[#F5304B] to-[#D4293F] bg-clip-text tracking-tight leading-[1.1]",
  headerSubtitle: "text-stone-500 mt-3 flex items-center gap-2 text-sm",
  headerIcon: "w-4 h-4 text-emerald-500",

  // Stats — 2×2 on mobile, 4×1 on desktop
  statsGrid: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10",
  statCard:
    "group relative bg-[#131316] rounded-2xl border border-[#2B0810] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#7A0F22] hover:shadow-[0_12px_24px_rgba(245,48,75,0.06)] dark:hover:shadow-[0_12px_24px_rgba(245,48,75,0.18)] flex flex-col overflow-hidden",
  statCardOverlay: "", // kept for backward compat
  statCardContent: "p-5 sm:p-6 flex items-start justify-between flex-1",
  statCardTextContainer: "space-y-2 min-w-0",
  statCardLabel:
    "text-xs font-black text-stone-500 uppercase tracking-[0.12em] leading-none",
  statCardValue:
    "text-3xl sm:text-4xl font-black text-stone-950 dark:text-stone-100 tabular-nums leading-none pt-1",
  statCardIconWrapper:
    "p-2.5 rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 ml-3",
  statCardIcon: "w-5 h-5 sm:w-6 sm:h-6 text-white",

  // Filters
  filtersContainer:
    "relative z-20 mb-8 bg-[#131316] rounded-2xl border border-[#2B0810] shadow-[0_2px_10px_rgba(0,0,0,0.35)] overflow-visible animate-fadeIn animation-delay-100",
  filtersHeader:
    "flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#2B0810]",
  filtersTitleContainer: "flex items-center gap-2",
  filtersIcon: "w-3.5 h-3.5 text-stone-500",
  filtersTitle: "text-sm font-bold text-stone-300 tracking-wide",
  filtersClearBtn:
    "flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-[#F5304B] transition-colors",
  filtersGrid:
    "grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-100",

  filterInputContainer: "px-5 sm:px-6 py-4 relative",
  filterLabel:
    "block text-xs font-black text-stone-500 uppercase tracking-[0.12em] mb-2.5",
  filterInputWrapper: "relative",
  filterSearchIcon:
    "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-500 pointer-events-none z-10",
  filterChevron:
    "absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-300 pointer-events-none",
  filterSelect:
    "w-full pl-8 pr-9 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-700 focus:outline-none focus:border-[#F5304B] focus:ring-2 focus:ring-[#F5304B]/10 focus:bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-stone-300 hover:bg-white",

  // Custom dropdown (replaces native <select> so the open menu can be themed)
  customSelectWrapper: "relative",
  customSelectButton:
    "w-full flex items-center justify-between gap-2 pl-8 pr-3 py-2.5 bg-[#131316] border border-[#2B0810] rounded-xl text-sm text-stone-200 focus:outline-none cursor-pointer transition-all duration-200 hover:border-[#7A0F22] hover:bg-[#2B0810]",
  customSelectButtonOpen:
    "border-[#F5304B] ring-2 ring-[#F5304B]/20 bg-[#2B0810]",
  customSelectButtonCompact:
    "flex items-center gap-2 pl-3 pr-2.5 py-2 bg-[#131316] border border-[#2B0810] rounded-xl text-xs font-bold text-stone-300 cursor-pointer transition-all duration-200 hover:border-[#7A0F22] hover:bg-[#2B0810]",
  customSelectValue: "truncate text-left",
  customSelectPlaceholder: "truncate text-left text-stone-500",
  customSelectChevron:
    "w-3.5 h-3.5 text-stone-500 shrink-0 transition-transform duration-200",
  customSelectChevronOpen: "rotate-180 text-[#F5304B]",
  customSelectPanel:
    "absolute z-50 mt-2 left-0 right-0 max-h-64 overflow-y-auto rounded-xl border border-[#2B0810] bg-[#131316] shadow-[0_16px_40px_rgba(0,0,0,0.5)] py-1.5 animate-fadeIn",
  customSelectPanelCompact:
    "absolute z-50 mt-2 right-0 w-36 rounded-xl border border-[#2B0810] bg-[#131316] shadow-[0_16px_40px_rgba(0,0,0,0.5)] py-1.5 animate-fadeIn",
  customSelectOptionBase:
    "flex items-center justify-between gap-2 px-3.5 py-2.5 text-sm cursor-pointer transition-colors duration-150",
  customSelectOptionInactive:
    "text-stone-400 hover:bg-[#2B0810] hover:text-stone-100",
  customSelectOptionActive: "bg-[#2B0810] text-[#D4293F] font-semibold",
  customSelectOptionDot: "w-1.5 h-1.5 rounded-full bg-[#F5304B] shrink-0",

  // Jobs Section
  jobsSection: "animate-fadeIn animation-delay-200",
  jobsHeader: "flex items-center justify-between mb-5",
  jobsTitle:
    "text-lg sm:text-xl font-bold text-stone-300 flex items-center gap-2",
  jobsTitleIcon: "w-4 h-4 text-[#F5304B]",
  jobsFilterContainer: "flex items-center gap-2.5",
  jobsStatusSelectWrapper: "relative",
  jobsStatusSelect:
    "appearance-none text-xs font-bold border border-stone-200 bg-white text-stone-600 rounded-xl pl-3 pr-7 py-2 focus:outline-none focus:border-[#F5304B] cursor-pointer hover:border-stone-300 transition-colors",
  jobsStatusChevron:
    "absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none",
  jobsCount:
    "text-xs font-bold text-stone-400 bg-[#131316] border border-[#2B0810] px-3 py-2 rounded-xl",

  // Loading
  loadingContainer: "text-center py-24",
  loadingSpinner:
    "animate-spin rounded-full h-10 w-10 border-2 border-[#2B0810] border-t-[#F5304B] mx-auto",

  // Jobs Grid
  jobsGrid: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",

  // Job Card
  jobCard:
    "group relative bg-[#131316] rounded-2xl border border-[#2B0810] shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden",
  jobCardAccentBar:
    "h-0.5 bg-linear-to-r from-[#F5304B] to-[#D4293F] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  jobCardOverlay: "absolute inset-0 bg-transparent pointer-events-none",
  jobCardContent: "relative p-5",
  jobCardHeader: "flex items-start gap-3.5",

  jobLogoContainer: "shrink-0",
  jobLogoWrapper:
    "w-12 h-12 rounded-xl bg-[#2B0810] border border-[#7A0F22] flex items-center justify-center overflow-hidden",
  jobLogo: "w-full h-full object-cover",
  jobLogoFallback: "hidden w-full h-full items-center justify-center",
  jobLogoFallbackIcon: "w-5 h-5 text-stone-400",

  jobDetails: "flex-1 min-w-0",
  jobRole:
    "text-sm font-bold text-stone-100 group-hover:text-[#F5304B] transition-colors duration-200 leading-snug",
  jobCompany: "text-xs text-stone-500 flex items-center gap-1 mt-0.5",
  jobCompanyIcon: "w-3 h-3 text-stone-500 shrink-0",
  jobLocation: "text-xs text-emerald-500 mt-1 flex items-center gap-1",
  jobLocationIcon: "w-3 h-3",

  jobDivider: "my-4 border-t border-[#2B0810]",

  jobMeta: "flex items-center justify-between",
  jobCategory:
    "inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#2B0810] text-[#D4293F]",
  jobApplicants: "flex items-center gap-1.5",
  jobApplicantsIcon: "w-3.5 h-3.5 text-stone-500",
  jobApplicantsCount: "text-sm font-bold text-stone-200",
  jobApplicantsLabel: "text-xs text-stone-500",

  jobActions: "mt-4 flex items-center gap-2",
  viewApplicantsBtn:
    "flex-1 text-center py-2.5 px-3 rounded-xl bg-[#F5304B] text-white text-xs font-bold hover:bg-[#D4293F] active:scale-[0.98] cursor-pointer transition-all shadow-sm hover:shadow-lg hover:shadow-[#F5304B]/20",
  closeJobBtn:
    "flex-1 text-center py-2.5 px-3 rounded-xl bg-[#2B0810] text-[#D4293F] hover:bg-[#7A0F22] active:scale-[0.98] cursor-pointer transition-colors text-xs font-bold",

  // Empty State
  emptyState:
    "text-center py-16 sm:py-24 bg-[#131316] rounded-2xl border border-dashed border-[#2B0810]",
  emptyStateIconWrapper:
    "w-14 h-14 bg-[#2B0810] rounded-2xl flex items-center justify-center mx-auto mb-4",
  emptyStateIcon: "w-7 h-7 text-stone-500",
  emptyStateTitle: "text-base font-bold text-stone-300",
  emptyStateText: "text-sm text-stone-500 mt-1",
  emptyStateBtn:
    "mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B0810] text-[#D4293F] border border-[#7A0F22] text-sm font-bold hover:bg-[#7A0F22] transition-colors cursor-pointer",

  animations: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
    .animation-delay-100 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
    .animation-delay-200 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
  `,
};

// Color mappings for dynamic stats cards
export const statColors = {
  blue: {
    gradient: "from-[#F5304B] to-[#D4293F]",
    bgLight: "bg-linear-to-br from-[#F5304B] to-[#D4293F]",
    barColor: "bg-[#F5304B]",
    hoverGlow: "group-hover:shadow-[0_20px_45px_-15px_rgba(245,48,75,0.45)]",
  },
  rose: {
    gradient: "from-rose-500 to-pink-400",
    bgLight: "bg-linear-to-br from-rose-500 to-pink-400",
    barColor: "bg-rose-500",
    hoverGlow: "group-hover:shadow-[0_20px_45px_-15px_rgba(244,63,94,0.45)]",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-400",
    bgLight: "bg-linear-to-br from-emerald-500 to-teal-400",
    barColor: "bg-emerald-500",
    hoverGlow: "group-hover:shadow-[0_20px_45px_-15px_rgba(16,185,129,0.45)]",
  },
  amber: {
    gradient: "from-amber-500 to-orange-400",
    bgLight: "bg-linear-to-br from-amber-500 to-orange-400",
    barColor: "bg-amber-500",
    hoverGlow: "group-hover:shadow-[0_20px_45px_-15px_rgba(245,158,11,0.45)]",
  },
};

export const companiesPageStyles = {
  // Layout
  pageContainer: "min-h-screen font-sans bg-[#09090B] p-6 sm:p-4 md:p-6",
  contentWrapper: "max-w-3xl mx-auto",

  // Toast
  toastWrapper: "fixed top-6 right-6 z-50 animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.45)] border-l-4",
  toastSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-rose-500",
  toastConfirm: "bg-stone-900 text-stone-100 border-stone-600",
  toastIconSuccess: "text-emerald-400",
  toastIconError: "text-rose-400",
  toastIconConfirm: "text-stone-400",
  toastContent: "flex-1",
  toastMessage: "font-medium text-white",
  toastActionRow: "mt-2 flex gap-2",
  toastConfirmBtn:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition-shadow shadow-sm",
  toastCancelBtn:
    "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition",
  toastCloseBtn: "ml-4 text-white/70 hover:text-white",

  // Header
  header: "text-center mb-10",
  headerTitle:
    "text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F5304B] to-[#D4293F] mb-2",
  headerSubtitle: "text-stone-500",

  // Form Card
  formCard:
    "bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-stone-200 p-6 sm:p-6 md:p-8",
  form: "space-y-6",

  // Logo Upload
  logoLabel: "block text-sm font-medium text-stone-700 mb-1",
  requiredStar: "text-[#D4293F]",
  logoContainer: "flex items-center gap-4 sm:gap-6",
  previewWrapper: "shrink-0",
  previewBox:
    "relative w-16 h-16 sm:w-20 md:w-24 rounded-xl overflow-hidden border-2 border-[#7A0F22] shadow-md bg-[#09090B]",
  previewImage: "w-full h-full object-contain",
  removeLogoBtn:
    "absolute top-1 cursor-pointer right-1 bg-rose-50 text-white rounded-full p-0.5 shadow hover:bg-rose-600",
  placeholderBox:
    "w-16 h-16 sm:w-20 md:w-24 cursor-pointer rounded-xl bg-[#09090B] border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-400",
  uploadArea: "flex-1",
  uploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#2B0810] text-[#D4293F] rounded-lg hover:bg-[#7A0F22] transition-colors border border-[#7A0F22]",
  fileInputHidden: "hidden",
  errorText: "mt-1 text-xs text-rose-600",

  // Website Input
  websiteLabel: "block text-sm font-medium text-stone-700 mb-1",
  inputWrapper: "relative",
  inputIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-stone-400",
  websiteInput:
    "w-full pl-10 pr-4 py-2.5 rounded-lg border focus:ring focus:outline-none transition bg-white",
  inputError: "border-rose-300 focus:border-rose-500 focus:ring-rose-200",
  inputDefault: "border-stone-300 focus:border-[#F5304B] focus:ring-[#7A0F22]",

  // Submit Button
  submitSection: "pt-4",
  submitBtn:
    "w-full cursor-pointer bg-linear-to-r from-[#F5304B] to-[#D4293F] text-white font-medium py-3 px-4 rounded-lg hover:from-[#D4293F] hover:to-[#7A0F22] transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#7A0F22] focus:outline-none flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinner: "animate-spin",

  // Companies List
  listSection: "mt-8",
  listTitle: "text-xl font-semibold mb-4",
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
  companyCard:
    "relative bg-white rounded-xl p-4 border border-stone-200 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col items-start gap-3",
  cardLogoWrapper: "w-full flex items-center justify-center mb-2",
  cardLogoBox:
    "w-16 h-16 sm:w-20 md:w-24 rounded-md overflow-hidden border border-stone-200 bg-[#09090B] flex items-center justify-center",
  cardLogoImage: "max-w-full max-h-full object-contain",
  cardNoImage: "text-stone-400",
  cardDetails: "flex-1 w-full",
  cardLink: "text-[#D4293F] font-medium hover:underline wrap-break-word",
  cardDeleteWrapper: "w-full flex justify-end",
  deleteBtn: "text-rose-500 cursor-pointer hover:text-rose-600 p-2 rounded-md",
};

export const companyQuestionPageStyles = {
  // Layout
  pageContainer: "min-h-screen font-sans bg-[#09090B] p-6 sm:p-4 md:p-6",
  contentWrapper: "max-w-5xl mx-auto",

  // Toast
  toastWrapper: "fixed top-6 right-6 z-50 animate-slideIn",
  toastBase:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.45)] border-l-4",
  toastSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-rose-500",
  toastIconSuccess: "text-emerald-400",
  toastIconError: "text-rose-400",
  toastMessage: "font-medium text-white",
  toastCloseBtn: "ml-4 text-white/70 hover:text-white",

  // Header
  header: "text-center mb-8",
  headerTitle:
    "text-3xl py-3 md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F5304B] to-[#D4293F] mb-2",
  headerSubtitle: "text-stone-500",

  // Form Card
  formCard:
    "bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-stone-200 p-6 mb-8",
  form: "space-y-5",
  gridRow: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 items-start",
  colSpan2: "md:col-span-2",
  colSpan2Alt: "md:col-span-2",

  // Labels & Inputs
  label: "block text-sm font-medium text-stone-700 mb-1",
  requiredStar: "text-[#D4293F]",
  inputWrapper: "relative",
  inputIcon: "absolute left-3 top-1/2 -translate-y-1/2 text-stone-400",
  inputField:
    "w-full pl-10 pr-4 py-2.5 rounded-lg border focus:ring focus:outline-none transition bg-white",
  inputError: "border-rose-300 focus:border-rose-500 focus:ring-rose-200",
  inputDefault: "border-stone-300 focus:border-[#F5304B] focus:ring-[#7A0F22]",
  errorText: "mt-1 text-xs text-rose-600",

  // Questions Count specific
  countHelperRow: "mt-1 flex items-center justify-between gap-2",
  countHelperText: "text-xs text-stone-500",
  countDisplayValue: "font-medium text-stone-700",
  countHint: "text-xs text-stone-400",

  // Logo Upload
  logoContainer: "flex items-center gap-4",
  logoPreviewWrapper: "shrink-0",
  logoPreviewBox:
    "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#7A0F22] shadow-md bg-[#09090B]",
  logoPreviewImage: "w-full h-full object-cover",
  removeLogoBtn:
    "absolute top-1 right-1 bg-rose-500 text-white rounded-full p-0.5 shadow hover:bg-rose-600",
  logoPlaceholder:
    "w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#09090B] border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-400",
  logoUploadArea: "",
  logoUploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-[#2B0810] text-[#D4293F] rounded-lg hover:bg-[#7A0F22] transition-colors border border-[#7A0F22]",
  fileInputHidden: "hidden",
  logoHint: "mt-1 text-xs text-stone-500",

  // CSV Upload
  csvUploadContainer: "flex flex-col md:flex-row md:items-center gap-3",
  csvUploadLabel:
    "cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#2B0810] text-[#D4293F] rounded-lg hover:bg-[#7A0F22] transition-colors border border-[#7A0F22]",
  csvFileName: "block mt-2 md:inline md:ml-3 text-sm text-stone-500",
  csvLoadedBadge:
    "text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1",

  // Submit Button
  submitSection: "pt-2",
  submitBtn:
    "w-full cursor-pointer md:w-1/3 bg-linear-to-r from-[#F5304B] to-[#D4293F] text-white font-medium py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#7A0F22] focus:outline-none flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-70 cursor-not-allowed",
  spinner: "w-5 h-5 animate-spin",

  // Parsed Questions Section
  questionsSection:
    "bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-stone-200 p-6 mb-8",
  sectionTitle:
    "text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2",
  sectionTitleIcon: "text-[#F5304B]",
  questionsGrid:
    "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",

  // Question Card
  questionCard:
    "group p-4 bg-white rounded-xl border border-stone-200 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] hover:border-[#7A0F22] animate-card",
  cardInner: "flex gap-3",
  cardIcon: "shrink-0 text-[#F5304B] mt-0.5",
  cardContent: "flex-1",
  cardHeader: "flex items-start justify-between gap-2",
  cardQuestion:
    "font-medium text-stone-800 group-hover:text-[#D4293F] transition-colors",
  cardQuestionMissing: "text-stone-400",
  cardDateBadge: "text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full",
  answerSection: "mt-2 text-sm text-stone-600",
  answerLabel: "font-medium mb-1 flex items-center gap-1",
  answerIcon: "text-amber-500",
  answerContent:
    "prose-sm max-w-none text-stone-400 bg-[#09090B] p-2 rounded-lg border border-stone-200",
  keyPointsSection: "mt-3",
  keyPointsLabel:
    "text-xs font-semibold text-[#D4293F] mb-1 flex items-center gap-1",
  keyPointsList: "list-disc list-inside text-xs text-stone-600 space-y-1",
  keyPointItem: "flex items-start gap-2",
  keyPointIcon: "mt-0.5 text-stone-800 shrink-0",
};

export const listCompanyQuestionStyles = {
  // Main container
  container: "p-6 sm:p-4 md:p-6 bg-[#09090B] font-sans min-h-screen",

  // Header
  header: "flex items-center gap-3 mb-8",
  headerIcon: "text-[#F5304B]",
  headerTitle: "text-3xl font-bold text-stone-200",

  // Loading state
  loadingContainer: "flex flex-col items-center py-20",
  loadingSpinner: "animate-spin text-[#F5304B] mb-2",
  loadingText: "text-stone-500",

  // Empty state
  emptyState: "text-center py-20 text-stone-500",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",

  // Company Card
  card: "group bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform transform hover:-translate-y-1 overflow-hidden flex flex-col relative",

  // Card Image Section
  cardImageContainer:
    "h-36 sm:h-40 md:h-48 lg:h-48 bg-[#09090B] overflow-hidden flex items-center justify-center border-b border-stone-100",
  cardImage: "w-full h-full object-contain",
  cardImageFallback: "flex flex-col items-center justify-center text-stone-400",

  // Action Buttons Overlay
  actionButtonsOverlay:
    "absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
  editButton:
    "p-2 cursor-pointer bg-white rounded-full shadow-sm hover:bg-[#09090B] border border-stone-200",
  editIcon: "text-[#D4293F]",
  deleteButton:
    "p-2 cursor-pointer bg-white rounded-full shadow-sm hover:bg-rose-50 border border-stone-200",
  deleteIcon: "text-rose-500",

  // Card Content
  cardContent: "p-5 flex-1 flex flex-col justify-between",
  cardTitle: "text-lg font-semibold text-stone-800 mb-2 line-clamp-1",

  // Card Info Section
  cardInfoContainer: "flex flex-wrap items-center gap-3 text-sm text-stone-500",
  questionsInfo: "flex items-center gap-2",
  questionsLabel: "font-medium",
  questionsBadge:
    "bg-[#7A0F22] text-[#F5304B] px-2 py-0.5 rounded-full text-xs",

  // CSV Info
  csvInfo: "flex items-center gap-2",
  csvIcon: "text-emerald-600",
  csvLink: "truncate text-xs text-[#D4293F] hover:underline",
  csvText: "truncate text-xs",

  // Card Footer
  cardFooter: "mt-4 flex items-center justify-between",
  cardMeta: "text-xs text-stone-400",
  cardActions: "flex items-center gap-2",
  cardEditBtn:
    "px-3 cursor-pointer py-1 text-sm bg-[#F5304B] text-white rounded-full hover:bg-[#D4293F] transition",
  cardDeleteBtn:
    "px-3 cursor-pointer py-1 text-sm border border-stone-200 rounded-full hover:bg-[#09090B] transition",

  // Toast
  toastWrapper:
    "fixed top-6 right-6 z-50 w-full max-w-sm transform transition-all",
  toastVisible: "translate-y-0 opacity-100",
  toastHidden: "translate-y-2 opacity-0",
  toastContainer:
    "rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.45)] overflow-hidden border border-stone-200",
  toastSuccess: "bg-[#064e3b] text-white border-l-4 border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-l-4 border-rose-500",
  toastConfirm: "bg-[#2B0810] text-white border-l-4 border-[#F5304B]",
  toastContent: "p-3 flex items-start gap-3",
  toastIconSuccess: "h-5 w-5 text-emerald-400",
  toastIconError: "h-5 w-5 text-rose-400",
  toastIconConfirm: "h-5 w-5 text-[#F5304B]",
  toastMessageContainer: "flex-1",
  toastMessage: "text-sm text-white",
  toastConfirmButtons: "mt-2 flex gap-2",
  toastConfirmBtn:
    "px-3 cursor-pointer py-1 bg-rose-500 text-white rounded text-sm",
  toastCancelBtn:
    "px-3 cursor-pointer py-1 bg-stone-200 text-stone-800 rounded text-sm",
  toastCloseBtn: "text-white/70 hover:text-white",

  // Modal
  modalOverlay:
    "fixed inset-0 z-40 pt-30 md:pt-35 lg:pt-50 xl:pt-25 flex items-start sm:items-center justify-center p-4 overflow-y-auto bg-black/30 backdrop-blur-sm",
  modalBackdrop: "absolute inset-0",
  modalContainer:
    "relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] w-full max-w-lg overflow-y-auto max-h-[90vh] mx-4 border border-stone-200",
  modalContent: "p-6 space-y-4",

  // Modal Header
  modalHeader: "flex justify-end",
  modalCloseBtn:
    "p-1 text-rose-500 cursor-pointer hover:bg-rose-50 rounded-full transition",

  // Form Fields
  formGroup: "",
  formLabel: "block text-sm font-medium text-stone-700 mb-1",
  formInput:
    "w-full px-3 py-2 border border-stone-300 rounded-lg outline-none focus:ring-2 focus:ring-[#F5304B]",
  formHelper: "text-xs text-stone-400 mt-1",

  // Image Upload
  imagePreviewContainer: "relative",
  imagePreview:
    "w-full h-40 object-contain rounded-lg bg-[#09090B] border border-stone-200",
  imageRemoveBtn:
    "absolute top-2 right-2 p-1 bg-rose-500 text-white rounded-full",
  imageUploadLabel:
    "flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-stone-300 rounded-lg cursor-pointer hover:bg-[#09090B] hover:border-[#D4293F]",
  imageUploadContent: "flex flex-col items-center justify-center pt-3 pb-4",
  imageUploadIcon: "w-7 h-7 text-stone-400 mb-2",
  imageUploadText: "text-sm text-stone-500",
  imageUploadInput: "hidden",

  // CSV Upload
  csvFileDisplay:
    "flex items-center justify-between p-2 border border-stone-300 rounded-lg bg-white",
  csvFileName: "text-sm truncate text-stone-600",
  csvRemoveBtn: "p-1 text-rose-500",
  csvUploadLabel:
    "flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[#C8102E] rounded-lg cursor-pointer hover:bg-[#09090B] hover:border-[#D4293F]",
  csvUploadContent: "flex flex-col items-center justify-center pt-4 pb-4",
  csvUploadIcon: "w-6 h-6 text-stone-400 mb-1",
  csvUploadText: "text-xs text-stone-500",
  csvUploadInput: "hidden",

  // Modal Footer
  modalFooter:
    "flex items-center justify-end gap-3 p-4 border-t border-stone-200",
  modalCancelBtn:
    "px-4 text-sm py-2 cursor-pointer rounded-full border border-stone-200 hover:bg-[#09090B]",
  modalSaveBtn:
    "px-4 py-2 text-sm cursor-pointer rounded-full bg-[#F5304B] text-white flex items-center gap-2 hover:bg-[#D4293F] disabled:opacity-70 disabled:cursor-not-allowed",
};

export const listRoleQuestionStyles = {
  // Layout
  pageContainer: "min-h-screen font-sans bg-[#09090B] p-4 sm:p-6",
  toastContainer: "fixed top-20 sm:top-28 right-4 z-50 space-y-2",

  // Success/Info Toast
  baseToast:
    "flex items-center space-x-2 px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.45)] text-white transform transition-all duration-300 ease-out animate-slide-in-right",
  toastSuccess: "bg-[#064e3b] border-l-4 border-emerald-400 text-white",
  toastInfo: "bg-[#7a0f22] border-l-4 border-rose-500 text-white",
  toastMessage: "text-sm font-medium",

  // Delete Confirmation Toast
  confirmToastContainer:
    "bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-stone-200 p-4 flex items-center space-x-4 min-w-70 sm:min-w-[320px] animate-slide-in-right",
  confirmIconWrapper: "shrink-0",
  confirmIcon: "w-6 h-6 text-[#C8102E]",
  confirmContent: "flex-1",
  confirmTitle: "text-sm font-medium text-stone-900",
  confirmSubtitle: "text-xs text-stone-500 mt-1",
  confirmActions: "flex space-x-2",
  cancelBtn:
    "px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 rounded-md hover:bg-stone-200 transition-all duration-200 hover:shadow",
  deleteConfirmBtn:
    "px-3 py-1.5 text-xs font-medium text-white bg-linear-to-r from-red-500 to-red-600 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105",

  // Header
  title:
    "text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F5304B] to-[#D4293F] mb-8",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6",
  loadingContainer: "col-span-full flex justify-center py-20",
  spinner: "w-10 h-10 text-[#F5304B] animate-spin",
  emptyContainer:
    "col-span-full text-center py-20 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-dashed border-stone-300",
  emptyText: "text-stone-500",

  // Role Card (View Mode)
  cardBase:
    "group relative bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border-2 border-transparent",
  cardEditingBorder: "border-[#D4293F] ring-2 ring-[#7A0F22]",
  cardHoverBorder: "hover:border-stone-300",

  // Edit Mode Container
  editContainer: "p-3 sm:p-4 space-y-3 bg-white rounded-xl relative z-10",

  // Image Upload Row
  imageRow:
    "flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0",
  imagePreviewCircle:
    "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2B0810] flex items-center justify-center overflow-hidden shrink-0 ring-2 ring-[#7A0F22]",
  imagePreviewImg: "w-full h-full object-cover",
  imageIcon: "w-5 h-5 text-[#F5304B]",
  browseLabel:
    "flex-1 cursor-pointer bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-1.5 px-2 rounded-lg text-xs text-center transition-all duration-200 hover:shadow",
  fileInputHidden: "hidden",

  // Form Fields
  formLabel: "block text-xs font-medium text-stone-600 mb-1",
  formInput:
    "w-full px-2 py-1.5 border border-stone-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#7A0F22] focus:border-[#F5304B] transition-all bg-white",

  // CSV File Row
  csvRow: "flex items-center space-x-1",
  csvDisplaySpan:
    "text-xs text-stone-400 truncate flex-1 px-2 py-1.5 border border-stone-300 rounded-lg bg-[#09090B]",
  csvBrowseLabel:
    "cursor-pointer bg-stone-200 hover:bg-stone-300 rounded-lg px-2 py-1.5 text-xs font-medium transition-all duration-200 hover:shadow text-stone-700",

  // Edit Actions
  editActions: "flex justify-end space-x-1 pt-1",
  cancelButton:
    "flex cursor-pointer items-center space-x-1 px-2 py-1.5 text-xs font-medium text-stone-700 bg-stone-200 rounded-lg hover:bg-stone-300 transition-all duration-200 hover:shadow",
  saveButton:
    "flex cursor-pointer items-center space-x-1 px-2 py-1.5 text-xs font-medium text-white bg-linear-to-r from-[#F5304B] to-[#D4293F] rounded-lg hover:from-[#D4293F] hover:to-[#7A0F22] transition-all duration-200 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
  saveSpinner: "animate-spin",

  // View Mode Container
  viewContainer: "p-3 sm:p-4 bg-white rounded-xl relative z-10",
  viewHeader: "flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3",
  viewImageCircle:
    "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2B0810] flex items-center justify-center overflow-hidden ring-2 ring-[#7A0F22] shrink-0",
  viewImage: "w-full h-full object-cover",
  viewContent: "flex-1 min-w-0 mt-2 sm:mt-0",
  viewRoleName: "text-sm font-semibold text-stone-800 truncate",
  viewQuestionsCount: "text-xs text-stone-500 flex items-center",
  greenDot: "inline-block w-2 h-2 rounded-full bg-green-400 mr-1",

  // CSV Info
  csvInfoRow:
    "flex items-center space-x-1 text-xs text-stone-400 bg-[#09090B] p-1.5 rounded-lg truncate border border-stone-200",
  csvLink: "truncate text-[#D4293F] hover:underline",
  csvNoLink: "truncate",

  // Action Buttons
  actionButtons: "flex justify-end space-x-1 mt-3",
  editButton:
    "p-1.5 cursor-pointer text-[#D4293F] bg-[#2B0810] rounded-lg hover:bg-[#7A0F22] transition-all duration-200 hover:shadow-md transform hover:scale-110",
  deleteButton:
    "p-1.5 cursor-pointer text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-all duration-200 hover:shadow-md transform hover:scale-110",
};

export const listJobsStyles = {
  // Main container
  container: "min-h-screen font-sans bg-[#09090B] p-6",
  contentWrapper: "max-w-7xl mx-auto",

  // Header
  header:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4",
  headerTitle:
    "text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F5304B] to-[#D4293F]",
  headerRight: "flex items-center gap-3 w-full sm:w-auto",

  // Filter
  filterContainer:
    "flex items-center gap-2 bg-white border border-stone-200 px-3 py-2 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.3)] w-full sm:w-auto",
  filterInput:
    "outline-none text-sm placeholder:text-stone-400 w-full min-w-0 text-stone-700",
  filterClearBtn: "text-stone-400 hover:text-stone-600 shrink-0",

  // Badge
  badgeDefault: "bg-stone-100 text-stone-700",
  badgeTech: "bg-[#7A0F22] text-[#F5304B]",
  badgeLocation: "bg-emerald-50 text-emerald-700",
  badgeBase:
    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium shadow-sm",
  badgeShrink: "shrink-0",

  // Grid
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch",

  // Job Card
  jobCard:
    "group relative bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 border border-stone-200 overflow-hidden h-full flex flex-col",
  jobCardGradientBar:
    "absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#F5304B] to-[#D4293F]",
  jobCardContent: "p-6 flex-1 flex flex-col",

  // Job Header (Image + Details)
  jobHeader: "flex flex-col sm:flex-row gap-5",
  jobImageContainer: "relative shrink-0 self-center sm:self-start",
  jobImageWrapper:
    "w-24 h-24 rounded-xl overflow-hidden border-2 border-white shadow-md bg-[#09090B]",
  jobImage: "w-full h-full object-cover",
  jobImageBadge:
    "absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md",
  jobImageBadgeIcon: "text-[#F5304B]",

  // Job Details
  jobDetails: "flex-1 min-w-0",
  jobTitleRow: "flex items-start justify-between gap-2 flex-wrap",
  jobTitle:
    "text-xl font-bold text-stone-900 group-hover:text-[#D4293F] transition-colors",
  jobCompany: "text-stone-500 flex items-center gap-1 mt-0.5",
  jobSalary:
    "text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full whitespace-nowrap",

  // Tech Stack
  techStackContainer: "mt-3 flex flex-wrap gap-1.5",
  techBadge: "max-w-full",

  // Job Meta Info
  jobMetaGrid: "mt-4 grid grid-cols-2 gap-2 text-sm",
  jobMetaItem: "flex items-center gap-1.5 text-stone-600",
  jobMetaIcon: "text-stone-400 shrink-0",
  jobMetaText: "truncate",

  // Overview
  jobOverview: "mt-3 text-sm text-stone-500 line-clamp-2",

  // Job Sections (Responsibilities, Criteria, Education)
  jobSections:
    "mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",
  sectionTitle: "font-semibold text-stone-800 mb-1 flex items-center gap-1",
  sectionIcon: "text-[#F5304B] shrink-0",
  sectionList: "list-disc list-inside text-stone-500 space-y-0.5",
  sectionListItem: "truncate",

  // Job Actions
  jobActions: "flex items-center gap-2 mt-auto pt-4",
  editBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#2B0810] text-[#D4293F] hover:bg-[#7A0F22] transition-colors text-sm font-medium",
  applicantsBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors text-sm font-medium",
  deleteBtn:
    "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors text-sm font-medium",

  // Modal
  modalOverlay:
    "fixed inset-0 z-50 flex items-start justify-center pt-10 px-4 bg-black/40 backdrop-blur-sm",
  modalBackdrop: "absolute inset-0 transition-opacity",
  modalContainer:
    "relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 animate-slideUp ring-1 ring-stone-100",

  // Modal Header
  modalHeader:
    "bg-[#09090B] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl flex items-center justify-between flex-col md:flex-row gap-2 md:gap-0",
  modalTitleContainer: "",
  modalTitle: "text-xl font-bold flex items-center gap-2",
  modalSubtitle: "text-sm text-white/80 mt-1",
  modalCloseBtn: "rounded-full p-1.5 hover:bg-white/20 transition-colors",

  // Modal Content
  modalContent: "p-4 sm:p-6 space-y-6",

  // Section Containers
  sectionContainer: "bg-white p-5 rounded-xl border border-stone-200 shadow-sm",
  sectionContainerDark: "bg-[#09090B] p-5 rounded-xl border border-stone-200",
  sectionHeader:
    "text-sm font-semibold text-stone-700 mb-4 flex items-center gap-2",
  sectionHeaderIcon: "text-[#F5304B]",
  sectionSubHeader:
    "text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2",

  // Form Grid
  formGrid2: "grid grid-cols-1 md:grid-cols-2 gap-4",

  // Field
  fieldContainer: "mb-2",
  fieldLabel:
    "block text-xs font-medium text-stone-500 mb-1 items-center gap-2",
  fieldWrapper:
    "p-2 rounded-lg border border-transparent bg-[#09090B] transition-shadow duration-200 ease-in-out focus-within:ring-1 focus-within:ring-[#7A0F22] focus-within:shadow-lg",

  // Inputs
  input:
    "w-full rounded-md bg-white border-none outline-none px-2 py-2 text-stone-700",
  inputWithBorder:
    "w-full min-w-0 rounded-md bg-white border border-stone-200 px-2 py-2 text-sm text-stone-700",
  select:
    "w-full rounded-md bg-white border-none outline-none px-2 py-2 cursor-pointer text-stone-700",
  textarea:
    "w-full rounded-md bg-white border-none outline-none px-2 py-2 text-stone-700",

  // Image Upload
  imageUploadContainer: "flex flex-col sm:flex-row items-center gap-5",
  imagePreviewWrapper: "relative group",
  imagePreview:
    "w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-[#09090B] flex items-center justify-center",
  imagePreviewImg: "w-full h-full object-cover",
  imageUploadActions: "flex-1 w-full",
  imageUploadButtons: "flex flex-col sm:flex-row items-center gap-3",
  imageUploadText: "flex-1",
  imageUploadInfo: "text-sm text-stone-700 mb-1",
  imageUploadBrowse: "underline font-medium text-[#D4293F]",
  imageUploadStatus: "text-xs text-stone-500",
  imageUploadBtnGroup: "flex gap-2",
  browseBtn:
    "px-3 py-2 cursor-pointer rounded-md bg-[#2B0810] text-[#D4293F] hover:bg-[#7A0F22] text-sm",
  removeBtn:
    "px-3 cursor-pointer py-2 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 text-sm",
  hiddenInput: "hidden",

  // Badge Lists
  badgeList: "flex flex-wrap gap-2 mb-2",
  badgeItem: "inline-flex items-center min-w-0 max-w-full",
  badgeText: "ml-1 break-all whitespace-normal max-w-full",

  // Add Item Input
  addItemContainer: "flex items-center gap-2 flex-wrap",
  addItemInput:
    "flex-1 min-w-0 w-full sm:w-auto rounded-md bg-white border-none outline-none px-2 py-2 text-sm text-stone-700",
  addItemBtn:
    "p-2 bg-[#2B0810] text-[#D4293F] rounded-lg hover:bg-[#7A0F22] shrink-0",

  // List Items
  listContainer: "space-y-1 mb-3",
  listItem: "flex items-start gap-2 text-sm text-stone-700 min-w-0",
  listItemBullet: "text-[#F5304B] mt-0.5",
  listItemText: "flex-1 min-w-0 wrap-break-word whitespace-normal",
  listItemRemoveBtn: "text-stone-400 hover:text-rose-600 ml-2 shrink-0",

  // Location Edit
  locationItem: "flex items-center gap-2",
  locationInput:
    "flex-1 min-w-0 rounded-md bg-white border border-stone-200 px-2 py-2 text-sm text-stone-700",
  locationSaveBtn:
    "px-3 py-2 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm",
  locationCancelBtn:
    "px-3 py-2 rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200 text-sm",
  locationEditBtn: "p-2 rounded-md hover:bg-stone-100 text-stone-600",
  locationRemoveBtn: "p-2 rounded-md hover:bg-stone-100 text-stone-600",

  // Salary Input
  salaryContainer: "flex items-center gap-2 flex-wrap",
  salaryAmountInput:
    "w-32 min-w-0 rounded-md bg-white border-none outline-none px-2 py-2 text-stone-700",
  salaryPeriodSelect:
    "rounded-md bg-white border-none outline-none px-2 py-2 text-stone-700",

  // Modal Footer
  modalFooter:
    "sticky bottom-0 bg-[#09090B] px-4 sm:px-6 py-4 border-t border-stone-700 flex items-center justify-end gap-3 rounded-b-2xl",
  modalCancelBtn:
    "px-5 py-2.5 rounded-lg border border-stone-700 text-stone-400 hover:bg-[#2B0810] transition-colors font-medium",
  modalSaveBtn:
    "px-5 py-2.5 rounded-lg bg-linear-to-r from-[#F5304B] to-[#D4293F] text-white hover:from-[#D4293F] hover:to-[#7A0F22] transition-all font-medium shadow-md flex items-center gap-2",
  modalSaveBtnDisabled: "opacity-70 cursor-not-allowed",

  // Toast
  toastContainer: "fixed right-6 bottom-6 z-50 animate-slideUp",
  toastContent:
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.45)] border-l-4",
  toastSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastError: "bg-[#7a0f22] text-white border-rose-500",
  toastIconSuccess: "text-emerald-400",
  toastIconError: "text-rose-400",
  toastText: "font-medium text-white",

  // Animations
  animations: `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideUp { animation: slideUp 240ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards; }
  `,
};

// Badge variants helper
export const getBadgeClasses = (variant, baseClass) => {
  const variants = {
    default: "bg-stone-100 text-stone-600",
    tech: "bg-[#7A0F22] text-[#F5304B]",
    location: "bg-emerald-50 text-emerald-700",
  };
  return `${baseClass} ${variants[variant] || variants.default}`;
};

export const loginPageStyles = {
  // Layout
  pageContainer:
    "min-h-screen w-full flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#C8102E] to-[#E53935] font-sans antialiased selection:bg-rose-500/30 selection:text-rose-950",

  // Toast
  toastContainer:
    "fixed top-5 right-5 flex items-center gap-3 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-4 border-l-4 w-80 z-50 animate-fade-in",
  toastBorderSuccess: "bg-[#064e3b] text-white border-emerald-400",
  toastBorderError: "bg-[#7a0f22] text-white border-rose-400",
  toastIconSuccess: "text-emerald-400 shrink-0",
  toastIconError: "text-rose-400 shrink-0",
  toastMessage: "flex-1 text-white text-sm font-medium",
  toastCloseBtn: "text-white/70 hover:text-white transition-colors shrink-0",

  // Card Outer Ring
  cardContainer:
    "relative w-full max-w-[460px] p-2 bg-white/5 backdrop-blur-[2px] rounded-[32px] shadow-2xl transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(200,16,46,0.2)] border border-white/10",

  // Card Inner
  card: "bg-white rounded-[24px] p-8 md:p-10 flex flex-col items-center w-full relative z-10 border border-white/20",

  // Logo Container
  logoSection: "mb-6 flex justify-center items-center",

  // Subtitle
  subtitle:
    "text-gray-500 text-[14px] font-medium tracking-tight mb-8 text-center",

  // Form
  form: "w-full",

  // Input styling
  labelRow: "flex justify-between items-center mb-2",
  label: "font-semibold text-gray-800 text-[13px]",
  helperLink:
    "text-[13px] text-gray-500 hover:text-[#C8102E] hover:underline transition-colors focus:outline-none cursor-pointer",

  inputWrapper: "relative mb-4",
  inputBase:
    "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/10 transition-all duration-200",
  inputPr12: "pr-11",

  // Eye toggle
  eyeButtonWrapper: "absolute inset-y-0 right-0 pr-3.5 flex items-center",
  eyeButton:
    "p-1 rounded-lg cursor-pointer text-gray-400 hover:text-[#C8102E] transition-colors focus:outline-none",

  // Buttons
  submitBtn:
    "w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-[14px] flex items-center justify-center gap-2 mb-6 cursor-pointer",
  submitBtnActive: "bg-black text-white hover:bg-zinc-800 active:scale-[0.98]",
  submitBtnDisabled: "bg-zinc-100 text-zinc-400 cursor-not-allowed",

  // Footer inside card
  cardFooter: "flex justify-between w-full mt-8 border-t border-gray-100 pt-5",
  footerLink:
    "text-[12px] text-gray-400 hover:text-gray-600 transition-colors focus:outline-none cursor-pointer",

  // Animations
  animations: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleUp {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-scale-up {
      animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `,
};

export const navbarStyles = {
  // Header
  header: "w-full font-sans sticky top-0 z-50",

  // Nav
  nav: "bg-[#09090B] border-b border-[#2B0810]",
  navContainer: "max-w-10xl mx-auto px-4 sm:px-6 lg:px-6",
  navContent: "flex items-center justify-between gap-3 h-20 lg:h-24",

  // Logo Section
  logoContainer:
    "flex min-w-0 items-center gap-1 group cursor-pointer shrink-0",
  logoWrapper: "relative p-2 transition-shadow",
  logoImage: "w-12 h-12 object-cover",
  logoFallback:
    "w-12 h-12 flex items-center justify-center text-2xl font-bold text-[#F5304B]",
  logoTextContainer: "flex min-w-0 flex-col",
  logoBrandName:
    "font-semibold text-md leading-tight text-white xl:text-sm min-[1407px]:text-md",
  logoSubtitle: "text-xs text-stone-400 min-[1407px]:block",

  // Desktop Navigation — flex-1 + mx-auto centers it, min-w-0 prevents overflow
  desktopNav:
    "hidden min-[1407px]:flex min-[1407px]:flex-1 min-[1407px]:mx-auto min-[1407px]:min-w-0 min-[1407px]:justify-center",
  navIndicatorContainer: "relative",
  activeIndicator:
    "absolute -bottom-2 h-1 rounded-full bg-[#F5304B] transition-all duration-300 ease-out",
  navList: "flex items-center gap-1",

  // Nav Items
  navItem: "relative",
  navItemWrapper: "flex items-center",
  navButton:
    "flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap",
  navButtonActive: "text-white bg-[#2B0810] shadow-sm",
  navButtonInactive: "text-stone-400 hover:text-white hover:bg-[#2B0810]",
  navButtonIcon: "w-5 h-5",
  navButtonText: "whitespace-nowrap",
  navDropdownIcon: "w-4 h-4 text-stone-500",

  // Sub Nav Items (XL mode)
  subNavItem: "relative",
  subNavButton:
    "flex cursor-pointer items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
  subNavButtonActive: "text-[#F5304B] bg-[#2B0810] shadow-sm",
  subNavButtonInactive: "text-stone-400 hover:text-white hover:bg-[#2B0810]",
  subNavDot: "w-1.5 h-1.5 rounded-full bg-[#F5304B]",

  // Dropdown Panel (LG mode)
  dropdownPanel:
    "absolute left-1/2 top-full mt-2 z-50 rounded-xl transition-all duration-150 transform -translate-x-1/2",
  dropdownVisible: "opacity-100 translate-y-0 pointer-events-auto",
  dropdownHidden: "opacity-0 -translate-y-2 pointer-events-none",
  dropdownCaret:
    "absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white",
  dropdownContent: "rounded-xl p-0.5",
  dropdownInner:
    "bg-white dark:bg-[#131316] rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-stone-200/80 dark:border-[#2B0810] overflow-hidden min-w-55",
  dropdownItem:
    "w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-2",
  dropdownItemActive: "bg-[#2B0810] text-[#D4293F] font-medium",
  dropdownItemInactive:
    "text-stone-700 dark:text-stone-300 hover:bg-rose-50 dark:hover:bg-[#2B0810]/50 hover:text-rose-600 dark:hover:text-[#F5304B]",
  dropdownItemDot: "w-2 h-2 rounded-full bg-[#F5304B]",

  // Right Side Actions
  rightActions: "flex shrink-0 items-center gap-3",
  desktopAuth: "hidden md:flex items-center gap-3 shrink-0",

  // Theme Toggle Button
  themeToggleBtn:
    "hidden md:flex p-2.5 rounded-xl text-stone-500 hover:text-[#F5304B] hover:bg-[#2B0810] transition-colors cursor-pointer items-center justify-center",
  themeToggleIcon: "w-5 h-5",

  // User Menu
  userMenuContainer: "relative",
  userMenuButton:
    "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2B0810] border border-[#2B0810] text-stone-900 dark:text-rose-100 cursor-pointer transition-all duration-300 hover:opacity-90 shadow-xs font-semibold",
  userIcon: "w-5 h-5 text-[#F5304B] group-hover:scale-105 transition-transform",
  userName:
    "text-sm font-semibold max-w-28 truncate text-stone-100 dark:text-rose-100",
  userDropdownIcon: "w-4 h-4 text-[#F5304B] opacity-70",
  userDropdown:
    "absolute right-0 mt-2 w-48 rounded-xl z-50 overflow-hidden transition-all duration-200 transform origin-top-right",
  userDropdownVisible: "opacity-100 translate-y-0 pointer-events-auto",
  userDropdownHidden: "opacity-0 -translate-y-2 pointer-events-none",
  userDropdownInner:
    "bg-[#131316] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-[#2B0810] p-2 overflow-hidden",
  logoutButton:
    "group w-full cursor-pointer text-left px-4 py-2.5 text-sm font-bold flex items-center gap-2.5 transition-all duration-200 rounded-xl bg-transparent hover:bg-[#2B0810] text-stone-100 dark:text-stone-300 hover:text-[#F5304B] dark:hover:text-[#F5304B]",
  logoutIcon:
    "w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-[#F5304B] transition-colors",

  // Login Button
  loginButton:
    "group cursor-pointer relative overflow-hidden px-5 py-2.5 rounded-xl bg-[#F5304B] text-white text-sm font-medium shadow-md hover:bg-[#D4293F] transition-colors duration-200",
  loginButtonOverlay:
    "absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500",
  loginButtonContent: "relative flex items-center gap-2",
  loginIcon: "w-5 h-5",

  // Mobile Menu Button
  mobileMenuButton:
    "flex md:hidden p-2.5 rounded-xl text-white hover:bg-[#2B0810] transition-colors",
  mobileMenuIcon: "w-6 h-6",

  // Mobile Menu
  mobileMenu: "md:hidden py-3 border-t border-[#2B0810]",
  mobileMenuContent: "flex flex-col gap-1",

  // Mobile Nav Items
  mobileNavItem: "space-y-1",
  mobileNavButton:
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all",
  mobileNavButtonActive: "bg-[#2B0810] text-white",
  mobileNavButtonInactive: "text-stone-300 hover:bg-[#2B0810] hover:text-white",
  mobileNavIcon: "w-5 h-5",
  mobileNavText: "text-sm font-medium flex-1",

  // Mobile User Info
  mobileUserInfo:
    "flex items-center gap-3 px-3 py-2 border-t border-[#2B0810] mt-2",
  mobileUserInfoContent: "flex items-center gap-2 text-sm text-stone-300",

  // Mobile Logout Button
  mobileLogoutButton:
    "flex items-center gap-2 w-full px-3 py-2.5 mt-1 rounded-xl text-stone-300 hover:text-white hover:bg-[#2B0810] transition-colors",

  // Mobile Login Container
  mobileLoginContainer: "px-3 mt-2",
  mobileLoginButton:
    "flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#F5304B] text-white font-medium hover:bg-[#D4293F] transition-colors",

  // Mobile Right Section (theme toggle)
  mobileRightSection:
    "flex items-center gap-3 px-3 py-2 border-t border-[#2B0810] mt-2 pt-3",
  mobileThemeToggleBtn:
    "flex p-2.5 rounded-xl text-stone-400 hover:text-[#F5304B] hover:bg-[#2B0810] transition-colors cursor-pointer items-center justify-center",
  mobileHeaderThemeBtn:
    "flex lg:hidden items-center justify-center p-2 rounded-lg text-stone-400 hover:text-white hover:bg-[#2B0810] transition-all duration-200 cursor-pointer",

  // Mobile Dropdown
  mobileDropdown: "ml-8 flex flex-col gap-1 border-l border-[#7A0F22] pl-2",
  mobileDropdownItem:
    "w-full text-left px-3 py-2 rounded-lg text-sm transition-all",
  mobileDropdownItemActive: "bg-[#2B0810] text-[#F5304B] font-medium",
  mobileDropdownItemInactive:
    "text-stone-300 hover:bg-[#2B0810] hover:text-white",

  // Animations (empty string so <style> tag doesn't error)
  animations: "",
};
