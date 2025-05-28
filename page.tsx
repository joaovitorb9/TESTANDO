'use client'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ idade: '', altura: '', peso: '', pesoAlvo: '', dias: '' })
  const [plano, setPlano] = useState('')

  const gerarPlano = () => {
    const { idade, altura, peso, pesoAlvo, dias } = form
    const pesoNum = parseFloat(peso)
    const pesoAlvoNum = parseFloat(pesoAlvo)
    const objetivo = pesoNum > pesoAlvoNum ? 'perder gordura' : 'ganhar massa'
    const nivel = idade < 30 ? 'iniciante' : idade < 50 ? 'intermediário' : 'avançado'
    const divisoes = {
      '1': 'Full Body',
      '2': 'AB',
      '3': 'ABC',
      '4': 'ABCD',
      '5': 'ABCDE',
      '6': 'ABCDEF',
      '7': 'AB + cardio'
    }
    const divisao = divisoes[dias] || 'ABC'

    const treino = `Plano de treino (${divisao}) para ${objetivo} (${nivel}):
- Segunda: Peito e tríceps
- Terça: Costas e bíceps
- Quarta: Pernas e abdômen
- Quinta: Ombro e cardio
- Sexta: Full body funcional
- Sábado: Cardio leve ou descanso
- Domingo: Descanso`

    setPlano(treino)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Gerador de Treino Personalizado</h1>
      <div className="grid gap-2 max-w-md w-full">
        {['idade', 'altura', 'peso', 'pesoAlvo', 'dias'].map((campo) => (
          <input
            key={campo}
            type="number"
            placeholder={campo}
            className="p-2 border rounded"
            onChange={(e) => setForm({ ...form, [campo]: e.target.value })}
          />
        ))}
        <button onClick={gerarPlano} className="bg-blue-600 text-white py-2 rounded mt-2">Gerar Plano</button>
        {plano && (
          <div className="mt-4 whitespace-pre-wrap p-4 bg-white border rounded">
            {plano}
          </div>
        )}
      </div>
    </main>
  )
}
