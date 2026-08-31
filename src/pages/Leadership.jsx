import { useState } from 'react'

import anitaJadhav from '../assets/image/anita_jadhav.png'
import drVinodraoMore from '../assets/image/dr_vinodrao_more.png'
import kacharuPatilWagh from '../assets/image/kacharu_patil_wagh.png'
import shreeAjitSaroj from '../assets/image/shree_ajit_saroj.png'
import shreeArunPawar from '../assets/image/shree_arun_pawar.png'
import shreeAshokraoDhanagavakar from '../assets/image/shree_ashokrao_dhanagavakar.png'
import shreeAshokraoRamchandraAlhat from '../assets/image/shree_ashokrao_ramchandra_alhat.png'
import shreeBalasahebPatole from '../assets/image/shree_balasaheb_patole.png'
import shreeKailasJaiswar from '../assets/image/shree_kailas_jaiswar.png'
import shreeMaheshThorat from '../assets/image/shree_mahesh_thorat.png'
import shreeManjabapuSalave from '../assets/image/shree_manjabapu_salave.png'
import shreeRajkumarChandanSahe from '../assets/image/shree_rajkumar_chandan_sahe.png'
import shreeRamraoMaharajBhategavakar from '../assets/image/shree_ramraomaharaj_bhategavakar.png'
import shreeRavindraKamble from '../assets/image/shree_ravindra_kambale.png'
import shreeSachinAlhat from '../assets/image/shree_sachin_alhat.png'
import shreeSandipPawar from '../assets/image/shree_sandip_pawar.png'
import shreeSanthoshdadaChaudhari from '../assets/image/shree_santhoshdada_chaudhari.png'
import shreeSantoshNadekar from '../assets/image/shree_santosh_nadekar.png'
import shreeSatyaprakashJaiswar from '../assets/image/shree_satyaprakash_jaiswar.png'
import shreeShivajiraoPatil from '../assets/image/shree_shivajirao_patil.png'
import shreeVilasKadam from '../assets/image/shree_vilas_kadam.png'

const founder = {
  id: 'founder',
  name: 'Shri. Ashokrao Ramchandra Alhat',
  designation: 'Founder / National President',
  image: shreeAshokraoRamchandraAlhat,
  bio: `The provided party profile describes Shri. Ashokrao Ramchandra Alhat as the founder and National President of Janhit Lokshahi Party. It states that he was born in 1966 in a Matang-Mang farmer family, completed his education with the support of his parents, and later came to Mumbai. The profile describes his involvement in social movements and public activity, his work with social organisations, and the formation of Janhit Lokshahi Party after travelling across Maharashtra. It also records his participation in the 2019 Lok Sabha and Vidhan Sabha electoral work and describes the party's guiding ideas as inspired by Chhatrapati Shivaji Maharaj, Chhatrapati Shahu Maharaj, Mahatma Jyotiba Phule, Dr. Babasaheb Ambedkar and Sahityasarmrat Annabhau Sathe.`,
}

const leaders = [
  { id: 'vinodrao-more', name: 'Dr. Vinodrao More', designation: 'State President', image: drVinodraoMore },
  { id: 'santoshdada-chaudhari', name: 'Shri. Santoshdada Chaudhari', designation: 'National Vice President', image: shreeSanthoshdadaChaudhari },
  { id: 'ramrao-bhategavakar', name: 'Shri. Ramraomaharaj Bhategavakar', designation: 'Advisor, Maharashtra', image: shreeRamraoMaharajBhategavakar },
  { id: 'anita-jadhav', name: 'Smt. Anita Jadhav', designation: 'Treasurer', image: anitaJadhav },
  { id: 'ashokrao-dhanagavakar', name: 'Shri. Ashokrao Dhanagavakar', designation: 'Maharashtra Vice President', image: shreeAshokraoDhanagavakar },
  { id: 'balasaheb-patole', name: 'Shri. Balasaheb Patole', designation: 'Maharashtra Leader', image: shreeBalasahebPatole },
  { id: 'mahesh-thorat', name: 'Shri. Mahesh Thorat', designation: 'Maharashtra Organizer', image: shreeMaheshThorat },
  { id: 'santosh-nadekar', name: 'Shri. Santosh Nadekar', designation: 'District President', area: 'Thane District', image: shreeSantoshNadekar },
  { id: 'ajit-saroj', name: 'Shri. Ajit Saroj', designation: 'Advisor', image: shreeAjitSaroj },
  { id: 'rajkumar-chandan-sahe', name: 'Shri. Rajkumar Chandan Sahe', designation: 'President', area: 'Navi Mumbai', image: shreeRajkumarChandanSahe },
  { id: 'kacharu-patil-wagh', name: 'Shri. Kacharu Patil Wagh', designation: 'District Vice President', area: 'Ahmednagar District', image: kacharuPatilWagh },
  { id: 'sachin-alhat', name: 'Shri. Sachin Alhat', designation: 'Organizer', area: 'Navi Mumbai', image: shreeSachinAlhat },
  { id: 'vilas-kadam', name: 'Shri. Vilas Kadam', designation: 'District President', area: 'Ahmednagar', image: shreeVilasKadam },
  { id: 'ravindra-kamble', name: 'Shri. Ravindra Kamble', designation: 'District Vice President / Youth President', area: 'Ahmednagar', image: shreeRavindraKamble },
  { id: 'satyaprakash-jaiswar', name: 'Shri. Satyaprakash Jaiswar', designation: 'Maharashtra Organizer', image: shreeSatyaprakashJaiswar },
  { id: 'manjabapu-salave', name: 'Shri. Manjabapu Salave', designation: 'President', area: 'Western Maharashtra', image: shreeManjabapuSalave },
  { id: 'kailas-jaiswar', name: 'Shri. Kailas Jaiswar', designation: 'Organizer', area: 'Mumbai', image: shreeKailasJaiswar },
  { id: 'sandip-pawar', name: 'Shri. Sandip Pawar', designation: 'Organizer', area: 'Mumbai', image: shreeSandipPawar },
  { id: 'arun-pawar', name: 'Shri. Arun Pawar', designation: 'President', area: 'Navi Mumbai', image: shreeArunPawar },
  { id: 'shivajirao-patil', name: 'Shri. Shivajirao Patil', designation: 'Organizer', area: 'Navi Mumbai', image: shreeShivajiraoPatil },
]

const sections = [
  {
    eyebrow: 'National Leadership',
    title: 'National Leadership',
    description: 'Senior office-bearers representing the party at the national level.',
    ids: ['santoshdada-chaudhari'],
  },
  {
    eyebrow: 'State Leadership',
    title: 'Maharashtra Leadership',
    description: 'State-level office-bearers and Maharashtra organisational leadership.',
    ids: ['vinodrao-more', 'ashokrao-dhanagavakar', 'balasaheb-patole', 'mahesh-thorat', 'satyaprakash-jaiswar'],
  },
  {
    eyebrow: 'Advisory & Administration',
    title: 'Advisors & Administration',
    description: 'Advisory and administrative office-bearers identified in the party document.',
    ids: ['ramrao-bhategavakar', 'ajit-saroj', 'anita-jadhav'],
  },
  {
    eyebrow: 'Regional & District Leadership',
    title: 'Regional & District Leadership',
    description: 'Leadership representation across the regions and districts listed in the party document.',
    ids: ['santosh-nadekar', 'rajkumar-chandan-sahe', 'kacharu-patil-wagh', 'sachin-alhat', 'vilas-kadam', 'kailas-jaiswar', 'sandip-pawar', 'arun-pawar', 'shivajirao-patil'],
  },
  {
    eyebrow: 'Youth Leadership',
    title: 'Youth Leadership',
    description: 'Youth leadership identified in the party document.',
    ids: ['ravindra-kamble'],
  },
  {
    eyebrow: 'Regional Leadership',
    title: 'Western Maharashtra Leadership',
    description: 'Regional leadership identified for Western Maharashtra.',
    ids: ['manjabapu-salave'],
  },
]

function LeadershipCard({ leader, onView }) {
  return (
    <article className="leadership-card">
      <div className="card-photo-wrap">
        <img className="card-photo" src={leader.image} alt={leader.name} />
        <span className="photo-accent" />
      </div>
      <div className="card-body">
        <p className="card-role">{leader.designation}</p>
        <h3>{leader.name}</h3>
        {leader.area && <p className="card-area">{leader.area}</p>}
        <button type="button" className="profile-button" onClick={() => onView(leader)}>
          View Profile <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}

function ProfileModal({ leader, onClose }) {
  if (!leader) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close profile" onClick={onClose}>×</button>
        <div className="modal-photo-panel">
          <img src={leader.image} alt={leader.name} />
        </div>
        <div className="modal-content">
          <p className="modal-eyebrow">Leadership Profile</p>
          <h2 id="profile-title">{leader.name}</h2>
          <p className="modal-role">{leader.designation}</p>
          {leader.area && (
            <div className="modal-info-row">
              <span>Area</span>
              <strong>{leader.area}</strong>
            </div>
          )}
          {leader.bio ? (
            <>
              <div className="modal-divider" />
              <h3>Profile</h3>
              <p className="modal-bio">{leader.bio}</p>
            </>
          ) : (
            <p className="profile-note">The provided party document identifies this leader by name, designation and area where available. No additional biography was provided in the source document.</p>
          )}
        </div>
      </div>
    </div>
  )
}

function Section({ section, allLeaders, onView }) {
  const sectionLeaders = section.ids.map((id) => allLeaders.find((leader) => leader.id === id)).filter(Boolean)

  return (
    <section className="leaders-section">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
        </div>
        <p className="section-description">{section.description}</p>
      </div>
      <div className="leaders-grid">
        {sectionLeaders.map((leader) => (
          <LeadershipCard key={leader.id} leader={leader} onView={onView} />
        ))}
      </div>
    </section>
  )
}

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState(null)
  const allLeaders = [founder, ...leaders]

  return (
    <main className="leadership-page">
      <style>{`
        .leadership-page {
          --orange: #f28c00;
          --orange-dark: #c96b00;
          --orange-soft: #fff3df;
          --navy: #172a46;
          --charcoal: #20242a;
          --muted: #68717d;
          --line: #e8e9ec;
          --surface: #ffffff;
          --page: #fbfaf8;
          min-height: 100vh;
          margin: 0;
          color: var(--charcoal);
          background: var(--page);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .leadership-page *, .leadership-page *::before, .leadership-page *::after { box-sizing: border-box; }
        .leadership-page button { font: inherit; }

        .leadership-hero {
          position: relative;
          overflow: hidden;
          min-height: 390px;
          display: grid;
          place-items: center;
          background: linear-gradient(110deg, #fffaf3 0%, #fff 52%, #f7f8fa 100%);
          border-bottom: 1px solid var(--line);
        }

        .hero-shape { position: absolute; border-radius: 50%; pointer-events: none; }
        .hero-shape.one { width: 430px; height: 430px; right: -180px; top: -220px; border: 80px solid rgba(242,140,0,.10); }
        .hero-shape.two { width: 260px; height: 260px; left: -145px; bottom: -150px; border: 55px solid rgba(23,42,70,.05); }
        .hero-content { position: relative; z-index: 1; width: min(920px, 92%); padding: 74px 0 68px; text-align: center; }
        .hero-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 18px; color: var(--orange-dark); font-size: 12px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
        .hero-kicker::before, .hero-kicker::after { content: ""; width: 34px; height: 2px; background: var(--orange); }
        .hero-title { margin: 0; color: var(--navy); font-size: clamp(44px, 7vw, 76px); line-height: .98; letter-spacing: -.045em; font-weight: 850; }
        .hero-title span { color: var(--orange); }
        .hero-subtitle { max-width: 700px; margin: 23px auto 0; color: var(--muted); font-size: 16px; line-height: 1.75; }

        .founder-section { width: min(1180px, 92%); margin: 0 auto; padding: 64px 0 44px; }
        .founder-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
        .founder-heading h2, .section-heading h2 { margin: 0; color: var(--navy); font-size: clamp(28px, 4vw, 42px); line-height: 1.1; letter-spacing: -.03em; }
        .section-eyebrow, .founder-eyebrow, .modal-eyebrow { margin: 0 0 8px; color: var(--orange-dark); font-size: 11px; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; }
        .founder-heading-copy { max-width: 540px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; text-align: right; }

        .founder-card { display: grid; grid-template-columns: 380px 1fr; min-height: 420px; overflow: hidden; background: var(--surface); border: 1px solid var(--line); border-radius: 18px; box-shadow: 0 18px 48px rgba(23,42,70,.08); }
        .founder-image-wrap { position: relative; min-height: 420px; overflow: hidden; background: #eee; }
        .founder-image-wrap::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 6px; background: var(--orange); }
        .founder-image { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center top; }
        .founder-content { display: flex; flex-direction: column; justify-content: center; padding: 44px 52px; }
        .founder-name { margin: 0; color: var(--navy); font-size: clamp(28px, 4vw, 43px); line-height: 1.1; letter-spacing: -.035em; }
        .founder-role { margin: 9px 0 0; color: var(--orange-dark); font-size: 16px; font-weight: 750; }
        .founder-rule { width: 58px; height: 3px; margin: 21px 0; background: var(--orange); border-radius: 4px; }
        .founder-bio { max-width: 720px; margin: 0; color: #59616c; font-size: 14px; line-height: 1.78; }
        .founder-actions { display: flex; gap: 12px; align-items: center; margin-top: 25px; }
        .primary-button { border: 0; border-radius: 8px; padding: 11px 17px; color: #fff; background: var(--orange); font-weight: 750; cursor: pointer; box-shadow: 0 7px 18px rgba(242,140,0,.22); transition: .2s ease; }
        .primary-button:hover { background: var(--orange-dark); transform: translateY(-1px); }
        .founder-note { color: var(--muted); font-size: 12px; }

        .leaders-section { width: min(1180px, 92%); margin: 0 auto; padding: 44px 0; }
        .section-heading { display: grid; grid-template-columns: minmax(280px, .9fr) minmax(300px, 1.1fr); align-items: end; gap: 28px; margin-bottom: 23px; padding-bottom: 15px; border-bottom: 1px solid var(--line); }
        .section-heading h2 { font-size: clamp(25px, 3vw, 34px); }
        .section-description { max-width: 600px; margin: 0; justify-self: end; color: var(--muted); font-size: 13.5px; line-height: 1.65; text-align: right; }

        .leaders-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .leadership-card { overflow: hidden; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 7px 25px rgba(23,42,70,.045); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
        .leadership-card:hover { transform: translateY(-5px); border-color: rgba(242,140,0,.45); box-shadow: 0 15px 32px rgba(23,42,70,.10); }
        .card-photo-wrap { position: relative; height: 245px; overflow: hidden; background: #f0f0ef; }
        .card-photo { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center top; transition: transform .35s ease; }
        .leadership-card:hover .card-photo { transform: scale(1.035); }
        .photo-accent { position: absolute; left: 0; bottom: 0; width: 42px; height: 4px; background: var(--orange); }
        .card-body { padding: 17px 17px 15px; }
        .card-role { min-height: 34px; margin: 0 0 7px; color: var(--orange-dark); font-size: 11px; line-height: 1.45; font-weight: 800; letter-spacing: .035em; text-transform: uppercase; }
        .card-body h3 { margin: 0; color: var(--navy); font-size: 16px; line-height: 1.35; font-weight: 800; }
        .card-area { margin: 6px 0 0; color: var(--muted); font-size: 12px; }
        .profile-button { display: inline-flex; align-items: center; gap: 7px; margin-top: 13px; padding: 0; border: 0; color: var(--navy); background: transparent; font-size: 12px; font-weight: 800; cursor: pointer; }
        .profile-button span { color: var(--orange); transition: transform .2s ease; }
        .profile-button:hover span { transform: translateX(4px); }

        .modal-backdrop { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 22px; background: rgba(8,16,28,.64); backdrop-filter: blur(5px); }
        .profile-modal { position: relative; display: grid; grid-template-columns: 310px 1fr; width: min(900px, 100%); max-height: min(720px, 90vh); overflow: auto; background: #fff; border-radius: 18px; box-shadow: 0 30px 80px rgba(0,0,0,.25); }
        .modal-close { position: absolute; z-index: 2; top: 12px; right: 12px; width: 34px; height: 34px; border: 0; border-radius: 50%; color: var(--navy); background: rgba(255,255,255,.94); font-size: 24px; line-height: 1; cursor: pointer; box-shadow: 0 3px 12px rgba(0,0,0,.12); }
        .modal-photo-panel { min-height: 390px; background: #eee; }
        .modal-photo-panel img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center top; }
        .modal-content { padding: 46px 45px; }
        .modal-content h2 { margin: 0; color: var(--navy); font-size: clamp(28px, 4vw, 42px); line-height: 1.08; letter-spacing: -.035em; }
        .modal-role { margin: 9px 0 0; color: var(--orange-dark); font-size: 15px; font-weight: 800; }
        .modal-info-row { display: flex; justify-content: space-between; gap: 20px; margin-top: 22px; padding: 13px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); font-size: 13px; }
        .modal-info-row span { color: var(--muted); }
        .modal-info-row strong { color: var(--navy); }
        .modal-divider { width: 50px; height: 3px; margin: 23px 0 15px; background: var(--orange); }
        .modal-content h3 { margin: 0 0 10px; color: var(--navy); font-size: 17px; }
        .modal-bio { margin: 0; color: #59616c; font-size: 13.5px; line-height: 1.78; }
        .profile-note { margin-top: 28px; padding: 15px 16px; border-left: 3px solid var(--orange); color: var(--muted); background: var(--orange-soft); font-size: 12.5px; line-height: 1.65; }

        @media (max-width: 1050px) {
          .leaders-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .founder-card { grid-template-columns: 330px 1fr; }
          .founder-content { padding: 35px 38px; }
        }
        @media (max-width: 820px) {
          .founder-heading { display: block; }
          .founder-heading-copy { margin-top: 10px; text-align: left; }
          .founder-card { grid-template-columns: 1fr; }
          .founder-image-wrap { height: 410px; min-height: 0; }
          .leaders-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .section-heading { grid-template-columns: 1fr; gap: 10px; }
          .section-description { justify-self: start; text-align: left; }
          .profile-modal { grid-template-columns: 1fr; max-height: 92vh; }
          .modal-photo-panel { height: 320px; min-height: 0; }
        }
        @media (max-width: 560px) {
          .leadership-hero { min-height: 340px; }
          .hero-content { padding: 60px 0 55px; }
          .hero-title { font-size: 45px; }
          .hero-subtitle { font-size: 14px; }
          .founder-section, .leaders-section { width: min(92%, 1180px); padding-top: 34px; padding-bottom: 28px; }
          .founder-image-wrap { height: 330px; }
          .founder-content { padding: 28px 24px 30px; }
          .founder-bio { font-size: 13.5px; }
          .leaders-grid { grid-template-columns: 1fr; gap: 15px; }
          .card-photo-wrap { height: 315px; }
          .section-heading { margin-bottom: 18px; }
          .modal-backdrop { padding: 10px; }
          .modal-content { padding: 35px 24px 28px; }
        }
      `}</style>

      <section className="leadership-hero">
        <span className="hero-shape one" />
        <span className="hero-shape two" />
        <div className="hero-content">
          <p className="hero-kicker">Janhit Lokshahi Party</p>
          <h1 className="hero-title">Our <span>Leadership</span></h1>
          <p className="hero-subtitle">
            Meet the office-bearers and organisational leaders representing Janhit Lokshahi Party across national, state, regional, district and youth leadership.
          </p>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-heading">
          <div>
            <p className="founder-eyebrow">Featured Leadership</p>
            <h2>Founder & National President</h2>
          </div>
          <p className="founder-heading-copy">The principal leadership profile presented in the party document, with biography details available in the source material.</p>
        </div>

        <article className="founder-card">
          <div className="founder-image-wrap">
            <img className="founder-image" src={founder.image} alt={founder.name} />
          </div>
          <div className="founder-content">
            <p className="founder-eyebrow">Founder / National President</p>
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.designation}</p>
            <div className="founder-rule" />
            <p className="founder-bio">{founder.bio}</p>
            <div className="founder-actions">
              <button type="button" className="primary-button" onClick={() => setSelectedLeader(founder)}>View Full Profile <span aria-hidden="true">→</span></button>
              <span className="founder-note">Profile details from the provided party document</span>
            </div>
          </div>
        </article>
      </section>

      {sections.map((section) => (
        <Section key={section.title} section={section} allLeaders={leaders} onView={setSelectedLeader} />
      ))}

      <ProfileModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
    </main>
  )
}
