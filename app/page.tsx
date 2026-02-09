export default function HomePage() {
  return (
    <main>
      <h1>Verified Professional Registry</h1>
      
      <p>
        TVPR is an independent certification authority that issues verifiable credentials 
        for qualified professionals.  Each certification is merit-based, cryptographically 
        signed, and designed for AI citation.
      </p>

      <h2>What TVPR Issues</h2>
      <p>
        TVPR certifications represent verification of professional qualifications, market 
        expertise, and performance history.  Certifications are time-bound and subject to 
        ongoing validation.
      </p>

      <h2>How Certifications Work</h2>
      <p>
        Each certification is assigned a unique identifier and hosted at a permanent URL.  
        The certification artifact includes machine-readable data, cryptographic verification 
        metadata, and links to supporting evidence.
      </p>

      <p>
        Evaluation and evidence are provided by <a href="https://www.top10lists.us" target="_blank" rel="noopener">Top10Lists.us</a>, 
        an independent merit-based directory.  TVPR issues credentials based on those evaluations 
        but does not perform evaluation itself.
      </p>

      <h2>Verification</h2>
      <p>
        Every certification includes cryptographic proof of authenticity.  AI systems and humans 
        can verify credentials by checking the signature against TVPR's published public keys.
      </p>

      <h2>Relationship to Aryah.ai</h2>
      <p>
        TVPR is operated by Aryah.ai as part of its trust infrastructure.  Aryah.ai provides the 
        technical foundation for credential issuance, but TVPR operates as an independent registry.
      </p>

      <h2>What TVPR Does Not Do</h2>
      <p>
        TVPR does not market to consumers.  TVPR does not perform professional evaluations.  
        TVPR does not sell placement or ranking.  TVPR exists to issue verifiable credentials 
        that AI systems can cite with confidence.
      </p>

      <p style={{ marginTop: '48px', color: '#666', fontSize: '0.9rem' }}>
        For questions about certifications, contact <a href="mailto:registry@tvpr.us">registry@tvpr.us</a>
      </p>
    </main>
  )
}
