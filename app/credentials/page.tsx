'use client'

import { useState } from 'react'
import { ArrowLeft, Award, Calendar, Building2, ExternalLink, Share2 } from 'lucide-react'
import Link from 'next/link'

interface Credential {
  id: string
  type: string
  name: string
  issuer: string
  issueDate: string
  tokenId: string
  verified: boolean
}

const mockCredentials: Credential[] = [
  {
    id: '1',
    type: 'Degree',
    name: 'Bachelor of Science in Computer Science',
    issuer: 'Stanford University',
    issueDate: '2024-05-15',
    tokenId: '7337',
    verified: true
  },
  {
    id: '2',
    type: 'Certification',
    name: 'Web3 Developer Certification',
    issuer: 'Base Academy',
    issueDate: '2024-03-20',
    tokenId: '9689',
    verified: true
  },
  {
    id: '3',
    type: 'Course',
    name: 'Blockchain Fundamentals',
    issuer: 'Coinbase Learn',
    issueDate: '2024-01-10',
    tokenId: '1649',
    verified: true
  }
]

export default function CredentialsPage() {
  const [credentials] = useState<Credential[]>(mockCredentials)

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
            My Credentials
          </h1>
          <p className="text-lg text-fg/70">
            View and manage your verifiable education credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential) => (
            <CredentialCard key={credential.id} credential={credential} />
          ))}
        </div>

        {credentials.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-fg/40" />
            </div>
            <h2 className="text-2xl font-bold text-fg mb-3">No Credentials Yet</h2>
            <p className="text-fg/70 mb-6">
              You haven't received any credentials yet. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <div className="group bg-surface rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Award className="w-6 h-6" />
        </div>
        {credential.verified && (
          <div className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
            Verified
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-fg mb-2 line-clamp-2">
        {credential.name}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-fg/70">
          <Building2 className="w-4 h-4" />
          {credential.issuer}
        </div>
        <div className="flex items-center gap-2 text-sm text-fg/70">
          <Calendar className="w-4 h-4" />
          {new Date(credential.issueDate).toLocaleDateString()}
        </div>
      </div>

      <div className="pt-4 border-t border-primary/10 flex gap-2">
        <button className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button className="px-4 py-2 bg-bg hover:bg-bg/80 text-fg rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
