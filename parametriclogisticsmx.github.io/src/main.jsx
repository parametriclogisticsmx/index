import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  AtSign,
  Blocks,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FlaskConical,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Presentation,
  RadioTower,
  Rocket,
  Share2,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import './styles.css';

const logoCurves = {
  j1: { color: '#16e8e2', fn: (t) => [p(t), f(t)] },
  j2: { color: '#83ea65', fn: (t) => [0.88 * p(t) + 0.2, 0.88 * f(t)] },
  j3: { color: '#ffd916', fn: (t) => [0.75 * p(t) + 0.42, 0.75 * f(t)] },
  m1: { color: '#f319f2', fn: (t) => [-3.8 - p(t), f(t)] },
  m2: { color: '#6e64ff', fn: (t) => [-0.2 - 3.8 - 0.88 * p(t), 0.88 * f(t)] },
  m3: { color: '#18a8ff', fn: (t) => [-0.42 - 3.8 - 0.75 * p(t), 0.75 * f(t)] },
};

const logoPaths = buildLogoPaths();

function p(t) {
  return 4 * Math.cos(t) - 1.9 * Math.cos(2 * t) - 0.5 * Math.cos(3 * t) + 0.1 * Math.cos(5 * t);
}

function f(t) {
  return 4.5 * Math.sin(t) ** 3;
}

function buildLogoPaths(samples = 220) {
  const entries = Object.entries(logoCurves);
  const raw = entries.map(([name, item]) => ({
    name,
    color: item.color,
    points: Array.from({ length: samples + 1 }, (_, index) => item.fn((Math.PI * 2 * index) / samples)),
  }));
  const allPoints = raw.flatMap((item) => item.points);
  const xs = allPoints.map(([x]) => x);
  const ys = allPoints.map(([, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = maxX - minX;
  const height = maxY - minY;
  const scale = Math.min(700 / width, 390 / height);
  const cx = 400 - scale * (minX + maxX) / 2;
  const cy = 260 + scale * (minY + maxY) / 2;

  return raw.map((item) => ({
    ...item,
    d: item.points
      .map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${(cx + scale * x).toFixed(2)} ${(cy - scale * y).toFixed(2)}`)
      .join(' '),
  }));
}

const services = [
  ['Planeacion', 'Diseño integral del evento, presupuesto, cronograma, mapas de flujo y matriz de riesgos.', CalendarCheck],
  ['Coordinacion logistica', 'Control operativo antes, durante y despues del evento con responsables y puntos de verificacion.', Network],
  ['Proveedores', 'Seleccion, negociacion y supervision de aliados tecnicos, creativos y de hospitalidad.', Handshake],
  ['Montaje', 'Layout, recorridos, senaletica, backstage, mobiliario, audio, iluminacion y pruebas tecnicas.', Blocks],
  ['Registro', 'Acreditacion, control de accesos, bases de datos, badges, confirmaciones y medicion de asistencia.', ClipboardCheck],
  ['Contenido', 'Curaduria de agenda, ponentes, guiones, escaletas, dinamicas y experiencia narrativa.', Presentation],
  ['Asesoria', 'Diagnostico logistico, mejora de procesos, seleccion de formato y plan maestro de ejecucion.', Lightbulb],
];

const eventTypes = [
  'Congresos cientificos',
  'Ferias culturales',
  'Eventos corporativos',
  'Encuentros academicos',
  'Foros hibridos',
  'Experiencias de marca',
];

const methodology = [
  ['Objetivo', 'Definimos el resultado esperado y los indicadores que demostraran exito.', Target],
  ['Variables', 'Mapeamos publico, tiempos, presupuesto, espacios, proveedores, riesgos y dependencias.', FlaskConical],
  ['Planificacion', 'Convertimos las variables en rutas, cronogramas, tableros y protocolos accionables.', CalendarCheck],
  ['Ejecucion', 'Coordinamos equipos con informacion clara, decisiones rapidas y seguimiento en sitio.', Rocket],
  ['Evaluacion', 'Medimos resultados, aprendizajes y oportunidades de mejora para el siguiente evento.', CheckCircle2],
];

const portfolio = [
  {
    title: 'Simposio BioTech',
    type: 'Cientifico',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Coordinar 22 ponencias, posters y registro de asistentes internacionales.',
    result: 'Flujo de acceso 38% mas rapido y agenda ejecutada sin retrasos criticos.',
  },
  {
    title: 'Festival Arte Expandido',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Integrar escenarios, experiencias inmersivas y circulacion de publico en horario extendido.',
    result: 'Operacion por zonas, cambios de montaje optimizados y mayor permanencia del publico.',
  },
  {
    title: 'Tech Product Summit',
    type: 'Tecnologico',
    image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Lanzamiento hibrido con demos, prensa, streaming y networking ejecutivo.',
    result: 'Protocolo de produccion sincronizado y experiencia consistente para audiencia remota y presencial.',
  },
];

const testimonials = [
  ['Parametric Logistics tradujo una idea compleja en un evento fluido, medible y elegante.', 'Dra. Mariana Ruiz', 'Comite cientifico'],
  ['Su control de proveedores y tiempos redujo friccion desde la planeacion hasta el desmontaje.', 'Carlos Medina', 'Direccion de operaciones'],
  ['Se sintio la colaboracion: cada equipo sabia que hacer y cuando hacerlo.', 'Ana Sofia Torres', 'Product marketing'],
];

const posts = [
  ['Modelar flujos de asistentes como sistema vivo', 'Como estimar puntos de friccion antes de abrir puertas.', '5 min'],
  ['La ciencia detras de una agenda puntual', 'Variables, buffers y decisiones para sostener el ritmo del evento.', '7 min'],
  ['Datos post-evento que si mejoran la proxima edicion', 'Indicadores utiles para transformar experiencia en aprendizaje.', '6 min'],
];

const faqs = [
  ['Con cuanto tiempo debo solicitar una cotizacion?', 'Idealmente de 8 a 16 semanas antes. Tambien atendemos proyectos urgentes cuando el alcance permite una ejecucion responsable.'],
  ['Trabajan eventos sociales y cientificos?', 'Si. Adaptamos la metodologia a eventos sociales, culturales, cientificos, tecnologicos y corporativos.'],
  ['Pueden encargarse solo de una parte del evento?', 'Si. Podemos operar por modulo: registro, proveedores, montaje, coordinacion en sitio, contenido o asesoria.'],
  ['Atienden eventos hibridos?', 'Si. Diseñamos la experiencia presencial y remota como un solo sistema logistico.'],
];

function ParametricCurves({ className = '' }) {
  return (
    <svg className={`parametric-curves ${className}`} viewBox="0 0 1200 720" aria-hidden="true">
      <path className="curve curve-a" d="M-40 520 C160 250 310 640 510 360 S850 120 1240 290" />
      <path className="curve curve-b" d="M-40 260 C210 120 300 460 520 250 S840 520 1240 110" />
      <path className="curve curve-c" d="M-40 410 C130 590 280 160 510 470 S860 240 1240 500" />
      <path className="curve curve-d" d="M90 520 C250 120 420 620 600 360 S850 140 1130 520" />
      <path className="curve curve-e" d="M90 190 C260 600 410 130 600 360 S860 590 1130 190" />
    </svg>
  );
}

function LogoSignature({ compact = false }) {
  return (
    <svg className={compact ? 'logo-signature compact' : 'logo-signature'} viewBox="0 0 800 520" aria-hidden="true">
      <g className="logo-orbits">
        {logoPaths.map((item, index) => (
          <path
            key={item.name}
            className="logo-orbit"
            d={item.d}
            stroke={item.color}
            style={{ animationDelay: `${index * -0.6}s` }}
          />
        ))}
      </g>
      
    </svg>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="Parametric Logistics">
          <span className="brand-mark"><LogoSignature compact /></span>
          <span>Parametric Logistics</span>
        </a>
        <div className="nav-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#cotizacion">Cotizacion</a>
        </div>
        <a className="nav-cta" href="#cotizacion">Solicitar</a>
      </nav>

      <section id="inicio" className="hero">
        <div className="hero-grid" />
        <div className="hero-logo-background">
          <LogoSignature />
        </div>
        <div className="hero-content">
          <p className="eyebrow"><Sparkles size={16} /> Planeacion parametrica de eventos</p>
          <h1>La precision detras de experiencias memorables</h1>
          <p className="hero-copy">
            Diseñamos, coordinamos y optimizamos eventos sociales, culturales, cientificos y tecnologicos con una
            metodologia que combina datos, creatividad, ciencia y colaboracion.
          </p>
          <div className="brand-pills" aria-label="Mensajes de marca">
            <span>Parametrizamos ideas</span>
            <span>Creamos experiencias</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#cotizacion">Solicitar cotizacion <ArrowRight size={18} /></a>
            <a className="button secondary" href="#servicios">Ver servicios</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="metrics">
            <div><strong>5</strong><span>fases de control</span></div>
            <div><strong>360</strong><span>vision operativa</span></div>
            <div><strong>24/7</strong><span>seguimiento clave</span></div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
            alt="Equipo coordinando la logistica de un evento profesional"
          />
        </div>
      </section>

      <section id="nosotros" className="section split">
        <div>
          <p className="section-kicker">Nosotros</p>
          <h2>Si puede parametrizarse, puede mejorarse.</h2>
        </div>
        <div className="rich-text">
          <p>
            Parametric Logistics convierte la complejidad de un evento en un sistema claro: objetivos, variables,
            responsables, tiempos, recursos y puntos de decision.
          </p>
          <p>
            Nuestra filosofia une precision matematica, sensibilidad humana y trabajo colaborativo para que cada
            experiencia sea profesional, creativa y confiable.
          </p>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="section-heading">
          <p className="section-kicker">Servicios</p>
          <h2>Modulos logisticos para operar con claridad.</h2>
        </div>
        <div className="cards services">
          {services.map(([title, text, Icon]) => (
            <article className="card service-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section event-band">
        <div className="section-heading compact">
          <p className="section-kicker">Tipos de eventos</p>
          <h2>Sociales, culturales, cientificos y tecnologicos.</h2>
        </div>
        <div className="event-tags">
          {eventTypes.map((event) => <span key={event}>{event}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-kicker">Metodologia</p>
          <h2>De una intencion a una operacion medible.</h2>
        </div>
        <div className="timeline">
          {methodology.map(([title, text, Icon], index) => (
            <article className="timeline-item" key={title}>
              <div className="step"><Icon size={20} /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portafolio" className="section">
        <div className="section-heading">
          <p className="section-kicker">Portafolio</p>
          <h2>Retos logisticos convertidos en resultados.</h2>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <img src={item.image} alt={`Fotografia de ${item.title}`} />
              <div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p><b>Reto:</b> {item.challenge}</p>
                <p><b>Resultado:</b> {item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section collaborators">
        <div className="section-heading compact">
          <p className="section-kicker">Red colaborativa</p>
          <h2>Especialistas conectados por un mismo plan.</h2>
        </div>
        <div className="network-row">
          {['Produccion', 'Catering', 'Tecnologia', 'Sedes', 'Diseno', 'Streaming'].map((item) => (
            <span key={item}><Share2 size={16} /> {item}</span>
          ))}
        </div>
        <div className="testimonials">
          {testimonials.map(([quote, name, role]) => (
            <figure className="testimonial" key={name}>
              <blockquote>"{quote}"</blockquote>
              <figcaption>{name}<span>{role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="blog" className="section">
        <div className="section-heading">
          <p className="section-kicker">Blog</p>
          <h2>Ciencia y logistica aplicada a eventos.</h2>
        </div>
        <div className="blog-grid">
          {posts.map(([title, text, time]) => (
            <article className="blog-card" key={title}>
              <span>{time}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contacto">Leer enfoque <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="cotizacion" className="section quote-section">
        <ParametricCurves className="quote-curves" />
        <div>
          <p className="section-kicker">Cotizacion</p>
          <h2>Cuéntanos las variables de tu evento.</h2>
          <p>
            Con esta informacion podemos estimar alcance, prioridades, proveedores y nivel de coordinacion requerido.
          </p>
          <div className="contact-list">
            <a href="https://wa.me/525500000000"><MessageCircle size={18} /> WhatsApp</a>
            <a href="mailto:hola@parametriclogistics.mx"><Mail size={18} /> hola@parametriclogistics.mx</a>
            <a href="https://www.instagram.com/parametriclogisticsmx"><AtSign size={18} /> @parametriclogisticsmx</a>
          </div>
        </div>
        <form className="quote-form">
          <label>Nombre<input type="text" name="name" placeholder="Tu nombre" /></label>
          <label>Correo<input type="email" name="email" placeholder="correo@empresa.com" /></label>
          <label>Tipo de evento<select name="eventType" defaultValue=""><option value="" disabled>Selecciona una opcion</option>{eventTypes.slice(0, 6).map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Fecha estimada<input type="date" name="date" /></label>
          <label className="full">Descripcion<textarea name="message" rows="5" placeholder="Objetivo, ciudad, asistentes, formato y necesidades clave" /></label>
          <button type="submit">Enviar solicitud <ArrowRight size={18} /></button>
        </form>
      </section>

      <section className="section faq-section">
        <div className="section-heading compact">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2>Respuestas rapidas para iniciar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div>
          <a className="brand" href="#inicio"><span className="brand-mark"><LogoSignature compact /></span><span>Parametric Logistics</span></a>
          <p>Precision, ciencia y colaboracion para experiencias memorables.</p>
        </div>
        <div className="footer-links">
          <a href="https://wa.me/525500000000"><MessageCircle size={18} /> WhatsApp</a>
          <a href="mailto:hola@parametriclogistics.mx"><Mail size={18} /> Correo</a>
          <a href="https://www.linkedin.com/company/parametric-logistics"><Users size={18} /> LinkedIn</a>
          <a href="https://www.instagram.com/parametriclogisticsmx"><RadioTower size={18} /> Instagram</a>
          <span><MapPin size={18} /> Mexico</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
