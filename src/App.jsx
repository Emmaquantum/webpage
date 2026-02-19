import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Map, 
  ShieldCheck, 
  Zap, 
  Activity, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Paleta de colores oficial
  const colors = {
    navy: '#2E3849',
    white: '#FEFEFE',
    sand: '#F7DCAF',
    purple: '#655AA4',
    teal: '#216675'
  };

  const services = [
    {
      id: 1,
      title: "Oportunidades Invisibles",
      subtitle: "¿Dónde están los huecos por los que escapa el valor?",
      description: "Modelamos el comportamiento de su negocio capturando la variabilidad total. Detectamos señales de éxito incipiente y riesgos ocultos mucho antes de que aparezcan en los reportes tradicionales.",
      icon: <Compass className="w-6 h-6" />,
      benefit: "Anticipación técnica. Identifique nichos y segmentos que su competencia aún no puede ver."
    },
    {
      id: 2,
      title: "Arquitectura del Motor Interno",
      subtitle: "¿Por qué el capital no está acelerando sus resultados?",
      description: "Creamos un mapa de flujos e información para entender cómo se mueve realmente su negocio. Sustituimos las conjeturas por un análisis cuantitativo de las variables que impulsan la escala.",
      icon: <Map className="w-6 h-6" />,
      benefit: "Claridad operativa. Un plano de navegación para dirigir el esfuerzo hacia los puntos de mayor retorno."
    },
    {
      id: 3,
      title: "Resiliencia y Blindaje",
      subtitle: "¿Cuál es su punto de no retorno?",
      description: "Evaluamos la vulnerabilidad de su flujo de caja ante cambios externos. Aplicamos pruebas de estrés para asegurar que sus metas financieras sean matemáticamente alcanzables.",
      icon: <ShieldCheck className="w-6 h-6" />,
      benefit: "Seguridad estratégica. Un plan diseñado para absorber choques externos sin comprometer la operación."
    },
    {
      id: 4,
      title: "Simulador de Escenarios",
      subtitle: "¿Qué pasaría si cambiamos las reglas mañana?",
      description: "Un entorno virtual para validar decisiones antes de ejecutarlas. Medimos la reacción del mercado y la competencia ante cambios en precios o aperturas, eliminando el costo del ensayo y error.",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Validación sin riesgo. Proteja su capital invirtiendo solo en estrategias con efectividad comprobada."
    },
    {
      id: 5,
      title: "Ingeniería de Optimización",
      subtitle: "El camino hacia la eficiencia máxima.",
      description: "Rediseñamos las reglas de su organización para garantizar que el éxito sea el resultado lógico de su estructura y no de la suerte. Eliminamos procesos inflexibles que frenan su crecimiento.",
      icon: <Activity className="w-6 h-6" />,
      benefit: "Ventaja competitiva. Una estructura optimizada para la rentabilidad máxima y el crecimiento fluido."
    }
  ];

  const pricing = [
    { name: "Descubrimiento", price: "$1,500 - $2,000", time: "2 semanas", focus: "Generar confianza y visibilidad." },
    { name: "Auditoría de Arquitectura", price: "$2,500 - $3,000", time: "2 semanas", focus: "Alta tecnología y claridad visual." },
    { name: "Blindaje de Escenarios", price: "$3,500 - $4,000", time: "Integral", focus: "Seguro operativo de alto nivel." },
    { name: "Simulador Dinámico", price: "$5,000 - $8,000", time: "Estratégico", focus: "Activo de software propietario." },
    { name: "Optimización Recurrente", price: "$3,500/mes", time: "Continuo", focus: "Acompañamiento de élite." }
  ];

  // Componente de Logo SVG para mantener la estética editorial
  const Logo = ({ variant = 'vertical' }) => (
    <div className="flex items-center transition-opacity">
      <img 
        src="./Logo/Horizontal_logo.svg" 
        alt="Sierra Analytics Logo" 
        className={variant === 'vertical' ? "h-16 w-auto" : "h-10 md:h-12 w-auto"} 
      />
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-sand/30" style={{ backgroundColor: colors.white, color: colors.navy }}>
      
      {/* Navegación Estilo Minimalista */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-white/60">
        <Logo variant="horizontal" />
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-medium">
          {['Propuesta', 'Servicios', 'Inversión', 'Garantía'].map((item) => (
            <button 
              key={item} 
              className="hover:opacity-50 transition-all"
              onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section - Estilo Kinfolk */}
      <header id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xs tracking-[0.3em] uppercase opacity-60">Certeza sobre el azar</p>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            La IA convencional busca lo normal. <br />
            <span className="italic opacity-70">Nosotros buscamos lo extraordinario.</span>
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-80">
            En un mundo que optimiza para el promedio, las oportunidades reales ocurren en los extremos. No entregamos cajas negras; entregamos mapas de navegación estratégica.
          </p>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 text-xs uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: colors.navy }}
            >
              Explorar Servicios
            </button>
            <button className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-all">
              Diagnóstico Gratuito <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Propuesta de Valor */}
      <section id="propuesta" className="py-32 px-6" style={{ backgroundColor: colors.sand + '30' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif">¿Por qué el análisis convencional falla?</h3>
            <p className="text-lg font-light leading-relaxed opacity-80">
              La mayoría de las herramientas de IA están diseñadas para minimizar el error total basándose en el promedio. El algoritmo se vuelve ciego a lo inusual (los <i>outliers</i>).
            </p>
            <p className="text-lg font-light leading-relaxed opacity-80">
              Lo que otros descartan como "ruido" es donde suelen esconderse sus mayores riesgos o sus mejores oportunidades de innovación. Nosotros capturamos la variabilidad total.
            </p>
          </div>
          <div className="relative aspect-square bg-white shadow-2xl overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#2E3849 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>
            <div className="text-center space-y-4 relative z-10">
              <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center border border-navy/20">
                <Activity className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-sm italic tracking-wide">"Convertimos la incertidumbre <br /> en un activo estratégico."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Estilo Editorial */}
      <section id="servicios" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h3 className="text-xs tracking-[0.4em] uppercase opacity-50 mb-4">Nuestra Intervención</h3>
            <h2 className="text-4xl md:text-5xl font-serif">Ingeniería para la Toma de Decisiones</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s, idx) => (
              <div 
                key={s.id} 
                className={`p-8 space-y-6 border border-navy/5 transition-all hover:border-navy/20 group ${idx === services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 flex items-center justify-center" style={{ color: colors.teal }}>
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Módulo 0{s.id}</h4>
                  <h3 className="text-xl font-serif mb-3">{s.title}</h3>
                  <p className="text-xs italic opacity-60 mb-4">{s.subtitle}</p>
                  <p className="text-sm font-light leading-relaxed opacity-80 mb-6">
                    {s.description}
                  </p>
                  <div className="pt-4 border-t border-navy/5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: colors.teal }}>Beneficio Real</p>
                    <p className="text-sm opacity-80">{s.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section id="inversión" className="py-32 px-6" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-5xl mx-auto text-white">
          <div className="mb-20">
            <h3 className="text-xs tracking-[0.4em] uppercase opacity-40 mb-4">Inversión Estratégica</h3>
            <h2 className="text-4xl md:text-5xl font-serif">Paquetes Productizados</h2>
            <p className="mt-4 opacity-60 font-light">Diseñados para generar valor desde la primera semana.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest opacity-50">
                  <th className="py-6 px-4">Servicio</th>
                  <th className="py-6 px-4">Tiempo</th>
                  <th className="py-6 px-4">Inversión Sugerida</th>
                  <th className="py-6 px-4 hidden md:table-cell">Enfoque</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, i) => (
                  <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                    <td className="py-8 px-4 font-serif text-lg">{p.name}</td>
                    <td className="py-8 px-4 text-sm opacity-70 italic">{p.time}</td>
                    <td className="py-8 px-4 text-sm font-semibold tracking-wider">{p.price}</td>
                    <td className="py-8 px-4 text-xs opacity-50 hidden md:table-cell">{p.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Garantía y Cierre */}
      <section id="garantía" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="inline-block p-4 rounded-full bg-sand/20 mb-4">
            <ShieldCheck className="w-10 h-10" style={{ color: colors.teal }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif">Riesgo Cero.</h2>
          <div className="space-y-6 text-xl font-light leading-relaxed max-w-2xl mx-auto italic opacity-80">
            <p>
              "Si no encontramos ineficiencias o riesgos por un valor superior al costo de nuestro servicio en el tiempo estipulado, le devolvemos su dinero."
            </p>
          </div>
          <div className="pt-8">
            <p className="text-sm uppercase tracking-[0.3em] opacity-60 mb-8">Invertimos el riesgo: usted paga por los resultados.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="https://emmaquantum.github.io/SierraAnalytics/#" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 text-xs uppercase tracking-widest text-white transition-all hover:shadow-xl active:scale-95"
                style={{ backgroundColor: colors.teal }}
              >
                Agendar Diagnóstico Lite Gratuito
              </a>
            </div>
          </div>
        </div>

        {/* Elemento Decorativo Suizo */}
        <div className="absolute top-1/2 left-0 w-64 h-64 border border-navy/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sand/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-navy/5 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Logo variant="vertical" />
          <div className="text-center md:text-right space-y-4">
            <p className="text-xs uppercase tracking-widest opacity-40">Contacto</p>
            <p className="text-lg font-serif">info@sierraanalytics.ai</p>
            <div className="flex gap-6 justify-center md:justify-end text-[10px] uppercase tracking-[0.2em] opacity-60">
              <a href="#" className="hover:opacity-100">LinkedIn</a>
              <a href="#" className="hover:opacity-100">Case Studies</a>
              <a href="#" className="hover:opacity-100">Propuesta PDF</a>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-[9px] uppercase tracking-[0.5em] opacity-30">
          © 2026 Sierra Analytics. Todos los derechos reservados.
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center space-y-12">
          <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          {['Inicio', 'Propuesta', 'Servicios', 'Inversión', 'Garantía'].map((item) => (
            <button 
              key={item} 
              className="text-3xl font-serif hover:italic transition-all"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Estilos Globales para Tipografía Serif de Alta Calidad */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Libre+Baskerville', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        body {
          -webkit-font-smoothing: antialiased;
        }

        /* Scroll Smooth */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;