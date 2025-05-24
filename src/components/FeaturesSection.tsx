function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '3rem 2rem', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Features</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="/Screenshot 2025-05-14 114748.png" alt="Feature 1" style={{ width: '100%', borderRadius: '0.5rem' }} />
          <h3>Natural Products</h3>
          <p>All products are 100% natural and organic.</p>
        </div>
        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="/Screenshot 2025-05-14 114759.png" alt="Feature 2" style={{ width: '100%', borderRadius: '0.5rem' }} />
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and safely.</p>
        </div>
        <div style={{ flex: '1 1 200px', background: '#f9f9f9', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="/Screenshot 2025-05-14 114819.png" alt="Feature 3" style={{ width: '100%', borderRadius: '0.5rem' }} />
          <h3>Best Prices</h3>
          <p>Affordable prices for premium quality.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection