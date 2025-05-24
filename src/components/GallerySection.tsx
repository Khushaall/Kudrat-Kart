function GallerySection() {
  return (
    <section id="gallery" style={{ padding: '3rem 2rem', background: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Gallery</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img src="/Screenshot 2025-05-14 114834.png" alt="Gallery 1" style={{ width: '200px', borderRadius: '0.5rem' }} />
        <img src="/Screenshot 2025-05-14 114844.png" alt="Gallery 2" style={{ width: '200px', borderRadius: '0.5rem' }} />
        <img src="/Screenshot 2025-05-14 114853.png" alt="Gallery 3" style={{ width: '200px', borderRadius: '0.5rem' }} />
        <img src="/Screenshot 2025-05-14 114908.png" alt="Gallery 4" style={{ width: '200px', borderRadius: '0.5rem' }} />
        <img src="/Screenshot 2025-05-14 114915.png" alt="Gallery 5" style={{ width: '200px', borderRadius: '0.5rem' }} />
      </div>
    </section>
  )
}

export default GallerySection