'use client'

import { useEffect, useState } from 'react'
import { Shield, Award, CheckCircle2, Users, ArrowRight, GraduationCap, FileCheck, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-fg/80">Powered by Base & Farcaster</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-fg leading-tight">
              Your <span className="text-primary">Verifiable</span> Education
              <br />
              Credentials on Base
            </h1>
            
            <p className="text-lg md:text-xl text-fg/70 max-w-3xl mx-auto leading-relaxed">
              Institutions issue non-transferable NFTs as immutable credentials. 
              Students own and showcase their achievements. Employers verify instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/issue"
                className="group px-8 py-4 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 shadow-button hover:shadow-lg flex items-center gap-2"
              >
                Issue Credentials
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/verify"
                className="px-8 py-4 bg-surface hover:bg-surface/80 text-fg rounded-lg font-semibold transition-all duration-200 border border-primary/20"
              >
                Verify Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4">
              How EduCred Works
            </h2>
            <p className="text-lg text-fg/70">
              Three simple steps to revolutionize educational credentials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Issue Credentials"
              description="Educational institutions mint non-transferable NFTs representing degrees, certifications, or course completions directly to student wallets on Base."
              color="primary"
            />
            
            <FeatureCard
              icon={<FileCheck className="w-8 h-8" />}
              title="Verify Instantly"
              description="Employers and third parties can instantly verify credentials by scanning a QR code or linking to a Basename/FID, displaying NFT details on Base."
              color="accent"
            />
            
            <FeatureCard
              icon={<Share2 className="w-8 h-8" />}
              title="Showcase Achievements"
              description="Users link their Basename/FID to verified credential NFTs, displaying them as badges on their Farcaster profile or in Frames."
              color="success"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-fg">
                Why Choose EduCred Base?
              </h2>
              
              <BenefitItem
                icon={<Shield className="w-6 h-6" />}
                title="Tamper-Proof Records"
                description="Immutable blockchain storage ensures credentials cannot be forged or altered"
              />
              
              <BenefitItem
                icon={<CheckCircle2 className="w-6 h-6" />}
                title="Instant Verification"
                description="Reduce verification time from days to seconds with on-chain proof"
              />
              
              <BenefitItem
                icon={<Award className="w-6 h-6" />}
                title="Student Ownership"
                description="Students fully own their credentials, independent of institutions"
              />
              
              <BenefitItem
                icon={<Users className="w-6 h-6" />}
                title="Social Integration"
                description="Showcase achievements on Farcaster with verifiable proof"
              />
            </div>

            <div className="relative">
              <div className="bg-surface rounded-lg p-8 shadow-card border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-fg">Bachelor of Science</div>
                      <div className="text-sm text-fg/60">Computer Science</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-fg">Web3 Developer</div>
                      <div className="text-sm text-fg/60">Certification</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-fg">Blockchain Fundamentals</div>
                      <div className="text-sm text-fg/60">Course Completion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-fg">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-fg/70">
            Join the future of verifiable education credentials on Base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/credentials"
              className="px-8 py-4 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all duration-200 shadow-button"
            >
              View My Credentials
            </Link>
            <Link
              href="/endorsements"
              className="px-8 py-4 bg-surface hover:bg-surface/80 text-fg rounded-lg font-semibold transition-all duration-200 border border-primary/20"
            >
              Explore Endorsements
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-fg">EduCred Base</span>
            </div>
            <div className="text-sm text-fg/60">
              Built on Base • Powered by Farcaster
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <div className="group p-8 bg-surface rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
      <div className={`w-16 h-16 rounded-lg bg-${color}/10 flex items-center justify-center mb-6 text-${color} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-fg mb-3">{title}</h3>
      <p className="text-fg/70 leading-relaxed">{description}</p>
    </div>
  )
}

function BenefitItem({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-fg mb-1">{title}</h3>
        <p className="text-fg/70 text-sm">{description}</p>
      </div>
    </div>
  )
}
