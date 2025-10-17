'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, FileText, User, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

interface CredentialForm {
  studentAddress: string
  credentialType: string
  courseName: string
  issueDate: string
  expirationDate: string
  metadata: string
}

export default function IssuePage() {
  const [formData, setFormData] = useState<CredentialForm>({
    studentAddress: '',
    credentialType: 'degree',
    courseName: '',
    issueDate: '',
    expirationDate: '',
    metadata: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate transaction
    setTimeout(() => {
      setTxHash('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef')
      setIsSubmitting(false)
    }, 2000)
  }

  const handleInputChange = (field: keyof CredentialForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            Issue New Credential
          </h1>
          <p className="text-lg text-fg/70">
            Mint a verifiable credential NFT to a student's wallet
          </p>
        </div>

        {txHash ? (
          <div className="bg-surface rounded-lg p-8 border border-success/30 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-fg">Credential Issued Successfully!</h2>
              <p className="text-fg/70">The credential NFT has been minted to the student's wallet.</p>
              <div className="bg-bg rounded-lg p-4 mt-4">
                <p className="text-sm text-fg/60 mb-2">Transaction Hash:</p>
                <p className="text-sm text-primary font-mono break-all">{txHash}</p>
              </div>
              <button
                onClick={() => {
                  setTxHash(null)
                  setFormData({
                    studentAddress: '',
                    credentialType: 'degree',
                    courseName: '',
                    issueDate: '',
                    expirationDate: '',
                    metadata: ''
                  })
                }}
                className="mt-6 px-6 py-3 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200"
              >
                Issue Another Credential
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-surface rounded-lg p-8 border border-primary/10 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                  <User className="w-4 h-4" />
                  Student Address / Basename / FID
                </label>
                <input
                  type="text"
                  value={formData.studentAddress}
                  onChange={(e) => handleInputChange('studentAddress', e.target.value)}
                  placeholder="0x... or username.base or FID"
                  className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                  <Award className="w-4 h-4" />
                  Credential Type
                </label>
                <select
                  value={formData.credentialType}
                  onChange={(e) => handleInputChange('credentialType', e.target.value)}
                  className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="degree">Degree</option>
                  <option value="certification">Certification</option>
                  <option value="course">Course Completion</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                  <FileText className="w-4 h-4" />
                  Course / Program Name
                </label>
                <input
                  type="text"
                  value={formData.courseName}
                  onChange={(e) => handleInputChange('courseName', e.target.value)}
                  placeholder="e.g., Bachelor of Science in Computer Science"
                  className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                    <Calendar className="w-4 h-4" />
                    Issue Date
                  </label>
                  <input
                    type="date"
                    value={formData.issueDate}
                    onChange={(e) => handleInputChange('issueDate', e.target.value)}
                    className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                    <Calendar className="w-4 h-4" />
                    Expiration Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={formData.expirationDate}
                    onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                    className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-fg mb-2">
                  <Upload className="w-4 h-4" />
                  Additional Metadata (JSON)
                </label>
                <textarea
                  value={formData.metadata}
                  onChange={(e) => handleInputChange('metadata', e.target.value)}
                  placeholder='{"gpa": "3.8", "honors": "Cum Laude", "major": "Computer Science"}'
                  rows={4}
                  className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 bg-primary hover:bg-accent disabled:bg-primary/50 text-white rounded-lg font-semibold transition-all duration-200 shadow-button disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-pulse">Minting NFT...</span>
                  </span>
                ) : (
                  'Issue Credential'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
