// ****************** ---- CONFIGURACIÓN IDIOMA LOCAL ---- ******************
// Se resuelve de forma local dentro de las funciones para no colisionar con el ámbito global (general.js)

// ****************** ---- STACK TECNOLÓGICO ---- ******************
// Iconos vectoriales cargados de forma modular desde el sprite estático optimizado (/img/icons.svg)
const ICONS_SPRITE = "/img/icons.svg";
const createIcon = (id, extraClass = "") =>
    `<svg class="w-3.5 h-3.5 mr-1.5 fill-current shrink-0${extraClass ? " " + extraClass : ""}"><use href="${ICONS_SPRITE}#icon-${id}"></use></svg>`;

const SVG_ICONS = {
    // Lenguajes
    c: createIcon("c"),
    cpp: createIcon("cpp"),
    csharp: createIcon("csharp"),
    java: createIcon("java"),
    html: createIcon("html"),
    css: createIcon("css"),
    javascript: createIcon("javascript"),
    sql: createIcon("sql"),
    plsql: createIcon("plsql"),
    nosql: createIcon("nosql"),
    python: createIcon("python"),
    uml: createIcon("uml"),
    bash: createIcon("bash"),
    kotlin: createIcon("kotlin"),
    matlab: createIcon("matlab"),
    alloy: createIcon("alloy"),
    ocl: createIcon("ocl"),
    x86: createIcon("x86"),
    xpath: createIcon("xpath"),
    xslt: createIcon("xslt"),
    pascal: createIcon("pascal"),
    vhdl: createIcon("vhdl"),
    // Frameworks
    spring: createIcon("spring"),
    tailwind: createIcon("tailwind"),
    bootstrap: createIcon("bootstrap"),
    hibernate: createIcon("hibernate"),
    ros: createIcon("ros"),
    // Librerías & APIs
    thymeleaf: createIcon("thymeleaf"),
    htmx: createIcon("htmx"),
    pytorch: createIcon("pytorch"),
    numpy: createIcon("numpy"),
    pandas: createIcon("pandas"),
    matplotlib: createIcon("matplotlib"),
    scikitlearn: createIcon("scikitlearn"),
    // Componentes
    servlets: createIcon("servlets"),
    jsp: createIcon("jsp"),
    swing: createIcon("swing"),
    jakartaee: createIcon("jakartaee"),
    jpa: createIcon("jpa"),
    eclipselink: createIcon("eclipselink"),
    // SGBD
    oracle: createIcon("oracle"),
    postgresql: createIcon("postgresql"),
    mysql: createIcon("mysql"),
    mariadb: createIcon("mariadb"),
    h2: createIcon("h2"),
    mongodb: createIcon("mongodb"),
    // IDEs
    vscode: createIcon("vscode"),
    intellij: createIcon("intellij"),
    netbeans: createIcon("netbeans"),
    eclipse: createIcon("eclipse"),
    sqldeveloper: createIcon("sqldeveloper"),
    dbeaver: createIcon("dbeaver", "grayscale opacity-80 brightness-150 contrast-125"),
    visualstudio: createIcon("visualstudio"),
    codeblocks: createIcon("codeblocks"),
    androidstudio: createIcon("androidstudio"),
    googlecolab: createIcon("googlecolab"),
    xilinx: createIcon("xilinx"),
    emu8086: createIcon("emu8086"),
    // Herramientas
    git: createIcon("git"),
    github: createIcon("github"),
    jira: createIcon("jira"),
    supabase: createIcon("supabase"),
    postman: createIcon("postman"),
    swagger: createIcon("swagger"),
    notion: createIcon("notion"),
    netlify: createIcon("netlify"),
    render: createIcon("render"),
    uptimerobot: createIcon("uptimerobot"),
    mailpit: createIcon("mailpit"),
    lmstudio: createIcon("lmstudio"),
    packettracer: createIcon("packettracer"),
    orangedatamining: createIcon("orangedatamining"),
    maven: createIcon("maven"),
    ant: createIcon("ant"),
    gradle: createIcon("gradle"),
    lucidchart: createIcon("lucidchart"),
    tinkercad: createIcon("tinkercad"),
    docker: createIcon("docker"),
    praat: createIcon("praat"),
    msproject: createIcon("msproject"),
    visio: createIcon("visio"),
    n8n: createIcon("n8n")
};

// ****************** ---- 1. STACK TECNOLÓGICO (Lista Lenguajes) ---- ******************
const numLenguajesExperto = 9; // Numero de lenguajes que se consideran "experto" (los primeros del array)

const listaLenguajes = {
    es: [
        "C", "C++", "C#", "Java", "HTML", "CSS", "JavaScript",
        "SQL", "PL/SQL", "NoSQL", "Python", "PlantUML", "Bash", "Kotlin MP", "MATLAB",
        "Alloy (UML)", "OCL (UML)", "Ensamblador x86", "xPath (XML)", "XSLT (XML)", "Pascal-FC", "VHDL"
    ],
    en: [
        "C", "C++", "C#", "Java", "HTML", "CSS", "JavaScript",
        "SQL", "PL/SQL", "NoSQL", "Python", "PlantUML", "Bash", "Kotlin MP", "MATLAB",
        "Alloy (UML)", "OCL (UML)", "x86 Assembly", "xPath (XML)", "XSLT (XML)", "Pascal-FC", "VHDL"
    ]
}

const listaIconosLenguajes = [
    SVG_ICONS.c, // C
    SVG_ICONS.cpp, // C++
    SVG_ICONS.csharp, // C#
    SVG_ICONS.java, // Java
    SVG_ICONS.html, // HTML
    SVG_ICONS.css, // CSS
    SVG_ICONS.javascript, // JavaScript
    SVG_ICONS.sql, // SQL
    SVG_ICONS.plsql, // PL/SQL
    SVG_ICONS.nosql, // NoSQL
    SVG_ICONS.python, // Python
    SVG_ICONS.uml, // PlantUML
    SVG_ICONS.bash, // Bash
    SVG_ICONS.kotlin, // Kotlin MP
    SVG_ICONS.matlab, // MATLAB
    SVG_ICONS.alloy, // Alloy (UML)
    SVG_ICONS.ocl, // OCL (UML)
    SVG_ICONS.x86, // Ensamblador x86
    SVG_ICONS.xpath, // xPath (XML)
    SVG_ICONS.xslt, // XSLT (XML)
    SVG_ICONS.pascal, // Pascal-FC
    SVG_ICONS.vhdl // VHDL
];

// ****************** ---- 2. STACK TECNOLÓGICO (Lista Frameworks) ---- ******************
const numFrameworksExperto = 4; // Numero de frameworks que se consideran "experto" (los primeros del array)

const listaFrameworks = [
    "Spring Boot", "Tailwind CSS", "Bootstrap CSS", "Hibernate (Java)", "ROS (Robot Operating System)"
];

const listaIconosFrameworks = [
    SVG_ICONS.spring, // Spring Boot
    SVG_ICONS.tailwind, // Tailwind CSS
    SVG_ICONS.bootstrap, // Bootstrap CSS
    SVG_ICONS.hibernate, // Hibernate (Java)
    SVG_ICONS.ros // ROS (Robot Operating System)
];

// ****************** ---- 3. STACK TECNOLÓGICO (Lista Librerías) ---- ******************
const numLibreriasExperto = 2; // Numero de librerías que se consideran "experto" (los primeros del array)

const listaLibrerias = [
    "Thymeleaf", "HTMX", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"
];

const listaIconosLibrerias = [
    SVG_ICONS.thymeleaf, // Thymeleaf
    SVG_ICONS.htmx, // HTMX
    SVG_ICONS.pytorch, // PyTorch
    SVG_ICONS.numpy, // NumPy
    SVG_ICONS.pandas, // Pandas
    SVG_ICONS.matplotlib, // Matplotlib
    SVG_ICONS.scikitlearn // Scikit-learn
];

// ****************** ---- 4. STACK TECNOLÓGICO (Lista Componentes) ---- ******************
const numComponentesExperto = 7; // Numero de componentes que se consideran "experto" (los primeros del array)

const listaComponentes = [
    "Java Servlets", "Java Server Pages (JSP)", "Java Swing", "Jakarta EE (Java)", "Java Persistence API (JPA)", "Hibernate ORM (Java)", "EclipseLink ORM (Java)"
];

const listaIconosComponentes = [
    SVG_ICONS.servlets, // Java Servlets
    SVG_ICONS.jsp, // Java Server Pages (JSP)
    SVG_ICONS.swing, // Java Swing
    SVG_ICONS.jakartaee, // Jakarta EE (Java)
    SVG_ICONS.jpa, // Java Persistence API (JPA)
    SVG_ICONS.hibernate, // Hibernate ORM (Java)
    SVG_ICONS.eclipselink // EclipseLink ORM (Java)
];

// ****************** ---- 5. STACK TECNOLÓGICO (Lista SGBD) ---- ******************
const numSGBDExperto = 5; // Numero de SGBD que se consideran "experto" (los primeros del array)

const listaSGBD = [
    "Oracle Database", "PostgreSQL", "MySQL", "MariaDB", "H2 Database", "MongoDB"
];

const listaIconosSGBD = [
    SVG_ICONS.oracle, // Oracle Database
    SVG_ICONS.postgresql, // PostgreSQL
    SVG_ICONS.mysql, // MySQL
    SVG_ICONS.mariadb, // MariaDB
    SVG_ICONS.h2, // H2 Database
    SVG_ICONS.mongodb // MongoDB
];

// ****************** ---- 6. STACK TECNOLÓGICO (Lista IDEs) ---- ******************
const numIDEExperto = 13; // Numero de IDEs que se consideran "experto" (los primeros del array)

const listaIDE = [
    "VS Code", "IntelliJ IDEA", "NetBeans", "Eclipse", "Oracle SQL Developer", "DBeaver", "Microsoft Visual Studio", "Code::Blocks", "Andoid Studio", "Google Colab", "Xilinx", "MATLAB", "emu8086"
];

const listaIconosIDE = [
    SVG_ICONS.vscode, // VS Code
    SVG_ICONS.intellij, // IntelliJ IDEA
    SVG_ICONS.netbeans, // NetBeans
    SVG_ICONS.eclipse, // Eclipse
    SVG_ICONS.sqldeveloper, // Oracle SQL Developer
    SVG_ICONS.dbeaver, // DBeaver
    SVG_ICONS.visualstudio, // Microsoft Visual Studio
    SVG_ICONS.codeblocks, // Code::Blocks
    SVG_ICONS.androidstudio, // Android Studio
    SVG_ICONS.googlecolab, // Google Colab
    SVG_ICONS.xilinx, // Xilinx
    SVG_ICONS.matlab, // MATLAB
    SVG_ICONS.emu8086 // emu8086
];

// ****************** ---- 7. STACK TECNOLÓGICO (Lista Herramientas) ---- ******************
const numHerramientasExperto = 21; // Numero de herramientas que se consideran "experto" (los primeros del array)

const listaHerramientas = [
    "Git", "GitHub", "GitHub Desktop", "Docker", "Supabase", "Postman", "Swagger", "Notion", "Netlify", "Render", "UptimeRobot", "Mailpit", "LM Studio", "Jira", "Cisco Packet Tracer", "Orange Data Mining", "Maven", "Ant", "Gradle", "Lucidchart", "Tinkercad", "Praat", "Microsoft Project", "Microsoft Visio", "n8n"
];

const listaIconosHerramientas = [
    SVG_ICONS.git, // Git
    SVG_ICONS.github, // GitHub
    SVG_ICONS.github, // GitHub Desktop
    SVG_ICONS.docker, // Docker
    SVG_ICONS.supabase, // Supabase
    SVG_ICONS.postman, // Postman
    SVG_ICONS.swagger, // Swagger
    SVG_ICONS.notion, // Notion
    SVG_ICONS.netlify, // Netlify
    SVG_ICONS.render, // Render
    SVG_ICONS.uptimerobot, // UptimeRobot
    SVG_ICONS.mailpit, // Mailpit
    SVG_ICONS.lmstudio, // LM Studio
    SVG_ICONS.jira, // Jira
    SVG_ICONS.packettracer, // Cisco Packet Tracer
    SVG_ICONS.orangedatamining, // Orange Data Mining
    SVG_ICONS.maven, // Maven
    SVG_ICONS.ant, // Ant
    SVG_ICONS.gradle, // Gradle
    SVG_ICONS.lucidchart, // Lucidchart
    SVG_ICONS.tinkercad, // Tinkercad
    SVG_ICONS.praat, // Praat
    SVG_ICONS.msproject, // Microsoft Project
    SVG_ICONS.visio, // Microsoft Visio
    SVG_ICONS.n8n // n8n
];

// ****************** ---- 8. STACK TECNOLÓGICO (Lista Habilidades) ---- ******************
const numHabilidadesExperto = 9; // Numero de habilidades que se consideran "experto" (los primeros del array)

const listaHabilidades = {
    es: [
        "Desarrollo de Aplicaciones Web", "Desarrollo de Aplicaciones de Escritorio",
        "Medición de la Calidad del Software", "Estimación y Planificación de Proyectos de Software",
        "Programación Concurrente", "Sistemas Distribuidos", "Manejo de la Shell de Linux",
        "Análisis de Algoritmos", "Optimización y Eficiencia de Código",
        "Desarrollo de Aplicaciones Móviles", "Infraestructura de Redes de Computadores",
        "Interconexión de Redes de Computadores", "Seguridad de Redes de Computadores",
        "Arquitectura de Computadores", "Machine Learning", "Procesamiento del Habla", "Robótica"
    ],
    en: [
        "Web Application Development", "Desktop Application Development",
        "Software Quality Measurement", "Software Project Estimation & Planning",
        "Concurrent Programming", "Distributed Systems", "Linux Shell Scripting",
        "Algorithm Analysis", "Code Optimisation & Efficiency",
        "Mobile Application Development", "Computer Network Infrastructure",
        "Computer Network Interconnection", "Computer Network Security",
        "Computer Architecture", "Machine Learning", "Speech Processing", "Robotics"
    ]
};

// ****************** ---- 9. STACK TECNOLÓGICO (Lista Ingeniería de SW) ---- ******************
const numISExperto = 14; // Numero de habilidades que se consideran "experto" (los primeros del array)

const listaIS = {
    es: [
        "Clean Code", "Código Legible", "Principios SOLID", "Patrones de Diseño", "TDD (Test Driven Development)", "Elicitación y Análisis de Requisitos", "Kanban (Gestión de Proyectos)", "Scrum (Metodología Ágil)", "UML (Unified Modeling Language)", "Modelo Entidad-Relación (ER)", "OOP (Object-Oriented Programming)", "MVC (Model-View-Controller)", "Software Testing", "Clean Architecture", "Hexagonal Architecture", "Model Checking"
    ],
    en: [
        "Clean Code", "Readable Code", "SOLID Principles", "Design Patterns", "TDD (Test Driven Development)", "Requirements Elicitation & Analysis", "Kanban (Project Management)", "Scrum (Agile Methodology)", "UML (Unified Modeling Language)", "Entity-Relationship Model (ER)", "OOP (Object-Oriented Programming)", "MVC (Model-View-Controller)", "Software Testing", "Clean Architecture", "Hexagonal Architecture", "Model Checking"
    ]
}

function renderizarStackTecnologico() {
    const lang = window.IDIOMA || (document.documentElement.lang === "en" ? "en" : "es");
    const categorias = [
        {
            contenedorLista: document.getElementById("lista-lenguajes"),
            contenedorContador: document.getElementById("contador-lenguajes"),
            listaElementos: listaLenguajes[lang],
            listaIconos: listaIconosLenguajes,
            numExperto: numLenguajesExperto
        },
        {
            contenedorLista: document.getElementById("lista-frameworks"),
            contenedorContador: document.getElementById("contador-frameworks"),
            listaElementos: listaFrameworks,
            listaIconos: listaIconosFrameworks,
            numExperto: numFrameworksExperto
        },
        {
            contenedorLista: document.getElementById("lista-librerias"),
            contenedorContador: document.getElementById("contador-librerias"),
            listaElementos: listaLibrerias,
            listaIconos: listaIconosLibrerias,
            numExperto: numLibreriasExperto
        },
        {
            contenedorLista: document.getElementById("lista-componentes"),
            contenedorContador: document.getElementById("contador-componentes"),
            listaElementos: listaComponentes,
            listaIconos: listaIconosComponentes,
            numExperto: numComponentesExperto
        },
        {
            contenedorLista: document.getElementById("lista-sgbd"),
            contenedorContador: document.getElementById("contador-sgbd"),
            listaElementos: listaSGBD,
            listaIconos: listaIconosSGBD,
            numExperto: numSGBDExperto
        },
        {
            contenedorLista: document.getElementById("lista-ide"),
            contenedorContador: document.getElementById("contador-ide"),
            listaElementos: listaIDE,
            listaIconos: listaIconosIDE,
            numExperto: numIDEExperto
        },
        {
            contenedorLista: document.getElementById("lista-herramientas"),
            contenedorContador: document.getElementById("contador-herramientas"),
            listaElementos: listaHerramientas,
            listaIconos: listaIconosHerramientas,
            numExperto: numHerramientasExperto
        },
        {
            contenedorLista: document.getElementById("lista-habilidades"),
            contenedorContador: document.getElementById("contador-habilidades"),
            listaElementos: listaHabilidades[lang],
            listaIconos: [],
            numExperto: numHabilidadesExperto
        },
        {
            contenedorLista: document.getElementById("lista-is"),
            contenedorContador: document.getElementById("contador-is"),
            listaElementos: listaIS[lang],
            listaIconos: [],
            numExperto: numISExperto
        }
    ];

    categorias.forEach(cat => {
        if (cat.contenedorContador && cat.listaElementos) {
            cat.contenedorContador.textContent = `${cat.listaElementos.length}`;
        }

        if (cat.contenedorLista && cat.listaElementos) {
            let htmlGenerado = "";
            cat.listaElementos.forEach((nombre, index) => {
                // Inyectamos directamente el string SVG si existe
                const htmlIcono = cat.listaIconos && cat.listaIconos[index] ? cat.listaIconos[index] : "";

                if (index < cat.numExperto) {
                    htmlGenerado += `
                    <li class="shrink-0 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 border border-emerald-300 dark:border-emerald-700/60 hover:border-emerald-400 dark:hover:border-emerald-500/70 transition-colors rounded-md flex items-center">
                        ${htmlIcono}${nombre}
                    </li>`;
                } else {
                    htmlGenerado += `
                    <li class="shrink-0 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800/50 border border-slate-300 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500/60 transition-colors rounded-md flex items-center">
                        ${htmlIcono}${nombre}
                    </li>`;
                }
            });
            cat.contenedorLista.innerHTML = htmlGenerado;
        }
    });
}

// ****************** ---- STACK TECNOLÓGICO (SCROLL HORIZONTAL) ---- ******************
// Función para desplazar el contenedor en la dirección indicada
function desplazarHorizontal(evento) {
    const boton = evento.currentTarget;
    const contenedor = boton.parentElement.querySelector(".scroll-container");
    const distancia = parseInt(boton.getAttribute("data-distancia"), 10) || 220;

    if (contenedor) {
        contenedor.scrollBy({ left: distancia, behavior: "smooth" });
    }
}

// Función para comprobar el desbordamiento y actualizar la visibilidad de los botones
function actualizarVisibilidadFlechas(contenedor) {
    if (!contenedor) return;

    const envoltorio = contenedor.parentElement;
    const btnIzquierda = envoltorio.querySelector(".scroll-btn-left");
    const btnDerecha = envoltorio.querySelector(".scroll-btn-right");

    if (!btnIzquierda || !btnDerecha) return;

    const hayDesbordamiento = contenedor.scrollWidth > contenedor.clientWidth + 1;

    if (!hayDesbordamiento) {
        btnIzquierda.classList.add("hidden");
        btnDerecha.classList.add("hidden");
        return;
    }

    // Flecha izquierda: visible si se ha desplazado a la derecha
    if (contenedor.scrollLeft > 10) {
        btnIzquierda.classList.remove("hidden");
    } else {
        btnIzquierda.classList.add("hidden");
    }

    // Flecha derecha: visible si aún queda contenido por ver a la derecha
    const limiteDerecho = contenedor.scrollWidth - contenedor.clientWidth;
    if (contenedor.scrollLeft < limiteDerecho - 10) {
        btnDerecha.classList.remove("hidden");
    } else {
        btnDerecha.classList.add("hidden");
    }
}

// Función para controlar el evento 'scroll' en cada contenedor
function manejarScrollContenedor(evento) {
    actualizarVisibilidadFlechas(evento.target);
}

// Función para recorrer todos los carriles y actualizar su estado (útil para resize/carga)
function actualizarTodosLosCarriles() {
    const contenedores = document.querySelectorAll(".scroll-container");
    contenedores.forEach(c => actualizarVisibilidadFlechas(c));
}

// Función para inicializar los observadores y los eventos al cargar el DOM
function inicializarStackScroll() {
    const botonesIzquierda = document.querySelectorAll(".scroll-btn-left");
    const botonesDerecha = document.querySelectorAll(".scroll-btn-right");
    const contenedores = document.querySelectorAll(".scroll-container");

    // Asignamos la distancia y el evento a los botones de la izquierda
    botonesIzquierda.forEach(btn => {
        btn.setAttribute("data-distancia", "-220");
        btn.addEventListener("click", desplazarHorizontal);
    });

    // Asignamos la distancia y el evento a los botones de la derecha
    botonesDerecha.forEach(btn => {
        btn.setAttribute("data-distancia", "220");
        btn.addEventListener("click", desplazarHorizontal);
    });

    // Asignamos el evento de scroll a cada contenedor para actualizar la visibilidad de las flechas
    contenedores.forEach(c => {
        c.addEventListener("scroll", manejarScrollContenedor);
    });

    // Recalculamos la visibilidad de las flechas al redimensionar la ventana y al cargar la página
    window.addEventListener("resize", actualizarTodosLosCarriles);
    actualizarTodosLosCarriles(); // Comprobamos al cargar la página para ocultar flechas si NO hay desbordamiento
}

// ****************** ---- INICIALIZACIÓN MÓDULO STACK ---- ******************
function inicializarModuloStack() {
    renderizarStackTecnologico();
    inicializarStackScroll();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarModuloStack);
} else {
    inicializarModuloStack();
}
