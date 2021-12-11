import React from 'react';

const Accordion = ({ title, children }) => {
  return (
    <section>
      <details className="space-y-2">
        <summary className="focus:outline-none focus-visible:ring-2">
          {title}
        </summary>
        <p className="space-y-2">{children}</p>
      </details>
    </section>
  );
};

export default Accordion;
