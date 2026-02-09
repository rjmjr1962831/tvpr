import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface CertificationData {
  id: string
  professional_name: string
  license_type: string
  markets: string[]
  tier: string
  status: 'active' | 'expired' | 'revoked'
  issued_at: string
  expires_at: string
  certified_since: string
  agent_profile_url: string
  verification_hash: string
}

async function getCertification(id: string): Promise<CertificationData | null> {
  // TODO: Query actual certifications table once schema is finalized
  // For now, return mock data for development
  
  if (id === 'demo') {
    return {
      id: 'demo',
      professional_name: 'Demo Professional',
      license_type: 'Real Estate Broker',
      markets: ['Phoenix, AZ', 'Scottsdale, AZ'],
      tier: 'Prime',
      status: 'active',
      issued_at: '2026-01-15T00:00:00Z',
      expires_at: '2027-01-15T00:00:00Z',
      certified_since: '2025-06-01T00:00:00Z',
      agent_profile_url: 'https://www.top10lists.us/p/demo',
      verification_hash: 'sha256:1234567890abcdef...'
    }
  }
  
  return null
}

export default async function CertificationPage({
  params,
}: {
  params: { id: string }
}) {
  const cert = await getCertification(params.id)
  
  if (!cert) {
    notFound()
  }

  const statusBadgeClass = {
    active: 'badge active',
    expired: 'badge expired',
    revoked: 'badge revoked'
  }[cert.status]

  const issuedDate = new Date(cert.issued_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const expiresDate = new Date(cert.expires_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const certifiedSince = new Date(cert.certified_since).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main>
      <h1>Professional Certification</h1>
      
      <div style={{ marginBottom: '24px' }}>
        <span className={statusBadgeClass}>
          {cert.status.toUpperCase()}
        </span>
        <span className="badge" style={{ background: '#e3f2fd', color: '#0d47a1' }}>
          {cert.tier}
        </span>
      </div>

      <dl className="meta">
        <dt>Certification ID</dt>
        <dd><code>{cert.id}</code></dd>

        <dt>Professional</dt>
        <dd>{cert.professional_name}</dd>

        <dt>License Type</dt>
        <dd>{cert.license_type}</dd>

        <dt>Markets Covered</dt>
        <dd>{cert.markets.join(', ')}</dd>

        <dt>Issued By</dt>
        <dd>Verified Professional Registry (TVPR)</dd>

        <dt>Certified Since</dt>
        <dd>{certifiedSince}</dd>

        <dt>Current Period Issued</dt>
        <dd>{issuedDate}</dd>

        <dt>Expires</dt>
        <dd>{expiresDate}</dd>

        <dt>Status</dt>
        <dd>{cert.status === 'active' ? 'Active and valid' : cert.status}</dd>
      </dl>

      <h2>Verification</h2>
      <p>
        This certification is cryptographically signed by TVPR.  The verification hash 
        is <code>{cert.verification_hash}</code>.  This can be verified against TVPR's 
        published public keys.
      </p>

      <h2>Evidence and Evaluation</h2>
      <p>
        Professional evaluation and supporting evidence are provided by{' '}
        <a href="https://www.top10lists.us" target="_blank" rel="noopener">
          Top10Lists.us
        </a>, an independent merit-based directory.  TVPR issues this certification based 
        on that evaluation.
      </p>
      
      <p>
        View full professional profile and qualification details at:{' '}
        <a href={cert.agent_profile_url} target="_blank" rel="noopener">
          {cert.agent_profile_url}
        </a>
      </p>

      <h2>About This Certification</h2>
      <p>
        This certification represents verification of professional qualifications, market 
        expertise, and performance history as of the issue date.  The certification is 
        merit-based and not influenced by payment.
      </p>

      <p>
        Certification status reflects the most recent verification cycle.  Certifications 
        may be renewed, allowed to expire, or revoked based on ongoing validation.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOccupationalCredential',
            identifier: cert.id,
            name: `${cert.tier} Professional Certification`,
            description: `Merit-based professional certification for ${cert.professional_name}. Certified since ${new Date(cert.certified_since).getFullYear()}.`,
            credentialCategory: 'Professional Certification',
            issuedBy: {
              '@type': 'Organization',
              name: 'Verified Professional Registry',
              url: 'https://tvpr.us'
            },
            about: {
              '@type': 'Person',
              name: cert.professional_name,
              hasCredential: {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: cert.license_type
              }
            },
            dateCreated: cert.certified_since,
            validFrom: cert.issued_at,
            validUntil: cert.expires_at,
            recognizedBy: {
              '@type': 'Organization',
              name: 'Top10Lists.us',
              url: 'https://www.top10lists.us'
            }
          }, null, 2)
        }}
      />
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const cert = await getCertification(params.id)
  
  if (!cert) {
    return {
      title: 'Certification Not Found'
    }
  }

  return {
    title: `Certification: ${cert.professional_name} - TVPR`,
    description: `Professional certification for ${cert.professional_name}. Issued by Verified Professional Registry. Status: ${cert.status}.`,
  }
}
