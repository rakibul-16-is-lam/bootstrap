import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  Github, 
  ExternalLink, 
  Copy, 
  Check,
  Palette,
  Square,
  Move,
  Maximize,
  Layout,
  Pin,
  Grid,
  Type,
  MousePointer2,
  FileText,
  CreditCard,
  Frame,
  Rows,
  Cloud,
  Smartphone,
  Compass,
  ArrowRightLeft,
  BookOpen
} from 'lucide-react';
import { CHEAT_SHEET_DATA, Section, CheatSheetItem } from './constants';

const ICON_MAP: Record<string, any> = {
  Palette, Square, Move, Maximize, Layout, Pin, Grid, Type, 
  MousePointer2, FileText, CreditCard, Frame, Rows, Cloud, 
  Smartphone, Compass, ArrowRightLeft
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredData = useMemo(() => {
    if (!searchQuery) return CHEAT_SHEET_DATA;
    
    return CHEAT_SHEET_DATA.map(section => {
      const filteredItems = section.items.filter(item => 
        item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (filteredItems.length > 0) {
        return { ...section, items: filteredItems };
      }
      return null;
    }).filter((section): section is Section => section !== null);
  }, [searchQuery]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-sm md:text-base">
      {/* Navbar for Mobile (different from sidebar) */}
      <nav className="sticky top-0 z-50 bg-blue-700 text-white px-6 py-3 flex items-center justify-between lg:hidden">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-white text-blue-700 rounded flex items-center justify-center font-black">B</div>
          <span>Rakibul's Guide</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-blue-600 rounded-lg">
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-gray-200 z-[70] overflow-y-auto
        transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xs">B</div>
            <span>Guide v5.3</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">Navigation</p>
          <div className="space-y-1 mb-8">
            <button onClick={() => scrollToSection('hero')} className="w-full text-left px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
              <Compass size={16} /> Home
            </button>
            <button onClick={() => scrollToSection('about')} className="w-full text-left px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
              <BookOpen size={16} /> About
            </button>
          </div>

          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">Cheat Sheet</p>
          <nav className="space-y-1">
            {CHEAT_SHEET_DATA.map((section) => {
              const Icon = ICON_MAP[section.icon] || BookOpen;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
                >
                  <Icon size={16} className="text-gray-400 group-hover:text-blue-500" />
                  <span className="text-sm truncate">{section.title.replace(/[^\w\s]/g, '').trim()}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50">
        {/* Desktop Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-8 flex-1">
            <nav>
              <ul className="flex items-center gap-6 m-0 p-0 list-none">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-600 hover:text-blue-600 font-bold transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-blue-600 font-bold transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Project</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="max-w-md w-full relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text"
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-xl transition-all outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex bg-gray-100 p-1 rounded-xl">
               <button 
                 onClick={() => setViewMode('grid')}
                 className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
               >
                 Grid
               </button>
               <button 
                 onClick={() => setViewMode('table')}
                 className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'table' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
               >
                 Table
               </button>
             </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white relative overflow-hidden">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Full Stack Developer
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Hi, I am <span className="text-blue-300">Rakibul Islam</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                I'm a Web Developer specializing in building modern, responsive interactive applications. 
                This is my custom Bootstrap 5 reference guide designed for efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('text-colors')}
                  className="bg-white text-blue-700 px-8 py-3 rounded-2xl font-bold transition-all hover:bg-blue-50 shadow-xl active:scale-95"
                >
                  Explore Cheat Sheet
                </button>
                <button className="bg-transparent border border-white/20 hover:bg-white/10 px-8 py-3 rounded-2xl font-bold transition-all active:scale-95">
                  View My Projects
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
        </section>

        {/* Categories / Data */}
        <div className="px-6 md:px-12 py-12 max-w-7xl w-full mx-auto space-y-16">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-32">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity"></div>
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rakibul" 
                  alt="Rakibul Isalm" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black text-gray-900 mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I am a passionate Web Developer with expertise in React, Node.js, and modern CSS frameworks like Bootstrap and Tailwind. 
                    I love creating tools that help other developers grow.
                  </p>
                  <p>
                    This Interactive Cheat Sheet is one of my projects aimed at making Bootstrap learning easier for students by providing 
                    instant previews and one-click copy functionality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Location</p>
                      <p className="font-bold text-gray-900">Dhaka, Bangladesh</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email</p>
                      <p className="font-bold text-gray-900">rakib.47g@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main List */}
          {filteredData.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    {(() => {
                      const Icon = ICON_MAP[section.icon] || BookOpen;
                      return <Icon size={24} />;
                    })()}
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">{section.title}</h2>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, idx) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      key={`${section.id}-${item.class}`}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <code className="text-blue-700 bg-blue-50 px-3 py-1 rounded-lg font-mono text-xs font-bold">
                          .{item.class}
                        </code>
                        <button 
                          onClick={() => handleCopy(item.class)}
                          className="text-gray-300 hover:text-blue-600 transition-colors p-1"
                        >
                          {copiedText === item.class ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.description}</p>
                      
                      {item.previewClass && (
                         <div className="mt-auto pt-6 border-t border-gray-50">
                           <div className="flex items-center justify-center min-h-[50px] bg-gray-50 rounded-xl overflow-hidden p-2">
                             <div className={item.previewClass}>
                               {item.class.includes('btn') ? 'Button' : 'Example'}
                             </div>
                           </div>
                         </div>
                      )}

                      {item.example && (
                        <div className="mt-4 pt-4 border-t border-gray-50">
                          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Usage Example</p>
                          <code className="text-xs text-gray-500 italic">className="{item.example}"</code>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Class Name</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Description</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {section.items.map((item) => (
                        <tr key={item.class} className="hover:bg-blue-50/30 transition-colors group">
                          <td className="px-6 py-4">
                            <code className="text-blue-700 font-mono text-sm font-bold">.{item.class}</code>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-600 text-sm">{item.description}</span>
                            {item.example && (
                              <div className="mt-1 text-[10px] text-gray-400 font-mono leading-none">
                                Ex: {item.example}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleCopy(item.class)}
                              className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              {copiedText === item.class ? (
                                <><Check size={14} className="text-green-500" /> Copied</>
                              ) : (
                                <><Copy size={14} /> Copy</>
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-20 py-12 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">B</div>
              <span>Rakibul Islam</span>
            </div>
            <div className="flex gap-8 text-gray-500 font-medium">
              <a href="#" className="hover:text-blue-600">GitHub</a>
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
              <a href="#" className="hover:text-blue-600">Twitter</a>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Developed with ❤️ for Students</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

