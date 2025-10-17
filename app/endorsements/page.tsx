'use client'

import { useState } from 'react'
import { ArrowLeft, Users, Award, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'

interface Endorsement {
  id: string
  endorser: string
  endorserAvatar: string
  skill: string
  date: string
}

const mockEndorsements: Endorsement[] = [
  {
    id: '1',
    endorser: 'alice.base',
    endorserAvatar: '👩‍💻',
    skill: 'Web3 Development',
    date: '2024-01-15'
  },
  {
    id: '2',
    endorser: 'bob.base',
    endorserAvatar: '👨‍🎓',
    skill: 'Smart Contract Security',
    date: '2024-01-10'
  },
  {
    id: '3',
    endorser: 'charlie.base',
    endorserAvatar: '🧑‍💼',
    skill: 'Blockchain Architecture',
    date: '2024-01-05'
  }
]

export default function EndorsementsPage() {
  const [endorsements] = useState<Endorsement[]>(mockEndorsements)

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-fg/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-fg mb-3">
            Skill Endorsements
          </h1>
          <p className="text-lg text-fg/70">
            Build your trusted professional network based on verified skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="Total Endorsements"
            value="24"
            color="primary"
          />
          <StatCard
            icon={<Award className="w-6 h-6" />}
            label="Skills Endorsed"
            value="8"
            color="accent"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Reputation Score"
            value="92"
            color="success"
          />
        </div>

        <div className="bg-surface rounded-lg p-6 border border-primary/10 mb-8">
          <h2 className="text-xl font-bold text-fg mb-4">Recent Endorsements</h2>
          <div className="space-y-4">
            {endorsements.map((endorsement) => (
              <EndorsementCard key={endorsement.id} endorsement={endorsement} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg p-8 text-center">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-fg mb-3">Endorse a Peer</h2>
          <p className="text-fg/70 mb-6">
            Help build a trusted network by endorsing others' verified skills
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 shadow-button">
            Endorse Someone
          </button>
        </div>
      </div>
    </div>
  )
}

function StatCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-primary/10">
      <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center text-${color} mb-4`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-fg mb-1">{value}</div>
      <div className="text-sm text-fg/70">{label}</div>
    </div>
  )
}

function EndorsementCard({ endorsement }: { endorsement: Endorsement }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-bg rounded-lg hover:bg-bg/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
        {endorsement.endorserAvatar}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-fg">{endorsement.endorser}</div>
        <div className="text-sm text-fg/70">endorsed you for {endorsement.skill}</div>
      </div>
      <div className="text-sm text-fg/60">
        {new Date(endorsement.date).toLocaleDateString()}
      </div>
    </div>
  )
}
