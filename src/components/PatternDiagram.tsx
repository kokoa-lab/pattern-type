import { PatternType } from "@/data/questions";

interface PatternDiagramProps {
  pattern: PatternType;
}

const diagrams: Record<PatternType, React.ReactNode> = {
  observer: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="observerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      {/* Subject */}
      <rect x="70" y="20" width="60" height="35" rx="4" fill="url(#observerGrad)" />
      <text x="100" y="42" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="10" fontWeight="600">Subject</text>
      
      {/* Observers */}
      <rect x="20" y="100" width="45" height="30" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="42.5" y="118" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Observer</text>
      
      <rect x="77.5" y="100" width="45" height="30" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="100" y="118" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Observer</text>
      
      <rect x="135" y="100" width="45" height="30" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="157.5" y="118" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Observer</text>
      
      {/* Arrows */}
      <path d="M85 55 L45 95" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow)" />
      <path d="M100 55 L100 95" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" strokeDasharray="3,2" />
      <path d="M115 55 L155 95" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" strokeDasharray="3,2" />
      
      <text x="100" y="75" textAnchor="middle" fill="hsl(280, 100%, 65%)" fontSize="7">notify()</text>
    </svg>
  ),
  singleton: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="singletonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Central Singleton */}
      <circle cx="100" cy="75" r="35" fill="url(#singletonGrad)" />
      <text x="100" y="72" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="9" fontWeight="600">Singleton</text>
      <text x="100" y="84" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="7">instance</text>
      
      {/* Clients */}
      <rect x="15" y="20" width="35" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1" />
      <text x="32.5" y="36" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="7">Client</text>
      
      <rect x="150" y="20" width="35" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1" />
      <text x="167.5" y="36" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="7">Client</text>
      
      <rect x="15" y="105" width="35" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1" />
      <text x="32.5" y="121" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="7">Client</text>
      
      <rect x="150" y="105" width="35" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1" />
      <text x="167.5" y="121" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="7">Client</text>
      
      {/* Arrows */}
      <line x1="50" y1="40" x2="68" y2="58" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <line x1="150" y1="40" x2="132" y2="58" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <line x1="50" y1="110" x2="68" y2="92" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <line x1="150" y1="110" x2="132" y2="92" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="factoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Factory */}
      <rect x="60" y="15" width="80" height="40" rx="4" fill="url(#factoryGrad)" />
      <text x="100" y="38" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="10" fontWeight="600">Factory</text>
      
      {/* Create arrow */}
      <path d="M100 55 L100 75" stroke="hsl(280, 100%, 65%)" strokeWidth="2" />
      <text x="115" y="68" fill="hsl(280, 100%, 65%)" fontSize="7">create()</text>
      
      {/* Products */}
      <circle cx="45" cy="110" r="22" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="45" y="113" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">A</text>
      
      <rect x="78" y="88" width="44" height="44" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="100" y="113" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">B</text>
      
      <polygon points="155,132 133,88 177,88" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="155" y="115" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">C</text>
      
      {/* Arrows to products */}
      <path d="M80 75 L55 88" stroke="hsl(280, 100%, 65%)" strokeWidth="1" strokeDasharray="3,2" />
      <path d="M100 75 L100 85" stroke="hsl(280, 100%, 65%)" strokeWidth="1" strokeDasharray="3,2" />
      <path d="M120 75 L145 88" stroke="hsl(280, 100%, 65%)" strokeWidth="1" strokeDasharray="3,2" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Context */}
      <rect x="65" y="15" width="70" height="35" rx="4" fill="url(#strategyGrad)" />
      <text x="100" y="36" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="10" fontWeight="600">Context</text>
      
      {/* Strategy interface */}
      <rect x="55" y="70" width="90" height="25" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="100" y="86" textAnchor="middle" fill="hsl(280, 100%, 65%)" fontSize="9" fontStyle="italic">Strategy</text>
      
      {/* Concrete strategies */}
      <rect x="15" y="115" width="50" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="40" y="131" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Fast</text>
      
      <rect x="75" y="115" width="50" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="100" y="131" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Safe</text>
      
      <rect x="135" y="115" width="50" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="160" y="131" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Smart</text>
      
      {/* Arrows */}
      <line x1="100" y1="50" x2="100" y2="68" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <line x1="65" y1="95" x2="45" y2="113" stroke="hsl(280, 100%, 65%)" strokeWidth="1" />
      <line x1="100" y1="95" x2="100" y2="113" stroke="hsl(280, 100%, 65%)" strokeWidth="1" />
      <line x1="135" y1="95" x2="155" y2="113" stroke="hsl(280, 100%, 65%)" strokeWidth="1" />
    </svg>
  ),
  decorator: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="decoratorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Core component */}
      <circle cx="100" cy="75" r="20" fill="url(#decoratorGrad)" />
      <text x="100" y="79" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="8" fontWeight="600">Core</text>
      
      {/* Decorator layers */}
      <circle cx="100" cy="75" r="35" fill="none" stroke="hsl(175, 100%, 50%)" strokeWidth="2" strokeDasharray="4,2" />
      <text x="100" y="35" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="7">+Feature A</text>
      
      <circle cx="100" cy="75" r="50" fill="none" stroke="hsl(280, 100%, 65%)" strokeWidth="2" strokeDasharray="4,2" />
      <text x="100" y="18" textAnchor="middle" fill="hsl(280, 100%, 65%)" fontSize="7">+Feature B</text>
      
      <circle cx="100" cy="75" r="65" fill="none" stroke="hsl(320, 100%, 60%)" strokeWidth="2" strokeDasharray="4,2" />
      <text x="185" y="78" textAnchor="end" fill="hsl(320, 100%, 60%)" fontSize="7">+C</text>
    </svg>
  ),
  adapter: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="adapterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Client */}
      <rect x="10" y="55" width="45" height="40" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="32.5" y="78" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="9">Client</text>
      
      {/* Adapter */}
      <rect x="75" y="45" width="50" height="60" rx="4" fill="url(#adapterGrad)" />
      <text x="100" y="72" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="9" fontWeight="600">Adapter</text>
      <text x="100" y="85" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="7">🔌</text>
      
      {/* Adaptee */}
      <rect x="145" y="55" width="45" height="40" rx="4" fill="hsl(240, 10%, 15%)" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <text x="167.5" y="78" textAnchor="middle" fill="hsl(280, 100%, 65%)" fontSize="9">Adaptee</text>
      
      {/* Connection lines */}
      <line x1="55" y1="75" x2="75" y2="75" stroke="hsl(175, 100%, 50%)" strokeWidth="2" />
      <line x1="125" y1="75" x2="145" y2="75" stroke="hsl(280, 100%, 65%)" strokeWidth="2" />
      
      {/* Labels */}
      <text x="65" y="68" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="6">request()</text>
      <text x="135" y="68" textAnchor="middle" fill="hsl(280, 100%, 65%)" fontSize="6">specific()</text>
    </svg>
  ),
  builder: (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="builderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(175, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(280, 100%, 65%)" />
        </linearGradient>
      </defs>
      
      {/* Builder */}
      <rect x="65" y="10" width="70" height="35" rx="4" fill="url(#builderGrad)" />
      <text x="100" y="31" textAnchor="middle" fill="hsl(240, 10%, 4%)" fontSize="10" fontWeight="600">Builder</text>
      
      {/* Steps */}
      <rect x="15" y="65" width="40" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="35" y="81" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Step 1</text>
      
      <rect x="65" y="65" width="40" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="85" y="81" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Step 2</text>
      
      <rect x="115" y="65" width="40" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="135" y="81" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">Step 3</text>
      
      <rect x="165" y="65" width="25" height="25" rx="3" fill="hsl(240, 10%, 15%)" stroke="hsl(175, 100%, 50%)" strokeWidth="1.5" />
      <text x="177.5" y="81" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="8">...</text>
      
      {/* Arrows between steps */}
      <path d="M55 77.5 L63 77.5" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M105 77.5 L113 77.5" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      <path d="M155 77.5 L163 77.5" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" />
      
      {/* Final product */}
      <rect x="60" y="110" width="80" height="30" rx="4" fill="hsl(240, 10%, 15%)" stroke="url(#builderGrad)" strokeWidth="2" />
      <text x="100" y="129" textAnchor="middle" fill="hsl(175, 100%, 50%)" fontSize="9" fontWeight="600">Product ✨</text>
      
      {/* Arrow to product */}
      <path d="M100 90 L100 108" stroke="hsl(280, 100%, 65%)" strokeWidth="1.5" strokeDasharray="3,2" />
      <text x="115" y="100" fill="hsl(280, 100%, 65%)" fontSize="6">build()</text>
    </svg>
  )
};

export const PatternDiagram = ({ pattern }: PatternDiagramProps) => {
  return (
    <div className="w-full max-w-[280px] mx-auto aspect-[4/3]">
      {diagrams[pattern]}
    </div>
  );
};
