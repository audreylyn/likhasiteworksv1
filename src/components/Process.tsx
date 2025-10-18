import React from 'react';
import '../styles/components/Process.css';
import { PhoneCall, Send, RefreshCw, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      Icon: PhoneCall,
      title: 'Subscribe',
      description: 'Kick off with a free 30-min call. Choose your plan, and let\'s get moving on your design needs, fast and simple.'
    },
    {
      Icon: Send,
      title: 'Request',
      description: 'Send your design brief in our private Slack channel or Notion. We\'ll get started, while you focus on your next big move.'
    },
    {
      Icon: RefreshCw,
      title: 'Revise',
      description: 'Get the results within 1-3 days. We will make unlimited revisions until you are 100% satisfied.'
    },
    {
      Icon: TrendingUp,
      title: 'Enjoy the results',
      description: 'Get more done, look your best, and enjoy the freedom of having your design team on standby.'
    }
  ];

  return (
    <section className="process-section" id="Process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Getting started is easy</h2>
          <p className="process-subtitle">
            Our process is built for busy teams who want quality without the wait--simple, smooth, and stress-free.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => {
            const IconComponent = step.Icon;
            return (
              <div key={index} className="process-step-card">
                <div className="process-step-icon-wrapper">
                  <IconComponent className="process-step-icon" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
