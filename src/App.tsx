import React from 'react';
import { motion } from 'motion/react';
import { PawPrint, MapPin, Clock, Star, Phone, MessageCircle, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Paíra Guimarães Pessotto",
    text: "Prestação de serviços excepcional. Minha cachorra é atópica e tem alergia à lâmina da tosa mesmo com espaçador. Eles fazem a tosa na tesoura.",
    stars: 5,
    date: "10 meses atrás"
  },
  {
    name: "Vivian Ravazzi",
    text: "Veterinária excepcional, muito cuidadosa e sempre assertiva nos diagnósticos. Obrigada equipe do Pet Peron por todo carinho.",
    stars: 5,
    date: "2 anos atrás"
  },
  {
    name: "Carolina Duarte",
    text: "Ótimo atendimento. A Dr. Paula realmente tem entendimento no tratamento de gatos. Show recomendado. A minha gata melhorou 100%.",
    stars: 5,
    date: "um ano atrás"
  },
  {
    name: "Fabio Miguel (Nino)",
    text: "MELHOR PET! Meus cachorros adoram o local! Equipe nota mil! Atenciosos com os donos e os dogs! Super carinhosos e cuidadosos!",
    stars: 5,
    date: "3 anos atrás"
  }
];

const portfolio = [
  {
    title: "BANHO",
    desc: "Relaxamento e higiene profunda",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "CONSULTA",
    desc: "Saúde monitorada de perto",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "BRINQUEDO",
    desc: "Diversão e bem-estar garantidos",
    image: "https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?auto=format&fit=crop&q=80&w=600"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-off-white text-[#1A1A1A] font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
              <PawPrint size={24} fill="currentColor" />
            </div>
            <div>
              <h1 className="font-display text-2xl text-navy leading-none">Pet Peron</h1>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">Desde 2011</p>
            </div>
          </div>
          <a 
            href="https://wa.me/551938342599?text=Vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20essa%20categoria." 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-5 py-2.5 rounded-lg font-bold transition-colors"
          >
            <MessageCircle size={18} />
            Agendar Agora
          </a>
        </div>
      </header>

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[80vh] flex flex-col justify-end items-center sm:items-start p-6 sm:p-12 md:p-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/ChatGPT%20Image%2021_04_2026,%2014_51_21.png" 
              alt="Pet Peron - Atendimento Especializado" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl text-white"
          >
            <h2 className="font-display text-5xl md:text-7xl mb-4 leading-tight uppercase font-black">
              Pet Peron
            </h2>
            <p className="text-lg md:text-2xl font-bold mb-2 uppercase tracking-wide">
              CARINHO QUE O SEU PET SENTE DE LONGE.
            </p>
            <p className="text-white/90 text-base md:text-lg max-w-lg mb-8">
              Banho, tosa e atendimento veterinário excepcional com amor, paciência e assertividade. Seu amigo de quatro patas no melhor lugar.
            </p>
            
            <a 
              href="https://wa.me/551938342599?text=Vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20essa%20categoria." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={22} fill="currentColor" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </section>

        {/* ABOUT & HIGHLIGHTS */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 border-2 border-dotted border-primary rounded-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Cuidados veterinários especializados" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="flex text-accent">
                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-sm">Nota 5.0 no Google</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="font-display text-primary text-3xl md:text-4xl mb-6">
                MUITO ALÉM DO BANHO
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Nós transformamos as idas ao pet shop em um momento de alegria e segurança. 
                Com uma equipe altamente sensível, garantimos que seu pet receba não apenas um serviço estético de qualidade, mas o afeto que ele merece.
              </p>
              <ul className="space-y-4">
                {[
                  "Veterinária especializada e assertiva",
                  "Especialistas em tosa na tesoura para cães sensíveis",
                  "Atendimento especial e focado no bem-estar animal",
                  "Estrutura higiênica e equipe capacitada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <PawPrint className="text-primary shrink-0 mt-1" size={18} fill="currentColor" />
                    <span className="font-bold text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PORTFOLIO / GALLERY */}
        <section className="py-20 bg-secondary px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-white/80 font-bold tracking-widest uppercase text-sm mb-2 block">
                Nosso Trabalho
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white">
                PACIENTES & CLIENTES
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {portfolio.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 pt-20">
                      <h4 className="font-display text-white text-3xl mb-1">{item.title}</h4>
                      <p className="text-white/90 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLINIC & SERVICES IN DETAIL */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-off-white">
              <PawPrint size={200} fill="currentColor" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-display text-3xl mb-4 text-navy">Saúde em Primeiro Lugar</h3>
                <p className="mb-6">
                  A Dra. Paula é reconhecida por sua extrema dedicação, seja para cães ou gatos. Um diagnóstico assertivo faz toda a diferença para uma recuperação 100%.
                </p>
                <div className="bg-off-white p-4 rounded-xl border border-gray-200">
                  <p className="font-bold text-sm flex items-center justify-between">
                    <span>Atendimento Veterinário</span>
                    <CheckCircle2 className="text-green-500" size={18} />
                  </p>
                </div>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="font-display text-3xl mb-4 text-navy">Estética e Sensibilidade</h3>
                <p className="mb-6">
                  Fazemos tosa na tesoura com todo o cuidado, ideal para cães atópicos ou com alergias à lâmina. Acreditamos que a tosa higiênica é essencial para a saúde.
                </p>
                <div className="bg-off-white p-4 rounded-xl border border-gray-200">
                  <p className="font-bold text-sm flex items-center justify-between">
                    <span>Banho & Tosa Especializada</span>
                    <CheckCircle2 className="text-green-500" size={18} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / REVIEWS */}
        <section className="py-20 bg-off-white px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl text-center text-navy mb-12">
              O QUE DIZEM SOBRE NÓS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex text-accent mb-4">
                    {[...Array(review.stars)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                  <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                    <span className="font-bold text-navy">{review.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <a 
                href="https://maps.app.goo.gl/VTJj3WwkGn9NaGyf8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 font-bold hover:shadow-md hover:border-primary transition-all group"
              >
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span className="group-hover:text-primary">43 avaliações 5 estrelas no Google</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT & LOCATION */}
        <section id="contato" className="py-20 px-6 bg-navy text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-4xl mb-6 text-white">VENHA NOS VISITAR</h2>
                <p className="text-white/80 mb-8 max-w-md">
                  Estamos de portas abertas para receber seu pet com todo o amor do mundo. Agende um horário conosco!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Endereço</h4>
                      <p className="text-white/70">R. Voluntário João dos Santos, 899 - Centro<br/>Indaiatuba - SP, 13330-230</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Horário</h4>
                      <p className="text-white/70">Aberto · Fecha 18:00<br/>Terças-feiras é costumeiramente o nosso pico.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Telefone</h4>
                      <p className="text-white/70">(19) 3834-2599</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
                  <MessageCircle size={40} fill="currentColor" />
                </div>
                <h3 className="font-display text-2xl text-navy mb-2">Contato Rápido</h3>
                <p className="text-gray-600 mb-8">Fale diretamente com nossa equipe pelo WhatsApp para agendamentos ou dúvidas.</p>
                <a 
                  href="https://wa.me/551938342599?text=Vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20essa%20categoria." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  <MessageCircle size={24} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy border-t border-white/10 py-8 px-6 text-center text-white/50 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white font-bold opacity-100">
            <PawPrint size={18} fill="currentColor" className="text-primary"/> Pet Peron
          </div>
          <p>© {new Date().getFullYear()} Pet Peron. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

