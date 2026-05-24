import {Link} from 'react-router-dom'
import './BestOfSection.css'

function BestOfSection({intro, entries}) {
  if (!entries?.length) return null

  return (
    <section className="best-of-section">
      <h2 className="best-of-heading">Best of</h2>
      {intro && <p className="best-of-intro">{intro}</p>}
      <div className="best-of-scroll">
        {entries.map((entry) => {
          const rec = entry.recommendation
          if (!rec?.slug?.current) return null
          return (
            <Link key={entry._id} to={`/recommendation/${rec.slug.current}`} className="best-of-card">
              {rec.imageUrl && <img src={rec.imageUrl} alt="" className="best-of-card-image" />}
              <div className="best-of-card-body">
                <h3>{entry.title || rec.name}</h3>
                {entry.blurb && <p>{entry.blurb}</p>}
                <span className="best-of-meta">
                  {rec.category}
                  {rec.priceLevel ? ` · ${rec.priceLevel}` : ''}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default BestOfSection
