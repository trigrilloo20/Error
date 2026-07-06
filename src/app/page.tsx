'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, CheckCircle2, Database, HardDrive, Server, Wrench } from 'lucide-react'

export default function Home() {
  const damagedNodes = [
    { id: 'US-1', name: 'Oregon', status: 'Recuperando', progress: 0, total: 270 },
    { id: 'US-2', name: 'California', status: 'Recuperando', progress: 0, total: 270 },
    { id: 'US-3', name: 'Virginia', status: 'Recuperando', progress: 0, total: 270 },
    { id: 'US-4', name: 'Texas', status: 'Recuperando', progress: 0, total: 270 },
  ]

  const healthyNodes = [
    { id: 'US-5', name: 'Nueva York', status: 'Operativo', progress: 100 },
    { id: 'US-6', name: 'Florida', status: 'Operativo', progress: 100 },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      {/* Header */}
      <header className="w-full py-8 px-4 border-b border-[#2a1f3d]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
          <img 
            src="/saturn-logo.svg" 
            alt="Saturn Nodes Logo" 
            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(191,0,255,0.5)]"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#bf00ff] via-[#9900ff] to-[#7b00ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(191,0,255,0.8)]">
              Saturn Nodes
            </h1>
            <p className="text-[#bf00ff]/70 text-sm md:text-base mt-1">Infrastructure Network</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Alert Banner */}
          <Card className="bg-gradient-to-r from-[#2a1f3d]/80 to-[#1a1525]/80 border-[#bf00ff]/30 shadow-[0_0_20px_rgba(191,0,255,0.15)]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#bf00ff]/20 shrink-0">
                  <AlertCircle className="w-6 h-6 text-[#bf00ff]" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#bf00ff] mb-2">
                    Mantenimiento de Emergencia
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Estamos realizando trabajos de mantenimiento de emergencia en nuestra infraestructura. 
                    Nuestro equipo está trabajando activamente para restaurar todos los servicios lo antes posible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Migration Section */}
          <Card className="bg-[#12101a]/80 border-[#bf00ff]/20 shadow-[0_0_15px_rgba(191,0,255,0.1)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#bf00ff]/20">
                  <Server className="w-5 h-5 text-[#bf00ff]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Migracion de Servidores</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#bf00ff] animate-pulse"></div>
                  <span>Recuperando datos de servidores afectados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#bf00ff] animate-pulse"></div>
                  <span>Migracion en progreso a nueva infraestructura</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#bf00ff] animate-pulse"></div>
                  <span>Recuperando datos de nodos importantes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Damaged Nodes */}
          <Card className="bg-[#12101a]/80 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/20">
                  <Wrench className="w-5 h-5 text-orange-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-white">Nodos en Recuperacion</h3>
                <Badge variant="outline" className="bg-orange-500/20 text-orange-400 border-orange-500/30 ml-auto">
                  Con danos
                </Badge>
              </div>
              <div className="space-y-4">
                {damagedNodes.map((node) => (
                  <div 
                    key={node.id}
                    className="p-4 rounded-lg bg-[#1a1525] border border-orange-500/20"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <HardDrive className="w-5 h-5 text-orange-500" />
                        <div>
                          <span className="font-medium text-white">{node.id}</span>
                          <span className="text-gray-400 text-sm ml-2">({node.name})</span>
                        </div>
                      </div>
                      <Badge className="bg-orange-500/20 text-orange-400 border-0 animate-pulse">
                        {node.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Archivos recuperados</span>
                        <span className="text-orange-400 font-medium">
                          {node.progress}/{node.total} GS aprox
                        </span>
                      </div>
                      <Progress 
                        value={(node.progress / node.total) * 100} 
                        className="h-2 bg-[#2a1f3d]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Healthy Nodes */}
          <Card className="bg-[#12101a]/80 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white">Nodos Operativos</h3>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 ml-auto">
                  Sin danos
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {healthyNodes.map((node) => (
                  <div 
                    key={node.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-[#1a1525] border border-green-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-green-500" />
                      <div>
                        <span className="font-medium text-white">{node.id}</span>
                        <span className="text-gray-400 text-sm ml-2">({node.name})</span>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-0">
                      {node.status} 100%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Status Legend */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Operativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
              <span>En recuperacion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#bf00ff]"></div>
              <span>En proceso</span>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-[#2a1f3d]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Saturn Nodes - Equipo de Infraestructura
          </p>
          <p className="text-[#bf00ff]/50 text-xs mt-2">
            Estimamos tiempo de recuperacion: En evaluacion
          </p>
        </div>
      </footer>
    </div>
  )
}