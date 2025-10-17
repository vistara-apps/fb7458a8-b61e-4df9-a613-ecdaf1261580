'use client'

import { useState } from 'react'
import { ArrowLeft, Search, CheckCircle2, XCircle, Award, Building2, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface VerificationResult {
  found: boolean
  credential?: {
    name: string
    type: string
    issuer: string
    issueDate: string
    tokenId: string
    metadataUri: string
  }
}

export default function VerifyPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [result, setResult] = useState<VerificationResult | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // Simulate verification
    setTimeout(() => {
      setResult({
        found: true,
        credential: {
          name: 'Bachelor of Science in Computer Science',
          type: 'Degree',
          issuer: 'Stanford University',
          issueDate: '2024-05-15',
          tokenId: '7337',
          metadataUri: 'ipfs://QmX...'
        }
      })
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-fg/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-fg mb-3">
            Verify Credentials
          </h1>
          <p className="text-lg text-fg/70">
            Instantly verify educational credentials on Base
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter wallet address, Basename, or FID..."
              className="w-full pl-12 pr-4 py-4 bg-surface border border-primary/20 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="w-full mt-4 px-6 py-4 bg-primary hover:bg-accent disabled:bg-primary/50 text-white rounded-lg font-semibold transition-all duration-200 shadow-button disabled:cursor-not-allowed"
          >
            {isSearching ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-pulse">Verifying...</span>
              </span>
            ) : (
              'Verify Credentials'
            )}
          </button>
        </form>

        {result && (
          <div className="animate-fade-in">
            {result.found && result.credential ? (
              <div className="bg-surface rounded-lg p-8 border border-success/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-fg">Credential Verified</h2>
                    <p className="text-sm text-fg/70">This credential is authentic and valid</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-bg rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="text-sm text-fg/60 mb-1">Credential Name</div>
                        <div className="font-semibold text-fg">{result.credential.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-bg rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="text-sm text-fg/60 mb-1">Issuing Institution</div>
                        <div className="font-semibold text-fg">{result.credential.issuer}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-bg rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-fg/60 mb-1">Issue Date</div>
                          <div className="font-semibold text-fg">
                            {new Date(result.credential.issueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-bg rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-fg/60 mb-1">Token ID</div>
                          <div className="font-semibold text-fg">#{result.credential.tokenId}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/10">
                    <button className="w-full px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View on BaseScan
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface rounded-lg p-8 border border-error/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-error" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-fg">No Credentials Found</h2>
                    <p className="text-sm text-fg/70">No verified credentials found for this address</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
