import React, { useMemo, useState } from 'react'
import { Search, ExternalLink, FileText, FolderOpen, Filter, Mail, Link2, Users } from 'lucide-react'

const documents = [
  { title: 'Meetings & Minutes / Board Meeting Documents', category: 'Meetings & Notices', description: 'Central document for board meeting materials, minutes, notices, and agenda documents.', url: 'https://docs.google.com/document/d/1e2hZpU284uhKhx2K1Pnz093xKGGPU3QaHxZ0Jk47SqI/edit?usp=drivesdk' },
  { title: 'November 2025 Member Notice', category: 'Meetings & Notices', description: 'Member notice dated November 2025.', url: 'https://drive.google.com/file/d/1XmRxrHT76RdyUu6qS0DhIGfu8YuTd6P1/view?usp=drivesdk' },
  { title: 'Gate Clicker Order Form', category: 'Forms', description: 'Form for ordering a gate clicker.', url: 'https://drive.google.com/file/d/1YZD6jyIHOXksr7vOtEmA32GIxdIvyjPL/view?usp=drivesdk' },
  { title: 'ALRC Approval Request Form', category: 'Forms', description: 'Architectural Landscape Review Committee approval request form.', url: 'https://drive.google.com/file/d/1xwCQHg2TKCqCGrz3eaD90rNpavacQwA7/view?usp=drivesdk' },
  { title: 'Electronic Notification Opt-In Form', category: 'Forms', description: 'Form for opting in to electronic Association notices and communications.', url: 'https://drive.google.com/file/d/1cSGPviQj1LFTf6_sHnEBeClzcpZlZ-a9/view?usp=drivesdk' },
  { title: 'Lot Maintenance Compliance Tip Sheet', category: 'Rules & Standards', description: 'Quick guidance for lot maintenance compliance.', url: 'https://drive.google.com/file/d/1j930xVWUhsUahNoxBAmWQfU_e_TApGIp/view?usp=drivesdk' },
  { title: '2025 Electronic Voting Opt-In Resolution', category: 'Association Governance', description: 'Resolution related to electronic voting opt-in procedures.', url: 'https://drive.google.com/file/d/1zAzZNeXUC9eIYHalsECN3zgG4sRe0lUO/view?usp=drivesdk' },
  { title: '2025 Quick Reference Rules, Standards & CCRs', category: 'Rules & Standards', description: 'Quick reference guide for rules, standards, and covenants.', url: 'https://drive.google.com/file/d/1CI9PWAhuISZ5_bXJ8lTco3kUvX6M1LcQ/view?usp=drivesdk' },
  { title: 'FirstService Support Website', category: 'Portals & Websites', description: 'Support website for FirstService / HODA assistance.', url: 'https://u19564368.ct.sendgrid.net/ls/click?upn=u001.2ELwlsmhYCpqVCjZySPj2oeRyAOLVBMJV6nYL-2BZRSX-2BBicm-2FQZSdjtEs8EqA2w86nGDxk6yGnM3wQQx-2FR0uZnA-3D-3DMkNh_S7q3boNKYYicmDimMtKMgbJkeUryRXkgmpryk3veA0f-2B0LnF0e6g3iAC9MVE9JeQFantvw7JFJyspD-2FyJkhDkaIib4CKPzPm4XYnz5R9Cvp2yxYDvj-2BBfqTkW9kCoq3axkyA7YI6yLy08IUikXWJdtx9FK6ojO8H0E2peP8DRPHRO5ND9uu5HPEewqEHUvJzM3ygrQ9kf7mC4DC1lZeLSFe3NYK0NlxFwgON6hYT2lISa8PH7y-2BAGLctyV1h20uk-2FfjQTXWDICM9aYsWtND5j14zUFBDlNt4WBzRc1KvaLw-3D' },
  { title: 'Vehicle and Parking Policies & Procedures', category: 'Rules & Standards', description: 'Policies and procedures related to vehicles and parking.', url: 'https://drive.google.com/file/d/10oFxndnv1m8HwXxDW1lcr1KkMkobd-4I/view?usp=drivesdk' },
  { title: 'Fence Standards', category: 'Rules & Standards', description: 'Community standards for fences.', url: 'https://drive.google.com/file/d/1IXFvk-JYSvxY9EH3uZpqFu8D7gLw2Cqi/view?usp=drivesdk' },
  { title: 'Roofing Standards', category: 'Rules & Standards', description: 'Community standards for roofing.', url: 'https://drive.google.com/file/d/10mwiFcQwamrR2_SxevIxSr7y9tFuOLqz/view?usp=drivesdk' },
  { title: 'Meet the Teams', category: 'Association Information', description: 'Information about the Association team members and community roles.', url: 'https://drive.google.com/file/d/1_bdrrWHnpTDhSc1UNr5crYYd9Mf3EdR4/view?usp=drivesdk' },
  { title: 'Community Facebook Group', category: 'Portals & Websites', description: 'Facebook group for Frenchmen’s Landing residents.', url: 'https://www.facebook.com/groups/648683225614492/?ref=share_group_link' },
  { title: 'Declaration of Covenants and Restrictions + 3 Amendments', category: 'Governing Documents', description: 'Recorded declaration and amendments for the Association.', url: 'https://drive.google.com/file/d/1-HFB2lQW_w1DUeODO08GevRXCUs5zmwP/view?usp=drivesdk' },
  { title: 'Articles of Incorporation + Amendments', category: 'Governing Documents', description: 'Articles of Incorporation and amendments.', url: 'https://drive.google.com/file/d/1YNceMIFTzYS88FWGZJm2JpzRr2pULQMB/view?usp=drivesdk' },
  { title: 'By-Laws of Frenchmen’s Landing + Amendments', category: 'Governing Documents', description: 'Association bylaws and amendments.', url: 'https://drive.google.com/file/d/1IjYVGsLDR1SUE1wTXbHEnLqAM-wcxsE_/view?usp=drivesdk' },
  { title: '2026 Callbox Directory Information Form', category: 'Forms', description: 'Form for callbox directory information.', url: 'https://drive.google.com/file/d/1OMy3N8k4QFlV8QpBghxaV1nBHoBv1ubl/view?usp=drivesdk' },
  { title: 'Certificate of Named Voter Form', category: 'Forms', description: 'Form for designating a named voter.', url: 'https://drive.google.com/file/d/11Xpr6BFiD_W-q-GGLhq8tbNPH43QPJcu/view?usp=drivesdk' },
  { title: 'Recreation Area Event Reservation Request Form', category: 'Forms', description: 'Request form for reserving the recreation area for events.', url: 'https://drive.google.com/file/d/11Nh6Dkt_A_hsb_KFH95Iaq9hyltB6DGx/view?usp=drivesdk' },
  { title: 'Sales, Leasing and Real Estate Sales Application', category: 'Forms', description: 'Application related to sales, leasing, and real estate transactions.', url: 'https://drive.google.com/file/d/1RLSzAYgukvjhzzkWDhbZkQo3mDpWiv4i/view?usp=drivesdk' },
  { title: 'Approved Real Estate Sign Standards', category: 'Rules & Standards', description: 'Approved standards for real estate signs.', url: 'https://drive.google.com/file/d/1RCUvfk3_Kzg1LDsr1h6jgQVx7lfeQLtq/view?usp=drivesdk' },
  { title: 'Storm Drain Notice', category: 'Meetings & Notices', description: 'Notice related to storm drains.', url: 'https://drive.google.com/file/d/1iXTLsBvURK2YWdMqpi-b2ulQsy4v4Dlo/view?usp=drivesdk' },
  { title: '2025 Halloween Flyer', category: 'Events', description: 'Flyer for the 2025 Halloween event.', url: 'https://drive.google.com/file/d/1tPWEZU5gYUcFdmSlwqn-S9UiZtSoOgob/view?usp=drivesdk' },
  { title: '2025 Holiday / Winter Social Event', category: 'Events', description: 'Flyer or notice for the 2025 holiday winter social event.', url: 'https://drive.google.com/file/d/14-7-epBYt4mFs4sXLrxXFaYzVsPFmiFI/view?usp=drivesdk' },
  { title: 'May 27, 2026 Board Meeting', category: 'Meetings & Notices', description: 'Materials for the May 27, 2026 board meeting.', url: 'https://drive.google.com/file/d/1zb8eNrtcgvr1RgiCq2nsK-5Y4zL0Ngdw/view?usp=drivesdk' },
  { title: 'April 29, 2026 Board Meeting', category: 'Meetings & Notices', description: 'Materials for the April 29, 2026 board meeting.', url: 'https://drive.google.com/file/d/1dRxpd-f2u2z-46eQwOOOBfoc4FikFOdB/view?usp=drivesdk' },
  { title: '2026 Annual Members Meeting & Election Minutes', category: 'Meetings & Notices', description: 'Minutes from the 2026 Annual Members Meeting and election.', url: 'https://drive.google.com/file/d/1Ma1PX3tU57Lp9VB7XL1XiOlRki_kzYDO/view?usp=drivesdk' },
  { title: '2026 Election FAQ', category: 'Elections', description: 'Frequently asked questions regarding the 2026 election.', url: 'https://drive.google.com/file/d/1P4u1hxnKdbSZQlJeyOCbmLPhuvPmmxUB/view?usp=drivesdk' },
  { title: '2026 Annual Members Meeting / Join the Meeting', category: 'Meetings & Notices', description: 'Microsoft Teams link for joining the meeting.', url: 'https://teams.microsoft.com/meet/2155805613853?p=sBiY7eX8tbc4CNpnET' },
  { title: '2025 Annual Members Meeting Agenda with Document Links', category: 'Meetings & Notices', description: 'Agenda and related document links for the 2025 Annual Members Meeting.', url: 'https://drive.google.com/file/d/10mz3hny1TmXJFei95nI2D_Wd1HXLJrY_/view?usp=drivesdk' },
  { title: '2025 Annual Members Meeting Election Notice & Ballot Packet', category: 'Elections', description: 'Election notice and ballot packet for the 2025 Annual Members Meeting.', url: 'https://drive.google.com/file/d/1LUQscduTBMfmEHGP4Sq8RHTA9zMRkKWb/view?usp=drivesdk' },
  { title: 'May 14, 2025 Board Member Meeting', category: 'Meetings & Notices', description: 'Documents for the May 14, 2025 board member meeting.', url: 'https://docs.google.com/document/d/1QiIOOCb-hUfRQelVaHvRgYmjnjLRMATM/edit?usp=drivesdk&ouid=100554580536761108504&rtpof=true&sd=true' },
  { title: 'January 22, 2025 BOD Meeting Agenda Notice', category: 'Meetings & Notices', description: 'Agenda notice for the January 22, 2025 Board of Directors meeting.', url: 'https://drive.google.com/file/d/1oO9R71sXeoQxuo98gj_9FudHKnQzA6GV/view?usp=drivesdk' },
  { title: 'January 22, 2025 Agenda Item Documents', category: 'Meetings & Notices', description: 'Agenda item documents for the January 22, 2025 meeting.', url: 'https://docs.google.com/document/d/1TVpTwDx8-J5p25lRg1EJzkMgICyy4aTY/edit?usp=drivesdk&ouid=100554580536761108504&rtpof=true&sd=true' },
  { title: 'December 4, 2024 BOD Meeting Agenda & Documents', category: 'Meetings & Notices', description: 'Agenda and documents for the December 4, 2024 Board of Directors meeting.', url: 'https://drive.google.com/file/d/1FE0R2USRl-EU9gWnDSKRGzYupNwHd3Kw/view?usp=drivesdk' },
  { title: 'October 23, 2024 BOD Meeting Agenda & Documents', category: 'Meetings & Notices', description: 'Agenda and documents for the October 23, 2024 Board of Directors meeting.', url: 'https://docs.google.com/document/d/17wAeQzpO7x0ZRDl4YMtFyP6K3KIgTaXtSMh9LKXOh2Q/edit?usp=drivesdk' },
  { title: 'October 23, 2024 Meeting Notice', category: 'Meetings & Notices', description: 'Notice for the October 23, 2024 meeting.', url: 'https://drive.google.com/file/d/193-Nbbuwryf0ofAgr5iqp4JjxclmdpBc/view?usp=drivesdk' },
  { title: 'August 21, 2024 Board Meeting Agenda Docs', category: 'Meetings & Notices', description: 'Agenda documents for the August 21, 2024 board meeting.', url: 'https://docs.google.com/document/d/1H8N0pjDwSTTEn5Yfk5CA4mf8jkYTdNk0TYRIJo8W9-k/edit?usp=drivesdk' },
  { title: '2025 Board Candidate Interest Form', category: 'Elections', description: 'Candidate interest form for the 2025 board election.', url: 'https://drive.google.com/file/d/1uvpUNItwQBmLr5O37mFOKOD0H-PvXKEr/view?usp=drivesdk' },
  { title: 'February 21, 2026 Neighborhood Yard Sale Sign-Up', category: 'Events', description: 'Google Form for neighborhood yard sale sign-up.', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZfIRxP6ACM1WEIGl28h1kKv42v6vTu9x-kT8SWYD7ozeN6A/viewform?usp=header' },
  { title: 'Gate Update Member Letter (January 14, 2025)', category: 'Gate Project', description: 'Member letter regarding the gate update dated January 14, 2025.', url: 'https://drive.google.com/file/d/1mOnYSo611AJlqRuy6snaoznOwYfGeSG4/view?usp=drivesdk' },
  { title: 'Gate Update Member Letter (December 9, 2024)', category: 'Gate Project', description: 'Member letter regarding the gate update dated December 9, 2024.', url: 'https://drive.google.com/file/d/1lAY-7LLcIZQovUNht18IN72XSZp4HFmD/view?usp=drivesdk' },
  { title: 'Gate Project Member Letter (August 6, 2024)', category: 'Gate Project', description: 'Member letter regarding the gate project dated August 6, 2024.', url: 'https://drive.google.com/file/d/1fz7foKroywsb-qkv7FviYqDoGsy4KyAq/view?usp=drivesdk' },
  { title: 'Gate Project Member Letter (June 10, 2024)', category: 'Gate Project', description: 'Member letter regarding the gate project dated June 10, 2024.', url: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:c1b6255c-fabb-4397-ba17-63709bee9b5f' },
  { title: 'October 2024 Member Notice Letter / Association Documents', category: 'Meetings & Notices', description: 'October 2024 member notice letter and Association document information.', url: 'https://drive.google.com/file/d/1R6GcTDtUGgNruaGmZflWaE5r7--a6oog/view?usp=drivesdk' },
  { title: 'Election FAQ', category: 'Elections', description: 'Election FAQ document.', url: 'https://docs.google.com/document/d/1yGT1ohW0Y6Fy74PNhfu-AWhA1IzHyJDhzfoPAOW2a3Q/edit?usp=drivesdk' },
  { title: 'Frenchmen’s Landing Portal', category: 'Portals & Websites', description: 'Resident portal for forms, documents, and Association records.', url: 'https://frenchmenslanding.connectresident.com/' },
  { title: 'Frenchmen’s Landing Property Owners Association Documents & Notices', category: 'Association Information', description: 'Main documents and notices page used by the QR code in the uploaded document.', url: 'https://docs.google.com/document/d/1PhnQiv8AXuz-2Y_2R84y5tNIuNQCyZo1bUdhb7HcFfc/edit?usp=drivesdk' },
  { title: 'Property Manager: Roy Sheets', category: 'Contacts', description: 'Email Roy Sheets at FirstService Residential.', url: 'mailto:Roy.Sheets@fsresidential.com' },
  { title: 'Board President: Taylor Gibbon', category: 'Contacts', description: 'Email the Board President.', url: 'mailto:Taylorgibbon@gmail.com' },
  { title: 'Board Secretary / Association Email', category: 'Contacts', description: 'Email Frenchmen’s Landing Association contact.', url: 'mailto:frenchmenslanding@gmail.com' },
  { title: 'Architectural Landscape Review Committee', category: 'Contacts', description: 'Email the ALRC committee.', url: 'mailto:frenchmens.alrc@gmail.com' },
  { title: 'MyQ Mobile App Access Request', category: 'Contacts', description: 'Email for MyQ mobile app access requests.', url: 'mailto:frenchmens.pmc@gmail.com' },
  { title: 'Community Records Contact', category: 'Contacts', description: 'Email for forms, records, and document assistance.', url: 'mailto:FLCRC33410@gmail.com' },
]

const categoryDescriptions = {
  All: 'All available links from the uploaded document.',
  'Meetings & Notices': 'Agendas, notices, minutes, and meeting-related materials.',
  Forms: 'Resident forms and request documents.',
  'Governing Documents': 'Declaration, articles, bylaws, and amendments.',
  'Rules & Standards': 'Community standards, rules, and compliance references.',
  Elections: 'Election notices, FAQs, ballots, and candidate materials.',
  Events: 'Community event flyers and sign-up links.',
  'Gate Project': 'Gate project notices and member updates.',
  'Portals & Websites': 'External websites, portals, and online resources.',
  Contacts: 'Email contacts pulled from the document.',
  'Association Governance': 'Board and Association governance materials.',
  'Association Information': 'General Association information and reference materials.',
}

function getLinkIcon(url) {
  if (url.startsWith('mailto:')) return Mail
  if (url.includes('facebook') || url.includes('connectresident') || url.includes('teams.microsoft')) return Link2
  if (url.includes('forms')) return Users
  return FileText
}

function getActionLabel(url) {
  if (url.startsWith('mailto:')) return 'Send Email'
  if (url.includes('teams.microsoft')) return 'Join Meeting'
  if (url.includes('facebook')) return 'Open Group'
  if (url.includes('connectresident')) return 'Open Portal'
  if (url.includes('forms')) return 'Open Form'
  return 'Open Document'
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(documents.map((doc) => doc.category))).sort()], [])

  const filteredDocuments = useMemo(() => {
    const search = searchTerm.toLowerCase().trim()
    return documents.filter((doc) => {
      const matchesSearch = !search || doc.title.toLowerCase().includes(search) || doc.description.toLowerCase().includes(search) || doc.category.toLowerCase().includes(search)
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const categoryCounts = useMemo(() => documents.reduce((counts, doc) => {
    counts[doc.category] = (counts[doc.category] || 0) + 1
    return counts
  }, {}), [])

  return (
    <main className="page">
      <section className="container">
        <header className="hero">
          <div className="heroText">
            <div className="eyebrow"><FolderOpen size={16} /> Frenchmen’s Landing Document Library</div>
            <h1>Association Documents & Resources</h1>
            <p>Search, filter, and open Association documents, forms, meeting notices, governing documents, event links, and contact resources from one organized hub.</p>
          </div>
          <div className="stats">
            <div className="stat"><strong>{documents.length}</strong><span>Total Links</span></div>
            <div className="stat"><strong>{categories.length - 1}</strong><span>Categories</span></div>
          </div>
        </header>

        <div className="controls">
          <label className="control searchBox">
            <Search size={20} />
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by document name, category, form, meeting date, or keyword..." />
          </label>
          <label className="control selectBox">
            <Filter size={20} />
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              {categories.map((category) => <option key={category} value={category}>{category === 'All' ? 'All Categories' : `${category} (${categoryCounts[category] || 0})`}</option>)}
            </select>
          </label>
        </div>

        <div className="resultHeader">
          <div>
            <p className="showing">Showing {filteredDocuments.length} of {documents.length} links</p>
            <p className="description">{categoryDescriptions[selectedCategory] || 'Filtered Association resources.'}</p>
          </div>
          {(searchTerm || selectedCategory !== 'All') && <button className="secondaryButton" onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}>Clear Filters</button>}
        </div>

        <div className="grid">
          {filteredDocuments.map((doc) => {
            const Icon = getLinkIcon(doc.url)
            return (
              <article className="card" key={`${doc.title}-${doc.url}`}>
                <div className="cardTop">
                  <div className="icon"><Icon size={24} /></div>
                  <span className="badge">{doc.category}</span>
                </div>
                <h2>{doc.title}</h2>
                <p>{doc.description}</p>
                <a className="primaryButton" href={doc.url} target="_blank" rel="noopener noreferrer">{getActionLabel(doc.url)} <ExternalLink size={16} /></a>
              </article>
            )
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="emptyState">
            <h2>No links found</h2>
            <p>Try a different search term or category.</p>
            <button className="primaryButton asButton" onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}>Reset Search</button>
          </div>
        )}
      </section>
    </main>
  )
}
