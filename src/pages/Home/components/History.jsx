import './History.css';

const history_list = [
    {
        year: 2024,
        list: [
            {
                title: "Secured Seed Funding",
                from: 10,
                toYear: 2024,
                toMonth: 12,
            },
            {
                title: "Startup R&D, KISED(Korea Institute of Startup & Entrepreneurship Development)",
                from: 10,
                toYear: 2025,
                toMonth: 9, 
            },
            {
                title: "Certificate of Venture Enterprise",
                from: 12,
            },
        ]
    },
    {
        year: 2025,
        list: [
            {
                title: "Registration of Corporate R&D Center",
                from: 3,
            },
            {
                title: "Reliability Voucher Program, KIAT",
                from: 4,
                toMonth: 12, 
            },
            {
                title: "Early-Stage Startup Package, KISED with K-water",
                from: 5,
                toYear: 2026,
                toMonth: 1
            },
            {
                title: "Global Market Expansion Program, Korea-Africa Foundation",
                from: 6,
                toMonth: 11, 
            },
            {
                title: "TIPS(Tech Incubation Program for Startup) Global track",
                from: 8,
                toYear: 2028,
                toMonth: 7, 
            },

        ]
    }

]

const History = () => {
    return (
        <div id='history' className="history-container">
            <div className='container'>
                <h2 className="section-title">Our Journey</h2>
                <div className="history-timeline">
                    {history_list.map((yearData) => (
                        <div key={yearData.year} className="history-year-section">
                            <div className="history-year">{yearData.year}</div>
                            <div className="history-events">
                                {yearData.list.map((event, index) => (
                                    <div key={index} className="history-event">
                                        <div className="history-event-period">
                                            {event.from && (
                                                <span className="history-date">
                                                    {String(event.from).padStart(2, '0')}
                                                </span>
                                            )}
                                            
                                        </div>
                                        <div className="history-event-content">
                                            <div className="history-event-title">{event.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default History