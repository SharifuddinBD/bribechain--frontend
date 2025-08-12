(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/report/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ReportPage = ()=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        incidentType: '',
        amount: '',
        currency: 'BDT',
        date: '',
        location: {
            country: '',
            city: '',
            address: ''
        },
        organization: {
            name: '',
            type: '',
            department: ''
        },
        description: '',
        evidence: [],
        additionalInfo: '',
        anonymousLevel: 'full'
    });
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedHash, setGeneratedHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // City dropdown state
    const [showCityDropdown, setShowCityDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filteredCities, setFilteredCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cityDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportPage.useEffect": ()=>{
            setIsVisible(true);
        }
    }["ReportPage.useEffect"], []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportPage.useEffect": ()=>{
            const handleClickOutside = {
                "ReportPage.useEffect.handleClickOutside": (event)=>{
                    if (cityDropdownRef.current && event.target instanceof Node && !cityDropdownRef.current.contains(event.target)) {
                        setShowCityDropdown(false);
                    }
                }
            }["ReportPage.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ReportPage.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["ReportPage.useEffect"];
        }
    }["ReportPage.useEffect"], []);
    const bangladeshCities = [
        // Dhaka Division
        {
            name: 'Dhaka',
            division: 'Dhaka Division'
        },
        {
            name: 'Gazipur',
            division: 'Dhaka Division'
        },
        {
            name: 'Kishoreganj',
            division: 'Dhaka Division'
        },
        {
            name: 'Manikganj',
            division: 'Dhaka Division'
        },
        {
            name: 'Munshiganj',
            division: 'Dhaka Division'
        },
        {
            name: 'Narayanganj',
            division: 'Dhaka Division'
        },
        {
            name: 'Narsingdi',
            division: 'Dhaka Division'
        },
        {
            name: 'Faridpur',
            division: 'Dhaka Division'
        },
        {
            name: 'Gopalganj',
            division: 'Dhaka Division'
        },
        {
            name: 'Madaripur',
            division: 'Dhaka Division'
        },
        {
            name: 'Rajbari',
            division: 'Dhaka Division'
        },
        {
            name: 'Shariatpur',
            division: 'Dhaka Division'
        },
        {
            name: 'Tangail',
            division: 'Dhaka Division'
        },
        // Chattogram Division
        {
            name: 'Chattogram',
            division: 'Chattogram Division'
        },
        {
            name: "Cox's Bazar",
            division: 'Chattogram Division'
        },
        {
            name: 'Bandarban',
            division: 'Chattogram Division'
        },
        {
            name: 'Khagrachhari',
            division: 'Chattogram Division'
        },
        {
            name: 'Rangamati',
            division: 'Chattogram Division'
        },
        {
            name: 'Feni',
            division: 'Chattogram Division'
        },
        {
            name: 'Noakhali',
            division: 'Chattogram Division'
        },
        {
            name: 'Lakshmipur',
            division: 'Chattogram Division'
        },
        {
            name: 'Chandpur',
            division: 'Chattogram Division'
        },
        {
            name: 'Cumilla',
            division: 'Chattogram Division'
        },
        {
            name: 'Brahmanbaria',
            division: 'Chattogram Division'
        },
        // Sylhet Division
        {
            name: 'Sylhet',
            division: 'Sylhet Division'
        },
        {
            name: 'Moulvibazar',
            division: 'Sylhet Division'
        },
        {
            name: 'Habiganj',
            division: 'Sylhet Division'
        },
        {
            name: 'Sunamganj',
            division: 'Sylhet Division'
        },
        // Barishal Division
        {
            name: 'Barishal',
            division: 'Barishal Division'
        },
        {
            name: 'Jhalokati',
            division: 'Barishal Division'
        },
        {
            name: 'Patuakhali',
            division: 'Barishal Division'
        },
        {
            name: 'Pirojpur',
            division: 'Barishal Division'
        },
        {
            name: 'Bhola',
            division: 'Barishal Division'
        },
        {
            name: 'Barguna',
            division: 'Barishal Division'
        },
        // Khulna Division
        {
            name: 'Khulna',
            division: 'Khulna Division'
        },
        {
            name: 'Bagerhat',
            division: 'Khulna Division'
        },
        {
            name: 'Satkhira',
            division: 'Khulna Division'
        },
        {
            name: 'Jashore',
            division: 'Khulna Division'
        },
        {
            name: 'Magura',
            division: 'Khulna Division'
        },
        {
            name: 'Narail',
            division: 'Khulna Division'
        },
        {
            name: 'Kushtia',
            division: 'Khulna Division'
        },
        {
            name: 'Meherpur',
            division: 'Khulna Division'
        },
        {
            name: 'Chuadanga',
            division: 'Khulna Division'
        },
        {
            name: 'Jhenaidah',
            division: 'Khulna Division'
        },
        // Rajshahi Division
        {
            name: 'Rajshahi',
            division: 'Rajshahi Division'
        },
        {
            name: 'Natore',
            division: 'Rajshahi Division'
        },
        {
            name: 'Naogaon',
            division: 'Rajshahi Division'
        },
        {
            name: 'Chapai Nawabganj',
            division: 'Rajshahi Division'
        },
        {
            name: 'Pabna',
            division: 'Rajshahi Division'
        },
        {
            name: 'Sirajganj',
            division: 'Rajshahi Division'
        },
        {
            name: 'Bogura',
            division: 'Rajshahi Division'
        },
        {
            name: 'Joypurhat',
            division: 'Rajshahi Division'
        },
        // Rangpur Division
        {
            name: 'Rangpur',
            division: 'Rangpur Division'
        },
        {
            name: 'Dinajpur',
            division: 'Rangpur Division'
        },
        {
            name: 'Lalmonirhat',
            division: 'Rangpur Division'
        },
        {
            name: 'Kurigram',
            division: 'Rangpur Division'
        },
        {
            name: 'Gaibandha',
            division: 'Rangpur Division'
        },
        {
            name: 'Thakurgaon',
            division: 'Rangpur Division'
        },
        {
            name: 'Panchagarh',
            division: 'Rangpur Division'
        },
        {
            name: 'Nilphamari',
            division: 'Rangpur Division'
        },
        // Mymensingh Division
        {
            name: 'Mymensingh',
            division: 'Mymensingh Division'
        },
        {
            name: 'Jamalpur',
            division: 'Mymensingh Division'
        },
        {
            name: 'Sherpur',
            division: 'Mymensingh Division'
        },
        {
            name: 'Netrokona',
            division: 'Mymensingh Division'
        }
    ];
    const handleInputChange = (field, value, nested = null)=>{
        if (nested) {
            setFormData((prev)=>({
                    ...prev,
                    [nested]: {
                        ...prev[nested],
                        [field]: value
                    }
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [field]: value
                }));
        }
    };
    const handleCityInputChange = (value)=>{
        handleInputChange('city', value, 'location');
        if (value.trim()) {
            const filtered = bangladeshCities.filter((city)=>city.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredCities(filtered);
            setShowCityDropdown(true);
        } else {
            setFilteredCities([]);
            setShowCityDropdown(false);
        }
    };
    const selectCity = (cityName)=>{
        handleInputChange('city', cityName, 'location');
        setShowCityDropdown(false);
        setFilteredCities([]);
    };
    const handleCityFocus = ()=>{
        if (formData.location.city.trim()) {
            const filtered = bangladeshCities.filter((city)=>city.name.toLowerCase().includes(formData.location.city.toLowerCase()));
            setFilteredCities(filtered);
        } else {
            setFilteredCities(bangladeshCities);
        }
        setShowCityDropdown(true);
    };
    const groupedCities = filteredCities.reduce((acc, city)=>{
        if (!acc[city.division]) {
            acc[city.division] = [];
        }
        acc[city.division].push(city);
        return acc;
    }, {});
    const handleFileUpload = (event)=>{
        const newFiles = Array.from(event.target.files || []);
        setFiles((prev)=>[
                ...prev,
                ...newFiles
            ]);
    };
    const removeFile = (index)=>{
        setFiles((prev)=>prev.filter((_, i)=>i !== index));
    };
    const generateHash = ()=>{
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        return `0x${timestamp.toString(16)}${randomString}`;
    };
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        // Simulate blockchain submission delay
        setTimeout(()=>{
            const hash = generateHash();
            setGeneratedHash(hash);
            setIsSubmitting(false);
            setSubmitted(true);
        }, 3000);
    };
    const incidentTypes = [
        'Government Official Bribery',
        'Police Corruption',
        'Judicial Corruption',
        'Healthcare Bribery',
        'Education Sector Corruption',
        'Business License Bribery',
        'Construction/Permit Corruption',
        'Tax Evasion Facilitation',
        'Customs/Border Corruption',
        'Other'
    ];
    const currencies = [
        'BDT',
        'EUR',
        'GBP',
        'BTC',
        'ETH',
        'USD',
        'Local Currency'
    ];
    const organizationTypes = [
        'Government',
        'Private Company',
        'NGO',
        'Educational Institution',
        'Healthcare',
        'Law Enforcement',
        'Judicial',
        'Other'
    ];
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto text-center animate-fade-in-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-20 w-20 text-green-400 mx-auto mb-8 animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-6",
                            children: "Report Successfully Submitted"
                        }, void 0, false, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-300 mb-8",
                            children: "Your report has been encrypted and permanently stored on the blockchain. Your identity remains completely anonymous."
                        }, void 0, false, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-green-400 mb-2",
                                    children: "Blockchain Hash"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-green-300 text-sm break-all bg-black/30 px-4 py-2 rounded-lg block",
                                    children: generatedHash
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Save this hash to verify your report's authenticity later"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSubmitted(false);
                                        setFormData({
                                            incidentType: '',
                                            amount: '',
                                            currency: 'USD',
                                            date: '',
                                            location: {
                                                country: '',
                                                city: '',
                                                address: ''
                                            },
                                            organization: {
                                                name: '',
                                                type: '',
                                                department: ''
                                            },
                                            description: '',
                                            evidence: [],
                                            additionalInfo: '',
                                            anonymousLevel: 'full'
                                        });
                                        setFiles([]);
                                        setCurrentStep(1);
                                    },
                                    className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105",
                                    children: "Submit Another Report"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl font-semibold transition-all duration-300",
                                    children: "Browse Reports"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/report/page.tsx",
                    lineNumber: 302,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/report/page.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/report/page.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7e0284ea805a49b8" + " " + "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-7e0284ea805a49b8" + " " + "bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-7e0284ea805a49b8" + " " + "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7e0284ea805a49b8" + " " + "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e0284ea805a49b8" + " " + `flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-2 text-gray-300 hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: "Back to Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e0284ea805a49b8" + " " + `flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-8 w-8 text-cyan-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7e0284ea805a49b8" + " " + "text-2xl font-bold text-white",
                                        children: "BribeChain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e0284ea805a49b8" + " " + `flex items-center space-x-3 text-green-400 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7e0284ea805a49b8" + " " + "text-sm",
                                        children: "Secure & Anonymous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/report/page.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/report/page.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/report/page.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7e0284ea805a49b8" + " " + "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7e0284ea805a49b8" + " " + `text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-7e0284ea805a49b8" + " " + "text-4xl md:text-6xl font-bold text-white mb-6",
                                children: "Submit Anonymous Report"
                            }, void 0, false, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7e0284ea805a49b8" + " " + "text-xl text-gray-300 max-w-3xl mx-auto mb-8",
                                children: "Your identity is completely protected. Help fight corruption by reporting incidents anonymously through our secure blockchain platform."
                            }, void 0, false, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7e0284ea805a49b8" + " " + "bg-green-500/10 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7e0284ea805a49b8" + " " + "flex items-center justify-center space-x-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-6 w-6 text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/report/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7e0284ea805a49b8" + " " + "text-green-400 font-semibold",
                                                children: "100% Anonymous & Encrypted"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/report/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7e0284ea805a49b8" + " " + "text-green-300 text-sm",
                                        children: "No personal information is collected. Your report is encrypted and stored on blockchain."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/report/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/report/page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7e0284ea805a49b8" + " " + `flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-4",
                            children: [
                                1,
                                2,
                                3
                            ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + `w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${currentStep >= step ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-white/10 text-gray-400'}`,
                                            children: step
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        step < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + `w-16 h-1 rounded transition-all duration-300 ${currentStep > step ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-white/10'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/report/page.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7e0284ea805a49b8" + " " + `bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7e0284ea805a49b8" + " " + "p-8 md:p-12",
                            children: [
                                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "space-y-8 animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "text-3xl font-bold text-white mb-8",
                                            children: "Incident Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Type of Incident *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.incidentType,
                                                    onChange: (e)=>handleInputChange('incidentType', e.target.value),
                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "jsx-7e0284ea805a49b8",
                                                            children: "Select incident type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 21
                                                        }, this),
                                                        incidentTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: type,
                                                                className: "jsx-7e0284ea805a49b8" + " " + "bg-gray-800",
                                                                children: type
                                                            }, type, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                            children: "Amount Involved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.amount,
                                                            onChange: (e)=>handleInputChange('amount', e.target.value),
                                                            placeholder: "Enter amount",
                                                            className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                            children: "Currency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.currency,
                                                            onChange: (e)=>handleInputChange('currency', e.target.value),
                                                            className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors",
                                                            children: currencies.map((currency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: currency,
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "bg-gray-800",
                                                                    children: currency
                                                                }, currency, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Date of Incident *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: formData.date,
                                                    onChange: (e)=>handleInputChange('date', e.target.value),
                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Detailed Description *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.description,
                                                    onChange: (e)=>handleInputChange('description', e.target.value),
                                                    placeholder: "Describe the incident in detail. Include who was involved, what happened, when it occurred, and any other relevant information.",
                                                    rows: 6,
                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "space-y-8 animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "text-3xl font-bold text-white mb-8",
                                            children: "Location & Organization"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-xl font-semibold text-white",
                                                    children: "Location Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e0284ea805a49b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                                    children: "Country *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.location.country,
                                                                    onChange: (e)=>handleInputChange('country', e.target.value, 'location'),
                                                                    placeholder: "Enter country",
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: cityDropdownRef,
                                                            className: "jsx-7e0284ea805a49b8" + " " + "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                                    children: "City"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: formData.location.city,
                                                                            onChange: (e)=>handleCityInputChange(e.target.value),
                                                                            onFocus: handleCityFocus,
                                                                            placeholder: "Enter or select city",
                                                                            className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 518,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 23
                                                                }, this),
                                                                showCityDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "absolute top-full left-0 right-0 z-50 mt-2 max-h-80 overflow-y-auto bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl",
                                                                    children: Object.keys(groupedCities).length > 0 ? Object.keys(groupedCities).map((division)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-7e0284ea805a49b8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-7e0284ea805a49b8" + " " + "px-4 py-2 text-sm font-semibold text-cyan-400 bg-black/50 sticky top-0",
                                                                                    children: division
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                                    lineNumber: 534,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                groupedCities[division].map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>selectCity(city.name),
                                                                                        className: "jsx-7e0284ea805a49b8" + " " + "w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0",
                                                                                        children: city.name
                                                                                    }, `${division}-${index}`, false, {
                                                                                        fileName: "[project]/src/app/report/page.tsx",
                                                                                        lineNumber: 538,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            ]
                                                                        }, division, true, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 533,
                                                                            columnNumber: 31
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7e0284ea805a49b8" + " " + "px-4 py-3 text-gray-400 text-center",
                                                                        children: "No cities found"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/report/page.tsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                            children: "Specific Address/Location (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.location.address,
                                                            onChange: (e)=>handleInputChange('address', e.target.value, 'location'),
                                                            placeholder: "Enter specific location (will be anonymized)",
                                                            className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-xl font-semibold text-white",
                                                    children: "Organization/Institution Involved"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                            children: "Organization Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: formData.organization.name,
                                                            onChange: (e)=>handleInputChange('name', e.target.value, 'organization'),
                                                            placeholder: "Name of organization/company (optional)",
                                                            className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e0284ea805a49b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                                    children: "Organization Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.organization.type,
                                                                    onChange: (e)=>handleInputChange('type', e.target.value, 'organization'),
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            className: "jsx-7e0284ea805a49b8",
                                                                            children: "Select type"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 590,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        organizationTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: type,
                                                                                className: "jsx-7e0284ea805a49b8" + " " + "bg-gray-800",
                                                                                children: type
                                                                            }, type, false, {
                                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                                lineNumber: 592,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e0284ea805a49b8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                                    children: "Department/Division"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 597,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.organization.department,
                                                                    onChange: (e)=>handleInputChange('department', e.target.value, 'organization'),
                                                                    placeholder: "Specific department",
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "space-y-8 animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "text-3xl font-bold text-white mb-8",
                                            children: "Evidence & Additional Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Upload Evidence (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "border-2 border-dashed border-white/20 hover:border-cyan-400/50 rounded-xl p-8 text-center transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "h-12 w-12 text-gray-400 mx-auto mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "text-gray-300 mb-4",
                                                            children: "Drop files here or click to upload"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            multiple: true,
                                                            onChange: handleFileUpload,
                                                            id: "file-upload",
                                                            accept: "image/*,audio/*,video/*,.pdf,.doc,.docx",
                                                            className: "jsx-7e0284ea805a49b8" + " " + "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "file-upload",
                                                            className: "jsx-7e0284ea805a49b8" + " " + "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer inline-block",
                                                            children: "Choose Files"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "text-sm text-gray-400 mt-2",
                                                            children: "Supports images, audio, video, PDF, and documents"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 19
                                                }, this),
                                                files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "mt-4 space-y-2",
                                                    children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "flex items-center justify-between bg-black/30 rounded-lg px-4 py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "h-5 w-5 text-cyan-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-7e0284ea805a49b8" + " " + "text-white text-sm",
                                                                            children: file.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 648,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-7e0284ea805a49b8" + " " + "text-gray-400 text-xs",
                                                                            children: [
                                                                                "(",
                                                                                (file.size / 1024 / 1024).toFixed(2),
                                                                                " MB)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/report/page.tsx",
                                                                            lineNumber: 649,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeFile(index),
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-red-400 hover:text-red-300 transition-colors",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 651,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 617,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Additional Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.additionalInfo,
                                                    onChange: (e)=>handleInputChange('additionalInfo', e.target.value),
                                                    placeholder: "Any additional context, witness information, or related incidents...",
                                                    rows: 4,
                                                    className: "jsx-7e0284ea805a49b8" + " " + "w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "block text-white font-semibold mb-3",
                                                    children: "Anonymity Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7e0284ea805a49b8" + " " + "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-3 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "anonymousLevel",
                                                                    value: "full",
                                                                    checked: formData.anonymousLevel === 'full',
                                                                    onChange: (e)=>handleInputChange('anonymousLevel', e.target.value),
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-white",
                                                                    children: "Full Anonymity (Recommended)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 688,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-3 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "anonymousLevel",
                                                                    value: "partial",
                                                                    checked: formData.anonymousLevel === 'partial',
                                                                    onChange: (e)=>handleInputChange('anonymousLevel', e.target.value),
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 691,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "text-white",
                                                                    children: "Allow Contact for Follow-up"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/report/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "flex justify-between items-center mt-12 pt-8 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(Math.max(1, currentStep - 1)),
                                            disabled: currentStep === 1,
                                            className: "jsx-7e0284ea805a49b8" + " " + `flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${currentStep === 1 ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7e0284ea805a49b8",
                                                    children: "Previous"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/report/page.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7e0284ea805a49b8" + " " + "flex items-center space-x-4",
                                            children: currentStep < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentStep(currentStep + 1),
                                                disabled: !formData.incidentType || !formData.date || !formData.description,
                                                className: "jsx-7e0284ea805a49b8" + " " + "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105",
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/report/page.tsx",
                                                lineNumber: 723,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowPreview(!showPreview),
                                                        className: "jsx-7e0284ea805a49b8" + " " + "bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2",
                                                        children: [
                                                            showPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 38
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 71
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8",
                                                                children: showPreview ? 'Hide' : 'Preview'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSubmit,
                                                        disabled: isSubmitting || !formData.incidentType || !formData.date || !formData.description,
                                                        className: "jsx-7e0284ea805a49b8" + " " + "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2",
                                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-7e0284ea805a49b8" + " " + "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7e0284ea805a49b8",
                                                                    children: "Submitting..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 747,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 751,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7e0284ea805a49b8",
                                                                    children: "Submit Report"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/report/page.tsx",
                                                                    lineNumber: 752,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/report/page.tsx",
                                            lineNumber: 721,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7e0284ea805a49b8" + " " + "fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7e0284ea805a49b8" + " " + "bg-black/90 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7e0284ea805a49b8" + " " + "flex justify-between items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-7e0284ea805a49b8" + " " + "text-2xl font-bold text-white",
                                                        children: "Report Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowPreview(false),
                                                        className: "jsx-7e0284ea805a49b8" + " " + "text-gray-400 hover:text-white transition-colors",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/report/page.tsx",
                                                lineNumber: 765,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7e0284ea805a49b8" + " " + "space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Incident Type:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 776,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white ml-2",
                                                                children: formData.incidentType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 775,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white ml-2",
                                                                children: [
                                                                    formData.amount,
                                                                    " ",
                                                                    formData.currency
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 784,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white ml-2",
                                                                children: formData.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Location:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 788,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white ml-2",
                                                                children: [
                                                                    formData.location.city,
                                                                    ", ",
                                                                    formData.location.country
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 789,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Description:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 792,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white mt-2",
                                                                children: formData.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 793,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7e0284ea805a49b8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-cyan-400 font-semibold",
                                                                children: "Files:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7e0284ea805a49b8" + " " + "text-white ml-2",
                                                                children: [
                                                                    files.length,
                                                                    " file(s) attached"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/report/page.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/report/page.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/report/page.tsx",
                                                lineNumber: 774,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/report/page.tsx",
                                        lineNumber: 764,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/report/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/report/page.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/report/page.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/report/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7e0284ea805a49b8",
                children: "@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-up.jsx-7e0284ea805a49b8{animation:.6s ease-out forwards fade-in-up}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/report/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
};
_s(ReportPage, "asP8UoK0wXWAu3OgBXeDQ1h8Kro=");
_c = ReportPage;
const __TURBOPACK__default__export__ = ReportPage;
var _c;
__turbopack_context__.k.register(_c, "ReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_report_page_tsx_be7a3482._.js.map