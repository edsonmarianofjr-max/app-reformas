"use client"

import { useState } from 'react'
import { Shield, Clock, Star, Phone, Mail, MapPin, CheckCircle, ArrowRight, Menu, X, Home, Users, Circle } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Circle,
      title: "Fachadas & Revestimentos",
      description: "ACM, restauração estrutural e pintura predial especializada",
      price: "A partir de R$ 35/m²"
    },
    {
      icon: Home,
      title: "Toldos & Coberturas",
      description: "Toldos de policarbonato com garantia de 10 anos",
      price: "A partir de R$ 150/m²"
    },
    {
      icon: Circle,
      title: "Esquadrias & Vidros",
      description: "Instalação de vidros Blindex e esquadrias modernas",
      price: "A partir de R$ 200/m²"
    },
    {
      icon: Circle,
      title: "Sinalização LED",
      description: "Letreiros em Neon LED para comunicação visual",
      price: "A partir de R$ 150/m²"
    }
  ]

  const differentials = [
    {
      icon: Shield,
      title: "Proteção Total",
      description: "Lona plástica e aspiração diária durante toda a obra"
    },
    {
      icon: Clock,
      title: "Prazo Garantido",
      description: "Cronograma com multa por atraso - compromisso real"
    },
    {
      icon: Users,
      title: "Equipe Própria",
      description: "Profissionais selecionados e treinados pela empresa"
    },
    {
      icon: CheckCircle,
      title: "Gestão 4.0",
      description: "Acompanhamento diário via WhatsApp com fotos"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Circle className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mariano Facilities</h1>
                <p className="text-sm text-gray-600">& Suprimentos Express</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#diferenciais" className="text-gray-700 hover:text-blue-600 transition-colors">Diferenciais</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
                <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
                <a href="#diferenciais" className="text-gray-700 hover:text-blue-600 transition-colors">Diferenciais</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Reformas Sem
              <span className="text-blue-600 block">Dor de Cabeça</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Especialistas em fachadas, esquadrias e serviços prediais em Londrina e região. 
              Acabou a velha ideia de sujeira e atrasos nas reformas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contato" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#servicos" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">R$ 60bi</div>
              <div className="text-gray-600">Mercado de Facilities no Brasil</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4%</div>
              <div className="text-gray-600">Crescimento anual até 2027</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Valorização com reforma de fachada</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Entregas no prazo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para reformas prediais com qualidade e prazo garantido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Que Escolher a Mariano?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nosso modelo operacional "Zero Dor de Cabeça" garante uma experiência única
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <differential.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{differential.title}</h3>
                <p className="text-gray-600">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Reformar Sem Dor de Cabeça?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Solicite seu orçamento gratuito e descubra como podemos transformar seu projeto
          </p>
          <a 
            href="#contato" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Estamos prontos para atender sua necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">(43) 99999-9999</div>
                    <div className="text-gray-600">WhatsApp disponível 24h</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">contato@marianofacilities.com.br</div>
                    <div className="text-gray-600">Resposta em até 2 horas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Londrina - PR</div>
                    <div className="text-gray-600">Atendemos toda a região</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Áreas de Atendimento</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>• Londrina</div>
                  <div>• Maringá</div>
                  <div>• Apucarana</div>
                  <div>• Cambé</div>
                  <div>• Rolândia</div>
                  <div>• Arapongas</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solicite seu Orçamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(43) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Serviço</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Selecione o serviço</option>
                    <option>Fachadas & Revestimentos</option>
                    <option>Toldos & Coberturas</option>
                    <option>Esquadrias & Vidros</option>
                    <option>Sinalização LED</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descrição do Projeto</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva seu projeto..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Circle className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Mariano Facilities</h3>
                  <p className="text-gray-400">& Suprimentos Express</p>
                </div>
              </div>
              <p className="text-gray-400">
                Especialistas em reformas prediais sem dor de cabeça. 
                Qualidade, prazo e transparência garantidos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fachadas & Revestimentos</li>
                <li>Toldos & Coberturas</li>
                <li>Esquadrias & Vidros</li>
                <li>Sinalização LED</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>CNPJ: 44.872.006/0001-24</li>
                <li>Londrina - PR</li>
                <li>Ativa desde 2022</li>
                <li>Licenciada e Segurada</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mariano Facilities & Suprimentos Express. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}