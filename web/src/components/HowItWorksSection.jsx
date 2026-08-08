import React from 'react';

const PHASES = [
  {
    id: 'strategize',
    phase: '01',
    week: 'Week 1',
    title: 'Strategize',
    body: 'From the first call, we map how your shop actually works and lock the first worklane worth automating.',
    points: [
      'Kickoff and workflow audit',
      'First worklane selected',
      'Success metrics agreed up front',
    ],
  },
  {
    id: 'build',
    phase: '02',
    week: 'Week 2',
    title: 'Build',
    body: 'Auxo learns your tone, forms, escalations, and carrier rules. We wire it into the stack you already run.',
    points: [
      'Playbooks and documents ingested',
      'Brand, tone, and handoff rules',
      'Controlled-lane staging',
    ],
  },
  {
    id: 'run',
    phase: '03',
    week: 'Week 3',
    title: 'Run',
    body: 'First worklane goes live. Your team owns day one; licensed people keep the exceptions that need them.',
    points: [
      'Go-live in production',
      'Exception review with your team',
      'Tune and plan the next lane',
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section model-section" id="delivery">
      <div className="container">
        <div className="model-intro">
          <p className="model-eyebrow">Auxosure delivery</p>
          <h2 className="model-title">First call to delivery in 3 weeks</h2>
          <p className="model-lede">
            Same model every time: strategize, build, run. Agency automation only sticks when it
            fits how your shop already operates. We build alongside your team so delivery lands in
            three weeks, and your people keep the exceptions that need a license.
          </p>
        </div>

        <div className="model-grid">
          {PHASES.map((phase) => (
            <article key={phase.id} className="model-phase">
              <div className="model-phase-top">
                <div className="model-phase-mark" aria-hidden="true">
                  <span>{phase.phase}</span>
                </div>
                <span className="model-phase-week">{phase.week}</span>
              </div>
              <h3 className="model-phase-title">{phase.title}</h3>
              <p className="model-phase-body">{phase.body}</p>
              <ul className="model-phase-points">
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
